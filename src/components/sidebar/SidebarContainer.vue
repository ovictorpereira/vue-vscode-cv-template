<template>
  <div class="sidebar-container">
    <RoutesBar />
    <SidebarRouteView />
  </div>
</template>

<script setup lang="ts">
import RoutesBar from './routesbar/RoutesBar.vue'
import SidebarRouteView from './routerviewbar/SidebarRouteView.vue'
</script>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
