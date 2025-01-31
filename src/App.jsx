import {Container} from "@mui/material";
import { Route,Routes,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import image2 from './assets/images/image1.jpg';
import Header from "./components/Header";
import Home from "./components/Home";
import {About} from "./components/About.jsx";
import PageWrapper from "./components/PageWrapper.jsx";
import WhatIDo from "./components/WhatIDo.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  const location = useLocation();

  return (
   
     <Container maxWidth={false}
     disableGutters 
     sx={{
        width: "100vw", 
        height: "100vh", 
        backgroundImage: `url(${image2})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        margin: 0,
        padding: 0
        
    }}>
      <Header/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} exact />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} exact />
          <Route path="/what" element={<PageWrapper><WhatIDo /></PageWrapper>} exact />
          <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} exact />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} exact />
        </Routes>
      </AnimatePresence>
      
    </Container>
   
  )
}




export default App
