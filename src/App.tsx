import { Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout/layout/AdminLayout';
import AdminPanel from './pages/admin/AdminPanel';
import MainLayout from './layouts/MainLayout/layout/MainLayout';
import Home from './containers/dishes/Home/Home';
import AdminDishes from './pages/admin/AdminDishes/AdminDishes';
import AdminOrderDishes from './pages/admin/AdminOrderDishes/AdminOrderDishes';
import AdminAddDish from './pages/admin/AdminAddDish/AdminAddDish';
import AdminEditDish from './pages/admin/AdminEditDish/AdminEditDish';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminPanel />}>
            <Route path="dishes" element={<AdminDishes />} />
            <Route path='dishes/:id/edit' element={<AdminEditDish/>}/>
            <Route path="dishes/add" element={<AdminAddDish />} />
            <Route path="orders" element={<AdminOrderDishes />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
