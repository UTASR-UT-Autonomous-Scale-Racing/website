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
  const [prevScrollPos, setPrevScrollPos] = React.useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0
  );
  const [visible, setVisible] = React.useState(true);

  // true when NOT at the very top
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    if (isScrollingDown && visible) setVisible(false);
    else if (!isScrollingDown && !visible) setVisible(true);
  }, [prevScrollPos, visible]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Frosted glass styles when scrolled
  const glassSx = scrolled
    ? {
        background: 'rgba(2,0,36,0.55)',
        backdropFilter: 'saturate(140%) blur(10px)',
        WebkitBackdropFilter: 'saturate(140%) blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.10)',
        boxShadow:
          '0px 2px 6px rgba(0,0,0,0.18), 0px 8px 24px rgba(0,0,0,0.15)',
      }
    : {
        background: 'transparent',
        boxShadow: 'none',
        borderBottom: '1px solid transparent',
      };

  return React.cloneElement(children, {
    elevation: 0, // we control shadow via sx above
    sx: {
      ...(children.props.sx || {}),
      ...glassSx,
      transition: 'transform .2s, box-shadow .25s, background .25s, border-color .25s',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      color: '#fff',
    },
  });
}

const pages = ['Main', 'About Us', 'Gallery', 'Sponsors', 'Join Us'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleMenuItemClick = (page) => {
    handleCloseNavMenu();
    const sectionId = `#${page.toLowerCase().replace(' ', '-')}`;
    const sectionElement = document.querySelector(sectionId);
    if (sectionElement) sectionElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollHandler>
      <AppBar
        position="fixed"
        sx={{
          // start transparent; ScrollHandler will swap to glass on scroll
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={'svg/White logo - no background.svg'}
                alt="UTASR"
                style={{
                  height: '64px',
                  width: '150px',
                  marginRight: '8px',
                  objectFit: 'contain',
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
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleMenuItemClick(page)}>
                    <Typography textAlign="center" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={`#${page.toLowerCase().replace(' ', '-')}`}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    px: 1.5,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
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
