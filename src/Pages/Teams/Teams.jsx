import styles from '../Teams/Teams.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Teams = () => {
  const [teamsList, setTeamsList] = useState([]);

useEffect(() => {
  axios.get('https://api-nba-v1.p.rapidapi.com/teams', {
    headers: {
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'e4ac503646mshd5339019272f688p15e8b5jsn8e5d67828ce6'
    }
  }).then(function (response) {
    console.log(response.data.response);
    const teamsArray = response.data.response;
    setTeamsList(teamsArray);
  }).catch(function (error) {
    console.error(error);
  });
},[])

  return (
    <div className={styles.TeamsContainer}>
      <h1>list teams</h1>
      {teamsList.map((team) => {
        return (
          <div className={styles.listContainer}>
            {team.logo === null ?
              <img src="https://cdn3.vectorstock.com/i/1000x1000/31/47/404-error-page-not-found-design-template-vector-21393147.jpg" className={styles.logoError} />
              :
              <img src={team.logo} className={styles.logo} />}
            <p className={styles.TitleDescription}>Name:</p><p className={styles.description}>{team.name}</p>
            <p className={styles.TitleDescription}>Code:</p><p className={styles.description}>{team.code}</p>
            <p className={styles.TitleDescription}>City:</p><p className={styles.description}>{team.city}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Teams;
