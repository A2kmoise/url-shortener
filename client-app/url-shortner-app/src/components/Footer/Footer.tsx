import * as React from 'react';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <footer className='border-t border-slate-800/50 py-12 mt-auto'>
      <div className='container mx-auto px-6 text-center'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer'>
            <div className='p-1.5 bg-slate-700 rounded-lg'>
              <img src="/snap.png" className='w-4 h-4 invert brightness-0' alt="Logo" />
            </div>
            <span className='font-bold tracking-tight text-white'>SnapLink</span>
          </div>
          <p className='text-slate-500 text-sm max-w-md'>
            Built with precision and style. The ultimate tool for modern link management.
          </p>
          <div className='mt-8 text-slate-600 text-[11px] uppercase tracking-[0.3em] font-medium'>
            Copyright &#169;2025 SnapLink | A2kmoise
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;