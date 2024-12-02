const plansStyles = {
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
};
export default plansStyles;
