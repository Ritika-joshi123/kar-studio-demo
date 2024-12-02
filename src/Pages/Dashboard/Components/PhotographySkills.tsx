import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { dashboardStyles } from '../Dashboard.styles';

const PhotographySkills: FC = () => {
  return (
    <Box
      className="common-section"
      sx={dashboardStyles.Photography}
      style={{
        marginTop: '0px',
        backgroundColor: '#fafafa',
        paddingBottom: '20px',
        paddingTop: '40px',
        paddingLeft: '0',
        paddingRight: '0',
      }}
    >
      <Box className="container" style={{ padding: '0' }}>
        <Box className="text-center" style={{ padding: '10px' }}>
          <Typography
            style={{ whiteSpace: 'break-spaces' }}
            className="section-heading"
            variant="h2"
          >
            Elevate Your Photography Skills with
            <span> KarStudio</span>
          </Typography>
          <Typography className="subPara utilizing">
            Enhance your photography with KarStudio by utilizing original images
            effectively. Start by avoiding strong sunlight and learning to
            harness daylight for stunning results. The best time to shoot can
            significantly impact your images, so find those golden hours.
            Experimenting with angles can also elevate your photos, making them
            more dynamic. To ensure clarity, prevent glare with strategic
            positioning. Additionally, understanding the optimal distance for
            your shots is crucial for achieving perfection. By following these
            simple tips, you can elevate your skills and make every shot truly
            count. View our step by step guide and start capturing breathtaking
            images today!
          </Typography>
          {/* <Button variant="contained" sx={{marginTop:"1.125rem"}} className="learMore">
              Learn More
            </Button> */}
        </Box>
        <Box className="photographyCove">
          <Box className="photography photographyLeft">
            <Typography
              className="title"
              variant="h3"
              sx={{ color: 'var(--primary)' }}
            >
              Photographing from Above
            </Typography>
            <Typography className="subtitle">
              can cause the vehicle to appear unrealistic in the studio.
            </Typography>
            <Box className="photoBox">
              <Box className="item cross">
                <img loading="lazy" alt="test" src="images/photo1.svg" />
                <img
                  loading="lazy"
                  alt="test"
                  className="crossIcon"
                  src="images/icons/crossicon.svg"
                />
              </Box>
              <Box className="item wright">
                <img loading="lazy" alt="test" src="images/photo2.svg" />
                <img
                  loading="lazy"
                  alt="test"
                  className="wrigthIcon"
                  src="images/icons/wrighticon.svg"
                />
              </Box>
            </Box>
          </Box>
          <Box className="photography photographyRight">
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '.6462rem',
              }}
              className="title"
              variant="h3"
            >
              <img
                loading="lazy"
                alt="test"
                src="images/icons/wrighticonheading.svg"
              />{' '}
              GOOD PHOTOGRAPHY EXAMPLES
            </Typography>
            <Box className="photoBox">
              <Box className="item wright">
                <img loading="lazy" alt="test" src="images/photo3.png" />
                <img
                  loading="lazy"
                  alt="test"
                  className="wrigthIcon"
                  src="images/icons/wrighticon.svg"
                />
              </Box>
              <Box className="item wright">
                <img loading="lazy" alt="test" src="images/photo4.png" />
                <img
                  loading="lazy"
                  alt="test"
                  className="wrigthIcon"
                  src="images/icons/wrighticon.svg"
                />
              </Box>
              <Box className="item dotted">
                <img loading="lazy" alt="test" src="images/photo5.png" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="text-center">
        <Button
          variant="contained"
          sx={{ marginTop: '2.75rem' }}
          className="learMore viewGuide"
        >
          View Guide
        </Button>
      </Box>
    </Box>
  );
};

export default PhotographySkills;
