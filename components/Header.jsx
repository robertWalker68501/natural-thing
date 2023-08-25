import styles from "@/styles/Header.module.css";

const Header = ({children}) => {
  return (
    <header className={styles.siteHeader}>
        {children}
    </header>
  );
}

export default Header;
