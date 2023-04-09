import './App.css';
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Main from "./components/Main";
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import Booking from './components/Booking';

function App() {
  return (
    <>
    <Header />
    <div className='container mx-auto p-8 min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/confirmedBooking' element={<ConfirmedBooking />}></Route>
      </Routes>
    </div>
      <Footer />
    </>
  );
}

export default App;
