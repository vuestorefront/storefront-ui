import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfButton, SfInput, SfLink, SfIconCheckCircle, SfIconClose } from '@storefront-ui/react';

export default function NewsletterBox() {
  const [inputValue, setInputValue] = useState('');
  const [positiveAlert, setPositiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [emailDataBase, setEmailDataBase] = useState<string[]>([]);

  const checkEmailDataBase = (email: string) => emailDataBase.find((element) => element === email);

  const subscribeNewsletter = (event: React.FormEvent<HTMLFormElement>, email: string) => {
    event.preventDefault();
    if (!email) return;
    if (checkEmailDataBase(email)) {
      setErrorAlert(true);
      setTimeout(() => setErrorAlert(false), 5000);
    } else {
      setPositiveAlert(true);
      setEmailDataBase(() => [...emailDataBase, email]);
      setTimeout(() => setPositiveAlert(false), 5000);
    }
    console.log(email);
    setInputValue('');
  };

  return (
    <div className="relative">
      <div className="bg-neutral-100 p-4 sm:p-10 text-center">
        <p className="typography-headline-4 sm:typography-headline-3 font-bold">
          Subscribe and get discount on your first purchase!
        </p>
        <p className="typography-text-sm sm:typography-text-base my-2 mb-4">
          Be aware of upcoming sales and events. Receive gifts and special offers!
        </p>
        <form
          className="mb-4 flex flex-col sm:flex-row gap-4 max-w-[688px] mx-auto"
          onSubmit={(event) => subscribeNewsletter(event, inputValue)}
        >
          <SfInput
            value={inputValue}
            type="email"
            wrapperClassName="grow"
            placeholder="Type your email"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <SfButton type="submit" size="lg">
            Subscribe to Newsletter
          </SfButton>
        </form>
        <div className="typography-text-xs text-neutral-600">
          To learn how we process your data, visit our{' '}
          <SfLink href="#" className="!text-neutral-600">
            Privacy Notice
          </SfLink>
          . You can{' '}
          <SfLink href="#" className="!text-neutral-600">
            unsubscribe
          </SfLink>{' '}
          at any time without costs.
        </div>
      </div>
      <div className="absolute top-0 right-0 mx-2 mt-2 sm:mr-6">
        {positiveAlert && (
          <div
            role="alert"
            className="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <SfIconCheckCircle className="mr-2 my-2 text-positive-700" />
            <p className="py-2 mr-2">Your email has been added to the newsletter subscription.</p>
            <button
              type="button"
              className="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
              aria-label="Close alert"
              onClick={() => setPositiveAlert(false)}
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
            <p className="py-2 mr-2">This email is already subscribed for our newsletter.</p>
            <button
              type="button"
              className="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
              aria-label="Close alert"
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
NewsletterBox.getLayout = ShowcasePageLayout;
