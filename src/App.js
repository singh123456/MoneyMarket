import React from 'react'
import  Navbar  from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Signup from './components/Signup';
import Footer from './components/Footer';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>

  <Router>
   <Navbar/>
    <Routes>
      <Route path="/"element={<Hero/>}/>
      <Route path='/featured' element={<Featured/>}/>
      <Route path='/earn' element={<Signup/>}/>
      <Route path='/footer' element={<Footer/>}/>

    </Routes>
  </Router>
 
    </>
  );
}

export default App;
