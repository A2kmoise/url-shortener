import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';


interface IFormContainerProps {
    updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
    const { updateReloadState} = props;
 const [fullUrl, setFullUrl] = React.useState<string>("");
 const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
       await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl
       });
       setFullUrl("");
       updateReloadState();
    } catch (error) {
        console.log(error);
    }
 };
  return (
<div className='container mx-auto px-2 '>
    <div className='bg-banner  rounded-xl bg-cover bg-center'>
    <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
        <h2 className='text-blue-200 text-4xl text-center pb-4 '>SnapLink</h2>
       <p className='text-blue-100 text-center pb-2 text-xl font-extralight'>Paste your untidy link to shorten it</p>
       <p className='text-blue-100  text-center pb-4 text-sm font-thin'>Free tool to shorten a URL or reduce link, Use our URLshortner to create a shortened & neat link making it easy to use.</p> 
       <form onSubmit={handleSubmit}>
        <div className='flex'>
            <div className='relative w-full'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>urlshortner.link/</div>
                <input type="text" placeholder='Enter your link here' required className='block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:border-blue-500' value={fullUrl} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}/>
               <button type='submit' className='absolute top-0 end-0 p-2 text-sm font-medium h-full text-blue-50 bg-blue-400 rounded-lg border border-blue-400 focus:ring-2 focus:outline-none focus:ring-blue-200'>Chop URL</button>
            </div>
        </div>
       </form>
    </div>
    </div>
</div> 
);
};

export default FormContainer;
