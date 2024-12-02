import { Box, Button, Input, Typography } from '@mui/material';
import { FC } from 'react';
import { dashboardStyles } from '../Dashboard.styles';

const SubscribeLetter: FC = () => {
  return (
    <Box
      sx={dashboardStyles.Form}
      className="drive"
      style={{ paddingTop: '40px' }}
    >
      <Box className="container">
        <Box className="formholder">
          <Box className="left">
            <Typography
              className="section-heading"
              variant="h2"
              sx={{ whiteSpace: 'normal' }}
              classes="forward"
            >
              Drive Your Business Forward with <span>AI-Powered KarStudio</span>
            </Typography>
            <Typography className="para">
              Are you ready to revolutionize your dealership inventory with
              AI-driven technology? Discover how KarStudio can supercharge your
              business operations.
              <br />{' '}
              <span style={{ color: '#5f0052' }}>
                Contact us today to learn more!
              </span>
            </Typography>
          </Box>
          <Box className="right">
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" /> */}
            {/* <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                /> */}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                columnGap: '.625rem',
              }}
            >
              <Input sx={{ width: '100%' }} placeholder="Name" />

              <Input sx={{ width: '100%' }} placeholder="Email" />
            </Box>

            <Input placeholder="Company Name" />

            <Input type="number" placeholder="Phone number" />

            {/* <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                /> */}
            {/* <Box className="item">
               
              </Box> */}
            {/* <TextField
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                /> */}
            {/* <Box className="item">
               
              </Box> */}
            {/* <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                /> */}
            {/* <Box className="item">
              
              </Box> */}
            <Button
              sx={{
                width: '13.125rem',
                '@media(max-Width: 640px)': {
                  margin: '1.625rem auto 0 auto !important',
                },
              }}
              variant="contained"
              className="learMore submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubscribeLetter;
