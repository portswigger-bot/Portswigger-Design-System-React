import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import HeadingAndParagraph from './heading-and-paragraph'
import Button from './button'
import './features-list.css'

const FeaturesList = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-m align-center width-max-content justify-center width-100 features-list-max-width ${
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
          <Repeater
            items={
              props['featureList'] || [
                {
                  heading: 'Reduced UI lag and load times',
                  paragraph:
                    'In Burp Suite, your large project files now load faster, even if you’ve got a large number of Repeater tabs. These new changes have significantly reduced memory usage, and will noticeably reduce UI lagging.',
                },
                {
                  heading: 'Improved loading times in the HTTP history',
                  paragraph:
                    'Multiple changes have been introduced to improve loading times when viewing requests and responses in the HTTP history.',
                },
              ]
            }
            renderItem={(featureItem) => (
              <Fragment>
                <HeadingAndParagraph
                  heading={
                    <Fragment>
                      <span className="features-list-text1">
                        {featureItem?.heading}
                      </span>
                    </Fragment>
                  }
                  topLabel={
                    <Fragment>
                      <span className="features-list-text2">
                        Securing the web
                      </span>
                    </Fragment>
                  }
                  alignment="left"
                  paragraph={
                    <Fragment>
                      <span className="features-list-text3">
                        {featureItem?.paragraph}
                      </span>
                    </Fragment>
                  }
                  headingType="H3"
                  rootClassName="heading-and-paragraphroot-class-name29"
                ></HeadingAndParagraph>
              </Fragment>
            )}
          />
          {props.showCtaBtn === true && (
            <a href={props.ctaUrl} target="_blank" rel="noreferrer noopener">
              <Button
                size="large"
                btnType={props.ctaType}
                btnLabel={props.ctaLabel}
                iconType={props.ctaIconType}
                iconPlacement={props.ctaIconPlacement}
                rootClassName="buttonroot-class-name20"
                className="features-list-component2"
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
              className="features-list-youtube-video"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  )
}

FeaturesList.defaultProps = {
  mainImgSrc:
    '/Pages/Burp Suite/Performance Upgrades/pro-performance-image-1200w-1200w.webp',
  imagePlacement: 'right',
  mainImageHeight: '100%',
  mainImgAlt: 'Portswigger Culture Hero Image',
  ctaLabel: undefined,
  ctaIconType: 'plus-circle',
  ctaUrl: 'https://www.teleporthq.io',
  rootClassName: '',
  mainImageAlign: 'stretch',
  youtubeVideoSrc:
    'https://www.youtube.com/embed/NaiQMJk4nus?si=PWJC1GEYrUPkwQlV',
  featureList: [
    {
      heading: 'Reduced UI lag and load times',
      paragraph:
        'In Burp Suite, your large project files now load faster, even if you’ve got a large number of Repeater tabs. These new changes have significantly reduced memory usage, and will noticeably reduce UI lagging.',
    },
    {
      heading: 'Improved loading times in the HTTP history',
      paragraph:
        'Multiple changes have been introduced to improve loading times when viewing requests and responses in the HTTP history.',
    },
  ],
  showCtaBtn: false,
  columnLayout: '50-50',
  ctaIconPlacement: 'none',
  ctaType: 'primary',
  mediaType: 'image',
}

FeaturesList.propTypes = {
  mainImgSrc: PropTypes.string,
  imagePlacement: PropTypes.string,
  mainImageHeight: PropTypes.string,
  mainImgAlt: PropTypes.string,
  ctaLabel: PropTypes.element,
  ctaIconType: PropTypes.string,
  ctaUrl: PropTypes.string,
  rootClassName: PropTypes.string,
  mainImageAlign: PropTypes.string,
  youtubeVideoSrc: PropTypes.string,
  featureList: PropTypes.array,
  showCtaBtn: PropTypes.boolean,
  columnLayout: PropTypes.string,
  ctaIconPlacement: PropTypes.string,
  ctaType: PropTypes.string,
  mediaType: PropTypes.string,
}

export default FeaturesList
