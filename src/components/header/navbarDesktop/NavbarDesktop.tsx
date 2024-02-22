import styles from "./NavbarDesktop.module.css";

function NavbarDesktop() {
  return ( 
    <div>
      <div className={styles.desktopNavigation}>
        <div>
          <nav>Features</nav>
          <nav>Pricing</nav>
          <nav>Resources</nav>
        </div>
        <div>
          <nav>login</nav>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
   );
}

export default NavbarDesktop;