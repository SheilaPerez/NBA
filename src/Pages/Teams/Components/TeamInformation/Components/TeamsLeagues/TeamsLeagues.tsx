import styles from './TeamsLeagues.module.css';
import { FC } from 'react';
interface Leagues {
  conference: string, division: string
}
interface Props {
  leagues: Record<string, Leagues> ;
}

const TeamsLeagues: FC<Props> = ({ leagues }) => {
  return <div>
          <p className={styles.titleDescription}>Leagues:</p>
          <div className={styles.leagueContainer}>
          {Object.keys(leagues).map((league: string) => (
                  <div className={styles.container}>
                    <span className={styles.city}>{league}</span>
                    <p className={styles.league}>Conference:</p> <p className={styles.description}>{leagues[league].conference}</p>
                    <p className={styles.league}>Division:</p> <p className={styles.description}>{leagues[league].division}</p>
                  </div>
                  )) }
          </div>
        </div>
  
};

export default TeamsLeagues;