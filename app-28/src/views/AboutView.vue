<script setup lang="ts">
import { ref, type VNode } from 'vue'
const lazyOptions = ref({
  src: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
  lifecycle: {
    loading: (el: VNode) => {
      console.log(`Cargando imagen  ${el}`)
    },
    error: (el: VNode) => {
      console.log(`error a carga la  imagen  ${el}`)
    },
    loaded: (el: VNode) => {
      console.log(`Imagen cargada  ${el}`)
    }
  },
  delay: 500
})
</script>

<template>
  <section >
    <h2>About Views</h2>
    <img
      v-lazy="{
        src: 'https://fastly.picsum.photos/id/959/1280/800.jpg?hmac=9d9jd7otwOiCnNKXpFrkdcK3OyOOREdPzVe83tSvrns',
        loading: 'example.jpg',
        error: 'error.jpg',
        delay: 500
      }"
    />

    <img class="img-avatar"
      v-lazy="{
        src: lazyOptions.src,
        lifecycle: lazyOptions.lifecycle,
        delay: lazyOptions.delay
      }"
    />
  </section>
</template>

<style scoped>
.container {
  display: flex;
}
img [lazy=loading] {
    background-color: #09f;
    width: 450px;

}

img [lazy=loaded] {

}

img [lazy=error] {

}

.img-avatar {
  width: 100px;
  border-radius: 10px;
  
}


</style>