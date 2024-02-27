import styles from './GetStarted.module.css'
import working from '../../../assets/images/illustration-working.svg'

function GetStarted() {
  return ( 
    <div className={styles.getStarted}>
      <img src={working} />
      <div className={styles.callToAction}>
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button>Get Started</button>
      </div>
    </div>
   );
}

export default GetStarted;