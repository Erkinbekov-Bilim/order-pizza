import { Outlet } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <>
      <div className="admin-panel">
        <Outlet />
      </div>
    </>
  );
};

export default AdminPanel;
