import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import SimpleContainer from './SimpleContainer';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
  },
  {
    src: 'https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0',
    title: 'Mountain view',
  },
  {
    src: 'https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0',
    title: 'Mountain view',
  },
  {
    src: 'https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0',
    title: 'Mountain view',
  },
  {
    src: 'https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0',
    title: 'Mountain view',
  },
];

export default function Carousel() {
  return (
    <SimpleContainer bgColor={'#FFE8E8'}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          py: 2,
          overflow: 'auto',
          width: '100%',
          scrollSnapType: 'x mandatory',
          alignItems: 'center',
          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {data.map((item) => (
          <Card key={item.title} ratio="16/9" variant="outlined" sx={{ minWidth: 300 }}>
            <AspectRatio ratio="1" sx={{ width: '100%', height: 300 }}>
              <img
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.src}?h=120&fit=crop&auto=format`}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AspectRatio>
          </Card>
        ))}
      </Box>
    </SimpleContainer>
  );
}