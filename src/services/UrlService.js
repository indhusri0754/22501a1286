import { fetchWithLogging } from './FetchWithLogging';

const BASE = '/api/shorten';

export const UrlService = {
  create: async ({ originalUrl, validityMinutes, customCode }) => {
    const body = { originalUrl, validityMinutes, customCode };
    const res = await fetchWithLogging(BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error('Failed to shorten URL');
    return res.json();
  },
  resolve: async (code) => {
    const res = await fetchWithLogging(`${BASE}/${code}`);
    if (!res.ok) throw new Error('Shortcode not found');
    return res.json();
  },
};
