<template>
  <RouteHeader title="EXPLORER" />
  <ProjectRoot :data="projectRoot" />

  <div class="folder-tree" v-if="rootIsOpen">
    <template v-for="(data, index) in dataTree" :key="index">
      <DataModel :data="data" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import RouteHeader from '@/components/sidebar/RouteHeader.vue'
import ProjectRoot from '@/components/sidebar/datatree/ProjectRoot.vue'
import DataModel from '@/components/sidebar/datatree/DataModel.vue'

import { useDataTreeStore } from '@/stores/data-tree'

const dataTreeStore = useDataTreeStore()
const projectRoot = computed(() => dataTreeStore.projectRoot)
const dataTree = computed(() => dataTreeStore.dataTree)

const rootIsOpen = computed(() => dataTreeStore.projectRoot.isOpen || false)

onMounted(() => {
  dataTreeStore.getGithubRepos()
})
</script>

<style scoped>
.folder-tree {
  display: flex;
  flex-direction: column;
  user-select: none;
}
</style>
