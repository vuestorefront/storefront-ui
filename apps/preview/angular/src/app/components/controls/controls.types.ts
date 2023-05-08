type ControlOptionBind = {
  bind?: Record<string, unknown>;
  label?: string;
  value?: string | number;
};

export type Controls = {
  type?: 'range' | 'radio' | 'checkbox' | 'text' | 'select' | 'boolean' | 'json';
  modelName: string;
  description?: string;
  propDefaultValue?: string | number | boolean;
  propType?: string;
  isRequired?: boolean;
  options?: (ControlOptionBind | string)[] | readonly (ControlOptionBind | string)[];
}[];
