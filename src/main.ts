import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './styles/fonts.css'
import App from './App.vue'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  defaults: {
    global: {
      font: { family: 'Inter' },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
