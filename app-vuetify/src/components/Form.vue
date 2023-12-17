<script setup lang="ts">
import { ref, type Ref } from "vue";
interface Form {
  id?: number;
  username?: string;
  email?: string;
  passowrd?: string;
  city?: Array<string>;
  file?: [];
  avatar?: [];
  age?: string;
}
const show: Ref<boolean> = ref(false);
const formularios: Ref<Array<Form>> = ref([]);
const form: Ref<Form> = ref({});
const ciudades = ref([
  "Santo Domingo",
  "Samaná",
  "La Romana",
  "Puerto Plata",
  "Punta Cana",
]);

const submit = (): void => {
  const id = new Date().getSeconds() * 10;
  formularios.value.push({
    id,
    username: form.value.username,
    email: form.value.email,
    passowrd: form.value.passowrd,
    city: ciudades.value,
    file: form.value.file,
    avatar: form.value.avatar,
    age: form.value.age,
  });
  console.log(formularios);
  reset();
};

const reset = (): void => {
  form.value.age = "";
  form.value.email = "";
  form.value.username = "";
  form.value.city = [];
  form.value.file = [];
  form.value.passowrd = "";
};
</script>
<template>
  <h2>Formularios</h2>
  <v-form @submit.prevent="submit()" class="form-container">
    <v-container>
      <v-text-field
        class="form-field"
        v-model="form.username"
        label="username"
        variant="solo"
        validate-on="blur"
        type="text"
      >
      </v-text-field>
      <v-text-field
        class="form-field"
        v-model="form.email"
        label="email"
        variant="solo"
        validate-on="blur"
        type="email"
      >
      </v-text-field>
      <v-text-field
        class="form-field"
        variant="solo"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        v-model="form.passowrd"
        name="input 10-1"
        label="passowrd"
        counter
        :type="show ? 'text' : 'password'"
        @click:append="show = !show"
        hint="At least 8 characters"
      >
      </v-text-field>
      <v-text-field
        class="form-field"
        v-model="form.age"
        label="age"
        variant="solo"
        validate-on="blur"
        type="number"
      >
      </v-text-field>
      <v-file-input
        class="form-field"
        v-model="form.file"
        variant="solo"
        validate-on="blur"
        clearable
        counter
        placeholder="Select your files"
        prepend-icon="mdi-paperclip"
        label="Document"
      >
      </v-file-input>
      <v-file-input
        class="form-field"
        v-model="form.avatar"
        variant="solo"
        validate-on="blur"
        clearable
        counter
        placeholder="Select your files"
        prepend-icon="mdi-camera"
        accept="image/png, image/jpeg, image/bmp"
        label="Avatar"
      >
      </v-file-input>
      <v-select
        class="form-field"
        :items="ciudades"
        label="Cuidad"
        variant="solo"
        density="compact"
      >
      </v-select>
    </v-container>
    <v-btn class="me-4" type="submit"> Enviar </v-btn>
    <v-btn @Click="reset()"> clear </v-btn>
  </v-form>
  <h2>Tabla De datos</h2>
  <v-table class="data-table">
    <thead>
      <tr>
        <th>username</th>
        <th>email</th>
        <th>edad</th>
        <th>Cuidad</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="it in formularios" :key="it.id">
        <td>{{ it.username }}</td>
        <td>{{ it.email }}</td>
        <td>{{ it.age }}</td>
        <td>{{ it.city }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.form-container {
  max-width: 600px;
  margin: auto;
}

.form-field {
  margin-bottom: 16px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.data-table {
  margin-top: 40px;
}
</style>
