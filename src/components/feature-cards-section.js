import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import HeadingAndParagraph from './heading-and-paragraph'
import FeatureCardWithTopLabel from './feature-card-with-top-label'
import './feature-cards-section.css'

const FeatureCardsSection = (props) => {
  return (
    <div
      className={`feature-cards-section-container1 align-center padding-m position-relative column width-100 ${props.rootClassName} `}
    >
      <div className="gap-l align-center width-max-content column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feature-cards-section-text10">
                Everything you need to stay ahead
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feature-cards-section-text11">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="feature-cards-section-text12">
                Software and expertise for everyone who needs to secure the web
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name3"
        ></HeadingAndParagraph>
        <div className="gap-l grid-columns-2 grid width-100 feature-cards-section-container2">
          <FeatureCardWithTopLabel
            url="https://portswigger.net/burp"
            label={
              <Fragment>
                <span className="feature-cards-section-text13">Test</span>
              </Fragment>
            }
            labelColor="Enterprise"
            description={
              <Fragment>
                <span className="feature-cards-section-text14">
                  The most widely used web application security testing
                  software.
                </span>
              </Fragment>
            }
          ></FeatureCardWithTopLabel>
          <FeatureCardWithTopLabel
            url="https://portswigger.net/web-security"
            label={
              <Fragment>
                <span className="feature-cards-section-text15">Train</span>
              </Fragment>
            }
            logoSrc="/Logos/Light/web-security-academy-1500w.png"
            labelColor="Pro"
            description={
              <Fragment>
                <span className="feature-cards-section-text16">
                  Boost your cybersecurity skills - with free, online web
                  security training.
                </span>
              </Fragment>
            }
            leftImageSrc="/Pages/Home/web-security-academy-home-1-300w-300w.webp"
          ></FeatureCardWithTopLabel>
          <FeatureCardWithTopLabel
            url="https://portswigger.net/research"
            label={
              <Fragment>
                <span className="feature-cards-section-text17">Discover</span>
              </Fragment>
            }
            logoSrc="/Logos/Light/portswigger-research-1500w.png"
            labelColor="Community"
            description={
              <Fragment>
                <span className="feature-cards-section-text18">
                  Learn about the latest security exploits - to stay ahead of
                  emerging threats.
                </span>
              </Fragment>
            }
            leftImageSrc="/Pages/Home/portswigger-research-1-home-300w-300w.webp"
          ></FeatureCardWithTopLabel>
          <FeatureCardWithTopLabel
            url="https://portswigger.net/web-security/certification"
            label={
              <Fragment>
                <span className="feature-cards-section-text19">Certify</span>
              </Fragment>
            }
            logoSrc="/Logos/Light/burp-suite1-1500w.png"
            labelColor="Orange"
            description={
              <Fragment>
                <span className="feature-cards-section-text20">
                  Showcase your web security testing skills - become a Burp
                  Suite Certified Practitioner.
                </span>
              </Fragment>
            }
            leftImageSrc="/Pages/Home/validate-your-certification.svg"
          ></FeatureCardWithTopLabel>
        </div>
      </div>
    </div>
  )
}

FeatureCardsSection.defaultProps = {
  rootClassName: '',
}

FeatureCardsSection.propTypes = {
  rootClassName: PropTypes.string,
}

export default FeatureCardsSection
