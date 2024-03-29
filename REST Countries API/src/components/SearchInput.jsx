import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SearchInput = forwardRef(({ state, handler }, ref) => {
  const onEnterKeydown = (event) => {
    event.code == 'Enter' && handler(state);
  };

  return (
    <div className='search-group'>
      <input ref={ref} type='text' placeholder='Search for a country...' autoComplete='off' spellCheck='off' className='input-text' onKeyDown={(event) => onEnterKeydown(event)} />
      <button type='button' className='input-btn' onClick={() => handler(state)}><i className='icon fa fa-search'></i></button>
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
SearchInput.propTypes = {
  state: PropTypes.object,
  handler: PropTypes.func,
};

export default SearchInput;