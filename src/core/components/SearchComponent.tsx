import React from "react";

type Props = {
  closeSearch: (value: boolean) => void;
};

const SearchComponent: React.FC<Props> = ({ closeSearch }) => {
  const closeSearchModal = (value: boolean) => {
    closeSearch(value);
  };
  const backdropClick = (e: any) => {
    if (e?.target?.className === "search-modal") {
      closeSearch(false);
    }
  };

  return (
    <div className="search-modal" onClick={(e) => backdropClick(e)}>
      <div className="search-modal-content">
        <div className="search-modal-header">
          <span className="search-header-title">Valsad</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="down-arrow-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
          <button
            className="search-close-icon"
            onClick={() => closeSearchModal(false)}
          />
        </div>
        <div className="search-bar-section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="search-icon"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input type="text" placeholder="" className="search-input" />
          <span className="search-label">
            Search for restaurant, cuisine or a dish
          </span>
        </div>
      </div>
      <span className="icon-search"></span>
    </div>
  );
};

export default SearchComponent;
