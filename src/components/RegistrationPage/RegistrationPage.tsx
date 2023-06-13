import Navigation from 'components/Navigation';

import styles from './RegistrationPage.module.css';

export const RegistrationPage = () => {
  return (
    <main>
      <Navigation />
      <h1>Sign in</h1>
      <form className={styles.form}>
        <span className={styles.inputContainer}>
          <label htmlFor="">Name</label>
          <input type="text" />
        </span>
        <span className={styles.inputContainer}>
          <label htmlFor="">Password</label>
          <input type="password" />
        </span>
        <span className={styles.inputContainer}>
          <label htmlFor="">Confirm Password</label>
          <input type="password" />
        </span>
        <span className={styles.buttonContainer}>
          <button className={styles.submit} type="submit">
            Register
          </button>
        </span>
      </form>
    </main>
  );
};
