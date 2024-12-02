import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';
import Slider from 'react-slick';
import { FC } from 'react';
import { ArrowDown } from '../../Components';
import plansStyles from './Plans.styles';

var reviewSettings = {
  dots: true,
  arrows: true,
  autoplay: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

var upgradeSettings = {
  dots: false,
  arrows: false,
  autoplay: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Plans: FC = () => {
  return (
    <>
      <section className="plans-sec">
        <div className="container">
          <div className="title">
            <h1>Upgrade to Enhance Your Car Listing</h1>
            <p>Boost Visibility and attract more buyers.</p>
          </div>

          <div className="plan-row">
            <div className="">
              <div className="plan-card">
                <p className="h5">Starter</p>
                <h2> $4.99</h2>
                <p>per membership</p>

                <ul>
                  <li>05 Number of Images</li>
                  <li>Featured Vehicle </li>
                  <li>30 Days Duration of Featuring Listing</li>
                  <li>Email Notifications </li>
                  <li>SMS Notifications </li>
                  <li>Newly Listed Badge </li>
                  <li>Insurance Deals</li>
                  <li>Get Offers from Our Partners</li>
                  <li>Personalized Customer Support </li>
                </ul>

                <button className="btn-blue">Upgrade Now plan</button>
              </div>
            </div>

            <div className="">
              <div className="plan-card">
                <p className="h5">
                  $7.99 <span style={{ fontSize: '14px' }}>Best Offer</span>
                </p>
                <h2>$7.99</h2>
                <p>per membership</p>

                <ul>
                  <li>10 Number of Images</li>
                  <li>Featured Vehicle </li>
                  <li>60 Days Duration of Featuring Listing</li>
                  <li>Email Notifications </li>
                  <li>SMS Notifications </li>
                  <li>Newly Listed Badge </li>
                  <li>Insurance Deals</li>
                  <li>Get Offers from Our Partners</li>
                  <li>Personalized Customer Support </li>
                </ul>

                <button className="btn-blue">Upgrade Now plan</button>
              </div>
            </div>

            <div className="">
              <div className="plan-card">
                <p className="h5">
                  $9.99 <span style={{ fontSize: '14px' }}>Best Offer</span>
                </p>
                <h2> $9.99</h2>
                <p>per membership</p>

                <ul>
                  <li>15 Number of Images</li>
                  <li>Featured Vehicle </li>
                  <li>60 Days Duration of Featuring Listing</li>
                  <li>Email Notifications </li>
                  <li>SMS Notifications </li>
                  <li>Newly Listed Badge </li>
                  <li>Insurance Deals</li>
                  <li>Get Offers from Our Partners</li>
                  <li>Personalized Customer Support </li>
                </ul>

                <button className="btn-blue">Upgrade Now plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="upgrade-sec">
        <div className="container">
          <h2>Upgrade your Listing Today and Experience the Difference</h2>

          <div className="">
            <Slider {...upgradeSettings}>
              <div className="up-card">
                <div className="icon">
                  <i className="hand-icon"></i>
                </div>
                <p className="h5">Capture Buyers Attention</p>
                <p>
                  Adding more images to your listing can significantly attract
                  buyers. High-quality photos enhance trust and interest in your
                  car.
                </p>
              </div>
              <div className="up-card">
                <div className="icon">
                  <i className="hand-icon"></i>
                </div>
                <p className="h5">Featured Vehicle Listing</p>
                <p>
                  Make your car listing stand out with our featured vehicle
                  option! Gain increased attention, enhanced visibility, and
                  quicker results.
                </p>
              </div>
              <div className="up-card">
                <div className="icon">
                  <i className="hand-icon"></i>
                </div>
                <p className="h5">Get Notified Instantly</p>
                <p>
                  Maximize your chances of selling your vehicle quickly by
                  upgrading to a featured listing.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="card-sec">
        <div className="container">
          <h2 className="kar-acc">
            KarStudio Accepts All Major Payment Methods
          </h2>

          <div className="card-icons">
            <figure>
              <img width="164" alt="icon" src="images/visa.svg" />
            </figure>
            <figure>
              <img width="120" alt="icon" src="images/master.png" />
            </figure>
            <figure>
              <img width="135" alt="icon" src="images/aex.png" />
            </figure>
            <figure>
              <img width="135" alt="icon" src="images/discover.png" />
            </figure>
            <figure>
              <img width="235" alt="icon" src="images/paypal.png" />
            </figure>
            <figure>
              <img width="224" alt="icon" src="images/venmo.png" />
            </figure>
          </div>
        </div>
      </section>

      <section className="review-sec">
        <div className="container">
          <h2>
            What Our Valued Customers Are Saying About Our Products and Services
          </h2>

          <div className="review-slider">
            <Slider {...reviewSettings}>
              <div className="review-card">
                <div className="review-top">
                  <div className="top">
                    <figure>
                      <img width="164" alt="icon" src="images/review2.png" />
                    </figure>
                    <div className="text">
                      <p className="h5">Sarah L</p>
                      <p>Lead Designer</p>
                    </div>
                  </div>

                  <div className="stars">
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-line-icon"></i>
                  </div>
                </div>

                <div className="text">
                  <p className="h5">It was a very good experience</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu.
                  </p>
                </div>
              </div>

              <div className="review-card">
                <div className="review-top">
                  <div className="top">
                    <figure>
                      <img width="164" alt="icon" src="images/review1.png" />
                    </figure>
                    <div className="text">
                      <p className="h5">Devid</p>
                      <p>Lead Designer</p>
                    </div>
                  </div>

                  <div className="stars">
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-line-icon"></i>
                  </div>
                </div>

                <div className="text">
                  <p className="h5">It was a very good experience</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu.
                  </p>
                </div>
              </div>

              <div className="review-card">
                <div className="review-top">
                  <div className="top">
                    <figure>
                      <img width="164" alt="icon" src="images/review3.png" />
                    </figure>
                    <div className="text">
                      <p className="h5">John</p>
                      <p>Lead Designer</p>
                    </div>
                  </div>

                  <div className="stars">
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-line-icon"></i>
                  </div>
                </div>

                <div className="text">
                  <p className="h5">It was a very good experience</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <Box className="common-section" sx={plansStyles.FAQS}>
        <Box className="container">
          <Typography
            className="section-heading"
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
          <Box>
            <Typography className="still-ques car-acc">
              Still have questions? Our team of professionals will be able to
              help you.{' '}
              <b>
                <u>Contact Us</u>
              </b>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Plans;
