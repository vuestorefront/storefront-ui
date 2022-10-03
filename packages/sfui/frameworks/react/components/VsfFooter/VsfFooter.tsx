import Link from 'next/link';
import type { VsfFooterProps } from './types';

export default function VsfFooter({
  categories = [],
  socialMedia = [],
  companyName = '',
  contactOptions = [],
  bottomLinks = [],
}: VsfFooterProps): JSX.Element {
  return (
    <footer className="vsf-footer">
      <div className="vsf-footer__wrapper--categories">
        {categories.map((category) => (
          <div className="vsf-footer__categories" key={category.label}>
            <span className="vsf-footer__label--category">{category.label}</span>
            {category.subcategories?.map((subcategory) => (
              <Link href={subcategory.link} key={subcategory.label}>
                <a className="vsf-footer__label--subcategory">{subcategory.label}</a>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="vsf-footer__wrapper--contact">
        {contactOptions.map((contactOption) => (
          <div className="vsf-footer__contact" key={contactOption.label}>
            {contactOption.icon}
            <Link href={contactOption.link} key={contactOption.label}>
              <a className="vsf-footer__label--contact">{contactOption.label}</a>
            </Link>
            {contactOption.details?.map((option) => (
              <span className="vsf-footer__contact--option" key={option}>
                {option}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="vsf-footer__wrapper--social-media">
        <div className="vsf-footer__social-media">
          {socialMedia.map((element) => (
            <Link href={element.link} key={element.label}>
              <a className="vsf-footer__label--social-media" aria-label={`Go to ${element.label} page`}>
                {element.icon}
              </a>
            </Link>
          ))}
        </div>
        <div className="vsf-footer__bottom-links">
          {bottomLinks.map((element) => (
            <Link href={element.link} key={element.label}>
              <a className="vsf-footer__label--bottom-links">{element.label}</a>
            </Link>
          ))}
        </div>
        <span className="vsf-footer__company-name">{companyName}</span>
      </div>
    </footer>
  );
}
