import * as React from 'react';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 glass-card border-none rounded-none'>
        <div className='container mx-auto px-6 py-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 group cursor-pointer'>
                    <div className='p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform'>
                        <img src="/snap.png" className='w-6 h-6 invert brightness-0' alt="Logo" />
                    </div>
                    <span className='text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600'>
                      SnapLink
                    </span>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Header;
