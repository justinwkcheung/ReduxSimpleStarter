import React from 'react';

/*
Usually we have a functional component (indeed it is just a function that returns HTML)

however we also have class-based component that is aware of itself (e.g an input that knows someone typed)
- still need to export SearchBar but you must extend React.Component
- You also need to include render() and return HTML

In general use functional components unless you need extra functionality.

Define a new class called SearchBar and give it all the functionality from React Component class
*/

/*
Any class has a state
- any time a state is updated, the class re renders

*/
class SearchBar extends React.Component {
  render() {
    return <input onChange={event => console.log(event.target.value)}/>;
  }

  // setting up an event handler for input
}

export default SearchBar; //this makes the component class available to other files
