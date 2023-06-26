import styles from './GoalTypeInput.module.css';

export const GoalTypeInput = () => {
  return (
    <div>
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
  );
};
