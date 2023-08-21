import { CiUser } from 'react-icons/ci';
import { FiLock } from 'react-icons/fi';
import { RiEqualizerLine } from 'react-icons/ri';
import { BsBell } from 'react-icons/bs';

// LIST FOR TAB SECTION ON THE SETTINGS PAGE
export const tabs = [
  { name: `Profile`, icon: <CiUser className='icon' /> },
  { name: `Setup`, icon: <RiEqualizerLine className='icon' /> },
  { name: `Security`, icon: <FiLock className='icon' /> },
  { name: `Notification`, icon: <BsBell className='icon' /> },
];
