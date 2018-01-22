import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyAqfTWXS2_IHZxJTzv0VRR1XtAphwCBFwM';

// YTSearch({key:API_KEY, term:'surfboards'}, function(data) {
//   console.log(data);
// });

// Note: there should only ever be one component per file

/*Create a new component to produce HTML
In react, instead of function (), we use () =>
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [], 
      selectedVideo: null
    };
    // we can name state anything we want. in this case calling it videos makes sense.
    
    YTSearch({key:API_KEY, term:'stuckmann'}, (videos) => {
      this.setState({ 
        videos:videos,
        selectedVideo:videos[1]
      });
      // because key is videos and value is videos, ES6 allows us to just put videos once in the setState function. 
      // Everytime an instance of app runs we run this video search and set state to data. 
    });
  }
  render() {
    return <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
        onVideoSelect={x => this.setState({selectedVideo:x})}
        videos={this.state.videos} /> 
    </div>;
  }
  /* Here we are passing the state (videos) created in App to VideoList which is known as passing a prop, we are passing prop videos to videolist
   Anytime App re-renders, VideoList gets the new update props as an argument to the VideoList functional component
   note: for a functional component, props is an argument, for a class component, it is available as this.props if defined by a parent component 
   */
}


/*Take this component's generated HTML and put it on the page (in the DOM)
Don't use React.render
- Warning: React.render is deprecated. Please use ReactDOM.render from require('react-dom') instead.

Don't just write App, you are just passing the class -- instead you must pass an
instance by writing <App></App> or <App /> which compiles to create an instance.
These are known as JSX Tags

ReactDOM also takes a second argument, an existing DOM node on the page to place the newly rendered HTML
-- you do this by passing a reference to that element
*/
ReactDOM.render(<App></App>, document.querySelector('.container'));
