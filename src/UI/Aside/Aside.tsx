import { type FC } from 'react';
import './Aside.css';
import type { IAsideProps } from './aside.types';
import { NavLink } from 'react-router-dom';

const Aside: FC<IAsideProps> = ({ items }) => {
  return (
    <>
      <aside className="aside">
        <div className="aside-content">
          <nav className="aside-nav">
            {items.map((item) => (
              <>
                <NavLink to={item.to} className="nav-link">
                  {item.icon}
                  <p className="nav-link">{item.title}</p>
                </NavLink>
              </>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Aside;
