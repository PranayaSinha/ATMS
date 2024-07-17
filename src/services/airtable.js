import axios from 'axios';

const apiKey = 'patSP8xxalXaKQHjX.f968e8a68f8a8870fced42ab27e501b60317dd10b980286e4fa13d922ee55566';
const baseId = 'app18Y7WBDULFNPl2';
const tableName = 'Events';

const airtableApi = axios.create({
  baseURL: `https://api.airtable.com/v0/${baseId}/${tableName}`,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const fetchRecords = async () => {
  try {
    const response = await airtableApi.get();
    return response.data.records;
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    throw error;
  }
};
