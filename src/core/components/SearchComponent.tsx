import React from "react";

type Props = {
  closeSearch: (value: boolean) => void;
  openLocation: (value: boolean) => void;
};

const SearchComponent: React.FC<Props> = ({ closeSearch, openLocation }) => {
  const closeSearchModal = (value: boolean) => {
    closeSearch(value);
  };
  const backdropClick = (e: any) => {
    if (e?.target?.className === "modal") {
      closeSearch(false);
    }
  };

  const openLocationModal = (value: boolean) => {
    closeSearch(false);
    openLocation(true);
  };

  return (
    <div className="modal" onClick={(e) => backdropClick(e)}>
      <div className="modal-search-content">
        <div
          className="d-flex align-items-center mt-16"
          onClick={() => openLocationModal(true)}
        >
          <span className="title-search">Valsad</span>
          <span className="icon-down-arrow-fill"></span>
          <button
            className="icon-close"
            onClick={() => closeSearchModal(false)}
          />
        </div>
        <div className="d-flex search-bar-container">
          <span className="icon-search"></span>
          <input type="text" className="input-search" autoFocus />
          <span className="label-search">
            Search for restaurant, cuisine or a dish
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
