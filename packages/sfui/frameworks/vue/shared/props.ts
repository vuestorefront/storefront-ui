import { DefineComponent } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyVueComponent<P = any> = DefineComponent<P, unknown, unknown, any, any, any, any, any>;
// eslint-disable-next-line @typescript-eslint/ban-types
type Props<T extends AnyVueComponent> = T extends AnyVueComponent<infer P> ? P : {};

export const extractProps = <T extends AnyVueComponent, P extends Props<T>>(
  component: T,
  pickProps?: Readonly<(keyof P)[]>,
) => {
  const props = component.props as P;
  type PickProp = keyof P;

  if (!pickProps) return props;
  return Object.keys(props as P).reduce((prev, curr) => {
    const propName = curr as PickProp;
    if (pickProps.includes(propName)) {
      prev[propName] = props[propName];
    }
    return prev;
  }, {} as Pick<P, PickProp>);
};

export const ClassProp = {
  type: [Array, String, Object],
  default: '',
};
