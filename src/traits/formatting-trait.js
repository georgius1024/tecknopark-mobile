/* Позволяет использовать следующие фильтры:
  dateTime
  date
  time
  localDateTime
  localDate
  localTime
  moscowDateTime
  moscowDate
  moscowTime
  duration
  bytes
  shorten20
  shorten40
  shorten60
  shorten80
*/
'use strict'
import { shortenStr, UtcToLocal, UtcToMoscow, formatDuration, formatBytes } from '@/lib/helpers'
const moment = require('moment')
require('moment-timezone')

function getMonthDateName (month) {
  const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'октября',
    'сентября',
    'ноября',
    'декабря'
  ]
  return monthNames[month]
}
function getMonthName (month) {
  const monthNames = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ]
  return monthNames[month]
}

export default {
  filters: {
    dateTime (value) {
      if (value) {
        return moment(value, 'YYYY-MM-DD HH:mm:SS').format('DD.MM.YYYY HH:mm')
      } else {
        return ''
      }
    },
    date (value) {
      if (value) {
        return moment(value, 'YYYY-MM-DD HH:mm:SS').format('DD.MM.YYYY')
      } else {
        return ''
      }
    },
    literalDate (value) {
      let m = moment(value)
      let result = []
      result.push(m.format('DD'))
      result.push(getMonthDateName(m.month()))
      result.push(m.format('YYYY'))
      return result.join(' ')
    },
    time (value) {
      if (value) {
        return moment(value).format('HH:mm')
      } else {
        return ''
      }
    },
    localDateTime (value) {
      if (value) {
        return UtcToLocal(value).format('DD.MM.YYYY HH:mm')
      } else {
        return ''
      }
    },
    localDate (value) {
      if (value) {
        return UtcToLocal(value).format('DD.MM.YYYY')
      } else {
        return ''
      }
    },
    localTime (value) {
      if (value) {
        return UtcToLocal(value).format('HH:mm')
      } else {
        return ''
      }
    },
    moscowDateTime (value) {
      if (value) {
        return UtcToMoscow(value).format('DD.MM.YYYY HH:mm')
      } else {
        return ''
      }
    },
    moscowDate (value) {
      if (value) {
        return UtcToMoscow(value).format('DD.MM.YYYY')
      } else {
        return ''
      }
    },
    moscowTime (value) {
      if (value) {
        return UtcToMoscow(value).format('HH:mm')
      } else {
        return ''
      }
    },
    duration (value) {
      if (value) {
        return formatDuration(value)
      } else {
        return ''
      }
    },
    bytes (value) {
      return formatBytes(value)
    },
    shorten20 (value) {
      return shortenStr(value, 20)
    },
    shorten40 (value) {
      return shortenStr(value, 40)
    },
    shorten60 (value) {
      return shortenStr(value, 60)
    },
    shorten80 (value) {
      return shortenStr(value, 80)
    }
  },
  methods: {
    getMonthDateName (month) {
      return getMonthDateName(month)
    },
    getMonthName (month) {
      return getMonthName(month)
    }
  }
}
