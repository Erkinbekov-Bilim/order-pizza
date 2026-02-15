import React from 'react';
import type { IDishCart } from '../../../../../types/dish/cart/dishCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import './DishhCartItem.css';
import { useAppDispatch } from '../../../../../redux/hooks/reduxHooks';
import { addDishToCart } from '../../../../../redux/features/dishes/dishCart/dishCart.slice';

interface IDishCartItem {
  cartDish: IDishCart;
}

const DishCartItem: React.FC<IDishCartItem> = ({ cartDish }) => {
  const dispatch = useAppDispatch();
  let dishPriceResult: number = 0;

  if (cartDish.dish.price) {
    dishPriceResult = cartDish.count * cartDish.dish.price;
  }

  return (
    <>
      <div className="dish-cart-content">
        <div className="dish-cart-item">
          <div className="dish-cart-item-action-delete">
            <FontAwesomeIcon icon={faXmark} />
          </div>

          <div className="dish-cart-item-img">
            <img src={cartDish.dish.image} alt={cartDish.dish.title} />
          </div>
          <div className="dish-cart-item-info">
            <p className="dish-cart-item-info-name">{cartDish.dish.title}</p>
            <div className="dish-cart-item-info-count">
              <p className="dish-count">{cartDish.count}</p>
              <p className="dish-info-price">{cartDish.dish.price}kgs</p>
              <p className="dish-price-result">{dishPriceResult}kgs</p>
            </div>
          </div>
        </div>
        <div className="dish-cart-item-info-actions">
          <FontAwesomeIcon
            icon={faPlus}
            className="dish-cart-action"
            onClick={() => dispatch(addDishToCart(cartDish.dish))}
          />
          <p className="dish-count dish-count-acton">{cartDish.count}</p>
          <FontAwesomeIcon icon={faMinus} className="dish-cart-action" />
        </div>
      </div>
    </>
  );
};

export default DishCartItem;
