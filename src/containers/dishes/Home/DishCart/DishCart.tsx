import { selectCartDish } from '../../../../redux/features/dishes/dishCart/dishCart.selectors';
import { useAppSelector } from '../../../../redux/hooks/reduxHooks';
import './DishCart.css';
import DishCartItem from './DishCartItem/DishCartItem';

const DishCart = () => {
  const cartDishes = useAppSelector(selectCartDish);

  const renderContent = () => {
    if (cartDishes.length === 0) {
      return (
        <>
          <div className="empty-cart">
            <div className="empty-cart-info">
              <p className="empty-cart-info-text empty-cart-info-title">
                your cart is empty
              </p>
              <p className="empty-cart-info-text empty-cart-info-description">
                add pizza for happiness
              </p>
            </div>
            <div className="empty-cart-image">
              <img
                src="/src/assets/images/placeholder/pizza-happy-ic.svg"
                alt="empty cart :("
              />
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        {cartDishes.map((cart) => (
          <DishCartItem cartDish={cart} />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="dish-cart">
        <p className="dish-cart-title">your order</p>
        <div className="dish-cart-block">{renderContent()}</div>
      </div>
    </>
  );
};

export default DishCart;
