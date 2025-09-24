import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import HeadingAndParagraph from './heading-and-paragraph'
import BlogPostCardFeatured from './blog-post-card-featured'
import BlogPostCard from './blog-post-card'
import './security-cards-section.css'

const SecurityCardsSection = (props) => {
  return (
    <div
      className={`align-center position-relative padding-l column width-100 security-cards-section-container1 ${props.rootClassName} `}
    >
      <div className="gap-l align-center width-max-content column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="security-cards-section-text10">
                Security resources for everyone
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="security-cards-section-text11">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="security-cards-section-text12">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name4"
          showParagraph={false}
        ></HeadingAndParagraph>
        <div className="gap-m column">
          <BlogPostCardFeatured
            url="https://portswigger.net/blog"
            heading={
              <Fragment>
                <span className="security-cards-section-text13">
                  The PortSwigger Blog
                </span>
              </Fragment>
            }
            description={
              <Fragment>
                <span className="security-cards-section-text14">
                  Get the inside scoop on the latest Burp Suite news, tech, and
                  interviews - from right across the PortSwigger team.
                </span>
              </Fragment>
            }
          ></BlogPostCardFeatured>
          <div className="security-cards-section-container2 gap-m grid-colums-3 grid">
            <BlogPostCard
              heading={
                <Fragment>
                  <span className="security-cards-section-text15">
                    The top 10 web hacking techniques of 2024
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/top-10-web-hacking-techniques-2024-500w-1500w.webp"
              tagLabel={
                <Fragment>
                  <span className="security-cards-section-text16">
                    CUSTOMER STORY
                  </span>
                </Fragment>
              }
              buttonSize="large"
              description={
                <Fragment>
                  <span className="security-cards-section-description1 text-body-1">
                    The annual community-powered effort, rounding up the
                    year&apos;s must-read web security research.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              rootClassName="blog-post-cardroot-class-name7"
              buttonBtnLabel={
                <Fragment>
                  <span className="security-cards-section-text17">
                    Read More
                  </span>
                </Fragment>
              }
              blogPostCardUrl="https://portswigger.net/research/top-10-web-hacking-techniques-of-2024"
              buttonIconPlacement="right"
            ></BlogPostCard>
            <BlogPostCard
              heading={
                <Fragment>
                  <span className="security-cards-section-text18">
                    Burp Suite DAST and Burp Suite Professional
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/burp-suite-dast-pro-500w-1500w.webp"
              tagLabel={
                <Fragment>
                  <span className="security-cards-section-text19">
                    CUSTOMER STORY
                  </span>
                </Fragment>
              }
              buttonSize="large"
              description={
                <Fragment>
                  <span className="security-cards-section-description2 text-body-1">
                    Find the Burp Suite that&apos;s right for your use-case, and
                    discover a world of possibility.
                  </span>
                </Fragment>
              }
              buttonBtnLabel={
                <Fragment>
                  <span className="security-cards-section-text20">
                    Read More
                  </span>
                </Fragment>
              }
              blogPostCardUrl="https://portswigger.net/burp/enterprise/resources/enterprise-edition-vs-professional"
              buttonIconPlacement="right"
            ></BlogPostCard>
            <BlogPostCard
              heading={
                <Fragment>
                  <span className="security-cards-section-text21">
                    Become a Burp Suite Certified Practitioner
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/certification-product-500w-1500w.webp"
              tagLabel={
                <Fragment>
                  <span className="security-cards-section-text22">
                    CUSTOMER STORY
                  </span>
                </Fragment>
              }
              buttonSize="large"
              description={
                <Fragment>
                  <span className="security-cards-section-description3 text-body-1">
                    Prove your ability to detect and exploit web
                    vulnerabilities, with a Burp Suite certification.
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
                  <span className="security-cards-section-text23">
                    Read More
                  </span>
                </Fragment>
              }
              blogPostCardUrl="https://portswigger.net/web-security/certification"
              buttonIconPlacement="right"
            ></BlogPostCard>
            <BlogPostCard
              heading={
                <Fragment>
                  <span className="security-cards-section-text24">
                    Get started with the Web Security Academy
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/get-started-web-sec-academy-500w-1500w.webp"
              tagLabel={
                <Fragment>
                  <span className="security-cards-section-text25">
                    CUSTOMER STORY
                  </span>
                </Fragment>
              }
              buttonSize="large"
              description={
                <Fragment>
                  <span className="security-cards-section-description4 text-body-1">
                    Boost your cybersecurity skills, and get off to a flying
                    start in the Web Security Academy.
                  </span>
                </Fragment>
              }
              rootClassName="blog-post-cardroot-class-name4"
              buttonBtnLabel={
                <Fragment>
                  <span className="security-cards-section-text26">
                    Read More
                  </span>
                </Fragment>
              }
              blogPostCardUrl="https://portswigger.net/web-security/getting-started"
              buttonIconPlacement="right"
            ></BlogPostCard>
            <BlogPostCard
              heading={
                <Fragment>
                  <span className="security-cards-section-text27">
                    Learn with PortSwigger Research
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/portswigger-research-card-200h-1500w.webp"
              tagLabel={
                <Fragment>
                  <span className="security-cards-section-text28">
                    CUSTOMER STORY
                  </span>
                </Fragment>
              }
              buttonSize="large"
              description={
                <Fragment>
                  <span className="security-cards-section-description5 text-body-1">
                    Pioneering web security research and the latest research
                    articles from the industry-leading team.
                  </span>
                </Fragment>
              }
              rootClassName="blog-post-cardroot-class-name5"
              buttonBtnLabel={
                <Fragment>
                  <span className="security-cards-section-text29">
                    Read More
                  </span>
                </Fragment>
              }
              blogPostCardUrl="https://portswigger.net/research"
              buttonIconPlacement="right"
            ></BlogPostCard>
            <BlogPostCard
              heading={
                <Fragment>
                  <span className="security-cards-section-text30">
                    Burp Suite video tutorials and more
                  </span>
                </Fragment>
              }
              imageSrc="/Pages/Home/burp-suite-video-tutorials-yt-500w-1500w.webp"
              tagLabel={
                <Fragment>
                  <span className="security-cards-section-text31">
                    CUSTOMER STORY
                  </span>
                </Fragment>
              }
              buttonSize="large"
              description={
                <Fragment>
                  <span className="security-cards-section-description6 text-body-1">
                    Watch product guidance, video tutorials, interviews, and
                    more on the PortSwigger YouTube channel.
                  </span>
                </Fragment>
              }
              rootClassName="blog-post-cardroot-class-name6"
              buttonBtnLabel={
                <Fragment>
                  <span className="security-cards-section-text32">
                    Read More
                  </span>
                </Fragment>
              }
              blogPostCardUrl="https://www.youtube.com/c/PortSwiggerTV"
              buttonIconPlacement="right"
            ></BlogPostCard>
          </div>
        </div>
      </div>
    </div>
  )
}

SecurityCardsSection.defaultProps = {
  rootClassName: '',
}

SecurityCardsSection.propTypes = {
  rootClassName: PropTypes.string,
}

export default SecurityCardsSection
