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
function ScrollHandler({ children }) {
  const [visible, setVisible] = React.useState(true);
  const [atTop, setAtTop] = React.useState(true); // for glass vs transparent

  const lastYRef = React.useRef(
    typeof window !== 'undefined' ? window.scrollY : 0
  );
  const tickingRef = React.useRef(false);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const diff = y - lastYRef.current;

      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        // Always show when at top (or overscrolled negative on iOS)
        if (y <= 0) {
          setVisible(true);
          setAtTop(true);
        } else {
          setAtTop(false);
          // Only react to meaningful deltas to avoid jitter
          if (Math.abs(diff) > 4) {
            // show when scrolling up, hide when scrolling down
            setVisible(diff < 0);
          }
        }
        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Frosted glass when not at top
  const glassSx = atTop
    ? {
        background: 'transparent',
        borderBottom: '1px solid transparent',
        boxShadow: 'none',
      }
    : {
        background: 'rgba(2,0,36,0.55)',
        backdropFilter: 'saturate(140%) blur(10px)',
        WebkitBackdropFilter: 'saturate(140%) blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.10)',
        boxShadow:
          '0px 2px 6px rgba(0,0,0,0.18), 0px 8px 24px rgba(0,0,0,0.15)',
      };

  return React.cloneElement(children, {
    elevation: 0,
    sx: {
      ...(children.props.sx || {}),
      ...glassSx,
      zIndex: (theme) => theme.zIndex.appBar + 1, // stay on top
      transition:
        'transform .22s, box-shadow .25s, background .25s, border-color .25s',
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
