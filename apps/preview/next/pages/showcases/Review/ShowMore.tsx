import { VsfRating, VsfIconCheck, VsfIconThumbUp, VsfIconThumbDown, VsfCounter } from '@storefront-ui/react';
import { useState } from 'react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const content =
    "I recently purchased a pair of sneakers and I am thoroughly impressed with their quality and comfort. The design is sleek and modern, and the shoes are available in a variety of colors to suit anyone's style preferences. The upper is made of a breathable and durable material that allows my feet to stay cool and dry during long walks or runs. The sole is also very comfortable and provides great support for my feet, making it easy for me to wear them all day without experiencing any discomfort or fatigue. Overall, I highly recommend these sneakers to anyone in the market for a comfortable and stylish shoe that can handle any activity. They are definitely worth the investment!";

  const charLimit = 400;
  const isButtonVisible = content.length > charLimit;
  const truncatedContent = isButtonVisible && isCollapsed ? `${content.substring(0, charLimit)}...` : content;

  return (
    <article className="w-full p-4 border rounded-md">
      <p className="pb-2 font-medium">I love them</p>
      <header className="flex flex-col pb-6 space-y-2 md:flex-row md:justify-between md:space-y-0">
        <div className="flex flex-col items-start">
          <span className="text-sm text-neutral-900">Karla</span>
          <span className="flex items-center pr-2 text-xs text-neutral-500">
            <VsfRating value={5} max={5} size="xs" className="mr-2" />2 days ago
          </span>
        </div>
        <div className="flex items-end">
          <p className="flex items-center text-xs truncate text-primary-700">
            <span className="mr-2 text-xs text-neutral-500">Karla | Black, XS</span>
            <VsfIconCheck size="xs" className="mr-1" /> Verified purchase
          </p>
        </div>
      </header>
      <div className="pb-2 text-sm text-neutral-900">{truncatedContent}</div>
      {isButtonVisible ? (
        <button
          type="button"
          className="inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800"
          onClick={() => {
            setIsCollapsed((currentState) => !currentState);
          }}
        >
          {isCollapsed ? 'Read more' : 'Read less'}
        </button>
      ) : null}
      <footer className="flex items-center justify-between">
        <div className="text-sm text-neutral-500">
          <button type="button" className="mr-6 hover:text-primary-800">
            <VsfIconThumbUp size="sm" className="mr-2.5" />
            <VsfCounter size="sm" className="text-inherit">
              6
            </VsfCounter>
          </button>
          <button type="button" className="hover:text-primary-800">
            <VsfIconThumbDown size="sm" className="mr-2.5" />
            <VsfCounter size="sm" className="text-inherit">
              2
            </VsfCounter>
          </button>
        </div>

        <button className="px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800" type="button">
          Report abuse
        </button>
      </footer>
    </article>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
