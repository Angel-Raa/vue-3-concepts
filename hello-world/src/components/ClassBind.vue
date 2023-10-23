<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'ClassBind',
  setup() {
    const handlerError = true
    let bgColor = ref('blue')
    const handler = () => {
      bgColor.value = 'red '
      console.log('cambior de color')
    }
    return {
      handlerError,
      handler, bgColor
    }
  }
})
</script>

<template>
  <section>
    <h3>Directivas V-Bind con class</h3>
    <p
      v-bind:class="{
        danger: handlerError
      }"
    >
      El mensaje se ha enviado con exitos
    </p>
  </section>

  <section class="mt-8">
    <h3>Binding de estilos</h3>
    <p
      v-bind:style="{
        color: 'white',
        'background-color': 'blue',
        'font-size': '1.2rem'
      }"
    >
      El mensaje se ha enviado con exitos
    </p>
  </section>
  <section>
    <h3>Directivas <code>v-on</code></h3>
    <button
      v-bind:style="{
        color: bgColor
      }"
      class="border rounded py-2 px-3"
      @click="handler"
    >
      Enviar
    </button>
  </section>
</template>

<style scoped>
.danger {
  color: red;
}
</style>
