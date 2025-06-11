<template>
  <TaskBar />
  <main class="appbody">
    <RoutesBar />
  </main>
</template>

<script setup lang="ts">
import TaskBar from '@/components/taskbar/TaskBar.vue'
import RoutesBar from '@/components/routesbar/RoutesBar.vue'
</script>

<style>
.appbody {
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: var(--vscode-background);
}
</style>
