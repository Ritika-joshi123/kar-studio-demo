import { FC, useRef, useState } from 'react';
import { useSnackBar } from '../../../Shared';

interface Props {
  close: () => void;
  onConfirm: (file: File | null) => void;
}

const PlateImageSelector: FC<Props> = ({ close, ...rest }) => {
  const { showSnackBar } = useSnackBar();
  const [plateOption, setPlateOption] = useState('keep');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlateOption(e.target.value);
  };

  const handleAddLogoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onImageSelect = (fileList: FileList | null): void => {
    if (!fileList) {
      return;
    }

    const files = Array.from(fileList);

    if (files.length <= 0) {
      return;
    }

    setSelectedImage(files[0]);
  };

  const onConfirm = () => {
    if (plateOption === 'remove' && !selectedImage) {
      showSnackBar('Please Select License Plate', 'error');
      return;
    }

    rest.onConfirm(selectedImage);
  };

  return (
    <div id="license-popup" className="popup-container">
      <div className="popup">
        <h2>Would you like to remove the license plate?</h2>
        <p>
          Add your logo to be placed in the license plate area, or proceed
          without selecting.
        </p>

        <div className="image-container">
          <img
            src="/images/plate.svg"
            alt="Car Outline"
            className="car-image"
          />
        </div>

        <form>
          <div className="radios">
            <div className="radio">
              <input
                type="radio"
                id="keep-plate"
                name="plate-option"
                value="keep"
                checked={plateOption === 'keep'}
                onChange={handleRadioChange}
              />
              <label htmlFor="keep-plate">
                <span>Keep the license plate</span>
              </label>
            </div>

            <div className="radio">
              <input
                type="radio"
                id="remove-add-logo"
                name="plate-option"
                value="remove"
                checked={plateOption === 'remove'}
                onChange={handleRadioChange}
              />
              <label htmlFor="remove-add-logo">
                <span>Remove and add logo</span>
              </label>
            </div>
          </div>

          <div className="logo-upload">
            <label htmlFor="logo-upload">Your Logos</label>
            <div className="upload-btn">
              <button
                type="button"
                className="add-logo-btn"
                disabled={plateOption === 'keep'}
                onClick={handleAddLogoClick}
              >
                + Add New
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => onImageSelect(event.target.files)}
              />
            </div>
          </div>

          <div className="popup-buttons">
            <button
              onClick={close}
              type="button"
              className="cancel-btn btn-line"
            >
              CANCEL
            </button>
            <button
              type="button"
              className="confirm-btn btn"
              onClick={onConfirm}
            >
              CONFIRM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlateImageSelector;
