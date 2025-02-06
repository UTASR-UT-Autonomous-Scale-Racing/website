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

const pages = ['Main', 'About Us', 'Events', 'Gallery', 'Sponsors', 'Join Us'];

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
      <AppBar position="fixed" sx={{ backgroundColor: '#020024' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo and Brand - Desktop */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={'svg/White logo - no background.svg'}
                alt="UTASR"
                style={{
                  height: 'auto',
                  width: '150px',
                  marginRight: '8px',
                  objectFit: 'contain'
                }}
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
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={`#${page.toLowerCase().replace(' ', '-')}`}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'white',
                    display: 'block',
                    textAlign: 'center',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollHandler>
  );
}

export default ResponsiveAppBar;