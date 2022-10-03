import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Players } from './PlayerList.types';
import styles from './PlayersList.module.css';
import PlayerCard from './Components/PlayerCard';
const PlayersList = () => {

  const [players, setPlayers] = useState <Players[]>([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get('https://api-nba-v1.p.rapidapi.com/players', {
      params: { team: id, season: 2021 },
      headers: {
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e4ac503646mshd5339019272f688p15e8b5jsn8e5d67828ce6'
      }
    }).then(function (response) {
      console.log("aqui", response.data.response[0]);
      setPlayers(response.data.response);
    });
  }, [])

  return (
    <div className={styles.playersContainer}>
      {players.length > 0 ?
        players && players.map((player) => {
          if (player.height.meters !== null) {
            return (
              <div className={styles.playerCard}>
                <p className={styles.name}>{player.firstname} {player.lastname}</p>
                <PlayerCard titleDescription={'Height:'} property={player.height.meters}></PlayerCard>
                <PlayerCard titleDescription={'Weight:'} property={player.weight.kilograms}></PlayerCard>
                <PlayerCard titleDescription={'Birth:'} property={player.birth.date}></PlayerCard>
                <PlayerCard titleDescription={'Country:'} property={player.birth.country}></PlayerCard>
                <PlayerCard titleDescription={'Years Pro:'} numProperty={player.nba.pro}></PlayerCard>
              </div>
            )
          }  
         })
        : <div className={styles.notFoundContainer}>
            <h1 className={styles.notFound}>not found players</h1>
          </div>
      }
    </div>
  )
};

export default PlayersList;

