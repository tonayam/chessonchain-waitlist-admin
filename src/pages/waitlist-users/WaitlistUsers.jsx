import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import FunctionsBar from '../../components/Functions-Bar/FunctionsBar';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';

const WaitlistUsers = () => {
  const { showProfileModal, baseURL } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState(``);
  const [loading, setLoading] = useState(false);
  const [waitlistUsers, setWaitlistUsers] = useState([]);
  const { token } = JSON.parse(sessionStorage.getItem(`adminData`));

  const getAllWaitlistUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseURL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setWaitlistUsers(data.users);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllWaitlistUsers();
    // eslint-disable-next-line
  }, []);

  // SEARCH CUSTOMERS
  const searchWaitlistUsers = () => {
    const tempArray = waitlistUsers.filter((user) =>
      user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setWaitlistUsers(tempArray);
    if (searchTerm === ``) {
      getAllWaitlistUsers();
    }
  };

  useEffect(() => {
    searchWaitlistUsers();
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <main className='waitlist-users-page'>
      <Navbar category={`Menu >`} currentPage={`Wailist Users`} />
      <Sidebar activePage={1} />

      <div className={`main-content ${showProfileModal ? `back` : null}`}>
        <FunctionsBar
          pageTitle={`Users`}
          searchValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='table'>
          <div className='headers'>
            <p>Email</p>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <>
              {waitlistUsers &&
                waitlistUsers.map((user) => {
                  const { email, _id: id } = user;

                  return (
                    <Link
                      to={`/waitlist-users/${id}`}
                      className='user-info'
                      key={id}
                    >
                      <p className='email'>{email}</p>
                    </Link>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default WaitlistUsers;
