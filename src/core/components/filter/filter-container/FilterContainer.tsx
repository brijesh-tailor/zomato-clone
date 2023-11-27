import React from "react";
import FilterPresentation from "./filter-presentation/FilterPresentation";

const FilterContainer = () => {
  const toggleFilter = (value: boolean) => {
    // setFilterModalVisible(value);
  };
  return (
    <>
      <FilterPresentation closeFilter={toggleFilter}></FilterPresentation>
    </>
  );
};

export default FilterContainer;
