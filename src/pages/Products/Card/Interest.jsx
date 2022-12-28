import React, { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import {
  ProductContext,
  ProductDispath
} from "../../../components/Context/ContextProvider";
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';


export default function Interest(props) {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  const isAddFavorite = state.allProducts.find(
    (product) => product.id === props.id
  );
  function buttonAddOnClick (){
    addNotification({
      title: 'Додано до улюблених',
      native:true
    })}
  function buttonRemoveOnClick (){
    addNotification({
      title: 'Видалено з улюблених',
      native:true
    })}
  return (
    <div
      onClick={() => dispath({ type: "ADD_FAVORITE", payload: props.id })}
      className="Interest"
    >
      {isAddFavorite.isInterest ? (
        <BsHeartFill className="heart_Fill" onClick={buttonRemoveOnClick} />
      ) : (
        <BsHeart className="heart" onClick={buttonAddOnClick} />
      )}
    </div>
  );
}
