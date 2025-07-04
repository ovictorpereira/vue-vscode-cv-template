<template>
  <div class="document-path-container">
    <span class="document-path">{{ formatedPath(path) }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  path?: string
}

defineProps<Props>()

const formatedPath = (path: string | undefined): string => {
  if (!path) return ''
  return path.replace(/^\//, '').replace(/\//g, ' > ')
}
</script>

<style scoped>
.document-path-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  height: 24px;
  padding: 2px 13px 2px 14px;
  background-color: var(--vscode-tab-background);
}
</style>
