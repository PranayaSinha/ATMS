<script>

import Sidebar from './components/Sidebar.vue';
import Table from './components/Table.vue';
import Header from './components/Header.vue';
import Foot from './components/Foot.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Table,
    Header,
    Foot
  }
};
</script>

<template>
  <div id="app">
    <Header />
    <Sidebar />
    <router-view></router-view>
    <Foot />
    
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
