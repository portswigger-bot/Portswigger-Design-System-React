import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './video-embeds-list.css'

const VideoEmbedsList = (props) => {
  return (
    <div
      className={`gap-m width-max-content grid width-100 ${
        props?.nrOfVideos >= 3 ? 'grid-colums-3' : ''
      } ${props?.nrOfVideos === 2 ? 'grid-columns-2' : ''} ${
        props.rootClassName
      } `}
    >
      <div className="align-center position-relative column height-100 width-100">
        <iframe
          src={props.video1Src}
          allowFullScreen
          className="video-embeds-list-iframe1"
        ></iframe>
        <span
          className={`video-embeds-list-text1 ${
            props?.titleFont === 'H4' ? 'heading-4' : ''
          } ${props?.titleFont === 'body-1' ? 'text-body-1' : ''} `}
        >
          {props.video1Title ?? (
            <Fragment>
              <span className="video-embeds-list-text4">
                Gotta Cache &apos;em All: Bending the Rules of Web Cache
                Exploitation
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="align-center position-relative column height-100 width-100">
        <iframe
          src={props.video2Src}
          allowFullScreen
          className="video-embeds-list-iframe2"
        ></iframe>
        <span
          className={`video-embeds-list-text2 ${
            props?.titleFont === 'H4' ? 'heading-4' : ''
          } ${props?.titleFont === 'body-1' ? 'text-body-1' : ''} `}
        >
          {props.video2Title ?? (
            <Fragment>
              <span className="video-embeds-list-text6">
                Gotta Cache &apos;em All: Bending the Rules of Web Cache
                Exploitation
              </span>
            </Fragment>
          )}
        </span>
      </div>
      {props.nrOfVideos >= 3 && (
        <div className="align-center position-relative column height-100 width-100">
          <iframe
            src={props.iframeSrc}
            allowFullScreen
            className="video-embeds-list-iframe3"
          ></iframe>
          <span
            className={`video-embeds-list-text3 ${
              props?.titleFont === 'H4' ? 'heading-4' : ''
            } ${props?.titleFont === 'body-1' ? 'text-body-1' : ''} `}
          >
            {props.video3Title ?? (
              <Fragment>
                <span className="video-embeds-list-text5">Burp Intruder</span>
              </Fragment>
            )}
          </span>
        </div>
      )}
    </div>
  )
}

VideoEmbedsList.defaultProps = {
  video1Title: undefined,
  video3Title: undefined,
  rootClassName: '',
  nrOfVideos: 2,
  video2Src: 'https://www.youtube.com/embed/70yyOMFylUA?si=ax44I-Wp33Yy-TG4',
  iframeSrc: 'https://www.youtube.com/embed/70yyOMFylUA?si=ax44I-Wp33Yy-TG4',
  video1Src: 'https://www.youtube.com/embed/70yyOMFylUA?si=ax44I-Wp33Yy-TG4',
  video2Title: undefined,
  titleFont: 'body-1',
}

VideoEmbedsList.propTypes = {
  video1Title: PropTypes.element,
  video3Title: PropTypes.element,
  rootClassName: PropTypes.string,
  nrOfVideos: PropTypes.number,
  video2Src: PropTypes.string,
  iframeSrc: PropTypes.string,
  video1Src: PropTypes.string,
  video2Title: PropTypes.element,
  titleFont: PropTypes.string,
}

export default VideoEmbedsList
