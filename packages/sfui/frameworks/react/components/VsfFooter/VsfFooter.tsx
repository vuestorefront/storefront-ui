import type { VsfFooterProps } from './types';

export default function VsfFooter({
  categories,
  socialMedia,
  contactOptions,
  bottomLinks,
  companyName = '',
}: VsfFooterProps): JSX.Element {
  return (
    <footer className="vsf-footer">
      <div className="vsf-footer__wrapper--categories">{categories}</div>
      <div className="vsf-footer__wrapper--contact">{contactOptions}</div>
      <div className="vsf-footer__wrapper--social-media">
        <div className="vsf-footer__social-media">{socialMedia}</div>
        <div className="vsf-footer__bottom-links">{bottomLinks}</div>
        <span className="vsf-footer__company-name">{companyName}</span>
      </div>
    </footer>
  );
}
