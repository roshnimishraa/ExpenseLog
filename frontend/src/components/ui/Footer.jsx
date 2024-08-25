import React from 'react';

const Footer = () => {
  return (
    <footer className='py-1 text-white bg-transparent '>
      <div className='mx-auto text-center max-w-7xl'>
        <p className='mt-1 text-sm'>
          &copy; {new Date().getFullYear()} Created By Roshni Mishra       </p>
      </div>
    </footer>
  );
};

export default Footer;
