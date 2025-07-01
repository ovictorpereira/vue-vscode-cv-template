<template>
  <div class="markdown-body" v-html="mdContent"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import MarkdownIt from 'markdown-it'
import markdownFile from '@/markdown/RESUME.md?raw'
import 'github-markdown-css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css' // ou outro tema

interface Props {
  content: string | undefined
}

const props = defineProps<Props>()

const md = new MarkdownIt({
  html: true,
  highlight: (str: string, lang: string): string => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`
      } catch (e) {
        console.log(e)
      }
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
  },
})

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
</script>

<style>
/* Override github-markdown-css with VS Code theme styling */
.markdown-body {
  background-color: inherit;
  color: var(--vscode-active-icon);

  line-height: 1.5;
  word-wrap: break-word;
  max-width: none;
  margin: 0;
  border-radius: 0;
}

.markdown-body a {
  color: #58a6ff;
  text-decoration: none;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body img {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #1f1f1f;
}

.markdown-body hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #30363d;
  border: 0;
}

.markdown-body pre {
  background-color: #262c36;
  border-radius: 6px;
  padding: 16px;
  overflow: auto;
  margin-bottom: 16px;
}

.markdown-body .highlight pre,
.markdown-body pre {
  color: #d4d4d4;
}

.markdown-body h1 {
  padding-bottom: 0.3em;
  font-size: 2em;
  border-bottom: 1px solid #30363d;
  margin-bottom: 16px;
}

.markdown-body h2 {
  padding-bottom: 0.3em;
  font-size: 1.5em;
  border-bottom: 1px solid #30363d;
  margin-top: 24px;
  margin-bottom: 16px;
}

.markdown-body h3 {
  font-size: 1.25em;
  margin-top: 24px;
  margin-bottom: 16px;
}

.markdown-body h4 {
  font-size: 1em;
  margin-top: 24px;
  margin-bottom: 16px;
}

.markdown-body blockquote {
  padding: 0 1em;
  color: #8b949e;
  border-left: 0.25em solid #30363d;
  margin: 16px 0;
}

.markdown-body ul,
.markdown-body ol {
  padding-left: 2em;
  margin-bottom: 16px;
}

.markdown-body li {
  margin-top: 0.25em;
}

.markdown-body table {
  display: block;
  width: 100%;
  overflow: auto;
  margin-top: 0;
  margin-bottom: 16px;
  border-spacing: 0;
  border-collapse: collapse;
}

.markdown-body table tr {
  background-color: #1f1f1f;
  border-top: 1px solid #30363d;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #161b22;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #30363d;
}

.markdown-body table th {
  font-weight: 600;
}
</style>
