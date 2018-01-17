import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAqfTWXS2_IHZxJTzv0VRR1XtAphwCBFwM';

YTSearch({key:API_KEY, term:'surfboards'}, function(data) {
  console.log(data);
});

// Note: there should only ever be one component per file

/*Create a new component to produce HTML
In react, instead of function (), we use () =>
*/
const App = () => {
  return <div>
    <SearchBar />
  </div>;
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
