import { defineStore } from 'pinia'
import { ref } from 'vue'
const UseCounter = defineStore('count', () => {
  const count = ref(0)
  const add = () => {
    count.value++
  }
  return {
    add,
    count,
  }
})

export default UseCounter
