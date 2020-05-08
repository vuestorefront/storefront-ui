export const nonBrowserEnvironment = () => {
  return typeof window === "undefined" || typeof document === "undefined";
};
