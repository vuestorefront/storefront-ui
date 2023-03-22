/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfSelect, SfInput, SfCheckbox, SfButton } from '@storefront-ui/react';
import { FormEventHandler, ChangeEvent, FocusEvent, useState } from 'react';

// Here you should provide a list of countries you want to support
// or use an up-to-date country list like: https://www.npmjs.com/package/country-list
const countries = ['Germany', 'Great Britain', 'Poland', 'United States of America'] as const;
const states = ['California', 'Florida', 'New York', 'Texas'] as const;

export default function AddressForm() {
  const [streetIsValid, setStreetIsValid] = useState(true);

  const validateStreet = (e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>) => {
    setStreetIsValid(!!e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    /* your submit handler e.g.: */
    const form = e.target as HTMLFormElement;

    // data can be accessed in form of FormData
    const formData = new FormData(form);
    // or JSON object
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
  };

  return (
    <form className="p-4 flex gap-4 flex-wrap text-neutral-900" onSubmit={onSubmit}>
      <h2 className="w-full typography-headline-4 md:typography-headline-3 font-bold">Billing address</h2>
      <label className="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
        <span className="typography-text-sm font-medium">First Name</span>
        <SfInput name="firstName" autoComplete="given-name" required />
      </label>
      <label className="w-full md:w-auto flex-grow flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Last Name</span>
        <SfInput name="lastName" autoComplete="family-name" required />
      </label>
      <label className="w-full flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Phone</span>
        <SfInput name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className="w-full flex flex-col gap-0.5 flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Country</span>
        <SfSelect name="country" placeholder="-- Select --" autoComplete="country-name" required>
          {countries.map((countryName) => (
            <option key={countryName}>{countryName}</option>
          ))}
        </SfSelect>
      </label>
      <div className="w-full md:w-auto flex-grow flex flex-col gap-0.5">
        <label>
          <span className="typography-text-sm font-medium">Street</span>
          <SfInput
            name="street"
            autoComplete="address-line1"
            className="mt-0.5"
            onBlur={validateStreet}
            onChange={validateStreet}
            required
            invalid={!streetIsValid}
          />
        </label>
        {!streetIsValid && (
          <strong className="typography-error-sm text-negative-700 font-medium">Please provide a street name</strong>
        )}
        <small className="typography-text-xs text-neutral-500">Street address or P.O. Box</small>
      </div>
      <div className="w-full flex flex-col gap-0.5 md:w-[120px]">
        <label>
          <span className="typography-text-sm font-medium">Apt#, Suite, etc</span>
          <SfInput name="aptNo" className="mt-0.5" />
        </label>
        <small className="typography-text-xs text-neutral-500">Optional</small>
      </div>
      <label className="w-full flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">City</span>
        <SfInput name="city" autoComplete="address-level2" required />
      </label>
      <label className="w-full md:w-auto flex flex-col gap-0.5 flex-grow">
        <span className="typography-text-sm font-medium">State</span>
        <SfSelect name="state" placeholder="-- Select --" autoComplete="address-level1" required>
          {states.map((stateName) => (
            <option key={stateName}>{stateName}</option>
          ))}
        </SfSelect>
      </label>
      <label className="w-full flex flex-col gap-0.5 md:w-[120px]">
        <span className="typography-text-sm font-medium">ZIP Code</span>
        <SfInput name="zipCode" placeholder="eg. 12345" autoComplete="postal-code" required />
      </label>

      <label className="w-full flex items-center gap-2">
        <SfCheckbox name="useAsShippingAddress" />
        Use as shipping address
      </label>

      <div className="w-full flex gap-4 mt-4 md:mt-0 md:justify-end">
        <SfButton type="reset" variant="secondary" className="w-full md:w-auto">
          Clear all
        </SfButton>
        <SfButton className="w-full md:w-auto">Save</SfButton>
      </div>
    </form>
  );
}

// #endregion source
AddressForm.getLayout = ShowcasePageLayout;
