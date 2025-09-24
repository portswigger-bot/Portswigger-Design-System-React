import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './quote.css'

const Quote = (props) => {
  return (
    <section
      className={`quote-section align-center padding-vertical-m padding-horizontal-m column width-100 ${
        props?.bordered === true ? 'radius-xxl' : ''
      } ${props?.bordered === true ? 'border-gray' : ''} ${
        props.rootClassName
      } `}
    >
      <div className="quote-max-width gap-s width-max-content width-100 row">
        {props.showQuotes === true && (
          <div className="quote-left-quote">
            <img
              alt="image"
              src="/Pages/Customer Stories/ps-quote-left-orange.svg"
              className="quote-image1"
            />
          </div>
        )}
        <div className="gap-s column">
          {props.showTopLogo === true && (
            <img
              alt="image"
              src={props.topLogoSrc}
              className="quote-top-logo"
            />
          )}
          <p
            className={`quote-quote ${
              props?.fontType === 'H1' ? 'heading-1' : ''
            } ${props?.fontType === 'H2' ? 'heading-2' : ''} ${
              props?.fontType === 'H4' ? 'heading-4' : ''
            } ${props?.fontType === 'body-1' ? 'text-body-1' : ''} ${
              props?.fontType === 'text-intro' ? 'text-intro' : ''
            } ${props?.fontType === 'H5' ? 'heading-5' : ''} ${
              props?.fontType === 'H3' ? 'heading-3' : ''
            } `}
          >
            {props.quote ?? (
              <Fragment>
                <span className="quote-text2">
                  Humans aren&apos;t resources. PortSwigger is its people; they
                  aren&apos;t just a means to the company&apos;s ends.
                </span>
              </Fragment>
            )}
          </p>
          {props.showExtraInfo === true && (
            <span className="quote-extra-info text-body-1">
              {props.extraInfo ?? (
                <Fragment>
                  <span className="quote-text3">
                    Application Security Pentester, AppSec team
                  </span>
                </Fragment>
              )}
            </span>
          )}
          {props.showCta === true && (
            <a href={props.ctaUrl}>
              <Button
                btnType={props.ctaType}
                btnLabel={props.ctaLabel}
                iconType={props.ctaIconType}
                iconPlacement={props.ctaIconPlacement}
                rootClassName="buttonroot-class-name36"
                className="quote-cta"
              ></Button>
            </a>
          )}
        </div>
        {props.showQuotes === true && (
          <div className="quote-right-quote">
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08f747ed-00a5-4c49-bf33-6ab4b22224ae/b467da8e-a881-4003-a42a-6a95e9c47e07?org_if_sml=12375&amp;force_format=original"
              className="quote-image2"
            />
          </div>
        )}
      </div>
      {props.showBackgroundImg === true && (
        <img
          alt="image"
          src={props.backgroundImgSrc}
          className="quote-image3 position-absolute height-100 width-100"
        />
      )}
    </section>
  )
}

Quote.defaultProps = {
  showQuotes: false,
  showBackgroundImg: false,
  showCta: false,
  bordered: false,
  ctaUrl: 'https://portswigger.net/customer-stories/microsoft-case-study',
  ctaType: 'quarternary',
  showTopLogo: false,
  ctaIconType: 'arrow-right',
  ctaLabel: undefined,
  quote: undefined,
  topLogoSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  ctaIconPlacement: 'right',
  extraInfo: undefined,
  showExtraInfo: false,
  backgroundImgSrc: '/carrers-home-banner.jpeg',
  fontType: 'H4',
  rootClassName: '',
}

Quote.propTypes = {
  showQuotes: PropTypes.boolean,
  showBackgroundImg: PropTypes.boolean,
  showCta: PropTypes.boolean,
  bordered: PropTypes.boolean,
  ctaUrl: PropTypes.string,
  ctaType: PropTypes.string,
  showTopLogo: PropTypes.boolean,
  ctaIconType: PropTypes.string,
  ctaLabel: PropTypes.element,
  quote: PropTypes.element,
  topLogoSrc: PropTypes.string,
  ctaIconPlacement: PropTypes.string,
  extraInfo: PropTypes.element,
  showExtraInfo: PropTypes.boolean,
  backgroundImgSrc: PropTypes.string,
  fontType: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Quote
