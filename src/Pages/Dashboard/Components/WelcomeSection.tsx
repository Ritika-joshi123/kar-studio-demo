import { Box, Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { UploadFile } from '../../../Components/';
import TwentyTwenty from 'react-twentytwenty';
import { dashboardStyles } from '../Dashboard.styles';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../../Shared';

type SliderImage = {
  beforeImgUrl: string;
  afterImgUrl: string;
};

const sliderImages: SliderImage[] = [
  { beforeImgUrl: 'images/Newcar.png', afterImgUrl: 'images/karstudioImg.jpg' },
  { beforeImgUrl: 'images/before1.svg', afterImgUrl: 'images/after1.svg' },
  { beforeImgUrl: 'images/before2.svg', afterImgUrl: 'images/after2.svg' },
  { beforeImgUrl: 'images/before3.svg', afterImgUrl: 'images/after3.svg' },
];

const WelcomeSection: FC = () => {
  const { isAuthenticated } = useAuthentication();
  const [sliderImage, setSliderImage] = useState<SliderImage>({
    ...sliderImages[0],
  });

  const navigate = useNavigate();

  const onButtonClick = () => {
    if (isAuthenticated) {
      navigate('/editor/new');
    } else {
      navigate('/login');
    }
  };

  return (
    <Box className="common-section section-one" sx={dashboardStyles.captivate}>
      <Box className="container">
        <Box className="captivateInner">
          <Box className="left" style={{ paddingRight: '0' }}>
            <Typography className="section-heading stunning" variant="h2">
              <span>Captivate Buyers </span> with Stunning Car Photos!
            </Typography>
            <Typography className="para capture">
              Capture the attention of potential buyers with enhanced car
              photos. Our AI-powered, user-friendly photography studio takes the
              hassle out of creating professional car listings. Transform Your
              Car Listings with:{' '}
              <span style={{ color: '#5f0052' }}>AI-Enhanced Photos!</span>
            </Typography>

            {isMobile && (
              <div className="right comparison-container">
                <TwentyTwenty
                  left={
                    <img alt="" loading="lazy" src={sliderImage.beforeImgUrl} />
                  }
                  right={
                    <img alt="'" loading="lazy" src={sliderImage.afterImgUrl} />
                  }
                  slider={<div className="slider-mob"></div>}
                />
              </div>
            )}

            <Box className="uploadSection">
              <Box sx={{ minHeight: '9.8788rem' }}>
                <Typography
                  sx={{
                    fontSize: '1.3069rem',
                    lineHeight: '2.1781rem',
                    fontWeight: '500',
                    color: 'var(--primary)',
                  }}
                >
                  Give KarStudio a Try
                </Typography>
                <Button
                  sx={{
                    marginTop: '4.86rem',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '.5444rem',
                    height: '2.8312rem',
                    textTransform: 'none',
                    fontSize: '1.3069rem',
                    lineHeight: '2.1781rem',
                    fontWeight: '500',
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<UploadFile />}
                  onClick={onButtonClick}
                >
                  Upload an image
                </Button>
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: '.98rem',
                fontWeight: '300',
                lineHeight: '2.1781rem',
                textAlign: 'center',
                marginTop: '1.5737rem',
                '@media(max-Width: 640px)': {
                  position: 'relative',
                  zIndex: '1',
                },
              }}
              className="noImage"
            >
              No image to upload ? Pick one
            </Typography>

            <Box
              className="upload-image"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '.4356rem',
                marginTop: '1.25rem',
                '@media(max-Width: 640px)': {
                  position: 'relative',
                  zIndex: '1',
                },
                img: {
                  width: '100%',
                  borderRadius: '.5444rem',
                  border: '2px solid #ECE0EACC',
                  '&.active': {
                    borderColor: 'var(--primary)',
                  },
                },
              }}
            >
              {sliderImages.map((x) => (
                <img
                  key={x.beforeImgUrl}
                  className={
                    sliderImage.beforeImgUrl === x.beforeImgUrl ? 'active' : ''
                  }
                  alt="test"
                  src={x.beforeImgUrl}
                  onClick={() => setSliderImage({ ...x })}
                  style={{ maxWidth: '150px' }}
                />
              ))}
            </Box>
          </Box>
          {!isMobile && (
            <div className="right comparison-container">
              <TwentyTwenty
                left={
                  <img alt="" loading="lazy" src={sliderImage.beforeImgUrl} />
                }
                right={
                  <img alt="" loading="lazy" src={sliderImage.afterImgUrl} />
                }
                slider={<div className="slider"></div>}
              />
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeSection;
