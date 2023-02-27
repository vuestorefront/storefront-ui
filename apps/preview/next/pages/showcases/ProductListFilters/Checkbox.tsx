import { VsfListItemMenu } from '@storefront-ui/react/components/VsfListItemMenu';
import { VsfCheckbox } from '@storefront-ui/react/components/VsfCheckbox';
import { useState } from 'react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const [checkedState, setCheckedState] = useState(false);

  const label = 'Lorem ipsum dolor amet';
  const secondaryText = 'Secondary text';
  return (
    <VsfListItemMenu
      tag="label"
      selected={checkedState}
      slotPrefix={
        <VsfCheckbox
          labelTag="div"
          value="some-value"
          onChange={(event) => {
            setCheckedState(event.target.checked);
          }}
        />
      }
    >
      <span>{label}</span>
      <p className="text-xs text-gray-500 break-words">{secondaryText}</p>
    </VsfListItemMenu>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
