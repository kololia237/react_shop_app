import React, { createContext, useReducer } from "react";
import allProducts from "../../data/Data";
var _ = require('lodash');
const initialFilterState = {
  filteredItems: [...allProducts],
  searchKey: ""
};

const filterItemsHandler = (key) => {
  const filteredItems = allProducts.filter((product) => {
    return product.category === key;
  });

  return { filteredItems };
};
const SortItemsHandler = () => {

  // const SortedItems = allProducts.sort(
  //
  // function(a, b) {
  //   return a.price - b.price
  // })
  // return {SortedItems};
  const filteredItems =_.sortBy( allProducts, 'price');
  console.log({filteredItems});
  return {filteredItems};

};


const filterReduce = (state, action) => {
  switch (action.type) {
    case "SEARCH_KEYWORD":
      state.searchKey = action.payload;
      return {
        ...state
      };
    case "ALL":
      state.filteredItems = [...allProducts];
      return {
        ...state
      };
    case "VEGETABLE":
      return {
        ...filterItemsHandler("Овочі")
      };
    case "FRUIT":
      return {
        ...filterItemsHandler("Фрукти")
      };
    case "NUTS":
      return {
        ...filterItemsHandler("Горіхи")
      };
    case "BEANS":
      return {
        ...filterItemsHandler("Боби")
      };
    case "SORT":

      return {
         ...SortItemsHandler()

      };
    default:
      return state;
  }
};

export const FilterContext = createContext();
export const FilterDispath = createContext();

export default function ContextFilter({ children }) {
  const [state, dispath] = useReducer(filterReduce, initialFilterState);
  return (
    <FilterContext.Provider value={{ state }}>
      <FilterDispath.Provider value={{ dispath }}>
        {children}
      </FilterDispath.Provider>
    </FilterContext.Provider>
  );
}
