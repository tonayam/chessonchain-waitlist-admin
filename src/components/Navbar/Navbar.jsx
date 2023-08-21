import React from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../../context/Context';
import ProfileModal from '../Profile-Modal/ProfileModal';
import { Link } from 'react-router-dom';

const Navbar = ({ category, categoryLink, currentPage }) => {
  const { setShowNavbar, showProfileModal, setShowProfileModal } =
    useGlobalContext();

  return (
    <nav>
      <div className='mobile-nav'>
        <div className='menu-nav'>
          <FaBars className='hambugger' onClick={() => setShowNavbar(true)} />
          <h5>{currentPage}</h5>
        </div>
      </div>

      <div className='desktop-nav'>
        <div className='navigation'>
          <h5>
            <Link to={categoryLink}>{category}</Link>
          </h5>
          <h5>{currentPage}</h5>
        </div>
        <div className='profile'>
          <FaChevronDown
            className='dropdown'
            onClick={() => setShowProfileModal(!showProfileModal)}
          />
          {showProfileModal ? <ProfileModal /> : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
