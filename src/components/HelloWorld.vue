<script setup>
import { ref } from 'vue'
import Table from "./Table.vue"

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<Table />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
