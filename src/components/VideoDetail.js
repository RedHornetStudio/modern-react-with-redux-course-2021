import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) {
    return <div className="video-detail">Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail ui segment">
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;