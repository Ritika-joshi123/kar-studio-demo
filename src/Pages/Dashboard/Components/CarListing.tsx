import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Slider from "react-slick";
import { dashboardStyles } from "../Dashboard.styles";

var sliderSettings = {
  dots: false,
  arrows: true,
  autoplay: false,
  infinite: true,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  slidesToScroll: 2,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1172,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      arrows: true,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const CarListing: FC = () => {
  return (
    <Box className="common-section">
      <Box className="container">
        <Typography
          style={{ whiteSpace: "break-spaces" }}
          className="section-heading"
          variant="h2"
        >
          Transform Your {""}
          <span>Car Listings</span> with <span>AI-Enhanced Photos!</span>
        </Typography>
        <Box sx={dashboardStyles.CarListing}>
          <Box className="coverCarlisting">
            <Box className="CarListingOption">
              <Typography className="option before">Before</Typography>
              <Typography className="option before">After</Typography>
            </Box>
            <Slider {...sliderSettings}>
              <div className="carholder">
                <img loading="lazy" alt="test" src="images/before.svg" />
              </div>
              <div className="carholder">
                <img loading="lazy" alt="test" src="images/after.svg" />
              </div>
              <div className="carholder">
                <img loading="lazy" alt="test" src="images/before1.svg" />
              </div>
              <div className="carholder">
                <img loading="lazy" alt="test" src="images/after1.svg" />
              </div>
              <div className="carholder">
                <img loading="lazy" alt="test" src="images/before2.svg" />
              </div>
              <div className="carholder">
                <img loading="lazy" alt="test" src="images/after2.svg" />
              </div>
              <div className="carholder">
                <img loading="lazy" alt="test" src="images/before3.svg" />
              </div>
              <div className="carholder">
                <img loading="lazy" alt="test" src="images/after3.svg" />
              </div>
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarListing;
