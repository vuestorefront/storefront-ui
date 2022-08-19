import VsfCheckbox, { CheckboxProps } from '../../output/blocks/VsfCheckbox/VsfCheckbox.lite';
import { useEffect, useState } from 'react';
export default function Index() {
  const [form, setForm] = useState({
    disabled: false,
    label: 'Label',
    errorText: 'Some error occured!',
    helpText: 'Help text!',
    indeterminate: false,
    invalid: false,
    name: 'checkbox',
    required: false,
    rightCheckbox: false,
    value: '',
  } as Partial<CheckboxProps>);

  const [checked, setChecked] = useState(true);

  return (
    <div className="e-page">
      <div className="e-page-component">
        <p>Single Checkbox</p>
        <VsfCheckbox
          name={form.name!}
          value={form.value}
          label={form.label}
          indeterminate={form.indeterminate}
          required={form.required}
          disabled={form.disabled}
          rightCheckbox={form.rightCheckbox}
          invalid={form.invalid}
          errorText={form.errorText}
          helpText={form.helpText}
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <div>Toggled: {checked.toString()}</div>
      </div>
      <div className="e-page-controls">
        <table>
          <tbody>
            <tr>
              <td>Label</td>
              <td>
                <input
                  onInput={(e) => setForm((prev) => ({ ...prev, label: e.target.value }))}
                  value={form.label}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td>
                <label>
                  <input
                    onChange={(e) => setForm((prev) => ({ ...prev, disabled: e.target.checked }))}
                    value={form.disabled}
                    type="checkbox"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Indeterminate</td>
              <td>
                <label>
                  <input
                    onChange={(e) => setForm((prev) => ({ ...prev, indeterminate: e.target.checked }))}
                    value={form.indeterminate}
                    type="checkbox"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Invalid</td>
              <td>
                <label>
                  <input
                    onChange={(e) => setForm((prev) => ({ ...prev, invalid: e.target.checked }))}
                    value={form.invalid}
                    type="checkbox"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Right Checkbox</td>
              <td>
                <label>
                  <input
                    onChange={(e) => setForm((prev) => ({ ...prev, rightCheckbox: e.target.checked }))}
                    value={form.rightCheckbox}
                    type="checkbox"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Required</td>
              <td>
                <label>
                  <input
                    onChange={(e) => setForm((prev) => ({ ...prev, required: e.target.checked }))}
                    value={form.required}
                    type="checkbox"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Help Text</td>
              <td>
                <input
                  onInput={(e) => setForm((prev) => ({ ...prev, helpText: e.target.value }))}
                  value={form.helpText}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Error Text</td>
              <td>
                <input
                  onInput={(e) => setForm((prev) => ({ ...prev, errorText: e.target.value }))}
                  value={form.errorText}
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
