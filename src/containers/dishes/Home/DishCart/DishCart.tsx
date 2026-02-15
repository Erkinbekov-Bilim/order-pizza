import { selectCartDish } from '../../../../redux/features/dishes/dishCart/dishCart.selectors';
import { useAppSelector } from '../../../../redux/hooks/reduxHooks';
import './DishCart.css';
import DishCartItem from './DishCartItem/DishCartItem';

const DishCart = () => {
  const cartDishes = useAppSelector(selectCartDish);

  return (
    <>
      <div className="dish-cart">
        <p className="dish-cart-title">your order</p>
        <div className='dish-cart-block'>
          {cartDishes.map((cart) => (
            <DishCartItem cartDish={cart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DishCart;
