import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tooltip } from 'react-tooltip';

const Portfolio = () => {
    return (
        <>
            <div className="tokyo_tm_portfolio">
                <div className="tokyo_tm_title">
                    <div className="title_flex">
                        <div className="left">
                            <span>Portfolio</span>
                            <h3>Portfolio</h3>
                        </div>
                    </div>
                </div>
                <div className="portfolio_filter">
                    <Tabs>
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Projects</Tab>
                            <Tab>Branding</Tab>
                        </TabList>

                        <div className="list_wrapper">
                            {/* all */}
                            <TabPanel>
                                <ul className="portfolio_list">
                                    {/* branding */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=404-22&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/branding.png"
                                                        alt="Branding"
                                                        data-tooltip-id="branding"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="branding"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>
                                                            Personal branding
                                                        </h5>
                                                        <span>Branding</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* resume */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/DoIKrzMHSKeVFbXiAB3T1E/resumes?type=design&node-id=0-1&mode=design&t=jSiCBp7gXgaKp7yf-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/resume.png"
                                                        alt="My resume"
                                                        data-tooltip-id="resume"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="resume"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>My resume</h5>
                                                        <span>Branding</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* freedom */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=0-1&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/freedom.png"
                                                        alt="cluod storage"
                                                        data-tooltip-id="project"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="project"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>Freedom</h5>
                                                        <span>Projects</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* comfort zone */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=0-1&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/house.png"
                                                        alt="Confort zone"
                                                        data-tooltip-id="confort"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="confort"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>Confort zone</h5>
                                                        <span>Projects</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* pasos seguros */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=0-1&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/pasos.png"
                                                        alt="Safe steps"
                                                        data-tooltip-id="safesteps"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="safesteps"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>Safe steps</h5>
                                                        <span>Projects</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* plans */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=0-1&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/plan.png"
                                                        alt="cloud storage"
                                                        data-tooltip-id="cloudstorage"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="cloudstorage"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>Cloud storage</h5>
                                                        <span>Projects</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </TabPanel>
                            {/* projects */}
                            <TabPanel>
                                <ul className="portfolio_list">
                                    {/* freedom */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=0-1&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/freedom.png"
                                                        alt="cluod storage"
                                                        data-tooltip-id="project"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="project"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>Freedom</h5>
                                                        <span>Projects</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* comfort zone */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=0-1&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/house.png"
                                                        alt="Confort zone"
                                                        data-tooltip-id="confort"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="confort"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>Confort zone</h5>
                                                        <span>Projects</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* pasos seguros */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=0-1&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/pasos.png"
                                                        alt="Safe steps"
                                                        data-tooltip-id="safesteps"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="safesteps"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>Safe steps</h5>
                                                        <span>Projects</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* plans */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=0-1&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/plan.png"
                                                        alt="cloud storage"
                                                        data-tooltip-id="cloudstorage"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="cloudstorage"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>Cloud storage</h5>
                                                        <span>Projects</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </TabPanel>
                            {/* branding */}
                            <TabPanel>
                                <ul
                                    className="portfolio_list pswp-gallery"
                                    id="my-gallery"
                                >
                                    {/* branding */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/5cueB8fhPX6sdA5h1BZxG9/portfolio?type=design&node-id=404-22&mode=design&t=TUrIwSeg1vNXq7YV-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/branding.png"
                                                        alt="Branding"
                                                        data-tooltip-id="branding"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="branding"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>
                                                            Personal branding
                                                        </h5>
                                                        <span>Branding</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                    {/* resume */}
                                    <li>
                                        <div className="inner">
                                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a
                                                    href="https://www.figma.com/file/DoIKrzMHSKeVFbXiAB3T1E/resumes?type=design&node-id=0-1&mode=design&t=jSiCBp7gXgaKp7yf-0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src="assets/img/portfolio/resume.png"
                                                        alt="My resume"
                                                        data-tooltip-id="resume"
                                                        data-tooltip-float="true"
                                                    />
                                                </a>
                                                <Tooltip
                                                    id="resume"
                                                    className="tooltip-wrapper"
                                                >
                                                    <div>
                                                        <h5>My resume</h5>
                                                        <span>Branding</span>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </TabPanel>
                            {/* variety */}
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default Portfolio;