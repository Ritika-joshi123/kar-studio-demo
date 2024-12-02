import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { ArrowDown } from '../../../Components';
import { dashboardStyles } from '../Dashboard.styles';

const FAQ: FC = () => {
  return (
    <Box className="common-section" sx={dashboardStyles.FAQS}>
      <Box className="container">
        <Typography
          className="section-heading questions"
          variant="h2"
          sx={{ whiteSpace: 'normal' }}
        >
          Frequently Asked <span>Questions</span> about <span>KarStudio</span>
        </Typography>
        <Box className="faqs">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How much should I charge for a kar photoshoot?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              How to take professional photos of kars?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Do car photographers make money?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              How to photograph a luxury kar studio?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
