import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tooltip } from 'react-tooltip';
import Modal from 'react-modal';
import React, { useState } from 'react';

const Portfolio = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);

  function toggleModal1() {
    setOpen1(!isOpen1);
  }

  function toggleModal2() {
    setOpen2(!isOpen2);
  }

  function toggleModal3() {
    setOpen3(!isOpen3);
  }

  function toggleModal4() {
    setOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_portfolio">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Portfollio</span>
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
              <Tab>Variety</Tab>
            </TabList>

            <div className="list_wrapper">
              {/* all */}
              <TabPanel>
                <ul className="portfolio_list">
                  {/* branding */}
                  <li>
                    <div className="inner">
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img
                          src="assets/img/portfolio/branding.png"
                          alt="Branding"
                          data-tip
                          data-for="branding"
                        />
                        <Tooltip
                          id="branding"
                          place="bottom"
                          type="light"
                          effect="float"
                          className="tooltip-wrapper"
                        >
                          <div>
                            <h5>Personal branding</h5>
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
                        <img
                          src="assets/img/portfolio/resume.png"
                          alt="My resume"
                          data-tip
                          data-for="resume"
                        />
                        <Tooltip
                          id="resume"
                          place="bottom"
                          type="light"
                          effect="float"
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
                  {/* figma */}
                  <li>
                    <div className="inner">
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img
                          src="assets/img/portfolio/web.png"
                          alt="Figma designs"
                          data-tip
                          data-for="figma"
                        />
                        <Tooltip
                          id="figma"
                          place="bottom"
                          type="light"
                          effect="float"
                          className="tooltip-wrapper"
                        >
                          <div>
                            <h5>Figma design</h5>
                            <span>Projects</span>
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </li>
                  {/* freedom */}
                  <li>
                    <div className="inner">
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img
                          src="assets/img/portfolio/freedom.png"
                          alt="cluod storage"
                          data-tip
                          data-for="project"
                          onClick={() => setOpen1(true)}
                        />
                        <Tooltip
                          id="project"
                          place="bottom"
                          type="light"
                          effect="float"
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
                        <img
                          src="assets/img/portfolio/house.png"
                          alt="Confort zone"
                          data-tip
                          data-for="confort"
                          onClick={() => setOpen2(true)}
                        />
                        <Tooltip
                          id="confort"
                          place="bottom"
                          type="light"
                          effect="float"
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
                        <img
                          src="assets/img/portfolio/pasos.png"
                          alt="Safe steps"
                          data-tip
                          data-for="safesteps"
                          onClick={() => setOpen3(true)}
                        />
                        <Tooltip
                          id="safesteps"
                          place="bottom"
                          type="light"
                          effect="float"
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
                        <img
                          src="assets/img/portfolio/plan.png"
                          alt="cloud storage"
                          data-tip
                          data-for="cloudstorage"
                          onClick={() => setOpen4(true)}
                        />
                        <Tooltip
                          id="cloudstorage"
                          place="bottom"
                          type="light"
                          effect="float"
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
                        <img
                          src="assets/img/portfolio/freedom.png"
                          alt="cluod storage"
                          data-tip
                          data-for="project"
                          onClick={() => setOpen1(true)}
                        />
                        <Tooltip
                          id="project"
                          place="bottom"
                          type="light"
                          effect="float"
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
                        <img
                          src="assets/img/portfolio/house.png"
                          alt="Confort zone"
                          data-tip
                          data-for="confort"
                          onClick={() => setOpen2(true)}
                        />
                        <Tooltip
                          id="confort"
                          place="bottom"
                          type="light"
                          effect="float"
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
                        <img
                          src="assets/img/portfolio/pasos.png"
                          alt="Safe steps"
                          data-tip
                          data-for="safesteps"
                          onClick={() => setOpen3(true)}
                        />
                        <Tooltip
                          id="safesteps"
                          place="bottom"
                          type="light"
                          effect="float"
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
                        <img
                          src="assets/img/portfolio/plan.png"
                          alt="cloud storage"
                          data-tip
                          data-for="cloudstorage"
                          onClick={() => setOpen4(true)}
                        />
                        <Tooltip
                          id="cloudstorage"
                          place="bottom"
                          type="light"
                          effect="float"
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
                <ul className="portfolio_list pswp-gallery" id="my-gallery">
                  {/* branding */}
                  <li>
                    <div className="inner">
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img
                          src="assets/img/portfolio/branding.png"
                          alt="Branding"
                          data-pswp-width="1875"
                          data-pswp-height="2500"
                        />
                        <Tooltip
                          id="branding"
                          place="bottom"
                          type="light"
                          effect="float"
                          className="tooltip-wrapper"
                        >
                          <div>
                            <h5>Personal branding</h5>
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
                        <img
                          src="assets/img/portfolio/resume.png"
                          alt="My resume"
                          data-pswp-width="1875"
                          data-pswp-height="2500"
                        />
                        <Tooltip
                          id="resume"
                          place="bottom"
                          type="light"
                          effect="float"
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
              <TabPanel>
                <ul className="portfolio_list">
                  {/* figma */}
                  <li>
                    <div className="inner">
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img
                          src="assets/img/portfolio/web.png"
                          alt="Figma designs"
                          data-tip
                          data-for="figma"
                        />
                        <Tooltip
                          id="figma"
                          place="bottom"
                          type="light"
                          effect="float"
                          className="tooltip-wrapper"
                        >
                          <div>
                            <h5>Figma design</h5>
                            <span>Projects</span>
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </li>
                </ul>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>

      <Modal
        isOpen={isOpen1}
        onRequestClose={toggleModal1}
        contentLabel="Freedom"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal1}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/natorus-big.png)',
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>
                  <a href="#">Freedom</a>
                </h3>
                <span>Details</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* comfort zone */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModal2}
        contentLabel="Comfort zone"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal2}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: 'url(assets/img/portfolio/nexter-big.png)',
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>
                  <a href="#">Comfort zone</a>
                </h3>
                <span>Details</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* safe steps */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModal3}
        contentLabel="Safe steps"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal3}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: 'url(assets/img/portfolio/pasos.png)',
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>
                  <a href="https://www.youtube.com/watch?v=d9cMyZs2WPg">
                    Watch video
                  </a>
                </h3>
                <span>Details</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* cloud storage */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModal4}
        contentLabel="Cloud storage"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal4}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/freedom-big.png" alt="freedom" />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      'url(assets/img/portfolio/freedom-big.png)',
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>
                  <a href="#">Cloud storage</a>
                </h3>
                <span>Details</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
