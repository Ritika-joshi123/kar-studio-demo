export const footerStyles = {
  footer: {
    backgroundColor: 'var(--primary)',
    '.topfooter': {
      padding: '3.9375rem 0 4.75rem 0',
      '@media(max-Width: 1170px)': {
        padding: '2rem 0 2rem 0',
      },
      // "@media(max-Width: 991px)": {
      //   padding: "4rem 0",
      // },
      '.innerfooter': {
        display: 'flex',
        '@media(max-Width: 1280px)': {
          flexWrap: 'wrap',
        },
        '@media(max-Width: 991px)': {
          flexWrap: 'wrap',
        },
        '@media(max-Width: 767px)': {
          flexWrap: 'wrap',
        },
        '@media(max-Width: 599px)': {
          flexWrap: 'wrap',
        },
        '@media(max-Width: 320px)': {
          flexWrap: 'wrap',
        },
        '.footeritem': {
          paddingLeft: '11.875rem',
          '@media(max-Width: 1680px)': {
            paddingLeft: '3.1875rem',
          },
          '@media(max-Width: 1280px)': {
            paddingLeft: '3rem',
          },
          '@media(max-Width: 767px)': {
            paddingLeft: '2rem',
          },
          '@media(max-Width: 599px)': {
            paddingLeft: '2rem',
          },
          '@media(max-Width: 320px)': {
            paddingLeft: '2rem',
          },

          '&:first-child': {
            width: '100%',
            minWidth: '25.5rem',
            paddingRight: '0',
            paddingLeft: '0',
            '.MuiTypography-root': {
              marginTop: '2.32rem',
              '@media(max-Width: 1680px)': {
                marginTop: '1rem',
                fontSize: '0.95rem',
                lineHeight: '2.1363rem',
              },
              '@media(max-Width: 1280px)': {
                marginBottom: '2rem',
              },
              '@media(max-Width: 991px)': {
                marginBottom: '2rem',
              },
              '@media(max-Width: 767px)': {
                marginBottom: '2rem',
              },
              '@media(max-Width: 599px)': {
                marginBottom: '2rem',
              },
              '@media(max-Width: 320px)': {
                marginBottom: '2rem',
              },
            },
          },
          '&:nth-child(2)': {
            paddingLeft: '16.1875rem',
            '@media(max-Width: 1680px)': {
              paddingLeft: '3.1875rem',
            },
            '@media(max-Width: 1280px)': {
              paddingLeft: '0',
            },
            '@media(max-Width: 991px)': {
              paddingLeft: '0',
            },
            '@media(max-Width: 767px)': {
              paddingLeft: '0',
            },
            '@media(max-Width: 599px)': {
              paddingLeft: '0',
            },
            '@media(max-Width: 320px)': {
              paddingLeft: '0',
            },
          },
          '&:last-child': {
            paddingLeft: '9.3125rem',
            '@media(max-Width: 1680px)': {
              paddingLeft: '3.1875rem',
            },
            '@media(max-Width: 1280px)': {
              paddingLeft: '3rem',
            },
          },
          '.MuiTypography-root': {
            fontSize: '1.25rem',
            lineHeight: '2.3125rem',
            fontWeight: '500',
            color: 'var(--white)',
          },
          '.title': {
            fontSize: '1.5rem',
            lineHeight: '2.5rem',
            fontWeight: '700',
            color: 'var(--white)',
            whiteSpace: 'pre',
            '@media(max-Width: 640px)': {
              fontSize: '1.125rem',
              lineHeight: '1.0219rem',
            },
          },

          '.menuFooter': {
            '.MuiMenuItem-root': {
              textDecoration: 'none',
              listStyle: 'none',
              padding: '0',
              '.MuiLink-root': {
                fontSize: '1.125rem',
                lineHeight: '2.5rem',
                fontWeight: '400',
                color: 'var(--white)',
                textDecoration: 'none',
                '@media(max-Width: 1680px)': {
                  fontSize: '0.95rem',
                  lineHeight: '2.1363rem',
                },
                '@media(max-Width: 767px)': {
                  fontSize: '1.125rem',
                  lineHeight: '2.5rem',
                },
              },
            },
          },
          '&.addres': {
            fontSize: '1.25rem',
            lineHeight: '1.4363rem',
            fontWeight: '400',
            color: 'var(--white)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '.875rem',
            width: '19.7375rem',
            minWidth: '27.7375rem',
            '@media(max-Width: 1680px)': {
              fontSize: '0.95rem',
              lineHeight: '1.4363rem',
            },
            '@media(max-Width: 1280px)': {
              width: '100%',
              justifyContent: 'flex-start',
              paddingLeft: '0',
              marginTop: '2rem',
            },
            '@media(max-Width: 991px)': {
              paddingLeft: '0',
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
            },
            '@media(max-Width: 767px)': {
              paddingLeft: '0',
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
            },
            '@media(max-Width: 599px)': {
              paddingLeft: '0',
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
            },
            '@media(max-Width: 320px)': {
              paddingLeft: '0',
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
            },
          },
        },
      },
    },
    '.bottomfooter': {
      // height:"8.125rem",
      padding: '2.8125rem 0 2.9375rem 0',
      borderTop: '1px solid var(--white)',
      '@media(max-Width: 1680px)': {
        padding: '2.8125rem 0 2.9375rem 0',
      },
      '@media(max-Width: 1170px)': {
        padding: '0.8125rem 0 0.8125rem 0',
      },
      '.Innerbottomfooter': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '.MuiTypography-root': {
          fontSize: '1.25rem',
          lineHeight: '2.3125rem',
          fontWeight: '500',
          color: 'var(--white)',
          '@media(max-Width: 1680px)': {
            fontSize: '0.95rem',
            lineHeight: '2.1363rem',
          },
        },
        '.social_icon': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          gap: '2rem',
        },
      },
    },
  },
};
