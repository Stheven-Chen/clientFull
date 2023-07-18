import React from 'react';

const Nav: React.FC = () => {
  return (
    <>
      <div className='flex bg-[#89CFF0] w-full h-16 items-center p-4'>
        <span className='text-2xl font-bold w-1/3 text-start'>BCAInsurance</span>
        <span className='text-start w-1/2 text-xl ml-36 font-semibold sm:hidden lg:block'>Recruitment</span>
      </div>
    </>
  );
};

export default Nav;
