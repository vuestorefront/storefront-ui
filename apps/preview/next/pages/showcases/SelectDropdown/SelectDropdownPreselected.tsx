import { ShowcasePageLayout } from '../../showcases';
// #region source
import SelectDropdown from './SelectDropdown';

const options = [
  {
    label: 'Startup',
    value: 'startup',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Enterprise',
    value: 'enterprise',
  },
];

export default function SelectDropdownPreselected() {
  return <SelectDropdown options={options} label="Delivery" defaultValue={options[0]} />;
}
// #endregion source
SelectDropdownPreselected.getLayout = ShowcasePageLayout;
