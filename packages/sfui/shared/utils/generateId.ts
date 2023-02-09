let id = -1;
/* eslint-disable-next-line no-plusplus */
export const generateId = (prefix: string) => `vsf-${prefix}--${++id}`;
