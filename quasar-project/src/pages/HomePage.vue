<script setup lang="ts"></script>

<template>
  <h1>Home Views</h1>
  
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message :text="['hey, how are you?']" 
        name="Angel"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        ></q-chat-message>
        <q-chat-message :text="['doing fine, how r you?']"
        name="Quasar"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        ></q-chat-message>
      </div>
    </div>

</template>
