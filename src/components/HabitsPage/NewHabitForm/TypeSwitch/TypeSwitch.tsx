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
              <div>
                <label>Goal type</label>
                <select name="" id="">
                  <option value="">Daily</option>
                  <option value="">Weakly</option>
                </select>
              </div>
              <div>
                <label>Goal</label>
                <input type="number" />
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
