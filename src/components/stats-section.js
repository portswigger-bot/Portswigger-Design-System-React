import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import HeadingAndParagraph from './heading-and-paragraph'
import './stats-section.css'

const StatsSection = (props) => {
  return (
    <div
      className={`stats-section-container1 align-center position-relative padding-horizontal-m padding-vertical-l column justify-center width-100 ${props.rootClassName} `}
    >
      <img
        alt="image"
        src="/Pages/Home/endpoints-globe-1500w.png"
        className="stats-section-image position-absolute height-100 width-100"
      />
      <div className="stats-section-max-width gap-l align-center width-max-content column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="stats-section-text10">
                Burp Suite is trusted globally
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="stats-section-text11">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="stats-section-text12">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name6"
          showParagraph={false}
        ></HeadingAndParagraph>
        <div className="gap-l grid-columns-2 grid width-100">
          <div className="align-center column gap-xs">
            <span className="stats-section-text13">79,717</span>
            <span className="stats-section-text14 text-body-1">
              Burp Suite customers
            </span>
          </div>
          <div className="align-center column gap-xs">
            <span className="stats-section-text15">+73</span>
            <span className="stats-section-text16 text-body-1">
              Net Promoter Score
            </span>
          </div>
          <div className="align-center column gap-xs">
            <span className="stats-section-text17">245</span>
            <span className="stats-section-text18 text-body-1">Countries</span>
          </div>
          <div className="align-center column gap-xs">
            <span className="stats-section-text19">79,717</span>
            <span className="stats-section-text20 text-body-1">
              Organizations
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

StatsSection.defaultProps = {
  rootClassName: '',
}

StatsSection.propTypes = {
  rootClassName: PropTypes.string,
}

export default StatsSection
