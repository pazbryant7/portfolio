import React, { useState } from 'react';
import Modal from 'react-modal';
import Social from './Social';

Modal.setAppElement('#root');

const Variety = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

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
              <div className="image" onClick={toggleModal}>
                <img src="assets/img/thumbs/react.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: 'url(assets/img/thumbs/react.png)',
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
                <h3 className="title" onClick={toggleModal}>
                  My personal dotfiles
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModal}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="dotfiles"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModal}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/terminal.png" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              'url(assets/img/thumbs/terminal.png)',
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Bryant Paz</a>
                            <span>20 December 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                          <a href="https://github.com/plbryant/dotfiles">
                            My personal dotfiles
                          </a>
                        </h3>
                      </div>
                      <div className="main_content ">
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Variety;
