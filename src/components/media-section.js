import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './media-section.css'

const MediaSection = (props) => {
  return (
    <div
      className={`media-section-container align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-m width-max-content column width-100">
        {props.mediaType === 'Image' && (
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="media-section-image"
          />
        )}
        {props.mediaType === 'YoutubeVideo' && (
          <iframe
            src={props.iframeSrc}
            className="media-section-iframe"
          ></iframe>
        )}
        {props.mediaType === 'video' && (
          <video
            src
            loop="true"
            muted="true"
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            autoPlay="true"
            playsInline="true"
            className="media-section-video"
          ></video>
        )}
        {props.showCta === true && (
          <a href={props.componentUrl}>
            <Button
              btnType={props.ctaType}
              btnLabel={props.ctaLabel}
              iconType={props.ctaIconType}
              iconPlacement={props.ctaIconPlacement}
              rootClassName="buttonroot-class-name46"
              className="media-section-component"
            ></Button>
          </a>
        )}
      </div>
    </div>
  )
}

MediaSection.defaultProps = {
  ctaIconPlacement: 'none',
  mediaType: 'Image',
  ctaType: 'primary',
  imageAlt: 'image',
  iframeSrc: 'https://www.youtube.com/embed/DeQkMK5LME4',
  ctaLabel: undefined,
  showCta: false,
  rootClassName: '',
  componentUrl: 'https://portswigger.net/burp/pro/trial',
  imageSrc: '/Pages/Burp Suite/Performance Upgrades/tib3rius-discord-post.svg',
  ctaIconType: 'activity',
}

MediaSection.propTypes = {
  ctaIconPlacement: PropTypes.string,
  mediaType: PropTypes.string,
  ctaType: PropTypes.string,
  imageAlt: PropTypes.string,
  iframeSrc: PropTypes.string,
  ctaLabel: PropTypes.element,
  showCta: PropTypes.boolean,
  rootClassName: PropTypes.string,
  componentUrl: PropTypes.string,
  imageSrc: PropTypes.string,
  ctaIconType: PropTypes.string,
}

export default MediaSection
