import { useState, MouseEvent } from 'react';
import styles from './TypeSwitch.module.css';

export const TypeSwitch = () => {
  const [habitType, setHabitType] = useState<'GOAL' | 'COUNTER'>('GOAL');
  const goalClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setHabitType('GOAL');
  };
  const counterClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setHabitType('COUNTER');
  };
  return (
    <>
      <section className={styles.typeButtonsContainer}>
        <button onClick={goalClickHandler} className={`${styles.typeButton} ${habitType === 'GOAL' && styles.typeButtonSelected}`}>
          {' '}
          Goal{' '}
        </button>
        <button onClick={counterClickHandler} className={`${styles.typeButton} ${habitType === 'COUNTER' && styles.typeButtonSelected}`}>
          Counter
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
          <div className={styles.formSection}>
            <label>Counter</label>
            <input type="text" name="habit-name" />
          </div>
        )}
      </div>
    </>
  );
};
