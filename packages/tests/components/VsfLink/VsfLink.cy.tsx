/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { ref } from "vue";
import { mount, useComponent, Wrapper } from '../../utils/mount';

const { vue: VsfLinkVue, react: VsfLinkReact } = useComponent('VsfLink');
import { VsfLinkVariant } from '../../../sfui/frameworks/vue/components/VsfLink/types';
import VsfLinkBaseObject from "./VsfLink.PageObject";
import { isReact, isVue } from "../../utils/utils";
import { wrappedPromise } from "../../utils/wrappedPromise";

['a', 'RouterLink', 'Link'].forEach(type => {
  // Do not test `RouterLink' in react, and `Link` in vue
  if(isReact && type === 'RouterLink' || isVue && type === 'Link') return;

  describe(`VsfLink with tag ${type}`, async () => {
    const isRouterLink = type === 'RouterLink';
    let slotContent = 'Link';
    const page = () => new VsfLinkBaseObject('link');

    const initializeComponent = ({
      variant,
      link = '',
      tag,
      slotDefault = slotContent,
      router
    } : {
      variant?: VsfLinkVariant;
      link?: string | Record<string, unknown>;
      tag?: 'a' | any,
      slotDefault?: string;
      router?: any
    }) => {
      return mount({
        vue: {
          component: VsfLinkVue,
          global: {
            plugins: [router]
          },
          props: {
            variant,
            tag,
            link
          },
          slots: {
            default: () => slotDefault,
          },
        },
        react: <Wrapper
          variant={variant}
          tag={tag}
          link={link as string}
          component={VsfLinkReact}
        >
          {slotDefault}
        </Wrapper>
      });
    }

    it('initial state', () => {
      initializeComponent({});

      page()
        .contains(slotContent)
        .makeSnapshot();
    });

    describe('when prop variant is set to ', () => {
      Object.values(VsfLinkVariant).forEach((componentVariant) => {
        describe(`${componentVariant}`, () => {
          it(`should render correct ${componentVariant} variant`, () => {
            initializeComponent({ variant: componentVariant});

            page().makeSnapshot();
          });
        });
      });
    });

    describe('when link prop has a value', () => {
      it('should has href with link prop value', () => {
        const link = '/home';
        initializeComponent({ link });

        page().hasHref(link)
      });
    });

    describe('when no default slot', () => {
      it('should be without content', () => {
        initializeComponent({ slotDefault: '' });

        page().haveNoContent();
      });
    });

    describe('when prop tag', () => {
      describe('"a"', () => {
        it('should render as <a>', () => {
          const tag = 'a';
          initializeComponent({ tag });

          page().hasTag('A')
        });
      });
    });

    // TODO: check contextApi and provide/inject resolution inside VsfLink component

    // vue
    if(isRouterLink) {
      const loadRouterConfig = () => wrappedPromise('dynamic import router', () => import('../../../../../router/index'));
      const loadVueRouter = () => wrappedPromise('dynamic import vue-router', () => import('vue-router'));

      describe('when router available globally and link=Object', () => {
        it('should render "RouterLink"', () => {
          const link = '/home';
          const tag = ref();

          loadRouterConfig()
            .then(router => {
              return loadVueRouter().then(({RouterLink}) => ({ RouterLink, router}))
            }).then(({RouterLink, router}) => {
              initializeComponent({ tag, link: { path: link }, router: router.default})

              page()
                .hasTag('A')
                .hasHref(`/__cypress/src${link}`);
              cy.then(() => {
                tag.value = 'a';
              }).then(() => {
                page()
                  .hasTag('A')
                  .hasHref(`[object Object]`);
              }).then(() => {
                tag.value = RouterLink;
              }).then(() => {
                page()
                  .hasTag('A')
                  .hasHref(`/__cypress/src${link}`);
              });
            });
        });
      });
    }
    // end vue

    // react
    describe('when next available globally', () => {
      const loadNextLink = () => wrappedPromise('dynamic import next/link', () => import('next/link'));

      it('should render "Link" as default', () => {
        const link = '/home';
        const tag = ref();

        loadNextLink().then((Link) => {
          initializeComponent({ tag, link })

          page()
            .hasTag('A')
            .hasHref(link);
          cy.then(() => {
            tag.value = 'a';
          }).then(() => {
            page()
              .hasTag('A')
              .hasHref(link);
          }).then(() => {
            tag.value = Link.default
          }).then(() => {
            page()
              .hasTag('A')
              .hasHref(link);
          });
        });
      });
    });
    // end react
  });
});
