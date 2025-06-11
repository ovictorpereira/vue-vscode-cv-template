import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FloatingVue, {
  themes: {
    'custom-tooltip': {
      $extend: 'tooltip',
      $resetCss: true,
      popperClass: 'custom-popper-class',
      delay: {
        show: 500,
        hide: 100,
      },
    },
  },
})

app.mount('#app')
