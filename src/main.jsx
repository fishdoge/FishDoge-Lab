import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import CnLangApp from './components/cn/CnApp';
import Mails from './components/Mail';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <App/>} />
        <Route path="/cn" element={<CnLangApp/>} />
        <Route path="/mails" element={<Mails/>} />
      </Routes>

      {/* <App /> */}
    </Router>
  </React.StrictMode>
);
