import { component$, useContext, useSignal } from '@builder.io/qwik';
import { SfButton, SfButtonSize, SfButtonVariant, SfIconExpandLess, SfIconExpandMore } from '@storefront-ui/qwik';
import { ControlOptionBind, ControlsType } from './types';
import { EXAMPLES_STATE } from '~/routes/examples/layout';

// TODO
// <T extends { [k: string]: any }>({ controls, state, className }: ControlsProps<T>) {
export const Controls = component$<any>(() => {
  const examplesState = useContext(EXAMPLES_STATE);
  const previewBottomOpenSignal = useSignal(false);

  return (
    <div class={{ class: true, 'e-page-controls': true, 'e-page-controls--collapsed': !previewBottomOpenSignal.value }}>
      <div class="heading-wrapper">
        <h1 class="heading">Controls</h1>
        <SfButton
          variant={SfButtonVariant.tertiary}
          size={SfButtonSize.sm}
          onClick$={() => {
            previewBottomOpenSignal.value = !previewBottomOpenSignal.value;
          }}
        >
          <div q:slot="suffix" style={{ display: previewBottomOpenSignal.value ? 'none' : 'block' }}>
            <SfIconExpandMore />
          </div>
          <div q:slot="suffix" style={{ display: previewBottomOpenSignal.value ? 'block' : 'none' }}>
            <SfIconExpandLess />
          </div>
          {previewBottomOpenSignal.value ? 'Close' : 'Open'}
        </SfButton>
      </div>
      <div class="table-wrapper">
        <table aria-label="Controls table">
          <thead class="table-heading">
            <tr>
              <th class="whitespace-nowrap">Prop Name</th>
              <th class="whitespace-nowrap">Value</th>
              <th class="whitespace-nowrap">Type</th>
              <th class="whitespace-nowrap">Default Value</th>
              <th class="whitespace-nowrap">Required</th>
              <th class="whitespace-nowrap">Description</th>
            </tr>
          </thead>
          <tbody>
            {(examplesState.data.controls || []).map((control, index: number) => (
              <tr key={index} class="props">
                <td class={`${control.type !== 'checkbox' && control.type !== 'radio' ? 'align-middle' : 'align-top'}`}>
                  <span id={control.modelName}>{control.modelName}</span>
                </td>
                <td class="value">
                  {control.type === 'boolean' && (
                    <div class="switch-wrapper">
                      <label class="switch">
                        <input
                          checked={examplesState.data.state[control.modelName]}
                          value={examplesState.data.state[control.modelName]}
                          aria-labelledby={control.modelName}
                          onChange$={() => {
                            examplesState.data.state = {
                              ...examplesState.data.state,
                              [control.modelName]: !examplesState.data.state[control.modelName],
                            };
                          }}
                          type="checkbox"
                        />
                        <span class="slider" />
                      </label>
                      <span class="ml-2">{examplesState.data.state[control.modelName].toString()}</span>
                    </div>
                  )}

                  {control.type === 'select' && (
                    <select
                      value={examplesState.data.state[control.modelName]}
                      aria-labelledby={control.modelName}
                      onChange$={(e) => {
                        examplesState.data.state = {
                          ...examplesState.data.state,
                          [control.modelName]: e.target.value,
                        };
                      }}
                    >
                      {(control?.options || ([{}] as NonNullable<ControlsType[number]['options']>)).map(
                        (option, optionIndex) => (
                          <option
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
                  )}

                  {/* {((): JSX.Element | JSX.Element[] => {
                    switch (control.type) {
                      case 'select':
                        return (
                          
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
                  })()} */}
                </td>
                <td class="propType">
                  <span>{control.propType}</span>
                </td>
                <td class="propDefaultValue">{control.propDefaultValue}</td>
                <td class="required">{control?.isRequired?.toString()}</td>
                <td class="description">{control.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
