<script setup>
import { ref } from 'vue'

const teacher = ref({
  nombre: '',
  apellido: '',
  dni: '',
  subjects: [],
  docs: true
})
const teachers = ref([])
const subject = ref('')
const addSubject = () => {
  console.log('Hola')
  teacher.value.subjects.push(subject.value)
  subject.value = ''
}

const addTeacher = () => {
  teachers.value.push({
    nombre: teacher.value.nombre,
    apellido: teacher.value.apellido,
    dni: teacher.value.dni,
    subject: teacher.value.subjects,
    docs: teacher.value.docs
  })
  teacher.value.apellido = ''
  teacher.value.nombre = ''
  teacher.value.docs = ''
  teacher.value.dni = ''
  teacher.value.subjects = []
}

const removeTeacher = (teacher) => {
  teachers.value.splice(
    teachers.value.findIndex((it) => it.dni === teacher.dni),
    1
  )
}
</script>

<template>
  <div class="container mt-5 border rounded-md mb-5">
    <h3>Agregar profesor</h3>

    <label class="block text-xl">Nombre de profesor: </label>
    <input
      v-model="teacher.nombre"
      type="text"
      class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
    />
    <label class="block text-xl">Apellidos de profesor: </label>
    <input
      v-model="teacher.apellido"
      type="text"
      class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
    />
    <label class="block text-xl">DNI de profesor</label>
    <input
      v-model="teacher.dni"
      type="text"
      class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
    />
    <label class="block text-xl">Material</label>
    <input
      v-model="subject"
      type="text"
      class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
    />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
      @click="addSubject()"
    >
      Agregar
    </button>
    <div class="p-4">
      <ul class="list-disc list-inside">
        <li v-for="index in teacher.subjects" :key="index" class="mb-2 text-blue-500">
          {{ index }}
        </li>
      </ul>
    </div>

    <input v-model="teacher.docs" type="checkbox" class="mr-2" />Documentacion Entregadas
    <button
      @click="addTeacher()"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-full m-6"
    >
      Enviar
    </button>
  </div>

  <section>
    <h4>Listado de profesor</h4>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nombres
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Apellidos
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Documentacion
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Material
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Acciones
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="it in teachers" :key="it.dni" class="border-b">
          <td class="px-6 py-4 whitespace-nowrap">{{ it.nombre }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ it.apellido }}</td>
          <td class="px-6 py-4 whitespace-nowrap" v-if="it.docs">Entregadas</td>
          <td class="px-6 py-4 whitespace-nowrap" v-else>No Entregadas</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <ul>
              <li v-for="(item, i) in it.subject" :key="i">{{ item }}</li>
            </ul>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button @click="removeTeacher(it.dni)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <p class="text-lg mt-10">
    {{ teacher }}
  </p>
</template>
