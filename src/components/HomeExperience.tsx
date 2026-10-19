'use client';

import Link from 'next/link';
import Image from 'next/image';
import brandAssets from '@/lib/brand-assets.json';
import { motion, useReducedMotion } from 'framer-motion';
import { Box, Button, Card, CardActionArea, CardContent, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import RadioRoundedIcon from '@mui/icons-material/RadioRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';
import TrainRoundedIcon from '@mui/icons-material/TrainRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { services } from '@/lib/services';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const icons = [NewspaperRoundedIcon, PublicRoundedIcon, AdsClickRoundedIcon, RadioRoundedIcon, TvRoundedIcon, TheatersRoundedIcon, CampaignRoundedIcon, TrainRoundedIcon, EventAvailableRoundedIcon, BrushRoundedIcon];
const processes = [
  { n: '01', title: 'Listen & discover', desc: 'Understand the business, audience, goals and constraints.' },
  { n: '02', title: 'Shape the plan', desc: 'Align the message, creative direction and suitable channels.' },
  { n: '03', title: 'Create & coordinate', desc: 'Bring the approved idea to life across agreed formats.' },
  { n: '04', title: 'Review the work', desc: 'Confirm deliverables, learnings and the next opportunity.' },
];
const industries = ['Real estate', 'FMCG', 'Furniture', 'Fashion', 'Travel', 'Education'];
const clientLogos = brandAssets.clients;
const featuredArtwork = brandAssets.work.filter((item) => item.featuredOnHome).slice(0, 4);

function Reveal({ children, delay = 0, y = 24, className, ...props }: any) {
  const reduced = useReducedMotion();
  return <MotionBox className={className} {...props} initial={reduced ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: reduced ? 0 : .65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</MotionBox>;
}

export default function HomeExperience() {
  const reduced = useReducedMotion();
  return <Box component="div" sx={{ overflow: 'clip' }}>
    <Box component="section" id="home" aria-labelledby="home-hero-title" className="keyon-cinematic-hero">
      {!reduced ? (
        <Box component="video" className="keyon-hero-media" aria-hidden="true" autoPlay muted loop playsInline preload="metadata" poster="/images/hero/hero-poster.jpg">
          <source src="/videos/keyon-hero.mp4" type="video/mp4" />
        </Box>
      ) : (
        <Box component="div" className="keyon-hero-media keyon-hero-poster" aria-hidden="true" />
      )}
      <Box className="keyon-hero-overlay" aria-hidden="true" />
      <Container maxWidth="xl" className="keyon-hero-inner">
        <Box className="keyon-hero-kicker">CREATIVE <span>•</span> PRODUCTION <span>•</span> OUTDOOR <span>•</span> DIGITAL</Box>
        <Reveal y={12} className="keyon-hero-copy">
          <Typography id="home-hero-title" component="h1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: { xs: 'clamp(3.5rem, 14vw, 5.3rem)', md: 'clamp(4.5rem, 8vw, 7.5rem)' }, letterSpacing: '-.075em', lineHeight: .91, color: '#FFFFFF', mb: 2.5 }}>
            Ideas<br />that move<br /><Box component="span" sx={{ color: '#F47735' }}>India.</Box>
          </Typography>
          <Typography sx={{ maxWidth: 560, color: 'rgba(255,255,255,.92)', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 14, md: 18 }, lineHeight: 1.75 }}>
            From powerful brand stories to campaigns that capture attention, we bring ideas to life.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3.5, alignItems: { xs: 'stretch', sm: 'center' }, maxWidth: { xs: 300, sm: 'none' } }}>
            <Button component={Link} href="/portfolio" variant="contained" size="large" endIcon={<ArrowOutwardRoundedIcon />} sx={{ bgcolor: '#F47735', color: '#fff', px: 2.5, py: 1.5, borderRadius: 2, fontFamily: 'Poppins, sans-serif', fontWeight: 700, '&:hover': { bgcolor: '#D95E24' } }}>Explore Our Work</Button>
            <Button component={Link} href="/contact" variant="text" startIcon={<Box component="span" className="keyon-play-icon" aria-hidden="true">▶</Box>} sx={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 600, '&:hover': { bgcolor: 'rgba(255,255,255,.12)' } }}>Talk to Us</Button>
          </Stack>
        </Reveal>
        <Box className="keyon-hero-scroll" aria-hidden="true"><span /> SCROLL TO EXPLORE</Box>
        <Box className="keyon-hero-bottomline"><span>Ideas into action.</span><span>KEYON MEDIA <b>↗</b></span></Box>
      </Container>
    </Box>

    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}><Container maxWidth="lg"><Grid container spacing={5} alignItems="center"><Grid item xs={12} md={6}><Reveal><Typography sx={{ color: 'primary.dark', font: '800 10px Manrope, sans-serif', letterSpacing: '1.8px' }}>WHAT WE DO</Typography><Typography variant="h2" sx={{ mt: 2, fontSize: { xs: 38, md: 54 }, lineHeight: 1.05, color: 'secondary.main' }}>One partner.<br /><Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>More ways to connect.</Box></Typography></Reveal></Grid><Grid item xs={12} md={6}><Reveal delay={.12}><Typography sx={{ lineHeight: 2, color: 'text.secondary', fontSize: 14, mb: 1.5 }}>Marketing is more than a single channel. It’s the way your brand looks, sounds and shows up—online, in print, on the move and where people gather.</Typography><Typography sx={{ lineHeight: 2, color: 'text.secondary', fontSize: 14, mb: 2.3 }}>KeyOn Media’s service mix spans digital marketing, media advertising, public relations, outdoor formats, events and creative production.</Typography><Button component={Link} href="/about" variant="text" color="secondary" endIcon={<ArrowOutwardRoundedIcon />}>Get to know us</Button></Reveal></Grid></Grid></Container></Box>

    <Box component="section" aria-labelledby="clients-heading" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#FFF8F0', borderBlock: '1px solid #E8DED3' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'end' }} justifyContent="space-between" spacing={1.5} sx={{ mb: 3.5 }}>
            <Box>
              <Typography sx={{ color: '#596442', font: '800 10px Poppins, sans-serif', letterSpacing: '1.8px' }}>CLIENT RELATIONSHIPS</Typography>
              <Typography id="clients-heading" variant="h2" sx={{ mt: 1, color: '#383533', fontSize: { xs: 30, md: 40 }, lineHeight: 1.12 }}>Client Portfolio</Typography>
            </Box>
            <Typography sx={{ maxWidth: 390, color: '#655D55', fontSize: 12, lineHeight: 1.8 }}>A selection of client logos reproduced from the KeyOn Media company profile.</Typography>
          </Stack>
        </Reveal>
        <Grid container spacing={1.5}>
          {clientLogos.map((client, i) => <Grid item xs={6} sm={4} md={3} lg={2} key={client.src}>
            <MotionCard whileHover={reduced ? undefined : { y: -3 }} transition={{ duration: .18 }} sx={{ height: '100%', minHeight: 104, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2.5, border: '1px solid #E8DED3', bgcolor: '#FFFFFF', boxShadow: 'none', overflow: 'hidden' }}>
              <Box sx={{ position: 'relative', width: '100%', height: 88, px: 1.2, py: 1.5 }}>
                <Image src={client.src} alt={client.alt} fill sizes="(max-width: 600px) 45vw, (max-width: 900px) 28vw, 16vw" style={{ objectFit: 'contain', padding: 8 }} />
              </Box>
            </MotionCard>
          </Grid>)}
        </Grid>
      </Container>
    </Box>

    <Box component="section" id="services" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#FAF9F6', position: 'relative' }}><Container maxWidth="lg"><Reveal><Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'end' }} spacing={3} sx={{ mb: 4.5 }}><Box><Typography sx={{ color: 'primary.dark', font: '800 10px Manrope, sans-serif', letterSpacing: '1.8px' }}>OUR SERVICES</Typography><Typography variant="h2" sx={{ mt: 1.5, color: 'secondary.main', fontSize: { xs: 38, md: 52 }, lineHeight: 1.06 }}>Built around your<br /><Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>next big move.</Box></Typography></Box><Typography sx={{ maxWidth: 380, color: 'text.secondary', fontSize: 13, lineHeight: 1.9 }}>Choose a service or combine formats around your campaign objective. We’ll help define the brief and confirm the right scope.</Typography></Stack></Reveal>
      <Grid container spacing={2}>{services.map((s, i) => { const Icon = icons[i % icons.length]; return <Grid item xs={12} sm={6} md={4} key={s.slug}><MotionCard whileHover={reduced ? undefined : { y: -7, scale: 1.008 }} transition={{ duration: .22 }} sx={{ height: '100%', minHeight: 228, display: 'flex', flexDirection: 'column', color: 'inherit', border: '1px solid rgba(56,53,51,.12)', borderRadius: 3, bgcolor: i % 3 === 1 ? '#FFFFFF' : i % 3 === 2 ? '#FBFAF7' : '#FFFFFF', boxShadow: '0 5px 14px rgba(56,53,51,.025)', '&:hover': { boxShadow: '0 18px 42px rgba(56,53,51,.12)' } }}><CardActionArea component={Link} href={`/services/${s.slug}`} sx={{ height: '100%', flex: 1, display: 'flex', alignItems: 'stretch', textAlign: 'left', color: 'inherit', borderRadius: 3 }}><CardContent sx={{ p: 2.7, '&:last-child': { pb: 2.7 }, display: 'flex', flexDirection: 'column', flex: 1 }}><Stack direction="row" justifyContent="space-between" alignItems="center"><Typography sx={{ font: '800 10px Manrope, sans-serif', letterSpacing: 1.5, color: 'text.secondary' }}>{String(i + 1).padStart(2, '0')}</Typography><Box sx={{ width: 43, height: 43, borderRadius: 2, display: 'grid', placeItems: 'center', bgcolor: i % 3 === 1 ? '#F47735' : '#FCE9D9', color: i % 3 === 1 ? '#FFFFFF' : 'primary.dark' }}><Icon /></Box></Stack><Typography variant="h3" sx={{ mt: 2.2, fontSize: 18, color: 'secondary.main' }}>{s.name}</Typography><Typography sx={{ mt: 1, mb: 2.3, color: 'text.secondary', fontSize: 12, lineHeight: 1.8 }}>{s.short}</Typography><Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 'auto', color: 'primary.dark', font: '800 11px Manrope, sans-serif' }}>Explore service <ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} /></Stack></CardContent></CardActionArea></MotionCard></Grid> })}</Grid>
    </Container></Box>

    <Box component="section" sx={{ bgcolor: '#FAF9F6', color: '#383533', py: { xs: 8, md: 11 }, position: 'relative', overflow: 'hidden' }}><Box aria-hidden sx={{ position: 'absolute', width: 360, height: 360, border: '1px solid rgba(69,74,50,.12)', borderRadius: '50%', right: '-80px', top: '-150px' }} /><Container maxWidth="lg"><Grid container spacing={{ xs: 5, md: 7 }}><Grid item xs={12} md={5}><Reveal><Chip label="THE KEYON APPROACH" sx={{ color: '#D95E24', bgcolor: '#F8EDE4', fontSize: 10, fontWeight: 800, letterSpacing: 1.2, borderRadius: 2, mb: 2.5 }} /><Typography variant="h2" sx={{ color: '#E96520', fontSize: { xs: 38, md: 51 }, lineHeight: 1.08, mb: 2.2 }}>Good work starts<br />with <Box component="span" sx={{ color: '#F47735', fontWeight: 600 }}>good questions.</Box></Typography><Typography sx={{ color: '#383533', fontSize: 13, lineHeight: 1.9, maxWidth: 440, mb: 3 }}>We begin by understanding the business, the audience and the message. Then we shape the creative and media plan around what the brief actually needs.</Typography><Button component={Link} href="/about" variant="contained" sx={{ bgcolor: '#F7F7F2', color: 'secondary.dark', '&:hover': { bgcolor: '#F2C7A8' } }} endIcon={<ArrowOutwardRoundedIcon />}>Our approach</Button></Reveal></Grid><Grid item xs={12} md={7}><Stack divider={<Box sx={{ borderBottom: '1px solid #E7E2DA' }} />}>{processes.map((p, i) => <Reveal key={p.n} delay={i * .07} y={14}><Box sx={{ display: 'grid', gridTemplateColumns: '48px 1fr 26px', gap: 2, py: 2.1, alignItems: 'start' }}><Typography sx={{ font: '800 11px Manrope, sans-serif', color: '#454A32', pt: .5 }}>{p.n}</Typography><Box><Typography variant="h3" sx={{ fontSize: 18, color: '#383533', mb: .5 }}>{p.title}</Typography><Typography sx={{ color: '#5B5652', fontSize: 12 }}>{p.desc}</Typography></Box><ArrowOutwardRoundedIcon sx={{ color: '#F47735', fontSize: 19 }} /></Box></Reveal>)}</Stack></Grid></Grid></Container></Box>

    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#FFFFFF' }}><Container maxWidth="lg"><Grid container spacing={5} alignItems="center"><Grid item xs={12} md={5}><Reveal><Typography sx={{ color: 'primary.dark', font: '800 10px Manrope, sans-serif', letterSpacing: 1.8 }}>A RANGE OF INDUSTRIES</Typography><Typography variant="h2" sx={{ mt: 1.5, color: 'secondary.main', fontSize: { xs: 39, md: 48 }, lineHeight: 1.08 }}>Different worlds.<br /><Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>Distinct stories.</Box></Typography><Typography sx={{ mt: 2, color: 'text.secondary', fontSize: 13, lineHeight: 1.9 }}>The source website showcases these industry categories. Ask us about examples relevant to your brief.</Typography></Reveal></Grid><Grid item xs={12} md={7}><Reveal delay={.12}><Grid container spacing={1.3}>{industries.map((x, i) => <Grid item xs={6} sm={4} key={x}><Box sx={{ minHeight: 92, height: '100%', p: 2, borderRadius: 2.5, bgcolor: i % 3 === 0 ? '#F6E5D8' : i % 3 === 1 ? '#FFFFFF' : '#FBFAF7', border: '1px solid rgba(56,53,51,.09)', display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 1, transition: 'transform .2s', '&:hover': { transform: 'translateY(-4px)' } }}><Typography sx={{ font: '800 13px Manrope, sans-serif', color: 'secondary.dark' }}>{x}</Typography><ArrowOutwardRoundedIcon sx={{ fontSize: 17, color: 'primary.dark' }} /></Box></Grid>)}</Grid></Reveal></Grid></Grid></Container></Box>

    <Box component="section" aria-labelledby="media-examples-heading" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#DCE5C7' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'end' }} spacing={2.5} sx={{ mb: 4 }}>
            <Box>
              <Typography sx={{ color: '#596442', font: '800 10px Poppins, sans-serif', letterSpacing: '1.8px' }}>MEDIA & ADVERTISING EXAMPLES</Typography>
              <Typography id="media-examples-heading" variant="h2" sx={{ mt: 1.2, color: '#383533', fontSize: { xs: 36, md: 48 }, lineHeight: 1.08 }}>Real-world formats.<br /><Box component="span" sx={{ color: '#A95735' }}>Made visible.</Box></Typography>
            </Box>
            <Box sx={{ maxWidth: 410 }}>
              <Typography sx={{ color: '#383533', fontSize: 13, lineHeight: 1.85, mb: 1.5 }}>Examples of advertising placements and campaign formats featured in the company profile.</Typography>
              <Button component={Link} href="/portfolio" variant="outlined" sx={{ color: '#383533', borderColor: '#596442' }} endIcon={<ArrowOutwardRoundedIcon />}>View all artwork</Button>
            </Box>
          </Stack>
        </Reveal>
        <Grid container spacing={2}>
          {featuredArtwork.map((item, i) => <Grid item xs={12} sm={6} md={3} key={item.id}>
            <MotionCard whileHover={reduced ? undefined : { y: -5 }} transition={{ duration: .2 }} sx={{ height: '100%', borderRadius: 3, overflow: 'hidden', bgcolor: '#FFFFFF', border: '1px solid rgba(56,53,51,.1)', boxShadow: '0 8px 20px rgba(56,53,51,.06)' }}>
              <Box sx={{ position: 'relative', aspectRatio: '4 / 3', bgcolor: '#FFFFFF' }}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 900px) 45vw, 23vw" style={{ objectFit: 'contain', padding: 6 }} />
              </Box>
              <CardContent sx={{ p: 2.2, '&:last-child': { pb: 2.2 } }}>
                <Typography sx={{ color: '#596442', font: '700 9px Poppins, sans-serif', letterSpacing: 1.1, textTransform: 'uppercase' }}>{item.category}</Typography>
                <Typography variant="h3" sx={{ mt: .7, color: '#383533', fontSize: 15, lineHeight: 1.35 }}>{item.title}</Typography>
              </CardContent>
            </MotionCard>
          </Grid>)}
        </Grid>
        <Typography sx={{ mt: 2.2, color: '#49382F', opacity: .8, fontSize: 10, lineHeight: 1.6 }}>Artwork crops are sourced from the supplied company profile and resized for website display. Image upscaling improves presentation size but cannot restore details absent from the source scan.</Typography>
      </Container>
    </Box>

    <Box component="section" sx={{ pb: { xs: 8, md: 11 }, bgcolor: '#FFFFFF' }}><Container maxWidth="lg"><MotionBox initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduced ? 0 : .6 }} sx={{ borderRadius: { xs: 3, md: 4 }, bgcolor: '#F8EDE4', p: { xs: 3, md: 6 }, color: '#383533', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'auto 1fr auto' }, alignItems: 'center', gap: { xs: 3, md: 4 }, position: 'relative', overflow: 'hidden' }}><Box sx={{ width: { xs: 62, md: 86 }, height: { xs: 62, md: 86 }, borderRadius: '50%', bgcolor: '#FFFFFF', color: 'primary.dark', display: 'grid', placeItems: 'center', font: '800 37px Manrope, sans-serif', boxShadow: '0 0 0 10px rgba(255,255,255,.08)' }}>K</Box><Box><Typography sx={{ font: '800 10px Manrope, sans-serif', letterSpacing: 1.7, color: '#D95E24' }}>HAVE A BRIEF IN MIND?</Typography><Typography variant="h2" sx={{ mt: 1.2, color: '#E96520', fontSize: { xs: 34, md: 46 }, lineHeight: 1.08 }}>Let’s connect &amp;<br />design together.</Typography><Typography sx={{ mt: 1.5, fontSize: 13, color: '#383533' }}>Tell us what you’re planning. We’ll help clarify the next step.</Typography></Box><Button component={Link} href="/contact" variant="contained" endIcon={<ArrowOutwardRoundedIcon />} sx={{ justifySelf: { md: 'end' }, whiteSpace: 'nowrap', bgcolor: '#F7F7F2', color: '#E96520', '&:hover': { bgcolor: '#F2C7A8' } }}>Start a conversation</Button></MotionBox></Container></Box>
  </Box>;
}
