import { useStore, For, Show } from '@builder.io/mitosis';
import VsfIconHelp from '../VsfIcons/VsfIconHelp.lite';
import VsfIconChat from '../VsfIcons/VsfIconChat.lite';
import VsfIconPhone from '../VsfIcons/VsfIconPhone.lite';
import VsfIconFacebook from '../VsfIcons/VsfIconFacebook.lite';
import VsfIconTwitter from '../VsfIcons/VsfIconTwitter.lite';
import VsfIconInstagram from '../VsfIcons/VsfIconInstagram.lite';
import VsfIconPinterest from '../VsfIcons/VsfIconPinterest.lite';
import VsfIconYouTube from '../VsfIcons/VsfIconYoutube.lite';

export type VsfLinkType = {
  label: string;
  link: string;
};

export type VsfCategoriesType = {
  label: string;
  subcategories: VsfLinkType[];
};

export type VsfContactOptionsType = {
  label: string;
  link: string;
  details: string[]
};

export interface VsfFooterProps {
  categories: VsfCategoriesType[];
  socialMedia: VsfLinkType[];
  companyName: string;
  contactOptions: VsfContactOptionsType[];
  bottomLinks: VsfLinkType[]; 
}

const DEFAULT_VALUES = {
  categories: [],
  socialMedia: [],
  companyName: '',
  contactOptions: [],
  bottomLinks: []
};

export default function VsfFooter(props: VsfFooterProps) {
  const state = useStore({
    get useVsfCategoriesProp() {
        return props.categories || DEFAULT_VALUES.categories;
    },
    get useVsfSocialMediaProp() {
      return props.socialMedia || DEFAULT_VALUES.socialMedia;
    },
    get useVsfCompanyNameProp() {
      return props.companyName || DEFAULT_VALUES.companyName;
    },
    get useVsfContactOptionsProp() {
      return props.contactOptions || DEFAULT_VALUES.contactOptions;
    },
    get useVsfBottomLinksProp() {
      return props.bottomLinks || DEFAULT_VALUES.bottomLinks;
    },
  });
return (
  <>
    <footer className="pt-10 bg-gray-100">
        <div className="grid grid-cols-[1fr_1fr] medium:grid-cols-[1fr_1fr_1fr_1fr] px-4 medium:px-6 pb-10">
          <For each={state.useVsfCategoriesProp}>{(category, index) => 
              <div key={`${category.label}-${index}`} className='min-w-[120px] extra-small:min-w-[172px]'>
                  <span className='pb-2 text-lg font-medium leading-7 text-gray-900 font-body'>
                      {category.label}
                  </span>
                  <For each={category.subcategories}>{(subcategory, index) => 
                      <a
                      key={`${subcategory.label}_${index}`}
                      href={subcategory.link}
                      class="block py-2 text-sm font-normal leading-5 text-gray-500 font-body"
                    >
                      { subcategory.label }
                    </a>}
                  </For>
              </div>}
          </For>
        </div>
        <div class="py-10 large:flex border-t-[1px] border-gray-200">
          <For each={state.useVsfContactOptionsProp}>{(element, index) => 
            <div className="mx-auto my-4 text-center" key={`${element.label}-${index}`}>
              <Show when={index === 0}>
                <VsfIconHelp size='lg' />
              </Show>
              <Show when={index === 1}>
                <VsfIconChat size='lg' />
              </Show>
              <Show when={index === 2}>
                <VsfIconPhone size="lg" />
              </Show>
              <a
                className="block py-1 my-2 text-lg font-medium leading-7 text-gray-900 underline font-body"
                href={element.link}
              >
                {element.label}
              </a>
              <For each={element.details}>{(option, index) => 
                <span key={`${option}-${index}`} className="block text-sm font-normal leading-5 text-gray-500 font-body">{option}</span>
              }
              </For>
            </div>}
          </For>
        </div>
        <div class="justify-end px-4 py-10 bg-gray-900 large:flex large:py-6">
          <div class="flex justify-center py-2 large:self-start">
            <For each={state.useVsfSocialMediaProp}>{(element, index) => 
              <a key={`${element.label}-${index}`} aria-label={`Go to ${element.label} page`} className="mr-4 text-white" href={element.link}>
                <Show when={element.label.toLowerCase() === 'facebook'}>
                  <VsfIconFacebook/>
                </Show>
                <Show when={element.label.toLowerCase() === 'twitter'}>
                  <VsfIconTwitter/>
                </Show>
                <Show when={element.label.toLowerCase() === 'pinterest'}>
                  <VsfIconPinterest/>
                </Show>
                <Show when={element.label.toLowerCase() === 'youtube'}>
                  <VsfIconYouTube/>
                </Show>
                <Show when={element.label.toLowerCase() === 'instagram'}>
                  <VsfIconInstagram/>
                </Show>
              </a>}
            </For>
          </div>
        <div className="flex justify-center gap-6 py-2 my-4 large:ml-auto large:my-0">
          <For each={state.useVsfBottomLinksProp}>{(element, index) => 
            <a key={`${element.label}-${index}`} className="text-sm font-normal leading-5 text-center text-white font-body" href={element.link}>
              {element.label}
            </a>
            }
          </For>
        </div>
        <span
          className="block py-2 text-sm font-normal leading-5 text-center text-white/50 font-body large:ml-6"
        >{state.useVsfCompanyNameProp}</span>
      </div>
    </footer>
  </>
  );
}
