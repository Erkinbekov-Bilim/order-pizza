import './AdminDishes.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';

const AdminDishes = () => {
  return (
    <div>
      <Link to={'add'} className="btn-add-dish">
        <FontAwesomeIcon icon={faChampagneGlasses} />
        <p className="text-add-dish">add new dish</p>
      </Link>
      <h1>Admin dishes</h1>
    </div>
  );
};

export default AdminDishes;
