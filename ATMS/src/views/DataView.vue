<script setup>
import { ref } from 'vue';

const headers = ref(['Name', 'Review Status', 'Attachment', 'Details', 'Reviewer', 'Version number', 'Created', 'Created By', 'Event']);
const rows = ref([
  ['Gradient x Tabula Rasa Rec...', 'Needs review', 'Image1', 'Details1', 'Reviewer1', '1', 'June 14, 2024', 'Ben Rubin', 'Event1'],
  ['Gradient x Tabula Rasa Rec...', 'Approved', 'Image2', 'Details2', 'Reviewer2', '2', 'June 14, 2024', 'Ben Rubin', 'Event2'],
  ['Gradient x Tabula Rasa Rec...', 'Needs another revision', 'Image3', 'Details3', 'Reviewer3', '1', 'June 14, 2024', 'Ben Rubin', 'Event3'],
  ['Gradient x Tabula Rasa Rec...', 'Approved', 'Image4', 'Details4', 'Reviewer4', '2', 'June 14, 2024', 'Ben Rubin', 'Event4'],
  ['Gradient x Tabula Rasa Rec...', 'Needs review', 'Image5', 'Details5', 'Reviewer5', '1', 'June 14, 2024', 'Ben Rubin', 'Event5'],
  ['Gradient x Tabula Rasa Rec...', 'Approved', 'Image6', 'Details6', 'Reviewer6', '2', 'June 14, 2024', 'Ben Rubin', 'Event6'],
]);

const actions = ref([
  'Grid', 'Calendar', 'Gallery', 'Kanban', 'Timeline', 'List', 'Gantt', 'New section', 'Form'
]);
</script>

<template>
  <div class="data-view">
    <div class="sidebar">
      <ul>
        <li><a href="#">Grid view</a></li>
        <li><a href="#">Calendar</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Kanban</a></li>
        <li><a href="#">Timeline</a></li>
        <li><a href="#">List</a></li>
        <li><a href="#">Gantt</a></li>
        <li><a href="#">New section</a></li>
        <li><a href="#">Form</a></li>
      </ul>
    </div>
    <div class="content">
      <div class="header">
        <h2>Data View</h2>
      </div>
      <AirtableTable :headers="headers" :rows="rows" />
    </div>
  </div>
</template>

<style scoped>
.data-view {
  display: flex;
  height: calc(100vh - 60px); /* Adjusted for header height */
}

.sidebar {
  width: 200px;
  background-color: #f8f8f8;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  color: #333;
  text-decoration: none;
}

.sidebar ul li a:hover {
  text-decoration: underline;
}

.content {
  flex: 1;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.airtable-table {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.table-wrapper {
  flex: 1;
  overflow-x: auto;
}

.airtable {
  width: 100%;
  border-collapse: collapse;
}

.airtable th, .airtable td {
  padding: 12px 15px;
  border: 1px solid #333;
  text-align: left;
}

.airtable th {
  background-color: #333;
  color: white;
}

.airtable tr:nth-child(even) {
  background-color: #f2f2f2;
}

.airtable tr:hover {
  background-color: #ddd;
}
</style>
