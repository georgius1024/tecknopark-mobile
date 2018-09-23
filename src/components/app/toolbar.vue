<template>
  <v-toolbar app color="primary" class="main-toolbar" dark prominent>
      <!--
      <v-toolbar-side-icon
        @click="$emit('input', !value)"
      />
      -->

    <v-toolbar-title>
      <router-link :to="{name: 'Index'}">
        <img src="@/assets/logo.png" class="logo">
      </router-link>
    </v-toolbar-title>

    <v-toolbar-title class="mx-0">{{config.APP_NAME}}</v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items class="ml-4">
      <v-menu offset-y v-if="isAuthenticated">
        <v-btn
          flat
          small
          slot="activator"
        >
          <v-icon>
            settings
          </v-icon>
          <v-icon>arrow_drop_down</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile :to="{name: 'Profile'}">
            <v-list-tile-title>Профайл</v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{name: 'ChangePassword'}">
            <v-list-tile-title>Сменить пароль</v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{name: 'Logout'}">
            <v-list-tile-title>Выйти</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn
        flat
        :to="{name: 'Login'}"
        v-else
      >
        <span>
          Войти
        </span>
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>
<style>
  .main-toolbar {
    padding-bottom: 1px;
  }
  .main-toolbar .v-toolbar__title {
    min-width: 64px !important;
  }
  .main-toolbar .logo {
    margin-top: 8px;
    max-height: 50px !important;
    max-width: 50px !important;
    width: auto;
  }

</style>
<script type="text/babel">
  import config from '@/config'
  import {mapGetters} from 'vuex'
  export default {
    name: 'Toolbar',
    props: {
      value: {
        required: true
      }
    },
    computed: {
      config () {
        return config
      },
      hasMenu () {
        return Array.isArray(this.items) && this.items.length
      },
      menuItems () {
        return this.items
      },
      ...mapGetters('account', [
        'user',
        'isAuthenticated'
      ]),
      ...mapGetters([
      ])
    }
  }
</script>
