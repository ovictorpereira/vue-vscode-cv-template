<template>
  <RouteHeader title="Explorer" />
  <main class="folder-tree">
    <!-- <FolderModel :index="0" :label="PROJECT_NAME" :isOpened="true" />

    <template v-for="(data, index) in dataTree" :key="index">
      <FolderModel :index="index" :label="data.label" :isOpened="folder.isOpened" />
    </template> -->
  </main>
</template>

<script lang="ts" setup>
// import { computed } from 'vue'
import RouteHeader from '@/components/sidebar/RouteHeader.vue'
// import FolderModel from '@/components/sidebar/FolderModel.vue'
// import { PROJECT_NAME } from '@/constants/constants'
// import { useDataTreeStore } from '@/stores/data-tree'

// const dataTreeStore = useDataTreeStore()
// const dataTree = computed(() => dataTreeStore.dataTree)
</script>
