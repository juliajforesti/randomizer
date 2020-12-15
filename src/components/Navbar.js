import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const {cohort} = props
  return (  
    <div className='d-flex flex-column navbar'>
      <Link className='btn btn-light btn-nav m-2' to='/randomizer'>Home</Link>
      <Link className='btn btn-light btn-nav m-2' to='/randomizer/add-cohort'>Add cohort</Link>
      <Link className='btn btn-light btn-nav m-2' to='/randomizer/heads-or-tails'>Heads or Tails</Link>
      {cohort.students ? (
        <React.Fragment>
          <Link className='btn btn-light btn-nav m-2' to='/randomizer/random'>Randomizer</Link>
          <Link className='btn btn-light btn-nav m-2' to='/randomizer/pairs'>Pairs Generator</Link>
          <Link className='btn btn-light btn-nav m-2' to='/randomizer/random-order'>Random Order</Link>
        </React.Fragment>
      ) : (
        <></>
      )}
    </div>
  );
}
 
export default Navbar;