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
          black: '#000',
          darknavy: '#304153',
          grey: '#5e7892',
          darkgrey: '#3c4d60',
          deepgrey: '#2c2f35',
          red: '#ec3838',
          violet: '#7868e5',
          pink: '#d45cf1',
          yellow: '#ff9100',
          green: '#5ec73f',
          lightblue: '#5c86f1',
          mint: '#31b8c8',
          aqua: '#33b0df',
          navy: '#3770bb',
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
