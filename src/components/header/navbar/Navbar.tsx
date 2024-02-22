import styles from './Navbar.module.css'
import NavbarMobile from '../navbarMobile/NavbarMobile';
import NavbarDesktop from '../navbarDesktop/NavbarDesktop';


function Navbar() {
  return ( 
    <div className={styles.navbarWrapper}>
      <NavbarMobile/>
      <NavbarDesktop/>
    </div>
   );
}

export default Navbar;