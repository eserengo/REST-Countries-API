import { forwardRef } from "react";
import PropTypes from 'prop-types';

const SearchInput = forwardRef(({ state, handler }, ref) => {
  return (
    <div className='input-group'>
      <input ref={ref} type='text' placeholder='Search for a country...' autoComplete='off' spellCheck='off' className='input-text' />
      <button type='button' onClick={() => handler(state)}><i className='input-btn fa fa-search'></i></button>
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
SearchInput.propTypes = {
  state: PropTypes.object,
  handler: PropTypes.func,
};

export default SearchInput;