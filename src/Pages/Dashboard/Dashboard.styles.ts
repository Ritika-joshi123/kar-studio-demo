import { Utility } from '../../Shared';

export const dashboardStyles = {
  captivate: {
    backgroundColor: '#ECE0EACC',
    padding: '3.125rem 0 2rem 0',
    '@media(max-Width: 640px)': {
      backgroundColor: '#ffffff',
      position: 'relative',
      '&::after': {
        content: '""',
        backgroundColor: '#ECE0EACC',
        bottom: '0',
        left: '0',
        right: '0',
        position: 'absolute',
        width: '100%',
        height: '31.7rem',
      },
      '@media (max-width: 640px)': {
        '&::after': {
          height: '28.5rem', // Adjust height for smaller screens
        },
      },
    },

    '.captivateInner': {
      display: 'flex',
      justifyContent: 'space-between',
      '@media(max-Width: 640px)': {
        flexWrap: 'wrap',
      },
      '.left': {
        width: '100%',
        maxWidth: '37.8125rem',
        paddingRight: '4.0625rem',
        '.section-heading': {
          whiteSpace: 'normal',
          textAlign: 'left',
        },
        '.para': {
          fontSize: '1.5rem',
          fontWeight: '400',
          lineHeight: '1.92rem',
          marginTop: '1rem',
        },
        '.uploadSection': {
          backgroundColor: 'var(--white)',
          boxShadow: '0px 0px 2.8px 0px #CE0F763D',
          border: '.1087rem dotted var(--primary)',
          borderRadius: '.2725rem',
          //minHeight:"16.4375rem",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1.5rem',
          textAlign: 'center',
          padding: '1.5rem 0 5.0587rem 0',
          '@media(max-Width: 640px)': {
            marginTop: '3rem',
            position: 'relative',
            zIndex: '1',
          },
        },
      },
      '.right': {
        width: '100%',
        maxWidth: 'calc(100% - 44.8125rem)',
        '@media(max-Width: 640px)': {
          maxWidth: '100%',
          marginTop: '1rem',
        },
        img: {
          width: '100%',
          borderRadius: '.75rem',
        },
      },
    },
  },

  slick: {
    marginTop: '3.125rem',
    '.slick-slider': {
      '.slick-list': {
        '.slick-track': {
          display: 'flex',
          gap: '.9375rem',
          '.slick-slide': {
            border: '1.76px solid var(--primary)',
            boxShadow: '0px 0px 4px 1px #00000040',
            backgroundColor: 'var(--white)',
            borderRadius: '1.7056rem',
            padding: '2.1875rem',
            '@media(max-Width: 1280px)': {
              padding: '1.7875rem',
            },
            '.innerCustomslider': {
              textAlign: 'center',
              '.iconholder': {
                width: '12.5625rem',
                height: '9.5625rem',
                borderRadius: '.625rem',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                '&::after': {
                  content: '""',
                  backgroundColor: 'var(--primary)',
                  opacity: '10%',
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  left: '0',
                  bottom: '0',
                },
              },
              '.title': {
                fontSize: '1.5rem',
                fontWeight: '700',
                lineHeight: '3.625rem',
                marginTop: '1.5rem',
                '@media(max-Width: 1280px)': {
                  fontSize: '1.5rem',
                  lineHeight: '2.225rem',
                  marginTop: '1rem',
                },
              },
              '.para': {
                fontSize: '1.25rem',
                fontWeight: '400',
                lineHeight: '2rem',
                marginTop: '.625rem',
                '@media(max-Width: 1680px)': {
                  fontSize: '0.95rem',
                  lineHeight: '1.7rem',
                  marginTop: '0',
                },
              },
            },
          },
        },
      },
    },
  },
  KarKiosk: {
    padding: '3.125rem 0 3.25rem 0',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundColor: 'var(--primary)',
      opacity: '10%',
      position: 'absolute',
      top: '0',
      right: '0',
      left: '0',
      bottom: '0',
    },
    '.slick-slider': {
      marginTop: '2.625rem',
      '.slick-list': {
        paddingBottom: '.3125rem',
        paddingTop: '.3125rem',
        '.slick-track': {
          display: 'flex',
          gap: '.625rem',
          '.slick-slide': {
            boxShadow: '0px 0px 4px 1px #00000040',
            borderRadius: '.5rem',
            overflow: 'hidden',
            '.KarKiosk': {
              '.KarKioskImg': {
                width: '100%',
              },
              '.title': {
                padding: '1.0625rem 1.3125rem',
                fontSize: '1.25rem',
                fontWeight: '400',
                lineHeight: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.0781rem',
                backgroundColor: 'var(--white)',
                '@media(max-Width: 1680px)': {
                  fontSize: '1rem',
                  lineHeight: '1.4363rem',
                },
              },
            },
          },
        },
      },
    },
  },
  CarListing: {
    '.css-mgl938 .coverCarlisting .slick-slider .slick-list .slick-track .slick-slide >div .carholder img':
      {
        objectFit: 'contain !important',
      },
    '.coverCarlisting': {
      width: '83.7%',
      margin: '0 auto',
      '.CarListingOption': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '4.375rem',
        marginBottom: '1.875rem',
        '@media(max-Width: 640px)': {
          marginTop: '1rem',
        },
        '.option': {
          fontSize: '1.875rem',
          fontWeight: '700',
          lineHeight: '2.25rem',
          color: 'var(--primary)',
        },
      },
      '.slick-slider': {
        borderRadius: '.9375rem',
        border: '1px solid var(--primary)',
        position: 'relative',
        '.slick-list': {
          '.slick-track': {
            '.slick-slide': {
              position: 'relative',
              minHeight: '30.4375rem',
              '>div': {
                // height:"100%",
                position: 'absolute',
                right: '0',
                top: '0',
                bottom: '0',
                left: '0',
                '&::after': {
                  content: '""',
                  width: '.0625rem',
                  height: '100%',
                  backgroundColor: 'var(--primary)',
                  position: 'absolute',
                  right: '100%',
                  top: '0',
                  bottom: '0',
                },
                //  "&:first-child":{

                //  },
                '.carholder': {
                  height: '100%',
                  img: {
                    width: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    height: '100%',
                    '@media(max-Width: 640px)': {
                      height: 'auto',
                    },
                  },
                  // "&:nth-child(odd)":{
                  //   backgroundColor:"red",
                  //   padding:"5px"
                  // },
                  // "&:nth-child(even)":{
                  //    backgroundColor:"green",
                  //   padding:"5px"
                  // },
                },
              },
            },
          },
        },
        '.slick-arrow': {
          width: '4.0625rem',
          height: '4.0625rem',
          boxShadow: '0px 0px 4px 0px #00000040',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&.slick-prev': {
            left: '-5.625rem',
            backgroundImage: `url(${Utility.toStaticImageUrl(
              '/images/icons/leftarrow.svg'
            )})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            '@media(max-Width: 640px)': {
              width: '1.0206rem',
              height: '1.0206rem',
              left: '-1.625rem',
              backgroundSize: '37%',
            },
            '&::before': {
              display: 'none',
            },
          },
          '&.slick-next': {
            right: '-5.625rem',
            backgroundImage: `url(${Utility.toStaticImageUrl(
              '/images/icons/rightarrow.svg'
            )})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            '@media(max-Width: 640px)': {
              width: '1.0206rem',
              height: '1.0206rem',
              right: '-1.625rem',
              backgroundSize: '37%',
            },
            '&::before': {
              display: 'none',
            },
          },
        },
      },
    },
  },
  EnhanceStyle: {
    backgroundColor: 'var(--lightPink)',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundColor: 'var(--white)',
      height: '16.3125rem',
      position: 'absolute',
      bottom: '0',
      right: '0',
      left: '0',
    },
    '.subPara': {
      fontSize: '1.5rem',
      fontWeight: '300',
      lineHeight: '2.375rem',
      marginTop: '1.625rem',
    },
    '.Enhanceholder': {
      position: 'relative',
      zIndex: '11',
      marginTop: '2.5rem',
      '.slick-slider': {
        '.slick-list': {
          '.slick-track': {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '1.875rem',
            '.slick-slide': {
              border: '1px solid var(--primary)',
              minHeight: '32.0125rem',
              borderRadius: '.3125rem',
              padding: '1.25rem 1.875rem',
              backgroundColor: 'var(--white)',
              position: 'relative',
              '.carholder': {
                height: '100%',
                '.imgHolder': {
                  height: '20.8125rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  img: {
                    maxWidth: '100%',
                  },
                },

                '.textDetail': {
                  marginTop: '3.1775rem',
                  minHeight: '7.75rem',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'flex-start',
                  '.innerText': {
                    '.heading': {
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      lineHeight: '2.25rem',
                    },
                    '.desc': {
                      fontSize: '1.25rem',
                      fontWeight: '400',
                      lineHeight: '2.25rem',
                      marginTop: '1rem',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '.slick-dots': {
        bottom: '0',
      },
    },
  },
  Guide: {
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    padding: '2.4375rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media(max-Width: 640px)': {
      display: 'block',
      boxShadow: 'none',
    },
    '.carHolder': {
      width: '66.5625rem',
      '@media(max-Width: 640px)': {
        width: '100%',
      },
      img: {
        width: '100%',
        '@media(max-Width: 640px)': {
          position: 'relative',
          zIndex: '1',
          padding: '20px',
        },
      },
    },
    '.carText': {
      backgroundColor: 'var(--white)',
      width: ' 37.8125rem',
      right: '7.8rem',
      padding: '5.25rem 1.625rem 5rem 2.3125rem',
      borderRadius: '.625rem',
      position: 'absolute',
      textAlign: 'left',
      '@media(max-Width: 640px)': {
        width: '100%',
        textAlign: 'center',
        padding: '6.4rem 1.25rem 1.25rem 1.25rem',
        position: 'relative !important',
        right: '0',
        top: '-7rem',
        border: '1px solid var(--primary)',
      },
      '&::before': {
        content: '""',
        height: '100%',
        border: '1px solid var(--primary)',
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: 'calc(100% - 130px)',
        backgroundColor: 'var(--white)',
        borderTopLeftRadius: '.625rem',
        borderBottomLeftRadius: '.625rem',
        borderRightColor: 'var(--white)',
        '@media(max-Width: 640px)': {
          display: 'none',
        },
      },
      '.section-heading': {
        position: 'relative',
        textAlign: 'left',
        fontSize: '3rem',
        fontWeight: '700',
        lineHeight: '3.5625rem',
      },
      '.section-para': {
        position: 'relative',
        marginTop: '1.5rem',
        fontSize: '1.25rem',
        fontWeight: '400',
        lineHeight: '2.375rem',
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  Photography: {
    backgroundColor: 'var(--lightPink)',
    position: 'relative',

    '.subPara': {
      fontSize: '1.5rem',
      fontWeight: '300',
      lineHeight: '2.375rem',
      marginTop: '1.625rem',
    },
    '.photographyCove': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '2.75rem',
      marginTop: '2.125rem',
      '.photography': {
        backgroundColor: '#ECE0EACC',
        padding: '1.2375rem 2.9369rem',
        width: '50%',
        '.title': {
          fontSize: '1.5788rem',
          fontWeight: '700',
          lineHeight: '2.4006rem',
          textAlign: 'center',
          '@media(max-Width: 640px)': {
            fontSize: '1.125rem',
            lineHeight: '1.0219rem',
          },
          img: {
            '@media(max-Width: 640px)': {
              width: '1.1475rem',
            },
          },
        },
        '.subtitle': {
          fontSize: '.7894rem',
          fontWeight: '400',
          lineHeight: '1.4144rem',
          textAlign: 'center',
        },
        '&.photographyLeft': {
          '.photoBox': {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '3.9469rem',
            marginTop: '1.2925rem',
            '.item': {
              position: 'relative',
              width: '50%',
              img: {
                width: '100%',
                height: '100%',
              },
              '&.cross': {
                // border:".1644rem solid var(--error)",
              },
              '&.wright': {
                // border:".1644rem solid var(--success)",
              },
              '.crossIcon': {
                position: 'absolute',
                left: '-1.875rem',
                bottom: '-0.9375rem',
                width: '4.0625rem',
                top: 'unset',
                height: 'auto',
                '@media(max-Width: 640px)': {
                  width: '1rem',
                  left: '-6px',
                  bottom: '-7px',
                },
              },
              '.wrigthIcon': {
                position: 'absolute',
                left: '-1.875rem',
                bottom: '-0.9375rem',
                width: '4.0625rem',
                top: 'unset',
                height: 'auto',
                '@media(max-Width: 640px)': {
                  width: '1rem',
                  left: '-6px',
                  bottom: '-7px',
                },
              },
            },
          },
        },
        '&.photographyRight': {
          '.photoBox': {
            display: 'flex',
            justifyContent: 'center',
            rowGap: '1.2181rem',
            columnGap: '3.0337rem',
            marginTop: '1.2925rem',
            flexWrap: 'wrap',
            '.item': {
              position: 'relative',
              width: '50%',
              maxWidth: 'calc(50% -  1.6rem)',
              // height:"11.0412rem",
              img: {
                width: '100%',
                height: '100%',
              },
              '&.cross': {
                // border:".0994rem solid var(--white)",
              },
              '&.wright': {
                // border:".0994rem solid var(--white)",
              },
              '&.dotted': {
                // border:".0994rem dotted var(--pink)",
              },
              '.crossIcon': {
                position: 'absolute',
                left: '-1.275rem',
                bottom: '-0.9375rem',
                width: '2.86rem',
                top: 'unset',
                height: 'auto',
                '@media(max-Width: 640px)': {
                  width: '1rem',
                },
              },
              '.wrigthIcon': {
                position: 'absolute',
                left: '-1.275rem',
                bottom: '-0.9375rem',
                width: '2.86rem',
                top: 'unset',
                height: 'auto',
                '@media(max-Width: 640px)': {
                  width: '1.125rem',
                  left: '-0.5625rem',
                  bottom: '-0.4375rem',
                },
              },
            },
          },
        },
      },
      '&.recommendedsection': {
        '.slick-dots': {
          textAlign: 'left',
          bottom: '2.5rem',
        },
      },
    },
  },
  FAQS: {
    '.faqs': {
      marginTop: '3.4375rem',
      '.MuiAccordion-root': {
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        backgroundColor: 'var(--greyE7E7)',
        marginBottom: '1rem',
        borderRadius: '.625rem',
        '&::before': {
          display: 'none',
        },

        '&.Mui-expanded': {
          '.MuiCollapse-entered': {
            borderBottomColor: 'rgba(0, 0, 0, 0.1)',
            '.MuiCollapse-wrapper': {
              '.MuiCollapse-wrapperInner': {
                '.MuiAccordion-region': {
                  '.MuiAccordionDetails-root': {
                    paddingTop: '1rem',
                  },
                },
              },
            },
          },
        },
        '.MuiAccordion-heading': {
          '.MuiButtonBase-root': {
            '.MuiAccordionSummary-content': {
              margin: '2rem 0',
              fontSize: '1.5rem',
              fontWeight: '700',
              lineHeight: '2.5rem',
            },
            padding: '0 1.625rem',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            // minHeight:"6.5625rem",
          },
        },
      },
    },
  },
  Form: {
    backgroundColor: '#F0E6EE',
    padding: '3.5rem 0',
    '.formholder': {
      display: 'flex',
      justifyContent: 'space-between',
      '@media(max-Width: 640px)': {
        flexWrap: 'wrap',
      },
      '.left': {
        width: '50%',
        textAlign: 'left',
        paddingRight: '12.5rem',
        '@media(max-Width: 640px)': {
          width: '100%',
          paddingRight: '0',
        },
        '.section-heading': {
          fontSize: '2rem ',
          fontWeight: '700 !important',
          lineHeight: '2.875rem !important',
          textAlign: 'left !important',
        },
        '.para': {
          fontSize: '1.5rem',
          fontWeight: '400',
          lineHeight: '1.92rem',
          marginTop: '1.5rem',
        },
      },
      '.right': {
        width: '50%',
        display: 'grid',
        rowGap: '.625rem',
        columnGap: '.625rem',
        height: '12.375rem',
        '@media(max-Width: 640px)': {
          width: '100%',
          paddingRight: '0',
          marginTop: '1rem',
        },
        // "&:nth-last-child(2)": {
        //   width: "100%",
        // },
        '.MuiInputBase-root': {
          backgroundColor: 'var(--white)',
          borderRadius: '.4375rem',
          padding: '1.375rem 1.25rem',
          '@media(max-Width: 640px)': {
            padding: '0.275rem 1.25rem',
          },
          '&::before': {
            borderBottomColor: 'transparent',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--white)',
            boxShadow: 'none',
          },
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--primary)',
              boxShadow: 'none',
            },
          },
        },
        '.MuiFormControl-root': {
          width: '100%',

          '.MuiFormLabel-root': {
            '&.Mui-focused': {
              color: 'var(--primary)',
            },
          },
        },
        '.item': {
          width: '100%',
          '&:last-child': {
            width: '100%',
          },
          '&:nth-last-child(2)': {
            width: '100%',
          },
          '.MuiFormControl-root': {
            width: '100%',
            '.MuiInputBase-root': {
              backgroundColor: 'var(--white)',
              borderRadius: '.4375rem',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--white)',
                boxShadow: 'none',
              },
              '&.Mui-focused': {
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--primary)',
                  boxShadow: 'none',
                },
              },
            },
            '.MuiFormLabel-root': {
              '&.Mui-focused': {
                color: 'var(--primary)',
              },
            },
          },
        },
      },
    },
  },
  tipTop: {
    backgroundColor: 'var(--white)',
    padding: '3.125rem 0 5.25rem 0',
    //minHeight:"64.5rem",
    '.carholder': {
      '.title': {
        fontSize: '3rem',
        fontWeight: '700',
        lineHeight: '4.5625rem',
        color: 'var(--primary)',
        marginBottom: '1.75rem',
        '@media(max-Width: 640px)': {
          fontSize: '1.125rem',
          lineHeight: '1.0219rem',
        },
      },
      '.para': {
        fontSize: '1.5rem',
        fontWeight: '400',
        lineHeight: '2.6875rem',
        '@media(max-Width: 640px)': {
          fontSize: '.75rem',
          lineHeight: '.8125rem',
        },
      },
    },
    '.slick-list': {
      '.slick-track': {
        '.slick-slide': {
          position: 'relative',
          minHeight: '30.4375rem',
          '@media(max-Width: 640px)': {
            minHeight: 'auto',
          },
        },
      },
    },
    '.slick-arrow': {
      width: '3.9375rem',
      height: '3.9375rem',
      boxShadow: '0px 0px 4px 0px #00000040',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#5F0052',
      '@media(max-Width: 640px)': {
        width: '1.1475rem',
        height: '1.1475rem',
        backgroundSize: '36% !important',
        top: '114% !important',
      },
      '&.slick-prev': {
        left: '51%',
        top: '100%',
        backgroundImage: `url(${Utility.toStaticImageUrl(
          '/images/icons/rightarrowwhite.svg'
        )})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        '&::before': {
          display: 'none',
        },
      },
      '&.slick-next': {
        right: '51%',
        top: '100%',
        backgroundImage: `url(${Utility.toStaticImageUrl(
          '/images/icons/leftarrowwhite.svg'
        )})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        '&::before': {
          display: 'none',
        },
      },
      '&.slick-disabled': {
        opacity: '0.2',
      },
    },
    '.container': {
      height: '100%',
    },
  },
};
