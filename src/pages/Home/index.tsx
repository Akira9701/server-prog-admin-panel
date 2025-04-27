import styles from "./styles.module.scss";
import SvgTest from "@/components/SvgTest";

export default function Home() {
  return (
    <div className={styles.home_page}>
      <h1>Hello World</h1>
      <SvgTest />
    </div>
  );
}
