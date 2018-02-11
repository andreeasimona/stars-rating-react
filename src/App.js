import React, { Component } from 'react';
import Star from './Star.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Star numberStars='5' size='big'/>
      </div>
    );
  }
}

export default App;
