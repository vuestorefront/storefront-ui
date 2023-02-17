export const isTabAndShift = (event: KeyboardEvent) => {
  return event.key === 'Tab' && event.shiftKey;
};

export const isTab = (event: KeyboardEvent) => {
  return event.key === 'Tab' && !event.shiftKey;
};
