
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Service/Service'
import MyWork from './components/Mywork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
 

  return (
   <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Service></Service>
    <MyWork></MyWork>
    <Contact></Contact>
    <Footer></Footer>
   </div>
  )
}

export default App
