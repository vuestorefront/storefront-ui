declare module "before-after-hook" {
  export interface HookCollection {
    /**
     * Invoke before and after hooks.
     */
    (name: string | string[], method: (options: any) => Promise<any> | any): Promise<any>
    /**
     * Invoke before and after hooks.
     */
    (name: string | string[], options: any, method: (options: any) => Promise<any> | any): Promise<any>
    /**
     * Add before hook for given name. Returns `hook` instance for chaining.
     */
    before (name: string, method: (options: any) => Promise<any> | any): HookCollection
    /**
     * Add error hook for given name. Returns `hook` instance for chaining.
     */
    error (name: string, method: (options: any) => Promise<any> | any): HookCollection
    /**
     * Add after hook for given name. Returns `hook` instance for chaining.
     */
    after (name: string, method: (options: any) => Promise<any> | any): HookCollection
    /**
     * Add wrap hook for given name. Returns `hook` instance for chaining.
     */
    wrap (name: string, method: (options: any) => Promise<any> | any): HookCollection
    /**
     * Removes hook for given name. Returns `hook` instance for chaining.
     */
    remove (name: string, beforeHookMethod: (options: any) => Promise<any> | any): HookCollection
  }

  export interface HookSingular<T> {
    /**
     * Invoke before and after hooks without options
     */
    (method: (options: T) => T | null | void): Promise<T>
    /**
     * Invoke before and after hooks without options
     */
    (method: (options: T) => Promise<T | null | void>): Promise<T>
    /**
     * Invoke before and after hooks with options
     */
    (options: T, method: (options: T) => T | null | void): Promise<T>
    /**
     * Invoke before and after hooks with options
     */
    (options: T, method: (options: T) => Promise<T | null | void>): Promise<T>

    /**
     * Add before hook. Returns `UnnamedHook` instance for chaining.
     */
    before(
      beforeFn: (options: T) => T | null | void
    ): HookSingular<T>;
    /**
     * Add before hook. Returns `UnnamedHook` instance for chaining.
     */
    before(
      beforeFn: (options: T) => Promise<T | null | void>
    ): HookSingular<T>;

    /**
     * Add error hook. Returns `UnnamedHook` instance for chaining.
     */
    error(
      errorFn: (options: T) => T | null | void
    ): HookSingular<T>;
    /**
     * Add error hook. Returns `UnnamedHook` instance for chaining.
     */
    error(
      errorFn: (options: T) => Promise<T | null | void>
    ): HookSingular<T>;

    /**
     * Add after hook. Returns `UnnamedHook` instance for chaining.
     */
    after(
      afterFn: (options: T) => T | null | void
    ): HookSingular<T>;
    /**
     * Add after hook. Returns `UnnamedHook` instance for chaining.
     */
    after(
      afterFn: (options: T) => Promise<T | null | void>
    ): HookSingular<T>;

    /**
     * Add wrap hook. Returns `UnnamedHook` instance for chaining.
     */
    wrap(
      wrapFn: (options: T) => T | null | void
    ): HookSingular<T>;
    /**
     * Add wrap hook. Returns `UnnamedHook` instance for chaining.
     */
    wrap(
      wrapFn: (options: T) => Promise<T | null | void>
    ): HookSingular<T>;

    /**
     * Removes hook. Returns `UnnamedHook` instance for chaining.
     */
    remove(
      beforeHookMethod: (options: T) => T | null | void
    ): HookSingular<T>;
    /**
     * Removes hook. Returns `UnnamedHook` instance for chaining.
     */
    remove(
      beforeHookMethod: (options: T) => Promise<T | null | void>
    ): HookSingular<T>;
  }

  export const Hook: {
    new (): HookCollection

    /**
     * Creates a nameless hook that allows passing down typings for the options
     */
    Singular: {new <T>(): HookSingular<T>}

    /**
     * Creates a hook collection
     */
    Collection: {new (): HookCollection}
  }

  export const Singular: {new <T>(): HookSingular<T>}
  export const Collection: {new (): HookCollection}

  export = Hook
}
