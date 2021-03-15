import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Searchbar = (props) => {
  const {searchFilter} = props
  const [input, setInput] = useState('');

  function handleChange(e){
    const {value} = e.currentTarget;
    setInput(value)
  }

  useEffect(() => {
    searchFilter(input)
  }, [input]);

  return (  
    <div className="d-flex  justify-content-center">
      <input name='input' value={input} onChange={handleChange} className='input-group m-3 p-2 w-75 border-radius' type="text" placeholder='Search by name'/>

    </div>
  );
}
 
export default Searchbar;