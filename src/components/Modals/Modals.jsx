import { useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import spinner from '../../assets/white-spinner.svg';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// MODAL FOR WHEN ADMIN WANTS TO DELETE A CUSTOMER
export const DeleteCustomer = ({ userId }) => {
  const { setDeleteCustomer, baseURL } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = JSON.parse(sessionStorage.getItem(`adminData`))
    ? JSON.parse(sessionStorage.getItem(`adminData`))
    : ``;

  const deleteCustomer = async () => {
    try {
      setLoading(true);
      await axios.delete(`${baseURL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      toast.success(`Customer Deleted`);
      setDeleteCustomer(false);
      navigate(`/waitlist-users`);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className='modal-container' id='delete-container'>
      <div className='modal delete-user'>
        <p>Are you sure you want to delete this customer?</p>

        <div className='btns'>
          <button className='grey' onClick={() => setDeleteCustomer(false)}>
            Cancel
          </button>
          <button className='red' onClick={deleteCustomer}>
            Delete {loading && <img src={spinner} alt='' />}
          </button>
        </div>
      </div>
    </div>
  );
};
