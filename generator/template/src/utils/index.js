/**
 * provide some usefull functions
 */

import { wxShare } from '@/modules/wechat'

/**
 * set og:meta title
 * @param {Object} param {title,description,image} the item that you want to share
 */
function setMetaOg(param = {}) {
  var ogMeta = {
    title: param.title,
    description: param.desc,
    image: param.imgUrl
  }

  param.title && (document.title = param.title)
  for (let i in ogMeta) {
    if (document.querySelector(`meta[property="og:${i}"]`) && ogMeta[i]) {
      document.querySelector(`meta[property="og:${i}"]`).content = ogMeta[i]
    }
  }

  wxShare(param)
}

/**
 * get the query value from location.href
 *
 * @param {String} name
 * @returns return null for no result and value for the search value
 */
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

/**
 * get cookie
 *
 * @returns cookie
 */
function getCookie() {
  for (var a = document.cookie.split(';'), i = 0; i < a.length; i++) {
    if (a[i].match(/cookie/i)) {
      var cookie = a[i].split('=')[1]
      return cookie
    }
  }
}

const UA = window.navigator.userAgent.toLowerCase()
const isAndroid = UA && UA.indexOf('android') > 0
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
const isInWx = /MicroMessenger/i.test(window.navigator.userAgent)

export default {
  setMetaOg,
  getCookie,
  getQueryString,
  UA,
  isAndroid,
  isIOS,
  isInWx
}
