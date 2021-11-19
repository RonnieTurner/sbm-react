import Link from "next/link";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <>
      <ul className={styles.ul}>
        <div>
          <Link href="/">
            <a>HoME</a>
          </Link>
        </div>
        <div>
          <Link href="/clients">
            <a>ClieNTS</a>
          </Link>
        </div>
        <div>
          <Link href="/contractors">
            <a>CoNTraCTorS</a>
          </Link>
        </div>
        <div>
          <Link href="/AddProducts">
            <a>Add PRoDucTS</a>
          </Link>
        </div>
        <div>
          <Link href="/AddNewClient">
            <a>Add New Client</a>
          </Link>
        </div>
        <div>
          <Link href="/AddContractor">
            <a>Add Contractor</a>
          </Link>
        </div>
      </ul>
    </>
  );
}
