export type TODO = any;

/* Global Records */
export type ObjectRecord<O> = { [K in keyof O]: O[K] };
export type ObjectItemRecord<V = string, K = string> = {
  [keyof in K as any]: V;
};
export type PartialRecord<O> = { [K in keyof O]?: O[K] };
export type NullableRecord<V> = V | null;
