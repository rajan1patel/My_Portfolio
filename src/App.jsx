
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Service/Service'
import MyWork from './components/Mywork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { motion } from 'framer-motion';

function App() {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
   <motion.div
     initial="hidden"
     animate="visible"
     variants={containerVariants}
   >
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Service></Service>
    <MyWork></MyWork>
    <Contact></Contact>
    <Footer></Footer>
   </motion.div>
  )
}

export default App
