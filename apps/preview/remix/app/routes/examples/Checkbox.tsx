import Checkbox from '../../output/blocks/Checkbox.lite';

export default function Index() {
  return (
    <div className="e-page">
      <div className="e-page-component">
        <Checkbox
          name={'custom'}
          value={'value'}
          label={'label'}
          indeterminate={false}
          required={false}
          disabled={true}
          rightCheckbox={false}
          invalid={false}
          errorText={'Some error occured!'}
          helpText={'Help text!'}
        />
      </div>
      <div className="e-page-controls"></div>
    </div>
  );
}
