import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './styles/fonts.css'
import './styles/theme.css'
import { initialMode } from './theme'
import App from './App.vue'

const vuetify = createVuetify({
  theme: {
    defaultTheme: initialMode(),
    themes: {
      light: {
        dark: false,
        colors: {
          // primary stays Vuetify's default blue (#1867C0)
          secondary: '#EF913D', // orange accent: icons/borders/fills only (fails contrast as text on light bg)
          'on-secondary': '#1F1F1F',
          background: '#F4F5F5',
          surface: '#F4F5F5',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#6AA8F7', // lighter blue for contrast on dark
          'on-primary': '#0B1A2E',
          secondary: '#EF913D',
          'on-secondary': '#1F1F1F',
          background: '#121416',
          surface: '#121416',
          'on-background': '#E8EAED',
          'on-surface': '#E8EAED',
        },
      },
    },
  },
  defaults: {
    VBtn: { rounded: 'pill' },
  },
})

createApp(App).use(vuetify).mount('#app')
