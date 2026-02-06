import { Outlet } from 'react-router-dom';
import './AdminLayout.css';
import '../../Layout.css';
import Aside from '../../../UI/Aside/Aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faListUl } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../UI/Logo/Logo';
const items = [
  {
    title: 'dishes',
    to: 'admin/dishes',
    icon: <FontAwesomeIcon icon={faCookieBite} />,
  },
  {
    title: 'orders',
    to: 'admin/orders',
    icon: <FontAwesomeIcon icon={faListUl} />,
  },
];

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">
      <div className="admin-aside">
        <div className="admin-layout-aside">
          <Logo to="/admin" size="small" />
          <div className="admin-aside-content">
            <Aside items={items} />
          </div>
        </div>
      </div>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
