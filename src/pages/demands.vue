<template>
  <div>
    <v-list two-line>

      <v-list-tile
          :key="index"
          @click="expand(item)"
          v-for="(item, index) in demands"
      >
        <v-list-tile-content>
          <v-list-tile-title v-html="item.subject"></v-list-tile-title>
          <v-list-tile-sub-title>
            <v-flex align-center>
              <v-icon small>
                access_time
              </v-icon>
              {{item.after | localDateTime}}
            </v-flex>
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-avatar>
          <v-icon v-if="item.status === 'new'">fiber_new</v-icon>
          <v-icon v-if="item.status === 'success'">thumb_up</v-icon>
          <v-icon v-if="item.status === 'fail'">thumb_down</v-icon>
        </v-list-tile-avatar>
      </v-list-tile>
    </v-list>
    <v-btn
        fab
        dark
        right
        bottom
        large
        fixed class="bottom-fab"
        color="secondary"
        @click="createDemand"
    >
      <v-icon>
        add
      </v-icon>
    </v-btn>
    <v-dialog
        v-model="popup"
    >
      <v-toolbar dark>
        <v-toolbar-title>Просмотр заявки</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            icon
            @click="closePopup()"
        >
          <v-icon>clear</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card
        v-touch="{
          left: () => swipe('left'),
          right: () => swipe('light')
        }"
      >
        <v-card-text @click="closePopup()">
          <div v-if="expanded" class="ma-4" style="min-height:200px;">
            <div class="text-xs-right">
              <v-icon v-if="expanded.status === 'new'">fiber_new</v-icon>
              <v-icon v-if="expanded.status === 'success'">thumb_up</v-icon>
              <v-icon v-if="expanded.status === 'fail'">thumb_down</v-icon>
              <b>{{expanded.status | status }}</b>
            </div>
            <v-icon small>
              access_time
            </v-icon>
            {{expanded.after | localDateTime}}
            <div v-html="expanded.subject" />
            <div v-html="expanded.body" />
            <div>Заявка подана: {{expanded.at | dateTime}}</div>
            <template v-if="status_history.length">
              <v-divider class="my-2"></v-divider>
              <strong>История рассмотрения</strong>
              <p v-for="(item,index) in status_history">
                {{item.at | localDateTime}}
                {{item.status | status }}
                {{item.by}}
              </p>
            </template>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <demand-editor ref="editor"></demand-editor>
  </div>
</template>
<style>
  .bottom-fab {
    bottom: 80px !important;
  }
</style>
<script type="text/babel">
  import Api from '@/api'
  import Formatting from '@/traits/formatting-trait'
  import DemandEditor from '@/pages/create-demand.vue'
  export default {
    name: 'DemandsPage',
    mixins: [Formatting],
    data () {
      return {
        demands: [],
        expanded: {},
        status_history: [],
        popup: false
      }
    },
    filters: {
      status (s) {
        switch (s) {
          case 'new':
            return 'новая'
          case 'success':
            return 'одобрена'
          case 'fail':
            return 'отклонена'
          case 'assignment':
            return 'на рассмотрении'
          case 'progress':
            return 'принимаются меры'
          case 'complete':
            return 'меры приняты'
        }
      }
    },
    computed: {
      filter () {
        return ['demand']
      }
    },
    mounted () {
      this.fetch()
      /*
      const x = await Api.rest({ url: 'user-profile' })
      this.message = x.message
      console.log(x)
      */
    },
    methods: {
      async fetch () {
        let response = await Api.rest({
          url: 'my-demands'
        })
        this.demands = response.data
      },
      expand (item) {
        this.expanded = item
        try {
          if (this.expanded.status_history) {
            this.status_history = JSON.parse(this.expanded.status_history)
          } else {
            this.status_history = []
          }
        } catch (error) {
          this.status_history = []
        }
        this.popup = true
      },
      createDemand () {
        this.$refs.editor.create((id, row) => {
          console.log(id, row)
          this.fetch()
        })
      },
      closePopup () {
        this.popup = !this.popup
      },
      swipe (dir) {
        if (dir === 'left') {
          this.closePopup()
        }
      }
    },
    components: {
      DemandEditor
    }
  }
</script>
