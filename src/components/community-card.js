import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './community-card.css'

const CommunityCard = (props) => {
  return (
    <div className="community-card-community-card padding-s elevation-on-hover position-relative column gap-xs">
      <div className="community-card-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="community-card-image"
        />
      </div>
      <div className="flex-1 justify-in-between column gap-xs">
        <div className="community-card-container3">
          <h3 className="community-card-text1 heading-4">
            {props.heading ?? (
              <Fragment>
                <span className="community-card-text3">
                  Join the PortSwigger Discord community
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <Button
          size="small"
          btnType="quarternary"
          btnLabel={
            <Fragment>
              <span className="community-card-text2">Read More</span>
            </Fragment>
          }
          iconType="arrow-right"
          rootClassName="buttonroot-class-name17"
        ></Button>
      </div>
    </div>
  )
}

CommunityCard.defaultProps = {
  imageAlt: 'image',
  heading: undefined,
  imageSrc: '/Pages/Home/discord-image-300h-300h.webp',
}

CommunityCard.propTypes = {
  imageAlt: PropTypes.string,
  heading: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default CommunityCard
