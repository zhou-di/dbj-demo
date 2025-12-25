import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  __handleClick__?: (event: Event) => void
}

const vDebounce: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    let timer: ReturnType<typeof setTimeout> | null = null
    // 获取延迟时间，默认为 500ms
    const delay = binding.arg ? parseInt(binding.arg) : 500
    // 是否立即执行
    const isImmediate = binding.modifiers.immediate
    // 获取事件类型，排除 immediate 修饰符，默认为 click
    const modifiers = Object.keys(binding.modifiers).filter(key => key !== 'immediate')
    const eventType = modifiers.length > 0 ? modifiers[0] : 'click'

    el.__handleClick__ = (event: Event) => {
      if (timer) clearTimeout(timer)

      if (isImmediate) {
        const callNow = !timer
        timer = setTimeout(() => {
          timer = null
        }, delay)
        if (callNow) binding.value(event)
      } else {
        timer = setTimeout(() => {
          binding.value(event)
        }, delay)
      }
    }

    el.addEventListener(eventType, el.__handleClick__)
  },
  beforeUnmount(el: ElType, binding: DirectiveBinding) {
    const modifiers = Object.keys(binding.modifiers).filter(key => key !== 'immediate')
    const eventType = modifiers.length > 0 ? modifiers[0] : 'click'
    if (el.__handleClick__) {
      el.removeEventListener(eventType, el.__handleClick__)
      delete el.__handleClick__
    }
  }
}

export default vDebounce
