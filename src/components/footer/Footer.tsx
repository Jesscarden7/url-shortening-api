import styles from './Footer.module.css'
import LinksList from './linksList/LinksList';

function Footer() {
  return ( 
    <div className={styles.footer}>
      <LinksList/>
    </div>
   );
}

export default Footer;