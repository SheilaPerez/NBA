import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PlayersList.module.css';

const PlayersList = () => {

  const [players, setPlayers] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get('https://api-nba-v1.p.rapidapi.com/players', {
      params: { team: id, season: 2021  },
      headers: {
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e4ac503646mshd5339019272f688p15e8b5jsn8e5d67828ce6'
      }
    }).then(function (response) {
      console.log("aqui", response.data.response[0]);
      setPlayers(response.data.response);
    });
  }, [])

  return(
    <div className={styles.playersContainer}>
      {players && players.map((player) => {
        if (player.height.meters !== null) {
          return (
            <div className={styles.playerCard}>
              <p className={styles.name}>{player.firstname} {player.lastname}</p>
              <div>
                <p className={styles.titleDescription}>Height:</p><p className={styles.description}>{player.height.meters}</p>
              </div>
              <div>
                <p className={styles.titleDescription}>Weight:</p><p className={styles.description}>{player.weight.kilograms}</p>
              </div>
              <div>
                <p className={styles.titleDescription}>Birth:</p><p className={styles.description}>{player.birth.date}</p>
              </div>
              <div>
                <p className={styles.titleDescription}>Country:</p><p className={styles.description}>{player.birth.country}</p>
              </div>
              <div>
                <p className={styles.titleDescription}>Years Pro:</p><p className={styles.description}>{player.nba.pro}</p>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
};

export default PlayersList;
