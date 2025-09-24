import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import BlogPostCard from './blog-post-card'
import './blog-post-cardection-pro.css'

const BlogPostCardectionPro = (props) => {
  return (
    <div
      className={`align-center position-relative padding-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-l align-center width-max-content column width-100">
        <div className="gap-m grid-colums-3 grid">
          <BlogPostCard
            heading={props.card1Heading}
            imageAlt={props.card1ImageAlt}
            imageSrc={props.card1ImageSrc}
            tagLabel={
              <Fragment>
                <span className="blog-post-cardection-pro-text1">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize={props.card1ButtonSize}
            description={props.card1Text}
            buttonBtnType={props.card1ButtonBtnType}
            buttonBtnLabel={props.card1ButtonBtnLabel}
            buttonIconType={props.card1ButtonIconType}
            blogPostCardUrl={props.card1URL}
            buttonIconPlacement={props.card1ButtonIconPlacement}
          ></BlogPostCard>
          <BlogPostCard
            heading={props.card2Heading}
            imageAlt={props.card2ImageAlt}
            imageSrc={props.card2ImageSrc}
            tagLabel={
              <Fragment>
                <span className="blog-post-cardection-pro-text2">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize={props.card2ButtonSize}
            description={props.card2text}
            buttonBtnType={props.card2ButtonBtnType}
            buttonBtnLabel={props.card2ButtonBtnLabel}
            buttonIconType={props.card2ButtonIconType}
            blogPostCardUrl={props.card2URL}
            buttonIconPlacement={props.card2ButtonIconPlacement}
          ></BlogPostCard>
          <BlogPostCard
            heading={props.card3Heading}
            showTag={false}
            imageAlt={props.card3ImageAlt}
            imageSrc={props.card3mageSrc}
            tagLabel={
              <Fragment>
                <span className="blog-post-cardection-pro-text3">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize={props.card3ButtonSize}
            description={props.card3Description}
            buttonBtnType={props.card3ButtonBtnType}
            rootClassName="blog-post-cardroot-class-name14"
            buttonBtnLabel={props.card3ButtonBtnLabel}
            buttonIconType={props.card3ButtonIconType}
            blogPostCardUrl={props.card3URL}
            buttonIconPlacement={props.card3ButtonIconPlacement}
          ></BlogPostCard>
        </div>
      </div>
    </div>
  )
}

BlogPostCardectionPro.defaultProps = {
  card3ButtonIconPlacement: 'right',
  card1ButtonBtnType: 'quarternary',
  card2ImageSrc: '/getting-started-with-the-web-security-academy-200h.webp',
  card2ButtonBtnLabel: undefined,
  card3ButtonBtnType: 'quarternary',
  card1ButtonIconType: '',
  card1ButtonBtnLabel: undefined,
  card2ImageAlt: '',
  card2URL: '',
  card1ButtonSize: 'large',
  card3ButtonIconType: 'arrow-right',
  card3ButtonBtnLabel: undefined,
  card3Description: undefined,
  card1ImageAlt: '',
  card1Heading: undefined,
  rootClassName: '',
  card3URL: '',
  card3ImageAlt: '',
  card2ButtonIconType: 'arrow-right',
  card3mageSrc:
    '/Pages/Burp Suite/Professional Edition/discord-workflow-blog-image-200h-200h.webp',
  card2ButtonSize: '',
  card1ButtonIconPlacement: 'right',
  card3ButtonSize: 'large',
  card3Heading: undefined,
  card2text: undefined,
  card2Heading: undefined,
  card1ImageSrc: '/research-blog-200h.webp',
  card1Text: undefined,
  card2ButtonIconPlacement: 'right',
  card1URL: 'https://portswigger.net',
  card2ButtonBtnType: 'quarternary',
}

BlogPostCardectionPro.propTypes = {
  card3ButtonIconPlacement: PropTypes.string,
  card1ButtonBtnType: PropTypes.string,
  card2ImageSrc: PropTypes.string,
  card2ButtonBtnLabel: PropTypes.element,
  card3ButtonBtnType: PropTypes.string,
  card1ButtonIconType: PropTypes.string,
  card1ButtonBtnLabel: PropTypes.element,
  card2ImageAlt: PropTypes.string,
  card2URL: PropTypes.string,
  card1ButtonSize: PropTypes.string,
  card3ButtonIconType: PropTypes.string,
  card3ButtonBtnLabel: PropTypes.element,
  card3Description: PropTypes.element,
  card1ImageAlt: PropTypes.string,
  card1Heading: PropTypes.element,
  rootClassName: PropTypes.string,
  card3URL: PropTypes.string,
  card3ImageAlt: PropTypes.string,
  card2ButtonIconType: PropTypes.string,
  card3mageSrc: PropTypes.string,
  card2ButtonSize: PropTypes.string,
  card1ButtonIconPlacement: PropTypes.string,
  card3ButtonSize: PropTypes.string,
  card3Heading: PropTypes.element,
  card2text: PropTypes.element,
  card2Heading: PropTypes.element,
  card1ImageSrc: PropTypes.string,
  card1Text: PropTypes.element,
  card2ButtonIconPlacement: PropTypes.string,
  card1URL: PropTypes.string,
  card2ButtonBtnType: PropTypes.string,
}

export default BlogPostCardectionPro
