import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './blog-post-card.css'

const BlogPostCard = (props) => {
  return (
    <a href={props.blogPostCardUrl} className="blog-post-card-link">
      <div
        className={`blog-post-card-blog-post-card padding-s elevation-on-hover shadow-on-hover position-relative blog-post-card-portrait column height-100 gap-xs ${props.rootClassName} `}
      >
        <div className="blog-post-card-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className={`blog-post-card-thumbnail blog-post-card-image ${
              props?.imageAlignment === 'left' ? 'image-alignment-left' : ''
            } ${
              props?.imageAlignment === 'center' ? 'image-alignment-center' : ''
            } ${
              props?.imageAlignment === 'right' ? 'image-alignment-right' : ''
            } `}
          />
        </div>
        <div className="gap-s flex-1 justify-in-between column">
          <div className="blog-post-card-container3">
            {props.showTag === true && (
              <span
                className={`blog-post-card-tag text-body-3 ${
                  props?.tagType === 'Enterprise' ? 'tag-enterprise' : ''
                } ${props?.tagType === 'orange' ? 'tag-orange' : ''} ${
                  props?.tagType === 'Pro' ? 'tag-pro' : ''
                } `}
              >
                {props.tagLabel ?? (
                  <Fragment>
                    <span className="blog-post-card-text5">CUSTOMER STORY</span>
                  </Fragment>
                )}
              </span>
            )}
            <h3 className="blog-post-card-text1 heading-4">
              {props.heading ?? (
                <Fragment>
                  <span className="blog-post-card-text7">
                    Welcome to the next generation of Burp Suite
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="blog-post-card-description1 text-body-1">
              {props.description ?? (
                <Fragment>
                  <span className="blog-post-card-description2 text-body-1">
                    <span>
                      Introducing Burp AI - a suite of powerful new features
                      designed to enhance your testing workflow.
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <Button
            size={props.buttonSize}
            btnType={props.buttonBtnType}
            btnLabel={props.buttonBtnLabel}
            iconType={props.buttonIconType}
            redirectUrl={props.buttonRedirectUrl}
            iconPlacement={props.buttonIconPlacement}
            rootClassName="buttonroot-class-name15"
          ></Button>
        </div>
      </div>
    </a>
  )
}

BlogPostCard.defaultProps = {
  description: undefined,
  buttonSize: 'small',
  tagType: 'orange',
  buttonRedirectUrl: '',
  imageSrc: '/Pages/Home/burp-ai-news-500w-1500w.webp',
  buttonIconType: 'arrow-right',
  imageAlt: 'image',
  imageAlignment: 'center',
  buttonBtnType: 'quarternary',
  buttonIconPlacement: '',
  rootClassName: '',
  blogPostCardUrl: 'https://www.teleporthq.io',
  tagLabel: undefined,
  buttonBtnLabel: undefined,
  heading: undefined,
  showTag: false,
}

BlogPostCard.propTypes = {
  description: PropTypes.element,
  buttonSize: PropTypes.string,
  tagType: PropTypes.string,
  buttonRedirectUrl: PropTypes.string,
  imageSrc: PropTypes.string,
  buttonIconType: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlignment: PropTypes.string,
  buttonBtnType: PropTypes.string,
  buttonIconPlacement: PropTypes.string,
  rootClassName: PropTypes.string,
  blogPostCardUrl: PropTypes.string,
  tagLabel: PropTypes.element,
  buttonBtnLabel: PropTypes.element,
  heading: PropTypes.element,
  showTag: PropTypes.boolean,
}

export default BlogPostCard
