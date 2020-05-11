export const isBrowserEnvironment = () => {
  return typeof window === "undefined" || typeof document === "undefined";
};
