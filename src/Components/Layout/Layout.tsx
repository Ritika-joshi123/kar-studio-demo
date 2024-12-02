import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        className="wrapper"
        sx={{
          '@media(max-Width: 676px)': {
            marginTop: '5rem',
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
