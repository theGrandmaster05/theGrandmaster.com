import React from 'react';
import Nav from './partials/Nav';
import Blog from './Blog';
import Footer from './partials/Footer';

class Home extends React.Component {
    render() {
        return(
            <div className="app-body">
                <Nav />
                <Blog />
                <Footer />
            </div>
        )
    }
}

export default Home;