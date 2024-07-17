<template>
    <div>
      <button v-if="!isAuthenticated" @click="login">Login</button>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
      <div v-if="isAuthenticated">Hello, {{ user.name }}</div>
    </div>
</template>
  
<script>
  import { onMounted, ref } from 'vue';
  import { initAuth, login, logout, isAuthenticated, getUser } from './auth';
  
  export default {
    setup() {
      const isAuthenticated = ref(false);
      const user = ref(null);
  
      onMounted(async () => {
        await initAuth();
        isAuthenticated.value = await isAuthenticated();
        if (isAuthenticated.value) {
          user.value = await getUser();
        }
      });
  
      return {
        login,
        logout,
        isAuthenticated,
        user,
      };
    },
  };
</script>
  
  