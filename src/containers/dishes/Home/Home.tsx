import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DishesCard from '../../../components/dishes/DishesCard/DishesCard';
import {
  selectDishes,
  selectIsError,
  selectLoading,
} from '../../../redux/features/dishes/dish.selectors';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../redux/hooks/reduxHooks';
import Button from '../../../UI/Button/Button';
import Loader from '../../../UI/Loader/Loader';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getDishes } from '../../../redux/features/dishes/dish.api';
import './Home.css';
import DishCart from './DishCart/DishCart';
import { addDishToCart } from '../../../redux/features/dishes/dishCart/dishCart.slice';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Modal from '../../../UI/Modal/Modal';

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const { fetchLoading } = useAppSelector(selectLoading);
  const isError = useAppSelector(selectIsError);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const renderContent = () => {
    if (fetchLoading) {
      return (
        <div className="absolute-position-center ">
          <Loader />
        </div>
      );
    }

    if (!fetchLoading && dishes.length === 0) {
      return (
        <div className="absolute-position-center">
          <p className="not-found-message">Sorry, we're out of pizza</p>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="absolute-position-center ">
          <p className="error-message">Error</p>
        </div>
      );
    }

    return (
      <>
        {dishes.map((dish) => (
          <DishesCard dish={dish} key={dish.id}>
            <Button
              className="dish-card-action dish-card-action-add-cart"
              title="Choose"
              onClick={() => dispatch(addDishToCart(dish))}
            >
              <p className="add-cart-text">choose</p>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </Button>
          </DishesCard>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="main-dishes">
        <Button className="nav-btn-checkout" onClick={toggleModal}>
          checkout
        </Button>
        <div className="main-dishes-content">{renderContent()}</div>
        {isOpenModal && (
          <>
            <Backdrop onClose={toggleModal} />
            <Modal onClose={toggleModal}>
              <DishCart />
            </Modal>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
