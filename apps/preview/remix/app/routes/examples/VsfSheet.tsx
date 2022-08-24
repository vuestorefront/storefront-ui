import { useState } from "react";
import VsfSheet from '../../output/blocks/VsfSheet/VsfSheet.lite';

export default function VsfSheetExample() {
  const [hasSlot, setHasSlot] = useState(false);
  
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSheet>
          {<div>
            <p>Default slot</p>
            <p>Default slot</p>
            <p>Default slot</p>
            <p>Default slot</p>
          </div>}
        </VsfSheet>
      </div>
      <div className="e-page-controls">
        <table>
          <tbody>
            <tr>
              <td>Has slot</td>
              <td>
                <label>
                  <input
                    onChange={(e) => setHasSlot(e.target.checked)}
                    value={hasSlot}
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
