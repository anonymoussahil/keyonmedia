
'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { services, digitalChildServices } from '@/lib/services';
import Ribbon from './Ribbon';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our work', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const serviceGroups = [
  {
    title: 'MEDIA & ADVERTISING',
    slugs: [
      'print-media',
      'outdoor-advertising',
      'railway-advertising',
      'radio-advertising',
      'tv-advertising',
      'multiplex-advertising',
    ],
  },
  {
    title: 'BRAND & EXPERIENCES',
    slugs: [
      'creative-design-printing',
      'public-relations',
      'events-btl',
    ],
  },
  {
    title: 'DIGITAL & TECHNOLOGY',
    slugs: ['digital-marketing'],
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const closeDesktop = () => setDesktopServicesOpen(false);

  return (
    <><Ribbon /><AppBar
      position="sticky"
      elevation={0}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          closeDesktop();
          closeMobile();
        }
      } }
      sx={{
        bgcolor: 'rgba(247,247,242,.97)',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(18px)',
        overflow: 'visible',
      }}
    >
      <Container maxWidth="lg">

        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 74, md: 88 },
            gap: 2,
            justifyContent: 'space-between',
          }}
        >
          {/* Brand */}
          <Box
            component={Link}
            href="/"
            aria-label="KeyOn Media home"
            onClick={closeDesktop}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.3,
              color: 'inherit',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 43,
                height: 43,
                bgcolor: 'primary.main',
                color: 'white',
                display: 'grid',
                placeItems: 'center',
                borderRadius: '13px',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 800,
                fontSize: 28,
                letterSpacing: '-3px',
                boxShadow: '0 7px 17px rgba(244,119,53,.22)',
              }}
            >
              K
              <span
                style={{
                  fontSize: 15,
                  letterSpacing: 0,
                  marginLeft: -1,
                }}
              >
                !
              </span>
            </Box>

            <Box>
              <Typography
                sx={{
                  font: '800 19px/1 Manrope, sans-serif',
                  letterSpacing: '-.8px',
                }}
              >
                keyon<span style={{ color: '#F47735' }}>media</span>
              </Typography>
              <Typography
                sx={{
                  font: '800 7px/1.6 Manrope, sans-serif',
                  letterSpacing: '2.15px',
                  color: 'text.secondary',
                  mt: 0.45,
                }}
              >
                PRIVATE LIMITED
              </Typography>
            </Box>
          </Box>

          {/* Desktop navigation */}
          <Stack
            direction="row"
            spacing={{ md: 1.5, lg: 2.3 }}
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {navItems.slice(0, 2).map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                color="inherit"
                sx={navButtonSx}
              >
                {item.label}
              </Button>
            ))}

            {/* Services dropdown trigger */}
            <Box
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={closeDesktop}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  closeDesktop();
                }
              } }
              sx={{ position: 'static' }}
            >
              <Button
                color="inherit"
                aria-haspopup="true"
                aria-expanded={desktopServicesOpen}
                onClick={() => setDesktopServicesOpen((current) => !current)}
                onFocus={() => setDesktopServicesOpen(true)}
                endIcon={<ExpandMoreRoundedIcon
                  sx={{
                    transition: 'transform 180ms ease',
                    transform: desktopServicesOpen
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                  }} />}
                sx={{
                  ...navButtonSx,
                  color: desktopServicesOpen
                    ? 'primary.dark'
                    : 'text.primary',
                }}
              >
                Services
              </Button>

              <Box
                id="services-mega-menu"
                role="region"
                aria-label="Services menu"
                aria-hidden={!desktopServicesOpen}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  zIndex: 20,
                  px: { md: 3, lg: 5 },
                  pt: 1,
                  visibility: desktopServicesOpen ? 'visible' : 'hidden',
                  opacity: desktopServicesOpen ? 1 : 0,
                  transform: desktopServicesOpen
                    ? 'translateY(0)'
                    : 'translateY(-6px)',
                  transition: 'opacity 160ms ease, transform 160ms ease',
                  pointerEvents: desktopServicesOpen ? 'auto' : 'none',
                }}
              >
                <Box
                  sx={{
                    maxWidth: 1180,
                    mx: 'auto',
                    p: { md: 3, lg: 4 },
                    bgcolor: '#FFF8F0',
                    border: '1px solid #E8DCCF',
                    borderRadius: 3,
                    boxShadow: '0 18px 45px rgba(56,53,51,.14)',
                    color: '#383533',
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="end"
                    sx={{ mb: 3 }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: '#A95735',
                          fontSize: 10,
                          letterSpacing: 2,
                          fontWeight: 700,
                          mb: 0.7,
                        }}
                      >
                        WHAT WE DO
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { md: 22, lg: 26 },
                          fontWeight: 700,
                          letterSpacing: '-.7px',
                        }}
                      >
                        Ideas across every medium.
                      </Typography>
                    </Box>

                    <Button
                      component={Link}
                      href="/services/digital-marketing"
                      onClick={closeDesktop}
                      endIcon={<ArrowOutwardRoundedIcon />}
                      sx={{ color: '#C45F2B', whiteSpace: 'nowrap' }}
                    >
                      Explore services
                    </Button>
                  </Stack>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: 3,
                    }}
                  >
                    {serviceGroups.map((group) => (
                      <Box key={group.title}>
                        <Typography
                          sx={{
                            color: '#A95735',
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: 1.1,
                            mb: 1.5,
                          }}
                        >
                          {group.title}
                        </Typography>

                        <Stack spacing={0.5}>
                          {group.slugs.map((slug) => {
                            const service = services.find(
                              (item) => item.slug === slug
                            );

                            if (!service) return null;

                            return (
                              <Box
                                key={service.slug}
                                component={Link}
                                href={`/services/${service.slug}`}
                                onClick={closeDesktop}
                                sx={{
                                  display: 'block',
                                  p: 1.2,
                                  mx: -1.2,
                                  borderRadius: 1.5,
                                  color: 'inherit',
                                  textDecoration: 'none',
                                  '&:hover': {
                                    bgcolor: '#F4DCCB',
                                  },
                                  '&:focus-visible': {
                                    outline: '2px solid #F47A35',
                                    outlineOffset: 2,
                                  },
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    mb: 0.4,
                                  }}
                                >
                                  {service.name}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: 11,
                                    lineHeight: 1.55,
                                    color: '#74665C',
                                  }}
                                >
                                  {service.short}
                                </Typography>
                              </Box>
                            );
                          })}
                        </Stack>

                        {group.slugs.includes('digital-marketing') && (
                          <Box
                            sx={{
                              mt: 1,
                              pt: 1.5,
                              borderTop: '1px solid #E8DCCF',
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: 10,
                                fontWeight: 700,
                                color: '#A95735',
                                mb: 1,
                              }}
                            >
                              DIGITAL SPECIALISATIONS
                            </Typography>
                            {digitalChildServices.slice(0, 5).map((child) => (
                              <Box
                                key={child.slug}
                                component={Link}
                                href={`/services/digital-marketing/${child.slug}`}
                                onClick={closeDesktop}
                                sx={{
                                  display: 'block',
                                  py: 0.65,
                                  fontSize: 12,
                                  color: '#62564E',
                                  textDecoration: 'none',
                                  '&:hover': { color: '#C45F2B' },
                                }}
                              >
                                {child.name}
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      mt: 3,
                      pt: 2,
                      borderTop: '1px solid #E8DCCF',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography sx={{ fontSize: 12, color: '#62564E' }}>
                      Have a project in mind?
                    </Typography>
                    <Button
                      component={Link}
                      href="/contact"
                      onClick={closeDesktop}
                      endIcon={<ArrowOutwardRoundedIcon />}
                      sx={{ color: '#C45F2B', fontWeight: 700 }}
                    >
                      Let’s talk
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            {navItems.slice(2).map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                color="inherit"
                sx={navButtonSx}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Header CTA and mobile toggle */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowOutwardRoundedIcon />}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                whiteSpace: 'nowrap',
                fontSize: 12,
              }}
            >
              Let’s talk
            </Button>

            <IconButton
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                color: 'secondary.main',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobile}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 380 },
            maxWidth: '100vw',
            bgcolor: '#FFF8F0',
            color: '#383533',
            p: { xs: 2.5, sm: 3 },
            overflowY: 'auto',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: 19 }}>
              Explore KeyOn
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#817267' }}>
              Ideas across every medium.
            </Typography>
          </Box>
          <IconButton onClick={closeMobile} aria-label="Close menu">
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Box sx={{ borderTop: '1px solid #E8DCCF', mb: 1 }}>
          {navItems.slice(0, 2).map((item) => (
            <ListItemButton
              key={item.label}
              component={Link}
              href={item.href}
              onClick={closeMobile}
              sx={mobileLinkSx}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600 }} />
              <ArrowOutwardRoundedIcon sx={{ fontSize: 17, color: '#9C8A7B' }} />
            </ListItemButton>
          ))}

          {/* Mobile Services accordion */}
          <ListItemButton
            onClick={() => setMobileServicesOpen((current) => !current)}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services-list"
            sx={{
              ...mobileLinkSx,
              color: '#C45F2B',
            }}
          >
            <ListItemText
              primary="Services"
              primaryTypographyProps={{ fontWeight: 700 }} />
            <ExpandMoreRoundedIcon
              sx={{
                transition: 'transform 180ms ease',
                transform: mobileServicesOpen ? 'rotate(180deg)' : 'none',
              }} />
          </ListItemButton>

          <Collapse in={mobileServicesOpen} timeout={180} unmountOnExit>
            <Box
              id="mobile-services-list"
              sx={{
                ml: 1.5,
                pl: 1.5,
                mb: 1.5,
                borderLeft: '2px solid #F4DCCB',
              }}
            >
              {serviceGroups.map((group) => (
                <Box key={group.title} sx={{ pt: 1.2 }}>
                  <Typography
                    sx={{
                      px: 1,
                      mb: 0.5,
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: 1,
                      color: '#A95735',
                    }}
                  >
                    {group.title}
                  </Typography>

                  {group.slugs.map((slug) => {
                    const service = services.find(
                      (item) => item.slug === slug
                    );

                    if (!service) return null;

                    return (
                      <ListItemButton
                        key={service.slug}
                        component={Link}
                        href={`/services/${service.slug}`}
                        onClick={closeMobile}
                        sx={{
                          borderRadius: 1.5,
                          py: 1,
                          alignItems: 'flex-start',
                          '&:hover': { bgcolor: '#F4DCCB' },
                        }}
                      >
                        <ListItemText
                          primary={service.name}
                          secondary={service.short}
                          primaryTypographyProps={{
                            fontWeight: 700,
                            fontSize: 13,
                          }}
                          secondaryTypographyProps={{
                            fontSize: 11,
                            lineHeight: 1.5,
                            mt: 0.4,
                          }} />
                      </ListItemButton>
                    );
                  })}
                </Box>
              ))}

              <Typography
                sx={{
                  px: 1,
                  mt: 1.5,
                  mb: 0.5,
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 1,
                  color: '#A95735',
                }}
              >
                DIGITAL SPECIALISATIONS
              </Typography>

              {digitalChildServices.map((child) => (
                <ListItemButton
                  key={child.slug}
                  component={Link}
                  href={`/services/digital-marketing/${child.slug}`}
                  onClick={closeMobile}
                  sx={{
                    borderRadius: 1.5,
                    py: 0.9,
                    '&:hover': { bgcolor: '#F4DCCB' },
                  }}
                >
                  <ListItemText
                    primary={child.name}
                    primaryTypographyProps={{ fontSize: 12, fontWeight: 600 }} />
                </ListItemButton>
              ))}
            </Box>
          </Collapse>

          {navItems.slice(2).map((item) => (
            <ListItemButton
              key={item.label}
              component={Link}
              href={item.href}
              onClick={closeMobile}
              sx={mobileLinkSx}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600 }} />
              <ArrowOutwardRoundedIcon sx={{ fontSize: 17, color: '#9C8A7B' }} />
            </ListItemButton>
          ))}
        </Box>

        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            fullWidth
            component={Link}
            href="/contact"
            onClick={closeMobile}
            variant="contained"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{ py: 1.4 }}
          >
            Let’s talk
          </Button>
          <Typography
            sx={{
              textAlign: 'center',
              mt: 1.5,
              color: '#817267',
              fontSize: 10,
            }}
          >
            KEYON MEDIA PRIVATE LIMITED
          </Typography>
        </Box>
      </Drawer>
    </AppBar></>
  );
}

const navButtonSx = {
  fontSize: 12,
  px: 0.3,
  minWidth: 'auto',
  color: 'text.primary',
  '&:hover': {
    color: 'primary.dark',
    bgcolor: 'transparent',
    boxShadow: 'none',
  },
  '&:focus-visible': {
    outline: '2px solid #F47A35',
    outlineOffset: 3,
  },
};

const mobileLinkSx = {
  borderRadius: 1.5,
  mb: 0.5,
  py: 1.1,
  '&:hover': {
    bgcolor: '#F4DCCB',
  },
  '&:focus-visible': {
    outline: '2px solid #F47A35',
    outlineOffset: -2,
  },
};
