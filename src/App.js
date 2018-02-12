import React, { Component } from 'react';
import Star from './Star.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Star numberStars={5} size='small' rated={2} />
            </div>
        );
    }
}

export default App;
