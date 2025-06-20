<template>
  <div class="documents">
    <TabsContainer />
    <div class="tab-content">teste</div>
  </div>
</template>

<script setup lang="ts">
import TabsContainer from './TabsContainer.vue'
</script>

<style scoped>
.documents {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--vscode-tab-background);
  overflow: auto;
}

.tab-content {
  flex: 1;
}
</style>
