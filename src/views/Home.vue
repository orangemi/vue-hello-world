<template lang='pug'>
v-container.home
  v-row.text-center
    v-col(cols='12')
      v-img.my-3(alt='Vue logo' src='../assets/logo.png' contain height='200')
  v-row.text-center
    v-col(cols='12')
      h1 Welcome Home
</template>

<script lang='ts'>
// @ is an alias to /src
import { VApp, VImg, VAppBar, VSpacer, VIcon, VBtn, VContainer } from 'vuetify/lib'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    VContainer,
  }
})
export default class Home extends Vue { }
</script>
