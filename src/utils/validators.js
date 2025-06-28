export const isValidUrl = (str) => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};

export const isValidShortcode = (str) => /^[a-zA-Z0-9]{1,20}$/.test(str);

export const isPositiveInt = (n) => Number.isInteger(Number(n)) && Number(n) > 0;
