<template>
  <RouteHeader title="EXPLORER" />

  <div class="folder-tree">
    <template v-for="(data, index) in dataTree" :key="index">
      <DataModel :data="data" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import RouteHeader from '@/components/sidebar/RouteHeader.vue'
import DataModel from '@/components/sidebar/datatree/DataModel.vue'

import { useDataTreeStore } from '@/stores/data-tree'

const dataTreeStore = useDataTreeStore()
const dataTree = computed(() => dataTreeStore.dataTree)

onMounted(() => {
  dataTreeStore.getGithubRepos()
})
</script>

<style scoped>
.folder-tree {
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
  padding-top: 4px;
}
</style>
