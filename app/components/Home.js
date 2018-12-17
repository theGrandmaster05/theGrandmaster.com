import React from 'react';
import Nav from './partials/Nav';
import Blog from './Blog';
import Footer from './partials/Footer';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Nav />
                <Footer />
            </div>
        )
    }
}

export default Home;