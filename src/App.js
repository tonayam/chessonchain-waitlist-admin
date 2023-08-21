import { Slide, ToastContainer } from 'react-toastify';
import { Dashboard, Login, ViewWaitlistUser, WaitlistUsers } from './pages';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import { useEffect } from 'react';
import { useGlobalContext } from './context/Context';

function App() {
  const { wakeServer } = useGlobalContext();

  useEffect(() => {
    wakeServer();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/waitlist-users' element={<WaitlistUsers />} />
          <Route path='/waitlist-users/:id' element={<ViewWaitlistUser />} />
        </Route>
      </Routes>
      <ToastContainer transition={Slide} />
    </>
  );
}

export default App;
