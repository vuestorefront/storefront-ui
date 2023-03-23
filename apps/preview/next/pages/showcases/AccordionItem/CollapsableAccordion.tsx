import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import classNames from 'classnames';
import { SfAccordionItem, SfIconChevronLeft } from '@storefront-ui/react';

const accordionItems = [
  {
    id: 'acc-1',
    summary: 'Where is my order?',
    details:
      'We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.',
  },
  {
    id: 'acc-2',
    summary: 'What if an item is out of stock?',
    details:
      "If an item you're interested in is sold out, you can register to be notified when your size is back in stock.",
  },
  {
    id: 'acc-3',
    summary: 'How do I cancel my order?',
    details:
      "If you made a mistake or simply changed your mind after placing an order, there's no need to fuss. As long as your parcel has yet to be picked and packed in our warehouse, you'll have the option to cancel.",
  },
];

export default function CollapsableAccordion() {
  const [active, setActive] = useState<string | null>(null);

  const isOpen = (id: string) => id === active;

  const handleToggle = (id: string) => (open: boolean) => {
    if (open) {
      setActive(id);
    } else if (isOpen(id)) {
      setActive(null);
    }
  };

  return (
    <div className="border border-neutral-200 rounded-md divide-y text-neutral-900">
      {accordionItems.map(({ id, summary, details }) => (
        <SfAccordionItem
          key={id}
          summary={
            <div className="flex justify-between p-4 font-medium hover:bg-neutral-100 active:neutral-100">
              <p>{summary}</p>
              <SfIconChevronLeft
                className={classNames('text-neutral-500', {
                  'rotate-90': isOpen(id),
                  '-rotate-90': !isOpen(id),
                })}
              />
            </div>
          }
          onToggle={handleToggle(id)}
          open={isOpen(id)}
        >
          <p className="p-4">{details}</p>
        </SfAccordionItem>
      ))}
    </div>
  );
}

// #endregion source

CollapsableAccordion.getLayout = ShowcasePageLayout;
