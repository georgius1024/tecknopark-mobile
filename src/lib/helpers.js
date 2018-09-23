/* eslint-disable indent */
/* eslint-disable semi */

import moment from 'moment-timezone'
import _ from 'lodash'

export function UtcToLocal (value) {
  return moment.utc(value, 'YYYY-MM-DD HH:mm:SS').local()
}

export function UtcToMoscow (value) {
    return moment.tz(value, 'UTC').tz('Europe/Moscow')
}

export function LocalToUtc (value) {
    return moment(value).utc()
}

export function formatDateTime (value) {
    if (value) {
        return UtcToLocal(value).format('DD.MM.YYYY HH:mm')
    } else {
        return ''
    }
}

export function formatDate (value) {
    if (value) {
        return moment(value).format('DD.MM.YYYY')
    } else {
        return ''
    }
}

export function formatTime (value) {
    if (value) {
        return UtcToLocal(value).format('HH:mm:ss')
    } else {
        return ''
    }
}

export function formatDuration (value) {
    if (value) {
        let dd = Math.floor(value / (3600 * 24))
        let hh = Math.floor(value / 3600 % 24)
        let mm = Math.floor(value % 3600 / 60)
        let ss = Math.floor(value % 60)

        let result = []
        if (dd) {
            result.push(dd + ' сут')
        }
        if (hh) {
            result.push(hh + ' час')
        }
        if (mm) {
            result.push(mm + ' мин')
        }
        if (ss) {
            result.push(ss + ' сек')
        }
        return result.join(' ')
    } else {
        return ''
    }
}

export function zeroPad (value, len) {
    return _.padStart(value, len, '0')
}

export function shortDuration (value) {
    if (value) {
        let hh = Math.floor(value / 3600)
        let mm = Math.floor(value % 3600 / 60)
        let ss = Math.floor(value % 60)

        let result = []
        if (hh) {
            result.push(zeroPad(hh, 2))
        }
        result.push(zeroPad(mm, 2))
        result.push(zeroPad(ss, 2))
        return result.join(':')
    } else {
        return '00:00'
    }
}

export function shortenHtmlStr (value, len) {
    let str = String(value)
    return (str.length > len) ? str.substr(0, len) + '&hellip;' : str
}

export function shortenStr (value, len) {
    let str = String(value)
    return (str.length > len) ? str.substr(0, len) + '...' : str
}

export function addTrailingSlash (url) {
    return String(url).replace(/\/?$/, '/')
}

export function removeTrailingSlash (url) {
    return url.replace(/\/?$/, '')
}

export function formatBytes (a, b) {
    a = parseFloat(a)
    if (a === 0) return '0 Байт'
    let c = 1024
    let d = b || 2
    let e = ['Байт', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let f = Math.floor(Math.log(a) / Math.log(c))
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}

export function shuffle (array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
}

export function randomString (length) {
    var chars, result
    length = length || 10
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    result = ''
    for (var i = 0, n = chars.length; i < length; ++i) {
        result += chars.charAt(Math.floor(Math.random() * n))
    }
    return result
}

export function stripTags (str) {
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    return str.replace(/<\/?[^>]+>/gi, '');
}

export function highlightClass (text, search, hl) {
  return String(text).replace(new RegExp(search, 'ig'), `<span class="${hl}">$&</span>`)
}

export function highlightColor (text, search, hl) {
  return String(text).replace(new RegExp(search, 'ig'), `<span color="${hl}">$&</span>`)
}
