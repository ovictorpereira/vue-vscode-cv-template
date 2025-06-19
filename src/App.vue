<template>
  <TaskBar />
  <main class="appbody">
    <RoutesBar />
    <SidebarRouteView />
    <DocTabs />
  </main>
</template>

<script setup lang="ts">
import TaskBar from '@/components/taskbar/TaskBar.vue'
import RoutesBar from '@/components/routesbar/RoutesBar.vue'
import SidebarRouteView from './components/sidebar/SidebarRouteView.vue'
import DocTabs from './components/doctabs/DocTabs.vue'
</script>

<style>
.appbody {
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: var(--vscode-background);
}
</style>
