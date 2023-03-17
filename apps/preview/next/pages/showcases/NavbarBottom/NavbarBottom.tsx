import classNames from 'classnames';
import {
  VsfButton,
  VsfIconHome,
  VsfIconMenu,
  VsfIconSearch,
  VsfIconShoppingCart,
  VsfIconFavorite,
} from '@storefront-ui/react';
import { useState } from 'react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const items = [
    {
      label: 'Home',
      icon: <VsfIconHome />,
    },
    {
      label: 'Products',
      icon: <VsfIconMenu />,
    },
    {
      label: 'Search',
      icon: <VsfIconSearch />,
    },
    {
      label: 'Cart',
      icon: <VsfIconShoppingCart />,
    },
    {
      label: 'Wishlist',
      icon: <VsfIconFavorite />,
    },
  ];

  const [selectedItem, setselectedItem] = useState('');
  function onClickHandler(itemLabel: string) {
    setselectedItem(itemLabel);
  }

  return (
    <nav className="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch bg-white text-primary-700">
      {items.map((item) => (
        <VsfButton
          key={item.label}
          variant="tertiary"
          slotPrefix={item.icon}
          className={classNames(
            'py-1 flex flex-col h-full w-full rounded-none hover:text-primary-800 hover:bg-primary-100 active:text-primary-900 active:bg-primary-200',
            { 'text-primary-900 bg-primary-200': selectedItem === item.label },
          )}
          onClick={() => onClickHandler(item.label)}
        >
          {item.label}
        </VsfButton>
      ))}
    </nav>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
