/*
 *
 * data:
 * events onBeforeShow
 * events onAfterShow
 * events onBeforeHide
 * events onAfterHide
 * events onHideQuery
 * Esc closes
 */

import Vue from 'vue'
import { randomString } from '@/lib/helpers.js'

export default {
  data () {
    return {
      modalVisible: false,
      modalId: randomString(32),
      lastIModalId: false
    }
  },
  computed: {
    $modalDefaultKeymap () {
      return {
        esc: {
          keydown: e => {
            if (this.modalIsTopmost()) {
              e.preventDefault()
              e.stopPropagation()
              this.modalCanHide()
            }
          }
        },
        'alt+x': {
          keydown: e => {
            if (this.modalIsTopmost()) {
              e.preventDefault()
              e.stopPropagation()
              this.modalCanHide()
            }
          }
        },
        'alt+s': {
          keydown: e => {
            if (this.modalIsTopmost()) {
              this.modalCanSave()
            }
          }
        }
      }
    },
    modalKeymap () {
      return this.$modalDefaultKeymap
    }
  },
  methods: {
    modalIsTopmost () {
      return window.$modalObjectId === this.modalId
    },
    $modalMakeTopmost () {
      this.lastIModalId = window.$modalObjectId
      window.$modalObjectId = this.modalId
    },
    $modalRestoreTopmost () {
      window.$modalObjectId = this.lastIModalId
    },
    $modalAskUser (matter) {
      return window.confirm(matter)
    },
    modalCanHide () {
      setTimeout(() => {
        this.modalHide(false)
      }, 10)
    },
    modalCanSave () {
      if (this.onSaveQuery) {
        this.onSaveQuery()
      }
    },
    modalHide (force = false) {
      if (this.modalVisible && !force) {
        // Спросить у пользователя
        if (this.onHideQuery) {
          if (!this.onHideQuery()) {
            return
          }
        }
      }
      if (this.onBeforeHide) {
        this.onBeforeHide()
      }
      this.modalVisible = false
      this.$modalRestoreTopmost()
      if (this.onAfterHide) {
        Vue.nextTick(() => {
          this.onAfterHide()
        })
      }
    },
    modalShow () {
      if (this.onBeforeShow) {
        this.onBeforeShow()
      }
      this.$modalMakeTopmost()
      this.modalVisible = true
      if (this.onAfterShow) {
        Vue.nextTick(() => {
          this.onAfterShow()
        })
      }
    }
  }
}
