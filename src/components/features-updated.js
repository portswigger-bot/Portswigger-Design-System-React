import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Button from './button'
import './features-updated.css'

const FeaturesUpdated = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-m align-center width-max-content justify-center width-100 features-updated-max-width ${
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
            <h3 className="features-updated-feature1-heading heading-3">
              {props.feature1Heading ?? (
                <Fragment>
                  <span className="features-updated-text19">
                    Find vulnerabilities others can&apos;t
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="text-body-1">
              {props.feature1Text ?? (
                <Fragment>
                  <span className="features-updated-text13">
                    Be at the forefront of web security testing with the only
                    toolkit powered by cutting-edge PortSwigger Research.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gap-s column">
            <h3 className="features-updated-feature2-heading heading-3">
              {props.feature2Heading ?? (
                <Fragment>
                  <span className="features-updated-text16">
                    Be more productive
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="text-body-1">
              {props.feature2Text ?? (
                <Fragment>
                  <span className="features-updated-text18">
                    Burp Suite Professional has all the tools required for
                    modern pentesting. Utilize advanced features to eliminate
                    noise.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gap-s column">
            <h3 className="features-updated-feature3-heading heading-3">
              {props.feature3Heading ?? (
                <Fragment>
                  <span className="features-updated-text14">
                    Share your findings more easily
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="text-body-1">
              {props.feature3Text ?? (
                <Fragment>
                  <span className="features-updated-text20">
                    Simplify your documentation and remediation process, and
                    produce reports that end users will appreciate.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          {props.nrOfFeatures >= 4 && (
            <div className="gap-s column">
              <h3 className="features-updated-feature4-heading heading-3">
                {props.feature4Heading ?? (
                  <Fragment>
                    <span className="features-updated-text15">
                      Find vulnerabilities others can&apos;t
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="text-body-1">
                {props.feature4Text ?? (
                  <Fragment>
                    <span className="features-updated-text17">
                      Be at the forefront of web security testing with the only
                      toolkit powered by cutting-edge PortSwigger Research.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          )}
          {props.cTA === true && (
            <a href={props.componentUrl}>
              <Button
                size={props.buttonSize}
                btnType={props.buttonBtnType}
                btnLabel={props.buttonBtnLabel}
                iconType={props.buttonIconType}
                iconPlacement={props.buttonIconPlacement}
                rootClassName="buttonroot-class-name39"
                className="features-updated-component"
              ></Button>
            </a>
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
              className="features-updated-youtube-video"
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
                      <span className="features-updated-text10 heading-3">
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

FeaturesUpdated.defaultProps = {
  mediaType: 'image',
  buttonBtnLabel: undefined,
  cTA: true,
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
  imagePlacement: 'right',
  componentUrl: 'https://www.teleporthq.io',
  feature1Text: undefined,
  feature3Heading: undefined,
  mainImgAlt: 'Portswigger Culture Hero Image',
  nrOfFeatures: 3,
  mainImageAlign: 'stretch',
  buttonBtnType: 'quarternary',
  buttonSize: '',
  feature4Heading: undefined,
  feature2Heading: undefined,
  feature4Text: undefined,
  feature2Text: undefined,
  buttonIconPlacement: '',
  rootClassName: '',
  feature1Heading: undefined,
  mainImageHeight: '100%',
  showStats: false,
  youtubeVideoSrc:
    'https://www.youtube.com/embed/NaiQMJk4nus?si=PWJC1GEYrUPkwQlV',
  columnLayout: '50-50',
  mainImgSrc:
    '/Pages/Burp Suite/Performance Upgrades/pro-performance-image-1200w-1200w.webp',
  feature3Text: undefined,
  buttonIconType: '',
}

FeaturesUpdated.propTypes = {
  mediaType: PropTypes.string,
  buttonBtnLabel: PropTypes.element,
  cTA: PropTypes.boolean,
  statsList: PropTypes.array,
  imagePlacement: PropTypes.string,
  componentUrl: PropTypes.string,
  feature1Text: PropTypes.element,
  feature3Heading: PropTypes.element,
  mainImgAlt: PropTypes.string,
  nrOfFeatures: PropTypes.number,
  mainImageAlign: PropTypes.string,
  buttonBtnType: PropTypes.string,
  buttonSize: PropTypes.string,
  feature4Heading: PropTypes.element,
  feature2Heading: PropTypes.element,
  feature4Text: PropTypes.element,
  feature2Text: PropTypes.element,
  buttonIconPlacement: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Heading: PropTypes.element,
  mainImageHeight: PropTypes.string,
  showStats: PropTypes.boolean,
  youtubeVideoSrc: PropTypes.string,
  columnLayout: PropTypes.string,
  mainImgSrc: PropTypes.string,
  feature3Text: PropTypes.element,
  buttonIconType: PropTypes.string,
}

export default FeaturesUpdated
