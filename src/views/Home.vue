<template lang='pug'>
  .home
    img(alt='Vue logo' src='../assets/logo.png')
    hello-world(msg='Welcome to Your Vue.js App')
</template>

<script lang='ts'>
// @ is an alias to /src
import HelloWorld from './HelloWorld.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue { }
</script>
