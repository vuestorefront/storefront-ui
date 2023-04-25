import { component$ } from '@builder.io/qwik';
import { SfButton, SfIconPackage, SfIconPublishedWithChanges, SfIconWarehouse } from '@storefront-ui/qwik';

const cardDetails = [
  {
    icon: <SfIconPackage size="2xl" />,
    title: 'Free shipping',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
  {
    icon: <SfIconWarehouse size="2xl" />,
    title: 'Click & Collect',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
  {
    icon: <SfIconPublishedWithChanges size="2xl" />,
    title: 'Free 30-Day returns',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: true,
  },
];

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
      {cardDetails.map(({ icon, title, description, buttonText, isDisabled }) => (
        <div key={title} class="flex flex-col min-w-[325px] w-[375px] lg:w-[496px] items-center">
          <span class={{ 'text-disabled-900': isDisabled }}>{icon}</span>
          <div class="p-4 flex flex-col items-center">
            <p class={{ 'font-medium typography-text-base': true, 'text-disabled-900': isDisabled }}>{title}</p>
            <p
              class={{
                'mt-1 mb-4 font-normal typography-text-sm text-neutral-700 text-center': true,
                'text-disabled-700': isDisabled,
              }}
            >
              {description}
            </p>
            <SfButton size="sm" variant="secondary" disabled={isDisabled} class="mt-auto">
              {buttonText}
            </SfButton>
          </div>
        </div>
      ))}
    </div>
  );
});
