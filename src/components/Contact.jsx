import { Box,Typography,Grid2,TextField,Button } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import emailjs from 'emailjs-com';
const Contact=()=>{
    const navigate = useNavigate();
    const [from_name,setName]=useState('');
    const [from_email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [nameValid,setNameValid]=useState(true);
    const [emailValid,setEmailValid]=useState(true);
    const [messageValid,setMessageValid]=useState(true);
    const handleName=(e)=>{
       setName(e.target.value);
       setNameValid(true);
    };
    const handleEmail=(e)=>{
        setEmail(e.target.value); 
        setEmailValid(true);
    };
    const handleMessage=(e)=>{
        setMessage(e.target.value);
        setMessageValid(true);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(from_name.trim().length===0){
            setNameValid(false);
            return;
        };
        if(from_email.trim().length===0){
            setEmailValid(false);
            return;
        };
        if(message.trim().length===0){
            setMessageValid(false);
            return;
        }
        // let to_name='Javan'
        // // EmailJS service details
        // const serviceID = "service_6xat2xh";
        // const templateID = "template_13bv5rb";
        // const publicKey = "1kMgniQlsFBDxEdco";

    // Send email using EmailJS
      // emailjs.send(serviceID, templateID, from_email,from_name,message,to_name, publicKey)
      // .then(() => {
      //   alert("Message sent successfully!");
      //   setEmail('');
      //   setMessage('');
      //   setName('');
      // })
      // .catch((error) => {
      //   console.error("Email sending error:", error);
      //   alert("Failed to send message. Please try again.");
      // });
  
        navigate("/resume");

    }
    return(
        <Box sx={{backgroundColor:'rgba(10, 10, 10, 1)', width:'100%', margin:'0',}}>
          <Typography variant="h4" sx={{textAlign:'center',color:'white', paddingTop:'4rem',fontWeight:"bold"}}>
            Get <Typography variant="h4" 
         sx={{textDecorationColor:'blue',textDecorationLine:'underline',fontWeight:"bold"}} component='span'>In</Typography> Touch</Typography>

             <Grid2 container sx={{paddingTop:'4rem'}} >
                <Grid2 item size={{xs:12,md:4}}>
                    <Typography variant="h5" sx={{color:'white',fontWeight:'bold',padding:'1rem'}}> ADDRESS</Typography>
                    <Box sx={{paddingLeft:'1rem'}}>
                    <Typography variant="h6" sx={{color:'white'}}>P.O. BOX</Typography>
                    <Typography variant="h6" sx={{color:'white'}}>10200</Typography>
                    <Typography variant="h6" sx={{color:'white'}}>Kisumu</Typography>
                    </Box>
                    <Box sx={{paddingTop:'1rem'}}>
                        <Typography sx={{color:'white',paddingLeft:'1rem'}}><LocalPhoneIcon  sx={{ fontSize: 20 }}/> (+254)792376357</Typography>
                        <Typography sx={{color:'white',paddingLeft:'1rem'}}><WhatsAppIcon sx={{ fontSize: 20 }}/> (+254)701071028</Typography>
                        <Typography sx={{color:'white',paddingLeft:'1rem'}}><EmailIcon sx={{ fontSize: 20 }}/> sawojavan@gmail.com</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={{color:'white',fontWeight:'bold',padding:'1rem'}} >FOLLOW ME</Typography>
                        <Typography variant="h6" sx={{color:'white',fontWeight:'bold',paddingLeft:'1rem'}}>
                           <Link to='' ><EmailIcon sx={{ fontSize: 20 ,paddingRight:2.5,paddingLeft:0.6,color:'white'}}/></Link>
                           <Link to='https://github.com/SawoJavan'><GitHubIcon sx={{ fontSize: 20,paddingRight:2.5,paddingLeft:0.4,color:'white'}}/></Link>
                           <Link to='https://www.linkedin.com/in/javan-sawo-2a8a91249'><LinkedInIcon sx={{ fontSize: 20,paddingRight:0.4,paddingLeft:0.4,color:'white'}}/></Link>
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 item size={{xs:12,md:8}}>
                  <Typography variant="h4"  sx={{fontWeight:'bold',color:'white', fontSize:{xs:'1.5rem',md:'2rem' },padding:{xs:'1rem'}}}>Send me a Message</Typography>
                  <Box sx={{ p: 3 }}>
        <Box onSubmit={handleSubmit} component='form' 
        sx={{
            backgroundColor: "transparent", 
            backdropFilter: "blur(10px)", 
            
          }}
         >
         <Grid2 container spacing={2}> 
            <Grid2 item size={{xs:12,md:6}} >
            <TextField
            fullWidth
            label="Name"
            name="name"
            variant="filled"
            value={from_name}
            error={!nameValid}
            helperText={!nameValid && 'Enter name'}
            onChange={handleName}
            sx={{borderRadius:'1rem',input:{backgroundColor: "white"}    }}
          />
            </Grid2>
            <Grid2 item size={{xs:12,md:6}} >
            <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="filled"
            value={from_email}
            error={!emailValid}
            helperText={!emailValid && 'Enter email'}
            onChange={handleEmail}
            sx={{  borderRadius:'1rem',input:{backgroundColor: "white"}
          }}
          />
            </Grid2>
            <Grid2 item size={{xs:12,md:12}} sx={{paddingBottom:'2rem'}} >
            <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="filled"
            value={message}
            error={!messageValid}
            helperText={!messageValid && 'Please send me a note'}
            onChange={handleMessage}
            sx={{textarea:{backgroundColor: "white"},  }}
          />
            </Grid2>
          
          
          
        </Grid2>
          <Button type="submit" variant="contained" color="primary" sx={{borderBlock:'none'}}>
            Send Message
          </Button>

        </Box>
      </Box>
                </Grid2>
             </Grid2>
             <Box sx={{paddingTop:'4rem',paddingLeft:'2rem',paddingBottom:'3rem'}}>
                 <Typography variant="body1"sx={{color:'white'}} >Copyright 2025<Typography variant="body1" component='span' sx={{color:'blue'}}>Sawo</Typography>.All rights Reserved</Typography>
             </Box>
        </Box>
    )
}
export default Contact;