import { useState } from 'react';
import classnames from 'classnames';
import type { VsfReviewProps } from './types';

export default function VsfReview({
  title,
  content,
  date,
  author,
  slotRating,
  slotAuthorSuffix,
  slotActions,
  className,
  charLimit = 700,
  showMoreText = 'Read more',
  showLessText = 'Read less',
  ...attributes
}: VsfReviewProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const isButtonVisible = content.length > charLimit;
  const truncatedContent = isButtonVisible && isCollapsed ? `${content.substring(0, charLimit)}...` : content;

  return (
    <div className={classnames('vsf-review', className)} {...attributes}>
      <p className="vsf-review__title">{title}</p>
      <div className="vsf-review__data">
        <div className="vsf-review__data-leading">
          {slotRating}
          <p className="vsf-review__data-date">{date}</p>
        </div>
        <div className="vsf-review__data-trailing">
          <p className="vsf-review__data-author">{author}</p>
          {slotAuthorSuffix}
        </div>
      </div>
      <div className="vsf-review__content">{truncatedContent}</div>
      {isButtonVisible && (
        <button type="button" className="vsf-review__expand-button" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? showMoreText : showLessText}
        </button>
      )}
      {slotActions}
    </div>
  );
}
