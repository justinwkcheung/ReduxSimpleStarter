import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  // to account for when for video is null/hasn't been fetched yet
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`
  // const url = 'https://www.youtube.com/embed/' + videoId;
  
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.channelTitle}</div>
          <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail; 
