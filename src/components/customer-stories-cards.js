import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import BlogPostCardFeatured from './blog-post-card-featured'
import BlogPostCard from './blog-post-card'
import './customer-stories-cards.css'

const CustomerStoriesCards = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-m width-max-content column width-100">
        <BlogPostCardFeatured
          url="https://portswigger.net/customer-stories/microsoft-case-study"
          heading={props.card1Heading}
          imageSrc={props.card1Imgsrc}
          description={props.card1description}
          rootClassName="blog-post-card-featuredroot-class-name"
        ></BlogPostCardFeatured>
        <div className="gap-m grid-columns-2 grid width-100">
          <BlogPostCard
            heading={props.card2Heading}
            imageSrc={props.card2ImageSrc}
            tagLabel={
              <Fragment>
                <span className="customer-stories-cards-text10">
                  https://play.teleporthq.io/static/svg/placeholders/no-image.svg
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={props.card2Description}
            rootClassName="blog-post-cardroot-class-name8"
            buttonBtnLabel={props.card2BtnLabel}
            imageAlignment="left"
            blogPostCardUrl={props.card2URL}
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={props.card3Heading}
            imageSrc={props.card3imageSrc}
            tagLabel={
              <Fragment>
                <span className="customer-stories-cards-text11">
                  https://play.teleporthq.io/static/svg/placeholders/no-image.svg
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={props.card3Description}
            rootClassName="blog-post-cardroot-class-name9"
            buttonBtnLabel={props.card3BtnLabel}
            imageAlignment="left"
            blogPostCardUrl={props.card3URL}
            buttonIconPlacement="right"
          ></BlogPostCard>
        </div>
        <BlogPostCardFeatured
          url={props.card4URL}
          heading={props.card4Heading}
          imageSrc={props.card4ImageSrc}
          description={props.card4Description}
          rootClassName="blog-post-card-featuredroot-class-name1"
        ></BlogPostCardFeatured>
      </div>
    </div>
  )
}

CustomerStoriesCards.defaultProps = {
  rootClassName: '',
  card1Imgsrc:
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  card4Description: undefined,
  card2BtnLabel: undefined,
  card3URL: '',
  card2Heading: undefined,
  card4Heading: undefined,
  card3BtnLabel: undefined,
  card3Description: undefined,
  card4URL: 'https://portswigger.net/customer-stories/cristi-vlad-burp-ai',
  card3imageSrc: '/flocast-550.png',
  card2Description: undefined,
  card1Heading: undefined,
  card2URL: '',
  card1description: undefined,
  card2ImageSrc: '/burp-pro-550.png',
  card4ImageSrc: '/cristi-vlad-1300w.webp',
  card3Heading: undefined,
}

CustomerStoriesCards.propTypes = {
  rootClassName: PropTypes.string,
  card1Imgsrc: PropTypes.string,
  card4Description: PropTypes.element,
  card2BtnLabel: PropTypes.element,
  card3URL: PropTypes.string,
  card2Heading: PropTypes.element,
  card4Heading: PropTypes.element,
  card3BtnLabel: PropTypes.element,
  card3Description: PropTypes.element,
  card4URL: PropTypes.string,
  card3imageSrc: PropTypes.string,
  card2Description: PropTypes.element,
  card1Heading: PropTypes.element,
  card2URL: PropTypes.string,
  card1description: PropTypes.element,
  card2ImageSrc: PropTypes.string,
  card4ImageSrc: PropTypes.string,
  card3Heading: PropTypes.element,
}

export default CustomerStoriesCards
