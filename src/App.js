import './App.css';
import CustomNavbar from './Components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './HomePage/homepage';
import Footer from './Components/Footer/footer';
import About from '../src/About/about'
import BookConsultation from '../src/BookConsultation/bookConsultation'
import OurTeam from '../src/Team/ourTeam'
import Core1 from '../src/Team/core1'

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/bookConsultation' element={<BookConsultation/>}/>
        <Route path='/ourTeam' element={<OurTeam/>}/>
        <Route path='/core1' element={<Core1/>}/>
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
