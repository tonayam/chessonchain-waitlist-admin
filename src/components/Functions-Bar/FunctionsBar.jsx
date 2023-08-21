import React from 'react';
import { CiSearch } from 'react-icons/ci';

const FunctionsBar = ({
  pageTitle,
  searchValue,
  onChange,
  children,
  searchPlaceholder,
}) => {
  return (
    <div className='functions-bar'>
      <h3 className='page-title'>{pageTitle}</h3>
      <div className='functions'>
        <div className='search-bar'>
          <input
            type='text'
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={onChange}
          />
          <CiSearch className='icon' />
        </div>
        {children}
      </div>
    </div>
  );
};

export default FunctionsBar;
