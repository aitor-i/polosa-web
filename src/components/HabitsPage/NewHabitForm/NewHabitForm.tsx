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
          <ColorSelector />
        </section>

        <section className={styles.selector}>
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
