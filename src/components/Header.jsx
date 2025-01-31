import  { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const Header=()=>{
    
        const [drawerOpen, setDrawerOpen] = useState(false);
      
        const toggleDrawer = (open) => () => {
          setDrawerOpen(open);
        };
    
    return(
        <>
        <AppBar position="sticky" sx={{ backgroundColor: location.pathname === "/" || location.pathname === "/resume"? "transparent" : "rgba(0, 0, 0, 0.8)", boxShadow: "none" }}>
          <Toolbar>
            {/* Application Title */}
            <Typography variant="h5" sx={{ flexGrow: 1, color: "white",fontStyle:'bold' }}>
              Sawo Javan
            </Typography>
  
            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Link to="/" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Home</Link>
              <Link to="/about" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>About</Link>
              <Link to="/what" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>What I Do</Link>
              {/* <Link to="/resume" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Resume</Link> */}
              <Link to="/contact" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Contact</Link>
            </Box>
  
            {/* Hamburger Menu for Small Screens */}
            <IconButton 
              sx={{ display: { xs: "block", md: "none" }, color: "white" }} 
              onClick={toggleDrawer(true)}
              disableRipple
              disableFocusRipple
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
  
        {/* Drawer for Small Screens */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          disableEnforceFocus
          disableAutoFocus
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Ensure background color for Drawer itself
            '& .MuiDrawer-paper': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)', // Apply background color to Drawer paper (content area)
              color: 'white', // Ensure text color is white inside the drawer
            }
          }}
  
        >
          <List sx={{ width:{xs:100,md:200}}}>
            <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/what" onClick={toggleDrawer(false)}>
              <ListItemText primary="What I Do" />
            </ListItem>
            {/* <ListItem button component={Link} to="/resume" onClick={toggleDrawer(false)}>
              <ListItemText primary="Resume" />
            </ListItem> */}
            <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      </>
    )
}
export default Header;