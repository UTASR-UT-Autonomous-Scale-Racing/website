import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/utasr_uoft/?hl=en', external: true },
  { label: 'Discord',   href: 'https://discord.gg/ZzGRqah5hC',                 external: true },
  { label: 'utasrteam@gmail.com', href: 'mailto:utasrteam@gmail.com', external: false },
];

function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, width: '100%', bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={'svg/White logo - no background.svg'}
            alt="UTASR"
            style={{ height: '80px', width: '80px', marginRight: '8PX', objectFit: 'contain' }}
          />

          {/* Mobile View Menu (optional trigger; if you don’t use a menu icon, you can remove this block) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {LINKS.map(({ label, href, external }) => (
                <MenuItem
                  key={label}
                  component="a"
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: 'center' }}>{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop View Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {LINKS.map(({ label, href, external }) => (
              <Button
                key={label}
                component="a"
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                sx={{ my: 2, color: 'white', textTransform: 'none' }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            By{' '}
            <a
              href="https://github.com/UTASR-UT-Autonomous-Scale-Racing/website"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              UTASR Web Dev. Team
            </a>
          </Box>
        </Toolbar>
      </Container>

      {/* Special Mobile View quick links */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: 1, my: 1 }}>
        {LINKS.map(({ label, href, external }) => (
          <Button
            key={label}
            component="a"
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            sx={{ my: 1, color: 'white', textTransform: 'none' }}
          >
            {label}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Box sx={{ width: '70%', height: '1px', bgcolor: 'gray', opacity: 0.5 }} />
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          my: 2,
          py: 1,
          px: 3,
          mb: 4,
          bgcolor: 'black',
          color: 'white',
          fontSize: '0.875rem',
        }}
      >
        Copyright © 2025 University of Toronto Autonomous Scale Racing
      </Box>
    </AppBar>
  );
}

export default Footer;
