import React, { Component } from 'react';

class App extends Component { 
    render() {
      return (
    <div class="ViewContainer">
        <div class="MovieRow">
          <div class="MovieTitle">B E G I N N E R</div>
          <div class="MovieRow__container">
            <div class="MovieBox">
              <div class="MovieBox__info">
                <div class="MovieBox__info__title">
                  Bachata Sensual: Workshop
                </div>
                <div>
                  <i>Wayne Kristal</i>
                </div>
                <div>
                  Learn the fundamental movements necessary to get you to the next level of bachata!
                </div>
              </div>
              <video autoplay muted loop id="myVideo" width="100%" height="100%" preload="auto" playsinline>
                <source src="http://www.html5videoplayer.net/videos/toystory.mp4" type="video/mp4"></source>
              </video>
            </div>
            <div class="MovieBox">
            <div class="MovieBox__info">
                <div class="MovieBox__info__title">
                  Beginner Bachata: Steps
                </div>
                <div>
                  <i>"Wayne Kristal</i>
                </div>
                <div>
                  Learn the fundamental movements necessary to get you to the next level of bachata!
                </div>
              </div>
              <video autoplay muted loop id="myVideo" width="100%" height="100%" preload="auto" playsinline>
                <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4"></source>
              </video>
            </div>
            <div class="MovieBox">
              MovieBox
            </div>
            <div class="MovieBox">
              MovieBox
            </div>
            <div class="MovieBox">
              MovieBox
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default App;