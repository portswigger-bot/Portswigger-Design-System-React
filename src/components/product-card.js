import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import HeadingAndParagraph from './heading-and-paragraph'
import Button from './button'
import './product-card.css'

const ProductCard = (props) => {
  return (
    <a href={props.url} className="product-card-link">
      <div
        className={`product-card-blog-post-card padding-s elevation-on-hover shadow-on-hover position-relative blog-post-card-portrait height-100vh column height-100 gap-xs ${props.rootClassName} `}
      >
        <HeadingAndParagraph
          heading={props.headingAndParagraphHeading}
          topLabel={
            <Fragment>
              <span className="product-card-text10">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="product-card-text11">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H4"
          rootClassName="heading-and-paragraphroot-class-name182"
          showParagraph={false}
        ></HeadingAndParagraph>
        <div className="product-card-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className={`product-card-image blog-post-card-thumbnail ${
              props?.imageAlignment === 'left' ? 'image-alignment-left' : ''
            } ${
              props?.imageAlignment === 'center' ? 'image-alignment-center' : ''
            } ${
              props?.imageAlignment === 'right' ? 'image-alignment-right' : ''
            } `}
          />
        </div>
        <div className="gap-s flex-1 justify-in-between column">
          <div className="product-card-container3">
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
                    <span className="product-card-text20">CUSTOMER STORY</span>
                  </Fragment>
                )}
              </span>
            )}
            <p className="product-card-description1 text-body-1">
              {props.description ?? (
                <Fragment>
                  <span className="product-card-description3 text-body-1">
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
            </p>
          </div>
          <Button
            size="large"
            btnType="primary"
            btnLabel={
              <Fragment>
                <span className="product-card-text12">FIND OUT MORE</span>
              </Fragment>
            }
            iconType="arrow-right"
            iconPlacement="none"
            rootClassName="buttonroot-class-name50"
          ></Button>
          <span className="product-card-description2 text-body-3">
            {props.description2 ?? (
              <Fragment>
                <span className="product-card-description4 text-body-1">
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
      </div>
    </a>
  )
}

ProductCard.defaultProps = {
  tagType: 'orange',
  imageSrc: '/Pages/Home/burp-ai-news-500w-1500w.webp',
  imageAlt: 'image',
  headingAndParagraphHeading: undefined,
  description: undefined,
  url: 'https://www.teleporthq.io',
  rootClassName: '',
  showTag: false,
  imageAlignment: 'center',
  description2: undefined,
  tagLabel: undefined,
}

ProductCard.propTypes = {
  tagType: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  headingAndParagraphHeading: PropTypes.element,
  description: PropTypes.element,
  url: PropTypes.string,
  rootClassName: PropTypes.string,
  showTag: PropTypes.boolean,
  imageAlignment: PropTypes.string,
  description2: PropTypes.element,
  tagLabel: PropTypes.element,
}

export default ProductCard
