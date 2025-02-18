import { Box,Typography,Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    const statements = [
        "'m Sawo Javan Awelo",
        "'m a passionate developer.",
        " love creating user-friendly web apps and mobile apps .",
        " can build something amazing for you!"
      ];
      const [currentStatement, setCurrentStatement] = useState(""); // Holds the current text being displayed
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current statement
  const [isDeleting, setIsDeleting] = useState(false); // Whether it's deleting or typing
  const [charIndex, setCharIndex] = useState(0); // Tracks character position
  const [speed, setSpeed] = useState(100); // Typing/deleting speed

  useEffect(() => {
    const handleTyping = () => {
      const currentText = statements[currentIndex];

      if (isDeleting) {
        // Delete one character
        setCurrentStatement((prev) => prev.slice(0, prev.length - 1));
        setSpeed(50); // Faster when deleting
      } else {
        // Add one character
        setCurrentStatement(currentText.slice(0, charIndex + 1));
        setSpeed(100); // Normal speed when typing
      }

      // Check if statement is complete (typed or deleted)
      if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
        setSpeed(1500); // Pause before deleting
      } else if (isDeleting && currentStatement === "") {
        setIsDeleting(false);
        setCharIndex(0);
        setCurrentIndex((prev) => (prev + 1) % statements.length); // Move to the next statement
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, [currentStatement, isDeleting, charIndex, currentIndex, speed, statements]);
    return(
        <Box>
             <Box sx={{alignItems:'center', alignContent:'center', marginTop:'10%'}}>
                <Typography variant="h4" sx={{color:'white',textAlign:'center'}}>Welcome</Typography>
             </Box>
             <Box sx={{alignItems:'center', alignContent:'center', marginTop:'3%'}}>
             <Typography variant="h3" sx={{ color: "blue", textAlign: "center", marginTop: 2 }}>I
          {currentStatement}
        </Typography>
             </Box>
             <Box sx={{alignItems:'center', alignContent:'center', marginTop:'2%'}}>
                <Typography variant="h5" sx={{color:'white',textAlign:'center'}}>Based in Kisumu, Kenya</Typography>
             </Box>
             <Box sx={{marginLeft:'45%',marginTop:'2%'}}>
             <Button variant='outlined' sx={{backgroundColor: "transparent",borderBlockColor:'grey', 
                color:'white', padding:'0.8rem',borderRadius:'1.2rem'}} component={Link} to='/about'>Hire Me</Button>
             </Box>
          
        </Box>
    )
}
export default Home;