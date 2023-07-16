// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2680eb',
          secondary: '#fc6060',
          darkgrey: '#3c4d60',
          grey: '#5e7892',
          black: '#2c2f35',
        }
      },
    },
  },
  defaults: {
    VBtn: {
      flat: true,
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
})
