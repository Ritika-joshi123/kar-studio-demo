import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudUploadIcon } from '../../Components';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import { styles } from './CreateProject.styles';
import { S3FilesService, uploadImagesV2 } from '../../Services';
import { OverlayLoader } from '../../Shared';
import PlateImageSelector from './Components/PlateImageSelector';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

var settings = {
  dots: false,
  arrows: true,
  autoplay: false,
  infinite: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: true,
  // prevArrow: <img src="images/icons/leftarrow.svg" alt="prev" />,
  // nextArrow: <img src="images/icons/rightarrow.svg" alt="next" />,
  responsive: [
    {
      breakpoint: 1172,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CreateProject: FC = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]);
  const [isUploadingImages, setIsUploadingImages] = useState<boolean>(false);
  const [imagesUploaded, setImagesUploaded] = useState<boolean>(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);
  const [showPlateModal, setShowPlateModal] = useState<boolean>(false);

  const getCurrentDate = () => {
    const date = new Date();

    // Get day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Pads single digit days with leading zero
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const onImageSelected = (images: FileList | null) => {
    if (images && images.length > 0) {
      setSelectedImages(images ? Array.from(images) : []);
    }
  };

  const removeSelectedImage = (index: number) => {
    const updatedArray = [...selectedImages];
    updatedArray.splice(index, 1);

    setSelectedImages([...updatedArray]);
  };

  const processImages = async (imageUrls: string[], plateImageUrl?: string) => {
    try {
      const { data } = await uploadImagesV2(imageUrls, plateImageUrl);
      const { afterStudioImages } = data.return;

      setUploadedImageUrls(afterStudioImages.map((x) => x.imageUrl));
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsUploadingImages(false);
    }
  };

  const onClickAddImage = async () => {
    if (selectedImages.length <= 0) {
      return;
    }

    setShowPlateModal(true);
  };

  const onLicensePlateSelect = async (plateImage: File | null) => {
    setIsUploadingImages(true);

    // Car Images Upload
    const files = Array.from(selectedImages);
    const uploadPromises = files.map((file) => S3FilesService.upload(file));
    const uploadedUrls = await Promise.all(uploadPromises);
    const filteredUrls = uploadedUrls.filter((url) => url !== null);

    let plateImageUrl: string | undefined = undefined;

    if (plateImage) {
      plateImageUrl = (await S3FilesService.upload(plateImage)) ?? undefined;
    }

    setImagesUploaded(true);
    setUploadedImageUrls(filteredUrls as string[]);
    setShowPlateModal(false);
    processImages(filteredUrls as string[], plateImageUrl);
  };

  const renderSelectedImages = useMemo(() => {
    const images = imagesUploaded
      ? uploadedImageUrls
      : selectedImages.map((x) => URL.createObjectURL(x));

    return images.map((x, i) => (
      <div
        key={x}
        className="pic-img"
        onClick={(e) => imagesUploaded && setSelectedImgIndex(i)}
      >
        <img alt="test" loading="lazy" src={x} />
        {!imagesUploaded && (
          <button onClick={() => removeSelectedImage(i)}>
            <i className="cross-icon" style={{ cursor: 'pointer' }}></i>
          </button>
        )}
      </div>
    ));
  }, [selectedImages, uploadedImageUrls, imagesUploaded]);

  return (
    <>
      {isUploadingImages && <OverlayLoader />}
      {showPlateModal && (
        <PlateImageSelector
          close={() => setShowPlateModal(false)}
          onConfirm={onLicensePlateSelect}
        />
      )}

      <Box className="container">
        <Box className="editor-holder" sx={styles.editorHolder}>
          <Box className="left-editor">
            <Box
              sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box className="innerbtn">
                <Button
                  onClick={() => navigate('/editor')}
                  className="addImage"
                >
                  Return to Projects
                </Button>

                {selectedImages.length > 0 && (
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      lineHeight: '1.4363rem',
                      fontWeight: '500',
                      color: 'rgba(0, 0, 0, 0.5)',
                      whiteSpace: 'pre',
                    }}
                  >
                    {getCurrentDate()} - {selectedImages.length} Upload
                  </Typography>
                )}
              </Box>
              {selectedImages.length > 0 ? (
                <Button
                  className="addImage"
                  onClick={onClickAddImage}
                  style={{ marginLeft: '85px', padding: '1rem 1.75rem' }}
                >
                  Add Image
                </Button>
              ) : (
                <Typography
                  sx={{ marginLeft: '85px', padding: '1rem 12.50rem' }}
                ></Typography>
              )}
            </Box>

            <Box className="file-upload">
              {uploadedImageUrls.length > 0 ? (
                <img
                  src={uploadedImageUrls[selectedImgIndex]}
                  alt="Uploaded Preview"
                  style={{
                    width: '824px',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                // uploadedImageUrls.map((x) => (
                //   <img
                //     src={x}
                //     //src={finalImage[activeIndex]}
                //     alt="Uploaded Preview"
                //     style={{
                //       width: '824px',
                //       height: 'auto',
                //       objectFit: 'contain',
                //     }}
                //   />
                // ))
                <Button
                  style={{ paddingTop: '50px' }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon style={{ marginTop: '80px' }} />}
                >
                  Drag and drop images here
                  <span>New</span>
                  <span className="browse" style={{ marginBottom: '112px' }}>
                    BROWSE FILES
                  </span>
                  <VisuallyHiddenInput
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={(event: any) =>
                      onImageSelected(event.target.files)
                    }
                  />
                </Button>
              )}
            </Box>

            {renderSelectedImages.length > 0 && (
              <div className="pic-slider">
                <Slider
                  {...{
                    ...settings, // Base settings
                    slidesToScroll: selectedImages.length > 1 ? 1 : 0, // Disable infinite scrolling if only one image
                  }}
                >
                  {renderSelectedImages}
                  <div className="pic-img"></div>
                </Slider>
              </div>
            )}
          </Box>
          <Box className="right-editor">
            <Accordion defaultExpanded>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Background Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="images-holder">
                  <Box className="iteam addplus">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.9998 18.4999H23.5001V2.99987C23.5001 1.61995 22.38 0.5 20.9998 0.5C19.62 0.5 18.4999 1.62001 18.4999 2.99987V18.4999H2.99987C1.62001 18.4999 0.5 19.62 0.5 20.9998C0.5 22.38 1.61995 23.5001 2.99987 23.5001H18.4999V38.9998C18.4999 40.3799 19.6199 41.5 20.9998 41.5C22.38 41.5 23.5001 40.38 23.5001 38.9998V23.5001H38.9998C40.38 23.5001 41.5 22.38 41.5 20.9998C41.5 19.6199 40.3799 18.4999 38.9998 18.4999Z"
                        fill="black"
                        stroke="white"
                      />
                    </svg>
                    <Typography>Add New</Typography>
                  </Box>
                  <Box className="iteam">
                    <img
                      //   onClick={() => {
                      //     setSelectedBanner(
                      //       'https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner1.jpg'
                      //     );
                      //     setBannerIndex(0);
                      //   }}
                      //className={bannerIndex === 0 ? 'active' : ''}
                      alt="test"
                      src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner1.jpg"
                    />
                  </Box>
                  <Box
                    // onClick={() => {
                    //   setSelectedBanner(
                    //     'https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner2.jpg'
                    //   );
                    //   setBannerIndex(1);
                    // }}
                    className="iteam"
                  >
                    <img
                      //className={bannerIndex === 1 ? 'active' : ''}
                      alt="test"
                      src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner2.jpg"
                    />
                  </Box>
                  <Box
                    // onClick={() => {
                    //   setSelectedBanner(
                    //     'https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner3.jpg'
                    //   );
                    //   setBannerIndex(2);
                    // }}
                    className="iteam"
                  >
                    <img
                      //className={bannerIndex === 2 ? 'active' : ''}
                      alt="test"
                      src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner3.jpg"
                    />
                  </Box>
                  <Box
                    // onClick={() => {
                    //   setSelectedBanner(
                    //     'https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner4.jpg'
                    //   );
                    //   setBannerIndex(3);
                    // }}
                    className="iteam"
                  >
                    <img
                      //className={bannerIndex === 3 ? 'active' : ''}
                      alt="test"
                      src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner4.jpg"
                    />
                  </Box>
                  <Box
                    // onClick={() => {
                    //   setSelectedBanner(
                    //     'https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner5.jpg'
                    //   );
                    //   setBannerIndex(4);
                    // }}
                    className="iteam"
                  >
                    <img
                      //className={bannerIndex === 4 ? 'active' : ''}
                      alt="test"
                      src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner5.jpg"
                    />
                  </Box>
                </Box>
                <Box className="option">
                  <FormControlLabel
                    required
                    control={<Checkbox checked={true} />}
                    label="Apply to all"
                  />
                  <Button className="next">NEXT: STUDIO SETTINGS</Button>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Studio Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Additional Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Box className="" sx={{ width: '50%', paddingRight: '15px' }}>
                <button
                  // onClick={() =>
                  //   downloadImage(finalImage[activeIndex], 'Karstudio.jpg')
                  // }
                  className="btn-line"
                  style={{ width: '100% ', cursor: 'pointer' }}
                >
                  DOWNLOAD SELECTED
                </button>
              </Box>

              <Box className="" sx={{ width: '50%', paddingLeft: '15px' }}>
                <button
                  //onClick={() => downloadAllImages(finalImage)}
                  className="btn"
                  style={{ width: '100% ', cursor: 'pointer' }}
                >
                  Download All Images
                </button>
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: 10 }}></Box>
    </>
  );
};

export default CreateProject;
