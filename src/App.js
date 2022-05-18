import Menu from '../src/Components/Menu';
import Teams from '../src/Pages/Teams';
import Players from '../src/Pages/Players';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu></Menu>}></Route>   
        <Route path="/teams" element={<Teams></Teams>}></Route>  
        <Route path="/players" element={<Players></Players>}></Route>    
      </Routes>
    </Router>
  );
}

export default App;
