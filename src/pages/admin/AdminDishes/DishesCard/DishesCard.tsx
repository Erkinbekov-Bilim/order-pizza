import { type FC } from 'react';
import './DishesCard.css';
import type { IDish } from '../../../../types/dish/dish';
import Button from '../../../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface IDishCardProps {
  dish: IDish;
}

const DishesCard: FC<IDishCardProps> = ({ dish }) => {
  return (
    <>
      <div className="dish-card">
        <div className="dish-image-block">
          <img src={dish.image} alt={dish.title} className="dish-image" />
        </div>
        <div className="dish-info">
          <p className="dish-name">{dish.title}</p>
          <p className="dish-price">{dish.price} KGS</p>
        </div>
        <div className="dish-card-actions">
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
        </div>
      </div>
    </>
  );
};

export default DishesCard;
