import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Document } from '@/types'
export const useDocumentsStore = defineStore('documents', () => {
  const documents = ref<Document[]>([])

  const addDocument = (document: Document) => {
    closeAllDocuments()
    const existingDocument = documents.value.find((doc) => doc.id === document.id)
    if (existingDocument) {
      existingDocument.isActive = true
    } else {
      documents.value.push(document)
    }
  }

  const closeAllDocuments = () => {
    documents.value.forEach((doc) => {
      doc.isActive = false
    })
  }

  const openDocument = (id: number) => {
    const document = documents.value.find((doc) => doc.id === id)
    if (document) {
      closeAllDocuments()
      document.isActive = true
    }
  }

  const removeDocument = (id: number) => {
    const index = documents.value.findIndex((doc) => doc.id === id)
    let isActive = false
    if (index !== -1) {
      isActive = documents.value[index].isActive
      documents.value.splice(index, 1)
    }
    if (index - 1 >= 0 && isActive) {
      documents.value[index - 1].isActive = true
    }
  }

  return {
    addDocument,
    openDocument,
    removeDocument,
    documents,
  }
})
