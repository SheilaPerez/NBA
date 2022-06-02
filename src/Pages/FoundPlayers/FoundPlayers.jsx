import styles from '../FoundPlayers/FoundPlayers.module.css';
import NotFoundImage from '../../Components/NotFoundImage';
import { Link } from "react-router-dom";

const FoundPlayers = ({teams:teams}) => {

  return (
    <div className={styles.playersContainer}>
      <h1 className={styles.title}> - list players - </h1>
      {teams.map((team) => {
        return (
          <div className={styles.listContainer}>
            <div className={styles.logoName}>
              {team.logo === null ?
                <NotFoundImage size={'small'} className={styles.logo}></NotFoundImage>
                :
                <img src={team.logo} className={styles.logo} />}
                <p className={styles.TitleDescription}>{team.name}</p>
            </div>
            <Link to={`/playerslist/${team.id}`} className={styles.linkPlayers}>Players</Link>
          </div>
        )
      })}
    </div>
  )
};

export default FoundPlayers;
