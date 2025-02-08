import * as React from "react";
import Box from "@mui/joy/Box";
import SimpleContainer from "./SimpleContainer";
import { Grid2 } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import groupImageMega from "../assets/groupImage_mega.jpg";
import groupImageMini1 from "../assets/groupImage_mini_1.jpg";
import groupImageMini2 from "../assets/groupImage_mini_2.jpg";
import groupWork1 from "../assets/groupWork_1.jpg";
import groupWork2 from "../assets/groupWork_2.jpg";
import car1 from "../assets/car_1.jpg";

const IMAGES = [
  {
    src: groupImageMega,
    title: "Group Image",
  },
  {
    src: car1,
    title: "car",
  },
  {
    src: groupImageMini1,
    title: "Group Image",
  },
  {
    src: groupImageMini2,
    title: "Group Image",
  },
  {
    src: groupWork1,
    title: "Group Work",
  },
  {
    src: groupWork2,
    title: "Group Work",
  },
  {
    src: groupImageMega,
    title: "Group Image",
  },
  {
    src: car1,
    title: "car",
  },
  {
    src: groupImageMini1,
    title: "Group Image",
  },
  {
    src: groupImageMini2,
    title: "Group Image",
  },
  {
    src: groupWork1,
    title: "Group Work",
  },
  {
    src: groupWork2,
    title: "Group Work",
  },
];

const DIFF_HEIGHT = {
  0: { md: 400, sm: 300, xs: 200 },
  1: { md: 400, sm: 300, xs: 200 },
  2: { md: 300, sm: 300, xs: 200 },
  3: { md: 300, sm: 200, xs: 200 },
};

const DIFF_SIZE = {
  0: { md: "60%", sm: "95%", xs: "90%" },
  1: { md: "35%", sm: "46%", xs: "43%" },
  2: { md: "45%", sm: "46%", xs: "43%" },
  3: { md: "50%", sm: "95%", xs: "90%" },
};

// eslint-disable-next-line react/display-name
const CarouselImage = React.memo(({ item, index, onImageClick }) => {
  return (
    <Grid2
      sx={{
        width: {
          xs: DIFF_SIZE[index % 4].xs,
          sm: DIFF_SIZE[index % 4].sm,
          md: DIFF_SIZE[index % 4].md
        }
      }}
    >
      <Box
        component="img"
        onClick={(e) => onImageClick(item.src, e)}
        sx={{
          height: {
            xs: DIFF_HEIGHT[index % 4].xs,
            sm: DIFF_HEIGHT[index % 4].sm,
            md: DIFF_HEIGHT[index % 4].md,
          },
          objectFit: 'cover',
          width: '100%',
          borderRadius: 10,
          transition: '0.3s ease-in-out',
          overflowClipMargin: "unset",
          '&:hover': { transform: 'scale(1.02)' },
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          cursor: 'pointer'
        }}
        src={item.src}
        alt={item.title}
        loading="lazy"
      />
    </Grid2>
  );
});

// eslint-disable-next-line react/display-name
const PaginationDots = React.memo(({ currentIndex, pagesCount, onDotClick }) => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 1,
      zIndex: 10,
    }}
  >
    {Array.from({ length: pagesCount }).map((_, i) => (
      <Box
        key={i}
        sx={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          bgcolor: currentIndex === i ? 'white' : 'rgba(255,255,255,0.5)',
          cursor: 'pointer',
        }}
        onClick={() => onDotClick(i)}
      />
    ))}
  </Box>
));

