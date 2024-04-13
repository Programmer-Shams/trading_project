import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';
import { FaMoneyBills } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Deposit Funds',
    path: '/deposit',
    icon: (
      <SvgIcon fontSize="medium">
        <RiMoneyDollarCircleFill />
      </SvgIcon>
    )
  },
  {
    title: 'Withdrawal',
    path: '/withdrawal',
    icon: (
      <SvgIcon fontSize="small">
        <FaMoneyBillTransfer />
      </SvgIcon>
    )
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: (
      <SvgIcon fontSize="medium">
        <MdOutlineAttachMoney />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Support',
    path: '/support',
    icon: (
      <SvgIcon fontSize="small">
        <BiSupport />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];
