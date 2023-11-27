import React from "react";

type Props = {
  closeLocation: (value: boolean) => void;
};

const DeliveryLocationComponent: React.FC<Props> = ({ closeLocation }) => {
  const closeLocationModal = (value: boolean) => {
    closeLocation(value);
  };
  const backdropClick = (e: any) => {
    if (e?.target?.className === "modal") {
      closeLocation(false);
    }
  };

  return (
    <div className="modal" onClick={(e) => backdropClick(e)}>
      <div className="modal-location-content">
        <div className="d-flex align-items-center justify-content-between">
          <span className="title-location">Select delivery location</span>
          <button
            className="icon-close"
            onClick={() => closeLocationModal(false)}
          />
        </div>
        <div className="d-flex search-bar-container">
          <span className="icon-search"></span>
          <input
            type="text"
            className="input-search"
            placeholder="Valsad"
            autoFocus
          />
        </div>
        <div className="location-area">
          <div>
            <span className="icon-location"></span>
            <span className="text-location-placeholder">
              Detect current location
            </span>
          </div>
          <p className="text-gps">Using GPS</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocationComponent;
