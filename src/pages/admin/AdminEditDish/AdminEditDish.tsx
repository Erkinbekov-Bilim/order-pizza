import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../redux/hooks/reduxHooks';
import {
  selectDish,
  selectLoading,
} from '../../../redux/features/dishes/dish.selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { getDish, updateDish } from '../../../redux/features/dishes/dish.api';
import type { IDishMutation } from '../../../types/dish/dish-mutation';
import DishForm from '../../../components/dishes/DishForm/DishForm';

const AdminEditDish = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { sendLoading } = useAppSelector(selectLoading);
  const dish = useAppSelector(selectDish);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getDish({ id }));
    }
  }, [dispatch, id]);

  const onSubmitDish = (dish: IDishMutation) => {
    if (id) {
      dispatch(updateDish({ id, dish }));
      navigate('/admin/dishes');
    }
  };

  return (
    <>
      {dish && (
        <DishForm
          defaultValueDish={dish}
          onSubmitDish={onSubmitDish}
          isLoading={sendLoading}
        />
      )}
    </>
  );
};

export default AdminEditDish;
