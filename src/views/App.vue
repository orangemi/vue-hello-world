<template lang='pug'>
v-app
  v-app-bar(app='' color='primary' dark='')
    .d-flex.align-center
      v-img.shrink.mr-2(
        alt='Vuetify Logo'
        contain=''
        src='https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png'
        transition='scale-transition'
        width='40'
      )
        v-img.shrink.mt-1.hidden-sm-and-down(
          alt='Vuetify Name'
          contain=''
          min-width='100'
          src='https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png'
          width='100'
        )

    v-spacer
    v-btn(href='https://github.com/vuetifyjs/vuetify/releases/latest' target='_blank' text='')
      span.mr-2 Latest Release
      v-icon mdi-open-in-new

  v-main
    hello-world
</template>

<script lang='ts'>
import { VApp, VImg, VAppBar, VSpacer, VIcon, VBtn } from 'vuetify/lib'
import { Vue, Component, Prop } from 'vue-property-decorator'
import HelloWorld from "./HelloWorld.vue"

@Component({
  components: {
    HelloWorld,
    VApp,
    VImg,
    VAppBar,
    VSpacer,
    VIcon,
    VBtn,
  }
})
export default class App extends Vue { }
</script>
