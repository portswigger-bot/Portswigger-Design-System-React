import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../../components/live-tag-production'
import Navigation from '../../../../components/navigation'
import ExtraNavigationPro from '../../../../components/extra-navigation-pro'
import Hero from '../../../../components/hero'
import Testimonial from '../../../../components/testimonial'
import HeadingAndParagraph from '../../../../components/heading-and-paragraph'
import FeaturesList from '../../../../components/features-list'
import FlatCardList from '../../../../components/flat-card-list'
import Banner from '../../../../components/banner'
import BannerWithCtaAndCheckList from '../../../../components/banner-with-cta-and-check-list'
import Footer from '../../../../components/footer'
import './b-checks-extending-burp-scanner.css'

const BChecksExtendingBurpScanner = (props) => {
  return (
    <div className="b-checks-extending-burp-scanner-container">
      <Helmet>
        <title>BChecks - Extending Burp Scanner</title>
        <meta
          name="description"
          content="Write custom scan checks with minimal overhead using an easy to learn, purpose-built language."
        />
        <meta property="og:title" content="Burp Suite Professional" />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name13"></Navigation>
      <ExtraNavigationPro
        showDropdown
        dropdownLabel={
          <Fragment>
            <span className="b-checks-extending-burp-scanner-text10">
              Get certified
            </span>
          </Fragment>
        }
        dropdownLinks={[
          {
            url: 'https://portswigger.net/web-security/certification',
            label: 'Get certified',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/web-security/certification/how-to-prepare',
            label: 'How to prepair',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/web-security/certification/how-it-works',
            label: 'How it works',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/web-security/certification/practice-exam',
            label: 'Practice exam',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/web-security/certification/how-it-works#what-the-exam-involves',
            label: 'What the exam involves',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/web-security/certification/frequently-asked-questions',
            label: 'FAQs',
            target: '_self',
          },
        ]}
        rootClassName="extra-navigation-proroot-class-name"
        highlightedLink="none"
      ></ExtraNavigationPro>
      <main className="align-center column width-100">
        <Hero
          ctaUrl="https://github.com/PortSwigger/BChecks"
          heading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text11">
                BChecks
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text12">
                EXPLORE BCHECKS LIBRARY
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text13">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text14">
                BUY - $475
              </span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp Suite/Professional Edition/new-bchecks-pro-1000w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text15">
                Customize your scanning by incorporating community-created scan
                checks from the BChecks library, or write your own with an
                easy-to-learn, purpose-built language.
              </span>
            </Fragment>
          }
          showTopLabel
          rootClassName="heroroot-class-name13"
        ></Hero>
        <Testimonial
          author={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text16">
                Oli (C.. 1..P.H.Y), Researcher and Pentester
              </span>
            </Fragment>
          }
          logoSrc="/Logos/mega-nav-portswigger-logo-mobile.svg"
          bordered
          testimonial={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text17">
                &quot;The BChecks from Burp are truly remarkable. They have
                allowed me to automate a significant portion of my personal
                checks with ease and convenience. The integration with live
                tasks makes them super efficient. Exceptional job,
                PortSwigger!&quot;
              </span>
            </Fragment>
          }
          logoPlacement="right"
          rootClassName="testimonialroot-class-name2"
        ></Testimonial>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text18">
                What are BChecks?
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text19">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text20">
                BChecks offer a powerful and efficient way to customize scan
                checks for Burp Scanner. Either download from the BChecks
                library or create them using a simple and easy-to-learn,
                domain-specific language.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name136"
          withHorizontalPadding
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://github.com/PortSwigger/BChecks"
          ctaLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text21">
                EXPLORE BCHECKS LIBRARY
              </span>
            </Fragment>
          }
          mediaType="youtubeVideo"
          showCtaBtn
          featureList={[
            {
              heading: "Find vulnerabilities others can't",
              paragraph:
                'Use a BCheck to respond quickly to newly identified threats by creating and running a highly specific scan check to detect a particular CVE.',
            },
            {
              heading: 'The power of the community',
              paragraph:
                'Explore the growing library of community-created BChecks to see how others are enhancing their security testing workflows.',
            },
          ]}
          rootClassName="features-listroot-class-name5"
          imagePlacement="left"
        ></FeaturesList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text22">
                Where can I access BChecks?
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text23">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text24">
                BChecks are available in both Burp Suite Professional and Burp
                Suite Enterprise Edition. Write your own custom BChecks -
                tailored specifically to your own application - in Burp Suite
                Professional, or select a community-made BCheck from the BCheck
                library, and import them directly into Burp Suite Enterprise
                Edition.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name137"
        ></HeadingAndParagraph>
        <FlatCardList
          cardType="flat-white"
          cardLayout="square"
          contentAlignment="center"
        ></FlatCardList>
        <Banner
          ctaUrl="https://portswigger.net/burp/documentation/desktop/automated-scanning/bchecks"
          ctaType="quarternary"
          heading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text25">
                BChecks in Burp Suite Professional
              </span>
            </Fragment>
          }
          bannerId="professional-edition"
          ctaLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text26">
                Learn more about BChecks in Burp Suite Professional
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text27">
                Burp AI
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp Suite/Professional Edition/bchecks-burp-suite-professional-1-1200w.png"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text28">
                <span>
                  You can create, test, and apply BChecks in Burp Suite
                  Professional.
                </span>
                <br></br>
                <br></br>
                <span>
                  Extend the range of vulnerabilities that
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/vulnerability-scanner"
                  className="b-checks-extending-burp-scanner-link"
                >
                  Burp Scanner
                </a>
                <span>
                  {' '}
                  looks for without the hassle of building an extension using
                  the Java-based Montoya API.
                </span>
                <br></br>
                <br></br>
                <span>
                  Once loaded within the BChecks tab, you can run custom scan
                  checks that are highly tailored to your specific use case.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          ctaIconType="chevron-right"
          columnLayout="60-40"
          rootClassName="bannerroot-class-name13"
          imagePlacement="right"
          ctaIconPlacement="right"
          headingFontStyle="H2"
          subHeadingFontStyle="body-1"
        ></Banner>
        <Banner
          ctaUrl="https://portswigger.net/burp/documentation/enterprise/user-guide/extensions"
          ctaType="quarternary"
          heading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text37">
                BChecks in Burp Suite Enterprise Edition
              </span>
            </Fragment>
          }
          bannerId="enterprise-edition"
          ctaLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text38">
                Learn more about BChecks in Burp Suite Professional
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text39">
                Burp AI
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp Suite/Professional Edition/bchecks-burp-suite-enterprise-1200w-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text40">
                <span>
                  You can upload BChecks into the BChecks tab of the Extensions
                  section and enable them on a site/folder level to be applied
                  to any scans that target that site.
                </span>
                <br></br>
                <br></br>
                <span>
                  Any vulnerabilities identified from those BChecks will be
                  displayed in the Issues tab alongside any other issues enabled
                  by your scan configuration.
                </span>
              </span>
            </Fragment>
          }
          ctaIconType="chevron-right"
          columnLayout="60-40"
          rootClassName="bannerroot-class-name14"
          imagePlacement="left"
          ctaIconPlacement="right"
          headingFontStyle="H2"
          subHeadingFontStyle="body-1"
        ></Banner>
        <BannerWithCtaAndCheckList
          ctaUrl="https://github.com/PortSwigger/BChecks"
          heading={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text45">
                Expand your scanning capabilities
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text46">
                GO TO GITHUB REPOSITORY
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="b-checks-extending-burp-scanner-text47">
                Check out the extensive list of community-created BChecks.
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          ctaIconType="chevron-right"
          headingType="H2"
          rootClassName="banner-with-cta-and-check-listroot-class-name4"
          ctaIconPlacement="right"
        ></BannerWithCtaAndCheckList>
      </main>
      <Footer rootClassName="footerroot-class-name19"></Footer>
    </div>
  )
}

export default BChecksExtendingBurpScanner
