<template>
  <RouteHeader title="EXPLORER" />

  <LoadingBar />
  <ProjectRoot :data="projectRoot" />

  <div class="folder-tree" v-if="rootIsOpen">
    <template v-for="(data, index) in dataTree" :key="index">
      <DataModel :data="data" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import RouteHeader from '@/components/sidebar/components/RouteHeader.vue'
import ProjectRoot from '@/components/sidebar/components/datatree/ProjectRoot.vue'
import DataModel from '@/components/sidebar/components/datatree/DataModel.vue'
import LoadingBar from '@/components/sidebar/components/LoadingBar.vue'

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
