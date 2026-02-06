import React, { type PropsWithChildren } from 'react';
import './Container.css';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
