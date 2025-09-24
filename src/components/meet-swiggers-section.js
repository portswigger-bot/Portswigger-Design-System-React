import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './meet-swiggers-section.css'

const MeetSwiggersSection = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-m width-max-content column width-100">
        {props.showHeading === true && (
          <section
            className={`position-relative column justify-center width-100 ${
              props?.alignment === 'center' ? 'align-center' : ''
            } ${props?.alignment === 'left' ? 'align-start' : ''} `}
          >
            <div
              className={`gap-s width-max-content column align-self-center width-100 ${
                props?.alignment === 'center' ? 'align-center' : ''
              } ${props?.alignment === 'left' ? 'align-start' : ''} `}
            >
              {props.showHeading === true && (
                <div className="meet-swiggers-section-container2">
                  {props.headingType === 'H1' && (
                    <h1
                      className={`meet-swiggers-section-text10 heading-1 ${
                        props?.alignment === 'left' ? 'text-left' : ''
                      } ${props?.alignment === 'center' ? 'text-center' : ''} `}
                    >
                      {props.heading ?? (
                        <Fragment>
                          <span className="meet-swiggers-section-text15">
                            Meet the Swiggers
                          </span>
                        </Fragment>
                      )}
                    </h1>
                  )}
                  {props.headingType === 'H2' && (
                    <h2
                      className={`meet-swiggers-section-text11 heading-2 ${
                        props?.alignment === 'left' ? 'text-left' : ''
                      } ${props?.alignment === 'center' ? 'text-center' : ''} `}
                    >
                      {props.heading ?? (
                        <Fragment>
                          <span className="meet-swiggers-section-text15">
                            Meet the Swiggers
                          </span>
                        </Fragment>
                      )}
                    </h2>
                  )}
                  {props.headingType === 'H3' && (
                    <h3
                      className={`meet-swiggers-section-text12 heading-3 ${
                        props?.alignment === 'left' ? 'text-left' : ''
                      } ${props?.alignment === 'center' ? 'text-center' : ''} `}
                    >
                      {props.heading ?? (
                        <Fragment>
                          <span className="meet-swiggers-section-text15">
                            Meet the Swiggers
                          </span>
                        </Fragment>
                      )}
                    </h3>
                  )}
                  {props.headingType === 'H4' && (
                    <h4
                      className={`heading-4 ${
                        props?.alignment === 'left' ? 'text-left' : ''
                      } ${props?.alignment === 'center' ? 'text-center' : ''} `}
                    >
                      {props.heading ?? (
                        <Fragment>
                          <span className="meet-swiggers-section-text15">
                            Meet the Swiggers
                          </span>
                        </Fragment>
                      )}
                    </h4>
                  )}
                </div>
              )}
              {props.showParagraph === true && (
                <span
                  className={` ${
                    props?.alignment === 'left' ? 'text-left' : ''
                  } ${props?.paragraphType === 'body-1' ? 'text-body-1' : ''} ${
                    props?.paragraphType === 'text-intro' ? 'text-intro' : ''
                  } ${props?.alignment === 'center' ? 'text-center' : ''} `}
                >
                  {props.paragraph ?? (
                    <Fragment>
                      <span className="meet-swiggers-section-text19">
                        We are a diverse group of people with a wide range of
                        interests and backgrounds. What Swiggers have in common
                        is that they all love their work and are exceptionally
                        good at what they do.
                      </span>
                    </Fragment>
                  )}
                </span>
              )}
            </div>
          </section>
        )}
        <div className="grid-auto-fit-200px gap-m align-center width-max-content grid-auto-fill-200px justify-center width-100">
          <div className="gap-s align-center column">
            <img
              alt="image"
              src={props.swigger1Src}
              className="swigger-card-image"
            />
            <span className="heading-5 text-center">
              {props.sigger1 ?? (
                <Fragment>
                  <span className="meet-swiggers-section-text16">
                    Jess H, Culture Champion
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gap-s align-center column">
            <img
              alt="image"
              src={props.swigger2Src}
              className="swigger-card-image"
            />
            <span className="heading-5 text-center">
              {props.swigger2 ?? (
                <Fragment>
                  <span className="meet-swiggers-section-text14">
                    Jess H, Culture Champion
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gap-s align-center column">
            <img
              alt="image"
              src={props.swigger3Src}
              className="swigger-card-image"
            />
            <span className="heading-5 text-center">
              {props.swigger3 ?? (
                <Fragment>
                  <span className="meet-swiggers-section-text18">
                    Mohamed H, Software Developer
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          {props.nrOfCards >= 4 && (
            <div className="gap-s align-center column">
              <img
                alt="image"
                src={props.swigger4Src}
                className="swigger-card-image"
              />
              <span className="heading-5 text-center">
                {props.swigger4 ?? (
                  <Fragment>
                    <span className="meet-swiggers-section-text17">
                      Mike S, Software Developer
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

MeetSwiggersSection.defaultProps = {
  showHeading: true,
  swigger3Src: '/Pages/BetterTogether/pastedimage-nv59-200w.png',
  swigger2: undefined,
  showParagraph: true,
  heading: undefined,
  sigger1: undefined,
  rootClassName: '',
  swigger4: undefined,
  headingType: 'H1',
  alignment: 'center',
  swigger3: undefined,
  swigger2Src: '/Pages/BetterTogether/pastedimage-3z-200w.png',
  nrOfCards: 3,
  swigger4Src: '/Pages/BetterTogether/pastedimage-8zqo-200w.png',
  paragraph: undefined,
  swigger1Src: '/Pages/BetterTogether/pastedimage-3z-200w.png',
  paragraphType: 'body-1',
}

MeetSwiggersSection.propTypes = {
  showHeading: PropTypes.boolean,
  swigger3Src: PropTypes.string,
  swigger2: PropTypes.element,
  showParagraph: PropTypes.boolean,
  heading: PropTypes.element,
  sigger1: PropTypes.element,
  rootClassName: PropTypes.string,
  swigger4: PropTypes.element,
  headingType: PropTypes.string,
  alignment: PropTypes.string,
  swigger3: PropTypes.element,
  swigger2Src: PropTypes.string,
  nrOfCards: PropTypes.number,
  swigger4Src: PropTypes.string,
  paragraph: PropTypes.element,
  swigger1Src: PropTypes.string,
  paragraphType: PropTypes.string,
}

export default MeetSwiggersSection
