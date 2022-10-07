import { ChangeEvent, useState } from 'react';

type ControlOptionBind = {
  bind?: {};
  label?: string;
  value?: string | number;
};
type ControlsType = {
  type: 'range' | 'radio' | 'checkbox' | 'text' | 'select' | 'boolean' | 'json';
  modelName: string;
  description?: string;
  propDefaultValue?: string | number | boolean;
  propType?: string;
  isRequired?: boolean;
  options?: (ControlOptionBind | string)[];
}[];

type Models<T> = { [key: string]: T };
export type ControlsProps<T extends Models<T>> = {
  controls: ControlsType;
  state: {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
  };
};

export const prepareControls = <T extends {}>(controls: ControlsType, models: T): ControlsProps<T> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState(models);
  controls.forEach((control) => {
    // eslint-disable-next-line no-param-reassign
    control.isRequired = false;
  });

  return {
    controls,
    state: {
      set: setFormData,
      get: formData,
    },
  };
};

export default function Controls<T extends { [k: string]: any }>({ controls, state }: ControlsProps<T>) {
  function setState(newState = {}) {
    state.set({
      ...state.get,
      ...newState,
    });
  }

  function handleOnChangeValue<E extends HTMLElement>(e: ChangeEvent<E & { value: unknown }>, name: string) {
    setState({ [name]: e.target.value });
  }

  function handleJsonOnChangeValue<E extends HTMLElement>(e: ChangeEvent<E & { value: string }>, name: string) {
    setState({ [name]: JSON.parse(e.target.value) });
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
      setState({ [name]: newValue });
    } else {
      setState({
        [name]: typeof currentValue === 'string' ? currentValue === value : !currentValue,
      });
    }
  }

  function checkboxValue(option: ControlOptionBind | string) {
    return typeof option === 'string'
      ? (option as string)
      : (option as ControlOptionBind).value || (option as ControlOptionBind).label;
  }

  return (
    <div className="controls">
      <div className="heading-wrapper">
        <h1 className="heading">Controls</h1>
      </div>
      <div className="table-wrapper">
        <table aria-label="Controls table">
          <thead>
            <tr>
              <th>PropName</th>
              <th>Value</th>
              <th>Type</th>
              <th>DefaultValue</th>
              <th>Required</th>
              <th>Description</th>
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
                  {control.modelName}
                </td>
                <td className="value">
                  {(() => {
                    switch (control.type) {
                      case 'select':
                        return (
                          <select onChange={(e) => handleOnChangeValue<HTMLSelectElement>(e, control.modelName)}>
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
                                onChange={() =>
                                  state.set({
                                    ...state.get,
                                    [control.modelName]: !state.get[control.modelName],
                                  })
                                }
                                type="checkbox"
                              />
                              <span className="slider" />
                            </label>
                            <span className="ml-2">{state.get[control.modelName].toString()}</span>
                          </div>
                        );
                      default:
                        return (control?.options || ([{}] as NonNullable<ControlsType[number]['options']>)).map(
                          (option, optionIndex) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div key={`${control.modelName}-${index}-${optionIndex}`} className="flex items-center">
                              <label className="flex items-center">
                                {/* eslint-disable-next-line no-nested-ternary */}
                                {control.type === 'json' ? (
                                  <textarea
                                    rows={10}
                                    {...(option as ControlOptionBind).bind}
                                    className="border rounded-md"
                                    value={JSON.stringify(state.get[control.modelName], undefined, 2) as string}
                                    onChange={(e) => handleJsonOnChangeValue(e, control.modelName)}
                                  />
                                ) : control.type === 'range' || control.type === 'text' ? (
                                  <input
                                    {...(option as ControlOptionBind).bind}
                                    value={state.get[control.modelName] as number | string}
                                    className="border rounded-md"
                                    type={control.type}
                                    onChange={(e) => handleOnChangeValue(e, control.modelName)}
                                  />
                                ) : (
                                  <input
                                    {...(option as ControlOptionBind).bind}
                                    value={checkboxValue(option)}
                                    type={control.type}
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
                                )}
                                {/* eslint-disable-next-line no-prototype-builtins */}
                                {option.hasOwnProperty('label') && (
                                  <span className="pl-2">{(option as ControlOptionBind).label}</span>
                                )}
                                {typeof option === 'string' && <span className="pl-2">{option}</span>}
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
