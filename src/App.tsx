import React, { lazy, Suspense }  from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Overlay from './component/overlay';


const Home = lazy(()=>import('./pages/home'));
const App: React.FC = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/:uuid' element={<Suspense fallback={<Overlay text='loading'/>}><Home/></Suspense>}/>
      </Routes>
    </Router>
  );
};

export default App;