<template>
  <v-bottom-nav
    :active.sync="bottomNav"
    :value="true"
    app
  >
    <v-btn
      color="secondary"
      flat
      value="news"
      exact
      :to="{name: 'Index'}"
    >
      <span>Новости</span>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn
      color="secondary"
      flat
      :to="{name: 'Demands'}"
      exact
      value="demands"
    >
      <span>Заявки</span>
      <v-icon>mdi-file-document-box</v-icon>
    </v-btn>

    <v-btn
      color="secondary"
      flat
      value="claims"
      :to="{name: 'Claims'}"
      exact
    >
      <span>Жалобы</span>
      <v-icon>mdi-alert</v-icon>
    </v-btn>
  </v-bottom-nav></template>
<style>
  .main-sidebar .list__group__items--no-action .list__tile {
    padding-left: 36px !important;
  }
</style>
<script type="text/babel">
  export default {
    name: 'BottomNav',
    data () {
      return {
        bottomNav: 'news'
      }
    }
  }
</script>

