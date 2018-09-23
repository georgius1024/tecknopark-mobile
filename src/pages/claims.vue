<template>
  <div>
    <v-list two-line>

      <v-list-tile
          :key="index"
          @click="expand(item)"
          v-for="(item, index) in claims"
      >
        <v-list-tile-content>
          <v-list-tile-title v-html="item.subject"></v-list-tile-title>
          <v-list-tile-sub-title>
            <v-flex align-center>
              <v-icon small>
                access_time
              </v-icon>
              {{item.at | localDateTime}}
            </v-flex>
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-avatar>
          <v-icon v-if="item.status === 'new'" class="mr-1">fiber_new</v-icon>
          <v-icon v-if="item.status === 'assignment'" class="mr-1">assignment</v-icon>
          <v-icon v-if="item.status === 'progress'" class="mr-1">autorenew</v-icon>
          <v-icon v-if="item.status === 'complete'" class="mr-1">assignment_turned_in</v-icon>
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
        @click="createClaim"
    >
      <v-icon>
        add
      </v-icon>
    </v-btn>
    <v-dialog
        v-model="popup"
    >
      <v-toolbar dark>
        <v-toolbar-title>Просмотр жалобы</v-toolbar-title>
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
          <div class="text-xs-right">
            <v-icon v-if="expanded.status === 'new'" class="mr-1" small>fiber_new</v-icon>
            <v-icon v-if="expanded.status === 'assignment'" class="mr-1" small>assignment</v-icon>
            <v-icon v-if="expanded.status === 'progress'" class="mr-1"small>autorenew</v-icon>
            <v-icon v-if="expanded.status === 'complete'" class="mr-1" small>assignment_turned_in</v-icon>

            <b>{{expanded.status | status }}</b>
          </div>
          <div v-if="expanded" class="ma-4" style="min-height:200px;">
            <div v-html="expanded.subject" />
            <div v-html="expanded.body" />
            <div>Жалоба подана: {{expanded.at | dateTime}}</div>
            <template v-if="status_history.length">
              <v-divider class="my-2"></v-divider>
              <strong>История рассмотрения</strong>
              <p v-for="(item,index) in status_history">
                {{item.at | localDateTime}}
                {{item.status | status}}
                {{item.by}}
              </p>
            </template>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <claim-editor ref="editor"></claim-editor>
  </div>
</template>
<style>
  .bottom-fab {
    bottom: 80px !important;
  }
</style>
<script type="text/babel">
  import Api from '@/api'
  import ClaimEditor from '@/pages/create-claim.vue'
  // import moment from 'moment-timezone'
  import Formatting from '@/traits/formatting-trait'
  import Vue from 'vue'

  export default {
    name: 'ClaimsPage',
    mixins: [Formatting],
    data () {
      return {
        claims: [],
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
        return ['claim']
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
          url: 'my-claims'
        })
        this.claims = response.data
      },
      expand (item) {
        console.log(item)
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
        Vue.nextTick(() => {
          this.popup = true
        })
      },
      createClaim () {
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
      ClaimEditor
    }
  }
</script>
