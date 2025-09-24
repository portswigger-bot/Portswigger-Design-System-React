import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import Navigation from '../components/navigation'
import HeadingAndParagraph from '../components/heading-and-paragraph'
import CustomerStoriesCards from '../components/customer-stories-cards'
import Footer from '../components/footer'
import './customer-stories.css'

const CustomerStories = (props) => {
  return (
    <div className="customer-stories-container">
      <Helmet>
        <title>
          Customer-Stories - Web Application Security, Testing, & Scanning -
          PortSwigger
        </title>
        <meta
          name="description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta
          property="og:title"
          content="Customer-Stories - Web Application Security, Testing, &amp; Scanning - PortSwigger"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name6"></Navigation>
      <main className="align-center column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="customer-stories-text10">
                Pentester success stories
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="customer-stories-text11">Securing the web</span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="customer-stories-text12">
                Discover how organizations are leveraging PortSwigger&apos;s
                penetration testing solutions to enhance their cybersecurity
                posture.
              </span>
            </Fragment>
          }
          showTopLabel
          rootClassName="heading-and-paragraphroot-class-name66"
        ></HeadingAndParagraph>
        <CustomerStoriesCards
          card2URL="https://portswigger.net/customer-stories/efficient-discovery-pentester-case-study"
          card3URL="https://portswigger.net/customer-stories/floqast-case-study"
          card4URL="https://portswigger.net/customer-stories/cristi-vlad-burp-ai"
          card1Imgsrc="/Pages/Customer Stories/microsoft-550-1200w.png"
          card1Heading={
            <Fragment>
              <span className="customer-stories-text13">
                The cornerstone of Microsoft’s pentesting toolkit.
              </span>
            </Fragment>
          }
          card2Heading={
            <Fragment>
              <span className="customer-stories-text14">
                Efficient discovery, application mapping and extensibility.
              </span>
            </Fragment>
          }
          card3Heading={
            <Fragment>
              <span className="customer-stories-text15">
                Streamlining testing workflows and providing actionable
                reporting for their developers.
              </span>
            </Fragment>
          }
          card4Heading={
            <Fragment>
              <span className="customer-stories-text16">
                From curiosity to critical impact: A pentester&apos;s
                perspective on Burp AI
              </span>
            </Fragment>
          }
          card2BtnLabel={
            <Fragment>
              <span className="customer-stories-text17">Read more</span>
            </Fragment>
          }
          card2ImageSrc="/Pages/Customer Stories/burp-pro-550-1200w.png"
          card3BtnLabel={
            <Fragment>
              <span className="customer-stories-text18">Read more</span>
            </Fragment>
          }
          card3imageSrc="/Pages/Customer Stories/flocast-550-1200w.png"
          card4ImageSrc="/Pages/Customer Stories/cristi-vlad-1300w-1200w.webp"
          rootClassName="customer-stories-cardsroot-class-name"
          card1description={
            <Fragment>
              <span className="customer-stories-text19">
                Find out why Burp Suite Professional is the cornerstone of
                Microsoft’s pentesting toolkit.
              </span>
            </Fragment>
          }
          card2Description={
            <Fragment>
              <span className="customer-stories-description1">
                Find out how this pentester within a 30-member AppSec team uses
                Burp Suite Professional to enhance their workflow.
              </span>
            </Fragment>
          }
          card3Description={
            <Fragment>
              <span className="customer-stories-description2">
                Find out how FloQast are able to find vulnerabilities and help
                development teams patch them before they hit production.
              </span>
            </Fragment>
          }
          card4Description={
            <Fragment>
              <span className="customer-stories-text20">
                <span>
                  We caught up with Cristi Vlad discuss his early experiences
                  with Burp AI and get his take on how AI could be
                  transformative for penetration testing in years to come.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
        ></CustomerStoriesCards>
      </main>
      <Footer rootClassName="footerroot-class-name11"></Footer>
    </div>
  )
}

export default CustomerStories
