import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useRef, useState, type KeyboardEvent } from 'react';
import classNames from 'classnames';

function getPreviousIndex(current: number, elements: HTMLButtonElement[]) {
  for (let index = current - 1; index >= 0; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = elements.length - 1; index > -1; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

function getNextIndex(current: number, elements: HTMLButtonElement[]) {
  for (let index = current + 1; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = 0; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

interface Tab {
  label: string;
  disabled?: boolean;
}

const tabs: Tab[] = [
  { label: 'Features' },
  { label: 'Specifications', disabled: true },
  { label: 'Reviews' },
  { label: 'Support' },
  { label: 'Delivery & Returns' },
];

export default function TabsBasic() {
  const tablistRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const isActive = (tab: Tab) => activeTab.label === tab.label;
  const tabId = (label: string) => `${label}-tab`;
  const panelId = (label: string) => `${label}-panel`;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const elements = Array.from(tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]') || []);
    const current = elements.findIndex((el) => event.currentTarget === el);
    const nextTab = getNextIndex(current, elements);
    const prevTab = getPreviousIndex(current, elements);
    const lastTab = elements.length - 1;

    const goTo = (index: number) => () => {
      event.stopPropagation();
      event.preventDefault();
      const goToElement = elements[index];
      goToElement.focus();
      goToElement.click();
      goToElement.scrollIntoView();
    };

    const interactionsMap = new Map([
      ['ArrowLeft', goTo(prevTab)],
      ['ArrowRight', goTo(nextTab)],
      ['Home', goTo(0)],
      ['End', goTo(lastTab)],
    ]);

    const interaction = interactionsMap.get(event.key);
    interaction?.();
  };

  return (
    <>
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Select tab"
        aria-orientation="horizontal"
        className="flex gap-2 border-b border-b-neutral-200 pb-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={tabId(tab.label)}
            aria-controls={panelId(tab.label)}
            aria-selected={isActive(tab)}
            disabled={tab.disabled}
            tabIndex={isActive(tab) ? 0 : -1}
            onClick={() => setActiveTab(tab)}
            onKeyDown={handleKeyDown}
            className={classNames(
              'px-4 py-2 rounded-md font-medium whitespace-nowrap text-neutral-500 hover:enabled:bg-primary-100 hover:enabled:text-primary-800 active:enabled:bg-primary-200 active:enabled:text-primary-900 disabled:text-disabled-500 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)]',
              { '!bg-neutral-100 !text-black': isActive(tab) },
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div key={tab.label} role="tabpanel" id={panelId(tab.label)} aria-labelledby={tabId(tab.label)}>
          {isActive(tab) && <p className="p-4 text-neutral-500">Content for tab {tab.label}</p>}
        </div>
      ))}
    </>
  );
}

// #endregion source
TabsBasic.getLayout = ShowcasePageLayout;
