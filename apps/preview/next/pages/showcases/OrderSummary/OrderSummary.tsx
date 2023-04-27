import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfButton, SfInput, SfLink } from '@storefront-ui/react';

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

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  const itemsSubtotal = () =>
    orderDetails.originalPrice + orderDetails.savings + orderDetails.delivery + orderDetails.tax;

  const totalPrice = () => itemsSubtotal() + promoCode;

  const checkPromoCode = () =>
    inputValue.toUpperCase() === 'VSF2020' ? setPromoCode(-100) : alert('Your promo code is not valid');

  const removePromoCode = () => setPromoCode(0);

  return (
    <div className="md:shadow-lg md:rounded-md md:border md:border-neutral-100">
      <div className="flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4">
        <p className="typography-headline-4 font-bold md:typography-headline-3">Order Summary</p>
        <p className="typography-text-base font-medium">(Items: {orderDetails.items})</p>
      </div>
      <div className="px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0">
        <div className="flex justify-between typography-text-base pb-4">
          <div className="flex flex-col grow pr-2">
            <p>Items Subtotal</p>
            <p className="typography-text-xs text-neutral-500">Original Price</p>
            <p className="typography-text-xs text-secondary-700">Savings</p>
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
        {promoCode ? (
          <div className="flex items-center mb-5 py-5 border-y border-neutral-200">
            <p>PromoCode</p>
            <SfButton size="sm" variant="tertiary" className="ml-auto mr-2" onClick={removePromoCode}>
              Remove
            </SfButton>
            <p>{formatPrice(promoCode)}</p>
          </div>
        ) : (
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
        )}
        <p className="px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4">
          You are saving ${Math.abs(orderDetails.savings).toFixed(2)} on your order today!
        </p>
        <div className="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 border-b border-neutral-200">
          <p>Total</p>
          <p>{formatPrice(totalPrice())}</p>
        </div>
        <SfButton size="lg" className="w-full">
          Place Order And Pay
        </SfButton>
        <div className="typography-text-sm mt-4 text-center">
          By placing my order, you agree to our <SfLink href="/">Terms and Conditions</SfLink> and our{' '}
          <SfLink href="/">Privacy Policy.</SfLink>
        </div>
      </div>
    </div>
  );
}
// #endregion source
OrderSummary.getLayout = ShowcasePageLayout;
