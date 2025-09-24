import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import Hero from '../../../components/hero'
import CompanyLogos from '../../../components/company-logos'
import Footer from '../../../components/footer'
import './burp-suite-dast-thank-you.css'

const BurpSuiteDASTThankYou = (props) => {
  return (
    <div className="burp-suite-dast-thank-you-container">
      <Helmet>
        <title>Thank you for your enquiry | Burp Suite DAST</title>
        <meta
          name="description"
          content="Each AppSec team’s requirements are unique. To help us tailor a demo around your DAST use case, we start with a 30-minute discovery. In this call, one of our Enterprise specialists will work with you"
        />
        <meta property="og:title" content="Thank you for requesting a demo" />
        <meta
          property="og:description"
          content="Each AppSec team’s requirements are unique. To help us tailor a demo around your DAST use case, we start with a 30-minute discovery. In this call, one of our Enterprise specialists will work with you"
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name17"></Navigation>
      <main className="align-center column width-100">
        <Hero
          heading={
            <Fragment>
              <span className="burp-suite-dast-thank-you-text10">
                What happens next?
              </span>
            </Fragment>
          }
          showCta={false}
          ctaLabel={
            <Fragment>
              <span className="burp-suite-dast-thank-you-text11">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-dast-thank-you-text12">
                Thank you for your enquiry
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-suite-dast-thank-you-text13">
                BUY - $475
              </span>
            </Fragment>
          }
          heroImgSrc="/Icons/burp-suite-dast-icon-1400w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-suite-dast-thank-you-text14">
                <span>
                  Every AppSec team is different. We’ll review your enquiry and
                  DAST use case and be in touch soon. If a discovery call makes
                  sense, our Burp Suite DAST team will want to explore:
                </span>
                <br></br>
                <br></br>
                <span>  •</span>
                <span> </span>
                <span className="burp-suite-dast-thank-you-text20">
                  Your current web app security challenges.
                </span>
                <br className="burp-suite-dast-thank-you-text21"></br>
                <span>  •</span>
                <span className="burp-suite-dast-thank-you-text23">
                  {' '}
                  Your project requirement and success criteria
                </span>
                <br className="burp-suite-dast-thank-you-text24"></br>
                <span>  •</span>
                <span className="burp-suite-dast-thank-you-text26">
                  {' '}
                  A plan for your proof-of-concept
                </span>
                <br></br>
                <br></br>
                <span>
                  {' '}
                  Following the call, we will arrange a tailored demo of Burp
                  Suite DAST, before setting you up with a guided POC trial
                  license.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          showTopLabel
          rootClassName="heroroot-class-name16"
          mainImageAlign="stretch"
          showSubHeading
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <CompanyLogos rootClassName="company-logosroot-class-name5"></CompanyLogos>
      </main>
      <Footer rootClassName="footerroot-class-name23"></Footer>
    </div>
  )
}

export default BurpSuiteDASTThankYou
