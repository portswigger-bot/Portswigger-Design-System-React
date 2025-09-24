import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Icon from './icon'
import Button from './button'
import './hero.css'

const Hero = (props) => {
  return (
    <div
      className={`align-center padding-m position-relative column width-100 prevent-horizontal-overflow ${props.rootClassName} `}
    >
      <div className="gap-m align-center width-max-content justify-center width-100 row hero-max-width">
        <div
          className={`gap-s column ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '70-30' ? 'width-70' : ''} ${
            props?.columnLayout === '40-60' ? 'width-40' : ''
          } ${props?.columnLayout === '30-70' ? 'width-30' : ''} ${
            props?.columnLayout === '60-40' ? 'width-60' : ''
          } `}
        >
          {props.showTopLogo === true && (
            <img alt="image" src={props.topLogoSrc} className="hero-top-logo" />
          )}
          {props.showTopLabel === true && (
            <span className="hero-top-label heading-3">
              {props.topLabel ?? (
                <Fragment>
                  <span className="hero-text6">Burp Suite Professional</span>
                </Fragment>
              )}
            </span>
          )}
          <h1
            className={` ${props?.headingStyle === 'H1' ? 'heading-1' : ''} ${
              props?.headingStyle === 'H2' ? 'heading-2' : ''
            } `}
          >
            {props.heading ?? (
              <Fragment>
                <span className="hero-text5">PortSwigger Culture</span>
              </Fragment>
            )}
          </h1>
          {props.showSubHeading === true && (
            <span
              className={` ${
                props?.subHeadingFontStyle === 'heading-4' ? 'heading-4' : ''
              } ${
                props?.subHeadingFontStyle === 'body-1' ? 'text-body-1' : ''
              } ${props?.subHeadingFontStyle === 'intro' ? 'text-intro' : ''} `}
            >
              {props.subHeading ?? (
                <Fragment>
                  <span className="hero-text7">
                    Culture eats everything for breakfast.
                  </span>
                </Fragment>
              )}
            </span>
          )}
          {props.showChecklist === true && (
            <div className="hero-checklist gap-xxs column">
              <Repeater
                items={
                  props['checkList'] || [
                    'Built on the same battle-hardened Burp Suite technology your security teams already trust.',
                    "Seamlessly scale your AppSec, making better use of your manual testers' time and expertise.",
                    'Secure your apps and APIs across the SDLC, before they hit production.',
                  ]
                }
                renderItem={(listItem) => (
                  <Fragment>
                    <div className="gap-s align-center row">
                      <Icon
                        type="check-circle"
                        rootClassName="iconroot-class-name100"
                      ></Icon>
                      <span className="text-body-1">{listItem}</span>
                    </div>
                  </Fragment>
                )}
              />
            </div>
          )}
          <div className="margin-top-s gap-s align-center row hero-buttons">
            {props.showCta === true && (
              <a href={props.ctaUrl}>
                <Button
                  size="large"
                  btnType={props.ctaType}
                  btnLabel={props.ctaLabel}
                  iconType={props.ctaIconType}
                  iconPlacement={props.ctaIconPlacement}
                  rootClassName="buttonroot-class-name2"
                  className="hero-component2"
                ></Button>
              </a>
            )}
            {props.showCta2 === true && (
              <a href={props.cta2Url}>
                <Button
                  btnType={props.cta2Type}
                  btnLabel={props.cta2Label}
                  iconType={props.cta2IconType}
                  iconPlacement={props.cta2IconPlacement}
                  rootClassName="buttonroot-class-name40"
                  className="hero-component3"
                ></Button>
              </a>
            )}
          </div>
        </div>
        <div
          className={`hero-image column ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '30-70' ? 'width-70' : ''} ${
            props?.columnLayout === '60-40' ? 'width-40' : ''
          } ${props?.columnLayout === '70-30' ? 'width-30' : ''} ${
            props?.columnLayout === '40-60' ? 'width-60' : ''
          } `}
        >
          <img
            alt={props.heroImgAlt}
            src={props.heroImgSrc}
            className={`main-hero-image ${
              props?.mainImageAlign === 'end' ? 'main-image-self-align-end' : ''
            } ${props?.mainImageHeight === '100%' ? 'height-100' : ''} ${
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

Hero.defaultProps = {
  ctaLabel: undefined,
  subHeadingFontStyle: 'heading-4',
  ctaIconPlacement: 'none',
  cta2Type: 'outline-white',
  checkList: [
    'Built on the same battle-hardened Burp Suite technology your security teams already trust.',
    "Seamlessly scale your AppSec, making better use of your manual testers' time and expertise.",
    'Secure your apps and APIs across the SDLC, before they hit production.',
  ],
  showTopLogo: false,
  showCta: false,
  showTopLabel: false,
  mainImageHeight: '100%',
  showChecklist: false,
  columnLayout: '50-50',
  cta2Label: undefined,
  headingStyle: 'H1',
  heading: undefined,
  ctaIconType: 'play-circle',
  showSubHeading: true,
  cta2Url: 'https://portswigger.net/buy/pro',
  rootClassName: '',
  topLogoSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  topLabel: undefined,
  showCta2: false,
  subHeading: undefined,
  cta2IconType: 'activity',
  heroImgSrc: '/Pages/Culture/hero-1200w.png',
  ctaUrl: 'https://www.teleporthq.io',
  cta2IconPlacement: 'none',
  ctaType: 'primary',
  mainImageAlign: 'stretch',
  heroImgAlt: 'Portswigger Culture Hero Image',
}

Hero.propTypes = {
  ctaLabel: PropTypes.element,
  subHeadingFontStyle: PropTypes.string,
  ctaIconPlacement: PropTypes.string,
  cta2Type: PropTypes.string,
  checkList: PropTypes.array,
  showTopLogo: PropTypes.boolean,
  showCta: PropTypes.boolean,
  showTopLabel: PropTypes.boolean,
  mainImageHeight: PropTypes.string,
  showChecklist: PropTypes.boolean,
  columnLayout: PropTypes.string,
  cta2Label: PropTypes.element,
  headingStyle: PropTypes.string,
  heading: PropTypes.element,
  ctaIconType: PropTypes.string,
  showSubHeading: PropTypes.boolean,
  cta2Url: PropTypes.string,
  rootClassName: PropTypes.string,
  topLogoSrc: PropTypes.string,
  topLabel: PropTypes.element,
  showCta2: PropTypes.boolean,
  subHeading: PropTypes.element,
  cta2IconType: PropTypes.string,
  heroImgSrc: PropTypes.string,
  ctaUrl: PropTypes.string,
  cta2IconPlacement: PropTypes.string,
  ctaType: PropTypes.string,
  mainImageAlign: PropTypes.string,
  heroImgAlt: PropTypes.string,
}

export default Hero
