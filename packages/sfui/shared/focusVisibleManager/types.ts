export type FocusModality = 'keyboard' | 'pointer' | 'virtual';
export type FocusHandlerEvent = PointerEvent | MouseEvent | KeyboardEvent | FocusEvent;
export type FocusHandler = (modality: FocusModality, e: FocusHandlerEvent) => void;
