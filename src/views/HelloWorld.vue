<template lang='pug'>
v-container
  v-row.text-center
    v-col(cols='12')
      v-img.my-3(src='../assets/logo.svg' contain='' height='200')
    v-col.mb-4
      h1.display-2.font-weight-bold.mb-3
        | Welcome to Vuetify
      p.subheading.font-weight-regular
        | For help and collaboration with other Vuetify developers,
        br
        | please join our online
        a(href='https://community.vuetifyjs.com' target='_blank') Discord Community
    v-col.mb-5(cols='12')
      h2.headline.font-weight-bold.mb-3
        | What&apos;s next?
      v-row(justify='center')
        a.subheading.mx-3(v-for='(next, i) in whatsNext' :key='i' :href='next.href' target='_blank')
          | {{ next.text }}
    v-col.mb-5(cols='12')
      h2.headline.font-weight-bold.mb-3
        | Important Links
      v-row(justify='center')
        a.subheading.mx-3(v-for='(link, i) in importantLinks' :key='i' :href='link.href' target='_blank')
          | {{ link.text }}
    v-col.mb-5(cols='12')
      h2.headline.font-weight-bold.mb-3
        | Ecosystem
      v-row(justify='center')
        a.subheading.mx-3(v-for='(eco, i) in ecosystem' :key='i' :href='eco.href' target='_blank')
          | {{ eco.text }}

</template>

<script lang='ts'>
import { VContent, VRow, VCol, VImg } from 'vuetify/lib'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    VContent, VRow, VCol, VImg,
  }
})
export default class HelloWorld extends Vue {
  ecosystem = [
    {
      text: 'vuetify-loader',
      href: 'https://github.com/vuetifyjs/vuetify-loader'
    },
    {
      text: 'github',
      href: 'https://github.com/vuetifyjs/vuetify'
    },
    {
      text: 'awesome-vuetify',
      href: 'https://github.com/vuetifyjs/awesome-vuetify'
    }
  ]
  importantLinks = [
    {
      text: 'Documentation',
      href: 'https://vuetifyjs.com'
    },
    {
      text: 'Chat',
      href: 'https://community.vuetifyjs.com'
    },
    {
      text: 'Made with Vuetify',
      href: 'https://madewithvuejs.com/vuetify'
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/vuetifyjs'
    },
    {
      text: 'Articles',
      href: 'https://medium.com/vuetify'
    }
  ]
  whatsNext = [
    {
      text: 'Explore components',
      href: 'https://vuetifyjs.com/components/api-explorer'
    },
    {
      text: 'Select a layout',
      href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
    },
    {
      text: 'Frequently Asked Questions',
      href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
    }
  ]
}
</script>
