import { useState } from 'react';
import styles from './NewHabit.module.css';

import PlusIcon from './PlusIcon';
import { NewHabitForm } from '../NewHabitForm/NewHabitForm';

export const NewHabit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const addIconClickHandler = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <section className={`${styles.container} ${isOpen && styles.fullSize}`}>
      <div onClick={addIconClickHandler} className={styles.addIcon}>
        <PlusIcon />
      </div>
      {isOpen ? (
        <section className={styles.formContainer}>
          <NewHabitForm />
        </section>
      ) : null}
    </section>
  );
};
