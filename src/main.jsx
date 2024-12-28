import './index.css'
import 'regenerator-runtime/runtime'; 

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from 'react';

import Loders from './Loders/Loders.jsx';
import SpeachRecognization from './Speach Recognization/SpeachRecognization.jsx';

const App = lazy( ()=> import('./App.jsx')) 
const PageError = lazy( ()=> import("./Erros and Warning/PageError.jsx"))
const Login = lazy( ()=> import("./Login/Login.jsx"))
const Contact = lazy( ()=> import("./Contact/Contact.jsx"))
const IndivisualCard =  lazy( ()=> import("./Cards/IndivisualCard.jsx"))

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<Loders/>}>
          <App/>
        </Suspense>
      } />

      <Route path="*" element={
        <Suspense fallback={<Loders/>}>
          <PageError/>
        </Suspense>
      } />

      <Route path="indivisual/:id" element={
       <Suspense fallback={<Loders/>}>
          <IndivisualCard/>
        </Suspense>
      } />
      <Route path="contact" element={
        <Suspense fallback={<Loders/>}>
          <Contact/>
        </Suspense>
      } />

        <Route path="login" element={
          <Suspense fallback={<Loders/>}>
            <Login/>
          </Suspense>
        } />

        <Route path='speach' element={<SpeachRecognization/>}/>
           
    </Routes>
  </BrowserRouter>
);

