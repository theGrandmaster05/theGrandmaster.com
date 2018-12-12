import React from 'react';
import Home from './Home';
import Nav from './partials/Nav';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Home />
            </div>
        )
    }
}

export default App;