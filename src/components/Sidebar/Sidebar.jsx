import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context/Context';
import { menu } from './links';
import { FaChevronDown } from 'react-icons/fa';
import ProfileModal from '../Profile-Modal/ProfileModal';
import { Link } from 'react-router-dom';

const Sidebar = ({ activePage }) => {
  const { setShowNavbar, showNavbar, showProfileModal, setShowProfileModal } =
    useGlobalContext();

  return (
    <aside className={showNavbar ? `show` : null}>
      <div className='dark-overlay'>
        <div className='void' onClick={() => setShowNavbar(false)}></div>
        <div className='logo-close'>
          <h2>CHESSONCHAIN ADMIN</h2>
          <FaTimes className='close-btn' onClick={() => setShowNavbar(false)} />
        </div>

        <div
          className='profile'
          onClick={() => setShowProfileModal(!showProfileModal)}
        >
          <FaChevronDown className='dropdown' />
          {showProfileModal ? <ProfileModal /> : null}
        </div>

        <div className='menu'>
          <h3>Menu</h3>
          <ul>
            {menu.map((link, index) => {
              return (
                <li
                  key={index}
                  className={activePage === link.id ? `active` : null}
                >
                  <Link to={link.link} onClick={() => setShowNavbar(false)}>
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
