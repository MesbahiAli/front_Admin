// Navbar.js
import React, { useState } from 'react';
import { Button,styled, AppBar, Box, Modal, Typography, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import FormAuth from '../../modules/Authentification/components/FormAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import JwtUtils from "../../routing/JwtUtils";
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import LOGO from "../../assets/images/LogoAPP.png";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // state variable to track whether some element is open
  const handleClick = () => {
    // Define functions to handle different events
    setIsOpen(!isOpen); // set the state to the opposite of its current value
  };
  const [anchorElNav, setAnchorElNav] = useState(null); // state variable to keep track of clicked Nav anchor element
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pages = ['Products', 'Pricing', 'Blog'];

  const handleCloseModal = () => {
    setOpen(false);
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });
  
  const handleLogout = () => {
    JwtUtils.logOut(); // Logout by clearing localStorage
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <AppBar position="sticky" style={{backgroundColor: "#FFFFFF",color:"#14181F",}}>
        <StyledToolbar>
        <Box sx={{ display: { xs: 'flex', md: 'none' } ,width:"30%",}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <img
                      src={LOGO}
                      className="logo"
                      alt="logo"
                      width="50px"
                    />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                fontFamily:"Segoe UI"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} 
                onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>





 <Box sx={{display: { xs: 'none', md: 'flex' },width:"30%",justifyContent:"space-around"}}>

 <Box sx={{display:"flex"}}>
 <img
                      src={LOGO}
                      className="logo"
                      alt="logo"
                      width="50px"
                    />
</Box>
   <Box sx={{display:"flex"}}>
            {pages.map((page) => (
              <Button
               key={page}
                onClick={handleCloseNavMenu}
                sx={{ mr: 2,color: 'black', display: 'block' ,
                    textDecoration: 'none',
                    borderBottom: '2px solid transparent',
                    transition: 'border-bottom 0.3s ease',
                    '&:hover, &:active': {
                      borderBottom: '2px solid #C9A16E',
                      borderRadius: '0px',
                    },}}
              >
                {page}
              </Button>
            ))}
            </Box>
          </Box>


































           <Box 
          style={{
          display: "flex",
          alignItems: "center",
        }}
          >
            <Typography  style={{fontSize:"18px",fontWeight:"bold"}}>La recharge en toute liberté !
          </Typography>
          </Box>

          <Box style={{display: "flex",
    alignItems:"center",
    width:"30%",
    justifyContent:"flex-end"
    }}>
          <Box sx={{display: { xs: 'none', md: 'flex' }}}>
            {JwtUtils.isActif() ? (
                <IconButton
                  size="small"
                  aria-label="account user"
                  aria-controls="menu-appbar"
                  aria-haspopup="false"
                  color="inherit"
                  component="a"
                  onClick={handleLogout}
                  href="/"
                  sx={{
                    borderRadius: "4px",
                    marginRight: "5px",
                    cursor: "pointer",
                    fontFamily:
                    "Segoe UI,Times New Roman ,Circular Pro,-Apple-System, .SFNSText-Regular,San Francisco,Segoe UI",
                    "&:hover": { backgroundColor: "#9EC1F4", color: "#003285" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily:
                      "Segoe UI,Times New Roman ,Circular Pro,-Apple-System, .SFNSText-Regular,San Francisco,Segoe UI",
                      marginRight: "7px",
                    }}
                  >
                    Deconnecter {}
                  </Typography>
                  <img  
                      src={localStorage?.firebase_imgurl}
                      className="logo"
                      alt="logo"
                      width="50px"
                    />
                </IconButton>
              ) : (
                <IconButton
                  size="small"
                  aria-label="account user"
                  aria-controls="menu-appbar"
                  aria-haspopup="false"
                  color="inherit"
                
                  onClick={handleOpen}
                  sx={{
                    borderRadius: "4px",
                    marginRight: "5px",
                    cursor: "pointer",
                    fontFamily:
                      "Times New Roman ,Circular Pro,-Apple-System, .SFNSText-Regular,San Francisco,Segoe UI",
                    "&:hover": { backgroundColor: "#9EC1F4", color: "#003285" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily:
                      "Times New Roman ,Circular Pro,-Apple-System, .SFNSText-Regular,San Francisco,Segoe UI",
                      marginRight: "4px",
                    }}
                  >
                    Se connecter {}
                  </Typography>
                    <PersonOutlineIcon />
                </IconButton>
              )}
              </Box>
<Box style={{display:"flex"}}>
<DehazeIcon/>
              </Box>
              </Box> 
        </StyledToolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', p: 4 }}>
          <FormAuth />
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
