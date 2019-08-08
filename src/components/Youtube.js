import React from 'react';
import YouTube from 'react-youtube';
 
class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      position: 'center',
      playerVars: { //"https://www.youtube.com/watch?v=ZMYk8toKD74"
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="ZMYk8toKD74"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Example;