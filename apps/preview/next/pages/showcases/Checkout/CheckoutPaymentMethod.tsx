import { ShowcasePageLayout } from '../../showcases';
// #region source

// List of payment methods
const paymentMethods = [
  {
    label: 'Credit card',
    value: 'credit-card',
    logo: '/visa-logo.svg',
    active: true,
  },
  {
    label: 'PayPal',
    value: 'paypal',
    logo: '/paypal-logo.svg',
    active: true,
  },
  {
    label: 'ApplePay',
    value: 'applepay',
    logo: '/apple-pay-logo.svg',
    active: true,
  },
  {
    label: 'GooglePay',
    value: 'googlepay',
    logo: '/google-pay-logo.svg',
    active: false,
  },
];

export default function PaymentMethods() {
  return (
    <fieldset>
      <legend className="mb-4 font-bold typography-headline-5 text-neutral-900">Payment method</legend>
      <div className="grid items-stretch grid-cols-2 gap-4">
        {paymentMethods.map(({ label, value, logo, active }) => (
          <label key={value} className="relative">
            <input disabled={!active} type="radio" name="payment_method" value={value} className="sr-only peer" />
            <div className="h-full flex flex-col items-center justify-center py-7 px-4 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-200 hover:bg-primary-100 peer-focus:border-primary-200 peer-focus:bg-primary-100 active:border-primary-300 active:bg-primary-200 peer-checked:outline peer-checked:outline-2 peer-checked:outline-primary-700 peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:[&_img]:grayscale">
              <img src={logo} alt={label} className="h-6 select-none" />
              {!active && (
                <p className="absolute select-none bottom-2 text-disabled-900 typography-text-xs">Coming soon</p>
              )}
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

// #endregion source
PaymentMethods.getLayout = ShowcasePageLayout;
