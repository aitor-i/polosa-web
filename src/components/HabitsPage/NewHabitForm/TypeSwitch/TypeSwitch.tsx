import { useState, MouseEvent } from 'react';
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
      <div className={styles.formSection}>
        {habitType == 'GOAL' ? (
          <div className={styles.formSection}>
            <h3>Goal</h3>
            <section className={styles.typeContainer}>
              <div className={styles.goalTypeContainer}>
                <label>Goal type</label>
                <select name="" id="">
                  <option value="">Daily</option>
                  <option value="">Weakly</option>
                  <option value="">Monthly</option>
                </select>
              </div>
              <div className={styles.goalContainer}>
                <label>Goal</label>
                <input className={styles.goalInput} type="number" />
              </div>
            </section>
          </div>
        ) : (
          <div className={styles.formSection}></div>
        )}
      </div>
    </>
  );
};
