import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import HeadingAndParagraph from './heading-and-paragraph'
import CommunityCard from './community-card'
import './community-cards-section.css'

const CommunityCardsSection = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="community-cards-section-max-width gap-m width-max-content column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="community-cards-section-text10">
                Get to know the PortSwigger community
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="community-cards-section-text11">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="community-cards-section-text12">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name5"
          showParagraph={false}
        ></HeadingAndParagraph>
        <div className="gap-m grid-colums-3 items-center grid">
          <a href={props.card1URL}>
            <CommunityCard
              heading={
                <Fragment>
                  <span className="community-cards-section-text13">
                    Join the PortSwigger Discord community
                  </span>
                </Fragment>
              }
              className="community-cards-section-component2"
            ></CommunityCard>
          </a>
          <a href={props.card2URL}>
            <CommunityCard
              heading={
                <Fragment>
                  <span className="community-cards-section-text14">
                    Top tips from a Burp Suite fanboy
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/community-stok-300w-300h.webp"
              className="community-cards-section-component3"
            ></CommunityCard>
          </a>
          <a href={props.card3URL}>
            <CommunityCard
              heading={
                <Fragment>
                  <span className="community-cards-section-text15">
                    DevSecOps insights from Aleksandr Krasnov
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/community-aleksandr-300w-300h.webp"
              className="community-cards-section-component4"
            ></CommunityCard>
          </a>
          <a href={props.card4URL}>
            <CommunityCard
              heading={
                <Fragment>
                  <span className="community-cards-section-text16">
                    Katie Paxton-Fear on her bug bounty baptism
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/community-katie-300h-300h.webp"
              className="community-cards-section-component5"
            ></CommunityCard>
          </a>
          <a href={props.card5URL}>
            <CommunityCard
              heading={
                <Fragment>
                  <span className="community-cards-section-text17">
                    Forging a lucrative career in ethical hacking - Xel
                    interviewed
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/community-xel-300h-300h.webp"
              className="community-cards-section-component6"
            ></CommunityCard>
          </a>
          <a href={props.card6URL}>
            <CommunityCard
              heading={
                <Fragment>
                  <span className="community-cards-section-text18">
                    Dafydd Stuttard - PortSwigger founder and Chief Swig - AMA
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/community-daf-ama-300w-300w.webp"
              className="community-cards-section-component7"
            ></CommunityCard>
          </a>
        </div>
        <div className="community-cards-section-container3 gap-s column">
          <h2 className="community-cards-section-text19">Connect with us</h2>
          <div className="community-cards-section-container4">
            <a
              href="https://x.com/PortSwigger"
              className="community-cards-section-link16"
            >
              <div className="community-cards-section-container5">
                <img
                  alt="image"
                  src="/Pages/Home/x-logo-portswigger-200h-200h.webp"
                  className="community-cards-section-image1"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/portswigger/"
              target="_blank"
              rel="noreferrer noopener"
              className="community-cards-section-link17"
            >
              <div className="community-cards-section-container6">
                <img
                  alt="image"
                  src="/Pages/Home/linkedin-logo-portswigger-200h-200h.webp"
                  className="community-cards-section-image2"
                />
              </div>
            </a>
            <a
              href="https://www.youtube.com/c/PortSwiggerTV"
              target="_blank"
              rel="noreferrer noopener"
              className="community-cards-section-link18"
            >
              <div className="community-cards-section-container7">
                <img
                  alt="image"
                  src="/Pages/Home/youtube-logo-portswigger-200h-200h.webp"
                  className="community-cards-section-image3"
                />
              </div>
            </a>
            <a
              href="https://discord.com/invite/portswigger"
              className="community-cards-section-link19"
            >
              <div className="community-cards-section-container8">
                <img
                  alt="image"
                  src="/Pages/Home/discord-logo-portswigger-200h-200h.webp"
                  className="community-cards-section-image4"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

CommunityCardsSection.defaultProps = {
  card3URL: 'https://www.teleporthq.io',
  card4URL: 'https://www.teleporthq.io',
  rootClassName: '',
  card1URL: 'https://www.teleporthq.io',
  card5URL: 'https://www.teleporthq.io',
  card2URL: 'https://www.teleporthq.io',
  card6URL: 'https://www.teleporthq.io',
}

CommunityCardsSection.propTypes = {
  card3URL: PropTypes.string,
  card4URL: PropTypes.string,
  rootClassName: PropTypes.string,
  card1URL: PropTypes.string,
  card5URL: PropTypes.string,
  card2URL: PropTypes.string,
  card6URL: PropTypes.string,
}

export default CommunityCardsSection
