import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import HeadingAndParagraph from './heading-and-paragraph'
import BlogPostCard from './blog-post-card'
import Button from './button'
import './news-cards-section.css'

const NewsCardsSection = (props) => {
  return (
    <div
      className={`align-center position-relative padding-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-l align-center width-max-content column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="news-cards-section-text10">
                The latest AppSec news from PortSwigger
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="news-cards-section-text11">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="news-cards-section-text12">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name2"
          showParagraph={false}
        ></HeadingAndParagraph>
        <div className="gap-m grid-colums-3 grid">
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-text13">
                  Welcome to the next generation of Burp Suite
                </span>
              </Fragment>
            }
            imageSrc="/Pages/Home/burp-ai-news-500w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-text14">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-description1 text-body-1">
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
            }
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-text18">Read More</span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/blog/welcome-to-the-next-generation-of-burp-suite-elevate-your-testing-with-burp-ai"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-text19">
                  Burp Everywhere, All Around the World
                </span>
              </Fragment>
            }
            imageSrc="/Pages/Home/burp-everywhere-500w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-text20">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-description2 text-body-1">
                  We want to make it even easier for AppSec professionals like
                  you to connect.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-text21">Read More</span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/blog/burp-everywhere-all-around-the-world-bringing-appsec-enthusiasts-together-in-2025"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-text22">
                  SAML Roulette: The Hacker Always Wins
                </span>
              </Fragment>
            }
            imageSrc="/Pages/Home/saml-roullette-500w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-text23">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-description3 text-body-1">
                  Achieve unauthenticated admin access on GitLab Enterprise by
                  exploiting the ruby-saml library.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            rootClassName="blog-post-cardroot-class-name"
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-text24">Read More</span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/research/saml-roulette-the-hacker-always-wins"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-text25">
                  Shadow Repeater: AI Enhanced Manual Testing
                </span>
              </Fragment>
            }
            imageSrc="/Pages/Home/shadow-repeater-500w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-text26">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-description4 text-body-1">
                  Ever wondered how many vulnerabilities you&apos;ve missed by a
                  hair&apos;s breadth?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            rootClassName="blog-post-cardroot-class-name1"
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-text27">Read More</span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/research/shadow-repeater-ai-enhanced-manual-testing"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-text28">
                  PortSwigger and SAP strategic partnership
                </span>
              </Fragment>
            }
            imageSrc="/Pages/Home/portswigger-sap-500w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-text29">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-description5 text-body-1">
                  PortSwigger announce a strategic partnership with SAP, a
                  leader in enterprise software solutions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            rootClassName="blog-post-cardroot-class-name2"
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-text30">Read More</span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/blog/portswigger-and-sap-forge-strategic-partnership-to-enhance-enterprise-web-security"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-text31">
                  The top 10 web hacking techniques of 2024
                </span>
              </Fragment>
            }
            imageSrc="/Pages/Home/top-10-web-hacking-techniques-2024-500w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-text32">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-description6 text-body-1">
                  PortSwigger Research and the community identify the
                  year&apos;s must-read web security research.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            rootClassName="blog-post-cardroot-class-name3"
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-text33">Read More</span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/research/top-10-web-hacking-techniques-of-2024"
            buttonIconPlacement="right"
          ></BlogPostCard>
        </div>
        <a
          href="https://portswigger.net/blog"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            btnLabel={
              <Fragment>
                <span className="news-cards-section-text34">
                  READ MORE ON OUR BLOG
                </span>
              </Fragment>
            }
            iconPlacement="none"
            rootClassName="buttonroot-class-name16"
            className="news-cards-section-component8"
          ></Button>
        </a>
      </div>
    </div>
  )
}

NewsCardsSection.defaultProps = {
  rootClassName: '',
}

NewsCardsSection.propTypes = {
  rootClassName: PropTypes.string,
}

export default NewsCardsSection
