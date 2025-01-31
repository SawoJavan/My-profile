import { Box,Typography } from "@mui/material";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import VerifiedIcon from '@mui/icons-material/Verified';
import WavingHandIcon from '@mui/icons-material/WavingHand';
const Resume=()=>{
    return(
        <Box sx={{ width:'100%', margin:'0',}}>
           <Typography variant="h4" sx={{fontWeight:'bold',color:'blue',paddingTop:'5rem', textAlign:'center'}} >
            Thank You!  <SentimentVerySatisfiedIcon sx={{fontSize:20, color:'yellow'}}/>  
           </Typography>
           <Typography variant="body1" sx={{fontWeight:'bold',color:'white',paddingTop:'1rem', textAlign:'center'}} >
            Thank you for reaching out.Your message has been sent successfully. <VerifiedIcon sx={{fontSize:25, color:'yellow'}}/></Typography>
            <Typography variant="body1" sx={{fontWeight:'bold',color:'white',paddingTop:'0.5rem',paddingBottom:'2rem', textAlign:'center'}} >
                 I will get back to you as soon as possible.</Typography>
                 <Typography sx={{textAlign:'center'}} >
                 <WavingHandIcon sx={{fontSize:35, color:'yellow'}}/>
                 </Typography>
        </Box>
    )
}
export default Resume;