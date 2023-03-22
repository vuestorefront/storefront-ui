declare module 'tailwindcss/src/util/dataTypes' {
  const normalize = (value: string): string => undefined;
  export { normalize };
}

declare module 'tailwindcss/src/util/removeAlphaVariables' {
  const removeAlphaVariables = (container: any, toRemove: string[]) => {};
  export { removeAlphaVariables };
}

declare module 'tailwindcss/src/util/escapeClassName' {
  export default escapeClassName = (value: any): string => undefined;
}
