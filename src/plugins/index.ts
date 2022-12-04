/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import { vuetifyApp } from './vuetify'
import { router } from './router'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app.use(vuetifyApp)
  app.use(router)
}
