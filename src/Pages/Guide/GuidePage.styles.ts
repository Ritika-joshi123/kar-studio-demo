import { Utility } from '../../Shared';

const guidePageStyles = {
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
      },
      '.para': {
        fontSize: '1.5rem',
        fontWeight: '400',
        lineHeight: '2.6875rem',
      },
    },
    '.slick-list': {
      '.slick-track': {
        '.slick-slide': {
          position: 'relative',
          minHeight: '30.4375rem',
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
      '&.slick-prev': {
        left: '51%',
        top: '100%',
        backgroundImage: `url(${Utility.toStaticImageUrl(
          '/images/icons/rightarrow.svg'
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
          '/images/icons/leftarrow.svg'
        )})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        '&::before': {
          display: 'none',
        },
      },
    },
    '.container': {
      height: '100%',
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
        backgroundColor: '#ECE0EA',
        padding: '1.2375rem 2.9369rem',
        width: '50%',
        '.title': {
          fontSize: '1.5788rem',
          fontWeight: '700',
          lineHeight: '2.4006rem',
          textAlign: 'center',
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
              },
              '.wrigthIcon': {
                position: 'absolute',
                left: '-1.875rem',
                bottom: '-0.9375rem',
                width: '4.0625rem',
                top: 'unset',
                height: 'auto',
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
              },
              '.wrigthIcon': {
                position: 'absolute',
                left: '-1.275rem',
                bottom: '-0.9375rem',
                width: '2.86rem',
                top: 'unset',
                height: 'auto',
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
};

export default guidePageStyles;
