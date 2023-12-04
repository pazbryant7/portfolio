import React from 'react';

const Variety = () => {
    return (
        <>
            <div className="tokyo_tm_news">
                <div className="tokyo_tm_title">
                    <div className="title_flex">
                        <div className="left">
                            <span>Drafts</span>
                            <h3>Latest drafts</h3>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="list_inner">
                            <div className="image">
                                <img
                                    src="assets/img/thumbs/react.png"
                                    alt="thumb"
                                />
                                <div
                                    className="main"
                                    style={{
                                        backgroundImage:
                                            'url(assets/img/thumbs/react.png)',
                                    }}
                                ></div>
                            </div>
                            <div className="details">
                                <div className="extra">
                                    <p className="date">
                                        By <a href="#">Bryant Paz</a>
                                        <span>20 December 2022</span>
                                    </p>
                                </div>
                                <h3 className="title">My personal dotfiles</h3>
                                <div className="tokyo_tm_read_more">
                                    <a>
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Variety;
