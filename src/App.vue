<template>
  <TaskBar />
  <main class="appbody">
    <RoutesBar />
    <SidebarRouteView />

    <div class="vertical-container">
      <AppDocuments />
      <TerminalBar />
    </div>
  </main>
</template>

<script setup lang="ts">
import TaskBar from '@/components/taskbar/TaskBar.vue'
import RoutesBar from '@/components/routesbar/RoutesBar.vue'
import SidebarRouteView from './components/sidebar/SidebarRouteView.vue'
import AppDocuments from './components/app-documents/AppDocuments.vue'
import TerminalBar from '@/components/terminalbar/TerminalBar.vue'
</script>

<style>
.appbody {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: var(--vscode-background);
}

.vertical-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}
</style>
