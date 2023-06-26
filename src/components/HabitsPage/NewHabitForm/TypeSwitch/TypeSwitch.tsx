import { useState, MouseEvent } from 'react';

import GoalTypeInput from './GoalTypeInput';

import styles from './TypeSwitch.module.css';

export const TypeSwitch = () => {
  const [habitType, setHabitType] = useState<'GOAL' | 'COUNTER'>('GOAL');
  const goalClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setHabitType(prev => {
      if (prev == 'GOAL') return 'COUNTER';
      return 'GOAL';
    });
  };

  return (
    <>
      <section className={styles.typeButtonsContainer}>
        <button
          onClick={goalClickHandler}
          className={`${styles.switch} ${habitType === 'GOAL' ? styles.typeGoalSelected : styles.typeCounterSelected}`}
        >
          {habitType === 'GOAL' ? 'Goal' : 'Counter'}
        </button>
      </section>
      <div className={styles.formSection}>{habitType == 'GOAL' ? <GoalTypeInput /> : <div className={styles.formSection}></div>}</div>
    </>
  );
};
