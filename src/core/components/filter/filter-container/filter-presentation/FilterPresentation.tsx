import React from "react";
import SortDetail from "./SortDetail";
import Cuisines from "./Cuisines";
import Rating from "./Rating";

type Props = {
  closeFilter: (value: boolean) => void;
};

const FilterPresentation: React.FC<Props> = ({ closeFilter }) => {
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
            className="icon-close"
            onClick={() => closeFilterModal(false)}
          />
        </div>

        <div className="filter-content">
          <section className="filter-option">
            {/* <div className="redborder"></div> */}
            <button className="btn-filter bg-white">Sort By</button>
            <button className="btn-filter">Cuisines</button>
            <button className="btn-filter">Rating</button>
            <button className="btn-filter">Cost per person</button>
            <button className="btn-filter">More filters</button>
          </section>
          <section className="filter-option-detail">
            {/* <SortDetail></SortDetail> */}
            <Cuisines></Cuisines>
            {/* <Rating></Rating> */}
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

export default FilterPresentation;
