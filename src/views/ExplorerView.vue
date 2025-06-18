<template>
  <RouteHeader title="Explorer" />
  <main class="folder-tree">
    <template v-for="(data, index) in dataTree" :key="index">
      <DataModel :data="data" />
    </template>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import RouteHeader from '@/components/sidebar/RouteHeader.vue'
import DataModel from '@/components/sidebar/datatree/DataModel.vue'

import { useDataTreeStore } from '@/stores/data-tree'

const dataTreeStore = useDataTreeStore()
const dataTree = computed(() => dataTreeStore.dataTree)
</script>
