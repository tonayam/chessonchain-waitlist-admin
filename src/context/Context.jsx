import axios from 'axios';
import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const baseURL = `https://99ca-197-211-58-194.ngrok-free.app/api/v1`;
  const [showNavbar, setShowNavbar] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addMatch, setAddMatch] = useState(false);
  const [matches, setMatches] = useState([]);
  const [addMatchOfTheDay, setAddMatchOfTheDay] = useState(false);
  const [addDailyMultipleMatch, setAddDailyMultipleMatch] = useState(false);
  const [addFreeInPlay, setAddFreeInPlay] = useState(false);
  const [updateSocialMedialLink, setUpdateSocialMedialLink] = useState(false);
  const [updateAffiliatelLink, setUpdateAffiliatelLink] = useState(false);
  const [deleteVipTips, setDeleteVipTips] = useState(false);
  const [deleteCustomer, setDeleteCustomer] = useState(false);
  const [updateCustomerVipStatus, setUpdateCustomerVipStatus] = useState(false);

  // RESET PAGE
  const resetPage = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  // WAKE SERVER
  const wakeServer = async () => {
    try {
      // eslint-disable-next-line
      const { data } = await axios.get(
        `https://sam-green-tips-api.onrender.com/`
      );
    } catch (error) {}
  };

  // SHOW AND HIDE ALERT
  const showHideAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <AppContext.Provider
      value={{
        resetPage,
        showNavbar,
        showProfileModal,
        setShowProfileModal,
        setShowNavbar,
        baseURL,
        showAlert,
        setShowAlert,
        showHideAlert,
        wakeServer,
        addMatch,
        setAddMatch,
        matches,
        setMatches,
        addMatchOfTheDay,
        setAddMatchOfTheDay,
        addDailyMultipleMatch,
        setAddDailyMultipleMatch,
        addFreeInPlay,
        setAddFreeInPlay,
        updateSocialMedialLink,
        setUpdateSocialMedialLink,
        updateAffiliatelLink,
        setUpdateAffiliatelLink,
        deleteVipTips,
        setDeleteVipTips,
        deleteCustomer,
        setDeleteCustomer,
        updateCustomerVipStatus,
        setUpdateCustomerVipStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
