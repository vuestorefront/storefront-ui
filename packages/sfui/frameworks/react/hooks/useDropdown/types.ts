import { Prettify } from '../../shared/types';
import { UsePopoverOptions } from '../usePopover';

export type UseDropdownOptions = Prettify<
  UsePopoverOptions & {
    onClose: () => void;
  }
>;
