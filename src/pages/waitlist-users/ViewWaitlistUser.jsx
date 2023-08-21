import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
import axios from 'axios';
import { FaChevronLeft } from 'react-icons/fa';
import { DeleteCustomer } from '../../components/Modals/Modals';

const ViewWaitlistUser = () => {
  const { id } = useParams();
  const { showProfileModal, baseURL, deleteCustomer, setDeleteCustomer } =
    useGlobalContext();
  const { token } = JSON.parse(sessionStorage.getItem(`adminData`));
  const [userDetails, setUserDetails] = useState([]);
  const navigate = useNavigate();

  // GET CUSTOMER DEDTAILS
  const fetchUserDetails = async () => {
    const { data } = await axios.get(`${baseURL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserDetails(data);
    try {
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserDetails();
    //eslint-disable-next-line
  }, [id]);

  const { email, preferredBlockchain, projectSuggestion, _id } = userDetails;

  return (
    <main className='view-waitlist-user-page'>
      <Navbar
        category={`Menu > Waitlist Users >`}
        categoryLink={`/waitlist-users`}
        currentPage={`View User`}
      />
      <Sidebar activePage={2} />

      <div className={`main-content ${showProfileModal ? `back` : null}`}>
        <div className='user-btn'>
          <FaChevronLeft onClick={() => navigate(`/waitlist-users`)} />
          <h2 className='title'>Waitlist User</h2>
        </div>

        {/* CUSTOMER INFORMATION BOX */}
        <div className='user-details'>
          <h3 className='title'>User Details</h3>

          <div className='form-control'>
            <label htmlFor='first-name'>Email</label>
            <h3 className='email'>{email ? email : `Loading...`}</h3>
          </div>

          <div className='form-control'>
            <label htmlFor='first-name'>Preferred Blockchain</label>
            <h3>{preferredBlockchain ? preferredBlockchain : `Loading...`}</h3>
          </div>

          <div className='form-control'>
            <label htmlFor='first-name'>Suggestion for Chessonchain</label>
            <h3 className='suggestion'>
              {projectSuggestion ? projectSuggestion : `No suggestion`}
            </h3>
          </div>

          <div className='btns'>
            <button
              className='red'
              type='button'
              onClick={() => setDeleteCustomer(true)}
            >
              Delete Customer
            </button>
          </div>
        </div>
      </div>
      {deleteCustomer && <DeleteCustomer userId={_id} />}
    </main>
  );
};

export default ViewWaitlistUser;
