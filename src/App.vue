<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <Header />
    <div class="content">
      <Sidebar />
      <main>
        <RouterView />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex: 1;
  margin-top: 60px; /* Adjusted for header height */
  margin-bottom: 40px; /* Adjusted for footer height */
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 200px; /* Adjusted for sidebar width */
  background-color: #fff;
  color: #333;
}
</style>
