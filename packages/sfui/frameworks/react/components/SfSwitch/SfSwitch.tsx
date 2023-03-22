import { forwardRef } from 'react';
import classNames from 'classnames';
import type { SfSwitchProps } from '@storefront-ui/react';

const SfSwitch = forwardRef<HTMLInputElement, SfSwitchProps>(
  ({ invalid, className, ...attributes }, ref): JSX.Element => (
    <input
      ref={ref}
      className={classNames(
        `appearance-none h-5 min-w-[36px] bg-transparent border-2 border-gray-500 rounded-full relative ease-in-out duration-300 hover:border-primary-800 hover:before:checked:bg-white checked:before:left-1/2 checked:before:ml-0 checked:before:mr-0.5 disabled:before:bg-gray-500/50 hover:before:bg-primary-800 active:border-primary-800 active:before:bg-primary-800 checked:bg-none checked:bg-primary-700 checked:border-primary-700 checked:before:bg-white hover:checked:bg-primary-800 hover:checked:border-primary-800 disabled:border-gray-500/50 checked:disabled:before:bg-white checked:disabled:bg-gray-500/50 checked:disabled:border-0 before:transition-all  before:w-3.5 before:h-3.5 before:bg-gray-500 before:absolute before:top-0 before:bottom-0 before:my-auto before:rounded-full before:left-0 before:ml-0.5 before:ease-in-out before:duration-300 cursor-pointer disabled:cursor-not-allowed`,
        {
          'border-negative-700 hover:border-negative-800 active:border-negative-900 before:bg-negative-900': invalid,
        },
        className,
      )}
      type="checkbox"
      role="switch"
      {...attributes}
      data-testid="switch"
    />
  ),
);

export default SfSwitch;
