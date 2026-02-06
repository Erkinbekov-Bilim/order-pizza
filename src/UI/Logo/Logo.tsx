import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

interface ILogoProps {
  to: string;
  size?: 'small' | 'medium' | 'large';
  name?: 'admin panel' | 'pissaladiere';
}

const Logo: React.FC<ILogoProps> = ({
  to,
  size = 'medium',
  name = 'pissaladiere',
}) => {
  return (
    <>
      <div className="logo">
        <Link to={to} className={`logo-link`}>
          <img
            src="/src/assets/images/logos/pizza-logo-without-bg.png"
            alt="pissaladiere"
            className={`logo-img logo-${size}`}
          />
          <p className={`logo-name logo-name-${size}`}>{name}</p>
        </Link>
      </div>
    </>
  );
};

export default Logo;
