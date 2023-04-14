import { useState } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import styles from './index.module.scss';
import siderBarList from './config';
import router from '../../router';

const Layout: React.FC = () => {
  const [current, setCurrent] = useState<string>('/');
  const navigate = useNavigate();
  const element = useRoutes(router);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>
        <div className={styles.siderbar}>
          <ul>
            {siderBarList.map((it) => (
              <li
                aria-hidden="true"
                className={current === it.path ? styles.active : undefined}
                key={it.path}
                onClick={() => {
                  setCurrent(it.path);
                  navigate(it.path);
                }}
              >
                {it.label}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.container}>{element}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;