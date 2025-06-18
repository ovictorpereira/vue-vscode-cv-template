import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { SidebarConfig, TerminalConfig, ConfigKey } from '@/types'

export const useTemplateStore = defineStore('template', () => {
  const terminalConfig = ref<TerminalConfig>({
    height: 200,
    isVisible: true,
  })

  const sidebarConfig = ref<SidebarConfig>({
    width: 300,
    isVisible: true,
  })

  const toggleVisibility = (key: ConfigKey) => {
    if (key === 'sidebar') sidebarConfig.value.isVisible = !sidebarConfig.value.isVisible
    if (key === 'terminal') terminalConfig.value.isVisible = !terminalConfig.value.isVisible
  }

  const setVisibility = (key: ConfigKey, value: boolean) => {
    if (key === 'sidebar') sidebarConfig.value.isVisible = value
    if (key === 'terminal') terminalConfig.value.isVisible = value
  }

  const setTerminalHeight = (height: number) => {
    terminalConfig.value.height = height
  }

  const setSidebarWidth = (width: number) => {
    sidebarConfig.value.width = width
  }

  return {
    terminalConfig,
    sidebarConfig,
    toggleVisibility,
    setVisibility,
    setTerminalHeight,
    setSidebarWidth,
  }
})
