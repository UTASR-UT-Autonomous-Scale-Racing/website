import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function ScrollHandler(props) {
  const { children } = props;
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.pageYOffset);
  const [visible, setVisible] = React.useState(true);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    if (isScrollingDown && visible) {
      setVisible(false);
    } else if (!isScrollingDown && !visible) {
      setVisible(true);
    }
  }, [prevScrollPos, visible]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      transition: 'transform 0.2s, box-shadow 0.2s',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      boxShadow: trigger ? '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)' : 'none'
    }
  });
}

const pages = ['Main', 'About Us', 'Gallery', 'Sponsors', 'Join Us'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (page) => {
    handleCloseNavMenu(); // Close the menu
    const sectionId = `#${page.toLowerCase().replace(' ', '-')}`;
    const sectionElement = document.querySelector(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  return (
    <ScrollHandler>
      <AppBar
        position="fixed"
        sx={(theme) => ({
          background: 'rgba(2, 0, 36, 0.6)',   // translucent brand blue
          backdropFilter: 'saturate(120%) blur(8px)',
          WebkitBackdropFilter: 'saturate(120%) blur(8px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          transition: 'background .2s ease, transform .2s ease',
        })}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={'svg/White logo - no background.svg'}
                alt="UTASR"
                style={{ height: 48, width: 140, objectFit: 'contain' }}
              />
            </Box>

            {/* Mobile Navigation */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleMenuItemClick(page)} // Handle click to scroll
                  >
                    <Typography textAlign="center" sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Navigation */}
              {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}>
              {pages.map((page) => {
                const href = `#${page.toLowerCase().replace(' ', '-')}`;
                return (
                  <Button
                    key={page}
                    href={href}
                    onClick={handleCloseNavMenu}
                    disableRipple
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 500,
                      px: 1.5,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.10)' },
                      // active underline when link is the current hash
                      ...(typeof window !== 'undefined' && window.location.hash === href
                        ? {
                            '&::after': {
                              content: '""',
                              display: 'block',
                              height: 2,
                              mt: 0.5,
                              borderRadius: 1,
                              background: 'linear-gradient(90deg,#6ea8fe, #b4c6ff)',
                            },
                          }
                        : {}),
                    }}
                  >
                    {page}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollHandler>
  );
}

export default ResponsiveAppBar;