import React from 'react'
import Header from '../component/Header';
import { Routes, Route} from "react-router-dom";
import Login from '../component/Login';
import Register from '../component/Register';
import CareerForm from '../component/CareerForm';
import CareerResult from '../component/CareerResult';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from '../component/ProtectRoute';


const App = () => {
  return (
    <>
    <ToastContainer/>
    
      <Header/>
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route element = {<ProtectedRoute/>}>
            <Route path='/careerForm' element={<CareerForm/>}/>
        </Route>

        <Route path='/careerResult' element={<CareerResult/>}/>
      </Routes>


    </>
    
  )
}

export default App;
