import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './banner.css'

const Banner = (props) => {
  return (
    <div
      id={props.bannerId}
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column justify-center width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-m align-center width-max-content justify-center width-100 banner-max-width ${
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
          <div className="column">
            {props.showTopLabel === true && (
              <span className="banner-top-label heading-3">
                {props.topLabel ?? (
                  <Fragment>
                    <span className="banner-text2">Burp AI</span>
                  </Fragment>
                )}
              </span>
            )}
            <h2
              className={`banner-text1 ${
                props?.headingFontStyle === 'H1' ? 'heading-1' : ''
              } ${props?.headingFontStyle === 'H2' ? 'heading-2' : ''} ${
                props?.headingFontStyle === 'H3' ? 'heading-3' : ''
              } `}
            >
              {props.heading ?? (
                <Fragment>
                  <span className="banner-text5">PortSwigger Culture</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span
            className={` ${
              props?.subHeadingFontStyle === 'heading-4' ? 'heading-4' : ''
            } ${props?.subHeadingFontStyle === 'body-1' ? 'text-body-1' : ''} ${
              props?.subHeadingFontStyle === 'intro' ? 'text-intro' : ''
            } ${props?.subHeadingFontStyle === 'body-3' ? 'text-body-3' : ''} `}
          >
            {props.subHeading ?? (
              <Fragment>
                <span className="banner-text3">
                  Culture eats everything for breakfast.
                </span>
              </Fragment>
            )}
          </span>
          {props.showCtaBtn === true && (
            <a href={props.ctaUrl}>
              <Button
                size="large"
                btnType={props.ctaType}
                btnLabel={props.ctaLabel}
                iconType={props.ctaIconType}
                iconPlacement={props.ctaIconPlacement}
                rootClassName="buttonroot-class-name3"
                className="banner-component"
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
          <img
            alt={props.mainImgAlt}
            src={props.mainImgSrc}
            className={`main-hero-image radius-xl ${
              props?.mainImageAlign === 'end' ? 'main-image-self-align-end' : ''
            } ${
              props?.mainImageAlign === 'start'
                ? 'main-image-self-align-start'
                : ''
            } ${
              props?.mainImageHeight === '320px' ? 'main-image-height-320' : ''
            } ${
              props?.mainImageAlign === 'center'
                ? 'main-image-self-align-center'
                : ''
            } ${
              props?.mainImageHeight === '200px' ? 'main-image-height-200' : ''
            } `}
          />
        </div>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  topLabel: undefined,
  mainImageAlign: 'stretch',
  headingFontStyle: 'H1',
  bannerId: '',
  ctaUrl: 'https://www.teleporthq.io',
  subHeading: undefined,
  imagePlacement: 'right',
  mainImgSrc:
    '/Pages/Burp Suite/Performance Upgrades/pro-performance-image-1200w-1200w.webp',
  mainImageHeight: '100%',
  subHeadingFontStyle: 'heading-4',
  ctaIconType: 'plus-circle',
  ctaLabel: undefined,
  ctaType: 'primary',
  columnLayout: '50-50',
  showCtaBtn: false,
  heading: undefined,
  showTopLabel: false,
  mainImgAlt: 'Portswigger Culture Hero Image',
  ctaIconPlacement: 'none',
  rootClassName: '',
}

Banner.propTypes = {
  topLabel: PropTypes.element,
  mainImageAlign: PropTypes.string,
  headingFontStyle: PropTypes.string,
  bannerId: PropTypes.string,
  ctaUrl: PropTypes.string,
  subHeading: PropTypes.element,
  imagePlacement: PropTypes.string,
  mainImgSrc: PropTypes.string,
  mainImageHeight: PropTypes.string,
  subHeadingFontStyle: PropTypes.string,
  ctaIconType: PropTypes.string,
  ctaLabel: PropTypes.element,
  ctaType: PropTypes.string,
  columnLayout: PropTypes.string,
  showCtaBtn: PropTypes.boolean,
  heading: PropTypes.element,
  showTopLabel: PropTypes.boolean,
  mainImgAlt: PropTypes.string,
  ctaIconPlacement: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner
