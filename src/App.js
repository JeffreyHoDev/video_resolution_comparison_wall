import { Button, Link } from '@mui/material';
import './App.scss';

import { useState } from 'react'
import NormalContainer from './pages/normal-container.page';
import RainContainer from './pages/rain-container';
const App = () => {


  const [ playVideos, setPlayVideos ] = useState(false)
  const [ scenario, setScenario ] = useState("normal")
  const handleClick = () => {
    setPlayVideos(!playVideos)
  }

  return (
    <div className="App">
      <h1>Video Resolution Comparison Wall ----- <Link href="#"> To Calculator</Link></h1>
      <div className='scenario-buttons-group'>
        <Button onClick={() => setScenario("normal")}>Normal View</Button>
        <Button onClick={() => setScenario("rain")}>Rain View</Button>
      </div>
      <Button className='play-pause-button' variant='contained' onClick={handleClick} color={playVideos ? "error" : "success"}>{playVideos ? "Pause Videos" : "Play Videos"}</Button>
        {
          scenario === "normal" ? (
            <NormalContainer setPlayVideos={setPlayVideos} playVideos={playVideos}/>
          ): (
            <RainContainer setPlayVideos={setPlayVideos} playVideos={playVideos}/>
          )
        }

    </div>
  );
}

export default App;
