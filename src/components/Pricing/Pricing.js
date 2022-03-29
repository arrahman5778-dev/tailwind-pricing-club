import React from 'react';
import PricingOptin from '../PricingOption/PricingOptin';

const Pricing = () => {
  const pricingOptin = [
    {id:1, name: 'Free',  price: 0,benefits:[
   "LIfeTime Free",
   "Unlimited Deals",
   "Localization Free Deals",
   "Fantastic Deals ",
   "Crazy Deals",

    ]},
    {id:2, name: 'Regular',  price: 9.99 ,benefits:[
      "Everything  Free",
      "Unlimited Deals",
      "Localization Free Deals",
      "Fantastic Deals ",
      "Crazy Deals",
   
       ]},
    {id:3, name: 'Silver' , price: 19.99 ,benefits:[
      "Everything on Regular  Free",
      "Unlimited Deals",
      "Localization Free Deals",
      "Fantastic Deals ",
      "Crazy Deals",
   
       ]},
    {id:4, name: 'Gold',  price: 29.99 ,benefits:[
      "LIfeTime Free",
      "Unlimited Deals",
      "Localization Free Deals",
      "Fantastic Deals ",
      "Crazy Deals",
   
       ]},
    {id: 5, name: 'Platinum' , price: 39.99 ,benefits:[
      "LIfeTime Free",
      "Unlimited Deals",
      "Localization Free Deals",
      "Fantastic Deals ",
      "Crazy Deals",
   
       ]},
  ]
  return (
    <div className=' bg-slate-400 p-2 mt-8'>
      <h1 className='text-6xl'>Best Deals of the Town</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ea.</p>
      <div className=' grid md:grid-cols-3 gap-3 m-2'>
      {
        pricingOptin.map(singlePrice => <PricingOptin 
          key={singlePrice.id}
          singlePrice={singlePrice}
        ></PricingOptin>)
      }
      
      </div>
    </div>
  );
};

export default Pricing;