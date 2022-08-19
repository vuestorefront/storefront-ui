import VsfButton, { VsfButtonProps, VsfButtonSizes, VsfButtonVariants } from '../../output/blocks/VsfButton/VsfButton.lite';
import { useState } from 'react';

export default function Index() {
  const [formData, setFormData] = useState({
    variant: VsfButtonVariants.primary,
    size: VsfButtonSizes.base,
    disabled: false
  } as Partial<VsfButtonProps>);

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfButton size={formData.size} variant={formData.variant} disabled={formData.disabled}>Hello</VsfButton>
      </div>
      <div className="e-page-controls">
        <table>
          <tbody>
            <tr>
              <td>Variant</td>
              <td>
                {Object.keys(VsfButtonVariants).map((variant: string) => {
                  return <label key={variant}>
                    {variant}
                    <input
                      onChange={(e) => setFormData({ ...formData, variant: e.target.value })}
                      type="radio"
                      name="variant"
                      value={variant}
                    />
                  </label>
                })}
              </td>
            </tr>
            <tr>
              <td>Size</td>
              <td>
                {Object.keys(VsfButtonSizes).map((size: string) => {
                  return <label key={size}>
                    {size}
                    <input
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      type="radio"
                      name="size"
                      value={size}
                    />
                  </label>
                })}
              </td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td>
                <label>
                  <input
                    onChange={(e) => setFormData(() => ({ disabled: e.target.checked }))}
                    value={formData.disabled}
                    type="checkbox"
                  />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
