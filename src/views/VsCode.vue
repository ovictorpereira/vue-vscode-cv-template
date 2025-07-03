<template>
  <div
    id="vscode-app"
    :class="{
      'vscode-app-is-fullscreen': isFullScreen,
      'vscode-app-is-closed': !isOpen,
      'vscode-app-minimized': isMinimized,
    }"
  >
    <TitleBar />
    <div class="vscode-appbody">
      <aside class="vscode-aside-container" :class="{ 'sidebar-border': sidebarIsVisible }">
        <ActivityBar />
        <SidebarRouteView />
        <SidebarDragbar />
      </aside>

      <main class="vscode-main-container">
        <AppDocuments />
        <TerminalBar />
      </main>
    </div>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTemplateStore } from '@/stores/template'
import TitleBar from '@/components/titlebar/TitleBar.vue'
import ActivityBar from '@/components/activitybar/ActivityBar.vue'
import SidebarRouteView from '@/components/sidebar/SidebarRouteView.vue'
import SidebarDragbar from '@/components/sidebar/components/SidebarDragbar.vue'
import AppDocuments from '@/components/app-documents/AppDocuments.vue'
import TerminalBar from '@/components/terminalbar/TerminalBar.vue'
import FooterBar from '@/components/footerbar/FooterBar.vue'

const templateStore = useTemplateStore()
const isFullScreen = computed(() => templateStore.vsCodeConfig.isFullScreen)
const isOpen = computed(() => templateStore.vsCodeConfig.isOpen)
const isMinimized = computed(() => templateStore.vsCodeConfig.isMinimized)

const sidebarIsVisible = computed(() => templateStore.sidebarConfig.isVisible)
</script>

<style>
#vscode-app {
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 1600px;
  max-width: 100%;
  overflow: auto;
  align-self: center;
  z-index: 2;
  padding: 20px;
  transition:
    width 0.15s ease-out,
    height 0.15s ease-out,
    transform 0.3s cubic-bezier(0.2, 0.96, 0.34, 1),
    opacity 0.3s cubic-bezier(0.2, 0.96, 0.34, 1);

  opacity: 1;
  visibility: visible;
}

.vscode-app-is-fullscreen {
  width: 100% !important;
  height: 100% !important;
  padding: 5px !important;
  box-shadow: none;
}

.vscode-app-is-closed {
  opacity: 0 !important;
  visibility: hidden !important;
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease !important;
}

.vscode-app-minimized {
  opacity: 0 !important;
  visibility: hidden !important;
  transform: translateY(100vh) scale(0.3);
  transition:
    transform 0.3s cubic-bezier(0.2, 0.96, 0.34, 1),
    opacity 0.3s cubic-bezier(0.2, 0.96, 0.34, 1),
    visibility 0.3s !important;
}

.vscode-appbody {
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: 100%;
  width: 100%;
  background-color: var(--vscode-background);
  border-left: 1px solid var(--vscode-border);
  border-right: 1px solid var(--vscode-border);
  border-bottom: 1px solid var(--vscode-border);
}

.vscode-aside-container {
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: 100%;
  overflow: auto;
}

.sidebar-border {
  border-right: 1px solid var(--vscode-border);
}

.vscode-main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>
