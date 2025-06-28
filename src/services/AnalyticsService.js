import { fetchWithLogging } from './FetchWithLogging';

const BASE = '/api/links';

export const AnalyticsService = {
  listAll: async () => {
    const res = await fetchWithLogging(BASE);
    if (!res.ok) throw new Error('Failed to fetch links');
    return res.json();
  },
  clicks: async (code) => {
    const res = await fetchWithLogging(`${BASE}/${code}/clicks`);
    if (!res.ok) throw new Error('Failed to fetch clicks');
    return res.json();
  },
};
