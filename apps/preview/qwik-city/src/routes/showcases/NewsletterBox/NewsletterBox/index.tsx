import { $, component$, useSignal } from '@builder.io/qwik';
import { SfButton, SfIconCheckCircle, SfIconClose, SfInput, SfLink } from '@storefront-ui/qwik';

export default component$(() => {
  const inputValueSignal = useSignal('');
  const positiveAlertSignal = useSignal(false);
  const errorAlertSignal = useSignal(false);
  const emailDataBaseSignal = useSignal<string[]>([]);

  const checkEmailDataBase = $((email: string) => emailDataBaseSignal.value.find((element) => element === email));

  const subscribeNewsletter = $(async (email: string) => {
    if (!email) return;
    if (await checkEmailDataBase(email)) {
      errorAlertSignal.value = true;
      setTimeout(() => (errorAlertSignal.value = false), 5000);
    } else {
      emailDataBaseSignal.value = [...emailDataBaseSignal.value, email];
      positiveAlertSignal.value = true;
      setTimeout(() => (positiveAlertSignal.value = false), 5000);
    }
    console.log(email);
    inputValueSignal.value = '';
  });

  return (
    <div class="relative">
      <div class="bg-neutral-100 p-4 sm:p-10 text-center">
        <p class="typography-headline-4 sm:typography-headline-3 font-bold">
          Subscribe and get discount on your first purchase!
        </p>
        <p class="typography-text-sm sm:typography-text-base my-2 mb-4">
          Be aware of upcoming sales and events. Receive gifts and special offers!
        </p>
        <form
          class="mb-4 flex flex-col sm:flex-row gap-4 max-w-[688px] mx-auto"
          preventdefault:submit
          onSubmit$={() => {
            subscribeNewsletter(inputValueSignal.value);
          }}
        >
          <SfInput
            value={inputValueSignal.value}
            type="email"
            wrapperClass="grow"
            placeholder="Type your email"
            onChange$={(event) => {
              inputValueSignal.value = event.target.value;
            }}
          />
          <SfButton type="submit" size="lg">
            Subscribe to Newsletter
          </SfButton>
        </form>
        <div class="typography-text-xs text-neutral-600">
          To learn how we process your data, visit our{' '}
          <SfLink href="#" class="!text-neutral-600">
            Privacy Notice
          </SfLink>
          . You can{' '}
          <SfLink href="#" class="!text-neutral-600">
            unsubscribe
          </SfLink>{' '}
          at any time without costs.
        </div>
      </div>
      <div class="absolute top-0 right-0 mx-2 mt-2 sm:mr-6">
        {positiveAlertSignal.value && (
          <div
            role="alert"
            class="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <SfIconCheckCircle class="mr-2 my-2 text-positive-700" />
            <p class="py-2 mr-2">Your email has been added to the newsletter subscription.</p>
            <button
              type="button"
              class="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
              aria-label="Close alert"
              onClick$={() => {
                positiveAlertSignal.value = false;
              }}
            >
              <SfIconClose class="hidden md:block" />
              <SfIconClose size="sm" class="md:hidden block" />
            </button>
          </div>
        )}
        {errorAlertSignal.value && (
          <div
            role="alert"
            class="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <p class="py-2 mr-2">This email is already subscribed for our newsletter.</p>
            <button
              type="button"
              class="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
              aria-label="Close alert"
              onClick$={() => {
                errorAlertSignal.value = false;
              }}
            >
              <SfIconClose class="hidden md:block" />
              <SfIconClose size="sm" class="md:hidden block" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});
