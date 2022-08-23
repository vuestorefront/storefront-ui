import { useState } from 'react';
import VsfChipsInput, { SizeTypes, ChipsInputProps } from '../../output/blocks/VsfChipsInput/VsfChipsInput.lite';

function Icon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-gray-500">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"></path>
    </svg>
  );
}

export default function ExampleVsfChipsInput() {
  const [formData, setFormData] = useState({
    size: SizeTypes.MEDIUM,
    disabled: false,
    value: 'Label',
  } as Partial<ChipsInputProps>);

  function onClickHandler() {
    console.log('VsfChipsInput Clicked!');
  }
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfChipsInput
          value={formData.value}
          disabled={formData.disabled}
          size={formData.size}
          handleChipClose={onClickHandler}
          slotIcon={<Icon />}
        />
      </div>
      <div className="e-page-controls">
        <table>
          <tbody>
            <tr>
              <td>Variant</td>
              <td>
                {Object.values(SizeTypes).map((variant: string) => {
                  return (
                    <label key={variant} style={{ display: 'block' }}>
                      {variant}
                      <input
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        type="radio"
                        name="size"
                        value={variant}
                      />
                    </label>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td>
                <input
                  onChange={(e) => setFormData({ ...formData, disabled: e.target.checked })}
                  value={formData.disabled}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td>Value</td>
              <td>
                <input
                  onInput={(e) => setFormData({ ...formData, value: e.target.value })}
                  value={formData.value}
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
