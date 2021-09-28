
import { useState } from 'react';
import './App.css';
import TabPanel from './components/TabPanel/TabPanel';
import Tabs from './components/Tabs/Tabs';

function App() {
  const [tabIndex, settabIndex] = useState(0);

  const handleChange = (index) => {
      settabIndex(index);
   
  }
  return (
    <>
      <TabPanel tabIndex={tabIndex} handleChange={handleChange}/>
      <Tabs tabIndex={tabIndex}/>
    </>
  );
}

export default App;
