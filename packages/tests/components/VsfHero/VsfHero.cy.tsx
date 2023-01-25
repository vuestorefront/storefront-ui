/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import type { ReactNode } from 'react';
import { h } from 'vue';
import { mount, Wrapper, useComponent } from '../../utils/mount';
import { VsfHeroDirection } from '../../../sfui/frameworks/react/components/VsfHero/types';

const { vue: VsfHeroVue, react: VsfHeroReact } = await useComponent('VsfHero');
import VsfHeroBaseObject from './VsfHero.PageObject';
import { useImage } from '../../utils/media';

describe('VsfHero', () => {
  const page = () => new VsfHeroBaseObject('hero');
  let hero_img: string;
  let hero_bg_mobile: string;
  let hero_bg_desktop: string;

  before(() => {
    useImage('hero/hero_img.png').then((img) => (hero_img = img));
    useImage('hero/hero_bg_mobile.png').then((img) => (hero_bg_mobile = img));
    useImage('hero/hero_bg_desktop.png').then((img) => (hero_bg_desktop = img));
  });

  const initializeComponent = ({
    direction = VsfHeroDirection.horizontal,
    ...props
  }: {
    direction?: VsfHeroDirection;
    slotMedia?: ReactNode;
    bgImgMobileSrc?: string;
    bgImgDesktopSrc?: string;
  } = {}) => {
    return mount({
      vue: {
        component: VsfHeroVue,
        props: { direction, ...props },
        slots: {
          media: () => h('img', { src: hero_img, class: 'vsf-hero-img' }),
          default: () => h('div', [h('h1', 'Title'), h('p', 'Description')]),
        },
      },
      react: (
        <Wrapper
          direction={direction}
          slotMedia={<img src={hero_img} className="vsf-hero-img" />}
          {...props}
          component={VsfHeroReact}
        >
          <div>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </Wrapper>
      ),
    });
  };

  describe('When direction: horizontal', () => {
    it('should render image above the content on mobile', () => {
      cy.viewport(370, 700);
      initializeComponent({ direction: VsfHeroDirection.horizontal });

      page().makeSnapshot();
    });
    it('should render image on the right side on desktop', () => {
      cy.viewport(1200, 800);
      initializeComponent({ direction: VsfHeroDirection.horizontal });

      page().makeSnapshot();
    });
  });

  describe('When direction: horizontal reversed', () => {
    it('should render image above the content on mobile', () => {
      cy.viewport(370, 700);
      initializeComponent({ direction: VsfHeroDirection.horizontalReverse });

      page().makeSnapshot();
    });
    it('should render image on the left side on desktop', () => {
      cy.viewport(1200, 800);
      initializeComponent({ direction: VsfHeroDirection.horizontalReverse });

      page().makeSnapshot();
    });
  });

  describe('When backbground images are set', () => {
    it('should render mobile background image only for small screens', () => {
      cy.viewport(370, 700);
      initializeComponent({ bgImgMobileSrc: hero_bg_mobile, bgImgDesktopSrc: hero_bg_desktop });

      page().hasBgImg(hero_bg_mobile).notHaveBgImg(hero_bg_desktop);
    });

    it('should render desktop background image only for bigger screens', () => {
      cy.viewport(1200, 800);
      initializeComponent({ bgImgMobileSrc: hero_bg_mobile, bgImgDesktopSrc: hero_bg_desktop });

      page().hasBgImg(hero_bg_desktop).notHaveBgImg(hero_bg_mobile);
    });
  });
});
