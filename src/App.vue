<template>
  <TaskBar />
  <main class="appbody">
    <RoutesBar />
    <SidebarRouteView />

    <div class="main-container">
      <AppDocuments />
      <TerminalBar />
    </div>
  </main>
  <FooterBar />
</template>

<script setup lang="ts">
import TaskBar from '@/components/taskbar/TaskBar.vue'
import RoutesBar from '@/components/sidebar/routesbar/RoutesBar.vue'
import SidebarRouteView from '@/components/sidebar/routerviewbar/SidebarRouteView.vue'
import AppDocuments from '@/components/app-documents/AppDocuments.vue'
import TerminalBar from '@/components/terminalbar/TerminalBar.vue'
import FooterBar from '@/components/footerbar/FooterBar.vue'
</script>

<style>
.appbody {
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: 100%;
  width: 100%;
  background-color: var(--vscode-background);
}

.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>
