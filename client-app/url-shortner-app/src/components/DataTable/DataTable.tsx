import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import { serverUrl } from '../../helpers/Constants';
import axios from 'axios';

interface IDataTableProps {
    data: UrlData[];
    updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const { data , updateReloadState} = props;
    
    const copyToClipboard = async (url:string) => {
       try {
        const fullShortUrl = `${serverUrl}/shortUrl/${url}`;
        await navigator.clipboard.writeText(fullShortUrl);
        alert(`URL copied: ${fullShortUrl}`);
       } catch (error) {
        console.log(error);
       } 
    };

    const deleteUrl = async (id:string) => {
        try {
            await axios.delete(`${serverUrl}/shortUrl/${id}`);
            updateReloadState();
        } catch (error) {
            console.log(error);
        }
    }

    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr key={item._id} className='group hover:bg-white/[0.03] transition-all border-b border-white/5 last:border-0'>
                    <td className='px-8 py-6 align-middle'>
                        <div className='flex flex-col gap-1.5 max-w-[300px] md:max-w-[500px]'>
                            <a href={item.fullUrl} target='_blank' rel='noreferrer noopener' className='text-slate-200 hover:text-blue-400 truncate font-semibold transition-colors text-base'>
                                {item.fullUrl}
                            </a>
                            <div className='flex items-center gap-2'>
                                <span className='text-[10px] text-slate-500 uppercase tracking-[0.2em] font-extrabold'>Source Node</span>
                                <div className='h-px w-8 bg-slate-800'></div>
                            </div>
                        </div>
                    </td>
                    <td className='px-8 py-6 align-middle'>
                        <div className='flex items-center'>
                            <a href={`${serverUrl}/shortUrl/${item.shortUrl}`} target='_blank' rel='noreferrer noopener' className='text-blue-400 font-bold text-lg hover:text-blue-300 transition-colors inline-block'>
                                {item.shortUrl}
                            </a>
                        </div>
                    </td>
                    <td className='px-8 py-6 align-middle'>
                        <div className='flex items-center'>
                            <div className='px-4 py-1.5 bg-blue-500/10 rounded-full text-[11px] font-black text-blue-400 border border-blue-500/20 uppercase tracking-widest'>
                                {item.clicks} Interactions
                            </div>
                        </div>
                    </td>
                    <td className='px-8 py-6 align-middle'>
                        <div className='flex items-center gap-4 justify-end opacity-20 group-hover:opacity-100 transition-opacity'>
                            <button 
                                onClick={() => copyToClipboard(item.shortUrl)}
                                className='p-2.5 bg-slate-800 hover:bg-blue-600 rounded-xl text-white transition-all shadow-lg hover:shadow-blue-500/40'
                                title="Copy Secure Link"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => deleteUrl(item._id)}
                                className='p-2.5 bg-slate-800 hover:bg-red-600 rounded-xl text-white transition-all shadow-lg hover:shadow-red-500/40'
                                title="Wipe Data"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            )
        })
    };

    return (
        <div className='container mx-auto px-6 pb-32'>
            <div className='glass-card rounded-[2.5rem] border-white/5 overflow-hidden shadow-2xl'>
                <div className='overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-[10px] uppercase tracking-[0.4em] text-slate-500 bg-slate-950/50 border-b border-white/5'>
                            <tr>
                                <th scope='col' className='px-8 py-7 font-black'>Digital Destination</th>
                                <th scope='col' className='px-8 py-7 font-black'>Neural Link</th>
                                <th scope='col' className='px-8 py-7 font-black'>Activity Metrics</th>
                                <th scope='col' className='px-8 py-7 font-black text-right'>Control</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-white/5'>
                            {data.length > 0 ? renderTableData() : (
                                <tr>
                                    <td colSpan={4} className='px-8 py-32 text-center text-slate-600 font-bold uppercase tracking-[0.2em] italic'>
                                        Initializing system... Please input a URL to generate nodes.
                                    </td >
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
