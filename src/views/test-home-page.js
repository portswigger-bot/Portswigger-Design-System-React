import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NotificationTopHeader from '../components/notification-top-header'
import LiveTagProduction from '../components/live-tag-production'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Banner from '../components/banner'
import CompanyLogos from '../components/company-logos'
import FeatureCardsSection from '../components/feature-cards-section'
import NewsCardsSection from '../components/news-cards-section'
import CommunityCardsSection from '../components/community-cards-section'
import StatsSection from '../components/stats-section'
import OurPeopleSection from '../components/our-people-section'
import SecurityCardsSection from '../components/security-cards-section'
import Footer from '../components/footer'
import './test-home-page.css'

const TestHomePage = (props) => {
  return (
    <div className="test-home-page-container">
      <Helmet>
        <title>
          Test-Home-Page - Web Application Security, Testing, & Scanning -
          PortSwigger
        </title>
        <meta
          name="description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta
          property="og:title"
          content="Test-Home-Page - Web Application Security, Testing, &amp; Scanning - PortSwigger"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <NotificationTopHeader
        text={
          <Fragment>
            <span className="test-home-page-text10">Read More</span>
          </Fragment>
        }
        rootClassName="notification-top-headerroot-class-name"
      ></NotificationTopHeader>
      <LiveTagProduction rootClassName="live-tag-productionroot-class-name59"></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name31"></Navigation>
      <main className="align-center column width-100 prevent-horizontal-overflow">
        <Hero
          ctaUrl="https://portswigger.net/burp"
          heading={
            <Fragment>
              <span className="test-home-page-text11">
                <span>
                  Trusted by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>security professionals</span>
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="test-home-page-text15">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="test-home-page-text16">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="test-home-page-text17">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Home/portswigger-homepage-hero-1200w-1400w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="test-home-page-text18">
                Best-in-class software and learning for security engineers and
                penetration testers.
              </span>
            </Fragment>
          }
          columnLayout="50-50"
          rootClassName="heroroot-class-name24"
          mainImageAlign="start"
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <Banner
          ctaUrl="https://portswigger.net/burp/ai"
          heading={
            <Fragment>
              <span className="test-home-page-text19">
                <span className="test-home-page-text20">
                  Hack smarter, not harder.
                </span>
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
          ctaLabel={
            <Fragment>
              <span className="test-home-page-text22">READ MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="test-home-page-text23">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/cbdcb606-fd6d-42c0-9085-ba692c8d99d7-600h-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="test-home-page-text24">
                <span>
                  AI-powered assistance for Burp Suite Professional - 
                  streamlining your workflow, cutting tedious tasks, and letting
                  you focus your expertise where it counts. 
                </span>
                <br></br>
                <br></br>
                <span className="test-home-page-text28">
                  Try it now with 10,000 free AI credits.
                </span>
              </span>
            </Fragment>
          }
          showTopLabel
          rootClassName="bannerroot-class-name10"
          imagePlacement="left"
          mainImageAlign="center"
          headingFontStyle="H2"
          subHeadingFontStyle="intro"
        ></Banner>
        <Banner
          ctaUrl="https://www.gartner.com/reviews/market/penetration-testing-tools/vendor/portswigger/product/burp-suite-professional"
          heading={
            <Fragment>
              <span className="test-home-page-text29">
                <span>
                  Trusted by the people who
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>use it every day</span>
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="test-home-page-text33">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="test-home-page-text34">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Home/cc_award_logo_general_2024-300w-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="test-home-page-text35">
                <span>
                  Burp Suite Professional has, once again, been recognized
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  as Gartner® Peer Insights™ Customers’ Choice for 2024.
                </span>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          rootClassName="bannerroot-class-name15"
          mainImageAlign="start"
          mainImageHeight="200px"
          headingFontStyle="H2"
          subHeadingFontStyle="body-1"
        ></Banner>
        <CompanyLogos rootClassName="company-logosroot-class-name10"></CompanyLogos>
        <FeatureCardsSection rootClassName="feature-cards-sectionroot-class-name"></FeatureCardsSection>
        <NewsCardsSection rootClassName="news-cards-sectionroot-class-name1"></NewsCardsSection>
        <CommunityCardsSection
          card1URL="https://discord.com/invite/portswigger"
          card2URL="https://portswigger.net/blog/burp-suite-tips-from-power-user-and-hackfluencer-stok"
          card3URL="https://portswigger.net/blog/get-started-with-devsecops-insights-from-aleksandr-krasnov-product-security-engineer"
          card4URL="https://portswigger.net/blog/i-thought-it-was-a-complete-fluke-katie-paxton-fear-on-her-bug-bounty-baptism-and-why-ai-will-never-fully-replace-security-researchers"
          card5URL="https://portswigger.net/blog/train-the-basics-bug-bounty-hunter-xel-on-forging-a-lucrative-career-in-ethical-hacking"
          card6URL="https://www.youtube.com/watch?v=vgYzICDaNhM"
          rootClassName="community-cards-sectionroot-class-name1"
        ></CommunityCardsSection>
        <StatsSection rootClassName="stats-sectionroot-class-name1"></StatsSection>
        <OurPeopleSection rootClassName="our-people-sectionroot-class-name1"></OurPeopleSection>
        <SecurityCardsSection rootClassName="security-cards-sectionroot-class-name1"></SecurityCardsSection>
      </main>
      <a
        href="https://portswigger.net#test"
        target="_blank"
        rel="noreferrer noopener"
        className="test-home-page-link1 button"
      >
        Button
      </a>
      <a
        href="https://example.com#blah"
        target="_blank"
        rel="noreferrer noopener"
      >
        Link
      </a>
      <Footer rootClassName="footerroot-class-name42"></Footer>
    </div>
  )
}

export default TestHomePage
