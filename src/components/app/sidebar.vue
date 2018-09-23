<template>
  <v-navigation-drawer
    class="main-sidebar"
    transition="scale-transition"
    temporary
    clipped
    fixed
    app
    v-model="drawer"
    @input="emitInput"
  >
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="item.id"
        >
          <v-subheader v-if="item.heading">
            {{ item.heading }}
          </v-subheader>
        </v-layout>
        <v-list-group v-else-if="item.children" v-model="item.model" no-action>
          <v-list-tile slot="activator" @click="">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
            <!--
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
            -->
          </v-list-tile>
          <v-list-tile
            v-for="child in item.children"
            :key="child.id"
            :to="child.to"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="child.icon">
              <v-icon :color="child.icon_color">{{ child.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
          v-else
          :to="item.to"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action  v-if="item.icon">
            <v-icon :color="item.icon_color">{{ item.icon }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<style>
  .main-sidebar .list__group__items--no-action .list__tile {
    padding-left: 36px !important;
  }
</style>
<script type="text/babel">
  export default {
    name: 'Sidebar',
    data () {
      return {
        drawer: null
      }
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      value: {
        required: true
      }
    },
    computed: {
    },
    methods: {
      emitInput (value) {
        this.$emit('input', value)
      },
      toggle (value) {
        this.drawer = value
      }
    }
  }
</script>

