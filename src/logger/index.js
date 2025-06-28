const levels = { debug: 'DEBUG', info: 'INFO', error: 'ERROR' };

export const logger = {
  /**
   * Log an event.
   * @param {Object} param0 level, event, meta
   */
  log: ({ level = 'info', event = '', meta = {} }) => {
    const entry = {
      level: levels[level] || level,
      event,
      meta,
      ts: new Date().toISOString(),
    };
    // For the assessment, persist logs in sessionStorage (no console.log)
    const history = JSON.parse(sessionStorage.getItem('logs') || '[]');
    history.push(entry);
    sessionStorage.setItem('logs', JSON.stringify(history));
  },
  getAll: () => JSON.parse(sessionStorage.getItem('logs') || '[]'),
};
