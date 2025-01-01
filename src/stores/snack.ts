import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type SnackType = 'info' | 'warning' | 'error'
export type EventOptions = {
  expireSeconds?: number
}

export const useSnackStore = defineStore('snack', () => {
  const message = ref('')
  const expireSecond = ref(0)
  const snackType = ref<SnackType>('info')

  function emit(eventType: SnackType, payload: string | Error, { expireSeconds = 2 }: EventOptions = {}) {
    expireSecond.value = expireSeconds
    snackType.value = eventType
    if (payload instanceof Error) {
      message.value = payload.message
    } else if (typeof payload === 'string') {
      message.value = payload
    } else {
      message.value = String(payload)
    }
  }

  function clear() {
    snackType.value = 'info'
    message.value = ''
    expireSecond.value = 0
  }

  const hasContent = computed(() => !!message.value)
  
  return {
    snackType,
    message,
    hasContent,
    expireSecond,
    emit,
    clear,
  }
})
