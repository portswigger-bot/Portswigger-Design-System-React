import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './heading-and-paragraph.css'

const HeadingAndParagraph = (props) => {
  return (
    <section
      id={props.sectionId}
      className={`position-relative column justify-center width-100 ${
        props?.alignment === 'center' ? 'align-center' : ''
      } ${
        props?.withHorizontalPadding === true ? 'padding-horizontal-m' : ''
      } ${props?.alignment === 'left' ? 'align-start' : ''} ${
        props.rootClassName
      } `}
    >
      <div
        className={`gap-s width-max-content column align-self-center width-100 ${
          props?.alignment === 'center' ? 'align-center' : ''
        } ${props?.alignment === 'left' ? 'align-start' : ''} `}
      >
        {props.showTopLabel === true && (
          <span
            className={`heading-and-paragraph-top-label heading-3 ${
              props?.alignment === 'left' ? 'text-left' : ''
            } ${props?.alignment === 'center' ? 'text-center' : ''} `}
          >
            {props.topLabel ?? (
              <Fragment>
                <span className="heading-and-paragraph-text7">
                  Securing the web
                </span>
              </Fragment>
            )}
          </span>
        )}
        {props.showTopImg === true && (
          <img
            alt="image"
            src={props.topImgSrc}
            className="heading-and-paragraph-top-img"
          />
        )}
        {props.showHeading === true && (
          <div className="heading-and-paragraph-container">
            {props.headingType === 'H1' && (
              <h1
                className={`heading-and-paragraph-text1 heading-1 ${
                  props?.alignment === 'left' ? 'text-left' : ''
                } ${props?.alignment === 'center' ? 'text-center' : ''} `}
              >
                {props.heading ?? (
                  <Fragment>
                    <span className="heading-and-paragraph-text5">
                      Meet the Swiggers
                    </span>
                  </Fragment>
                )}
              </h1>
            )}
            {props.headingType === 'H2' && (
              <h2
                className={`heading-and-paragraph-text2 heading-2 ${
                  props?.alignment === 'left' ? 'text-left' : ''
                } ${props?.alignment === 'center' ? 'text-center' : ''} `}
              >
                {props.heading ?? (
                  <Fragment>
                    <span className="heading-and-paragraph-text5">
                      Meet the Swiggers
                    </span>
                  </Fragment>
                )}
              </h2>
            )}
            {props.headingType === 'H3' && (
              <h3
                className={`heading-and-paragraph-text3 heading-3 ${
                  props?.alignment === 'left' ? 'text-left' : ''
                } ${props?.alignment === 'center' ? 'text-center' : ''} `}
              >
                {props.heading ?? (
                  <Fragment>
                    <span className="heading-and-paragraph-text5">
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
                    <span className="heading-and-paragraph-text5">
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
            className={` ${props?.alignment === 'left' ? 'text-left' : ''} ${
              props?.paragraphType === 'body-1' ? 'text-body-1' : ''
            } ${props?.paragraphType === 'text-intro' ? 'text-intro' : ''} ${
              props?.alignment === 'center' ? 'text-center' : ''
            } `}
          >
            {props.paragraph ?? (
              <Fragment>
                <span className="heading-and-paragraph-text6">
                  We are a diverse group of people with a wide range of
                  interests and backgrounds. What Swiggers have in common is
                  that they all love their work and are exceptionally good at
                  what they do.
                </span>
              </Fragment>
            )}
          </span>
        )}
      </div>
    </section>
  )
}

HeadingAndParagraph.defaultProps = {
  heading: undefined,
  rootClassName: '',
  paragraphType: 'body-1',
  alignment: 'center',
  showParagraph: true,
  showTopLabel: false,
  withHorizontalPadding: false,
  showTopImg: false,
  topImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  paragraph: undefined,
  sectionId: '',
  headingType: 'H1',
  showHeading: true,
  topLabel: undefined,
}

HeadingAndParagraph.propTypes = {
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
  paragraphType: PropTypes.string,
  alignment: PropTypes.string,
  showParagraph: PropTypes.boolean,
  showTopLabel: PropTypes.boolean,
  withHorizontalPadding: PropTypes.boolean,
  showTopImg: PropTypes.boolean,
  topImgSrc: PropTypes.string,
  paragraph: PropTypes.element,
  sectionId: PropTypes.string,
  headingType: PropTypes.string,
  showHeading: PropTypes.boolean,
  topLabel: PropTypes.element,
}

export default HeadingAndParagraph
