import { createContext, useContext } from 'react';

export interface FormControlContext {
  invalid: boolean;
  disabled: boolean;
  fieldId: string;
}

export const formControlContext = createContext<FormControlContext | undefined>(undefined);

export const useFormControl = () => useContext(formControlContext);
