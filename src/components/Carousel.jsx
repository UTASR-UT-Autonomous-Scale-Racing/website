import * as React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import dummy from '../assets/car_1.jpg'
import dummy2 from '../assets/groupImage_mega.jpg'
import dummy3 from '../assets/groupImage_mini_2.jpg'
import dummy4 from '../assets/groupImage_mini_1.jpg'

const IMAGES = [
  dummy,
  dummy2,
  dummy3,
  dummy4];

export default function GalleryCarousel() {
  const autoplay = React.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      // HORIZONTAL carousel with true infinite loop
      axis: 'x',
      align: 'start',             // no centering; we keep natural widths
      containScroll: 'trimSnaps', // trims large end gaps
      startIndex: Math.floor(IMAGES.length / 2), // start around the middle
      skipSnaps: false,
      dragFree: false,
    },
    [autoplay.current]
  );

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [selected, setSelected] = React.useState(0);
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi]);

  return (
    <Box component="section" id="gallery" sx={{ bgcolor: '#fff', color: '#0f172a', py: { xs: 8, md: 10 } }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography variant="overline" sx={{ letterSpacing: '0.15em', opacity: 0.6 }}>
          Gallery
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 750, letterSpacing: '-0.02em', mb: 1 }}>
          Photo Highlights
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 780, mx: 'auto', opacity: 0.75 }}>
          A glimpse into our projects, teamwork, and competitions.
        </Typography>
      </Box>

      {/* Full-width viewport so arrows can sit near the screen edge */}
      <Box sx={{ position: 'relative', width: '100vw', mx: 'calc(50% - 50vw)' }}>
        {/* Arrows pushed just outside the viewport gutter */}
        <IconButton
          aria-label="Previous"
          onClick={scrollPrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: { xs: 8, md: 16 },             // near screen edge
            transform: 'translateY(-50%)',
            zIndex: 5,
            color: '#2563eb',
            bgcolor: 'rgba(37,99,235,0.08)',
            '&:hover': { bgcolor: 'rgba(37,99,235,0.15)' },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          aria-label="Next"
          onClick={scrollNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: { xs: 8, md: 16 },            // near screen edge
            transform: 'translateY(-50%)',
            zIndex: 5,
            color: '#2563eb',
            bgcolor: 'rgba(37,99,235,0.08)',
            '&:hover': { bgcolor: 'rgba(37,99,235,0.15)' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Embla viewport + container */}
        <Box
          ref={emblaRef}
          sx={{
            overflow: 'visible',                    // let hover shadows show
            px: { xs: 1, md: 2 },                  // small inner gutter
            pb: 4,                                  // room for dots
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 2, md: 3 },               // gutters between slides
              willChange: 'transform',
            }}
          >
            {IMAGES.map((src, i) => (
              <Box
                key={i}
                // IMPORTANT: natural widths. Don't fix flex-basis; let image width define it.
                sx={{
                  flex: '0 0 auto',                 // slide width = content width
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(0,0,0,.14)',
                  transition: 'transform .24s ease, box-shadow .24s ease',
                  transform: 'translateZ(0)',
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.02)',
                    boxShadow: '0 22px 56px rgba(0,0,0,.2)',
                  },
                }}
              >
                {/* Keep a consistent HEIGHT, width follows image ratio with max width constraint */}
                <Box
                  component="img"
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    height: { xs: 320, sm: 360, md: 420 }, // tweak to taste
                    width: 'auto',                          // natural width
                    maxWidth: { 
                      xs: 'calc(100vw - 32px)',            // screen width minus padding/gaps
                      sm: 'calc(100vw - 48px)',            
                      md: 'calc(100vw - 64px)' 
                    },
                    display: 'block',
                    objectFit: 'cover',                     // safe if image is larger
                    backfaceVisibility: 'hidden',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
          {IMAGES.map((_, i) => (
            <Box
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              sx={{
                width: 8, height: 8, borderRadius: '50%',
                cursor: 'pointer',
                bgcolor: i === selected ? '#2563eb' : 'rgba(2,0,36,0.22)',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}