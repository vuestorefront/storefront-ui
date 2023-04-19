import type { AllHTMLAttributes, RefAttributes } from 'react';
import type { Prettify } from '@storefront-ui/shared';

export const composeHandlers =
  (...callbacks: (Function | null | undefined)[]) =>
  (...args: unknown[]) => {
    callbacks.forEach((cb) => cb?.(...args));
  };

/*
USE WITH CAUTION!
This type is not perfect. You can access all HTML attributes in the userProps object within the resolver.
However, it may lead to bugs that TypeScript cannot detect, e.g. you can access `size` attribute of type number,
while user can pass anything. Sometimes your props getter might have to make extra checks on userProps type.
*/
interface UserProps<T> extends AllHTMLAttributes<T>, RefAttributes<T> {}

export function createPropsGetter<TProps>(resolver: (userProps: UserProps<HTMLElement>) => TProps) {
  return function resolve<TUserProps = {}>(userProps: TUserProps = {} as TUserProps): Prettify<TProps & TUserProps> {
    return {
      ...userProps,
      ...resolver(userProps || {}),
    };
  };
}
