<script setup lang="ts">
import { createSignal } from 'vue-signals/solid'
import { reactive, ref, type Ref } from 'vue';
import { signal, computed } from 'vue-signals/angular'
interface Blog {
  id?:number,
  content?:string,
  count:number
}
const [count, setCount] = createSignal(0)
const contado = signal(0)
const doble = computed(() => contado() * 2)
const blog:Blog = reactive({
  id:0,
  content:"" ,
  count:0
})
const listado:Ref<Blog[]> = ref([])
  const createBlog  = () => {
    const id = listado.value.length + 1
    const newBlog:Blog = {
      id,
      content:blog.content,
      count:blog.count
    }
  listado.value.push(newBlog);
  resert()
}

const resert =() => {
  blog.content =""

}
</script>

<template>
  <main>
    <h1>Home Views</h1>

    <p>Solid Count : {{ count() }}</p>
    <button @click="setCount((v) => v + 1)">increment</button>
    <section>
      <h2>Angular Contado : {{ contado() }}</h2>
      <h3>Doble: {{ doble() }}</h3>
      <button @click="contado.update((v) => v + 1)">increment</button>
      <button @click="contado.set(0)">Resert</button>
    </section>
    <section>
      <h2>Reactive: {{ blog.count }}  </h2>
      <button @click="() => blog.count++">increment</button>
      <p>{{ blog.content }}</p>
      <input type="text" placeholder="comment" v-model="blog.content"/>
      <ul>
        <li v-for="list in listado " :key="list.id">{{list.content  }}</li>
      </ul>
      <button type="submit" @click="createBlog()">Enviar</button>
    </section>
  </main>
</template>
<style scoped>
input {
  display: block;
}
</style>
