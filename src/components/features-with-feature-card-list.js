import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Button from './button'
import './features-with-feature-card-list.css'

const FeaturesWithFeatureCardList = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-l align-center width-max-content justify-center width-100 features-with-feature-card-list-max-width ${
          props?.imagePlacement === 'right' ? 'row' : ''
        } ${props?.imagePlacement === 'left' ? 'row-reverse' : ''} `}
      >
        <div
          className={`grid-row-gap-s grid-columns-2 grid grid-column-gap-l ${
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
                  content:
                    'View multiple queued requests in a table and manage them in bulk.',
                },
                {
                  content:
                    'View intercepted responses alongside the matching request.',
                },
                { content: 'Forward all requests with a single click.' },
                { content: 'Highlight and comment on requests and responses.' },
              ]
            }
            renderItem={(featureItem) => (
              <Fragment>
                <div className="gap-s align-start row">
                  <img
                    alt="image"
                    src={props.iconSrc}
                    className="features-with-feature-card-list-image1"
                  />
                  <span>{featureItem?.content}</span>
                </div>
              </Fragment>
            )}
          />
          {props.showCtaBtn === true && (
            <Button
              size="large"
              btnLabel={props.ctaLabel}
              iconPlacement="none"
              rootClassName="buttonroot-class-name23"
              className="features-with-feature-card-list-component"
            ></Button>
          )}
        </div>
        <div
          className={`column gap-xs ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '30-70' ? 'width-70' : ''} ${
            props?.columnLayout === '60-40' ? 'width-40' : ''
          } ${props?.columnLayout === '70-30' ? 'width-30' : ''} ${
            props?.columnLayout === '40-60' ? 'width-60' : ''
          } `}
        >
          <a href={props.heroImgUrl}>
            <img
              alt={props.mainImgAlt}
              src={props.mainImgSrc}
              className={`features-with-feature-card-list-hero-img main-hero-image radius-xl ${
                props?.mainImageAlign === 'end'
                  ? 'main-image-self-align-end'
                  : ''
              } ${
                props?.mainImageAlign === 'start'
                  ? 'main-image-self-align-start'
                  : ''
              } ${
                props?.withImageShadow === true ? 'shadow-box-10-large' : ''
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
          </a>
          {props.showImgCaption === true && (
            <a
              href={props.imgCaptionUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="features-with-feature-card-list-img-caption text-body-1"
            >
              {props.imgCaption ?? (
                <Fragment>
                  <span className="features-with-feature-card-list-text3">
                    Take a look at the new Proxy Intercept View in this video.
                  </span>
                </Fragment>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

FeaturesWithFeatureCardList.defaultProps = {
  url: 'https://www.teleporthq.io',
  mainImageAlign: 'stretch',
  columnLayout: '50-50',
  ctaLabel: undefined,
  iconSrc: '/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg',
  heroImgUrl: 'https://www.teleporthq.io',
  withImageShadow: false,
  mainImgSrc:
    '/Pages/Burp Suite/Performance Upgrades/burp-suite-shorts-1400w-1200w.webp',
  ctaUrl: 'https://www.teleporthq.io',
  showImgCaption: false,
  imgCaptionUrl: 'https://www.youtube.com/watch?v=v5rWTgBrckc',
  mainImgAlt: 'Portswigger Culture Hero Image',
  mainImageHeight: '100%',
  featureList: [
    {
      content:
        'View multiple queued requests in a table and manage them in bulk.',
    },
    {
      content: 'View intercepted responses alongside the matching request.',
    },
    {
      content: 'Forward all requests with a single click.',
    },
    {
      content: 'Highlight and comment on requests and responses.',
    },
  ],
  rootClassName: '',
  imgCaption: undefined,
  showCtaBtn: false,
  imagePlacement: 'right',
}

FeaturesWithFeatureCardList.propTypes = {
  url: PropTypes.string,
  mainImageAlign: PropTypes.string,
  columnLayout: PropTypes.string,
  ctaLabel: PropTypes.element,
  iconSrc: PropTypes.string,
  heroImgUrl: PropTypes.string,
  withImageShadow: PropTypes.boolean,
  mainImgSrc: PropTypes.string,
  ctaUrl: PropTypes.string,
  showImgCaption: PropTypes.boolean,
  imgCaptionUrl: PropTypes.string,
  mainImgAlt: PropTypes.string,
  mainImageHeight: PropTypes.string,
  featureList: PropTypes.array,
  rootClassName: PropTypes.string,
  imgCaption: PropTypes.element,
  showCtaBtn: PropTypes.boolean,
  imagePlacement: PropTypes.string,
}

export default FeaturesWithFeatureCardList
