import { logger } from '../logger';

export const fetchWithLogging = async (url, options = {}) => {
  const start = Date.now();
  logger.log({ level: 'debug', event: 'fetch_request', meta: { url, options } });
  try {
    const res = await fetch(url, options);
    const duration = Date.now() - start;
    logger.log({
      level: 'info',
      event: 'fetch_response',
      meta: { url, status: res.status, duration },
    });
    return res;
  } catch (err) {
    logger.log({ level: 'error', event: 'fetch_error', meta: { url, error: err.message } });
    throw err;
  }
};
