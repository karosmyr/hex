import styles from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/my-account">My Account</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
