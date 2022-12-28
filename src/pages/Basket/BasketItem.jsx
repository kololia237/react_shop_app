import Buttons from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function BasketItem(props) {
  // let [items, setItems] = useState([]);
  // useEffect(() => {
  //   items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
  return (
    <div className="basket_item">
      <Link className="basket_link" to={`/${props.id}`}>
        <div className="basket_img">
          <img src={props.image} alt="basket_item" />
        </div>
        <div className="basket_content">
          <span className="basket_title">{props.title}</span>
          <span>{(props.price * props.count).toLocaleString()}Грн</span>
        </div>
      </Link>

      <div className="basket_counter">
        <Buttons {...props} />
      </div>
    </div>
  );
}
