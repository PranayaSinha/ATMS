<script setup>
import AirtableTable from '../components/AirtableTable.vue'
import { ref } from 'vue'

const headers = ref(['Name', 'Age', 'Job'])
const rows = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
])
</script>

<template>
  <AirtableTable :headers="headers" :rows="rows" :minRows="20" />
</template>
