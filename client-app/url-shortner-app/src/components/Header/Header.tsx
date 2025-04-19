import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className='bg-slate-900  pb-20'>
        <div className='container p-2 mx-auto'>
            <div className='py-5 flex'>
              <div className='px-1'><img src="/snap.png"  className='w-10 h-10' /></div>
                <div className='text-4xl font-sans  text-blue-200 '>SnapLink</div>
            </div>
        </div>
    </div>
  );
};

export default Header;
