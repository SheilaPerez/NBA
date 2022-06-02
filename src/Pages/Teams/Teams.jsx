import styles from '../Teams/Teams.module.css';
import { useNavigate } from 'react-router-dom';
import NotFoundImage from '../../Components/NotFoundImage';

const Teams = ({teams:teams}) => {
  const navigate = useNavigate();

  const handleClickTeam = (team) => {
    navigate(`/teams/${team.id}`);
  }
  
  return (
    <div className={styles.teamsContainer}>
      <h1 className={styles.title}> - list teams - </h1>
      {teams.map((team) => {
        return (
          <div onClick={ () => handleClickTeam(team) } className={styles.listContainer}>
            {team.logo === null ?
              <NotFoundImage size={'small'} className={styles.logo}></NotFoundImage>
              :
              <img src={team.logo} className={styles.logo} />}
            <p className={styles.TitleDescription}></p><p className={styles.description}>{team.name}</p>
            <p className={styles.TitleDescription}>Code:</p><p className={styles.description}>{team.code}</p>
            <p className={styles.TitleDescription}>City:</p><p className={styles.description}>{team.city}</p>
          </div>
        )
      })} 
    </div>
  )
};

export default Teams;
