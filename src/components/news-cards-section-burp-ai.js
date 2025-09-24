import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import BlogPostCard from './blog-post-card'
import './news-cards-section-burp-ai.css'

const NewsCardsSectionBurpAI = (props) => {
  return (
    <div
      className={`align-center position-relative padding-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-l align-center width-max-content column width-100">
        <div className="news-cards-section-burp-ai-container2 gap-m grid width-100">
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-burp-ai-text10">
                  From curiosity to critical impact: A pentester&apos;s
                  perspective on Burp AI
                </span>
              </Fragment>
            }
            showTag
            tagType="Enterprise"
            imageSrc="/Pages/Customer Stories/cristi-vlad-1300w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text11">
                  CUSTOMER STORY
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-burp-ai-description1 text-body-1">
                  Cristi Vlad discusses his early experiences with Burp AI and
                  get his take on how AI could be transformative for penetration
                  testing in years to come.
                </span>
              </Fragment>
            }
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text12">
                  Read More
                </span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/customer-stories/cristi-vlad-burp-ai"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-burp-ai-text13">
                  Why it&apos;s time for AppSec to embrace AI: How PortSwigger
                  is leading the charge
                </span>
              </Fragment>
            }
            showTag
            imageSrc="/Pages/Burp AI/appsec-embrace-ai-blog-header-600w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text14">BLOG</span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-burp-ai-description2 text-body-1">
                  AI is rapidly gaining traction in virtually every industry.
                  But in AppSec, it&apos;s often met with a healthy skepticism.
                </span>
              </Fragment>
            }
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text15">
                  Read More
                </span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/blog/why-its-time-for-appsec-to-embrace-ai-how-portswigger-is-leading-the-charge"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-burp-ai-text16">
                  Welcome to the next generation of Burp Suite: elevate your
                  testing with Burp AI
                </span>
              </Fragment>
            }
            showTag
            imageSrc="/Pages/Burp AI/ai-data-security-600w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text17">BLOG</span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-burp-ai-description3 text-body-1">
                  Read how PortSwigger are exploring how artificial intelligence
                  can further support pentesting work.
                </span>
              </Fragment>
            }
            rootClassName="blog-post-cardroot-class-name10"
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text18">
                  Read More
                </span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/blog/welcome-to-the-next-generation-of-burp-suite-elevate-your-testing-with-burp-ai"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-burp-ai-text19">
                  The future of security testing: harness AI-Powered
                  Extensibility in Burp
                </span>
              </Fragment>
            }
            showTag
            imageSrc="/Pages/Burp AI/1298-article-ai_powered_extensions_blog_header_image-600w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text20">BLOG</span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-burp-ai-description4 text-body-1">
                  Read how PortSwigger are exploring how artificial intelligence
                  can further support pentesting work.
                </span>
              </Fragment>
            }
            rootClassName="blog-post-cardroot-class-name11"
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text21">
                  Read More
                </span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/blog/the-future-of-security-testing-harness-ai-powered-extensibility-in-burp-nbsp"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-burp-ai-text22">
                  AI security, privacy and data handling
                </span>
              </Fragment>
            }
            showTag
            tagType="Pro"
            imageSrc="/external/data-security-blog-header-600w1-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text23">
                  DOCUMENTATION
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-burp-ai-description5 text-body-1">
                  Check out PortSwigger&apos;s documentation on how we protect
                  your data and ensure AI-powered interactions remain secure.
                </span>
              </Fragment>
            }
            rootClassName="blog-post-cardroot-class-name12"
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text24">
                  Read More
                </span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/burp/documentation/desktop/extensions/ai-security-privacy-data-handling"
            buttonIconPlacement="right"
          ></BlogPostCard>
          <BlogPostCard
            heading={
              <Fragment>
                <span className="news-cards-section-burp-ai-text25">
                  Using AI extensions
                </span>
              </Fragment>
            }
            showTag
            tagType="Pro"
            imageSrc="/Pages/Burp AI/using-ai-extensions-600w-1500w.webp"
            tagLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text26">
                  DOCUMENTATION
                </span>
              </Fragment>
            }
            buttonSize="large"
            description={
              <Fragment>
                <span className="news-cards-section-burp-ai-description6 text-body-1">
                  Burp&apos;s AI-powered extensions enhance and automate your
                  testing workflow. Discover how to enable AI-powered extensions
                  and how the AI credit system works.
                </span>
              </Fragment>
            }
            rootClassName="blog-post-cardroot-class-name13"
            buttonBtnLabel={
              <Fragment>
                <span className="news-cards-section-burp-ai-text27">
                  Read More
                </span>
              </Fragment>
            }
            blogPostCardUrl="https://portswigger.net/burp/documentation/desktop/extensions/using-ai-extensions"
            buttonIconPlacement="right"
          ></BlogPostCard>
        </div>
      </div>
    </div>
  )
}

NewsCardsSectionBurpAI.defaultProps = {
  rootClassName: '',
}

NewsCardsSectionBurpAI.propTypes = {
  rootClassName: PropTypes.string,
}

export default NewsCardsSectionBurpAI
