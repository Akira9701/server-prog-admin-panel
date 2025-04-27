import { ReactComponent as ReactLogo } from "@assets/react.svg";
import styles from "./SvgTest.module.scss";

export default function SvgTest() {
  return (
    <div className={styles.svg_container}>
      <h3>SVG as React Component</h3>
      <ReactLogo className={styles.svg_icon} title="React Logo" />

      <h3>Regular SVG Image</h3>
      <img src="/vite.svg" alt="Vite Logo" className={styles.img_icon} />
    </div>
  );
}
