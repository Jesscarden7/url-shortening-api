import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import Navbar from './navbar/Navbar';

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} />
      <Navbar/>
    </div>
  );
}

export default Header;
