import { defineStore } from 'pinia'

export const useDateStore = defineStore('Date', () => {
  function format(time: string | Date) {
    time = new Date(time)
  }

  return {
    format,
  }
})
