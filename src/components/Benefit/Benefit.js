import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Benefit = (props) => {
  const {benefit} = props
  return (
    <div>
      <p className=' flex items-center text-black'> 
          <CheckCircleIcon className=' w-4 h-4 mr-1 text-green-500  '></CheckCircleIcon>
          {benefit}
        </p>
    </div>
  );
};

export default Benefit;