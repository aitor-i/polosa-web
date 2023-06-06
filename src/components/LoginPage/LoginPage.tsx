import Navigation from "components/Navigation";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <main>
      <Navigation />
      <h1>Login</h1>
      <form className={styles.form}>
        <span className={styles.inputContainer}>
          <label htmlFor="">Name</label>
          <input type="text" />
        </span>
        <span className={styles.inputContainer}>
          <label htmlFor="">Password</label>
          <input type="password" />
        </span>
        <span className={styles.buttonContainer}>
          <button className={styles.submit} type="submit">
            Login
          </button>
        </span>
      </form>
    </main>
  );
};
