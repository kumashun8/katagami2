export const format_date = dateFromAPI => (
  dateFromAPI.replace(/-/gi, '/').split('T').join('--').slice(0, 17)
);