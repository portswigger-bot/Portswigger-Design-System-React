import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import HeadingAndParagraph from './heading-and-paragraph'
import Button from './button'
import './our-people-section.css'

const OurPeopleSection = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-m align-center width-max-content column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="our-people-section-text1">
                Our people make the difference
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="our-people-section-text2">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="our-people-section-text3">
                <span>
                  Our culture is our most important superpower, and our biggest
                  differentiator.
                </span>
                <br></br>
                <br></br>
                <span>
                  Meet the diverse group of people who make up the PortSwigger
                  team.
                </span>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name7"
        ></HeadingAndParagraph>
        <a href="https://portswigger.net/about/team">
          <Button
            btnType="primary"
            btnLabel={
              <Fragment>
                <span className="our-people-section-text8">
                  MEET THE SWIGGERS
                </span>
              </Fragment>
            }
            iconPlacement="none"
            rootClassName="buttonroot-class-name19"
            className="our-people-section-component2"
          ></Button>
        </a>
        <img
          alt="image"
          src="/Pages/Home/full-width-staff-banner-2500w-2500w.webp"
          className="our-people-section-image"
        />
      </div>
    </div>
  )
}

OurPeopleSection.defaultProps = {
  rootClassName: '',
}

OurPeopleSection.propTypes = {
  rootClassName: PropTypes.string,
}

export default OurPeopleSection
