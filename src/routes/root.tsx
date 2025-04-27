import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? styles.active : "";
  };

  return (
    <div className={styles.root_layout}>
      <div className={styles.content_wrapper}>
        <aside className={styles.sidebar}>
          <h1>Navigation</h1>
          <ul className={styles.menu}>
            <li>
              <Link to="/" className={isActive("/")}>
                Dashboard
              </Link>
            </li>
          </ul>
        </aside>

        <main className={styles.main_content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
