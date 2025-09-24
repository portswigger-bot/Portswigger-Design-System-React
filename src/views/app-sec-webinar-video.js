import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import MinimalHeader from '../components/minimal-header'
import ContentBannerWithSlotRowLayout from '../components/content-banner-with-slot-row-layout'
import WebinarForm from '../components/webinar-form'
import Footer from '../components/footer'
import PardotFormHandlerScript from '../components/pardot-form-handler-script'
import './app-sec-webinar-video.css'

const AppSecWebinarVideo = (props) => {
  return (
    <div className="app-sec-webinar-video-container">
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
      <MinimalHeader rootClassName="minimal-headerroot-class-name1"></MinimalHeader>
      <main className="app-sec-webinar-video-main align-center column justify-center width-100">
        <ContentBannerWithSlotRowLayout
          layout="row"
          heading={
            <Fragment>
              <span className="app-sec-webinar-video-text10">
                <span className="app-sec-webinar-video-text11">
                  The Future of AppSec:
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="app-sec-webinar-video-text13">
                  PortSwigger&apos;s Vision
                </span>
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="app-sec-webinar-video-text14">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          listFont="body-1"
          showList
          topLabel={
            <Fragment>
              <span className="app-sec-webinar-video-text15">
                Watch the webinar on demand
              </span>
            </Fragment>
          }
          subHeading={
            <Fragment>
              <span className="app-sec-webinar-video-text16">
                <span>
                  Securing web applications has never been more complex - and
                  attackers know it. As applications grow in complexity,
                  security teams face mounting pressure to stay ahead.
                </span>
                <br></br>
                <br></br>
                <span>Here&apos;s a sneak-peak of the agenda:</span>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          showTopLabel
          rootClassName="content-banner-with-slot-row-layoutroot-class-name"
          subHeadingFontStyle="intro"
        >
          <WebinarForm></WebinarForm>
        </ContentBannerWithSlotRowLayout>
      </main>
      <Footer rootClassName="footerroot-class-name4"></Footer>
      <PardotFormHandlerScript rootClassName="pardot-form-handler-scriptroot-class-name19"></PardotFormHandlerScript>
    </div>
  )
}

export default AppSecWebinarVideo
