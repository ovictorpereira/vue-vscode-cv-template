<template>
  <div class="route-header">
    <h2 class="route-header-title">{{ title.toUpperCase() }}</h2>

    <div class="route-header-icon">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="20" cy="12" r="2" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style scoped>
.route-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--vscode-background);
  height: 35px;
  padding-left: 22px;
  padding-right: 14px;
}
.route-header-title {
  font-size: 11px;
  font-weight: 400;
}

.route-header-icon {
  padding: 0 4px;
  border-radius: 4px;
  cursor: pointer;
}

.route-header-icon:hover {
  background-color: var(--vscode-hover);
}
</style>
