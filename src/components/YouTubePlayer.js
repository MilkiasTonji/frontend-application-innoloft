import React from 'react';

import YouTube from 'react-youtube';

const YouTubePlayer = ({ _src }) => {

  const opts = {
    height: '500',
    width: '100%',
    onError: (err) => {
      console.log("Player error: ", err)
    }
  };

  const _onReady = (event) =>  {
    event.target.pauseVideo();
  }
  
  const videoId = "bVGpsVe_3Ik" //_src?.split("=")[1]

  console.log("videoId: ", videoId);

  return <YouTube videoId={videoId} opts={opts} onReady={_onReady} />

};


export default YouTubePlayer;