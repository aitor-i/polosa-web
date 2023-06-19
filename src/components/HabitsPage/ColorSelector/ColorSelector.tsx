import { useState, MouseEvent } from 'react';

import styles from './ColorSelector.module.css';

import habitColors from 'domain/colors/habitColors.json';

type Color = (typeof habitColors.colors)[0];

export const ColorSelector = () => {
  const [color, setColor] = useState<Color>(habitColors.colors[0]);
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

  const selectColorClickHandler = (color: Color) => {
    setColor(color);
    setIsRendered(false);
  };

  const onAnimationEndHandler = () => {
    if (isModalOpen && !isRendered) closeModal();
  };

  return (
    <div className={` ${isRendered ? styles.colorSelectorContainer : styles.close}`}>
      <p onClick={colorClickHandler} key={color.name} className={styles.color} style={{ backgroundColor: color.code }}></p>
      {isModalOpen ? (
        <div className={`${isRendered ? styles.backdrop : styles.collapse}`} onAnimationEnd={onAnimationEndHandler}>
          <section className={styles.paletteContainer}>
            {habitColors.colors.map(color => (
              <p onClick={() => selectColorClickHandler(color)} key={color.name} className={styles.color} style={{ backgroundColor: color.code }}></p>
            ))}
          </section>
        </div>
      ) : null}
    </div>
  );
};
