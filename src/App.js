import './App.css';
import CustomNavbar from './Components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './HomePage/homepage';
import Footer from './Components/Footer/footer';
import About from '../src/About/about'
import BookConsultation from '../src/BookConsultation/bookConsultation'
import OurTeam from '../src/Team/ourTeam'
import Core1 from '../src/Team/core1'
import Expertise from './HomePage/expertise';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Routes>
        <Route exact index  element={<Homepage />} />
        <Route exact path='/about'  element={<About/>}/>
        <Route exact path='/expertise'  element={<Expertise/>}/>
        <Route exact path='/bookConsultation'  element={<BookConsultation/>}/>
        <Route exact path='/ourTeam'  element={<OurTeam/>}/>
        <Route exact path='/core1'  element={<Core1/>}/>
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
