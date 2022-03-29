
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOptin = (props) => {
  const {name ,price , benefits} = props.singlePrice;
  return (
    <div className=' bg-white p-6 rounded-lg'>
      <h3 className=' bg-lime-300 py-2 rounded text-xl'>{name}</h3>
      <h2 className=' text-6xl font-bold'>{price}$<span className=' font-bold text-2xl'>/month</span></h2>
      <div>
        <h1 className=' text-left'>Benefits:</h1>
        {
        benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
      }
      </div>
      <button className=' bg-green-500 w-full py-2 rounded flex justify-center items-center hover:bg-green-600 duration-300 ease-in-out hover:text-red-500'>
        <p className='text-xl font-bold text-white'>Buy Now </p>
        <ArrowRightIcon className=' w-6 h-6 ml-2 text-white'></ArrowRightIcon>
        </button>
    </div>
  );
};

export default PricingOptin;