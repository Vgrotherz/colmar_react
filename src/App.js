import React from 'react';

import './App.css';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'


import Root from './components/Root/Root';
import StartHere from './components/StartHere/StartHere';
import Learn from './components/Learn/Learn';
import Info from './components/Info/Info';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contacts from './components/Contacts/Contacts';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route index element={ <StartHere /> } />
    <Route path='/learn' element={ <Learn /> } />
    <Route path='/info' element={ <Info /> } />
    <Route path='/404' element={ <ErrorPage /> } />
    <Route path='/contacts' element={ <Contacts /> } />
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
