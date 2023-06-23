import { forwardRef, useEffect } from "react";
import PropTypes from 'prop-types';

const DarkMode = forwardRef(({ state, handler }, ref) => {
  const bodyEl = document.querySelector('body');
  useEffect(() => {
    state.isDarkMode
      ? (bodyEl.classList.add('dark-theme'), bodyEl.classList.remove('light-theme')) 
      : (bodyEl.classList.add('light-theme'), bodyEl.classList.remove('dark-theme'));
  }, );

  return (
    <div className='checkbox-group flex-row'>
      <input ref={ref} type='checkbox' defaultChecked={state.isDarkMode} onChange={() => handler(state)} className='checkbox-input' />
      <label htmlFor={ref} className='checkbox-label'>Dark Mode</label>
    </div>
  )
});

DarkMode.displayName = 'DarkMode';
DarkMode.propTypes = {
  state: PropTypes.object,
  handler: PropTypes.func,
};

export default DarkMode;