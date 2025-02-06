import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import SimpleContainer from "./SimpleContainer";
import { Grid2 } from "@mui/material";
const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
  },
  {
    src: "https://www.jessleephotos.com/images/xl/Cascaperefflowers.jpg",
    title: "Mountain view",
  },
  {
    src: "https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0",
    title: "Mountain view",
  },
  {
    src: "https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0",
    title: "Mountain view",
  },
  {
    src: "https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0",
    title: "Mountain view",
  },
  {
    src: "https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0",
    title: "Mountain view",
  },
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
  },
  {
    src: "https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0",
    title: "Mountain view",
  },
  {
    src: "https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0",
    title: "Mountain view",
  },
  {
    src: "https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0",
    title: "Mountain view",
  },
  {
    src: "https://www.originaltravel.co.uk/travel-blog/showphoto/4103/0",
    title: "Mountain view",
  },
];

const diffHeight = {

  0: {
    'md': 400,
    'sm': 300,
    'xs': 200
  },
  1: {
    'md': 400,
    'sm': 300,
    'xs': 200
  },
  2: {
    'md': 400,
    'sm': 300,
    'xs': 200
  },
  3: {
    'md': 300,
    'sm': 200,
    'xs': 200
  },
  4: {
    'md': 300,
    'sm': 200,
    'xs': 200
  },
  5: {
    'md': 300,
    'sm': 200,
    'xs': 200
  }

};


const diffSize = {
  0: { 'md': "50%", 'sm': "90%", 'xs': "90%" },
  1: { 'md': "22%", 'sm': "44%", 'xs': "43%" },
  2: { 'md': "22%", 'sm': "44%", 'xs': "43%" },
  3: { 'md': "27%", 'sm': "44%", 'xs': "90%" },
  4: { 'md': "27%", 'sm': "44%", 'xs': "43%" },
  5: { 'md': "40%", 'sm': "44%", 'xs': "43%" }
};
export default function Carousel() {
  const pages = [];

  // Create pages with 6 images each
  for (let i = 0; i < data.length; i += 6) {
    pages.push(

        <Grid2 container spacing={2} key={i}
        sx={{
          width: "100vw", // Full viewport width

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
          mx: 10
        }}>
        {data.slice(i, i + 6).map((item, index) => (

          <Grid2 key={index}  
          
          sx={{
            width: {
              xs: diffSize[index % 6]['xs'],
              sm: diffSize[index % 6]['sm'],
              md: diffSize[index % 6]['md']
            }
          }}

           >
            <Box  
            component="img"
            sx={{ 

              height:  {
                xs : diffHeight[index % 6]['xs'],
                sm : diffHeight[index % 6]['sm'],
                md : diffHeight[index % 6]['md'],
                
              },
              objectFit : "cover",
              width: "100%",
              borderRadius: 10,
              transition: "0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)"
              },
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}

              />
       
          
          </Grid2>
        ))}
      </Grid2>
      
    );
  }

  return (
    <SimpleContainer bgColor="#162E7C">
      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflow: "auto",
          width: "100%",
          scrollSnapType: "x mandatory",
          alignItems: "center",
          overflowX: "auto",
          overflowY: "hidden",
          "& > *": {
            scrollSnapAlign: "center",
            flexShrink: 0,
          },
          "::-webkit-scrollbar": { display: "none" },
          //background: "rgb(2,0,36)",
          //background: "-moz-linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,46,124,1) 62%, rgba(82,118,240,1) 100%)",
          //background:"-webkit-linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,46,124,1) 62%, rgba(82,118,240,1) 100%)",
          background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,46,124,1) 62%, rgba(82,118,240,1) 100%)",
          filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#5276f0",GradientType=1)`,
        }}
      >
        {pages}
      </Box>
    </SimpleContainer>
  );
}
