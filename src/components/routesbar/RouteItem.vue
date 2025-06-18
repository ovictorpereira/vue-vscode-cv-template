<template>
  <router-link :to="path" custom v-slot="{ isActive }">
    <div :class="isActive ? 'route-item active-route-item' : 'route-item'">
      <component :is="iconComponent" :isActive="isActive" />
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { type Component } from 'vue'

interface Props {
  path: string
  iconComponent: Component
}

defineProps<Props>()
</script>

<style scoped>
.active-route-item {
  border-left: 2px solid #0078d4;
}

.route-icon {
  fill: var(--vscode-inactive-icon);
}

.active-route-icon {
  fill: var(--vscode-active-icon);
}
</style>
