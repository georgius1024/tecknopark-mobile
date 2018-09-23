<template>
  <v-flex md6 offset-md3 xs12 class="mt-3">
    <v-card>
      <panel-title caption="Профайл" close></panel-title>
      <v-card-text>
        <v-form ref="profile" v-model="valid">
          <v-layout wrap>
            <v-flex xs12 sm6 md8 class="px-2">
              <v-text-field
                  label="Имя, фамилия, отчество"
                  v-model="profile.username"
                  required
                  counter="80"
                  :rules="[validation.fieldIsRequired, validation.maximumLength(250)]"
                  :error-messages="errors('username')"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4 class="px-2">
              <v-text-field
                  label="Дата рождения"
                  mask="####-##-##"
                  v-model.trim="profile.birth_date"
              />
            </v-flex>
          </v-layout>
          <v-text-field
              label="Компания"
              v-model.trim="profile.company"
              counter="255"
              :error-messages="errors('company')"
              :rules="[
                          validation.fieldIsRequired,
                          validation.maximumLength(255)]"
              autofocus
          />
          <v-text-field
              label="Должность"
              v-model.trim="profile.position"
              counter="255"
              :error-messages="errors('position')"
              :rules="[
                          validation.fieldIsRequired,
                          validation.maximumLength(255)]"
              autofocus
          />
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field
                  label="Email"
                  v-model="profile.email"
                  required
                  :rules="[validation.emailMustBeValid]"
                  :error-messages="errors('email')"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                  label="Телефон"
                  placeholder="8 (999) 765 - 43 - 21"
                  hint="полный номер телефона через 8"
                  name="phone"
                  v-model.trim="profile.phone"
                  counter="11"
                  mask="# (###) ### - ## - ##"
                  :error-messages="errors('phone')"
                  :rules="[
                              validation.fieldIsRequired,
                              validation.maximumLength(12)]"
              />
            </v-flex>
          </v-layout>
          <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
              <v-text-field
                  label="Марка машины"
                  name="car_brand"
                  v-model.trim="profile.car_brand"
                  counter="60"
                  :error-messages="errors('car_brand')"
              />
            </v-flex>
            <v-flex xs12 sm6 class="px-2">
              <v-text-field
                  label="Номер машины"
                  name="car_no"
                  v-model.trim="profile.car_no"
                  counter="10"
                  :error-messages="errors('car_no')"
              />
            </v-flex>
          </v-layout>

          <v-textarea
              label="О себе"
              v-model="profile.about"
              counter="250"
              multi-line
              :rules="[validation.maximumLength(250)]"
              :error-messages="errors('about')"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-btn block color="primary" @click="updateProfile">
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script type="text/babel">
  import _ from 'lodash'
  import { mapMutations } from 'vuex'
  import Api from '@/api'
  import validation from '@/lib/validation-rules.js'
  import PanelTitle from '@/components/panel-title.vue'

  export default {
    name: 'Profile',
    data () {
      return {
        profile: {
          username: '',
          birth_date: '',
          company: '',
          position: '',
          email: '',
          phone: '',
          car_brand: '',
          car_no: '',
          about: ''
        },
        validation,
        valid: false,
        errorsData: []
      }
    },
    mounted () {
      this.getProfile()
    },
    methods: {
      errors (field) {
        if (Array.isArray(this.errorsData)) {
          return this.errorsData
            .filter(e => {
              return e.field === field
            })
            .map(e => {
              return e.message
            })
        }
      },
      clearErrors () {
        this.errorsData = []
      },
      gatherErrors (error) {
        if (_.has(error, 'response.data.errors', [])) {
          this.errorsData = _.get(error, 'response.data.errors', [])
        } else {
          this.errorsData = [
            {
              field: 'email',
              message: this.message.text
            }
          ]
        }
      },
      getProfile () {
        Api.rest({
          url: 'user-profile',
          method: 'get'
        })
          .then(response => {
            this.profile = response.data
          })
      },
      updateProfile () {
        this.errorsData = []
        this.$refs.profile.validate()
        if (!this.valid) {
          this.setError('Пожалуйста, заполните форму правильно!')
          return
        }
        Api.rest({
          url: 'user-profile',
          method: 'post',
          data: this.profile
        })
          .then(response => {
            this.setUser(response.data)
            this.$router.push({name: 'Index'})
          })
          .catch(error => this.gatherErrors(error))
      },
      ...mapMutations('account', [
        'setUser'
      ]),
      ...mapMutations([
        'setError'
      ])
    },
    components: {
      PanelTitle
    }
  }
</script>
