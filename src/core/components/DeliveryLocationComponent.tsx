import React from "react";

type Props = {
  closeLocation: (value: boolean) => void;
};

const DeliveryLocationComponent: React.FC<Props> = ({ closeLocation }) => {
  const closeLocationModal = (value: boolean) => {
    closeLocation(value);
  };
  const backdropClick = (e: any) => {
    if (e?.target?.className === "location-modal") {
      closeLocation(false);
    }
  };

  return (
    <div className="location-modal" onClick={(e) => backdropClick(e)}>
      <div className="location-modal-content">
        <div className="location-modal-header">
          <span className="location-header-title">
            Select delivery location
          </span>
          <button
            className="icon-close-icon"
            onClick={() => closeLocationModal(false)}
          />
        </div>
        <div className="search-bar-section">
          <span className="icon-search"></span>
          <input
            type="text"
            className="search-input"
            placeholder="Valsad"
            autoFocus
          />
        </div>
        <div className="detect-location">
          <div>
            <span className="icon-location"></span>
            <span className="location-placeholder-text">
              Detect current location
            </span>
          </div>
          <p className="gps-text">Using GPS</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocationComponent;
