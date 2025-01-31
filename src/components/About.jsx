import { Box,Typography,Grid2,Button,Stack,Divider } from "@mui/material";
export function About (){
    return(
        <Box margin={0} sx={{backgroundColor:'rgba(10, 10, 10, 1)', width:'100%', margin:'0'}}>
          <Box sx={{paddingTop:'5%'}}>
            <Typography variant="h4" sx={{textAlign:'center', color:'white',fontWeight:'bold',paddingBottom:'3rem'}}>More {' '}
                <Typography variant='h4' component='span' sx={{textDecorationLine:'underline' ,textDecorationColor:'blue',fontWeight:'bold'}}>About</Typography>
                {' '} Me</Typography>
          </Box>
          <Box sx={{marginLeft:'1rem', marginRight:'1rem'}}>
           <Grid2 container spacing={2}>
           <Grid2 item size={{ xs: 12, md: 8 }}>
           <Typography variant="h4" sx={{color:'white',fontWeight:'bold'}}>I am  {' '}
                <Typography variant='h4' component='span' sx={{color:'blue',fontWeight:'bold'}}>Sawo Javan</Typography>
                {' '} a web developer</Typography>
                <Typography variant="body1" sx={{color:'rgba(230, 230, 230, 0.8)' ,padding:'1rem'}}>
                I am a passionate Mern Stack developer with a knack for creating dynamic and responsive web applications. 
                With a strong foundation in React and Next.js, I bring a versatile skill set to the table, 
                complemented by my expertise in JavaScript, TypeScript, React Native, NodeJs,Express Js, Mongo Db, SQL, HTML, CSS, Material UI and Tailwind CSS.
                </Typography>
                <Typography variant="body1" sx={{color:'rgba(230, 230, 230, 0.8)' ,padding:'1rem'}}> 
                I thrive on transforming complex problems into intuitive, user-friendly solutions. 
                My journey in web development has been fueled by a love for learning and staying updated with 
                the latest trends and technologies. Whether its optimizing load times, implementing a seamless user interface,
                 or ensuring cross-browser compatibility, I approach each project with meticulous attention to detail.
                </Typography>
           </Grid2>
           <Grid2 item size={{ xs: 12, md: 4 }}>
            <Box>
               <Typography variant="h6" sx={{fontWeight:'bold',color:'white'}}>Name: 
                <Typography variant="h6" component='span' sx={{fontStyle:'none'}}>{'   '}Sawo Javan</Typography></Typography>
               <Box sx={{height:'1px', backgroundColor:'rgba(220, 220, 220, 1)', width:'100%', marginBottom:'0.8rem'}}> </Box>

               <Typography variant="h6" sx={{fontWeight:'bold',color:'white'}}>Email: 
                <Typography variant="h6" component='span' sx={{fontStyle:'none' ,color:'blue'}}>{'   '}sawojavan@gmail.com</Typography></Typography>
               <Box sx={{height:'1px', backgroundColor:'rgba(220, 220, 220, 1)', width:'100%', marginBottom:'0.8rem'}}> </Box>

               <Typography variant="h6" sx={{fontWeight:'bold',color:'white'}}>Phone: 
                <Typography variant="h6" component='span' sx={{fontStyle:'none'}}>{'   '} 0792376357/0701071028</Typography></Typography>
               <Box sx={{height:'1px', backgroundColor:'rgba(220, 220, 220, 1)', width:'100%', marginBottom:'0.8rem'}}> </Box>

               <Typography variant="h6" sx={{fontWeight:'bold',color:'white'}}>Location: 
                <Typography variant="h6" component='span' sx={{fontStyle:'none'}}>{'   '}Kisumu, Kenya</Typography></Typography>
               <Box sx={{height:'1px', backgroundColor:'rgba(220, 220, 220, 1)', width:'100%', marginBottom:'0.8rem'}}> </Box>
               </Box>
               <Box >
                   <Button variant="outlined" sx={{backgroundColor: "transparent",borderBlockColor:'grey', color:'white', padding:'0.8rem',borderRadius:'1.2rem'}}> Download CV</Button>
               </Box>
           </Grid2>
           </Grid2>
           <Box sx={{marginLeft:'40%',marginTop:'5rem',paddingBottom:'2.8rem'}}>
           <Stack
                direction={{ xs: "column", md: "row" }}
                divider={<Divider orientation="vertical" color="white" flexItem />}
                spacing={5}
                >
                <Box> 
                    <Stack direction={"column"} >
                    <Typography variant="h2" sx={{color:'grey'}}>3+</Typography>
                    <Typography variant="h5" sx={{color:'white'}}>Experience</Typography>
                    </Stack>
                  
                </Box>
                <Box>
                <Stack direction={"column"} >
                    <Typography variant="h2" sx={{color:'grey'}}>8+</Typography>
                    <Typography variant="h5" sx={{color:'white'}}>Projects</Typography>
                    </Stack>
                </Box>
            </Stack>
           </Box>
           </Box>
        </Box>
    )
}
// export default About;