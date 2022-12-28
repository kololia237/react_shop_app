import React, { useContext, useEffect, useState } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../../components/Context/ContextProvider";
import BasketItem from "./BasketItem";
// import Offer from "./Offer";
// import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";


export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(state.basket));
  // }, [items]);
  //
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
  // console.log(items)
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Кошик</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Сторінка продуктів
          </Link>
        </div>
{/*        {state.basket.length > 0 && (*/}
{/*          <div className="favorite_linkBar">*/}
{/*            <div className="free_send_title">*/}
{/*              <img src="images/sound(1).jpg" alt="" />*/}
{/*              <span>*/}
{/*Доставка безкоштовна для покупок на суму понад 1000 гривень*/}
{/*              </span>*/}
{/*            </div>*/}
{/*          </div>*/}
{/*        )}*/}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            {/*<OfferBadge />*/}
            <div className="basket_price">
              <span>Загальний кошик для покупок</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()}Грн</span>
            </div>
            {/*{state.totalPriceAfterOffer > 0 && (*/}
            {/*  <div className="basket_offer">*/}
            {/*    <span>Ціна зі знижкою</span>*/}
            {/*    <span>{state.totalPriceAfterOffer.toLocaleString()}Грн///</span>*/}
            {/*  </div>*/}
            {/*)}*/}
            {/*<Offer />*/}
            <SendProducts />
            <div className="basket_send">
              <span>Загальна сума до сплати</span>
              <span>{state.totalPriceFainal.toLocaleString()}Грн</span>
            </div>
            <Link to={"/"}>
            <button className="basket_button_buy">Продовжити процес покупки</button></Link>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              Видаліть товар {state.basket.length} із кошика для покупок            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">Кошик для покупок порожній</span>        </div>
      )}
    </>
  );
}
