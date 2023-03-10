import VideoComponent from "../component/video.component"
import './container.styles.scss'
const RainContainer = ({ setPlayVideos ,playVideos, setCountPlayedFinish, countPlayedFinish }) => {
    return (
        <div className='main-container'>
        <h5>Rain Scenario</h5>
        <div className='info-bar'>
          <div className='resolution-container-group'>
            <h4>1080p</h4>
            <div className='video-list'>
              <VideoComponent setCountPlayedFinish={setCountPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos} message="Day (Raining)" sourceVideo="1080p-day-rain" messageContent={`The video is taken around 5 - 6pm SGT`}/>
              <VideoComponent setCountPlayedFinish={setCountPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos} message="Night (Raining)" sourceVideo="1080p-night-rain" messageContent={`The video is taken around 9pm SGT`}/>
            </div>
          </div>
          <div className='resolution-container-group'>
            <h4>720p</h4>
            <div className='video-list'>
              <VideoComponent setCountPlayedFinish={setCountPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos} message="Day (Raining)" sourceVideo="720p-day-rain" messageContent={`The video is taken around 5 - 6pm SGT`}/>
              <VideoComponent setCountPlayedFinish={setCountPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos} message="Night (Raining)" sourceVideo="720p-night-rain" messageContent={`The video is taken around 9pm SGT`}/>
            </div>
          </div>
        </div>
        <div className='info-bar'>
          <div className='resolution-container-group'>
            <h4>480p</h4>
            <div className='video-list'>
              <VideoComponent setCountPlayedFinish={setCountPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos} message="Day (Raining)" sourceVideo="480p-day-rain" messageContent={`The video is taken around 5 - 6pm SGT`}/>
              <VideoComponent setCountPlayedFinish={setCountPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos} message="Night (Raining)" sourceVideo="480p-night-rain" messageContent={`The video is taken around 9pm SGT`}/>
            </div>
          </div>
          <div className='resolution-container-group'>
            <h4>360p</h4>
            <div className='video-list'>
              <VideoComponent setCountPlayedFinish={setCountPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos} message="Day (Raining)" sourceVideo="360p-day-rain" messageContent={`The video is taken around 5 - 6pm SGT`}/>
              <VideoComponent setCountPlayedFinish={setCountPlayedFinish} setPlayVideos={setPlayVideos} playVideos={playVideos} message="Night (Raining)" sourceVideo="360p-night-rain" messageContent={`The video is taken around 9pm SGT`}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default RainContainer