import React, { useState } from 'react';
import Modal from 'react-modal';
import Brand from './Brand';

Modal.setAppElement('#root');

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="tokyo_tm_about">
                <div className="about_image ">
                    <img src="assets/img/portfolio/about.jpg" alt="About" />
                </div>
                <div className="description">
                    <h3 className="name">Bryant Paz</h3>
                    <div className="description_inner">
                        <div className="left">
                            <p>
                                As a software engineer with a strong background
                                in computer science and a focus on JavaScript, I
                                have a passion for building interactive and
                                dynamic web applications. I excel in using
                                JavaScript, as well as a variety of frameworks
                                such as React and Node.js, to develop
                                high-quality software. My attention to detail
                                and problem-solving skills allow me to
                                troubleshoot and debug code effectively. I also
                                have excellent communication skills and enjoy
                                collaborating with cross-functional teams to
                                bring projects from concept to launch.
                            </p>
                            <div className="tokyo_tm_button">
                                <button
                                    onClick={toggleModal}
                                    className="ib-button"
                                >
                                    Read More
                                </button>
                                <button
                                    className="ib-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(
                                            '/assets/pdf/resume_english.pdf',
                                            '_blank'
                                        );
                                    }}
                                    type="button"
                                >
                                    Download resume
                                </button>
                            </div>
                            {/* END TOKYO BUTTON */}
                        </div>
                        {/* END LEFT */}
                        <div className="right">
                            <ul>
                                <li>
                                    <p>
                                        <span>Birthday:</span>28.06.1998
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Age:</span>24
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Email:</span>

                                        <a href="mailto:bryantpaz7@outlook.com">
                                            bryantpaz7@outlook.com
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Study:</span>Universidad
                                        Tecnológica Metropolitana
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Freelance:</span>Not available
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Number:</span>+52 9992431998
                                    </p>
                                </li>
                            </ul>
                            {/* END UL */}
                        </div>
                        {/* END RIGHT */}
                    </div>
                    {/* END DESCRIPTION INNER */}
                </div>
            </div>

            {/* START ABOUT POPUP BOX */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="tokyo_tm_modalbox_about">
                    <button className="close-modal" onClick={toggleModal}>
                        <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END POPUP CLOSE BUTTON */}
                    <div className="box-inner">
                        <div className="my_box">
                            <div className="left">
                                <div className="about_title">
                                    <h3>Software Engineer Skills</h3>
                                </div>
                                {/* END ABOUT TITLE */}

                                <div className="tokyo_progress">
                                    {/* javascript */}
                                    <div
                                        className="progress_inner"
                                        data-value="100"
                                    >
                                        <span>
                                            <span className="label">
                                                Javascript
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 100 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* linux */}
                                    <div
                                        className="progress_inner"
                                        data-value="100"
                                    >
                                        <span>
                                            <span className="label">Linux</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 100 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* node */}
                                    <div
                                        className="progress_inner"
                                        data-value="100"
                                    >
                                        <span>
                                            <span className="label">Node</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 100 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* react */}
                                    <div
                                        className="progress_inner"
                                        data-value="50"
                                    >
                                        <span>
                                            <span className="label">React</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 50 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* lua */}
                                    <div
                                        className="progress_inner"
                                        data-value="70"
                                    >
                                        <span>
                                            <span className="label">Lua</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 70 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* rust */}
                                    <div
                                        className="progress_inner"
                                        data-value="30"
                                    >
                                        <span>
                                            <span className="label">Rust</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 30 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* go */}
                                    <div
                                        className="progress_inner"
                                        data-value="10"
                                    >
                                        <span>
                                            <span className="label">Go</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 10 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END PROGRESS */}
                            </div>
                            {/* END LEFT */}

                            <div className="right">
                                <div className="about_title">
                                    <h3>Language Skills</h3>
                                </div>
                                {/* Spanish */}
                                {/* English */}
                                <div className="tokyo_progress">
                                    <div
                                        className="progress_inner"
                                        data-value="100"
                                    >
                                        <span>
                                            <span className="label">
                                                Spanish
                                            </span>
                                            <span className="number">100%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 100 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="progress_inner"
                                        data-value="60"
                                    >
                                        <span>
                                            <span className="label">
                                                English
                                            </span>
                                            <span className="number">75%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 75 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* japanese */}
                                    <div
                                        className="progress_inner"
                                        data-value="10"
                                    >
                                        <span>
                                            <span className="label">
                                                Japanese (current learning)
                                            </span>
                                            <span className="number">10%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 10 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Portuguese */}
                                    <div
                                        className="progress_inner"
                                        data-value="10"
                                    >
                                        <span>
                                            <span className="label">
                                                Portuguese (current learning)
                                            </span>
                                            <span className="number">10%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 10 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Korean */}
                                    <div
                                        className="progress_inner"
                                        data-value="5"
                                    >
                                        <span>
                                            <span className="label">
                                                korean (current learning)
                                            </span>
                                            <span className="number">5%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 5 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* EDN TOKYO PROGRESS */}
                            </div>
                            {/* END RIGHT */}
                        </div>
                        {/* END MYBOX */}

                        <div className="counter">
                            <div className="about_title">
                                <h3>Curious Facts</h3>
                            </div>
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <h3>15+</h3>
                                        <span>Projects Completed</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <h3>120+</h3>
                                        <span>Words per minute</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <h3>1000+</h3>
                                        <span>Linux hours</span>
                                    </div>
                                </li>
                            </ul>
                            {/* END COUNTER CONTENT */}
                        </div>
                        <div className="partners">
                            <div className="about_title">
                                <h3>Others skills</h3>
                            </div>
                            <Brand />
                        </div>
                    </div>
                </div>
            </Modal>
            {/* END ABOUT POPUP BOX */}
        </>
    );
};

export default About;
