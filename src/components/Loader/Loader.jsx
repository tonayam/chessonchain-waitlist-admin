import React from 'react';
import spinner from '../../assets/green-spinner.svg';

const Loader = () => {
  return (
    <div className='spinner'>
      <img src={spinner} alt='spinner' />
    </div>
  );
};

export default Loader;
