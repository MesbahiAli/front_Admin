// Navbar.js
import React, { useState } from 'react';
import { styled, AppBar, Box, Modal, Typography, Toolbar, IconButton} from '@mui/material';
import FormAuth from '../../modules/Authentification/components/FormAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import JwtUtils from "../../routing/JwtUtils";
import Avatar from '@mui/material/Avatar';




const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  
  const handleLogout = () => {
    JwtUtils.logOut(); // Logout by clearing localStorage
  };

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
            LAMA DEV
          </Typography>
          
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
                      "Times New Roman ,Circular Pro,-Apple-System, .SFNSText-Regular,San Francisco,Segoe UI",
                    "&:hover": { backgroundColor: "#9EC1F4", color: "#003285" },
                  }}
                >
                  <Avatar src={localStorage?.firebase_imgurl} sx={{ width: 35, height: 35 }}/>
                  <Typography
                    sx={{
                      fontFamily:
                        "Times New Roman ,Circular Pro,-Apple-System, .SFNSText-Regular,San Francisco,Segoe UI",
                      marginLeft: "7px",
                    }}
                  >
                    Deconnecter {}
                  </Typography>
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
                  <AccountCircleIcon sx={{ width: 24, height: 24 }}/>
                  <Typography
                    sx={{
                      fontFamily:
                        "Times New Roman ,Circular Pro,-Apple-System, .SFNSText-Regular,San Francisco,Segoe UI",
                      marginLeft: "4px",
                    }}
                  >
                    Se connecter {}
                  </Typography>
                </IconButton>
              )}
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
