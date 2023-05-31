import { ShowcasePageLayout } from '../../showcases';
// #region source
import SelectDropdown from './SelectDropdown';

const options = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'Tomorrow',
    value: 'tomorrow',
  },
  {
    label: 'Anytime',
    value: 'anytime',
  },
];

export default function SelectDropdownWithPlaceholder() {
  return <SelectDropdown options={options} label="Delivery" placeholder="Choose from the list" />;
}
// #endregion source
SelectDropdownWithPlaceholder.getLayout = ShowcasePageLayout;
