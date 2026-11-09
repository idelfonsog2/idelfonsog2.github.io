import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './styles/fonts.css'
import './styles/theme.css'
import App from './App.vue'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          // primary stays Vuetify's default blue (#1867C0)
          secondary: '#EF913D', // orange accent — icons/borders/fills only (fails contrast as text on light bg)
          'on-secondary': '#1F1F1F',
          background: '#F4F5F5',
          surface: '#F4F5F5',
        },
      },
    },
  },
  defaults: {
    VBtn: { rounded: 'pill' },
  },
})

createApp(App).use(vuetify).mount('#app')
