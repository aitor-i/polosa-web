import styles from './PlusIcon.module.css';

export const PlusIcon = () => {
  return (
    <svg className={styles.plusIcon} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="#222222" />
      <rect x="45" y="20" width="10" height="60" fill="#f2f2f2" />
      <rect x="20" y="45" width="60" height="10" fill="#f2f2f2" />
    </svg>
  );
};
