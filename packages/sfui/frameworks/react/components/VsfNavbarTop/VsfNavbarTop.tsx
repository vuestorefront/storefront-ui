import classNames from 'classnames';
import type { VsfNavbarTopProps } from './types';
import VsfSearch from '../VsfSearch';

export default function VsfNavbarTop({
  className,
  variant,
  searchPlaceholder,
  searchAutocomplete,
  searchValue,
  slotLogo,
  slotMenu,
  slotActions,
  slotMenuButton,
  slotSearch,
}: VsfNavbarTopProps) {
  return (
    <header className={classNames(className, 'vsf-navbar-top', { 'vsf-navbar-top--branded': variant === 'branded' })}>
      <div>{slotLogo}</div>
      <div className="vsf-navbar-top__menu-wrapper">
        <nav>
          <ul className="vsf-navbar-top__menu">{slotMenu}</ul>
        </nav>
        <ul>{slotMenuButton}</ul>
      </div>
      {slotSearch || (
        <VsfSearch
          className="vsf-navbar-top__search"
          placeholder={searchPlaceholder}
          value={searchValue}
          autocomplete={searchAutocomplete}
        />
      )}
      <ul className="vsf-navbar-top__actions">{slotActions}</ul>
    </header>
  );
}
