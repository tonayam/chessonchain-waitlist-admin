import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useGlobalContext } from '../../context/Context';
import totalUsers from '../../assets/customers.svg';
import { useGetRequest } from '../../custom-hooks/useGetRequest';
import { useEffect } from 'react';

const Dashboard = () => {
  const { showProfileModal, baseURL } = useGlobalContext();

  // GET ALL WAITLISTERS
  const { data: waitlisters, getDefault: getAllCustomers } = useGetRequest(
    `${baseURL}/users`
  );

  useEffect(() => {
    getAllCustomers();
    // eslint-disable-next-line
  }, []);

  return (
    <main className='dashboard'>
      <Navbar category={`Menu >`} currentPage={`Dashboard`} />
      <Sidebar activePage={0} />
      <section className={`main-content ${showProfileModal ? `back` : null}`}>
        {/* CARDS SECTION */}
        <section className='cards'>
          <div className='card'>
            <div className='img'>
              <img src={totalUsers} alt='users' />
            </div>
            <div className='info'>
              <h4 className='name'>Waitlist User</h4>
              <h3 className='num'>{waitlisters.count}</h3>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
