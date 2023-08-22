import React,{useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const moveToCart = () => {
    setIsInCart(!isInCart);
  };
  const appClass = isInCart ? "in-cart" : "";
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={moveToCart}>{isInCart ? "Remove from Cart" : "Add to Card"}
      </button>
    </li>
  );
}

export default Item;
