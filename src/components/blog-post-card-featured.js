import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './blog-post-card-featured.css'

const BlogPostCardFeatured = (props) => {
  return (
    <a href={props.url} className="blog-post-card-featured-link">
      <div
        className={`blog-post-card-featured-blog-post-card-featured padding-s elevation-on-hover gap-l position-relative justify-in-between width-100 row ${props.rootClassName} `}
      >
        <div className="blog-post-card-featured-container1 width-50 column">
          <div className="blog-post-card-featured-container2">
            <h3 className="blog-post-card-featured-text1 heading-4">
              {props.heading ?? (
                <Fragment>
                  <span className="blog-post-card-featured-text4">
                    The PortSwigger Blog
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="blog-post-card-featured-description text-body-1">
              {props.description ?? (
                <Fragment>
                  <span className="blog-post-card-featured-text3">
                    Get the inside scoop on the latest Burp Suite news, tech,
                    and interviews - from right across the PortSwigger team.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <Button
            size="small"
            btnType="quarternary"
            btnLabel={
              <Fragment>
                <span className="blog-post-card-featured-text2">Read More</span>
              </Fragment>
            }
            iconType="arrow-right"
            rootClassName="buttonroot-class-name18"
            className="blog-post-card-featured-component"
          ></Button>
        </div>
        <div className="blog-post-card-featured-container3 width-50">
          <img
            alt="image"
            src={props.imageSrc}
            className="blog-post-card-featured-image"
          />
        </div>
      </div>
    </a>
  )
}

BlogPostCardFeatured.defaultProps = {
  rootClassName: '',
  description: undefined,
  imageSrc: '/Pages/Home/portswigger-blog-card-header-1200w-1500w.webp',
  heading: undefined,
  url: 'https://portswigger.net/blog',
}

BlogPostCardFeatured.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.element,
  imageSrc: PropTypes.string,
  heading: PropTypes.element,
  url: PropTypes.string,
}

export default BlogPostCardFeatured
