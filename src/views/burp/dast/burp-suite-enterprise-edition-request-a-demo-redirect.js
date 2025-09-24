import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import Hero from '../../../components/hero'
import CompanyLogos from '../../../components/company-logos'
import Footer from '../../../components/footer'
import './burp-suite-enterprise-edition-request-a-demo-redirect.css'

const BurpSuiteEnterpriseEditionRequestADemoRedirect = (props) => {
  return (
    <div className="burp-suite-enterprise-edition-request-a-demo-redirect-container">
      <Helmet>
        <title>Thank you for requesting a demo</title>
        <meta
          name="description"
          content="Each AppSec team’s requirements are unique. To help us tailor a demo around your DAST use case, we start with a 30-minute discovery."
        />
        <meta property="og:title" content="Thank you for requesting a demo" />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name12"></Navigation>
      <main className="align-center column width-100">
        <Hero
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-edition-request-a-demo-redirect-text10">
                What happens next?
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="burp-suite-enterprise-edition-request-a-demo-redirect-text11">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-edition-request-a-demo-redirect-text12">
                Thank you for requesting a demo
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-suite-enterprise-edition-request-a-demo-redirect-text13">
                BUY - $475
              </span>
            </Fragment>
          }
          heroImgSrc="/Icons/burp-suite-dast-icon-1400w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-suite-enterprise-edition-request-a-demo-redirect-text14">
                <span>
                  Each AppSec team’s requirements are unique. To help us tailor
                  a demo around your DAST use case, we start with a 30-minute
                  discovery. In this call, one of our Enterprise specialists
                  will work with you to understand:
                </span>
                <br></br>
                <br></br>
                <span>  •</span>
                <span> </span>
                <span className="burp-suite-enterprise-edition-request-a-demo-redirect-text20">
                  Your current web app security changes
                </span>
                <br className="burp-suite-enterprise-edition-request-a-demo-redirect-text21"></br>
                <span>  •</span>
                <span className="burp-suite-enterprise-edition-request-a-demo-redirect-text23">
                  {' '}
                  Your project requirement and success criteria
                </span>
                <br className="burp-suite-enterprise-edition-request-a-demo-redirect-text24"></br>
                <span>  •</span>
                <span className="burp-suite-enterprise-edition-request-a-demo-redirect-text26">
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
          rootClassName="heroroot-class-name11"
          mainImageAlign="stretch"
          showSubHeading
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <CompanyLogos rootClassName="company-logosroot-class-name3"></CompanyLogos>
      </main>
      <Footer rootClassName="footerroot-class-name18"></Footer>
    </div>
  )
}

export default BurpSuiteEnterpriseEditionRequestADemoRedirect
