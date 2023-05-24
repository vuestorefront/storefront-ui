import { forwardRef } from 'react';
import type { PolyRefFunction } from 'react-polymorphed';

export const polymorphicForwardRef = forwardRef as PolyRefFunction;

export * from './props';
export * from './refs';
