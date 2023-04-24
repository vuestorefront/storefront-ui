import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfButton, SfIconCheckCircle, SfIconClose, SfInput, SfLink } from '@storefront-ui/react';

const orderDetails = {
  items: 3,
  originalPrice: 7824.97,
  savings: -787.0,
  delivery: 0.0,
  tax: 457.47,
};

export default function OrderSummary() {
  const [inputValue, setInputValue] = useState('');
  const [promoCode, setPromoCode] = useState(0);
  const [RemovedCodeAlert, setRemovedCodeAlert] = useState(false);
  const [AddedCodeAlert, setAddedCodeAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  const itemsSubtotal = () =>
    orderDetails.originalPrice + orderDetails.savings + orderDetails.delivery + orderDetails.tax;

  const totalPrice = () => itemsSubtotal() + promoCode;

  const checkPromoCode = () => {
    if ((promoCode === -100 && inputValue.toUpperCase() === 'VSF2020') || !inputValue) return;
    if (inputValue.toUpperCase() === 'VSF2020') {
      setPromoCode(-100);
      setAddedCodeAlert(true);
      setTimeout(() => setAddedCodeAlert(false), 5000);
    } else {
      setErrorAlert(true);
      setTimeout(() => setErrorAlert(false), 5000);
    }
  };

  const removePromoCode = () => {
    setPromoCode(0);
    setRemovedCodeAlert(true);
    setTimeout(() => setRemovedCodeAlert(false), 5000);
  };

  return (
    <div>
      <div className="md:shadow-lg md:rounded-md md:border md:border-neutral-100">
        <div className="flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4">
          <p className="typography-headline-4 font-bold md:typography-headline-3">Order summary</p>
          <p className="typography-text-base font-semibold">(Items: {orderDetails.items})</p>
        </div>
        <div className="px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0">
          <div className="flex justify-between typography-text-base pb-4">
            <div className="flex flex-col grow pr-2">
              <p>Items Subtotal</p>
              <p className="ml-auto typography-text-xs text-neutral-500">Original Price</p>
              <p className="ml-auto typography-text-xs text-secondary-700">Savings</p>
              <p className="my-2">Delivery</p>
              <p>Estimated Sales Tax</p>
            </div>
            <div className="flex flex-col text-right">
              <p>{formatPrice(itemsSubtotal())}</p>
              <p className="typography-text-xs text-neutral-500">{formatPrice(orderDetails.originalPrice)}</p>
              <p className="typography-text-xs text-secondary-700">{formatPrice(orderDetails.savings)}</p>
              <p className="my-2">{formatPrice(orderDetails.delivery)}</p>
              <p>{formatPrice(orderDetails.tax)}</p>
            </div>
          </div>
          {!!promoCode && (
            <div className="flex items-center py-4 border-t border-neutral-200">
              <p>PromoCode</p>
              <SfButton size="sm" variant="tertiary" className="ml-auto mr-2" onClick={removePromoCode}>
                Remove
              </SfButton>
              <p>{formatPrice(promoCode)}</p>
            </div>
          )}
          <div className="flex gap-x-2 py-4 border-y border-neutral-200 mb-4">
            <SfInput
              value={inputValue}
              placeholder="Enter promo code"
              wrapperClassName="grow"
              onChange={(event) => setInputValue(event.target.value)}
            />
            <SfButton variant="secondary" onClick={checkPromoCode}>
              Apply
            </SfButton>
          </div>
          <p className="px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4">
            You are saving ${Math.abs(orderDetails.savings).toFixed(2)} on your order today!
          </p>
          <div className="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 border-b border-neutral-200">
            <p>Total</p>
            <p>{formatPrice(totalPrice())}</p>
          </div>
          <SfButton size="lg" className="w-full">
            Place order and pay
          </SfButton>
          <div className="typography-text-sm mt-4 text-center">
            By placing my order, you agree to our <SfLink href="/">Terms and Conditions</SfLink> and our{' '}
            <SfLink href="/">Privacy Policy.</SfLink>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 mx-2 mt-2 sm:mr-6">
        {AddedCodeAlert && (
          <div
            role="alert"
            className="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <SfIconCheckCircle className="mr-2 my-2 text-positive-700" />
            <p className="py-2 mr-2">Your promo code has been added.</p>
            <button
              type="button"
              className="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
              aria-label="Close positive alert"
              onClick={() => setAddedCodeAlert(false)}
            >
              <SfIconClose className="hidden md:block" />
              <SfIconClose size="sm" className="md:hidden block" />
            </button>
          </div>
        )}
        {RemovedCodeAlert && (
          <div
            role="alert"
            className="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <SfIconCheckCircle className="mr-2 my-2 text-positive-700" />
            <p className="py-2 mr-2">Your promo code has been removed.</p>
            <button
              type="button"
              className="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
              aria-label="Close positive alert"
              onClick={() => setRemovedCodeAlert(false)}
            >
              <SfIconClose className="hidden md:block" />
              <SfIconClose size="sm" className="md:hidden block" />
            </button>
          </div>
        )}
        {errorAlert && (
          <div
            role="alert"
            className="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <p className="py-2 mr-2">This promo code is not valid.</p>
            <button
              type="button"
              className="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
              aria-label="Close error alert"
              onClick={() => setErrorAlert(false)}
            >
              <SfIconClose className="hidden md:block" />
              <SfIconClose size="sm" className="md:hidden block" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
// #endregion source
OrderSummary.getLayout = ShowcasePageLayout;
