<template>
  <div>
    <v-list two-line>

      <v-list-tile
          :key="index"
          @click="showNews(item)"
          v-for="(item, index) in news"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{item.at | localDate }}</v-list-tile-title>
          <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
          <!--
          <v-list-tile-sub-title v-html="item.body"></v-list-tile-sub-title>
          -->
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-dialog
        v-model="popup"
    >
      <v-toolbar dark>
        <v-toolbar-title>Просмотр новости</v-toolbar-title>
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
            <div v-html="expanded.body" />
            <div v-if="expanded.link">
              <a :href="expanded.link" target="_blank">Подробнее</a>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
</template>
<script type="text/babel">
  import Api from '@/api'
  import Formatting from '@/traits/formatting-trait'
  // import LoremIpsum from '@/lib/lorem-ipsum'
  export default {
    name: 'IndexPage',
    mixins: [Formatting],
    data () {
      return {
        news: [],
        popup: false,
        expanded: {}
      }
    },
    computed: {
      /*
      news () {
        let result = []
        for (let i = 0; i < 10; i++) {
          result.push({
            id: i + 1,
            title: LoremIpsum.createPhrase(),
            body: LoremIpsum.createParagraph(1)
          })
        }
        return result
      }
      */
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
      fetch () {
        Api.rest({ url: 'my-news' })
          .then(response => {
            this.news = response.data
          })
      },
      showNews (item) {
        this.expanded = item
        this.popup = true
      },
      closePopup (item) {
        this.popup = false
      },
      swipe (dir) {
        if (dir === 'left') {
          this.closePopup()
        }
      }

    }
  }
</script>
