import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const NAV_LINKS = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.menu', path: '/images/Menu.pdf', external: true },
  { key: 'nav.booking', path: '/booking' },
  { key: 'nav.meetings', path: '/meetings' },
  { key: 'nav.rentAsVenue', path: '/rent-as-venue' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lang = i18n.language;

  const handleLangChange = (_: React.MouseEvent, val: string) => {
    if (val) i18n.changeLanguage(val);
  };

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ background: '#000', color: 'goldenrod', boxShadow: 'none', zIndex: 1200 }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
          {/* Logo */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/images/fjosid_icon_row.png"
              alt="Fjósið"
              sx={{ height: 48 }}
            />
          </Box>

          {/* Desktop nav */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
              alignItems: 'center',
            }}
          >
            {NAV_LINKS.map(({ key, path, external }) =>
              external ? (
                <Box
                  key={key}
                  component="a"
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'goldenrod',
                    textDecoration: 'none',
                    fontWeight: 500,
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {t(key)}
                </Box>
              ) : (
                <Box
                  key={key}
                  component={Link}
                  to={path}
                  sx={{
                    color: 'goldenrod',
                    textDecoration: 'none',
                    fontWeight: 500,
                    borderBottom: isActive(path) ? '2px solid goldenrod' : '2px solid transparent',
                    pb: '2px',
                    '&:hover': { borderBottom: '2px solid goldenrod' },
                  }}
                >
                  {t(key)}
                </Box>
              )
            )}
          </Box>

          {/* Right controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            <Box
              component="a"
              href="https://www.facebook.com/profile.php?id=61551701065518"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'goldenrod', display: { xs: 'none', sm: 'flex' } }}
            >
              <FacebookIcon />
            </Box>
            <Box
              component="a"
              href="https://www.instagram.com/fjosid2023/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'goldenrod', display: { xs: 'none', sm: 'flex' } }}
            >
              <InstagramIcon />
            </Box>

            <ToggleButtonGroup
              value={lang}
              exclusive
              onChange={handleLangChange}
              size="small"
              sx={{
                '& .MuiToggleButton-root': {
                  color: 'goldenrod',
                  borderColor: 'goldenrod',
                  px: 1,
                  py: 0.25,
                  fontSize: '0.75rem',
                },
                '& .Mui-selected': {
                  backgroundColor: 'goldenrod !important',
                  color: '#000 !important',
                },
              }}
            >
              <ToggleButton value="fo">FO</ToggleButton>
              <ToggleButton value="en">EN</ToggleButton>
            </ToggleButtonGroup>

            <IconButton
              sx={{ color: 'goldenrod' }}
              onClick={() => setDrawerOpen(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile / side drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ '& .MuiDrawer-paper': { background: '#000', minWidth: 220 } }}
      >
        <Box sx={{ p: 2, color: 'goldenrod', fontWeight: 700, fontSize: '1.25rem' }}>
          Fjósið
        </Box>
        <Divider sx={{ borderColor: 'rgba(218,165,32,0.3)' }} />
        <List>
          {NAV_LINKS.map(({ key, path, external }) => (
            <Box key={key}>
              <ListItem disablePadding>
                <ListItemButton
                  component={external ? 'a' : Link}
                  {...(external ? { href: path, target: '_blank', rel: 'noopener noreferrer' } : { to: path })}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ color: 'goldenrod' }}
                >
                  <ListItemText
                    primary={t(key)}
                    slotProps={{ primary: { sx: { color: 'goldenrod' } } }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ borderColor: 'rgba(218,165,32,0.3)' }} />
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}
