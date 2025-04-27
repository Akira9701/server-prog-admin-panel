import { useRouteError } from "react-router-dom";
import styles from "./styles.module.scss";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div id="error-page" className={styles.error_container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className={styles.error_message}>
        <i>{error.statusText || error.message || "Unknown error"}</i>
      </p>
    </div>
  );
}
