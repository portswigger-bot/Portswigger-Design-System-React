import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-m align-center width-max-content justify-center width-100 features-max-width ${
          props?.imagePlacement === 'right' ? 'row' : ''
        } ${props?.imagePlacement === 'left' ? 'row-reverse' : ''} `}
      >
        <div
          className={`gap-s column ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '70-30' ? 'width-70' : ''} ${
            props?.columnLayout === '40-60' ? 'width-40' : ''
          } ${props?.columnLayout === '30-70' ? 'width-30' : ''} ${
            props?.columnLayout === '60-40' ? 'width-60' : ''
          } `}
        >
          <div className="gap-s column">
            <h3 className="features-feature1-heading heading-3">
              {props.feature1Heading ?? (
                <Fragment>
                  <span className="features-text13">
                    Find vulnerabilities others can&apos;t
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="text-body-1">
              {props.feature1Text ?? (
                <Fragment>
                  <span className="features-text12">
                    Be at the forefront of web security testing with the only
                    toolkit powered by cutting-edge PortSwigger Research.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gap-s column">
            <h3 className="features-feature2-heading heading-3">
              {props.feature2Heading ?? (
                <Fragment>
                  <span className="features-text16">Be more productive</span>
                </Fragment>
              )}
            </h3>
            <span className="text-body-1">
              {props.feature2Text ?? (
                <Fragment>
                  <span className="features-text18">
                    Burp Suite Professional has all the tools required for
                    modern pentesting. Utilize advanced features to eliminate
                    noise.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gap-s column">
            <h3 className="features-feature3-heading heading-3">
              {props.feature3Heading ?? (
                <Fragment>
                  <span className="features-text15">
                    Share your findings more easily
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="text-body-1">
              {props.feature3Text ?? (
                <Fragment>
                  <span className="features-text14">
                    Simplify your documentation and remediation process, and
                    produce reports that end users will appreciate.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          {props.nrOfFeatures >= 4 && (
            <div className="gap-s column">
              <h3 className="features-feature4-heading heading-3">
                {props.feature4Heading ?? (
                  <Fragment>
                    <span className="features-text19">
                      Find vulnerabilities others can&apos;t
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="text-body-1">
                {props.feature4Text ?? (
                  <Fragment>
                    <span className="features-text17">
                      Be at the forefront of web security testing with the only
                      toolkit powered by cutting-edge PortSwigger Research.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          )}
        </div>
        <div
          className={`column ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '30-70' ? 'width-70' : ''} ${
            props?.columnLayout === '60-40' ? 'width-40' : ''
          } ${props?.columnLayout === '70-30' ? 'width-30' : ''} ${
            props?.columnLayout === '40-60' ? 'width-60' : ''
          } `}
        >
          {props.mediaType === 'image' && (
            <img
              alt={props.mainImgAlt}
              src={props.mainImgSrc}
              className={`main-hero-image radius-m ${
                props?.mainImageAlign === 'end'
                  ? 'main-image-self-align-end'
                  : ''
              } ${
                props?.mainImageAlign === 'start'
                  ? 'main-image-self-align-start'
                  : ''
              } ${
                props?.mainImageHeight === '320px'
                  ? 'main-image-height-320'
                  : ''
              } ${
                props?.mainImageAlign === 'center'
                  ? 'main-image-self-align-center'
                  : ''
              } ${
                props?.mainImageHeight === '200px'
                  ? 'main-image-height-200'
                  : ''
              } `}
            />
          )}
          {props.mediaType === 'youtubeVideo' && (
            <iframe
              src={props.youtubeVideoSrc}
              className="features-youtube-video"
            ></iframe>
          )}
          {props.showStats === true && (
            <div className="margin-top-s gap-m align-center justify-center row">
              <Repeater
                items={
                  props['statsList'] || [
                    { label: 'BApp authors', number: '250+' },
                    { label: 'Extensions', number: '300+' },
                  ]
                }
                renderItem={(statCard) => (
                  <Fragment>
                    <div className="align-center column">
                      <span className="features-text10 heading-3">
                        {statCard?.number}
                      </span>
                      <span className="text-body-1">{statCard?.label}</span>
                    </div>
                  </Fragment>
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Features.defaultProps = {
  feature1Text: undefined,
  statsList: [
    {
      label: 'BApp authors',
      number: '250+',
    },
    {
      label: 'Extensions',
      number: '300+',
    },
  ],
  feature1Heading: undefined,
  feature3Text: undefined,
  feature3Heading: undefined,
  mainImageAlign: 'stretch',
  feature2Heading: undefined,
  mediaType: 'image',
  showStats: false,
  columnLayout: '50-50',
  feature4Text: undefined,
  mainImageHeight: '100%',
  mainImgSrc:
    '/Pages/Burp Suite/Performance Upgrades/pro-performance-image-1200w-1200w.webp',
  mainImgAlt: 'Portswigger Culture Hero Image',
  imagePlacement: 'right',
  rootClassName: '',
  feature2Text: undefined,
  youtubeVideoSrc:
    'https://www.youtube.com/embed/NaiQMJk4nus?si=PWJC1GEYrUPkwQlV',
  nrOfFeatures: 3,
  feature4Heading: undefined,
}

Features.propTypes = {
  feature1Text: PropTypes.element,
  statsList: PropTypes.array,
  feature1Heading: PropTypes.element,
  feature3Text: PropTypes.element,
  feature3Heading: PropTypes.element,
  mainImageAlign: PropTypes.string,
  feature2Heading: PropTypes.element,
  mediaType: PropTypes.string,
  showStats: PropTypes.boolean,
  columnLayout: PropTypes.string,
  feature4Text: PropTypes.element,
  mainImageHeight: PropTypes.string,
  mainImgSrc: PropTypes.string,
  mainImgAlt: PropTypes.string,
  imagePlacement: PropTypes.string,
  rootClassName: PropTypes.string,
  feature2Text: PropTypes.element,
  youtubeVideoSrc: PropTypes.string,
  nrOfFeatures: PropTypes.number,
  feature4Heading: PropTypes.element,
}

export default Features
