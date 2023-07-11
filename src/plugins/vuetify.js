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
          primary: '#2680eb', // #E53935
          secondary: '#fc6060' //#FFCDD2
        }
      },
    },
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'outlined',
      rounded: false
    },
  },
})
