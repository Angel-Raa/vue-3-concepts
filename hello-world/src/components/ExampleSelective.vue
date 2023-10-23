<script setup>
import ClassBind from './ClassBind.vue'
import { ref } from 'vue'
const age = 15
let paises = ref(['RD', 'MX', 'ES', 'EEUU', 'FR', 'CA', 'JP', 'AU', 'AR', 'EU'])
const users = ref([
  {
    id: 1,
    name: 'angel',
    email: 'angel@gmail.com'
  },
  {
    id: 2,
    name: 'jose',
    email: 'jose.@gmail.com'
  },
  {
    id: 3,
    name: 'amber',
    email: 'amber.@gmail.com'
  },
  {
    id: 4,
    name: 'maria',
    email: 'maria.@gmail.com'
  }
])
</script>

<template>
  <div class="items-center">
    <h2>Aprendiendo Directivas</h2>
    <section>
      <h3>Directivas <code>V-if V-else y v-show</code></h3>
      <h3 v-if="age >= 18">Eres Mayor de edad</h3>
      <h3 v-else-if="age < 18">Eres Menor de edad</h3>
      <h3 v-show="age >= 18">Eres Mayor de edad con directiva de v-show</h3>
      <h3 v-show="age < 18">Eres Menor de edad con directiva de v-show</h3>
    </section>

    <br /><br />
    <section>
      <h3>Directivas <code>v-for y v-bind:key </code></h3>
      <ul>
        <li v-for="(pais, it) in paises" v-bind:key="it">
          {{ pais }}
        </li>
      </ul>
      <table class="border-collapse border border-slate-500">
        <thead>
          <tr>
            <th class="border border-slate-600">#</th>
            <th class="border border-slate-600">Username</th>
            <th class="border border-slate-600">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td class="border border-slate-700">{{ user.id }}</td>
            <td class="border border-slate-700">{{ user.name }}</td>
            <td class="border border-slate-700">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <br /><br />
    <section>
      <ClassBind />
    </section>
  </div>
</template>
