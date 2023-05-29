import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfAccordionItem,
  SfCounter,
  SfIconArrowBack,
  SfListItem,
  SfIconChevronLeft,
  SfIconCheck,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { useState } from 'react';

const categories = [
  {
    key: 'CLOTHING',
    label: 'Clothing',
    counter: 30,
    link: '#',
  },
  {
    key: 'SHOES',
    label: 'Shoes',
    counter: 28,
    link: '#',
  },
  {
    key: 'ACCESSORIES',
    label: 'Accessories',
    counter: 56,
    link: '#',
  },
  {
    key: 'WEARABLES',
    label: 'Wearables',
    counter: 12,
    link: '#',
  },
  {
    key: 'FOOD_DRINKS',
    label: 'Food & Drinks',
    counter: 52,
    link: '#',
  },
];
export default function CategoryFilter() {
  const [opened, setOpened] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const handleCategorySelection = (selectedValue: string) => {
    if (selectedCategories.indexOf(selectedValue) > -1) {
      setSelectedCategories([...selectedCategories.filter((selectedValueue) => selectedValueue !== selectedValue)]);
    } else {
      setSelectedCategories([...selectedCategories, selectedValue]);
    }
  };

  const isCategorySelected = (selectedValue: string) => selectedCategories.includes(selectedValue);
  return (
    <SfAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      className="w-full md:max-w-[376px]"
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Categories</p>
          <SfIconChevronLeft className={classNames('text-neutral-500', `${opened ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      <ul className="mt-2 mb-6">
        <li>
          <SfListItem size="sm" as="button" type="button">
            <div className="flex items-center">
              <SfIconArrowBack size="sm" className="text-neutral-500 mr-3" />
              Back to {categories[0].label}
            </div>
          </SfListItem>
        </li>
        {categories.map((category) => (
          <li key={category.key}>
            <SfListItem
              size="sm"
              as="a"
              href={category.link}
              className={classNames('first-of-type:mt-2 rounded-md active:bg-primary-100', {
                'bg-primary-100 hover:bg-primary-100': isCategorySelected(category.label),
              })}
              slotSuffix={isCategorySelected(category.label) && <SfIconCheck size="xs" className="text-primary-700" />}
              onClick={() => handleCategorySelection(category.label)}
            >
              <span className="flex items-center">
                {category.label}
                <SfCounter className="ml-2 typography-text-sm">{category.counter}</SfCounter>
              </span>
            </SfListItem>
          </li>
        ))}
      </ul>
    </SfAccordionItem>
  );
}

// #endregion source
CategoryFilter.getLayout = ShowcasePageLayout;
