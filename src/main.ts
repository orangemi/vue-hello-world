/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp, h, provide } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp({
  render:() => h(App as any),
})

registerPlugins(app)

app.mount('#app')
