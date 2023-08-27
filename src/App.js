import React from 'react';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'


import Root from './components/Root/Root';
import StartHere from './components/StartHere/StartHere';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route index element={ <StartHere /> } />

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
