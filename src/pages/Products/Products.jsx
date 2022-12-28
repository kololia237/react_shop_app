import React, { useContext } from "react";
import "./Products.css";
import Filter from "./Filter/Filter";
import { FilterContext } from "../../components/Context/ContextFilter";
import Card from "./Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
// import 'react-notifications/lib/notifications.css';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import Footer from "../../layout/Footer/Footer";

export default function Products() {
  const { state } = useContext(FilterContext);

  const productsList = state.filteredItems.filter((product) => {
    return product.title.includes(state.searchKey) || !state.searchKey;
  });
  return (
    <>
      <Filter />
      <div className="search_Container">
        <div className="search_box">
          <SearchBar />
        </div>
      </div>
      <div className="product_container">
        {productsList.length > 0 ? (
          productsList.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <div className="not_products">
            <img
              className="products_empty_img"
              src="images/bare-tree.png"
              alt=""
            />
            <span className="products_empty_title">
Вибачте, жоден продукт не відповідає вашому пошуку
            </span>
            <span className="products_empty_guide">
Введіть інше ключове слово та спробуйте знову
            </span>
          </div>
        )}
      </div>
      {/*<Footer />*/}
    </>
  );

}


