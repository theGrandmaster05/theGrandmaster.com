import React from 'react';

class Blog extends React.Component {
    render() {
        return(
            <div className="blog-posts-page">
                <div className="single-post">
                    <h4 className="title">
                        Using the aria-live attribute on HTML elements
                    </h4>
                    <span className="date">
                        <a href="">
                            theGrandmaster
                        </a> - Dec 17, 2019 - #tags
                    </span>
                    <p className="snippet">
                        Actually, a lot of the things im going to be writing here are jibber jabber, so please dont put all of your mind into this part of the code at least for now
                        and i could just have copied and pasted what i have above but, actually whats the point of that?, well if you ask me i will tell you that i dont 
                        know, why do we even do things <a href="">read more 
                            <svg>

                            </svg>
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Blog;