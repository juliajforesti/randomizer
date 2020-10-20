import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <div className='d-flex justify-content-around p-4'>
      <Link className='btn btn-light' to='/random'>Randomizer</Link>
      <Link className='btn btn-light' to='/pairs'>Pairs Generator</Link>
      <Link className='btn btn-light' to='/random-order'>Random Order</Link>
      
    </div>
  );
}
 
export default Navbar;