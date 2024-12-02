import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { headerStyles } from './Header.styles';
import MenuIcon from '../../Icons/Menu';
import { useAuthentication } from '../../../Shared';
import ConfirmationBox from '../../../Shared/Components/DialogBox/ConfirmDialogBox';

const Header: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, authUser } = useAuthentication();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setOpen(true);
  };

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="mobileMenu" onClick={handleDrawerToggle}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          boxShadow: '0px 4px 4px 0px #00000040',
          padding: '1rem',
          marginBottom: '1rem',
          //minHeight:"5rem",
        }}
      >
        <Link
          to="/"
          className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root logo"
        >
          <img
            alt="test"
            style={{ width: '62%' }}
            src="/images/icons/logo.svg"
          />
        </Link>
      </Box>
      <Paper sx={{}}>
        <MenuList sx={{ display: 'block' }}>
          <MenuItem>
            <Link
              to="/guide"
              className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root"
            >
              KarStudio Guide
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/package"
              className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root"
            >
              Try KarStudio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/login"
              className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root"
            >
              Login
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/register"
              className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root"
            >
              Register
            </Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </Box>
  );

  return (
    <Box>
      <AppBar sx={headerStyles.navbar} component={'nav'}>
        <Box className="container">
          <Toolbar>
            <Box className="headerCover">
              <Button
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'none',
                    color: 'white',
                    padding: '0',
                    cursor: 'pointer',
                    minWidth: 'auto',
                    '&:hover': { backgroundColor: 'transparent' },
                  },
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </Button>
              <Link
                to="/"
                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root"
              >
                <img alt="test" src="/images/icons/logo.svg" />
              </Link>
            </Box>
            <Button
              sx={{ display: { xs: 'block', sm: 'none' } }}
              className="backtoBtn"
              variant="contained"
              onClick={() => navigate('/')}
            >
              Back to KarKiosk
            </Button>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Box className="navbarStyle">
                <Paper>
                  <MenuList sx={{ display: 'flex' }}>
                    <MenuItem>
                      <Link
                        to="/guide"
                        className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root"
                      >
                        KarStudio Guide
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/editor"
                        className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root"
                      >
                        Editor
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/plans"
                        className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1orsvah-MuiTypography-root-MuiLink-root"
                      >
                        Try KarStudio
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Paper>
                <Button
                  onClick={() => navigate('/')}
                  className="backtoBtn"
                  variant="contained"
                >
                  Back to KarKiosk
                </Button>

                {!isAuthenticated && (
                  <>
                    <Button
                      onClick={() => navigate('/login')}
                      className="backtoBtn login"
                      variant="contained"
                      style={{ marginLeft: '25px' }}
                    >
                      Login
                    </Button>

                    <Button
                      variant="contained"
                      className="backtoBtn register"
                      onClick={() => navigate('/register')}
                    >
                      Register
                    </Button>
                  </>
                )}

                {isAuthenticated && (
                  <div className="account-section">
                    <img
                      src="/images/userImg.png"
                      alt="ProfilePicture"
                      className="profile-pic"
                      style={{ height: '35px', width: '35px' }}
                    />

                    <div className="account-text">
                      <p className="greeting">Hello, {authUser!.first_name}</p>
                      <p className="account" onClick={handleLogout}>
                        Logout
                      </p>
                      <ConfirmationBox open={open} setOpen={setOpen} />
                    </div>
                  </div>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
              '.MuiDrawer-paper': {
                width: '100%',
                maxWidth: '70%',
                height: '100%',
                '.mobileMenu': {
                  padding: '0',
                  height: '100%',
                  '.MuiPaper-root': {
                    boxShadow: 'none',
                    borderRadius: '0',
                    height: 'calc(100vh - 5.3rem)',
                    overflow: 'auto',
                    padding: '0 1rem 1rem 1rem',
                    '&::-webkit-scrollbar': {
                      width: '.25rem',
                      height: '.25rem',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'var(--maroon521A)',
                    },

                    '&::-webkit-scrollbar-thumb': {
                      width: '.25rem',
                      height: '.25rem',
                      background: 'var(--primary)',
                      borderRadius: '0',
                    },
                    '.MuiList-root': {
                      padding: '0',
                      margin: '0',
                      // display:"inline-flex",
                      // columnGap:"1rem",
                      // flexWrap:"wrap",
                      '.MuiMenuItem-gutters': {
                        padding: '0',
                        marginBottom: '1rem',
                        minHeight: 'inherit',
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                        '&:last-child': {
                          marginBottom: '0',
                        },
                        '.MuiTypography-inherit': {
                          textDecoration: 'none',
                          color: 'var(--black)',
                          '&:hover': {
                            color: 'var(--primary)',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
