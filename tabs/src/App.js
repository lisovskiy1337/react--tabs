
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

import Tab from './components/Tab/Tab';
import Tabs from './components/Tabs/Tabs';

const Content = styled.div`
    height: 100vh;
    width: 100%;
    background:${p => p.bg};
    display: grid;
    place-items: center;
`


function App() {
  const [value, setValue] = useState('content1');

  const tabsData = [
    {label: 'content1', bg: '#659DB4', value: 'content1'},
    {label: 'content2', bg: '#9992FF', value: 'content2'},
    {label: 'content3',  bg: '#254284', value: 'content3'},
    {label: 'content354 ',  bg: '#F59604', value: 'content4'},
   
  ];

  const handleChange = (v) => {
    setValue(v);
  };

  const renderT = ({label, bg, value}) => {
    return <Tab value={value} bg={bg} label={label}/>
  }
 
  
  return (
    <div>
      <Tabs handleChange={handleChange} renderTab={renderT} options={tabsData} value={value} />
     
      {tabsData.map((item) => {
        if( item.value === value){
          return (
            <Content bg={item.bg}>{item.label}</Content>
          )
         
        }  
      })
      }
    </div>
  );
}

export default App;
