import { ChangeEvent, useState } from "react";

// TODO: stricter typing for model output
type ControlOptionBind = {
  bind?: {};
  label?: string;
  value?: string | number;
};
type ControlsType = {
  title: string;
  type: 'range' | 'radio' | 'checkbox' | 'text' | 'select' | 'boolean' | 'json';
  modelName: string;
  description?: string;
  propDefaultValue?: string | number | boolean;
  propType?: string;
  isRequired?: boolean;
  options?: (ControlOptionBind | string)[]
}[];
type Enum = Record<string | number, string | number>
type Model = string | boolean | number | Enum | (string | Record<string, unknown>)[];
type Models = Record<string, Model>;
export type ControlsProps<T extends Models> = {
  controls?: ControlsType;
  state: {
    get: T,
    set: React.Dispatch<React.SetStateAction<T>>
  }
}
export const prepareControls = <T extends Models>(
  controls: ControlsType,
  models: T
): ControlsProps<T> => {
  const [formData, setFormData] = useState(models);
  controls.forEach(control => {
    control.isRequired = false;
  });

  return {
    controls,
    state: {
      set: setFormData,
      get: formData
    }
  }
}

export default function Controls<T extends Models>(props: ControlsProps<T>) {
  function setState(newState = {}) {
    props.state.set({
      ...props.state.get,
      ...newState
    })
  }

  function handleOnChangeValue<T = HTMLFormElement>(e: ChangeEvent<T>, name: string) {
    setState({ [name]: (e.target as unknown as HTMLFormElement).value });
  }

  function handleJsonOnChangeValue<T = HTMLFormElement>(e: ChangeEvent<T>, name: string) {
    setState({ [name]: JSON.parse((e.target as unknown as HTMLFormElement).value) });
  }

  function handleCheckbox(
    e: ChangeEvent<HTMLInputElement>,
    name: string,
    currentValue: string | boolean | []
  ) {
    let value = e.target.value;
    if (Array.isArray(currentValue)) {
      let newValue: string[] = [...currentValue];
      const valueItemIndex = newValue.indexOf(value);
      if (valueItemIndex === -1) {
        newValue.push(value);
      } else {
        newValue.splice(valueItemIndex, 1);
      }
      setState({ [name]: newValue });
    } else {
      setState({
        [name]: typeof currentValue === 'string' ? currentValue === value : !currentValue
      });
    }
  };

  function checkboxValue(option: ControlOptionBind | string) {
    return typeof option === 'string' ? option as string : (option as ControlOptionBind).value || (option as ControlOptionBind).label;
  }

  return (
    <div className="controls">
      <div className="heading-wrapper">
        <h1 className="heading">
          Controls
        </h1>
      </div>
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
          {props.controls?.map((control, index) =>
            <tr key={index} className="props">
              <td className={`${control.type !== 'checkbox' && control.type !== 'radio' ? 'align-middle' : 'align-top'}`}>
                {control.title}
              </td>
              <td className="value" >
                {(() => {
                  switch (control.type) {
                    case "select":
                      return <select
                        onChange={(e) =>
                          handleOnChangeValue<HTMLSelectElement>(e, control.modelName)
                        }>
                        {(control?.options || [{}] as NonNullable<ControlsType[number]['options']>).map((option, optionIndex) => <option
                          key={`${control.title}-${index}-${optionIndex}`}
                          value={(option as ControlOptionBind).value || (option as ControlOptionBind).label || option as string}
                        >
                          {(option as ControlOptionBind).label || option as string}
                        </option>
                        )}
                      </select>;
                    case "boolean": return <div className="switch-wrapper">
                      <label className="switch">
                        <input
                          checked={props.state.get[control.modelName] as boolean}
                          value={props.state.get[control.modelName] as string}
                          onChange={(e) => props.state.set({ ...props.state.get, [control.modelName]: !props.state.get[control.modelName] })}
                          type="checkbox"
                        />
                        <span className="slider" />
                      </label>
                      <span className="ml-2">{props.state.get[control.modelName].toString()}</span>
                    </div>;
                    default:
                      return (control?.options || [{}] as NonNullable<ControlsType[number]['options']>).map(
                        (option, optionIndex) =>
                          <div
                            key={`${control.title}-${index}-${optionIndex}`}
                            className="flex items-center"
                          >
                            <label className="flex items-center">
                              {control.type === "json"
                                ? <textarea
                                  rows={10}
                                  {...(option as ControlOptionBind).bind}
                                  className="border rounded-md"
                                  value={JSON.stringify(props.state.get[control.modelName], undefined, 2) as string}
                                  onChange={(e) => handleJsonOnChangeValue(e, control.modelName)}
                                >
                                </textarea> :
                                control.type === 'range' || control.type === 'text'
                                  ? <input
                                    {...(option as ControlOptionBind).bind}
                                    value={props.state.get[control.modelName] as number | string}
                                    className="border rounded-md"
                                    type={control.type}
                                    onChange={(e) => handleOnChangeValue(e, control.modelName)}
                                  />
                                  : <input
                                    {...(option as ControlOptionBind).bind}
                                    value={checkboxValue(option)}
                                    type={control.type}
                                    onChange={(e) => {
                                      control.type === 'checkbox'
                                        ? handleCheckbox(e, control.modelName, props.state.get[control.modelName] as string | [])
                                        : handleOnChangeValue(e, control.modelName)
                                    }}
                                    name={`${control.title}-${index}`}
                                  />
                              }
                              {option.hasOwnProperty('label') &&
                                <span className={`pl-2`}>{(option as ControlOptionBind).label}</span>}
                              {typeof option === 'string' &&
                                <span className="pl-2">{option}</span>}
                            </label>
                          </div>
                      )
                  }
                })()}
              </td>
              <td className="propType"><span>{control.propType}</span></td>
              <td className="propDefaultValue">{control.propDefaultValue}</td>
              <td className="required">{control?.isRequired?.toString()}</td>
              <td className="description">{control.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
