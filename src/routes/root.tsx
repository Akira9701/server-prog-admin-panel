import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Root() {
  return (
    <div className={styles.root_layout}>
      <header className={styles.header}>
        <h1>Medical Admin</h1>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Medical Admin System</p>
      </footer>
    </div>
  );
}
