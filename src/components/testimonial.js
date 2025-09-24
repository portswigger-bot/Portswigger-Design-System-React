import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div
      className={`padding-vertical-xl align-center position-relative padding-horizontal-m column width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-m align-center width-max-content padding-horizontal-xl padding-vertical-l justify-center width-100 testimonial-max-width ${
          props?.bordered === true ? 'radius-xxl' : ''
        } ${props?.bordered === true ? 'border-gray' : ''} ${
          props?.logoPlacement === 'left' ? 'row' : ''
        } ${props?.logoPlacement === 'right' ? 'row-reverse' : ''} `}
      >
        <div className="testimonial-container2 padding-s">
          <img
            alt="image"
            src={props.logoSrc}
            className="testimonial-logo width-100"
          />
        </div>
        <div className="gap-s flex-1 column">
          <span className="text-body-1">
            {props.testimonial ?? (
              <Fragment>
                <span className="testimonial-text1">
                  &quot;I do have to say, if you&apos;re not in the @PortSwigger
                  discord you&apos;re missing out.&quot;
                </span>
              </Fragment>
            )}
          </span>
          <span className="testimonial-author text-body-2">
            {props.author ?? (
              <Fragment>
                <span className="testimonial-text2">
                  @t0xodile, Burp Suite Professional user
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  testimonial: undefined,
  author: undefined,
  bordered: false,
  logoSrc: '/Pages/Discord/twitter-x.svg',
  rootClassName: '',
  logoPlacement: 'left',
}

Testimonial.propTypes = {
  testimonial: PropTypes.element,
  author: PropTypes.element,
  bordered: PropTypes.boolean,
  logoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  logoPlacement: PropTypes.string,
}

export default Testimonial
