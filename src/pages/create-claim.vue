<template>
  <v-dialog v-model="modalVisible">
    <v-card
        class="layout column editor-main-card"
        v-if="modalVisible"
        v-touch="{
          left: () => swipe('left'),
          right: () => swipe('light')
        }"
    >
      <v-toolbar dark>
        <v-toolbar-title>Подача жалобы</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            icon
            @click="modalCanHide"
        >
          <v-icon>clear</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="editor-main-card-body">
        <v-form ref="form" v-model="valid">
          <v-select
              label="Жалоба на"
              required
              ref="focus"
              :items="subjects"
              v-model="form.subject"
              autofocus
          ></v-select>
          <v-textarea
              label="Описание проблемы"
              name="body"
              v-model.trim="form.body"
              counter="255"
              :rules="[
                validation.fieldIsRequired,
                validation.maximumLength(255)
                ]"
              :error-messages="errors('body')"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="primary"
            block
            large
            @click="submit"
        >Подать жалобу</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script type="text/babel">
  import Vue from 'vue'
  import { mapGetters, mapMutations } from 'vuex'
  import ModalTrait from '@/traits/modal-trait.js'
  import validation from '@/lib/validation-rules.js'
  import EditorApiCallsTrait from '@/traits/editor-api-calls-trait.vue'
  import DateTimeInput from '@/components/date-time-input'
  export default {
    name: 'ClaimEditorPage',
    mixins: [
      EditorApiCallsTrait,
      ModalTrait
    ],
    data () {
      return {
        active: 0,
        form: {
          id: '',
          subject: '',
          type: 'claim',
          body: '',
          from: 0
          // after: ''
        },
        valid: false,
        confirmDelete: false,
        title: '',
        at_menu: false,
        validation
      }
    },
    props: {
    },
    computed: {
      subjects () {
        return [
          'Электропитание',
          'Туалеты',
          'Двери, замки',
          'Лифты'
        ]
      },
      ...mapGetters([
        'config',
        'user',
        'token'
      ])
    },
    created () {
      this.primaryFieldName = 'id'
      this.apiEntry = 'my-ticket'
    },
    mounted () {
      this.action = 'create'
    },
    methods: {
      onBeforeShow () {
        this.active = 0
        this.clearForm()
        this.loadData()
          .then(data => {
            console.log(this.action)
            if (this.action === 'create') {
              this.form.subject = this.subjects[0]
              // this.form.after = moment().add(1, 'day').utc().format('YYYY-MM-DD 06:00')
            } else {
              // Vue.set(this.after, 'from', moment(this.form.at).utc().format('YYYY-MM-DD HH:mm:ss'))
            }

            this.updateOriginalData()
            Vue.nextTick(() => {
              this.$refs.focus.focus()
            })
          })
      },
      onHideQuery () {
        return !this.formIsDirty || this.$modalAskUser('Выйти без сохранения?')
      },
      create (callback) {
        this.title = 'Создание заявки'
        this.callback = callback
        this.primaryId = ''
        this.action = 'create'
        this.modalShow()
      },
      update (id, callback) {
        this.title = 'Редактор заявки'
        this.callback = callback
        this.primaryId = id
        this.action = 'update'
        this.modalShow()
      },
      submit () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }
        this.form.from = this.user.id
        this.submitForm()
          .then(data => {
            this.done(this.primaryId)
          })
      },
      done (id) {
        this.modalHide()
        this.callback(id, this.form)
      },
      swipe (dir) {
        if (dir === 'left') {
          this.modalCanHide()
        }
      },
      ...mapMutations([
        'setMessage'
      ])
    },
    components: {
      DateTimeInput
    }
  }
</script>

