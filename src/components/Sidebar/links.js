import { BsGridFill } from 'react-icons/bs';
import { ImUsers } from 'react-icons/im';

export const menu = [
  {
    name: `Dashboard`,
    icon: <BsGridFill className='icon' />,
    link: `/dashboard`,
    id: 0,
  },
  {
    name: `Waitlist Users`,
    icon: <ImUsers className='icon' />,
    link: `/waitlist-users`,
    id: 1,
  },
];
