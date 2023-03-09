export interface ControlOptionBind {
  bind?: {};
  label?: string;
  value?: string | number;
}

export type ControlsType = {
  type?: 'range' | 'radio' | 'checkbox' | 'text' | 'select' | 'boolean' | 'json';
  modelName: string;
  description?: string;
  propDefaultValue?: string | number | boolean;
  propType?: string;
  isRequired?: boolean;
  options?: (ControlOptionBind | string)[] | readonly (ControlOptionBind | string)[];
}[];

export type Models<T> = { [key: string]: T };

export interface ControlsState<T extends Models<T>> {
  get: T;
  set: (nextState: Partial<T> | ((prevState: T) => T)) => void;
}

export type ControlsProps<T extends Models<T>> = {
  controls: ControlsType;
  state: ControlsState<T>;
  className?: string;
};
