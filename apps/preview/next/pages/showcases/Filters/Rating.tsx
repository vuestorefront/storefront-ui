import { ShowcasePageLayout } from '../../showcases';
import {
  SfAccordionItem,
  SfCounter,
  SfListItem,
  SfRadio,
  SfRating,
  SfIconChevronLeft,
  useDisclosure,
} from '@storefront-ui/react';
import { useState } from 'react';
import classNames from 'classnames';

const ratingsValues = [
  { id: 'r1', label: '5', value: '5', counter: 10 },
  { id: 'r2', label: '4 & up', value: '4', counter: 123 },
  { id: 'r3', label: '3 & up', value: '3', counter: 12 },
  { id: 'r4', label: '2 & up', value: '2', counter: 3 },
  { id: 'r5', label: '1 & up', value: '1', counter: 13 },
];

export default function RatingFilter() {
  const [rating, setRating] = useState<string | null>(null);
  const { toggle, isOpen } = useDisclosure({ initialValue: true });

  return (
    <SfAccordionItem
      open={isOpen}
      onToggle={() => toggle()}
      className="w-full md:max-w-[376px]"
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Rating</p>
          <SfIconChevronLeft className={classNames('text-neutral-500', `${isOpen ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      <fieldset id="radio-rating">
        {ratingsValues.map(({ id, label, value, counter }) => (
          <SfListItem
            key={id}
            as="label"
            size="sm"
            className={classNames('!items-start py-4 md:py-1 bg-transparent hover:bg-transparent')}
            slotPrefix={
              <SfRadio
                value={value}
                className="flex items-center"
                checked={rating === value}
                name="radio-rating"
                onClick={() => setRating(rating === value ? null : value)}
              />
            }
          >
            <div className="flex flex-wrap items-end">
              <SfRating value={Number(value)} max={5} size="sm" />
              <span
                className={classNames('mx-2 text-sm', {
                  'font-medium': value === rating,
                })}
              >
                {label}
              </span>
              <SfCounter size="sm">{counter}</SfCounter>
            </div>
          </SfListItem>
        ))}
      </fieldset>
    </SfAccordionItem>
  );
}

RatingFilter.getLayout = ShowcasePageLayout;
