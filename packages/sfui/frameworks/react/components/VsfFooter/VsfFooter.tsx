import LinkWrapper from '@sfui/sfui/frameworks/react/components/LinkWrapper/LinkWrapper';
import type { VsfFooterProps } from './types';

export default function VsfFooter({
  categories = [],
  socialMedia = [],
  companyName = '',
  contactOptions = [],
  bottomLinks = [],
  tag,
}: VsfFooterProps): JSX.Element {
  return (
    <footer className="vsf-footer">
      <div className="vsf-footer__wrapper--categories">
        {categories.map((category) => (
          <div className="vsf-footer__categories" key={category.label}>
            <span className="vsf-footer__label--category">{category.label}</span>
            {category.subcategories?.map((subcategory) => (
              <LinkWrapper link={subcategory.link} tag={tag} key={subcategory.label}>
                <a href={subcategory.link} className="vsf-footer__label--subcategory">
                  {subcategory.label}
                </a>
              </LinkWrapper>
            ))}
          </div>
        ))}
      </div>
      <div className="vsf-footer__wrapper--contact">
        {contactOptions.map((contactOption) => (
          <div className="vsf-footer__contact" key={contactOption.label}>
            {contactOption.icon}
            <LinkWrapper link={contactOption.link} tag={tag} key={contactOption.label}>
              <a href={contactOption.link} className="vsf-footer__label--contact">
                {contactOption.label}
              </a>
            </LinkWrapper>
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
          {socialMedia.map((social) => (
            <LinkWrapper link={social.link} tag={tag} key={social.label}>
              <a
                href={social.link}
                className="vsf-footer__label--social-media"
                aria-label={`Go to ${social.label} page`}
              >
                {social.icon}
              </a>
            </LinkWrapper>
          ))}
        </div>
        <div className="vsf-footer__bottom-links">
          {bottomLinks.map((bottomLink) => (
            <LinkWrapper link={bottomLink.link} tag={tag} key={bottomLink.label}>
              <a href={bottomLink.link} className="vsf-footer__label--bottom-links">
                {bottomLink.label}
              </a>
            </LinkWrapper>
          ))}
        </div>
        <span className="vsf-footer__company-name">{companyName}</span>
      </div>
    </footer>
  );
}
