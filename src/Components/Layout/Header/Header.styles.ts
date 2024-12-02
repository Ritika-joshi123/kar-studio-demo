export const headerStyles = {
  navbar: {
    boxShadow: '0px 4px 4px 0px #00000040',
    backgroundColor: 'var(--white)',
    '.MuiToolbar-root': {
      minHeight: '6.3125rem',
      justifyContent: 'space-between',
      paddingLeft: '0',
      paddingRight: '0',

      '@media(max-Width: 676px)': {
        minHeight: '5rem',
      },
      '.headerCover': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media(max-Width: 599px)': {
          gap: '1.0319rem',
        },
        '.logo': {
          display: 'inline-block',
          width: '13.0569rem',
          height: '2.6175rem',
          '@media(max-Width: 991px)': {
            width: '8rem',
            height: 'auto',
          },
          '@media(max-Width: 676px)': {
            width: '8rem',
          },
          img: {
            width: '100%',
          },
        },
      },

      '.navbarStyle': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '1.25rem',
        '@media(max-Width: 991px)': {
          gap: '1rem',
        },
        '.MuiPaper-root': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: 'none',
          borderRadius: 'var(--border-radius-none)',
          backgroundImage: 'var(--background-image-none)',
          transition: 'var(--transition-none)',
          '.MuiList-root': {
            padding: '0',
            gap: '3.5rem',
            '@media(max-Width: 991px)': {
              gap: '1rem',
            },
            '.MuiButtonBase-root': {
              textDecoration: 'none',
              outline: 'none',
              padding: '0',
              '&:hover': {
                backgroundColor: 'transparent',
                '.MuiLink-root': {
                  color: 'var(--primary)',
                },
              },
              '.MuiLink-root': {
                textDecoration: 'none',
                outline: 'none',
                fontSize: '1.125rem',
                lineHeight: '1.2925rem',
                fontWeight: '500',
                color: 'var(--black)',
                '@media(max-Width: 767px)': {
                  fontSize: '0.925rem',
                  lineHeight: '2.2rem',
                },
              },
            },
          },
        },
      },
      '.backtoBtn': {
        fontSize: '1.25rem',
        lineHeight: '1.4363rem',
        fontWeight: '700',
        backgroundColor: 'var(--primary)',
        boxShadow: 'none',
        padding: '.875rem',
        borderRadius: '.625rem',
        color: 'var(--white)',
        border: '2px solid var(--primary)',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: 'var(--white)',
          color: 'var(--primary)',
          borderColor: 'var(--primary)',
        },
        '@media(max-Width: 991px)': {
          fontSize: '1.05rem',
          padding: '.625rem',
          whiteSpace: 'pre',
        },
        '@media(max-Width: 767px)': {
          fontSize: '0.75rem',
          padding: '0.325rem 0.525rem',
        },
      },
      '.outlinedBtn': {
        fontSize: '1.5rem',
        lineHeight: '1.7237rem',
        fontWeight: '700',
        backgroundColor: 'var(--white)',
        boxShadow: 'none',
        padding: '1.0313rem 1rem',
        borderRadius: '.625rem',
        color: 'var(--black)',
        border: '1px solid var(--primary)',
        textTransform: 'capitalize',
        gap: '.5rem',
        height: '3.8125rem',
        '&:hover': {
          backgroundColor: 'var(--white)',
          color: 'var(--primary)',
          borderColor: 'var(--primary)',
        },
        '@media(max-Width: 991px)': {
          fontSize: '1.05rem',
          padding: '.625rem',
          whiteSpace: 'pre',
        },
        '@media(max-Width: 767px)': {
          fontSize: '0.75rem',
          padding: '0.325rem 0.525rem',
        },
      },
      '.MuiAvatar-root': {
        width: '3.8125rem',
        height: '3.8125rem',
        borderRadius: '50%',
        border: '1px solid var(--primary)',
        img: {
          width: '100%',
        },
      },
    },
  },

  editorheader: {
    boxShadow: '0px 4px 4px 0px #00000040',
    backgroundColor: 'var(--white)',
  },

  editorholder: {
    paddingTop: '3.25rem',
    marginTop: '6.3125rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '3.625rem',
    '.left-editor': {
      width: '55%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      '.addImage': {
        fontSize: '1.25rem',
        lineHeight: '1.4363rem',
        fontWeight: '700',
        backgroundColor: 'var(--primary)',
        boxShadow: 'none',
        padding: '1rem 1.1875rem',
        borderRadius: '.625rem',
        color: 'var(--white)',
        border: '2px solid var(--primary)',
        textTransform: 'capitalize',
        height: '3.8125rem',
        whiteSpace: 'pre',
        '&:hover': {
          backgroundColor: 'var(--white)',
          color: 'var(--primary)',
          borderColor: 'var(--primary)',
        },
        '@media(max-Width: 991px)': {
          fontSize: '1.05rem',
          padding: '.625rem',
          whiteSpace: 'pre',
        },
        '@media(max-Width: 767px)': {
          fontSize: '0.75rem',
          padding: '0.325rem 0.525rem',
        },
      },
      '.slick-slider': {
        display: 'flex',
      },
      '.downloadImage': {
        fontSize: '1.25rem',
        lineHeight: '1.4363rem',
        fontWeight: '700',
        color: 'var(--primary)',
        boxShadow: 'none',
        padding: '1rem 1.1875rem',
        borderRadius: '.625rem',
        border: '2px solid var(--primary)',
        textTransform: 'capitalize',
        height: '3.8125rem',
        whiteSpace: 'pre',
        '&:hover': {
          backgroundColor: 'var(--white)',
          color: 'var(--primary)',
          borderColor: 'var(--primary)',
        },
        '@media(max-Width: 991px)': {
          fontSize: '1.05rem',
          padding: '.625rem',
          whiteSpace: 'pre',
        },
        '@media(max-Width: 767px)': {
          fontSize: '0.75rem',
          padding: '0.325rem 0.525rem',
        },
      },
      '.innerbtn': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '8.3125rem',
      },
      '.innerbtn-img': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '13.313rem',
      },

      '.file-upload': {
        width: '80%',
        marginTop: '1.875rem',
        '.MuiButtonBase-root': {
          width: '100%',
          aspectRatio: 20 / 12,
          //height: "50.5rem",
          // paddingTop: "17.375rem",
          // paddingBottom: "17.375rem",
          backgroundColor: '#FBFBFF',
          borderRadius: '4.36px',
          border: '1.74px dashed var(--primary)',
          boxShadow: '0px 0px 2.8px 0px #CE0F763D',
          flexWrap: 'wrap',
          color: 'var(--primary)',
          textTransform: 'capitalize',
          textAlign: 'center',
          fontSize: '1.375rem',
          lineHeight: '1.58rem',
          fontWeight: '400',
          '.MuiButton-startIcon': {
            width: '100%',
            svg: { margin: '0 auto 1.5rem auto' },
          },
          span: {
            display: 'bloack',
            width: '100%',
            fontSize: '1.5rem',
            lineHeight: '1.7237rem',
            fontWeight: '700',
            marginTop: '1.5rem',
            textTransform: 'uppercase',
          },
          '.browse': {
            borderRadius: '.6875rem',
            width: '14.5rem',
            height: '3.8125rem',
            border: '1px solid var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '1.875rem',
            fontSize: '1.375rem',
            lineHeight: '1.58rem',
            fontWeight: '400',
            color: 'var(--black)',
          },
        },
      },
    },
    '.right-editor': {
      width: '45%',
      '.MuiPaper-root': {
        boxShadow: 'none',
        margin: '0 0 1.5rem 0',
        '.MuiAccordion-heading': {
          '.MuiButtonBase-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.07)',
            fontSize: '1.5rem',
            lineHeight: '1.7237rem',
            color: 'var(--black)',
            borderRadius: '.6875rem',
            '.MuiAccordionSummary-content': {
              margin: '1rem 0',
            },
          },
        },
        '.MuiCollapse-root': {
          '.MuiCollapse-wrapper': {
            border: '1px solid var(--white)',
            '.MuiCollapse-wrapperInner': {
              '.MuiAccordion-region': {
                '.MuiAccordionDetails-root': {
                  padding: '1.625rem',
                  '.images-holder': {
                    display: 'grid',
                    gridTemplateColumns:
                      'repeat(auto-fit, minmax(12.75rem, 1fr))',
                    columnGap: '1.5rem',
                    rowGap: '1.3125rem',
                    '.iteam': {
                      borderRadius: '.2725rem',
                      img: {
                        '&.active': {
                          border: '1px solid #5f0052',
                          borderRadius: '10px',
                        },

                        width: '100%',
                        height: '100%',
                      },
                      '&.addplus': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        border: '.1087rem dashed var(--primary)',
                        flexWrap: 'wrap',

                        '.MuiTypography-root': {
                          fontSize: '24px',
                          paddingTop: '16px',
                        },
                      },
                    },
                  },
                  '.option': {
                    marginTop: '1.5625rem',
                    '.MuiFormControlLabel-root': {
                      '.MuiCheckbox-root': {
                        backgroundColor: 'var(--white)',

                        '&.Mui-checked': {
                          color: 'var(--primary)',
                        },
                      },
                      '.MuiTypography-root': {
                        color: '#5B5B5B',
                        fontSize: '1.5rem',
                        lineHeight: '1.7237rem',
                        fontWeight: '400',
                      },
                    },
                    '.next': {
                      width: '100%',
                      backgroundColor: 'var(--primary)',
                      marginTop: '3.125rem',
                      height: '3.8125rem',
                      borderRadius: '.6875rem',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--white)',
                      fontSize: '1.5rem',
                      lineHeight: '1.7237rem',
                      fontWeight: '700',
                    },
                  },
                },
              },
            },
          },
        },
        '&::before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          '.MuiButtonBase-root': {
            backgroundColor: 'var(--primary)',
            borderBottomRightRadius: '0',
            borderBottomLeftRadius: '0',
            '.MuiTypography-root': {
              color: 'var(--white)',
            },
          },
          '.MuiCollapse-wrapper': {
            border: '1px solid var(--primary)',
          },
        },
      },
    },
  },
};
