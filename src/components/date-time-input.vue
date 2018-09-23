<template>
  <v-layout row>
    <v-flex  class="mr-2">
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menuDate"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        :disabled="disabled"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          :label="label + ' (дата)'"
          :value="formatDate(value)"
          :rules="rules"
          :error-messages="errorMessages"
          :disabled="disabled"
          append-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker
          :value="datePart"
          :disabled="disabled"
          locale="ru"
          :first-day-of-week="1"
          scrollable
          actions
          @input="emitDate"
          >
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex class="ml-2">
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menuTime"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        :disabled="disabled"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          :label="label + ' (время)'"
          :value="formatTime(value)"
          :rules="rules"
          :error-messages="errorMessages"
          :disabled="disabled"
          append-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker
          :value="timePart"
          :disabled="disabled"
          format="24hr"
          @input="emitTime"
          >
        </v-time-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>
<script type="text/babel">
  import { UtcToLocal, LocalToUtc } from '@/lib/helpers'
  /*
  import moment from 'moment-timezone'
  function UtcToLocal (value) {
    return moment.utc(value, 'YYYY-MM-DD HH:mm:SS').local()
  }
  function LocalToUtc (value) {
    return moment(value).utc()
  }
  */

  export default {
    name: 'DateTimeInput',
    data () {
      return {
        menuDate: false,
        menuTime: false
      }
    },
    props: {
      label: {
        default: 'Дата'
      },
      value: {
        required: true
      },
      rules: {
        required: false
      },
      errorMessages: {
        required: false
      },
      disabled: {
        required: false
      }
    },
    computed: {
      datePart () {
        console.log(this.value, UtcToLocal(this.value).format('YYYY-MM-DD HH:mm:ss'), UtcToLocal(this.value).format('HH:mm'))
        return this.value ? UtcToLocal(this.value).format('YYYY-MM-DD') : ''
      },
      timePart () {
        return this.value ? UtcToLocal(this.value).format('HH:mm:ss') : ''
      }
    },
    methods: {
      emitValue (value) {
        if (!this.disabled) {
          this.$emit('input', LocalToUtc(value).format('YYYY-MM-DD HH:mm:ss'))
        }
      },
      emitDate (value) {
        console.log(value + ' ' + this.timePart, value)
        this.emitValue(value + ' ' + this.timePart)
      },
      emitTime (value) {
        console.log(this.datePart + ' ' + value, value)
        this.emitValue(this.datePart + ' ' + value)
      },
      formatDate () {
        return UtcToLocal(this.value).format('DD.MM.YY')
        // return moment(this.value).format('DD.MM.YY')
      },
      formatTime () {
        return UtcToLocal(this.value).format('HH:mm')
        // return moment(this.value).format('HH:mm')
      }
    },
    components: {
    }
  }
</script>
