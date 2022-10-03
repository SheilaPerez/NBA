import styles from './FoundPlayers.module.css';
import { Link } from "react-router-dom";
import { FC } from 'react';
interface Team {
  allStar: boolean;
  city: string;
  code: string;
  id: number;
  leagues: Record<string, Leagues>;
  logo: string;
  name: string;
  nbaFranchise: boolean;
  nickname: string;
}
interface Leagues {
  conference: string, division: string
}
interface Props {
  teams: Array<Team>;
}

const FoundPlayers: FC<Props> = ({teams}) => {
  return (
    <div className={styles.playersContainer}>
      <h1 className={styles.title}> - list players - </h1>
      <div className={styles.listTitles}>
        <p>Team</p>
        <p>Check players</p>
      </div>
      {teams.map((team) => {
        return (
          <div className={styles.listContainer}>
            <p className={styles.TitleDescription}>{team.name}</p>
            <Link to={`/playerslist/${team.id}`} className={styles.linkPlayers}>Players</Link>
          </div>
        )
      })}
    </div>
  )
};

export default FoundPlayers;
