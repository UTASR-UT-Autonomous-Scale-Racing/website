import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const pages = ['Instagram', 'Discord'];

function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, width: '100%', bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={'svg/White logo - no background.svg'} alt='UTASR' style={{ height: '80px', width: '80px', marginRight: '80px' }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            By{' '}
            <a href="https://github.com/UTASR-UT-Autonomous-Scale-Racing/website" style={{ color: 'white', textDecoration: 'none' }}>
               UTASR Web Dev. Team
            </a>
          </Box>
        </Toolbar>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Box sx={{ width: '70%', height: '1px', bgcolor: 'gray', opacity: 0.5 }}></Box>
      </Box>
      <Box sx={{ textAlign: 'center', my: 2, py: 1, bgcolor: 'black', color: 'white', fontSize: '0.875rem' }}>
        Copyright © 2025 University of Toronto Autonomous Scale Racing
      </Box>
    </AppBar>
  );
}

export default Footer;
