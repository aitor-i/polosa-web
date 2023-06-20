import { useState, MouseEvent } from 'react';

import styles from './IconSelector.module.css';

import { Icons } from 'domain/icons/Icons';

type Icon = (typeof Icons)[0];

export const IconSelector = () => {
  const [icon, setIcon] = useState(Icons[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const colorClickHandler = (event: MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();

    setIsRendered(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectColorClickHandler = (icon: Icon) => {
    setIcon(icon);
    setIsRendered(false);
  };

  const onAnimationEndHandler = () => {
    if (isModalOpen && !isRendered) closeModal();
  };

  return (
    <div className={` ${isRendered ? styles.colorSelectorContainer : styles.close}`}>
      <p onClick={colorClickHandler} className={styles.icon}>
        {icon.icon}
      </p>
      {isModalOpen ? (
        <div className={`${isRendered ? styles.backdrop : styles.collapse}`} onAnimationEnd={onAnimationEndHandler}>
          <section className={styles.paletteContainer}>
            {Icons.map(icon => (
              <p onClick={() => selectColorClickHandler(icon)} key={icon.name} className={styles.icon}>
                {icon.icon}
              </p>
            ))}
          </section>
        </div>
      ) : null}
    </div>
  );
};
