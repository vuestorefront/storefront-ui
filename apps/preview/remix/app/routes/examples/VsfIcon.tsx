import VsfIconBase, { VsfIconSize } from '../../output/blocks/VsfIconBase/VsfIconBase.lite';
import VsfIconArrowDown from '../../output/blocks/VsfIcons/VsfIconArrowDown.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import fs from '../../utils/files.server'
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ReactHtmlParser from 'react-html-parser';

export async function loader() {
  const filenames = fs.readFileSync('../../mitosis/assets/promotion.svg', 'utf-8');
  return json(filenames);
}

export default function VsfIcon() {
  const file = useLoaderData();
  const parsedSvg = ReactHtmlParser(file);
  const { state, controls } = prepareControls(
    [
      {
        title: 'size',
        type: 'select',
        modelName: 'sizeModel',
        propDefaultValue: 'VsfIconSize.base',
        propType: 'VsfIconSize',
        options: Object.keys(VsfIconSize)
      },
      {
        title: 'color',
        type: 'select',
        modelName: 'colorModel',
        description: 'Its not a prop just example that by setting color on parent, icons changes its color',
        options: ['black', 'red', 'blue', 'green']
      },
    ],
    {
      sizeModel: VsfIconSize.base,
      colorModel: 'black',
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <div>
          Icon imported directly from <br />
          <div style={{ 'color': state.get.colorModel }}>
            <VsfIconArrowDown style={`color: ${state.get.colorModel}`} size={state.get.sizeModel} />
          </div>
        </div>
        <div>
          BaseIcon with imported svg and passed in content prop <br />
          <div style={{ 'color': state.get.colorModel }}>
            <VsfIconBase content={parsedSvg} size={state.get.sizeModel} />
          </div>
        </div>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
