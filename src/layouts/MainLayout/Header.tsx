import Logo from '../../UI/Logo/Logo';
import Container from '../Container/Container';
import '../Layout.css';

const Header = () => {
  return (
    <>
      <header className="header header-main">
        <Container>
          <div className="header-content">
            <Logo to="/" size="medium" />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
