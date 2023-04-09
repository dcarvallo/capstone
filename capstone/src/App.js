import './App.css';
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Main from "./components/Main";
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <>
    <Header />
    <div className='container mx-auto p-8 '>

    <Routes> 
        <Route path="/" element={<About />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<Main />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/confirmedBooking' element={<ConfirmedBooking />}></Route>
      </Routes>
    </div>
      {/* <Main /> */}
      <footer>

      </footer>
    </>
  );
}

export default App;
