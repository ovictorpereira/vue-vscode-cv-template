import { ref } from 'vue'
import { defineStore } from 'pinia'

import type {
  VsCodeConfig,
  SidebarConfig,
  TerminalConfig,
  ConfigKey,
  TerminalTabOption,
} from '@/types'

export const useTemplateStore = defineStore('template', () => {
  const vsCodeConfig = ref<VsCodeConfig>({
    isOpen: true,
    isMinimized: false,
    isFullScreen: false,
  })

  const toggleVsCodeIsOpen = () => {
    if (!vsCodeConfig.value.isMinimized) {
      vsCodeConfig.value.isOpen = !vsCodeConfig.value.isOpen
    } else {
      vsCodeConfig.value.isMinimized = false
    }
  }

  const toggleVsCodeMinimized = () => {
    if (vsCodeConfig.value.isOpen) {
      vsCodeConfig.value.isMinimized = !vsCodeConfig.value.isMinimized
    }
  }

  const terminalConfig = ref<TerminalConfig>({
    height: 240,
    isVisible: true,
    activeTab: 'terminal',
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

  const setTerminalActiveTab = (option: TerminalTabOption) => {
    terminalConfig.value.activeTab = option
  }

  const setSidebarWidth = (width: number) => {
    sidebarConfig.value.width = width
  }

  return {
    vsCodeConfig,
    toggleVsCodeIsOpen,
    toggleVsCodeMinimized,
    terminalConfig,
    sidebarConfig,
    toggleVisibility,
    setVisibility,
    setTerminalHeight,
    setTerminalActiveTab,
    setSidebarWidth,
  }
})
