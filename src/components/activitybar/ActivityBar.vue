<template>
  <div class="activity-bar">
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
.activity-bar {
  width: 49px;
  background-color: var(--vscode-background);
  border-right: 1px solid var(--vscode-border);
}

.route-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  cursor: pointer;
}
</style>
