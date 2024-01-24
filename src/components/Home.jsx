import React from 'react';
import Social from './Social';

const Home = () => {
    return (
        <>
            <div className="tokyo_tm_home">
                <div className="home_content">
                    <div className="avatar">
                        <div
                            className="image"
                            style={{
                                backgroundImage:
                                    'url(assets/img/portfolio/me.jpg)',
                            }}
                        ></div>
                        {/* END AVATAR IMAGE */}
                    </div>
                    {/* END AVATAR */}
                    <div className="details">
                        <h3 className="name">Bryant Paz</h3>
                        <p className="job">
                            Web developer | Typescript | Node | React , GraphQL
                            and Linux enthusiast.
                        </p>
                        {/* END JOB */}
                        <Social />
                    </div>
                    {/* END DETAILS */}
                </div>
                {/* END HOME CONTENT */}
            </div>
            {/* END HOME */}
        </>
    );
};

export default Home;
