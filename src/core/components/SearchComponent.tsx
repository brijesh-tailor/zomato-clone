import React, { useState } from "react";

type Props = {
  closeSearch: (value: boolean) => void;
  openLocation: (value: boolean) => void;
};

const SearchComponent: React.FC<Props> = ({ closeSearch, openLocation }) => {
  const [placeholder, setPlaceholder] = useState<boolean>(false);

  const closeSearchModal = (value: boolean) => {
    closeSearch(value);
  };
  const backdropClick = (e: any) => {
    if (e?.target?.className === "search-modal") {
      closeSearch(false);
    }
  };

  const onInputBlur = (value: boolean) => {
    setPlaceholder(value);
  };

  const onInputClick = (value: boolean) => {
    setPlaceholder(value);
  };

  const openLocationModal = (value: boolean) => {
    closeSearch(false);
    openLocation(true);
  };

  return (
    <div className="search-modal" onClick={(e) => backdropClick(e)}>
      <div className="search-modal-content">
        <div
          className="search-modal-header"
          onClick={() => openLocationModal(true)}
        >
          <span className="search-header-title">Valsad</span>
          <span className="icon-down-arrow-fill"></span>
          <button
            className="icon-close-icon"
            onClick={() => closeSearchModal(false)}
          />
        </div>
        <div className="search-bar-section">
          <span className="icon-search"></span>
          <input
            type="text"
            className="search-input"
            autoFocus
            onClick={() => onInputClick(false)}
            onBlur={() => onInputBlur(true)}
          />
          <span className={placeholder ? "search-label" : "search-label-top"}>
            Search for restaurant, cuisine or a dish
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
