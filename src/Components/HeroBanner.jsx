import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" }  }}
        mb="23px" mt='20px'
      >
        Sweat, Smile <br /> and Repet
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most efffective exercises
      </Typography>
      <Button variant="contained" color="error"  href="#exercise" sx={{backgroundColor: '#ff2625', padding:'10px'}}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: .1, display: { lg: "block", xs: "none" } }}
        fontSize='200px'
      >
        Exercises
      </Typography>
      <img
        src={HeroBannerImg}
        alt="Hero Banner Img"
        className="hero-banner-img"
      />
    </Box>
  );
}

export default HeroBanner;
