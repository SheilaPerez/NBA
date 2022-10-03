import Menu from './Components/Menu';
import Teams from './Pages/Teams';
import FoundPlayers from './Pages/PlayersList/Components/FoundPlayers';
import PrincipalPage from './Pages/PrincipalPage';
import TeamInformation from './Pages/Teams/Components/TeamInformation';
import Banner from './Components/Banner';
import PlayersList from './Pages/PlayersList';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
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
    <div>
      <Router>
        <Banner></Banner>
        <Menu></Menu>
        <div className={styles.routesContainer}>
          <Routes>
            <Route path="/" element={<PrincipalPage></PrincipalPage>}></Route>   
            <Route path="/teams"  element={<Teams teamsList={teams} />}></Route>  
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
