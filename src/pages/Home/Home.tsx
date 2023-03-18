import React from 'react';
import styles from './Home.module.scss';
import { VscTriangleDown } from 'react-icons/vsc';

import { Button } from '../../components/Buttons/Button';
import wallpaperImg from '../../assets/mainImage.svg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.info}>
        <span className={styles.slogan}>
          <h1>
            Learn <br /> new concepts <br />
            for each question
          </h1>
          <span className={styles.slogan2}>
            <span>s</span>
            <h4>We help you prepare for exams and quizes </h4>
          </span>
        </span>
        <span className={styles.buttons}>
          <Button>
            <Link to='/login'>Start solving</Link>
          </Button>
          <Button color='secondary_none'>
            <VscTriangleDown fontSize={20} /> know more
          </Button>
        </span>
      </div>
      <div className={styles.image}>
        <img src={wallpaperImg} alt='' />
      </div>
    </div>
  );
};
