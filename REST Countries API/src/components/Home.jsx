import { useContext, useState, useRef, useEffect } from 'react'
import { Context } from './FetchDataAndSetContext';
import DisplayCards from './DisplayCards';
import DisplayDetails from './DisplayDetails';
import Attribution from './Attribution';

const Home = () => {
  const data = useContext(Context);
  const initialState = {
    isDarkMode: 'off',
    showCards: true,
    showDetails: false,
    isFiltering: false,
    isSearching: false,
    value: '',
  };
  const [state, setState] = useState(initialState);
  const selectRef = useRef(null);
  const inputRef = useRef(null);
  const filteredRegion = state.value !== '' ? data.filter(item => item.region == state.value) : data;
  const filteredName = data.filter(item => item.name.common.toLowerCase() == state.value.toLowerCase());

  useEffect(() => {
    document.querySelectorAll('.card').forEach(item => item.addEventListener('click', handleCardClick));
  }, );

  const handleInputClick = () => {
    inputRef.current.value !== ''
      ? setState(prevState => ({
        ...prevState,
        isFiltering: false,
        isSearching: true,
        value: inputRef.current.value,
      }))
      : null;
  }

  const handleSelectChange = () => {
    setState(prevState => ({
      ...prevState,
      isFiltering: true,
      isSearching: false,
      value: selectRef.current.value,
    }))
  };

  const handleCardClick = (event) => {
    const targetCard = event.target.parentElement.parentElement.querySelector('.card-info-title').textContent;
    setState(prevState => ({
      ...prevState,
      showCards: false,
      showDetails: true,
      value: targetCard,
    }))
  }

  const InputComponent = () => (
    <div className='input-group'>
      <input ref={inputRef} type='text' placeholder='Search for a country...' autoComplete='off' spellCheck='off' className='input-text'/>
      <button type='button' onClick={handleInputClick}><i className='input-btn fa fa-search'></i></button>
    </div>
  );

  const SelectComponent = () => (
    <div className='select-group'>
      <select ref={selectRef} value={state.value} onChange={handleSelectChange} className='select-dropdown'>
        <option value='' label='Filter by Region' className='select-option'></option>
        <option value='Africa' label='Africa' className='select-option'></option>
        <option value='Americas' label='Americas' className='select-option'></option>
        <option value='Asia' label='Asia' className='select-option'></option>
        <option value='Europe' label='Europe' className='select-option'></option>
        <option value='Oceania' label='Oceania' className='select-option'></option>
      </select>
    </div>
  );

  return (
    <>
      <main className='main'>
        <div className='flex-row'>
          <InputComponent />
          <SelectComponent />
        </div>
        <div className='grid-container'>
          {state.showCards && !state.isFiltering && !state.isSearching && <DisplayCards source={data} />}
          {state.showCards && state.isFiltering && <DisplayCards source={filteredRegion} />}
          {state.showCards && state.isSearching && <DisplayCards source={filteredName} />}
        </div>
        {state.showCards && state.isSearching && filteredName.length === 0 && <p className='error'>No country was founded!</p>}
        {state.showDetails && <DisplayDetails source={filteredName} /> }
      </main>
      <Attribution />
    </>
  );
}

export default Home;