import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button';
export function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className={styles.navbar}>
          <ul className={styles.nav}>
            <li className={styles.nav_item}>
              <Link to='/howItWorks'>How it works?</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to='/features'>Features</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to='/about'>About us</Link>
            </li>
          </ul>
          <Button color='secondary'>Login</Button>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
}
