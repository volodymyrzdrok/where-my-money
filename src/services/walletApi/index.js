import axios from 'axios';

export async function getTransactionsSummary(month, year) {
  const { data } = await axios.get('/api/transactions-summary', {
    params: {
      month,
      year,
    },
  });

  return data;
}
