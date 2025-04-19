import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../interface/UrlData';
import DataTable from '../DataTable/DataTable';
import { serverUrl } from '../../helpers/Constants';
import axios from 'axios';

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = ():void =>{
    setReload(true);
  }

const fetchTableData = async () => {
  const response = await axios.get(`${serverUrl}/shortUrl`);
  console.log("The response from server is :", response);
  setData(response.data);
  setReload(false);
};

React.useEffect(() => {
  fetchTableData();
}, [reload]);

  return(
<div className='bg-slate-900'>
<FormContainer updateReloadState={updateReloadState}/>
<DataTable  updateReloadState={updateReloadState} data={data}/>
</div>
  );
};

export default Container;
