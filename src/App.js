import Menu from '../src/Components/Menu';
import Teams from '../src/Pages/Teams';
import Players from '../src/Pages/Players';
import PrincipalPage from '../src/Pages/PrincipalPage';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/" exact element={<PrincipalPage></PrincipalPage>}></Route>   
          <Route path="/teams" element={<Teams></Teams>}></Route>  
          <Route path="/players" element={<Players></Players>}></Route>    
        </Routes>
      </Router>
    </div>
    

  );
}

export default App;
