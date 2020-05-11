export const isClient = () => {
  return typeof window !== "undefined" || typeof document !== "undefined";
};
