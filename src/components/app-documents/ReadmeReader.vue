<template>
  <div v-html="mdContent"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import MarkdownIt from 'markdown-it'
import markdownFile from '@/markdown/RESUME.md?raw'

interface Props {
  content: string | undefined
}

const props = defineProps<Props>()

const md = new MarkdownIt()

const mdContent = ref<string>('')

const renderMarkdown = (mdContent: string) => {
  return md.render(mdContent)
}

watch(
  () => props.content,
  (content) => {
    mdContent.value = ''
    if (!content) mdContent.value = renderMarkdown(markdownFile)
    else {
      mdContent.value = renderMarkdown(props.content || '')
    }
  },
  { immediate: true },
)

// `https://api.github.com/repos/${owner}/${repo}/readme
</script>

<style scoped></style>
