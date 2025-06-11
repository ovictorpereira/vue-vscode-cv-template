import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('template', () => {
  const terminalIsVisible = ref<boolean>(true)
  const toggleTerminal = (): void => {
    terminalIsVisible.value = !terminalIsVisible.value
  }

  const sidebarIsVisible = ref<boolean>(true)
  const toggleSidebar = (): void => {
    sidebarIsVisible.value = !sidebarIsVisible.value
  }

  return { terminalIsVisible, sidebarIsVisible, toggleTerminal, toggleSidebar }
})
