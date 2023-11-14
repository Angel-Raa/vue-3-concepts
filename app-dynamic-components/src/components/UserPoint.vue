<script setup lang="ts">
const props = defineProps(['users'])
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{ props.users.username }}</td>
            <td>{{ props.users.email }}</td>
        </tr>
    </tbody>
  </table>
</template>
