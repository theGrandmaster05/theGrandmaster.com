import React from 'react';
import Home from './Home';
import Nav from './partials/Nav';
import Footer from './partials/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default App;