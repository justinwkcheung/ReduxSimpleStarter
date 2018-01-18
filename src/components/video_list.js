import React from 'react';
import VideoListItem from './video_list_items.js';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={ video }/>
    //Here we are setting keys so each list item has a unique ID equal to the youtube video etag. 
  });
  // for each video in props, loop through to return a video list item 
  
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList
