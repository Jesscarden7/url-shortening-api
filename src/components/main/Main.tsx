import styles from './Main.module.css'
import GetStarted from './getStarted/GetStarted';
import FormLink from './formLink/FormLink';
import Statistics from './statistics/Statistics';
import Boost from './boost/Boost';

function Main() {
  return ( 
    <div className={styles.main}>
      <GetStarted/>
      <FormLink/>
      <Statistics/>
      <Boost/>
    </div>
   );
}

export default Main;