<template>
  <div id="vscode-app" :class="{ 'vscode-app-is-fullscreen': isFullScreen }">
    <TaskBar />
    <main class="vscode-appbody">
      <RoutesBar />
      <SidebarRouteView />

      <div class="vscode-main-container">
        <AppDocuments />
        <TerminalBar />
      </div>
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTemplateStore } from '@/stores/template'
import TaskBar from '@/components/taskbar/TaskBar.vue'
import RoutesBar from '@/components/sidebar/routesbar/RoutesBar.vue'
import SidebarRouteView from '@/components/sidebar/routerviewbar/SidebarRouteView.vue'
import AppDocuments from '@/components/app-documents/AppDocuments.vue'
import TerminalBar from '@/components/terminalbar/TerminalBar.vue'
import FooterBar from '@/components/footerbar/FooterBar.vue'

const templateStore = useTemplateStore()
const isFullScreen = computed(() => templateStore.vsCodeConfig.isFullScreen)
// const isOpen = computed(() => templateStore.vsCodeConfig.isOpen)
</script>

<style>
#vscode-app {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 1600px;
  max-width: 100%;
  overflow: auto;
  align-self: center;
  padding: 20px;

  transition:
    width 0.15s ease-out,
    height 0.15s ease-out,
    transform 0.12s ease-out;
}

.vscode-app-is-fullscreen {
  width: 100% !important;
  height: 100% !important;
  padding: 5px !important;
  box-shadow: none;
}

.vscode-appbody {
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: 100%;
  width: 100%;
  background-color: var(--vscode-background);
}

.vscode-main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>
