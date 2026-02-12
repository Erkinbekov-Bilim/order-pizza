import Header from '../Header';
import Container from '../../Container/Container';
import '../../Layout.css';
import './MainLayout.css';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default MainLayout;
