<template>
  <div id="app" v-cloak>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  <%_ if (options.useRem) { _%>
  created(){
    this.setRem(document, window)
  },
  methods: {
    setRem(doc, win) {
      var userWebsetFont = getComputedStyle(doc.documentElement, false)[
        'fontSize'
      ]
      var rate = parseFloat(userWebsetFont) / 16
      var recalc = function() {
        var docEl = doc.documentElement
        var clientWidth = docEl.clientWidth
        if (!clientWidth) return
        var fontSize = (100 * (clientWidth / 375)) / rate
        if (fontSize > 200) {
          fontSize = 200
        }
        fontSize += 'px'
        docEl.style.fontSize = fontSize
      }
      if (!doc.addEventListener) return
      var resizeEvt =
        'orientationchange' in window ? 'orientationchange' : 'resize'
      win.addEventListener(resizeEvt, recalc, false)
      doc.addEventListener('DOMContentLoaded', recalc, false)
    }
  }
  <%_ } _%>
}
</script>

<style lang="scss">
@import '@/css/base.scss';
</style>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  font-size: 16px;
}
</style>
