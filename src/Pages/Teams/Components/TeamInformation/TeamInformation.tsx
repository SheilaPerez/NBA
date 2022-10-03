import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './TeamInformation.module.css';
import TeamsLeagues from './Components/TeamsLeagues';
import TeamListItem from './Components/TeamListItem';
interface TeamInfo {
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

const TeamInformation = () => {
  const [teamInfo, setTeamInfo] = useState < TeamInfo | null>(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get('https://api-nba-v1.p.rapidapi.com/teams', {
      params: { id },
      headers: {
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e4ac503646mshd5339019272f688p15e8b5jsn8e5d67828ce6'
      }
    }).then(function (response) {
      setTeamInfo(response.data.response[0]);
    });
  }, [])
  
  return teamInfo ? (
    <div className={styles.container}>
      <div className={styles.tableTitles}>
        <p className={styles.tableTitle}>Name</p>
        <p className={styles.tableTitle}>NickName</p>
        <p className={styles.tableTitle}>City</p>
        <p className={styles.tableTitle}>Code</p>
        <p className={styles.tableTitleAllStart}>All Start</p>
      </div>
      <ul className={styles.ulContainer}>
        <TeamListItem description={teamInfo.name}></TeamListItem>
        <TeamListItem description={teamInfo.nickname}></TeamListItem>
        <TeamListItem description={teamInfo.city}></TeamListItem>
        <TeamListItem description={teamInfo.code}></TeamListItem>
        <div className={styles.ulContainer}>
          {teamInfo.allStar ?
              <TeamListItem description={"Participated in All Star"}></TeamListItem>
              :
              <TeamListItem description={"Didn't participate in All Star"}></TeamListItem>
            }
        </div>
      </ul>
      <TeamsLeagues leagues={teamInfo.leagues}></TeamsLeagues>
    </div>
  ) : null
};

export default TeamInformation;
