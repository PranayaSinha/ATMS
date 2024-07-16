<template>
  <div class="airtable-table">
    <div class="table-wrapper">
      <table class="airtable">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in displayedRows" :key="index">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'AirtableTable',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    minRows: {
      type: Number,
      default: 10, // Default minimum number of rows to display
    },
  },
  setup(props) {
    const displayedRows = computed(() => {
      const filledRows = [...props.rows];
      while (filledRows.length < props.minRows) {
        filledRows.push(new Array(props.headers.length).fill(''));
      }
      return filledRows;
    });

    return { displayedRows };
  },
};
</script>

<style scoped>
.airtable-table {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
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
}

.airtable tr:nth-child(even) {
  background-color: #2a2a2a;
}

.airtable tr:hover {
  background-color: #3a3a3a;
}
</style>
