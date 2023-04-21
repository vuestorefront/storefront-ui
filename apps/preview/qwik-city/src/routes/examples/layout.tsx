import { component$, createContextId, Slot, useContextProvider, useSignal, useStore } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import {
  SfButton,
  SfButtonSize,
  SfButtonVariant,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfListItem,
} from '@storefront-ui/qwik';
import { ControlsType } from '~/components/utils/types';

export const EXAMPLES_STATE = createContextId<{data: {controls: ControlsType, state: any}}>('EXAMPLES_STATE');

const files = import.meta.glob('./**');
const paths = Object.keys(files);
const groups = paths.reduce((prev: Record<string, { showcases: string[] }>, curr) => {
  const showcasePathArray = curr.slice(2).split('/');
  const showcaseName = showcasePathArray[showcasePathArray.length - 2];
  const groupName: string = showcasePathArray[0];
  if (groupName in prev) {
    prev[groupName].showcases.push(showcaseName);
  } else {
    prev[groupName] = { showcases: [showcaseName] };
  }
  return prev;
}, {});

export default component$(() => {
  const isOpenSignal = useSignal(true);
  const location = useLocation();
  const groupItemHref = (groupName: string, showcaseName: string) => `/examples/${groupName}/${showcaseName}`;
  
  const state = useStore({data: {}}, {deep: true});
  useContextProvider(EXAMPLES_STATE, state);

  const isDocsRoute = location.url.searchParams.get('doc');
  return (
    <div class="e-page-examples">
      {isDocsRoute ? (
        <div class={`sidebar ${isOpenSignal.value ? '' : 'sidebar-collapsed'}`}>
          <header class="sidebar-heading">
            <h2>StorefrontUI v2</h2>
            <h3>Qwik Blocks</h3>
          </header>
          <SfButton
            class="sidebar-toggle"
            variant={SfButtonVariant.tertiary}
            size={SfButtonSize.sm}
            onClick$={() => {
              isOpenSignal.value = !isOpenSignal.value;
            }}
            aria-label={isOpenSignal.value ? 'Hide sidebar' : 'Open sidebar'}
          >
            <div q:slot="prefix">{isOpenSignal.value ? <SfIconChevronLeft /> : <SfIconChevronRight />}</div>
          </SfButton>
          <ul class="sidebar-list flex flex-col">
            {Object.keys(groups).map((group) => (
              <>
                {groups[group].showcases.map((showcaseName) => (
                  <li key={showcaseName} data-sidebar-component={showcaseName}>
                    <Link href={groupItemHref(group, showcaseName)}>
                      <SfListItem
                        selected={location.url.pathname === groupItemHref(group, showcaseName)}
                        class={location.url.pathname === groupItemHref(group, showcaseName) ? 'font-medium' : ''}
                        as="span"
                      >
                        {showcaseName}
                      </SfListItem>
                    </Link>
                  </li>
                ))}
              </>
            ))}
          </ul>
        </div>
      ) : null}
      <div class="e-page">
        <div class="e-page-component">
          <Slot />
        </div>
      </div>
    </div>
  );
});
