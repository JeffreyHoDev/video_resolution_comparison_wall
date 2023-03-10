import { useRef } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import "./video.component.styles.scss"



import { useEffect } from 'react';

const VideoComponent = ({ setCountPlayedFinish, sourceVideo, message, messageContent, playVideos, setPlayVideos, setLoadStatus }) => {

    const videoRef = useRef(undefined)

    useEffect(() => {
        if(playVideos){
            videoRef.current.play()
        }else {
            videoRef.current.pause()
        }
    }, [playVideos])

    const onHandleEnd = () => {
        setCountPlayedFinish(prev => prev+1)
    }

    // const handleFullScreen = () => {
    //     videoRef.current.requestFullscreen()
    // }

    return (
        <>
            <Card className='video-component-overall-card' sx={{m: 1}}>
                <div className='video-component-overall-container'>
                    <div className='video-player-container'>
                        <video className='video' ref={videoRef} onEnded={onHandleEnd} muted="muted">
                            {/* <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/> */}
                            { sourceVideo ? <source src={require(`../assets/${sourceVideo}.mp4`)} type="video/mp4"/> : <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>}
                        </video>
                    </div>
                </div>
                <CardContent>
                    Scenario: {message}
                    { messageContent ? <Box sx={{p: 1}}><Typography style={{fontFamily: "Roboto Mono, monospace"}} variant='body2'>{messageContent}</Typography></Box> : ""}
                </CardContent>    
            </Card>

                {/* <CardContent>
                    Scenario: {message}
                    { messageContent ? <Box sx={{p: 3}}><Typography variant='body2'>{messageContent}</Typography></Box> : ""}
                </CardContent>
            </Card> */}
        </>
    )
}

export default VideoComponent