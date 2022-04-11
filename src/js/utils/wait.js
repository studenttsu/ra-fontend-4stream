export const wait = (timeout = 1000) => new Promise(r => setTimeout(() => r(), timeout));
