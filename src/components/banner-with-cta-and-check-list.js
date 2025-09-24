import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import SimpleCheckList from './simple-check-list'
import './banner-with-cta-and-check-list.css'

const BannerWithCtaAndCheckList = (props) => {
  return (
    <section
      id={props.sectionId}
      className={`align-center position-relative padding-horizontal-m column width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-s width-max-content column ${
          props?.alignment === 'center' ? 'align-center' : ''
        } ${props?.alignment === 'left' ? 'align-start' : ''} `}
      >
        {props.showTopLogo === true && (
          <a href={props.topLogoUrl} target="_blank" rel="noreferrer noopener">
            <img
              alt="image"
              src={props.topLogoSrc}
              className={`top-logo-banner ${
                props?.topLogoSize === 'auto' ? 'top-logo-width-auto' : ''
              } ${props?.topLogoSize === '200px' ? 'top-logo-width-200' : ''} `}
            />
          </a>
        )}
        {props.showHeading === true && (
          <div className="banner-with-cta-and-check-list-container">
            {props.headingType === 'H1' && (
              <h1
                className={`banner-with-cta-and-check-list-text1 heading-1 ${
                  props?.alignment === 'left' ? 'text-left' : ''
                } ${props?.alignment === 'center' ? 'text-center' : ''} `}
              >
                {props.heading ?? (
                  <Fragment>
                    <span className="banner-with-cta-and-check-list-text5">
                      Meet the Swiggers
                    </span>
                  </Fragment>
                )}
              </h1>
            )}
            {props.headingType === 'H2' && (
              <h2
                className={`banner-with-cta-and-check-list-text2 heading-2 ${
                  props?.alignment === 'left' ? 'text-left' : ''
                } ${props?.alignment === 'center' ? 'text-center' : ''} `}
              >
                {props.heading ?? (
                  <Fragment>
                    <span className="banner-with-cta-and-check-list-text5">
                      Meet the Swiggers
                    </span>
                  </Fragment>
                )}
              </h2>
            )}
            {props.headingType === 'H3' && (
              <h3
                className={`banner-with-cta-and-check-list-text3 heading-3 ${
                  props?.alignment === 'left' ? 'text-left' : ''
                } ${props?.alignment === 'center' ? 'text-center' : ''} `}
              >
                {props.heading ?? (
                  <Fragment>
                    <span className="banner-with-cta-and-check-list-text5">
                      Meet the Swiggers
                    </span>
                  </Fragment>
                )}
              </h3>
            )}
            {props.headingType === 'H4' && (
              <h4
                className={`heading-4 ${
                  props?.alignment === 'left' ? 'text-left' : ''
                } ${props?.alignment === 'center' ? 'text-center' : ''} `}
              >
                {props.heading ?? (
                  <Fragment>
                    <span className="banner-with-cta-and-check-list-text5">
                      Meet the Swiggers
                    </span>
                  </Fragment>
                )}
              </h4>
            )}
          </div>
        )}
        {props.showParagraph === true && (
          <span
            className={`text-body-1 ${
              props?.alignment === 'left' ? 'text-left' : ''
            } ${props?.alignment === 'center' ? 'text-center' : ''} `}
          >
            {props.paragraph ?? (
              <Fragment>
                <span className="banner-with-cta-and-check-list-text6">
                  We are a diverse group of people with a wide range of
                  interests and backgrounds. What Swiggers have in common is
                  that they all love their work and are exceptionally good at
                  what they do.
                </span>
              </Fragment>
            )}
          </span>
        )}
        {props.showBigImage === true && (
          <img
            alt="image"
            src={props.bigImageSrc}
            className="banner-with-cta-and-check-list-big-image"
          />
        )}
        {props.showCta === true && (
          <a href={props.ctaUrl}>
            <Button
              btnType={props.ctaBtnType}
              btnLabel={props.ctaLabel}
              iconType={props.ctaIconType}
              iconPlacement={props.ctaIconPlacement}
              rootClassName="buttonroot-class-name22"
              className="banner-with-cta-and-check-list-component1"
            ></Button>
          </a>
        )}
        {props.showCheckList === true && (
          <SimpleCheckList
            listItems={props.checkListItems}
            rootClassName="simple-check-listroot-class-name1"
          ></SimpleCheckList>
        )}
      </div>
    </section>
  )
}

BannerWithCtaAndCheckList.defaultProps = {
  topLogoUrl: 'https://discord.gg/portswigger',
  showCheckList: false,
  heading: undefined,
  showHeading: true,
  sectionId: '',
  ctaIconPlacement: 'left',
  topLogoSize: 'auto',
  showCta: false,
  ctaUrl: 'https://portswigger.net/burp/releases',
  paragraph: undefined,
  rootClassName: '',
  bigImageSrc: '/Pages/Burp AI/ai-trust-layer-web-1200w-1200w-1000w.webp',
  headingType: 'H1',
  checkListItems: [
    {
      label: 'Reduced lag/load times',
      iconType: 'check',
    },
    {
      label: 'Reduced memory usage',
      iconType: 'check',
    },
    {
      label: 'Faster site map filtering',
      iconType: 'check',
    },
    {
      label: 'Efficiency changes',
      iconType: 'check',
    },
  ],
  showParagraph: true,
  ctaLabel: undefined,
  alignment: 'center',
  ctaBtnType: 'primary-purple',
  showTopLogo: false,
  showBigImage: false,
  topLogoSrc: '/Logos/Dark/discord-logo-white.svg',
  ctaIconType: 'discord',
}

BannerWithCtaAndCheckList.propTypes = {
  topLogoUrl: PropTypes.string,
  showCheckList: PropTypes.boolean,
  heading: PropTypes.element,
  showHeading: PropTypes.boolean,
  sectionId: PropTypes.string,
  ctaIconPlacement: PropTypes.string,
  topLogoSize: PropTypes.string,
  showCta: PropTypes.boolean,
  ctaUrl: PropTypes.string,
  paragraph: PropTypes.element,
  rootClassName: PropTypes.string,
  bigImageSrc: PropTypes.string,
  headingType: PropTypes.string,
  checkListItems: PropTypes.array,
  showParagraph: PropTypes.boolean,
  ctaLabel: PropTypes.element,
  alignment: PropTypes.string,
  ctaBtnType: PropTypes.string,
  showTopLogo: PropTypes.boolean,
  showBigImage: PropTypes.boolean,
  topLogoSrc: PropTypes.string,
  ctaIconType: PropTypes.string,
}

export default BannerWithCtaAndCheckList
