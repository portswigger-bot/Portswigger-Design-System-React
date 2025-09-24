import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import MinimalHeader from '../components/minimal-header'
import Hero from '../components/hero'
import SimpleCheckList from '../components/simple-check-list'
import Banner from '../components/banner'
import MediaSection from '../components/media-section'
import FeaturesList from '../components/features-list'
import HeadingAndParagraph from '../components/heading-and-paragraph'
import FeaturesWithFeatureCardList from '../components/features-with-feature-card-list'
import BannerWithCtaAndCheckList from '../components/banner-with-cta-and-check-list'
import Footer from '../components/footer'
import './performance-upgrades.css'

const PerformanceUpgrades = (props) => {
  return (
    <div className="performance-upgrades-container">
      <Helmet>
        <title>Burp Suite performance upgrades</title>
        <meta
          name="description"
          content="Hands-on security testers need the best tools for the job. Tools you have faith in, and enjoy using all day long. Burp Suite has long been that tool, and now, it's faster than ever."
        />
        <meta property="og:title" content="Burp Suite performance upgrades" />
        <meta
          property="og:description"
          content="Hands-on security testers need the best tools for the job. Tools you have faith in, and enjoy using all day long. Burp Suite has long been that tool, and now, it's faster than ever."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <MinimalHeader
        imageSrc="/Logos/Dark/dark-portswigger-200h.png"
        rootClassName="minimal-headerroot-class-name"
      ></MinimalHeader>
      <main className="align-center column width-100">
        <Hero
          ctaUrl="https://portswigger.net/burp/releases"
          heading={
            <Fragment>
              <span className="performance-upgrades-text10">
                Performance upgrades, making your workflow more efficient.
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="performance-upgrades-text11">
                UPDATE TO THE LATEST VERSION
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="performance-upgrades-text12">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="performance-upgrades-text13">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp Suite/Performance Upgrades/pro-performance-image-1200w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="performance-upgrades-text14">
                Hands-on security testers need the best tools for the job. Tools
                you have faith in, and enjoy using all day long. Burp Suite has
                long been that tool, and now, it&apos;s faster than ever.
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          showTopLabel
          rootClassName="heroroot-class-name2"
          mainImageAlign="start"
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <SimpleCheckList rootClassName="simple-check-listroot-class-name"></SimpleCheckList>
        <Banner
          heading={
            <Fragment>
              <span className="performance-upgrades-text15">
                Reduced Intruder memory usage
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="performance-upgrades-text16">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="performance-upgrades-text17">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp Suite/Performance Upgrades/memory-usage.svg"
          subHeading={
            <Fragment>
              <span className="performance-upgrades-text18">
                <span>
                  Memory usage in Intruder has been significantly reduced,
                  improving loading
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>times and minimizing the possibility of UI freezes.</span>
              </span>
            </Fragment>
          }
          columnLayout="70-30"
          rootClassName="bannerroot-class-name2"
          mainImageAlign="start"
          mainImageHeight="320px"
          headingFontStyle="H3"
          subHeadingFontStyle="body-1"
        ></Banner>
        <MediaSection
          ctaLabel={
            <Fragment>
              <span className="performance-upgrades-text22">BUTTON</span>
            </Fragment>
          }
          rootClassName="media-sectionroot-class-name"
        ></MediaSection>
        <FeaturesList
          ctaLabel={
            <Fragment>
              <span className="performance-upgrades-text23">FIND OUT MORE</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp Suite/Performance Upgrades/ui-lag.svg"
          columnLayout="50-50"
          rootClassName="features-listroot-class-name"
          imagePlacement="left"
        ></FeaturesList>
        <FeaturesList
          ctaLabel={
            <Fragment>
              <span className="performance-upgrades-text24">FIND OUT MORE</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp Suite/Performance Upgrades/table-sorting-times.svg"
          showCtaBtn={false}
          featureList={[
            {
              heading: 'Drastically reduced sorting time for tables',
              paragraph:
                'Tables which previously would take minutes to sort, are now sorted in a matter of seconds, increasing responsiveness and reducing UI freezes.',
            },
            {
              heading: 'Faster site map filtering',
              paragraph:
                'Similarly, site map filtering time has been significantly minimized. Large sitemaps, which potentially may have taken hours to filter, can now be filtered in a matter of minutes.',
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name1"
          imagePlacement="right"
        ></FeaturesList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="performance-upgrades-text25">
                Improve your workflow efficiency
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="performance-upgrades-text26">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="performance-upgrades-text27">
                <span>
                  The new and improved Proxy Intercept view allows you to have
                  better control when working with websites and functionality
                  that
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  trigger a large number of requests, helping you work more
                  efficiently and at pace.
                </span>
                <br></br>
                <br></br>
                <span>This new update now allows you to…</span>
              </span>
            </Fragment>
          }
          headingType="H3"
          rootClassName="heading-and-paragraphroot-class-name30"
        ></HeadingAndParagraph>
        <FeaturesWithFeatureCardList
          iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
          ctaLabel={
            <Fragment>
              <span className="performance-upgrades-text34">FIND OUT MORE</span>
            </Fragment>
          }
          heroImgUrl="https://www.youtube.com/watch?v=v5rWTgBrckc"
          imgCaption={
            <Fragment>
              <span className="performance-upgrades-text35">
                <span>
                  Take a look at the new Proxy Intercept View in
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://www.youtube.com/watch?v=v5rWTgBrckc"
                  className="performance-upgrades-link"
                >
                  this video
                </a>
                <span>.</span>
              </span>
            </Fragment>
          }
          columnLayout="70-30"
          rootClassName="features-with-feature-card-listroot-class-name"
          mainImageAlign="stretch"
          showImgCaption
          mainImageHeight="200px"
          withImageShadow
        ></FeaturesWithFeatureCardList>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/releases"
          heading={
            <Fragment>
              <span className="performance-upgrades-text38">
                Burp&apos;s future, driven by performance
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="performance-upgrades-text39">
                UPDATE TO THE LATEST VERSION
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="performance-upgrades-text40">
                <span>
                  Say goodbye to frustrating performance blockers - update to
                  the latest version of Burp Suite Professional and conduct
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  your manual testing with increased efficiency and confidence.
                </span>
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          headingType="H3"
          rootClassName="banner-with-cta-and-check-listroot-class-name"
          showCheckList={false}
          ctaIconPlacement="none"
        ></BannerWithCtaAndCheckList>
        <BannerWithCtaAndCheckList
          ctaUrl="https://discord.com/invite/portswigger"
          heading={
            <Fragment>
              <span className="performance-upgrades-text44">
                Join the official PortSwigger Discord
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="performance-upgrades-text45">
                JOIN THE DISCORD
              </span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="performance-upgrades-text46">
                <span>
                  Keep up to date with the latest Burp Suite performance
                  upgrades.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          headingType="H2"
          showTopLogo
          topLogoSize="200px"
          rootClassName="banner-with-cta-and-check-listroot-class-name1"
          showCheckList
          checkListItems={[
            {
              label: 'Exclusive events',
              iconType: 'check',
            },
            {
              label: 'Chat with Burp developers and researchers',
              iconType: 'check',
            },
            {
              label: 'Feature previews',
              iconType: 'check',
            },
            {
              label: 'And much more',
              iconType: 'check',
            },
          ]}
        ></BannerWithCtaAndCheckList>
      </main>
      <Footer rootClassName="footerroot-class-name2"></Footer>
    </div>
  )
}

export default PerformanceUpgrades
