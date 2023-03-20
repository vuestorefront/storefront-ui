import ApplePayLogo from '@assets/apple-pay-logo.svg';
import GooglePayLogo from '@assets/google-pay-logo.svg';
import PayPalLogo from '@assets/paypal-logo.svg';
import VisaLogo from '@assets/visa-logo.svg';
import { ShowcasePageLayout } from '../../showcases';

// List of payment methods
const paymentMethods = [
  {
    label: 'Credit card',
    value: 'credit-card',
    logo: VisaLogo.src,
    active: true,
  },
  {
    label: 'PayPal',
    value: 'paypal',
    logo: PayPalLogo.src,
    active: true,
  },
  {
    label: 'ApplePay',
    value: 'applepay',
    logo: ApplePayLogo.src,
    active: true,
  },
  {
    label: 'GooglePay',
    value: 'googlepay',
    logo: GooglePayLogo.src,
    active: false,
  },
];

export function Showcase() {
  return (
    <fieldset>
      <legend className="mb-4 typography-headline-5 font-bold text-neutral-900">Payment method</legend>
      <div className="grid grid-cols-2 gap-4 items-stretch">
        {paymentMethods.map(({ label, value, logo, active }) => (
          <label key={value} className="relative">
            <input disabled={!active} type="radio" name="payment_method" value={value} className="peer sr-only" />
            <div className="h-full flex flex-col items-center justify-center py-7 px-4 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-200 hover:bg-primary-100 peer-focus:border-primary-200 peer-focus:bg-primary-100 active:border-primary-300 active:bg-primary-200 peer-checked:outline peer-checked:outline-2 peer-checked:outline-primary-700 peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:[&_img]:grayscale">
              <img src={logo} alt={label} className="h-6 select-none" />
              {!active && (
                <p className="absolute bottom-2 select-none text-disabled-900 typography-text-xs">Coming soon</p>
              )}
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
