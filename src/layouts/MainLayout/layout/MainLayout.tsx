import React, { type PropsWithChildren } from 'react';
import Header from '../Header';
import Container from '../../Container/Container';
import '../../Layout.css';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default MainLayout;
