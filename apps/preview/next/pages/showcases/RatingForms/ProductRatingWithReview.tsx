/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState, useId } from 'react';
import classNames from 'classnames';
import { SfButton, SfRatingButton, SfInput } from '@storefront-ui/react';

export default function ProductRatingWithReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [username, setUsername] = useState('');
  const [reviewCharacterLimit] = useState(5000);
  const ratingLabelId = useId();

  const reviewIsAboveLimit = review.length > reviewCharacterLimit;
  const reviewCharsCount = reviewCharacterLimit - review.length;

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Form submitted with ${rating} and ${review} by ${username}`);
  };

  return (
    <div className="max-w-[376px] md:max-w-[768px]">
      <h3 className="font-bold py-2 pl-4 pr-3 typography-headline-4">Leave a review</h3>
      <form
        className="grid grid-cols-[100px_1fr] py-2 px-4 gap-4 md:grid-cols-[176px_1fr] grid-rows-[100px_1fr] md:grid-rows-[28px_1fr] items-center md:items-start"
        onSubmit={submitForm}
      >
        <img
          src="http://localhost:3100/@assets/smartwatch.png"
          alt="Smartwatch"
          width="100"
          height="100"
          className="mx-auto border border-neutral-200 rounded-md aspect-square w-[100px] md:w-[176px]"
        />
        <p className="text-left text-neutral-900 md:typography-text-lg">Smartwatch Fitness Tracker</p>
        <div className="col-span-2 md:col-start-2">
          <div className="flex items-center justify-between">
            <p id={ratingLabelId} className="typography-label-sm font-medium text-neutral-900">
              Your rating:
            </p>
            <SfRatingButton
              value={rating}
              aria-labelledby={ratingLabelId}
              onChange={setRating}
              className="p-1 gap-x-2"
            />
          </div>
          <label className="my-4 block">
            <span className="block typography-label-sm font-medium mb-0.5 text-neutral-900">
              Product review (optional)
            </span>
            <textarea
              value={review}
              placeholder="Describe your experience eg. Great product! The quality exceeded my expectations, and it's incredibly versatile. I highly recommend it to anyone looking for a reliable and durable solution."
              className="block w-full py-2 pl-4 pr-3 min-h-[138px] rounded-md ring-1 ring-neutral-300 placeholder:text-neutral-500"
              onChange={(event) => setReview(event.target.value)}
            />
            <span
              className={classNames(
                'block text-xs mt-0.5 text-right',
                reviewIsAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500',
              )}
            >
              {reviewCharsCount}
            </span>
          </label>
          <label className="block mb-6">
            <span className="block mb-0.5 typography-label-sm font-medium text-neutral-900">Your name (optional)</span>
            <SfInput value={username} onChange={(event) => setUsername(event.target.value)} />
          </label>
          <div className="flex justify-end gap-x-4">
            <SfButton variant="secondary" type="button" className="flex-1 md:flex-initial">
              Cancel
            </SfButton>
            <SfButton type="submit" className="flex-1 md:flex-initial">
              Submit Review
            </SfButton>
          </div>
        </div>
      </form>
    </div>
  );
}

// #endregion source
ProductRatingWithReview.getLayout = ShowcasePageLayout;
