import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/front-page-img.webp"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#0069F7" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat{" "}
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>Learn more about every exercises</Typography>
      <Button variant="contained" href="#exercises">Explore Exercises</Button>
      <img src={HeroBannerImg} alt="Banner" className="hero-banner-img" style={{width:"900px", height:"600px", margin:"0 5px"}}/>
    </Box>
  );
};

export default HeroBanner;
