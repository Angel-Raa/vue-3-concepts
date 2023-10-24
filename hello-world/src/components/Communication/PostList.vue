<script setup>
import PostDetail from './PostDetail.vue'
let info = [
  {
    id: 1,
    title: 'que es agua',
    body: 'Sustancia líquida sin olor, color ni sabor que se encuentra en la naturaleza en estado más o menos puro formando ríos, lagos y mares, ocupa las tres cuartas partes del planeta Tierra y forma parte de los seres vivos; está constituida por hidrógeno y oxígeno ( H2 O ).'
  },
  {
    id: 2,
    title: ' que es java',
    body: 'Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.​​'
  }
]

const handlerAlert = (msg) => {
  alert(`Wey ${msg}`)
}
</script>

<template>
  <div>
    <PostDetail
      v-for="it in info"
      :key="it.id"
      :title="it.title"
      :body="it.body"
      @handlerAlert="handlerAlert"
    />
  </div>
</template>
