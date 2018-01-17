import React, { Component } from 'react';

/*
Usually we have a functional component (indeed it is just a function that returns HTML)

however we also have class-based component that is aware of itself (e.g an input that knows someone typed)
- still need to export SearchBar but you must extend React.Component
- You also need to include render() and return HTML

In general use functional components unless you need extra functionality.

Define a new class called SearchBar and give it all the functionality from React Component class
*/

/*
Any class has a state object
- any time a component's state is change, the componet and its children re renders
- constructor functions are auto called when a new instance of a component is created
- it is good for initializing variables and state
- the super is calling the parent of component
- this.state is initialized with properties we want to track
- to change state awlways use this.setState();
- we actually want controller components, which means the value of the input is defined by the state

*/
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term:event.target.value })}
        />
      </div>
    );
  }

  // setting up an event handler for input
}

export default SearchBar; //this makes the component class available to other files
