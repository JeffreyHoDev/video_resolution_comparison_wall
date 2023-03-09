import VideoComponent from "../component/video.component"

const NormalContainer = ({ setPlayVideos ,playVideos }) => {
    return (
        <div className='main-container'>
            <h5>Normal Scenario</h5>
            <div className='info-bar'>
            <div className='resolution-container-group'>
                <h4>1080p</h4>
                <div className='video-list'>
                <VideoComponent setPlayVideos={setPlayVideos} playVideos={playVideos} message="Day" sourceVideo="1080p-day-normal" messageContent={`The video is taken around 9am SGT`}/>
                <VideoComponent setPlayVideos={setPlayVideos} playVideos={playVideos} message="Night" sourceVideo="1080p-night-normal" messageContent={`The video is taken around 9pm SGT`}/>
                </div>
            </div>
            <div className='resolution-container-group'>
                <h4>720p</h4>
                <div className='video-list'>
                <VideoComponent setPlayVideos={setPlayVideos} playVideos={playVideos} message="Day" sourceVideo="720p-day-normal" messageContent={`The video is taken around 9am SGT`}/>
                <VideoComponent setPlayVideos={setPlayVideos} playVideos={playVideos} message="Night" sourceVideo="720p-night-normal" messageContent={`The video is taken around 9pm SGT`}/>
                </div>
            </div>
            </div>
            <div className='info-bar'>
            <div className='resolution-container-group'>
                <h4>480p</h4>
                <div className='video-list'>
                <VideoComponent setPlayVideos={setPlayVideos} playVideos={playVideos} message="Day" sourceVideo="480p-day-normal" messageContent={`The video is taken around 9am SGT`}/>
                <VideoComponent setPlayVideos={setPlayVideos} playVideos={playVideos} message="Night" sourceVideo="480p-night-normal" messageContent={`The video is taken around 9pm SGT`}/>
                </div>
            </div>
            <div className='resolution-container-group'>
                <h4>360p</h4>
                <div className='video-list'>
                <VideoComponent setPlayVideos={setPlayVideos} playVideos={playVideos} message="Day" sourceVideo="360p-day-normal" messageContent={`The video is taken around 9am SGT`}/>
                <VideoComponent setPlayVideos={setPlayVideos} playVideos={playVideos} message="Night" sourceVideo="360p-night-normal" messageContent={`The video is taken around 9pm SGT`}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NormalContainer