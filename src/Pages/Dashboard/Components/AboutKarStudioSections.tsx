import { Box, Button, Typography } from '@mui/material';
import React, { FC } from 'react';
import Slider from 'react-slick';
import { dashboardStyles } from '../Dashboard.styles';

var sliderSettings = {
  dots: false,
  arrows: false,
  autoplay: false,
  infinite: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1172,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const AboutKarStudioSections: FC = () => {
  return (
    <>
      <Box
        className="common-section enhance "
        style={{ paddingBottom: '0', paddingTop: '40px' }}
        sx={dashboardStyles.EnhanceStyle}
      >
        <Box className="container">
          <Box className="text-center space ">
            <Typography
              style={{ whiteSpace: 'break-spaces' }}
              className="section-heading"
              variant="h2"
            >
              Enhance <span>Your Car</span> Photos with{' '}
              <span>AI-Driven KarStudio</span>
            </Typography>
            <Typography className="subPara  carStudio">
              Our AI-Driven Car Studio takes professional car photography to the
              next level. Imagine a state-of-the-art facility where you can
              capture stunning, high-qualityimages of vehicles effortlessly.
              Whether you're an automobile retailer or an OEM, high-resolution
              vehicle photos are essential for advertisements, promotions,and
              sales listings. No need for professional photographers who
              specialize in automotive photoshoots. Our AI-Driven Car Studio
              automates the process, ensuring consistent, flawless results every
              time. No more waiting for the perfect lighting or dealing with
              complex setups—our AI does it all. Why Choose Our AI-Driven
              KarStudio?
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: '1.125rem' }}
              className="learMore"
            >
              Learn More
            </Button>
          </Box>
          <Box className="Enhanceholder">
            <Slider {...sliderSettings}>
              <div className="carholder">
                <Box className="imgHolder">
                  <img
                    loading="lazy"
                    style={{ maxWidth: '270px' }}
                    alt="test"
                    src="images/icons/img1.svg"
                  />
                </Box>
                <Box className="textDetail">
                  <Box className="innerText">
                    <Typography className="heading">
                      1. Upload Your Image
                    </Typography>
                    <Typography className="desc">
                      Upload or select a sample image to get started
                    </Typography>
                  </Box>
                </Box>
              </div>
              <div className="carholder">
                <Box className="imgHolder">
                  <img loading="lazy" alt="test" src="images/icons/img2.svg" />
                </Box>
                <Box className="textDetail">
                  <Box className="innerText">
                    <Typography className="heading">
                      2. Create Studio-Grade Photos
                    </Typography>
                    <Typography className="desc">
                      Select from a variety of backgrounds and watch your image
                      transform..
                    </Typography>
                  </Box>
                </Box>
              </div>
              <div className="carholder">
                <Box className="imgHolder">
                  <img loading="lazy" alt="test" src="images/icons/img3.svg" />
                </Box>

                <Box className="textDetail">
                  <Box className="innerText">
                    <Typography className="heading">
                      3. Download Enhanced Photo
                    </Typography>
                    <Typography className="desc">
                      Download your enhanced image and elevate your listing.{' '}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Slider>
          </Box>
        </Box>
      </Box>

      <Box
        className="common-section optimal"
        style={{ paddingTop: '0', marginTop: '80px', paddingBottom: '60px' }}
      >
        <Box className="container">
          <Box sx={dashboardStyles.Guide}>
            <Box className="carHolder">
              <img loading="lazy" alt="test" src="images/slider1.png" />
            </Box>
            <Box
              className="carText reponsive_Achieve"
              style={{ position: 'absolute', right: '15%' }}
            >
              <Typography
                className="section-heading"
                variant="h2"
                sx={{ whiteSpace: 'normal' }}
              >
                Achieve Optimal Results with Our <span>Step-by-Step Guide</span>{' '}
              </Typography>
              <Typography className="section-para">
                Utilize the KarStudio guide to upload images that meet
                studio-quality standards! Effortlessly create stunning,
                professional-grade photos by following our detailed KarStudio
                guide. Maximize the potential of our AI-driven car studio
                technology and start producing flawless images today!
              </Typography>
              <Button
                sx={{ marginTop: '3rem' }}
                variant="contained"
                className="learMore viewGuide1"
              >
                View Guide
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutKarStudioSections;
