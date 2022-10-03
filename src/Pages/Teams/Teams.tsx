import styles from './Teams.module.css';
import ListTeams from './Components/ListTeams';
import { FC } from 'react';
import { Team } from './Teams.types';
interface Props {
  teamsList: Array<Team>
}

const Teams: FC<Props>= ({teamsList}) => {
  return (
    <div className={styles.teamsContainer}>
      <h1 className={styles.title}> - list teams - </h1>
      <ListTeams teamsList={teamsList}></ListTeams>
    </div>
  )
};

export default Teams;
