import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {
    updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
    const { updateReloadState } = props;
    const [fullUrl, setFullUrl] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`${serverUrl}/shortUrl`, {
                fullUrl: fullUrl
            });
            setFullUrl("");
            updateReloadState();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='pt-28 pb-16 px-4'>
            <div className='max-w-6xl mx-auto'>
                <div className='relative overflow-hidden rounded-[2.5rem] bg-banner bg-cover bg-center shadow-2xl border border-white/5'>
                    {/* Clearer Background Overlay (Reduced opacity, removed blur) */}
                    <div className='absolute inset-0 bg-gradient-to-br from-slate-950/60 via-indigo-950/40 to-slate-950/60'></div>
                    
                    {/* Animated Glows */}
                    <div className='absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse'></div>
                    <div className='absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse' style={{animationDelay: '2s'}}></div>

                    <div className='relative z-10 px-8 py-20 md:px-20 md:py-32 text-center'>
                        <h1 className='text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white'>
                            Snap<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400'>Link</span>
                        </h1>
                        
                        <p className='text-slate-200 text-lg md:text-2xl max-w-3xl mx-auto font-bold leading-relaxed mb-12 drop-shadow-md'>
                            The next generation of link management. Urban, fast, and intelligent. 
                            Shorten your digital footprint with surgical precision.
                        </p>

                        <div className='max-w-3xl mx-auto'>
                            <div className='glass-card p-1.5 rounded-[2rem] border-white/10 transition-all'>
                                <form onSubmit={handleSubmit} className='relative flex flex-col md:flex-row gap-2'>
                                    <div className='relative flex-1'>
                                        <div className='absolute inset-y-0 left-6 flex items-center pointer-events-none'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                            </svg>
                                        </div>
                                        <input 
                                            type="text" 
                                            placeholder='Paste your long URL here...' 
                                            required 
                                            className='w-full bg-slate-900/60 text-white pl-14 pr-6 py-5 rounded-[1.5rem] border border-white/10 focus:border-blue-500/50 transition-all text-lg placeholder:text-slate-400 backdrop-blur-md' 
                                            value={fullUrl} 
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
                                        />
                                    </div>
                                    <button 
                                        type='submit' 
                                        disabled={loading}
                                        className='md:w-56 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-5 px-8 rounded-[1.5rem] shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-70'
                                    >
                                        {loading ? (
                                            <div className='w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                                        ) : (
                                            <>
                                                <span className='uppercase tracking-widest text-sm'>Chop URL</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
