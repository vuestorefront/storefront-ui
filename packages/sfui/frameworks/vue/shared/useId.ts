import { getCurrentInstance } from 'vue';

export const useId = () => getCurrentInstance()?.uid.toString();
