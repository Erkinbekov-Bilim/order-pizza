import { type FC, type PropsWithChildren } from 'react';
import './DishesCard.css';
import type { IDish } from '../../../types/dish/dish';

interface IDishCardProps extends PropsWithChildren {
  dish: IDish;
}

const DishesCard: FC<IDishCardProps> = ({ dish, children }) => {
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
          {children}
        </div>
      </div>
    </>
  );
};

export default DishesCard;
