import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Document } from '@/types'
export const useDocumentsStore = defineStore('documents', () => {
  const documents = ref<Document[]>([
    {
      id: 1,
      label: 'DocTabs.vue',
      isOpen: true,
      content: 'Welcome to the home tab!',
    },
    {
      id: 2,
      label: 'documents.ts',
      isOpen: false,
      content: 'Adjust your preferences here.',
    },
  ])

  const closeAllDocuments = () => {
    documents.value.forEach((doc) => {
      doc.isOpen = false
    })
  }

  const openDocument = (id: number) => {
    const document = documents.value.find((doc) => doc.id === id)
    if (document) {
      closeAllDocuments() // Close all other documents
      document.isOpen = true
    }
  }

  return {
    openDocument,
    documents,
  }
})
