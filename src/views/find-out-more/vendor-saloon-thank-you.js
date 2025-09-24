import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../components/live-tag-production'
import Navigation from '../../components/navigation'
import Hero from '../../components/hero'
import CompanyLogos from '../../components/company-logos'
import Footer from '../../components/footer'
import './vendor-saloon-thank-you.css'

const VendorSaloonThankYou = (props) => {
  return (
    <div className="vendor-saloon-thank-you-container">
      <Helmet>
        <title>Thank you for your enquiry | Burp Suite DAST</title>
        <meta
          name="description"
          content="Thank you for your interest! We’ll send you an email shortly with more information on Burp Suite DAST, including FAQs, use cases and more."
        />
        <meta property="og:title" content="Thank you for requesting a demo" />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name18"></Navigation>
      <main className="align-center column width-100">
        <Hero
          heading={
            <Fragment>
              <span className="vendor-saloon-thank-you-text10">
                What happens next?
              </span>
            </Fragment>
          }
          showCta={false}
          ctaLabel={
            <Fragment>
              <span className="vendor-saloon-thank-you-text11">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="vendor-saloon-thank-you-text12">
                Thanks for your interest!
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="vendor-saloon-thank-you-text13">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Icons/burp-suite-dast-icon-1400w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="vendor-saloon-thank-you-text14">
                <span>
                  1. Check your inbox: we’ll send you an email shortly with more
                  information on Burp Suite DAST, including FAQs, use cases and
                  more. 
                </span>
                <br></br>
                <br></br>
                <span>
                  2. Want to dive deeper? If you’d like to see Burp Suite DAST
                  in action, you can
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/dast/trial"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="vendor-saloon-thank-you-link"
                >
                  request a demo here
                </a>
                <span>.</span>
                <br></br>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          showTopLabel
          rootClassName="heroroot-class-name17"
          mainImageAlign="stretch"
          showSubHeading
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <CompanyLogos rootClassName="company-logosroot-class-name6"></CompanyLogos>
      </main>
      <Footer rootClassName="footerroot-class-name24"></Footer>
    </div>
  )
}

export default VendorSaloonThankYou
