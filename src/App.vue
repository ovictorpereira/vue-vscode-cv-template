<template>
  <TaskBar />
  <main class="appbody">
    <RoutesBar />
    <SidebarRouteView />
    <AppDocuments />
  </main>
</template>

<script setup lang="ts">
import TaskBar from '@/components/taskbar/TaskBar.vue'
import RoutesBar from '@/components/routesbar/RoutesBar.vue'
import SidebarRouteView from './components/sidebar/SidebarRouteView.vue'
import AppDocuments from './components/app-documents/AppDocuments.vue'
</script>

<style>
.appbody {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: var(--vscode-background);
}
</style>
