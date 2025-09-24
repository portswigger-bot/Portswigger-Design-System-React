import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import MinimalHeader from '../components/minimal-header'
import ContentBannerWithSlotColumnLayout from '../components/content-banner-with-slot-column-layout'
import VideoEmbedsList from '../components/video-embeds-list'
import HeadingAndParagraph from '../components/heading-and-paragraph'
import Banner from '../components/banner'
import Footer from '../components/footer'
import './black-hat-research.css'

const BlackHatResearch = (props) => {
  return (
    <div className="black-hat-research-container">
      <Helmet>
        <title>PortSwigger Research at Black Hat USA and DEF CON</title>
        <meta
          name="description"
          content="Watch the PortSwigger Research presentations from Black Hat USA and DEF CON."
        />
        <meta
          property="og:title"
          content="PortSwigger Research at Black Hat USA and DEF CON"
        />
        <meta
          property="og:description"
          content="Watch the PortSwigger Research presentations from Black Hat USA and DEF CON."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <MinimalHeader rootClassName="minimal-headerroot-class-name4"></MinimalHeader>
      <main className="align-center column width-100">
        <ContentBannerWithSlotColumnLayout
          heading={
            <Fragment>
              <span className="black-hat-research-text10">
                PortSwigger Research at Black Hat USA and DEF CON
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="black-hat-research-text11">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="black-hat-research-text12">Burp AI</span>
            </Fragment>
          }
          alignment="center"
          subHeading={
            <Fragment>
              <span className="black-hat-research-text13">
                Watch the PortSwigger Research presentations from DEF CON.
              </span>
            </Fragment>
          }
          rootClassName="content-banner-with-slot-column-layoutroot-class-name"
        >
          <VideoEmbedsList
            video2Src="https://www.youtube.com/embed/JERBqoTllaE?si=DRxmqVy6e_ote3I6"
            video1Title={
              <Fragment>
                <span className="black-hat-research-text14">
                  <span>
                    Gotta Cache &apos;em All: Bending the Rules of Web Cache
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Exploitation</span>
                </span>
              </Fragment>
            }
            video2Title={
              <Fragment>
                <span className="black-hat-research-text18">
                  <span>
                    Splitting the Email Atom: Exploiting Parsers to Bypass
                    Access
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Controls</span>
                </span>
              </Fragment>
            }
            video3Title={
              <Fragment>
                <span className="black-hat-research-text22">Burp Intruder</span>
              </Fragment>
            }
          ></VideoEmbedsList>
        </ContentBannerWithSlotColumnLayout>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="black-hat-research-text23">
                Read the white papers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="black-hat-research-text24">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="black-hat-research-text25">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name67"
          showParagraph={false}
        ></HeadingAndParagraph>
        <Banner
          ctaUrl="https://portswigger.net/research/gotta-cache-em-all"
          heading={
            <Fragment>
              <span className="black-hat-research-text26">
                Gotta Cache &apos;em All: Bending the Rules of Web Cache
                Exploitation
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="black-hat-research-text27">READ MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="black-hat-research-text28">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Black Hat Research/c528-article-gotta-cache-em-all-image-article-1500w-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="black-hat-research-text29">
                This paper will explore how different HTTP servers and proxies
                behave when parsing specially crafted URLs and explore
                ambiguities in the RFC that lead to path confusion.
              </span>
            </Fragment>
          }
          ctaIconType="chevron-right"
          rootClassName="bannerroot-class-name7"
          ctaIconPlacement="right"
          headingFontStyle="H3"
          subHeadingFontStyle="body-1"
        ></Banner>
        <Banner
          ctaUrl="https://portswigger.net/research/splitting-the-email-atom"
          heading={
            <Fragment>
              <span className="black-hat-research-text30">
                Splitting the Email Atom: Exploiting Parsers to Bypass Access
                Controls
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="black-hat-research-text31">READ MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="black-hat-research-text32">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Black Hat Research/6b26-article-splitting-the-email-atom-article-1500w-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="black-hat-research-text33">
                In this paper, Gareth Heyes shows you how to turn email parsing
                discrepancies into access control bypasses and even RCE.
              </span>
            </Fragment>
          }
          ctaIconType="chevron-right"
          rootClassName="bannerroot-class-name9"
          imagePlacement="left"
          ctaIconPlacement="right"
          headingFontStyle="H3"
          subHeadingFontStyle="body-1"
        ></Banner>
        <Banner
          ctaUrl="https://portswigger.net/research/listen-to-the-whispers-web-timing-attacks-that-actually-work"
          heading={
            <Fragment>
              <span className="black-hat-research-text34">
                Listen to the Whispers: Web Timing Attacks that Actually Work
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="black-hat-research-text35">READ MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="black-hat-research-text36">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Black Hat Research/c60b-article-listen-to-the-whispers-article-800w-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="black-hat-research-text37">
                James Kettle unleashes novel attack concepts to coax out server
                secrets including masked misconfigurations, blind data-structure
                injection, hidden routes to forbidden areas, and a vast expanse
                of invisible attack surface.
              </span>
            </Fragment>
          }
          ctaIconType="chevron-right"
          rootClassName="bannerroot-class-name8"
          ctaIconPlacement="right"
          headingFontStyle="H3"
          subHeadingFontStyle="body-1"
        ></Banner>
      </main>
      <Footer rootClassName="footerroot-class-name12"></Footer>
    </div>
  )
}

export default BlackHatResearch
