import styles from '../TeamsLeagues/TeamsLeagues.module.css';

const TeamsLeagues = ({ leagues }) => {
  return <>
    {Object.keys(leagues).map((league) => (
    <div className={styles.container}>
      <span className={styles.city}>{league}</span>
      <p className={styles.league}>Conference:</p> <p className={styles.description}>{leagues[league].conference}</p>
      <p className={styles.league}>Division:</p> <p className={styles.description}>{leagues[league].division}</p>
    </div>
    )) }
  </>
  
};

export default TeamsLeagues;
