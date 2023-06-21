import { forwardRef } from "react";
import PropTypes from 'prop-types';

const SelectInput = forwardRef(({ state, handler }, ref) => {
  return (
    <div className='select-group'>
      <select ref={ref} value={state.value} onChange={() => handler(state)} className='select-dropdown'>
        <option value='' label='Filter by Region' className='select-option'></option>
        <option value='Africa' label='Africa' className='select-option'></option>
        <option value='Americas' label='Americas' className='select-option'></option>
        <option value='Asia' label='Asia' className='select-option'></option>
        <option value='Europe' label='Europe' className='select-option'></option>
        <option value='Oceania' label='Oceania' className='select-option'></option>
      </select>
    </div>
  );
});

SelectInput.displayName = 'SelectInput';
SelectInput.propTypes = {
  state: PropTypes.object,
  handler: PropTypes.func,
};

export default SelectInput;