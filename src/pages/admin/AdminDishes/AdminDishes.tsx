import './AdminDishes.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChampagneGlasses, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../redux/hooks/reduxHooks';
import {
  selectDishes,
  selectIsError,
  selectLoading,
} from '../../../redux/features/dishes/dish.selectors';
import { useEffect } from 'react';
import { getDishes } from '../../../redux/features/dishes/dish.api';
import DishesCard from '../../../components/dishes/DishesCard/DishesCard';
import Loader from '../../../UI/Loader/Loader';
import Button from '../../../UI/Button/Button';

const AdminDishes = () => {
  const dispatch = useAppDispatch();
  const { fetchLoading } = useAppSelector(selectLoading);
  const isError = useAppSelector(selectIsError);
  const dishes = useAppSelector(selectDishes);

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
          <p className="not-found-message">Add dish to see them here</p>
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
            <Link
              to={`${dish.id}/edit`}
              className="dish-card-action dish-card-action-edit"
              title="Edit"
            >
              <FontAwesomeIcon icon={faPen} />
            </Link>
            <Button
              className="dish-card-action dish-card-action-delete"
              title="Delete"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </DishesCard>
        ))}
      </>
    );
  };

  return (
    <section className="admin-dishes">
      <Link to={'add'} className="btn-add-dish">
        <FontAwesomeIcon icon={faChampagneGlasses} />
        <p className="text-add-dish">add new dish</p>
      </Link>
      <div className="dishes">
        <div className="dishes-content">{renderContent()}</div>
      </div>
    </section>
  );
};

export default AdminDishes;
