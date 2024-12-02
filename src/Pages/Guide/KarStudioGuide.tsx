import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import KarStudioGuideSvg from './KarStudioGuideSvg';
import guidePageStyles from './GuidePage.styles';
import Slider from 'react-slick';

var settings = {
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
var settings2 = {
  dots: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
var settings3 = {
  dots: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const KarStudioGuide: FC = () => {
  return (
    <>
      <Box className="common-section" sx={{ backgroundColor: '#F0E6EE' }}>
        <Box className="container">
          <Box
            sx={{
              textAlign: 'center',
              svg: {
                maxWidth: '100%',
              },
            }}
          >
            <KarStudioGuideSvg />

            {/* <img style={{maxWidth:"100%"}} alt="test" src={LocalImages.CARGRP} /> */}
            <svg
              width="512"
              height="192"
              viewBox="0 0 512 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.617 77.863C64.977 58.191 128.695 56.309 141.561 56.132L202.323 17.465C220.278 6.039 241.016 0 262.297 0H333.716C352.206 0 370.721 4.371 387.259 12.64L425.302 31.661C436.763 37.392 449.022 41.103 461.738 42.693L491.386 46.399C503.138 47.867 512 57.906 512 69.749V117.618C512 131.629 502.591 144.103 489.119 147.952L453.688 158.075C447.602 177.344 429.562 191.354 408.307 191.354C390.628 191.354 375.182 181.655 366.979 167.305H137.006C128.803 181.655 113.357 191.354 95.678 191.354C69.442 191.354 48.097 170.009 48.097 143.773C48.097 117.537 69.442 96.192 95.678 96.192C121.914 96.192 143.259 117.536 143.259 143.773C143.259 146.687 142.982 149.535 142.478 152.305H361.508C361.004 149.534 360.727 146.686 360.727 143.773C360.727 117.537 382.072 96.192 408.308 96.192C433.902 96.192 454.831 116.508 455.84 141.859L484.999 133.528C492.064 131.51 497 124.968 497 117.618V95.161H488.468C484.326 95.161 480.968 91.803 480.968 87.661C480.968 83.519 484.326 80.161 488.468 80.161H497V69.749C497 65.455 493.787 61.815 489.526 61.283L459.878 57.577C445.47 55.776 431.581 51.57 418.594 45.077L415.173 43.367L401.3 57.176C392.313 66.163 380.364 71.113 367.655 71.113H352.193C348.051 71.113 344.693 67.755 344.693 63.613C344.693 59.471 348.051 56.113 352.193 56.113H367.655C368.966 56.113 370.262 56.027 371.544 55.875L363.257 19.271C353.675 16.459 343.691 14.999 333.715 14.999H295.563V56.112H320.127C324.269 56.112 327.627 59.47 327.627 63.612C327.627 67.754 324.269 71.112 320.127 71.112H143.774C143.063 71.112 72.208 71.37 28.934 91.466C26.395 92.645 24.133 94.26 22.2 96.192H31.547C35.689 96.192 39.047 99.55 39.047 103.692C39.047 107.834 35.689 111.192 31.547 111.192H15.135C15.054 112.004 14.999 112.82 14.999 113.648V140.26C14.999 147.69 18.269 152.305 23.531 152.305C27.673 152.305 31.031 155.663 31.031 159.805C31.031 163.947 27.673 167.305 23.531 167.305C16.889 167.305 10.854 164.572 6.53601 159.609C2.26001 154.692 -0.000976562 148.002 -0.000976562 140.26V113.648C3.05176e-05 98.29 8.87799 84.243 22.617 77.863ZM95.678 111.193C77.713 111.193 63.097 125.809 63.097 143.774C63.097 161.739 77.713 176.355 95.678 176.355C113.643 176.355 128.259 161.739 128.259 143.774C128.259 125.809 113.643 111.193 95.678 111.193ZM408.307 111.193C390.342 111.193 375.726 125.809 375.726 143.774C375.726 161.739 390.342 176.355 408.307 176.355C426.272 176.355 440.888 161.739 440.888 143.774C440.888 125.809 426.271 111.193 408.307 111.193ZM385.741 50.644C387.502 49.464 389.161 48.103 390.694 46.57L400.989 36.275L380.551 26.056C380.411 25.986 380.268 25.921 380.128 25.852L385.741 50.644ZM280.564 14.999H262.297C243.874 14.999 225.92 20.228 210.376 30.119L169.529 56.113H280.564V14.999Z"
                fill="#5F0052"
              />
            </svg>
          </Box>
        </Box>
      </Box>

      <Box className="common-section results" sx={guidePageStyles.tipTop}>
        <Box className="container">
          <Slider {...settings}>
            <div className="carholder">
              <Typography className="title" variant="h3">
                Top Tip for Best Results with KarStudio
              </Typography>
              <Typography className="para" sx={{ marginBottom: '1.25rem' }}>
                Did you know that vehicles photographed using KarStudio can
                boost interaction rates by up to 52%? Proper photography ensures
                your car photos look more realistic and stunning.
              </Typography>
              <Typography className="para">
                Don't miss out! Scroll left to view our step-by-step vehicle
                photography guide and transform your car listings today.
              </Typography>
              <Button
                variant="contained"
                sx={{ marginTop: '3rem' }}
                className="learMore"
              >
                Kar Studio
              </Button>
              {/* <Box className="photoBox use-slider">
                <Box className="item cross">
                  <img className=" photoRes"  alt="test" src={LocalImages.Photo1} />
                  <img
                    alt="test"
                    className="crossIcon setImage"
                     src="images/icons/crossicon.svg"
                  />
                </Box>
                <Box className="item wright ">
                  <img alt="test" className="photoRes"  src={LocalImages.Photo2} />
                  <img
                    alt="test"
                    className="wrigthIcon setImage"
                    src={LocalImages.WRIGHTICON}
                  />
                </Box>
              </Box> */}
            </div>

            <div className="carholder">
              <Typography
                className="title"
                style={{ textAlign: 'center' }}
                variant="h3"
              >
                Photos taken during hours of strong sunlight
              </Typography>
              <Typography
                className="para"
                style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}
              >
                can cause excessive glare on the vehicle's surface orincrease
                reflections.
              </Typography>

              <Box className="photoBox use-slider">
                <Box className="item cross">
                  <img
                    className=" photoRes"
                    alt="test"
                    src="images/guide1.svg"
                  />
                  <img
                    alt="test"
                    className="crossIcon setImage"
                    src="images/icons/crossicon.svg"
                  />
                </Box>
                <Box className="item wright ">
                  <img
                    alt="test"
                    className="photoRes"
                    src="images/guide2.svg"
                  />
                  <img
                    alt="test"
                    className="wrigthIcon setImage"
                    src="images/icons/crossicon.svg"
                  />
                </Box>
              </Box>
            </div>

            <div className="carholder">
              <Typography className="title" variant="h3">
                Best Practices When Capturing Photos
              </Typography>
              <Typography className="para" sx={{ marginBottom: '1.25rem' }}>
                Step Back for Full Impact: Take a few steps back, around 3-4
                steps, to ensure you capture the vehicle's complete profile.
                This will allow you to showcase the entire car, making it look
                more impressive.
              </Typography>
              <Typography className="para" sx={{ marginBottom: '1.25rem' }}>
                Align for the Perfect Angle: Position your camera at the height
                of the rear-view mirror to achieve the best perspective. This
                angle highlights the car's details and gives your photos a
                professional touch.
              </Typography>

              <Typography className="para" sx={{ marginBottom: '1.25rem' }}>
                Frame it Just Right: Ensure the entire part you want to
                photograph is clearly visible within the frame. Proper framing
                not only makes your photos look polished but also helps convey
                the beauty of the vehicle.
              </Typography>
              <Button
                variant="contained"
                sx={{ marginTop: '3rem' }}
                className="learMore"
              >
                Kar Studio
              </Button>
            </div>

            <div className="carholder">
              <Typography
                className="title"
                style={{ textAlign: 'center' }}
                variant="h3"
              >
                Photos taken during hours of strong sunlight
              </Typography>
              <Typography
                className="para"
                style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}
              >
                can cause excessive glare on the vehicle's surface orincrease
                reflections.
              </Typography>

              <Box className="photoBox use-slider">
                <Box className="item cross">
                  <img
                    className=" photoRes"
                    alt="test"
                    src="images/guide3.svg"
                  />
                  <img
                    alt="test"
                    className="crossIcon setImage"
                    src="images/icons/crossicon.svg"
                  />
                </Box>
                <Box className="item wright ">
                  <img
                    alt="test"
                    className="photoRes"
                    src="images/guide4.svg"
                  />
                  <img
                    alt="test"
                    className="wrigthIcon setImage"
                    src="images/icons/crossicon.svg"
                  />
                </Box>
              </Box>
            </div>

            <div className="carholder">
              <Typography className="title" variant="h3">
                Avoid hours of Strong Sunlight.
              </Typography>
              <Typography className="para" sx={{ marginBottom: '1.25rem' }}>
                Strong sunlight can cause excessive glare and unwanted
                reflections on your vehicle's surface. For optimal results, take
                photos in natural daylight to clearly highlight your vehicle's
                lines. The golden hours of sunset and sunrise are ideal for
                photography. If these times don't work for you, try to avoid
                taking photos when the sun is directly overhead.
              </Typography>

              <Button
                variant="contained"
                sx={{ marginTop: '3rem' }}
                className="learMore"
              >
                Kar Studio
              </Button>
            </div>

            <div className="carholder">
              <Typography
                className="title"
                style={{ textAlign: 'center' }}
                variant="h3"
              >
                Photographing from incorrect angles
              </Typography>
              <Typography
                className="para"
                style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}
              >
                can cause the vehicle to look unrealistic in the studio.
              </Typography>

              <Box className="photoBox use-slider">
                <Box className="item cross">
                  <img
                    className=" photoRes"
                    alt="test"
                    src="images/guide5.svg"
                  />
                  <img
                    alt="test"
                    className="crossIcon setImage"
                    src="images/icons/crossicon.svg"
                  />
                </Box>
                <Box className="item wright ">
                  <img
                    alt="test"
                    className="photoRes"
                    src="images/guide6.svg"
                  />
                  <img
                    alt="test"
                    className="wrigthIcon setImage"
                    src="images/icons/crossicon.svg"
                  />
                </Box>
              </Box>
            </div>

            <div className="carholder">
              <Typography className="title" variant="h3">
                Photo Tips for Clear Results
              </Typography>
              <ul style={{ marginLeft: '22px', maxWidth: '1054px' }}>
                <li className="para">
                  {' '}
                  Angle your light source: Instead of having the light directly
                  behind you, position it at a 45-90 degree angle to your right
                  or left. This will minimize glare and enhance clarity.
                </li>
                <li className="para">
                  {' '}
                  Avoid using flash: Flash photography can cause bright spots
                  and make distant areas appear dark. Natural lighting is best
                  for even exposure.
                </li>
                <li className="para">
                  {' '}
                  Watch out for reflections: Be mindful of reflections on your
                  vehicle's surface, as they can distract from the overall image
                  quality
                </li>
              </ul>

              <Button
                variant="contained"
                sx={{ marginTop: '3rem' }}
                className="learMore"
              >
                Kar Studio
              </Button>
            </div>

            <div className="carholder">
              <Typography
                className="title"
                style={{ textAlign: 'center' }}
                variant="h3"
              >
                Choppy-incomplete photography
              </Typography>
              <Typography
                className="para"
                style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}
              >
                can cause the vehicle to look unrealistic in the studio.
              </Typography>

              <Box className="photoBox use-slider">
                <Box className="item cross">
                  <img
                    className=" photoRes"
                    alt="test"
                    src="images/guide7.svg"
                  />
                  <img
                    alt="test"
                    className="crossIcon setImage"
                    src="images/icons/crossicon.svg"
                    style={{ bottom: '-12px' }}
                  />
                </Box>
                <Box className="item wright ">
                  <img
                    alt="test"
                    className="photoRes"
                    src="images/guide8.svg"
                  />
                  <img
                    alt="test"
                    className="wrigthIcon setImage"
                    src="images/icons/crossicon.svg"
                    style={{ bottom: '-12px' }}
                  />
                </Box>
              </Box>
            </div>

            <div className="carholder">
              <Typography className="title" variant="h3">
                Perfect Your Photo with Proper Angles
              </Typography>

              <ul style={{ marginLeft: '22px', maxWidth: '1054px' }}>
                <li className="para">
                  {' '}
                  Nail the Perfect Shot: When using KarStudio, getting the right
                  photo angles is crucial for achieving a realistic look for
                  your vehicle images. Incorrect angles can make your vehicle
                  look distorted or unrealistic. To avoid this, ensure you're
                  capturing your photos from the right perspectives.
                </li>
                <li className="para">
                  {' '}
                  Avoid Common Pitfalls: Choppy or incomplete vehicles in
                  photography can lead to unrealistic vehicle representations in
                  the studio.{' '}
                </li>
              </ul>

              <Button
                variant="contained"
                sx={{ marginTop: '3rem' }}
                className="learMore"
              >
                Kar Studio
              </Button>
            </div>
          </Slider>
        </Box>
      </Box>

      <Box
        className="common-section paddingTop24 paddingBottom34 pinkbg"
        sx={guidePageStyles.Photography}
        style={{ marginTop: '40px' }}
      >
        <Typography
          className="title"
          variant="h3"
          classes=" recommendedas"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.6462rem',
            fontSize: '3rem !important',
            lineHeight: '4.5625rem !important',
            fontWeight: '700 !important',
            textTransform: 'capitalize !important',
          }}
        >
          <img
            className="imgStyle"
            alt="test"
            src="images/icons/wrighticonheading.svg"
          />
          Recommended Images Examples
        </Typography>
        <p className="examples">
          Recommended examples to Elevate Your Images when using KarStudio
        </p>
        <Box className="container">
          <Box
            className="photographyCove recommendedsection"
            sx={{ display: 'block !important', marginTop: '0 !important' }}
          >
            <Slider {...settings2}>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="/images/slider1.jpg" />
                    <img
                      alt="test"
                      className="wrigthIcon rightResponsive"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider2.jpg" />
                    <img
                      alt="test"
                      className="wrigthIcon rightResponsive"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider3.jpg" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider1.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider2.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider3.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider3.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider5.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider6.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider7.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider8.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider9.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider10.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider11.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider12.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider13.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider14.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider15.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider16.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider17.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider18.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider19.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider20.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider21.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider22.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider23.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider24.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider25.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider26.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider27.png" />
                  </Box>
                </Box>
              </Box>
              <Box className="photography photographyRight">
                <Box className="photoBox">
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider28.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/slider/slider29.png" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                  <Box className="item dotted">
                    <img alt="test" src="images/slider/slider30.png" />
                  </Box>
                </Box>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Box>

      <Box
        className="common-section paddingTop64 whitebg keyTips"
        sx={guidePageStyles.Photography}
      >
        <Typography
          className="title"
          variant="h3"
          sx={{
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.6462rem',
            fontSize: '3rem !important',
            lineHeight: '4.5625rem !important',
            fontWeight: '700 !important',
            marginTop: '40px',
          }}
        >
          <img alt="test" src="images/icons/wrighticonheading.svg" />
        </Typography>
        <p className="examples">
          Don’t miss these essential do’s and don’ts for mastering KarStudio.
        </p>
        <Box className="container">
          <Box
            className="photographyCove"
            sx={{ display: 'block !important', marginTop: '0 !important' }}
          >
            <Slider {...settings3}>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="/images/Slider4.svg" />
                    <img
                      alt="test"
                      className="crossIcon rightResponsive"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="/images/Slider5.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon rightResponsive"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/photo1.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/photo2.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/image1.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/image2.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/image3.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/image4.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/image15.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/image4.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/image5.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/image6.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/image7.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/image8.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/image9.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/image10.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/image16.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/image11.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="photography photographyLeft"
                sx={{ backgroundColor: 'var(--white) !important' }}
              >
                <Box className="photoBox">
                  <Box className="item cross">
                    <img alt="test" src="images/image12.svg" />
                    <img
                      alt="test"
                      className="crossIcon"
                      src="images/icons/crossicon.svg"
                    />
                  </Box>
                  <Box className="item wright">
                    <img alt="test" src="images/image13.svg" />
                    <img
                      alt="test"
                      className="wrigthIcon"
                      src="images/icons/wrighticon.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Box>

      <Box className="common-section" sx={{ backgroundColor: '#ECE0EA' }}>
        <Box className="container">
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Typography
              className="good"
              sx={{
                display: 'block',
                width: '100%',
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '3.4469rem',
              }}
            >
              GOOD PHOTOGRAPH
              <span
                style={{
                  color: 'var(--primary)',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                MAKES SALES!
              </span>
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: '3rem' }}
              className="learMore"
            >
              Kar Studio
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default KarStudioGuide;
