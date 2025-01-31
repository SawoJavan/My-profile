import { Box, Typography,Grid2,Stack } from "@mui/material";
import AllOutRoundedIcon from '@mui/icons-material/AllOutRounded';
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded';
import CycloneRoundedIcon from '@mui/icons-material/CycloneRounded';
import BrowserUpdatedRoundedIcon from '@mui/icons-material/BrowserUpdatedRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import MouseRoundedIcon from '@mui/icons-material/MouseRounded';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
const WhatIDo=()=>{
  return(
    <Box margin={0} sx={{backgroundColor:'rgba(10, 10, 10, 1)', width:'100%', margin:'0',}}>
         <Typography variant="h4" sx={{textAlign:'center',color:'white', paddingTop:'4rem',fontWeight:"bold"}}>
            What <Typography variant="h4" 
         sx={{textDecorationColor:'blue',textDecorationLine:'underline',fontWeight:"bold"}} component='span'>I</Typography> Do</Typography>
         <Box>
            <Grid2 container  rowGap={8} sx={{padding:{xs:'0.6rem',md:'3rem'},paddingBottom:'3rem' }}>

            <Grid2 item size={{xs:12,md:6}}>
                  <Stack direction="row" spacing={5}>
                    <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><MovieFilterRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                    <Box>
                        <Stack direction='column'>
                        <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}>SEO Optimization </Typography>
                        <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}>Improving the visibility of your website on search engines through 
                            technical SEO strategies, including code optimization and performance enhancements.
                        </Typography>
                        </Stack>
                    </Box>
                    
                  </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><AllOutRoundedIcon color="secondary" sx={{ fontSize: 50 ,padding:2}}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}>Seamless User Experience </Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}>Creating a smooth and consistent user experience across all 
                                devices and platforms, ensuring users have a seamless interaction 
                                with your application. </Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><CycloneRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}>Responsive Design </Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}>Developing responsive layouts that adapt to various screen sizes and devices,
                                 providing an optimal viewing experience for all users. </Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><BorderAllRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}> Accessibility Enhancements
                          </Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'  }}> Implementing accessibility best practices to ensure your application 
                                is usable by people with various disabilities, improving inclusivity.
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><BrowserUpdatedRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}> Cross-Browser Compatibility
                            </Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}> Ensuring that your application performs
                                 consistently across different web browsers, 
                                providing a uniform experience for all users</Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><BuildRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}> Backend Development with Node.js</Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}> Building scalable backend services using Node.js, Express, and MongoDB, 
                                providing robust and efficient server-side solutions for your application.</Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><CurrencyExchangeRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}> E-commerce Solutions</Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}> Building comprehensive e-commerce 
                                platforms that help you sell products and services online,
                                 integrating with secure payment gateways and ensuring a seamless shopping experience.</Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><EngineeringRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}> User-Intuitive UI Design</Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}>
                            Designing user interfaces that are easy to understand and navigate, enhancing user
                             satisfaction and engagement.

                            </Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><LaptopChromebookRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}> Performance Optimization</Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}> Enhancing the performance of your web applications by optimizing load times,
                                 reducing lag, and ensuring smooth interactions.</Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><MouseRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}> Interactive Elements</Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}> Integrating interactive components and animations to 
                                make the user interface more engaging and dynamic.</Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>
            <Grid2 item size={{xs:12,md:6}}>
                    <Stack direction="row" spacing={5}>
                        <Box  sx={{backgroundColor:'rgba(10, 10, 40, 1)',borderRadius:'1rem',height:'5rem'}}><SettingsSuggestRoundedIcon color="secondary" sx={{ fontSize: 50,padding:2 }}/></Box>
                        <Box>
                            <Stack direction='column'>
                            <Typography variant={{ xs: "h6", md: "h5" }} sx={{color:'white',fontWeight:'bold'}}> RESTful API Integration</Typography>
                            <Typography variant='body1' sx={{color:'rgba(230, 230, 230, 0.8)'}}> Integrating third-party and custom APIs to enhance functionality
                                 and enable seamless data exchange across applications.</Typography>
                            </Stack>
                        </Box>
                    </Stack>
            </Grid2>

            </Grid2>
         </Box>
    </Box>

  )
}
export default WhatIDo;