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

export default function SelectDropdownError() {
  return <SelectDropdown options={options} label="Delivery" isError />;
}
// #endregion source
SelectDropdownError.getLayout = ShowcasePageLayout;
