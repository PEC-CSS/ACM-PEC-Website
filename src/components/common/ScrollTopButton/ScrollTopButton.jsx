import React, { useEffect } from 'react';
import style from './ScrollTopButton.module.css';
import { HiArrowNarrowUp } from 'react-icons/hi';

const ScrollTopButton = () => {
  const handleShowHideBtn = () => {
    const el = document.querySelector(`.${style['btn-wrap']}`);
    let curr = 0;
    window.onscroll = () => {
      if (window.scrollY >= 200) {
        const rect = document.body.getBoundingClientRect().top;
        el.classList[rect < curr ? 'add' : 'remove'](style.active);
        
        curr = rect;
      }
    };
  };

  useEffect(() => {
    handleShowHideBtn();
  }, []);

  return (
    <div className={style['btn-wrap']}>
      <button
        className={style.btn}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <HiArrowNarrowUp className={style.icon} />
      </button>
    </div>
  );
};

export default ScrollTopButton;
