import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // 状态
  const count = ref<number>(0)
  
  // 计算属性
  const doubleCount = computed<number>(() => count.value * 2)
  
  // 方法
  function increment(): void {
    count.value++
  }
  
  function decrement(): void {
    count.value--
  }
  
  function reset(): void {
    count.value = 0
  }
  
  return { count, doubleCount, increment, decrement, reset }
})