// eslint-disable-next-line react/display-name
const NavigationArrow = React.memo(({ direction, onClick, isEnabled }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  
  return (
    <Box
      sx={{
        position: 'absolute',
        [direction]: 0,
        top: 0,
        bottom: 0,
        width: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        cursor: isEnabled ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      <Icon 
        sx={{ 
          fontSize: 40, 
          color: isEnabled ? 'white' : 'rgba(255,255,255,0.3)' 
        }} 
      />
    </Box>
  );
});

// eslint-disable-next-line react/display-name
const ExpandedImageModal = React.memo(({ expandedImage, onClose }) => (
  <AnimatePresence>
    {expandedImage && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          cursor: 'pointer',
          padding: window.innerWidth < 768 ? "20px" : "64px",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{
            x: expandedImage.rect.x,
            y: expandedImage.rect.y,
            width: expandedImage.rect.width,
            height: expandedImage.rect.height,
          }}
          animate={{
            x: 0,
            y: 0,
            width: window.innerWidth < 768 ? "100%" : "auto",
            height:  window.innerWidth < 768 ? "auto" : "70vh",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30
            }
          }}
          exit={{
            x: expandedImage.rect.x,
            y: expandedImage.rect.y,
            width: expandedImage.rect.width,
            height: expandedImage.rect.height,
          }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            backgroundColor: 'black'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              cursor: 'pointer',
              zIndex: 1001
            }}
          >
            <CloseIcon 
              sx={{ 
                color: 'white',
                fontSize: 30,
                '&:hover': { opacity: 0.8 }
              }}
              onClick={onClose}
            />
          </motion.div>

          <motion.img
            src={expandedImage.src}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
));

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function Carousel() {
  const containerRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [expandedImage, setExpandedImage] = React.useState(null);
  const pagesCount = React.useMemo(() => Math.ceil(IMAGES.length / 4), []);
  const [touchState, setTouchState] = React.useState({ start: 0, end: 0 });

  const handleImageClick = React.useCallback((src, event) => {
    const rect = event.target.getBoundingClientRect();
    setExpandedImage({
      src,
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.left,
        y: rect.top
      }
    });
  }, []);

  const handleClose = React.useCallback(() => {
    setExpandedImage(null);
  }, []);

  const scrollToPage = React.useCallback((index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * index,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleScroll = React.useCallback(
    debounce(() => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const pageWidth = containerRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / pageWidth);
        setCurrentIndex(newIndex);
      }
    }, 50),
    []
  );

  const handleTouchStart = React.useCallback((e) => {
    setTouchState(prev => ({
      ...prev,
      start: e.targetTouches[0].clientX,
      end: e.targetTouches[0].clientX
    }));
  }, []);

  const handleTouchMove = React.useCallback((e) => {
    setTouchState(prev => ({
      ...prev,
      end: e.targetTouches[0].clientX
    }));
  }, []);

  const handleTouchEnd = React.useCallback(() => {
    const { start, end } = touchState;
    if (!start || !end) return;
    
    const distance = start - end;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance && currentIndex < pagesCount - 1) {
      scrollToPage(currentIndex + 1);
    } else if (distance < -minSwipeDistance && currentIndex > 0) {
      scrollToPage(currentIndex - 1);
    }
  }, [touchState, currentIndex, pagesCount, scrollToPage]);

  React.useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedImage]);

  return (
    <SimpleContainer bgColor="#162E7C">
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <Box
          ref={containerRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            width: '100%',
            height: '100%',
            position: 'relative',
            '&::-webkit-scrollbar': { display: 'none' },
            background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,46,124,1) 62%, rgba(82,118,240,1) 100%)",
          }}
        >
          {Array.from({ length: pagesCount }).map((_, pageIndex) => (
            <Box
              key={pageIndex}
              sx={{
                width: '100vw',
                flexShrink: 0,
                scrollSnapAlign: 'start',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                p: 5,
              }}
            >
              <Grid2 container spacing={2} sx={{ justifyContent: 'center', width: "93%" }}>
                {IMAGES.slice(pageIndex * 4, (pageIndex + 1) * 4).map((item, index) => (
                  <CarouselImage
                    key={index}
                    item={item}
                    index={index}
                    onImageClick={handleImageClick}
                  />
                ))}
              </Grid2>
            </Box>
          ))}
        </Box>

        <NavigationArrow
          direction="left"
          isEnabled={currentIndex > 0}
          onClick={() => currentIndex > 0 && scrollToPage(currentIndex - 1)}
        />

        <NavigationArrow
          direction="right"
          isEnabled={currentIndex < pagesCount - 1}
          onClick={() => currentIndex < pagesCount - 1 && scrollToPage(currentIndex + 1)}
        />

        <PaginationDots
          currentIndex={currentIndex}
          pagesCount={pagesCount}
          onDotClick={scrollToPage}
        />

        <ExpandedImageModal
          expandedImage={expandedImage}
          onClose={handleClose}
        />
      </Box>
    </SimpleContainer>
  );
}