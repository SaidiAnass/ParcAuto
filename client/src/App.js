import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormSignIn from './components/FormSignIn'
import SimpleViewtable from './components/dataGrid/SimpleViewtable'
import AddingForm from './components/addingFrom/AddingForm'
import ExtendedViewTable from './components/dataGrid/ExtendedViewTable'
import { registerLicense } from '@syncfusion/ej2-base';

function App() {


  // Registering Syncfusion license key
  registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1hXn5ccnxWRGFaUEE=');

  return (
    <div className="App" style={gradient}>
      <Routes>
        <Route exact path="/" element={<FormSignIn />} />               //the sign in page
        <Route path="/simpleView" element={<SimpleViewtable />} />      //simplified version of the data grid
        <Route path="/addingCar" element={<AddingForm />} />            //handling the form for adding the mini-contract
        <Route path="/extendedView" element={<ExtendedViewTable />} />  //detailed version of the data grid
      </Routes>
    </div>
  )
}

const gradient = {
  background:
    'linear-gradient(to right, rgba(36,155,215,0.6), rgba(39,83,158,0.6))',
}

export default App
