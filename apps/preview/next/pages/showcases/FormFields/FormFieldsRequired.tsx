/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { type ChangeEvent, type FormEvent, type KeyboardEvent, useState, useRef, useId, useEffect } from 'react';
import {
  SfButton,
  SfInput,
  SfSelect,
  SfSwitch,
  SfCheckbox,
  SfRadio,
  SfIconEmail,
  SfIconExpandMore,
  useDisclosure,
  SfListItem,
  useTrapFocus,
  useDropdown,
  SfIconCheck,
  InitialFocusType,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { offset } from '@floating-ui/react-dom';

type SelectOption = {
  label: string;
  value: string;
};

const emailNotificationOptions = [
  {
    label: 'Safety Alerts and Messages *',
    value: 'safety-alerts',
    hint: 'Get notified when something goes wrong on your profile',
    disabled: true,
    checked: true,
  },
  {
    label: 'Deals and Offers',
    value: 'deals-and-offers',
    hint: 'Once a week you will receive information about upcoming offers',
  },
  {
    label: 'Company Information',
    value: 'company-information',
    hint: 'Reports and information about planned changes',
  },
];
const radioOptions = [
  {
    label: 'Everything',
    value: 'everything',
    name: 'radio-1',
  },
  {
    label: 'Same as email',
    value: 'same-as-email',
    name: 'radio-1',
  },
  {
    label: 'No push notifications',
    value: 'no-push',
    name: 'radio-1',
  },
];
const dropdownOptions = [
  {
    label: 'Fashion and Apparel',
    value: 'Fashion and Apparel',
  },
  {
    label: 'Health and Wellness',
    value: 'Health and Wellness',
  },
  {
    label: 'Home Decor',
    value: 'Home Decor',
  },
  {
    label: 'Technology and Gadgets',
    value: 'Technology and Gadgets',
  },
  {
    label: 'Beauty and Cosmetics',
    value: 'Beauty and Cosmetics',
  },
  {
    label: 'Outdoor and Adventure',
    value: 'Outdoor and Adventure',
  },
  {
    label: 'Parenting and Baby Products',
    value: 'Parenting and Baby Products',
  },
  {
    label: 'Books and Literature',
    value: 'Books and Literature',
  },
  {
    label: 'Sports and Fitness',
    value: 'Sports and Fitness',
  },
  {
    label: 'Food and Cooking',
    value: 'Food and Cooking',
  },
];
const options = [
  {
    label: 'Afghanistan',
    value: 'afghanistan',
  },
  {
    label: 'Albania',
    value: 'albania',
  },
  {
    label: 'Angola',
    value: 'angola',
  },
  {
    label: 'Bahamas',
    value: 'bahamas',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Canada',
    value: 'canada',
  },
  {
    label: 'Chile',
    value: 'chile',
  },
  {
    label: 'Czech Republic',
    value: 'czech Republic',
  },
  {
    label: 'Colombia',
    value: 'colombia',
  },
  {
    label: 'Congo',
    value: 'congo',
  },
  {
    label: 'Croatia',
    value: 'croatia',
  },
  {
    label: 'Cuba',
    value: 'cuba',
  },
  {
    label: 'Denmark',
    value: 'denmark',
  },
  {
    label: 'Dominica',
    value: 'dominica',
  },
  {
    label: 'Egypt',
    value: 'egypt',
  },
  {
    label: 'Ethiopia',
    value: 'ethiopia',
  },
  {
    label: 'Estonia',
    value: 'estonia',
  },
];
const areaCodes = [
  { label: '1', value: '1' },
  { label: '20', value: '20' },
  { label: '45', value: '45' },
  { label: '53', value: '53' },
  { label: '56', value: '56' },
  { label: '57', value: '57' },
  { label: '93', value: '93' },
  { label: '243', value: '243' },
  { label: '244', value: '244' },
  { label: '251', value: '251' },
  { label: '355', value: '355' },
  { label: '372', value: '372' },
  { label: '385', value: '385' },
  { label: '420', value: '420' },
  { label: '880', value: '880' },
];

export default function FormFields() {
  const [personalInformation, setPersonalInformation] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(['safety-alerts']);
  const [pushNotifications, setPushNotifications] = useState('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedValueCombobox, setSelectedValueCombobox] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | undefined>();
  const [snippets, setSnippets] = useState<{ label: string; value: string }[]>([]);
  const [isDisabled] = useState(false);
  const [usernameIsInvalid, setUsernameIsInvalid] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [areaCodeIsInvalid, setAreaCodeIsInvalid] = useState(false);
  const [phoneNumberIsInvalid, setPhoneNumberIsInvalid] = useState(false);

  function handleEmailNotifications(event: ChangeEvent) {
    const { value } = event.target as HTMLInputElement;
    return emailNotifications.indexOf(value) > -1
      ? setEmailNotifications(emailNotifications.filter((option) => value !== option))
      : setEmailNotifications([...emailNotifications, value]);
  }

  const comboboxInputRef = useRef<HTMLInputElement>(null);
  const comboboxDropdownRef = useRef<HTMLUListElement>(null);

  const { isOpen: isOpenCombobox, close: closeCombobox, open: openCombobox, toggle: toggleCombobox } = useDisclosure();
  const { refs: comboboxRefs, style: comboboxStyle } = useDropdown({
    isOpen: isOpenCombobox,
    onClose: closeCombobox,
    placement: 'bottom-start',
    middleware: [offset(4)],
  });
  const comboboxId = useId();
  const comboboxListId = useId();

  const {
    current: currentFocus,
    focusables: focusableElements,
    updateFocusableElements,
  } = useTrapFocus(comboboxDropdownRef, {
    trapTabs: false,
    arrowKeysUpDown: true,
    activeState: isOpenCombobox,
    initialFocus: false,
  });

  const handleFocusInput = () => {
    comboboxInputRef.current?.focus();
  };

  const handleReset = () => {
    setSearchValue('');
    setSnippets([]);
    closeCombobox();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    setSelectedValueCombobox('');
    if (phrase) {
      setSearchValue(phrase);
    } else {
      handleReset();
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') handleReset();
    if (event.key === 'Enter') closeCombobox();
    if (event.key === 'ArrowUp') {
      openCombobox();
      updateFocusableElements();
      if (isOpenCombobox && focusableElements.length > 0) {
        focusableElements[focusableElements.length - 1].focus();
      }
    }
    if (event.key === 'ArrowDown') {
      openCombobox();
      updateFocusableElements();
      if (isOpenCombobox && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  };

  const selectOptionCombobox = (event: FormEvent, option: SelectOption) => {
    setSearchValue(option.label);
    setSelectedValueCombobox(option.label);
    closeCombobox();
    handleFocusInput();
  };

  const handleOptionItemKeyDownCombobox = (event: KeyboardEvent<HTMLButtonElement>, option: SelectOption) => {
    if (event.key === 'Escape') {
      handleFocusInput();
    } else if (event.key === ' ' || event.key === 'Enter') selectOptionCombobox(event, option);
  };

  const mockAutocompleteRequest = (phrase: string) => {
    const results = options.filter((option) => option.value.toLowerCase().startsWith(phrase.toLowerCase()));
    return results;
  };

  useEffect(() => {
    if (searchValue && !selectedValueCombobox) {
      const getSnippets = async () => {
        openCombobox();
        try {
          const data = await mockAutocompleteRequest(searchValue);
          setSnippets(data);
        } catch (error) {
          closeCombobox();
          console.error(error);
        }
      };
      getSnippets();
    }
  }, [searchValue]);

  const { close, toggle, isOpen } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<SelectOption>();
  const id = useId();
  const listboxId = useId();
  const selectTriggerRef = useRef<HTMLDivElement>(null);

  const { refs, style: dropdownStyle } = useDropdown({ isOpen, onClose: close });

  useTrapFocus(refs.floating, {
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocus: InitialFocusType.autofocus,
  });

  const selectOption = (option: SelectOption) => {
    setSelectedOption(option);
    close();
    selectTriggerRef.current?.focus();
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ') toggle();
  };

  const handleOptionItemKeyDown = (event: KeyboardEvent<HTMLLIElement>, option: SelectOption) => {
    if (event.key === ' ' || event.key === 'Enter') selectOption(option);
  };

  const handleSelectChange = (event: ChangeEvent) => {
    setAreaCode((event.target as HTMLInputElement)?.value);
    return areaCode ? setAreaCodeIsInvalid(false) : setAreaCodeIsInvalid(true);
  };

  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();
    const userData = {
      personalInformation,
      username,
      email,
      website,
      phone: {
        code: areaCode,
        number: phoneNumber,
      },
      country: selectedValueCombobox,
      interests: selectedOption?.label,
      description,
      emailNotifications,
      pushNotifications,
    };

    console.log(userData);
  };

  return (
    <div className="px-4">
      <h1 className="mb-4 typography-headline-4 font-bold">Personal information</h1>
      <form onSubmit={sendForm}>
        <label className="flex justify-between cursor-pointer mb-4 gap-2">
          Don’t display my personal information on a public profile
          <SfSwitch checked={personalInformation} onChange={() => setPersonalInformation(!personalInformation)} />
        </label>
        <label>
          <span className="typography-label-sm font-medium">Username *</span>
          <SfInput
            value={username}
            invalid={usernameIsInvalid}
            required
            onInput={() => (username ? setUsernameIsInvalid(false) : setUsernameIsInvalid(true))}
            onBlur={() => (username ? setUsernameIsInvalid(false) : setUsernameIsInvalid(true))}
            onChange={(event) => setUsername(event.target.value)}
          />
          {usernameIsInvalid && (
            <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">The field cannot be empty</p>
          )}
        </label>
        <label className="block my-4">
          <span className="typography-label-sm font-medium">Email *</span>
          <SfInput
            value={email}
            type="email"
            required
            invalid={emailIsInvalid}
            slotPrefix={<SfIconEmail />}
            onInput={() => (email ? setEmailIsInvalid(false) : setEmailIsInvalid(true))}
            onBlur={() => (email ? setEmailIsInvalid(false) : setEmailIsInvalid(true))}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailIsInvalid && (
            <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">The field cannot be empty</p>
          )}
        </label>
        <label>
          <span className="typography-label-sm font-medium">Website</span>
          <SfInput
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            slotPrefix={<span>https://</span>}
          />
        </label>
        <fieldset className="md:flex md:flex-wrap gap-x-4 md:space-x-0 my-4">
          <legend className="hidden">Phone number</legend>
          <label className="w-full md:w-[122px] md:mr-4">
            <span className="typography-label-sm font-medium"> Code * </span>
            <SfSelect
              value={areaCode}
              invalid={areaCodeIsInvalid}
              placeholder="--"
              required
              onBlur={() => (areaCode ? setAreaCodeIsInvalid(false) : setAreaCodeIsInvalid(true))}
              onChange={(event) => handleSelectChange(event)}
            >
              {areaCodes.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </SfSelect>
            {areaCodeIsInvalid && (
              <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">No option selected</p>
            )}
          </label>
          <span className="block mt-4 md:mt-0 grow">
            <label>
              <span className="typography-label-sm font-medium">Phone *</span>
              <SfInput
                value={phoneNumber}
                type="tel"
                invalid={phoneNumberIsInvalid}
                required
                placeholder="eg. 123 456 7890"
                className="placeholder:text-neutral-500"
                onInput={() => (phoneNumber ? setPhoneNumberIsInvalid(false) : setPhoneNumberIsInvalid(true))}
                onBlur={() => (phoneNumber ? setPhoneNumberIsInvalid(false) : setPhoneNumberIsInvalid(true))}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              {phoneNumberIsInvalid && (
                <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">The field cannot be empty</p>
              )}
            </label>
          </span>
        </fieldset>
        <div ref={comboboxRefs.setReference} className="relative">
          <label
            className={classNames('font-medium typography-label-sm', { 'text-disabled-900': isDisabled })}
            htmlFor={comboboxId}
          >
            Country
          </label>
          <SfInput
            ref={comboboxInputRef}
            id={comboboxId}
            role="combobox"
            value={searchValue}
            onChange={handleChange}
            onFocus={() => setIsValid(undefined)}
            aria-label="Select from the list"
            placeholder="Select from the list"
            aria-controls={comboboxListId}
            aria-autocomplete="list"
            aria-disabled={isDisabled}
            aria-expanded={isOpenCombobox}
            aria-activedescendant={currentFocus?.id}
            invalid={isValid === false && !isOpenCombobox}
            disabled={isDisabled}
            onClick={toggleCombobox}
            onKeyDown={handleInputKeyDown}
            className={classNames('cursor-pointer placeholder:text-neutral-500', {
              '!text-disabled-500': isDisabled,
            })}
            wrapperClassName={classNames({
              '!bg-disabled-100 !ring-disabled-300 !ring-1': isDisabled,
            })}
            slotSuffix={
              <SfIconExpandMore
                onClick={() => !isDisabled && toggleCombobox()}
                className={classNames('ml-auto text-neutral-500 transition-transform ease-in-out duration-300', {
                  'rotate-180': isOpenCombobox,
                  '!text-disabled-500 cursor-not-allowed': isDisabled,
                })}
              />
            }
          />
          <div ref={comboboxRefs.setFloating} style={comboboxStyle} className="left-0 right-0 z-10">
            {isOpenCombobox && (
              <ul
                id={comboboxListId}
                role="listbox"
                ref={comboboxDropdownRef}
                aria-label="Country list"
                className="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
              >
                {(snippets.length > 0 &&
                  snippets.map((option) => (
                    <li key={option.value}>
                      <SfListItem
                        id={`${comboboxListId}-${option.value}`}
                        as="button"
                        type="button"
                        onClick={(event) => selectOptionCombobox(event, option)}
                        onKeyDown={(event) => handleOptionItemKeyDownCombobox(event, option)}
                        className="flex justify-start"
                        aria-selected={option.value === selectedValueCombobox}
                      >
                        <p className="text-left">
                          <span>{option.label}</span>
                        </p>
                      </SfListItem>
                    </li>
                  ))) ||
                  (searchValue && (
                    <p className="inline-flex px-4 py-2 w-full text-left" aria-label="No options">
                      <span>No options</span>
                    </p>
                  )) ||
                  options.map((option) => (
                    <li key={option.value}>
                      <SfListItem
                        id={`${comboboxListId}-${option.value}`}
                        as="button"
                        type="button"
                        onClick={(event) => selectOptionCombobox(event, option)}
                        onKeyDown={(event) => handleOptionItemKeyDownCombobox(event, option)}
                        className="flex justify-start"
                        aria-selected={option.value === selectedValueCombobox}
                      >
                        <p className="text-left">
                          <span>{option.label}</span>
                        </p>
                      </SfListItem>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <label
          className={classNames('font-medium typography-label-sm block mt-4', { 'text-disabled-900': isDisabled })}
          htmlFor={id}
        >
          Your Interests
        </label>
        <div ref={refs.setReference} className="relative">
          <div
            ref={selectTriggerRef}
            role="combobox"
            aria-required="true"
            aria-controls={listboxId}
            aria-expanded={isOpen}
            aria-disabled={isDisabled}
            aria-label="Select one option"
            aria-activedescendant={selectedOption ? `${listboxId}-${selectedOption.value}` : undefined}
            className={classNames(
              'mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-inset rounded-md py-2 px-4 focus-visible:outline focus-visible:outline-offset',
              isDisabled
                ? 'bg-disabled-100 ring-disabled-300 cursor-not-allowed'
                : 'ring-neutral-300 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 cursor-pointer',
            )}
            tabIndex={isDisabled ? -1 : 0}
            onKeyDown={handleTriggerKeyDown}
            onClick={() => !isDisabled && toggle()}
          >
            {selectedOption ? (
              selectedOption.label
            ) : (
              <span className={isDisabled ? 'text-disabled-500' : 'text-neutral-500'}>Select from the list</span>
            )}
            <SfIconExpandMore
              className={classNames(
                'ml-auto transition-transform ease-in-out duration-300',
                { 'rotate-180': isOpen },
                isDisabled ? 'text-disabled-500' : 'text-neutral-500',
              )}
            />
          </div>
          <ul
            id={listboxId}
            ref={refs.setFloating}
            role="listbox"
            aria-label="Select one option"
            className={classNames('w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10', {
              hidden: !isOpen,
            })}
            style={dropdownStyle}
          >
            {dropdownOptions.map((option) => (
              <SfListItem
                id={`${listboxId}-${option.value}`}
                key={option.value}
                role="option"
                tabIndex={0}
                aria-selected={option.value === selectedOption?.value}
                className={classNames('block', { 'font-medium': option.value === selectedOption?.value })}
                onClick={() => selectOption(option)}
                onKeyDown={(event) => handleOptionItemKeyDown(event, option)}
                slotSuffix={option.value === selectedOption?.value && <SfIconCheck className="text-primary-700" />}
              >
                {option.label}
              </SfListItem>
            ))}
          </ul>
        </div>
        <label>
          <span className="typography-label-sm font-medium block mt-4">Description</span>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Write something about yourself..."
            className="block w-full py-2 pl-4 pr-7 rounded-md border border-neutral-300 placeholder:text-neutral-500"
          />
        </label>
        <h2 className="typography-headline-4 font-bold mt-14 mb-4">Notifications</h2>
        <fieldset>
          <legend className="mb-0.5 typography-text-sm font-medium">By Email</legend>
          {emailNotificationOptions.map(({ label, value, hint, disabled, checked }) => (
            <label
              key={value}
              className={classNames(
                'flex items-start mb-4 mr-6 rounded first-of-type:mt-2 last-of-type:mb-6',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
            >
              <SfCheckbox
                disabled={disabled}
                checked={checked}
                value={value}
                className="m-0.5"
                onChange={handleEmailNotifications}
              />
              <span className="ml-2">
                <span
                  className={classNames('typography-text-base font-normal leading-6 font-body', {
                    'text-disabled-900': disabled,
                  })}
                >
                  {label}
                </span>
                <span className={classNames('typography-text-xs block', { 'text-disabled-500': disabled })}>
                  {hint}
                </span>
              </span>
            </label>
          ))}
        </fieldset>
        <fieldset role="radiogroup">
          <legend className="mt-4 mb-0.5 typography-text-sm font-medium">Push Notifications *</legend>
          {radioOptions.map(({ label, name, value }) => (
            <label
              key={value}
              className="flex items-center mb-4 mr-6 rounded cursor-pointer first-of-type:mt-2 last-of-type:mb-2"
            >
              <SfRadio value={value} name={name} required onChange={() => setPushNotifications(value)} />
              <span className="ml-2 text-base font-normal leading-6 font-body">{label}</span>
            </label>
          ))}
        </fieldset>
        <p className="text-neutral-500 typography-text-sm mt-8">* marked fields are required</p>
        <div className="flex gap-x-4 md:justify-end mt-6">
          <SfButton variant="secondary" className="flex-grow md:flex-grow-0">
            Clear all
          </SfButton>
          <SfButton type="submit" className="flex-grow md:flex-grow-0">
            Submit
          </SfButton>
        </div>
      </form>
    </div>
  );
}

// #endregion source
FormFields.getLayout = ShowcasePageLayout;
