import styles from './NewHabitForm.module.css';
import ColorSelector from '../ColorSelector';
import IconSelector from './IconSelector';
import TypeSwitch from './TypeSwitch';

export const NewHabitForm = () => {
  return (
    <form className={styles.form}>
      <section className={styles.formSection}>
        <label>Habit name</label>
        <input type="text" name="habit-name" />
      </section>

      <div className={styles.selectorsContainer}>
        <section className={styles.selector}>
          {/* <label>Habit color</label> */}
          <ColorSelector />
        </section>

        <section className={styles.selector}>
          {/* <label>Habit Icon</label> */}
          <IconSelector />
        </section>
      </div>

      <TypeSwitch />
      <section className={styles.buttonContainer}>
        <button className={styles.submit} type="submit">
          Add habit
        </button>
      </section>
    </form>
  );
};
