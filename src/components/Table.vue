<template>
  <div class="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
              <div>
                <h2 class="text-xl font-semibold text-gray-800">Users</h2>
                <p class="text-sm text-gray-600">Add users, edit and more.</p>
              </div>
              <div>
                <div class="inline-flex gap-x-2">
                  <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    View all
                  </a>
                  <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    Add user
                  </a>
                </div>
              </div>
            </div>
            <table class="min-w-full divide-y divide-gray-200 table-auto">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-center">
                    <div class="flex items-center justify-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">Field</span>
                    </div>
                  </th>
                  <th v-for="(record, index) in records" :key="index" scope="col" class="px-6 py-3 text-center">
                    <div class="flex items-center justify-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">Record {{ index + 1 }}</span>
                      <svg @click="openModal(record, index + 1)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-blue-600 hover:text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 11a1 1 0 012-0v-3a1 1 0 00-2 0v3zm0 4a1 1 0 012-0v-1a1 1 0 00-2 0v1z" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(heading, index) in headings" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap text-center align-middle">
                    <div class="text-sm font-medium text-gray-900">{{ heading }}</div>
                  </td>
                  <td v-for="(record, recordIndex) in records" :key="recordIndex" class="px-6 py-4 whitespace-nowrap text-center align-middle">
                    <div v-if="Array.isArray(record.fields[heading]) && record.fields[heading][0]?.url">
                      <img :src="record.fields[heading][0].url" alt="" class="h-10 w-10 rounded-full mx-auto">
                    </div>
                    <div v-else>
                      <div class="text-sm font-medium text-gray-900">{{ record.fields[heading] }}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
              <div>
                <p class="text-sm text-gray-600">
                  <span class="font-semibold text-gray-800">{{ records.length }}</span> results
                </p>
              </div>
              <div>
                <div class="inline-flex gap-x-2">
                  <button type="button" class="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    Prev
                  </button>
                  <button type="button" class="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                    Next
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-black bg-opacity-50 fixed inset-0"></div>
      <div class="bg-white border border-gray-200 rounded-xl shadow-lg max-w-7xl mx-auto z-10 p-6 max-h-[90vh] overflow-y-auto">
        <div class="text-center mb-4">
          <h2 class="text-xl font-semibold text-gray-800">{{ modalHeading }}</h2>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-center">
                <div class="flex items-center justify-center gap-x-2">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">Field</span>
                </div>
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                <div class="flex items-center justify-center gap-x-2">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">Data</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item, index) in modalData" :key="index">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{{ item.heading }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                <div v-if="Array.isArray(item.data) && item.data[0]?.url">
                  <img :src="item.data[0].url" alt="" class="h-10 w-10 rounded-full mx-auto">
                </div>
                <div v-else>
                  {{ item.data }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mt-6 flex justify-end">
          <button @click="showModal = false" type="button" class="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    </div>
    <!-- End Modal -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchRecords } from '../services/airtable';

const records = ref([]);
const headings = ref([]);
const showModal = ref(false);
const modalHeading = ref('');
const modalData = ref([]);

const openModal = (record, recordIndex) => {
  modalHeading.value = `Record ${recordIndex}`;
  modalData.value = headings.value.map(heading => ({
    heading,
    data: record.fields[heading]
  }));
  showModal.value = true;
};

onMounted(async () => {
  try {
    const fetchedRecords = await fetchRecords();
    records.value = fetchedRecords;

    if (fetchedRecords.length > 0) {
      headings.value = Object.keys(fetchedRecords[0].fields);
    }
  } catch (error) {
    console.error('Error fetching Airtable data:', error);
  }
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
