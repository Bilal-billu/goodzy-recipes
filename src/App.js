import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipes-all" element={<Header />} />
        <Route path='/about' element={<Home />} />
        <Route path='/partners' element={<Home />} />
        <Route path='/recipes-faq' element={<Home />} />


        <Route path='/admin' element={<Home />} />
        <Route path='/licensing' element={<Home />} />
        <Route path='/change-log' element={<Home />} />
        <Route path='/style-guide' element={<Home />} />
        <Route path='/e-4-0-4' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
