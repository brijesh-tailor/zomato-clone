import React from "react";

type Props = {
  closeFilter: (value: boolean) => void;
};

const FilterComponent: React.FC<Props> = ({ closeFilter }) => {
  const closeFilterModal = (value: boolean) => {
    closeFilter(value);
  };

  const backdropClick = (e: any) => {
    if (e?.target?.className === "filter-modal") {
      closeFilter(false);
    }
  };

  return (
    <div className="filter-modal" onClick={(e) => backdropClick(e)}>
      <div className="filter-modal-content">
        <div className="filter-header">
          <span className="filter-header-title">Filters</span>
          <button
            className="icon-close-icon"
            onClick={() => closeFilterModal(false)}
          />
        </div>
        <div className="filter-content">
          <section className="filter-option">
            <span className="sort">Sort By</span>
            <span className="cuisines">Cuisines</span>
            <span className="rating">Rating</span>
            <span className="cost">Cost per person</span>
            <span className="more">More filters</span>
          </section>
          <section className="filter-option-detail">
            <div className="sort-detail">
              <div>
                {/* <span>icon</span> */}
                <label>Popularity</label>
              </div>
              <div>
                {/* <span>icon</span> */}
                <label>Rating: High to Low</label>
              </div>
              <div>
                {/* <span>icon</span> */}
                <label>Delivery time</label>
              </div>
            </div>
          </section>
        </div>
        <section className="filter-button-section">
          <button className="filter-button-section-clear">Clear all</button>
          <button className="filter-button-section-apply">Apply</button>
        </section>
      </div>
    </div>
  );
};

export default FilterComponent;
