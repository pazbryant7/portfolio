import React from 'react';

const Variety = () => {
    return (
        <>
            <div className="tokyo_tm_news">
                <div className="tokyo_tm_title">
                    <div className="title_flex">
                        <div className="left">
                            <span>Personal space</span>
                            <h3>Latest updates</h3>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="list_inner">
                            <a
                                href="https://github.com/plbryant/dotfiles"
                                className="image"
                                target="_blank"
                            >
                                <img
                                    src="assets/img/thumbs/terminal.png"
                                    alt="thumb"
                                />
                                <div
                                    className="main"
                                    style={{
                                        backgroundImage:
                                            'url(assets/img/thumbs/terminal.png)',
                                    }}
                                ></div>
                            </a>
                            <div className="details">
                                <div className="extra">
                                    <p className="date">
                                        By <a href="#">Bryant Paz</a>
                                        <span>20 December 2022</span>
                                    </p>
                                </div>
                                <h3 className="title">Personal dotfiles</h3>
                                <div className="tokyo_tm_read_more">
                                    <a>
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="list_inner">
                            <a
                                className="image"
                                href="https://github.com/plbryant/nvim"
                                target="_blank"
                            >
                                <img
                                    src="assets/img/thumbs/nvim.png"
                                    alt="thumb"
                                />
                                <div
                                    className="main"
                                    style={{
                                        backgroundImage:
                                            'url(assets/img/thumbs/nvim.png)',
                                    }}
                                ></div>
                            </a>
                            <div className="details">
                                <div className="extra">
                                    <p className="date">
                                        By <a href="#">Bryant Paz</a>
                                        <span>4 December 2023</span>
                                    </p>
                                </div>
                                <h3 className="title">Neovim configuration</h3>
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
