import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo.png'

const pages = ['Main', 'About Us', 'Events', 'Gallery', 'Sponsors', 'Join Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="Logo" style={{ height: '40px', width: '40px', marginRight: '8px' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UTASR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
          </Box>
          <Button href="#main" sx={{ color: 'white' }}>Main</Button>
          <Button href="#about-us" sx={{ color: 'white' }}>About Us</Button>
          <Button href="#events" sx={{ color: 'white' }}>Events</Button>
          <Button href="#gallery" sx={{ color: 'white' }}>Gallery</Button>
          <Button href="#sponsors" sx={{ color: 'white' }}>Sponsors</Button>
          <Button href="#join-us" sx={{ color: 'white' }}>Join Us</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;