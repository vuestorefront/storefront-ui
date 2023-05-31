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

export default function SelectDropdownDisabled() {
  return <SelectDropdown options={options} label="Delivery" disabled />;
}
// #endregion source
SelectDropdownDisabled.getLayout = ShowcasePageLayout;
