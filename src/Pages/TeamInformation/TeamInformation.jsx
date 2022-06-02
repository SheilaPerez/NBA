import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../TeamInformation/TeamInformation.module.css';
import TeamsLeagues from '../../Components/TeamsLeagues';
import NotFoundImage from '../../Components/NotFoundImage';

const TeamInformation = () => {
  const [teamInfo, setTeamInfo] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get('https://api-nba-v1.p.rapidapi.com/teams', {
      params: { id },
      headers: {
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e4ac503646mshd5339019272f688p15e8b5jsn8e5d67828ce6'
      }
    }).then(function (response) {
      setTeamInfo(response.data.response);
    });
  }, [])
  
  return teamInfo ? (
    <div className={styles.container}>
      {teamInfo[0].logo === null ?
        <NotFoundImage size={'big'}></NotFoundImage>
              :
        <img src={teamInfo[0].logo} className={styles.logo} />}
        <ul>
        <li>
          <p className={styles.titleDescription}>Name: </p>
          <p className={styles.description}>{teamInfo[0].name}</p>
        </li>
        <li>
          <p className={styles.titleDescription}>NickName: </p>
          <p className={styles.description}>{teamInfo[0].nickname}</p>        
        </li>
        <li>
          <p className={styles.titleDescription}>City: </p>
          <p className={styles.description}>{teamInfo[0].city}</p>
        </li> 
        <li>
          <p className={styles.titleDescription}>Code: </p>
          <p className={styles.description}>{teamInfo[0].code}</p>
        </li>
        {teamInfo[0].allStar ? <p className={styles.description}>Participated in All Star</p> : <p className={styles.description}>Didn't participate in All Star</p>}
        <li>
        <p className={styles.titleDescription}>Leagues:</p>
        </li>
        <TeamsLeagues leagues={teamInfo[0].leagues}></TeamsLeagues>
      </ul>  
    </div>
  ) : null
};

export default TeamInformation;
