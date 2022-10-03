import { FC } from 'react';
import styles from './ListTeams.module.css';
import { useNavigate } from 'react-router-dom';
import { Team } from '../../Teams.types';

interface Props {
    teamsList: Array<Team>;
  }

const ListTeams: FC<Props> = ({ teamsList }) => {
    const navigate = useNavigate();
console.log("team", teamsList)
    const handleClickTeam = (team: Team) => {
        navigate(`/teams/${team.id}`);
      }
      
    return (
        <div className={styles.listContent}>
            {teamsList.map((team: Team) => {
                return (
                    <div onClick={() => handleClickTeam(team)} className={styles.listContainer}>
                        <img src={team.logo} className={styles.logo}></img>
                        <p className={styles.TitleDescription}></p><p className={styles.name}>{team.name}</p>
                        <p className={styles.TitleDescription}>Code:</p><p className={styles.description}>{team.code}</p>
                        <p className={styles.TitleDescription}>City:</p><p className={styles.description}>{team.city}</p>
                    </div>
                )
            })} 
        </div>
    )
}

export default ListTeams;