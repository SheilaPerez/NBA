import Menu from '../src/Components/Menu';
import Teams from '../src/Pages/Teams';
import FoundPlayers from '../src/Pages/FoundPlayers';
import PrincipalPage from '../src/Pages/PrincipalPage';
import TeamInformation from '../src/Pages/TeamInformation';
import Banner from '../src/Components/Banner';
import PlayersList from '../src/Pages/PlayersList';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('https://api-nba-v1.p.rapidapi.com/teams', {
      headers: {
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e4ac503646mshd5339019272f688p15e8b5jsn8e5d67828ce6'
      }
    }).then(function (response) {
      console.log(response.data.response);
      setTeams(response.data.response);
    });
  }, [])
  
  return (
    <div className={styles.container}>
      <Router>
        <Menu></Menu>
        <div>
          <Banner></Banner>
          <Routes>
            <Route path="/" exact element={<PrincipalPage></PrincipalPage>}></Route>   
            <Route path="/teams"  element={<Teams teams={teams} />}></Route>  
            <Route path="/foundplayers" element={<FoundPlayers teams={teams}></FoundPlayers>}></Route>
            <Route path="/teams/:id" element={<TeamInformation></TeamInformation>}></Route>
            <Route path="/playerslist/:id" element={<PlayersList />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
    

  );
}

export default App;
