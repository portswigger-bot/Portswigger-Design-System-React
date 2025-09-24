import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../../components/navigation'
import HeadingAndParagraph from '../../components/heading-and-paragraph'
import AppSecQAndASection from '../../components/app-sec-q-and-a-section'
import Footer from '../../components/footer'
import './app-sec-q-a.css'

const AppSecQA = (props) => {
  return (
    <div className="app-sec-qa-container">
      <Helmet>
        <title>Q&A | The Future of AppSec Webinar</title>
        <meta
          name="description"
          content="With thousands of security professionals tuning in live, the questions came thick and fast. In this Q&amp;A we aim to answer the key questions fielded."
        />
        <meta
          property="og:title"
          content="Q&amp;A | The Future of AppSec Webinar"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <Navigation rootClassName="navigationroot-class-name2"></Navigation>
      <main className="align-center column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="app-sec-qa-text10">
                <span className="app-sec-qa-text11">
                  You Asked, We Answered: Q&amp;A from
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="app-sec-qa-text12">The Future of AppSec</span>
                <span className="app-sec-qa-text13"> Webinar</span>
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="app-sec-qa-text14">Securing the web</span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="app-sec-qa-text15">
                <br></br>
                <span>
                  When we wrapped up our biggest-ever webinar, The Future of
                  AppSec:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  PortSwigger’s Vision, the conversation was far from over.
                </span>
              </span>
            </Fragment>
          }
          rootClassName="heading-and-paragraphroot-class-name32"
        ></HeadingAndParagraph>
        <AppSecQAndASection rootClassName="app-sec-q-and-a-sectionroot-class-name"></AppSecQAndASection>
      </main>
      <Footer rootClassName="footerroot-class-name6"></Footer>
    </div>
  )
}

export default AppSecQA
