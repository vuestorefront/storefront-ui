import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';
import { SfButton, SfButtonVariant, SfButtonSize, SfIconExpandLess, SfIconExpandMore } from '@storefront-ui/react';
import { useControlsSearchParams } from '../../composables/utils/useControlsSearchParams';
import { ControlOptionBind, ControlsProps, ControlsType } from './types';

export const prepareControls = <T extends {}>(controls: ControlsType, models: T): ControlsProps<T> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState<T>(models);
  controls.forEach((control) => {
    // eslint-disable-next-line no-param-reassign
    if (!('isRequired' in control)) control.isRequired = false;
  });

  const setState: ControlsProps<T>['state']['set'] = (nextState) => {
    if (typeof nextState === 'function') {
      setFormData(nextState);
    }
    setFormData((currentState) => ({ ...currentState, ...nextState }));
  };

  return {
    controls,
    state: {
      set: setState,
      get: formData,
    },
  };
};

export default function Controls<T extends { [k: string]: any }>({ controls, state, className }: ControlsProps<T>) {
  function handleOnChangeValue<E extends HTMLElement>(e: ChangeEvent<E & { value: unknown }>, name: string) {
    state.set({ [name]: e.target.value } as T);
  }

  function handleJsonOnChangeValue<E extends HTMLElement>(e: ChangeEvent<E & { value: string }>, name: string) {
    state.set({ [name]: JSON.parse(e.target.value) } as T);
  }

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>, name: string, currentValue: string | boolean | []) {
    const { value } = e.target;
    if (Array.isArray(currentValue)) {
      const newValue: string[] = [...currentValue];
      const valueItemIndex = newValue.indexOf(value);
      if (valueItemIndex === -1) {
        newValue.push(value);
      } else {
        newValue.splice(valueItemIndex, 1);
      }
      state.set({ [name]: newValue } as T);
    } else {
      state.set({
        [name]: typeof currentValue === 'string' ? currentValue === value : !currentValue,
      } as T);
    }
  }

  const checkboxValue = (option: ControlOptionBind | string) =>
    typeof option === 'string' ? option : option.value || option.label;

  const {
    previewBottomOpen: [previewBottomOpen, setPreviewBottomOpen],
  } = useControlsSearchParams(state);

  return (
    <div className={classNames(className, 'e-page-controls', { 'e-page-controls--collapsed': !previewBottomOpen })}>
      <div className="heading-wrapper">
        <h1 className="heading">Controls</h1>

        <SfButton
          variant={SfButtonVariant.tertiary}
          size={SfButtonSize.sm}
          onClick={() => setPreviewBottomOpen(!previewBottomOpen)}
          slotSuffix={previewBottomOpen ? <SfIconExpandMore /> : <SfIconExpandLess />}
        >
          {previewBottomOpen ? 'Close' : 'Open'}
        </SfButton>
      </div>
      <div className="table-wrapper">
        <table aria-label="Controls table">
          <thead className="table-heading">
            <tr>
              <th className="whitespace-nowrap">Prop Name</th>
              <th className="whitespace-nowrap">Value</th>
              <th className="whitespace-nowrap">Type</th>
              <th className="whitespace-nowrap">Default Value</th>
              <th className="whitespace-nowrap">Required</th>
              <th className="whitespace-nowrap">Description</th>
            </tr>
          </thead>
          <tbody>
            {controls.map((control, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index} className="props">
                <td
                  className={`${
                    control.type !== 'checkbox' && control.type !== 'radio' ? 'align-middle' : 'align-top'
                  }`}
                >
                  <span id={control.modelName}>{control.modelName}</span>
                </td>
                <td className="value">
                  {((): JSX.Element | JSX.Element[] => {
                    switch (control.type) {
                      case 'select':
                        return (
                          <select
                            value={state.get[control.modelName]}
                            aria-labelledby={control.modelName}
                            onChange={(e) => handleOnChangeValue<HTMLSelectElement>(e, control.modelName)}
                          >
                            {(control?.options || ([{}] as NonNullable<ControlsType[number]['options']>)).map(
                              (option, optionIndex) => (
                                <option
                                  // eslint-disable-next-line react/no-array-index-key
                                  key={`${control.modelName}-${index}-${optionIndex}`}
                                  value={
                                    (option as ControlOptionBind).value ||
                                    (option as ControlOptionBind).label ||
                                    (option as string)
                                  }
                                >
                                  {(option as ControlOptionBind).label || (option as string)}
                                </option>
                              ),
                            )}
                          </select>
                        );
                      case 'boolean':
                        return (
                          <div className="switch-wrapper">
                            <label className="switch">
                              <input
                                checked={state.get[control.modelName]}
                                value={state.get[control.modelName]}
                                aria-labelledby={control.modelName}
                                onChange={() =>
                                  state.set((currentState) => ({
                                    ...currentState,
                                    [control.modelName]: !currentState[control.modelName],
                                  }))
                                }
                                type="checkbox"
                              />
                              <span className="slider" />
                            </label>
                            <span className="ml-2">{state.get[control.modelName]?.toString()}</span>
                          </div>
                        );
                      default:
                        return (control?.options || ([{}] as NonNullable<ControlsType[number]['options']>)).map(
                          (option, optionIndex) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div key={`${control.modelName}-${index}-${optionIndex}`} className="flex items-center">
                              <label className="flex items-center">
                                {(() => {
                                  switch (control.type) {
                                    case 'json':
                                      return (
                                        <textarea
                                          rows={10}
                                          {...(option as ControlOptionBind).bind}
                                          className="border rounded-md"
                                          aria-labelledby={control.modelName}
                                          value={JSON.stringify(state.get[control.modelName], undefined, 2) as string}
                                          onChange={(e) => handleJsonOnChangeValue(e, control.modelName)}
                                        />
                                      );
                                    case 'range':
                                    case 'text':
                                      return (
                                        <input
                                          {...(option as ControlOptionBind).bind}
                                          value={state.get[control.modelName] as number | string}
                                          className="border rounded-md"
                                          type={control.type}
                                          aria-labelledby={control.modelName}
                                          onChange={(e) => handleOnChangeValue(e, control.modelName)}
                                        />
                                      );
                                    default:
                                      return (
                                        <input
                                          {...(option as ControlOptionBind).bind}
                                          value={checkboxValue(option)}
                                          type={control.type}
                                          aria-labelledby={control.modelName}
                                          onChange={(e) => {
                                            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                            control.type === 'checkbox'
                                              ? handleCheckbox(
                                                  e,
                                                  control.modelName,
                                                  state.get[control.modelName] as string | [],
                                                )
                                              : handleOnChangeValue(e, control.modelName);
                                          }}
                                          name={`${control.modelName}-${index}`}
                                        />
                                      );
                                  }
                                })()}
                                {typeof option === 'string' ? (
                                  <span className="pl-2">{option}</span>
                                ) : (
                                  'label' in option && (
                                    <span className="pl-2">{(option as ControlOptionBind).label}</span>
                                  )
                                )}
                              </label>
                            </div>
                          ),
                        );
                    }
                  })()}
                </td>
                <td className="propType">
                  <span>{control.propType}</span>
                </td>
                <td className="propDefaultValue">{control.propDefaultValue}</td>
                <td className="required">{control?.isRequired?.toString()}</td>
                <td className="description">{control.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
