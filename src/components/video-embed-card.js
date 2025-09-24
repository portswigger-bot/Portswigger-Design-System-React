import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './video-embed-card.css'

const VideoEmbedCard = (props) => {
  return (
    <div
      className={`video-embed-card-container align-center position-relative column justify-center width-100 ${props.rootClassName} `}
    >
      <iframe
        src={props.iframeSrc}
        allowFullScreen
        className="video-embed-card-iframe"
      ></iframe>
      <span className="video-embed-card-text1 text-body-1">
        {props.text ?? (
          <Fragment>
            <span className="video-embed-card-text2">
              Gotta Cache &apos;em All: Bending the Rules of Web Cache
              Exploitation
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

VideoEmbedCard.defaultProps = {
  iframeSrc: 'https://www.youtube.com/embed/70yyOMFylUA?si=ax44I-Wp33Yy-TG4',
  rootClassName: '',
  text: undefined,
}

VideoEmbedCard.propTypes = {
  iframeSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default VideoEmbedCard
