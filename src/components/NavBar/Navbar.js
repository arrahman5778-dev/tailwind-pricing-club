import React, { useState } from 'react';
import Link from '../Link/Link';
import {MenuIcon, XIcon} from '@heroicons/react/solid'

const Navbar = () => {
  // useState use menu open md device
  const [open ,SetOpen]= useState(false)
  const routes =[
    {id :1 ,name:'Home', Link: '/home'},
    {id :2 ,name:'Shop', Link: '/shop'},
    {id :3 ,name:'Deals', Link: '/deals'},
    {id :4 ,name:'Coupons', Link: '/deals'},
    {id :5 ,name:'Contact', Link: '/contact'},
  ]
  return (
    <nav className=' bg-indigo-500 '>
      <div className='w-6 h-6 md:hidden ' onClick={() => SetOpen(!open)}>
      {/* Changing icon conditon */}
      {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul className={`md:flex justify-center absolute md:static  md:bg-white duration-500 ease-in-out w-full bg-indigo-600
      ${open ? 'top-6' : 'top-[-120px]'}` }>
      {
        routes.map(route => <Link key={route.id} route={route}></Link>)
      }
      </ul>
    </nav>
  );
};

export default Navbar;
