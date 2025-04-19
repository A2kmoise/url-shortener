import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return(
    <div className='bg-slate-900 text-blue-100  text-center py-5 pt-20 font-sans'>
    Copyright &#169;2025 SnapLink | A2kmoise  All rights reserved
    </div>
  ) ;
};

export default Footer;