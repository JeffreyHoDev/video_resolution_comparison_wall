import { Button, Link } from '@mui/material';
import './App.scss';

import { useEffect, useState } from 'react'
import NormalContainer from './pages/normal-container.page';
import RainContainer from './pages/rain-container';
const App = () => {


  const [ playVideos, setPlayVideos ] = useState(false)
  const [ scenario, setScenario ] = useState("normal")
  const [ countPlayedFinish, setCountPlayedFinish ] = useState(0)
  const handleClick = () => {
    setPlayVideos(!playVideos)
  }

  useEffect(() => {
    if(countPlayedFinish === 8){
      resetHandler()
    }
  }, [countPlayedFinish])

  const resetHandler = () => {
    setPlayVideos(false)
    setCountPlayedFinish(0)
  }

  return (
    <div className="App">
      <h1>Video Resolution Comparison Wall ----- <Link href="https://jeffreyhodev.github.io/storage_video_bitrate_calculator"> To Calculator</Link></h1>
      <div className='scenario-buttons-group'>
        <Button disabled={playVideos} onClick={() => setScenario("normal")}>Normal View</Button>
        <Button disabled={playVideos} onClick={() => setScenario("rain")}>Rain View</Button>
      </div>
      <Button className='play-pause-button' variant='contained' onClick={handleClick} color={playVideos ? "error" : "success"}>{playVideos ? "Pause Videos" : "Play Videos"}</Button>
        {
          scenario === "normal" ? (
            <NormalContainer setCountPlayedFinish={setCountPlayedFinish} countPlayedFinish={countPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos}/>
          ): (
            <RainContainer setCountPlayedFinish={setCountPlayedFinish} countPlayedFinish={countPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos}/>
          )
        }

    </div>
  );
}

export default App;
