<template>
  <div class="search-bar">
    <SearchIcon />
    <span>{{ PROJECT_NAME.toLowerCase() }}</span>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from './icons/SearchIcon.vue'
import { PROJECT_NAME } from '@/constants/constants'
</script>

<style scoped>
.search-bar {
  background-color: var(--vscode-tab-background);
  color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  user-select: none;
  padding: 4px 8px;
  border: 1px solid #4b4b4b;
  border-radius: 6px;
  width: 100%;
  max-width: 590px;
  cursor: pointer;
}

.search-bar:hover {
  background-color: #313131;
}
#search-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.search-bar span {
  font-weight: 500;
  color: var(--vscode-foreground);
}

@media (max-width: 750px) {
  .search-bar {
    display: none;
  }
}
</style>
