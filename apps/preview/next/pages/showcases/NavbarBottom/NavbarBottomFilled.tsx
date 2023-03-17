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
    <nav className="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch">
      {items.map((item) => (
        <VsfButton
          key={item.label}
          variant="tertiary"
          slotPrefix={item.icon}
          className={classNames(
            'py-1 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
            { 'text-white bg-primary-900': selectedItem === item.label },
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
