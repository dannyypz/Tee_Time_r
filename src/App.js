import Navbar from './Components/Navbar.jsx'
import Blog from './Components/Blog'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Services from './Components/Services'
import Testimonials from "./Components/Testimonials";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Testimonials/>
    <Blog/>
    <Footer/>
    </>
  );
}

export default App;
