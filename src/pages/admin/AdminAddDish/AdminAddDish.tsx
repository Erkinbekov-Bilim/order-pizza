import './AdminAddDish.css';
import DishForm from '../../../components/dishes/DishForm';
import type { IDishMutation } from '../../../types/dish/dish-mutation';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../redux/hooks/reduxHooks';
import { postNewDish } from '../../../redux/features/dishes/dish.api';
import { useNavigate } from 'react-router-dom';
import { selectLoadingSend } from '../../../redux/features/dishes/dish.selectors';

const AdminAddDish = () => {
  const dispatch = useAppDispatch();
  const sendLoading = useAppSelector(selectLoadingSend);
  const navigate = useNavigate();

  const onSubmitDish = async (dish: IDishMutation) => {
    await dispatch(postNewDish(dish));
    navigate('/admin/dishes');
  };

  return (
    <>
      <div>
        <DishForm onSubmitDish={onSubmitDish} isLoading={sendLoading} />
      </div>
    </>
  );
};

export default AdminAddDish;
