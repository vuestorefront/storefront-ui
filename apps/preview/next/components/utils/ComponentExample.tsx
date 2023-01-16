import classNames from 'classnames';
import { ReactNode } from 'react';
import Controls, { ControlsType, Models } from './Controls';

export type ComponentExampleProps<T extends Models<T>> = {
  controls: {
    controls: ControlsType;
    state: {
      get: T;
      set: React.Dispatch<React.SetStateAction<T>>;
    };
  };
  children?: ReactNode;
  className?: string;
  componentContainerClassName?: string;
};

export default function ComponentExample<T extends { [k: string]: any }>({
  controls,
  children,
  className,
  componentContainerClassName,
}: ComponentExampleProps<T>) {
  return (
    <div className={classNames('e-page', className)}>
      <div className={classNames('e-page-component', componentContainerClassName)}>{children}</div>
      <Controls<T> {...controls} />
    </div>
  );
}
