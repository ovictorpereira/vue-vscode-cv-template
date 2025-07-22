<template>
  <router-link :to="path" custom v-slot="{ isActive }">
    <div
      :class="isActive ? 'route-item active-route-item' : 'route-item'"
      v-tooltip="{
        content: tooltip,
        ...tbTooltip,
      }"
    >
      <component :is="iconComponent" :isActive="isActive" />
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { type Component } from 'vue'

interface Props {
  path: string
  iconComponent: Component
  tooltip: string
}

defineProps<Props>()

const tbTooltip = {
  theme: 'custom-tooltip',
  placement: 'right',
}
</script>

<style scoped>
.active-route-item {
  border-left: 2px solid var(--vscode-selected-blue);
}

.route-icon {
  fill: var(--vscode-inactive);
}

.active-route-icon {
  fill: var(--vscode-active);
}
</style>
