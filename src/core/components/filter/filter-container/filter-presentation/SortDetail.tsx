import React from "react";

const SortDetail = () => {
  return (
    // <div className="sort-detail">
    //   <div className="p-10">
    //     {/* <span>icon</span> */}
    //     <label>Popularity</label>
    //   </div>
    //   <div className="p-10">
    //     {/* <span>icon</span> */}
    //     <label>Rating: High to Low</label>
    //   </div>
    //   <div className="p-10">
    //     {/* <span>icon</span> */}
    //     <label>Delivery time</label>
    //   </div>
    // </div>
    <>
      <div className="p-10">
        <input
          type="radio"
          name="filter"
          id="popularity"
          value={"popularity"}
        />
        <label className="ml-8" htmlFor="popularity">
          popularity
        </label>
      </div>
      <div className="p-10">
        <input type="radio" name="filter" id="rating" value={"rating"} />
        <label className="ml-8" htmlFor="rating">
          rating
        </label>
      </div>
      <div className="p-10">
        <input type="radio" name="filter" id="delivery" value={"delivery"} />
        <label className="ml-8" htmlFor="delivery">
          delivery
        </label>
      </div>
      <div className="p-10">
        <input type="radio" name="filter" id="costL2H" value={"costL2H"} />
        <label className="ml-8" htmlFor="costL2H">
          Cost : Low to High
        </label>
      </div>
      <div className="p-10">
        <input type="radio" name="filter" id="costH2L" value={"costH2L"} />
        <label className="ml-8" htmlFor="costH2L">
          Cost : High to Low
        </label>
      </div>
    </>
  );
};

export default SortDetail;
