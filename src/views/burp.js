import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import Navigation from '../components/navigation'
import ProductCard from '../components/product-card'
import HeadingAndParagraph from '../components/heading-and-paragraph'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'
import './burp.css'

const Burp = (props) => {
  return (
    <div className="burp-container1">
      <Helmet>
        <title>
          Burp - Web Application Security, Testing, & Scanning - PortSwigger
        </title>
        <meta
          name="description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta
          property="og:title"
          content="Burp - Web Application Security, Testing, &amp; Scanning - PortSwigger"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name27"></Navigation>
      <main className="burp-main align-center column width-100">
        <div className="burp-container2">
          <h1 className="burp-text10 heading-1 text-left text-center">
            What do you want to do?
          </h1>
          <div className="burp-container3 width-max-content">
            <ProductCard
              url="https://portswigger.net/burp/pro"
              imageSrc="/Illustrations/bsp-burp-illy-1500w.png"
              tagLabel={
                <Fragment>
                  <span className="burp-text11">CUSTOMER STORY</span>
                </Fragment>
              }
              description={
                <Fragment>
                  <span className="burp-description1 text-body-1">
                    Test, find, and exploit vulnerabilities faster with a
                    complete suite of security testing tools.
                  </span>
                </Fragment>
              }
              description2={
                <Fragment>
                  <span className="burp-description2 text-body-1">
                    <span>
                      Best for pentesters and hands-on security professionals.
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
              rootClassName="product-cardroot-class-name3"
              headingAndParagraphHeading={
                <Fragment>
                  <span className="burp-text15">
                    <br></br>
                    <span>Hands-on web security testing</span>
                  </span>
                </Fragment>
              }
            ></ProductCard>
            <ProductCard
              url="https://portswigger.net/burp/dast"
              imageSrc="/Illustrations/bsee-attack-burp-illy-1500w.png"
              tagLabel={
                <Fragment>
                  <span className="burp-text18">CUSTOMER STORY</span>
                </Fragment>
              }
              description={
                <Fragment>
                  <span className="burp-description3 text-body-1">
                    Automated DAST scanning without limits. Free up testing time
                    with trusted Burp technology.
                  </span>
                </Fragment>
              }
              description2={
                <Fragment>
                  <span className="burp-description4 text-body-1">
                    Best for AppSec and vulnerability management teams.
                  </span>
                </Fragment>
              }
              rootClassName="product-cardroot-class-name5"
              headingAndParagraphHeading={
                <Fragment>
                  <span className="burp-text19">
                    Free up testing time with scalable, automated scanning
                  </span>
                </Fragment>
              }
            ></ProductCard>
            <ProductCard
              url="https://portswigger.net/burp/dast"
              imageSrc="/Illustrations/bsee-ci-burp-illy-1500w.png"
              tagLabel={
                <Fragment>
                  <span className="burp-text20">CUSTOMER STORY</span>
                </Fragment>
              }
              description={
                <Fragment>
                  <span className="burp-description5 text-body-1">
                    CI-driven DAST scanning without limits. Enable devs to find
                    issues earlier, and remediate before release.
                  </span>
                </Fragment>
              }
              description2={
                <Fragment>
                  <span className="burp-description6 text-body-1">
                    <span>Best for DevOps and</span>
                    <br></br>
                    <span>engineering teams.</span>
                  </span>
                </Fragment>
              }
              rootClassName="product-cardroot-class-name4"
              headingAndParagraphHeading={
                <Fragment>
                  <span className="burp-text24">
                    Prevent vulnerable apps from hitting production
                  </span>
                </Fragment>
              }
            ></ProductCard>
          </div>
        </div>
        <div className="burp-container4 align-center padding-m position-relative column width-100">
          <div className="burp-max-width gap-l align-center width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="burp-text25">
                    Still learning about web security?
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="burp-text26">Securing the web</span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="burp-text27">
                    Software and expertise for everyone who needs to secure the
                    web
                  </span>
                </Fragment>
              }
              headingType="H4"
              rootClassName="heading-and-paragraphroot-class-name183"
              showParagraph={false}
            ></HeadingAndParagraph>
            <div className="gap-l grid-columns-2 grid width-100 burp-container5">
              <a
                href="https://portswigger.net/burp/communitydownload"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FeatureCard
                  url="https://portswigger.net/burp/communitydownload"
                  logoSrc="/Logos/Light/burp-suite-community-200h.png"
                  description={
                    <Fragment>
                      <span className="burp-text28">
                        The most widely used web application security testing
                        software.
                      </span>
                    </Fragment>
                  }
                  rootClassName="feature-cardroot-class-name"
                  className="burp-component7"
                ></FeatureCard>
              </a>
              <a href="https://portswigger.net/web-security">
                <FeatureCard
                  url="https://portswigger.net/web-security"
                  logoSrc="/Logos/Light/web-security-academy-200h.png"
                  description={
                    <Fragment>
                      <span className="burp-text29">
                        <span>
                          Boost your cybersecurity skills - with free, online
                          web security training.
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  leftImageSrc="/Pages/Home/web-security-academy-home-1-300w-400h.webp"
                  rootClassName="feature-cardroot-class-name1"
                  className="burp-component8"
                ></FeatureCard>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footerroot-class-name34"></Footer>
    </div>
  )
}

export default Burp
