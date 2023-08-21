import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';

const ProfileModal = () => {
  const navigate = useNavigate();
  const { setShowProfileModal } = useGlobalContext();

  return (
    <article className='profile-modal'>
      <ul>
        <li
          className='red'
          onClick={() => {
            localStorage.removeItem(`adminData`);
            navigate(`/`);
            setShowProfileModal(false);
          }}
        >
          <FiLogOut className='icon' /> Logout
        </li>
      </ul>
    </article>
  );
};

export default ProfileModal;
