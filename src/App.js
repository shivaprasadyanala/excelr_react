import './App.css';
import FormHookUsage from './components/FormHookUsage';
import LifeCycleOfComponent from './components/LifeCycleOfComponent';
// import Reusable from './components/Reusable';
// import Employee from './components/Employee';
// import DemoClassComp from './components/DemoClassComp';
// import RouterComp from './components/RouterComp';
// import NestedRouting from './components/NestedRouting';
// import ControlledComponents from './components/ControlledComponents';
// import MultipleFormFeilds from './components/MultipleFormFeilds';
import UseStateUsage from './hooks/UseStateUsage';
import UncontrolledComponent from './components/UncontrolledComponent';
import UseRefUsage from './hooks/UseRefUsage';
import UseContextUsage from './hooks/UseContextUsage';
import CustomHook from './hooks/CustomHook';
import UseMemoUsage from './hooks/UseMemoUsage';
import AxiosUsage from './hooks/AxiosUsage';
import { useState } from 'react';
import FetchUsage from './hooks/FetchUsage';
import KeyUsage from './components/KeyUsage';
import dataObject from './data.json'
function App() {
  const [mount, setMount] = useState(true)
  // const data = [
  //   {
  //     "id": 1,
  //     "name": "temp",
  //     "age": 45
  //   },
  //   {
  //     "id": 2,
  //     "name": "temp2",
  //     "age": 43
  //   },
  //   {
  //     "id": 3,
  //     "name": "temp3",
  //     "age": 45
  //   },
  //   {
  //     "id": 4,
  //     "name": "temp4",
  //     "age": 4
  //   },
  //   {
  //     "id": 5,
  //     "name": "temp5",
  //     "age": 452
  //   },

  // ]
  return (
    <>
      {/* <RouterComp />    
      <Reusable />
      <Employee department={"electrical"} name={"shiva"} /> */}
      {/* <DemoClassComp /> */}
      {/* <NestedRouting /> */}
      {/* <ControlledComponents /> */}
      {/* <MultipleFormFeilds /> */}
      {/* <UncontrolledComponent /> */}
      {/* <FormHookUsage /> */}
      {/* <h1>{mount}</h1>
      <button onClick={() => setMount(true)} disabled={mount} >mount</button>
      <button onClick={() => setMount(false)} disabled={!mount}>unmount</button>
      {mount &&
        <LifeCycleOfComponent />} */}
      {/* <UseStateUsage /> */}
      {/* <UseRefUsage /> */}
      {/* <UseContextUsage /> */}
      {/* <CustomHook /> */}
      {/* <UseMemoUsage /> */}
      {/* <AxiosUsage /> */}
      {/* <FetchUsage /> */}
      <KeyUsage data={dataObject.data} />
    </>
  );
}

export default App;
