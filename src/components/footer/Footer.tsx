import styles from './Footer.module.css'
import LinksList from './linksList/LinksList';
import logo from '../../assets/images/logo.svg'

function Footer() {
  return ( 
    <div className={styles.footer}>
      <img src={logo} />
      <div className={styles.linksWrapper}>
        <LinksList/>
        <div className={styles.media}>
          icons
        </div>
      </div>
    </div>
   );
}

export default Footer;