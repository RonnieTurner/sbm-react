import Link from "next/link";
import styles from "./mainNavigation.module.css";

export default function MainNavigation() {
  return (
    <>
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            <a>HoME</a>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <a>ClieNTS</a>
          </Link>
        </li>
        <li>
          <Link href="/contractors">
            <a>CoNTraCTorS</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
