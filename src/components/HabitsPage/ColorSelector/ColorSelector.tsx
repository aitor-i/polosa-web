import { useState, MouseEvent } from 'react';

import styles from './ColorSelector.module.css';

import habitColors from 'domain/colors/habitColors.json';

type Color = (typeof habitColors.colors)[0];

export const ColorSelector = () => {
  const [color, setColor] = useState<Color>(habitColors.colors[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorClickHandler = (event: MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const backDropClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    closeModal();
  };

  const selectColorClickHandler = (color: Color) => {
    setColor(color);
  };

  return (
    <div>
      <p onClick={colorClickHandler} key={color.name} className={styles.color} style={{ backgroundColor: color.code }}></p>
      {isModalOpen ? (
        <div onClick={backDropClickHandler} className={styles.backdrop}>
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
