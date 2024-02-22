import styles from "./NavbarMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.navbarMobile}>
      <FontAwesomeIcon
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        icon={faBars}
        size='xl'
        style={{ color: "#9e9aa7", width: "25", height: "30" }}
      />
      {isMenuOpen && (
        <div className={styles.mobileNavigation}>
          <div className={styles.navigation}>
            <nav>Features</nav>
            <nav>Pricing</nav>
            <nav>Resources</nav>
          </div>
          <div className={styles.authContainer}>
            <nav>Login</nav>
            <button>Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
