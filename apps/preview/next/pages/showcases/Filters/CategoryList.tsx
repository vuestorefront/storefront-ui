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

type Node = {
  key: string;
  value: {
    label: string;
    counter: number;
    link?: string;
  };
  children?: Node[];
  isLeaf: boolean;
};

const content: Node = {
  key: 'root',
  value: { label: '', counter: 0 },
  isLeaf: false,
  children: [
    {
      key: 'WOMEN',
      value: { label: 'Women', counter: 515 },
      isLeaf: false,
      children: [
        {
          key: 'ALL_WOMEN',
          value: { label: "All Women's", counter: 515, link: '/' },
          isLeaf: true,
        },
        {
          key: 'CLOTHING',
          value: { label: 'Clothing', counter: 30, link: '/' },
          isLeaf: true,
        },
        {
          key: 'SHOES',
          value: { label: 'Shoes', counter: 28, link: '/' },
          isLeaf: true,
        },
        {
          key: 'ACCESSORIES',
          value: { label: 'Accessories', counter: 56, link: '/' },
          isLeaf: true,
        },
        {
          key: 'WEARABLES',
          value: { label: 'Wearables', counter: 12, link: '/' },
          isLeaf: true,
        },
        {
          key: 'FOOD_DRINKS',
          value: { label: 'Food & Drinks', counter: 52, link: '/' },
          isLeaf: true,
        },
      ],
    },
    {
      key: 'MEN',
      value: { label: 'Men', counter: 364 },
      isLeaf: false,
      children: [
        {
          key: 'ALL_MEN',
          value: { label: "All Men's", counter: 364, link: '/' },
          isLeaf: true,
        },
        {
          key: 'CLOTHING',
          value: { label: 'Clothing', counter: 41, link: '/' },
          isLeaf: true,
        },
        {
          key: 'SHOES',
          value: { label: 'Shoes', counter: 20, link: '/' },
          isLeaf: true,
        },
        {
          key: 'ACCESSORIES',
          value: { label: 'Accessories', counter: 56, link: '/' },
          isLeaf: true,
        },
        {
          key: 'WEARABLES',
          value: { label: 'Wearables', counter: 32, link: '/' },
          isLeaf: true,
        },
        {
          key: 'FOOD_DRINKS',
          value: { label: 'Food & Drinks', counter: 15, link: '/' },
          isLeaf: true,
        },
      ],
    },
    {
      key: 'KIDS',
      value: { label: 'Kids', counter: 263 },
      isLeaf: false,
      children: [
        {
          key: 'ALL_KIDS',
          value: { label: 'All Kids', counter: 263, link: '/' },
          isLeaf: true,
        },
        {
          key: 'CLOTHING',
          value: { label: 'Clothing', counter: 29, link: '/' },
          isLeaf: true,
        },
        {
          key: 'SHOES',
          value: { label: 'Shoes', counter: 60, link: '/' },
          isLeaf: true,
        },
        {
          key: 'ACCESSORIES',
          value: { label: 'Accessories', counter: 48, link: '/' },
          isLeaf: true,
        },
        {
          key: 'WEARABLES',
          value: { label: 'Wearables', counter: 22, link: '/' },
          isLeaf: true,
        },
        {
          key: 'FOOD_DRINKS',
          value: { label: 'Food & Drinks', counter: 33, link: '/' },
          isLeaf: true,
        },
      ],
    },
  ],
};
const findNode = (keys: string[], node: Node): Node => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(restKeys, node.children?.find((child) => child.key === currentKey) || node);
  }
  return node.children?.find((child) => child.key === keys[0]) || node;
};

export default function CategoryList() {
  // TODO: use disclosure?
  const [opened, setOpened] = useState(true);
  const [activeNode, setActiveNode] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const activeMenu = findNode(activeNode, content);
  const handleBack = () => {
    setActiveNode((menu) => menu.slice(0, menu.length - 1));
  };

  const handleNext = (key: string) => () => {
    setActiveNode((menu) => [...menu, key]);
  };

  const handleCategorySelection = (val: string) => {
    if (selectedCategories.indexOf(val) > -1) {
      setSelectedCategories([...selectedCategories.filter((value) => value !== val)]);
    } else {
      setSelectedCategories([...selectedCategories, val]);
    }
  };

  const isCategorySelected = (val: string) => selectedCategories.includes(val);
  return (
    <SfAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Categories</p>
          <SfIconChevronLeft className={classNames('text-neutral-500', `${opened ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      <nav>
        <ul className="mt-2 mb-6">
          {activeMenu.key !== 'root' && (
            <li>
              <SfListItem size="sm" as="button" type="button" onClick={handleBack}>
                <div className="flex items-center">
                  <SfIconArrowBack className="text-neutral-500 w-3.5" />
                  <p className="ml-3">{activeMenu.value.label}</p>
                </div>
              </SfListItem>
            </li>
          )}
          {activeMenu.children?.map((node) =>
            node.isLeaf ? (
              <li key={node.key}>
                <SfListItem
                  size="sm"
                  as="button"
                  type="button"
                  className={classNames('first-of-type:mt-2 rounded-md active:bg-primary-100', {
                    'bg-primary-100 hover:bg-primary-100': isCategorySelected(node.value.label),
                  })}
                  slotSuffix={isCategorySelected(node.value.label) && <SfIconCheck size="sm" className="text-primary-700" />}
                  onClick={() => handleCategorySelection(node.value.label)}
                >
                  <div className="flex items-center">
                    <p className="text-left">{node.value.label}</p>
                    <SfCounter className="ml-2 typography-text-sm">{node.value.counter}</SfCounter>
                  </div>
                </SfListItem>
              </li>
            ) : (
              <li key={node.key}>
                <SfListItem size="sm" as="button" type="button" onClick={handleNext(node.key)}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <p className="text-left">{node.value.label}</p>
                      <SfCounter className="ml-2">{node.value.counter}</SfCounter>
                    </div>
                  </div>
                </SfListItem>
              </li>
            ),
          )}
        </ul>
      </nav>
    </SfAccordionItem>
  );
}

// #endregion source
CategoryList.getLayout = ShowcasePageLayout;
