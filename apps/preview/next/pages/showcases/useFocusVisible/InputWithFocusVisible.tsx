/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import classNames from 'classnames';
import { useFocusVisible } from '@storefront-ui/react';

export default function InputWithFocusVisible() {
  const { isFocusVisible } = useFocusVisible({ isTextInput: true });
  return (
    <div>
      <label className="inline-block m-2">
        <span>Default focus visible</span>
        <input className="block bg-gray-100 p-2 rounded-md focus:outline-none focus-visible:ring-2" />
      </label>
      <label className="inline-block m-2">
        <span>Custom focus visible</span>
        <input
          className={classNames('block bg-gray-100 p-2 rounded-md focus:outline-none', {
            'focus-visible:ring-2': isFocusVisible,
          })}
        />
      </label>
    </div>
  );
}

// #endregion source
InputWithFocusVisible.getLayout = ShowcasePageLayout;
