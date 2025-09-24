import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import MinimalHeader from '../components/minimal-header'
import ContentBannerWithSlotRowLayout from '../components/content-banner-with-slot-row-layout'
import CompanyLogos from '../components/company-logos'
import Footer from '../components/footer'
import './app-sec-thank-you.css'

const AppSecThankYou = (props) => {
  return (
    <div className="app-sec-thank-you-container">
      <Helmet>
        <title>The Future of AppSec | Watch the webinar Now</title>
        <meta
          name="description"
          content="As applications grow in complexity, security teams face mounting pressure to stay ahead. Watch the webinar now."
        />
        <meta
          property="og:title"
          content="The Future of AppSec | Watch the webinar now"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <MinimalHeader rootClassName="minimal-headerroot-class-name2"></MinimalHeader>
      <main className="align-center column justify-center width-100">
        <ContentBannerWithSlotRowLayout
          layout="row"
          heading={
            <Fragment>
              <span className="app-sec-thank-you-text1">
                Thanks for requesting access
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="app-sec-thank-you-text2">FIND OUT MORE</span>
            </Fragment>
          }
          listFont="body-1"
          topLabel={
            <Fragment>
              <span className="app-sec-thank-you-text3">
                The Future of AppSec: PortSwigger&apos;s Vision
              </span>
            </Fragment>
          }
          subHeading={
            <Fragment>
              <span className="app-sec-thank-you-text4">
                <span>
                  Thanks for requesting access to the recording of The Future of
                  AppSec: PortSwigger&apos;s Vision webinar. 
                </span>
                <br></br>
                <br></br>
                <span>
                  You&apos;ll receive an email with a link to the recording
                  shortly.
                </span>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          showTopLabel
          rootClassName="content-banner-with-slot-row-layoutroot-class-name1"
          subHeadingFontStyle="intro"
        ></ContentBannerWithSlotRowLayout>
        <CompanyLogos rootClassName="company-logosroot-class-name1"></CompanyLogos>
      </main>
      <Footer rootClassName="footerroot-class-name5"></Footer>
    </div>
  )
}

export default AppSecThankYou
