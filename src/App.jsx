import './App.css'
import Router from './Routes/Router'
import { GlobalStyle, MainApp } from './ui/index';
MainApp
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'; 
import { nanoid } from '@reduxjs/toolkit';

function App() {
  return (
    <MainApp>
      <GlobalStyle />
      <Router />
      <ToastContainer theme="dark" position="top-center" autoClose={3000} transition={Slide} toastId={nanoid()} hideProgressBar={true} />
    </MainApp>
  )
}

export default App;
