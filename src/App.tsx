import './App.css';

import Footer from "./view/Footer";
import Header from './view/Header';
import HomeScreen from "./view/HomeScreen";

import { Routes, Route } from 'react-router-dom';
import TermsAndConditions from './view/TermsAndConditions';
import PrivacyPolicy from './view/PrivacyPolicy';
import DeleteData from './view/Delete';


function App() {
    return (<>
       <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/delete" element={<DeleteData />} />
       </Routes>
    </>
    )
}

export default App;

