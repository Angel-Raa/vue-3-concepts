import { onMounted, ref, type Ref, onUnmounted } from 'vue'
const x: Ref<number> = ref(0)
const y: Ref<number> = ref(0)

export const useMouse = () => {
  const update = (e: { pageX: number; pageY: number }) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.addEventListener('mousemove', update)
  })
  return { x, y }
}
