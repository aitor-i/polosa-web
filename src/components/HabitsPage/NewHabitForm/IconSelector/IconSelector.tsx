import { useState, MouseEvent } from 'react';

import styles from './IconSelector.module.css';

import { Icons } from 'domain/icons/Icons';

type Icon = (typeof Icons)[0];

export const IconSelector = () => {
  const [icon, setIcon] = useState(Icons[0]);
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

  const selectColorClickHandler = (icon: Icon) => {
    setIcon(icon);
  };

  return (
    <div>
      <p onClick={colorClickHandler} className={styles.icon}>
        {icon.icon}
      </p>
      {isModalOpen ? (
        <div onClick={backDropClickHandler} className={styles.backdrop}>
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
