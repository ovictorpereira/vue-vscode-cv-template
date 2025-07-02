<template>
  <div class="routes-bar">
    <RouteItem path="/" :icon-component="ExplorerIcon" tooltip="Explorer (Ctrl + Shift + E)" />
    <RouteItem path="/search" :icon-component="SearchIcon" tooltip="Search (Ctrl + Shift + F)" />
  </div>
</template>

<script setup lang="ts">
import RouteItem from './components/RouteItem.vue'
import ExplorerIcon from './components/icons/ExplorerIcon.vue'
import SearchIcon from './components/icons/SearchIcon.vue'
</script>

<style scoped>
.routes-bar {
  width: 49px;
  background-color: var(--vscode-background);
  border: 1px solid var(--vscode-border);
}

.route-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  cursor: pointer;
}
</style>
