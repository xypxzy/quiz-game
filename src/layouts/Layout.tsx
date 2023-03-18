import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './Header/Header';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
