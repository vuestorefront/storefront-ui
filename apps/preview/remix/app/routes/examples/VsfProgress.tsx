
import { useState } from 'react';
import VsfProgress, { VsfProgressVariants, VsfProgressTypes } from '~/output/blocks/VsfProgress/VsfProgress.lite';

export default function VsfProgressExample() {
  const [formData, setFormData] = useState({
    value: 0,
    variant: VsfProgressVariants.base,
    type: VsfProgressTypes.circle
  } as {
    value: number;
    variant: keyof typeof VsfProgressVariants;
    type: keyof typeof VsfProgressTypes;
  })

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfProgress value={formData.value} variant={formData.variant} type={formData.type} />
      </div>
      <div className="e-page-controls">
        <table>
          <tbody>
            <tr>
              <td>Value</td>
              <td>
                <input
                  value={formData.value}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Variant</td>
              <td>
                {Object.keys(VsfProgressVariants).map((variant: string) => {
                  return <label key={variant}>
                    {variant}
                    <input
                      onChange={(e) => setFormData({ ...formData, variant: e.target.value })}
                      type="radio"
                      name="size"
                      value={variant}
                    />
                  </label>
                })}
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                {Object.keys(VsfProgressTypes).map((type: string) => {
                  return <label key={type}>
                    {type}
                    <input
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      type="radio"
                      name="size"
                      value={type}
                    />
                  </label>
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
