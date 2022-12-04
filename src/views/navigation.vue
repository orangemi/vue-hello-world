<template lang="pug">
div
  v-system-bar
    v-spacer
    v-icon mdi-square
  v-navigation-drawer
    v-sheet(color='grey-lighten-4' class='pa-4')
      v-avatar.mb-4(color='grey-darken-1' size='64')
    v-divider
    v-list
      v-list-item(link)
        template(v-slot:prepend)
          router-link(to="/")
            v-icon mdi-square
            v-list-item-title Home
      v-list-item(link)
        template(v-slot:prepend)
          router-link(to="/about")
            v-icon mdi-square
            v-list-item-title About Me
</template>