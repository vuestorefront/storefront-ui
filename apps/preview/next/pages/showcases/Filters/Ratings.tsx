import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfAccordionItem, SfCounter, SfListItem, SfRadio, SfRating, SfIconChevronLeft } from '@storefront-ui/react';
import { useState } from 'react';
import classNames from 'classnames';

const ratingsValues = [
  { id: 'pr1', label: '5', value: '5', counter: 10 },
  { id: 'pr2', label: '4 & up', value: '4', counter: 123 },
  { id: 'pr3', label: '3 & up', value: '3', counter: 12 },
  { id: 'pr4', label: '2 & up', value: '2', counter: 3 },
  { id: 'pr5', label: '1 & up', value: '1', counter: 13 },
];

export default function Ratings() {
  const [checkedRatingState, setCheckedRatingState] = useState('');
  const [opened, setOpened] = useState(true);
  return (
    <SfAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Color</p>
          <SfIconChevronLeft className={classNames('text-neutral-500', `${opened ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      <fieldset id="radio-rating">
        {ratingsValues.map(({ id, label, value, counter }) => (
          <SfListItem
            key={id}
            as="label"
            size="sm"
            className={classNames('!items-start py-4 md:py-0 bg-transparent hover:bg-transparent', {
              'font-medium': value === checkedRatingState,
            })}
            slotPrefix={
              <SfRadio
                value={value}
                checked={checkedRatingState === value}
                name="radio-rating"
                onChange={(event) => setCheckedRatingState(event.target.value)}
              />
            }
          >
            {/* TODO: Adjust the styling when/if span wrapper removed from ListItem */}
            <p className="flex items-end">
              <SfRating value={Number(value)} max={5} size="sm" />
              <p className="inline-flex items-center">
                <span className="mx-2 text-sm">{label}</span>
                <SfCounter size="sm">{counter}</SfCounter>
              </p>
            </p>
          </SfListItem>
        ))}
      </fieldset>
    </SfAccordionItem>
  );
}

// #endregion source
Ratings.getLayout = ShowcasePageLayout;
