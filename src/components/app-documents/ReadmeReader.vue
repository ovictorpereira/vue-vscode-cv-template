<template>
  <div v-html="mdContent"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MarkdownIt from 'markdown-it'
import markdownFile from '@/markdown/RESUME.md?raw'

const md = new MarkdownIt()

const mdContent = ref<string>('')

const renderMarkdown = (mdContent: string) => {
  return md.render(mdContent)
}

onMounted(() => {
  mdContent.value = renderMarkdown(markdownFile)
})
</script>

<style scoped></style>
