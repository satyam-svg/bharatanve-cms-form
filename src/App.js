import React from 'react';
import './App.css';
import Header from './Components/Header';
import Template from './Components/Template';
import Mainbody from './Components/Mainbody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formheader from './Components/Formheader';
import Centerdtabs from './Components/Tab';
import Question from './Components/Question_form';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/form/:id' element={<React.Fragment><Formheader /><Centerdtabs /><Question/></React.Fragment>} />
          <Route path='/' element={<React.Fragment><Header /><Template /><Mainbody /></React.Fragment>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
