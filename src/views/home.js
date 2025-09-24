import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

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
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          Web Application Security, Testing, & Scanning - PortSwigger
        </title>
        <meta
          name="description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta
          property="og:title"
          content="Web Application Security, Testing, &amp; Scanning - PortSwigger"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction rootClassName="live-tag-productionroot-class-name55"></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name"></Navigation>
      <main className="align-center column width-100 prevent-horizontal-overflow">
        <Hero
          ctaUrl="https://portswigger.net/burp"
          heading={
            <Fragment>
              <span className="home-text10">
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
              <span className="home-text14">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="home-text15">Burp Suite Professional</span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="home-text16">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Home/portswigger-homepage-hero-1200w-1400w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="home-text17">
                Best-in-class software and learning for security engineers and
                penetration testers.
              </span>
            </Fragment>
          }
          columnLayout="50-50"
          rootClassName="heroroot-class-name1"
          mainImageAlign="start"
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <Banner
          ctaUrl="https://portswigger.net/burp/ai"
          heading={
            <Fragment>
              <span className="home-text18">
                <span className="home-text19">Hack smarter, not harder.</span>
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
              <span className="home-text21">READ MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="home-text22">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/cbdcb606-fd6d-42c0-9085-ba692c8d99d7-600h-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="home-text23">
                <span>
                  AI-powered assistance for Burp Suite Professional - 
                  streamlining your workflow, cutting tedious tasks, and letting
                  you focus your expertise where it counts. 
                </span>
                <br></br>
                <br></br>
                <span className="home-text27">
                  Try it now with 10,000 free AI credits.
                </span>
              </span>
            </Fragment>
          }
          showTopLabel
          rootClassName="bannerroot-class-name"
          imagePlacement="left"
          mainImageAlign="center"
          headingFontStyle="H2"
          subHeadingFontStyle="intro"
        ></Banner>
        <Banner
          ctaUrl="https://www.gartner.com/reviews/market/penetration-testing-tools/vendor/portswigger/product/burp-suite-professional"
          heading={
            <Fragment>
              <span className="home-text28">
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
              <span className="home-text32">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="home-text33">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Home/cc_award_logo_general_2024-300w-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="home-text34">
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
          rootClassName="bannerroot-class-name1"
          mainImageAlign="start"
          mainImageHeight="200px"
          headingFontStyle="H2"
          subHeadingFontStyle="body-1"
        ></Banner>
        <CompanyLogos rootClassName="company-logosroot-class-name"></CompanyLogos>
        <FeatureCardsSection rootClassName="feature-cards-sectionroot-class-name1"></FeatureCardsSection>
        <NewsCardsSection rootClassName="news-cards-sectionroot-class-name"></NewsCardsSection>
        <CommunityCardsSection
          card1URL="https://discord.com/invite/portswigger"
          card2URL="https://portswigger.net/blog/burp-suite-tips-from-power-user-and-hackfluencer-stok"
          card3URL="https://portswigger.net/blog/get-started-with-devsecops-insights-from-aleksandr-krasnov-product-security-engineer"
          card4URL="https://portswigger.net/blog/i-thought-it-was-a-complete-fluke-katie-paxton-fear-on-her-bug-bounty-baptism-and-why-ai-will-never-fully-replace-security-researchers"
          card5URL="https://portswigger.net/blog/train-the-basics-bug-bounty-hunter-xel-on-forging-a-lucrative-career-in-ethical-hacking"
          card6URL="https://www.youtube.com/watch?v=vgYzICDaNhM"
          rootClassName="community-cards-sectionroot-class-name"
        ></CommunityCardsSection>
        <StatsSection rootClassName="stats-sectionroot-class-name"></StatsSection>
        <OurPeopleSection rootClassName="our-people-sectionroot-class-name"></OurPeopleSection>
        <SecurityCardsSection rootClassName="security-cards-sectionroot-class-name"></SecurityCardsSection>
      </main>
      <Footer rootClassName="footerroot-class-name"></Footer>
    </div>
  )
}

export default Home
