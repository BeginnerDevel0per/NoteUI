import React from 'react';
import {Routes,Route} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout';
import Home from './Pages/Home/Home';


function App() {
  return (
   <>
    <Routes>
    <Route path='/' element={
      <MainLayout>
       <Home></Home>
    </MainLayout>}/>
      <Route path='/Login' element={<MainLayout/>}/>
      <Route path='/Register' element={<MainLayout/>}/>
      <Route path='/Note' element={<MainLayout/>}/>
      <Route path='/UserInformation' element={<MainLayout/>}/>
    </Routes>
   </>
  );
}

export default App;
