import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../components/live-tag-production'
import Navigation from '../../components/navigation'
import ExtraNavigationPro from '../../components/extra-navigation-pro'
import Hero from '../../components/hero'
import Banner from '../../components/banner'
import Quote from '../../components/quote'
import HeadingAndParagraph from '../../components/heading-and-paragraph'
import FeaturesUpdated from '../../components/features-updated'
import VideoEmbedsList from '../../components/video-embeds-list'
import Button from '../../components/button'
import BannerWithCtaAndCheckList from '../../components/banner-with-cta-and-check-list'
import CompanyLogos from '../../components/company-logos'
import FeaturesList from '../../components/features-list'
import Footer from '../../components/footer'
import './burp-suite-professional.css'

const BurpSuiteProfessional = (props) => {
  return (
    <div className="burp-suite-professional-container">
      <Helmet>
        <title>Burp Suite Professional - PortSwigger</title>
        <meta
          name="description"
          content="Burp Suite Professional is the world's most popular tool for web security testing. Get a free trial now and identify the very latest vulnerabilities."
        />
        <meta
          property="og:title"
          content="Burp Suite Professional - PortSwigger"
        />
        <meta
          property="og:description"
          content="Burp Suite Professional is the world's most popular tool for web security testing. Get a free trial now and identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name16"></Navigation>
      <ExtraNavigationPro
        showDropdown
        dropdownLabel={
          <Fragment>
            <span className="burp-suite-professional-text10">
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
        rootClassName="extra-navigation-proroot-class-name3"
        highlightedLink="First"
        navigationLinks={[
          {
            url: 'https://portswigger.net/burp/pro',
            label: 'Product Overview',
            target: '_blank',
          },
          {
            url: 'https://portswigger.net/burp/pro/features',
            label: 'Features',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/burp/pro/workflow',
            label: 'Workflow',
            target: '_blank',
          },
          {
            url: 'https://portswigger.net/burp/ai',
            label: 'Burp AI',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/customer-stories',
            label: 'Customer Stories',
            target: '_blank',
          },
          {
            url: 'https://portswigger.net/burp/pro/trial',
            label: 'Request a Trial',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/buy/pro',
            label: 'Buy',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/burp/releases/professional/latest',
            label: 'Download',
            target: '_self',
          },
        ]}
      ></ExtraNavigationPro>
      <main className="align-center column width-100">
        <Hero
          ctaUrl="https://portswigger.net/burp/pro/trial"
          heading={
            <Fragment>
              <span className="burp-suite-professional-text11">
                Test like a pro
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-text12">
                TRY FOR FREE
              </span>
            </Fragment>
          }
          showCta2
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-text13">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-suite-professional-text14">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp Suite/Professional Edition/pro-overview-hero-light-1200w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-suite-professional-text15">
                Hands-on security testers need the best tools for the job. Tools
                you have faith in, and enjoy using all day long. The tools that
                other professionals trust.
              </span>
            </Fragment>
          }
          columnLayout="40-60"
          headingStyle="H1"
          showTopLabel
          rootClassName="heroroot-class-name15"
          mainImageAlign="stretch"
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <Banner
          ctaUrl="https://portswigger.net/burp/ai"
          heading={
            <Fragment>
              <span className="burp-suite-professional-text16">
                <span className="burp-suite-professional-text17">
                  Hack smarter, not
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="burp-suite-professional-text18"></br>
                <span className="burp-suite-professional-text19">harder.</span>
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
              <span className="burp-suite-professional-text21">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-text22">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/cbdcb606-fd6d-42c0-9085-ba692c8d99d7-600h-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="burp-suite-professional-text23">
                <span>
                  AI-powered assistance for Burp Suite Professional - 
                  streamlining your workflow, cutting tedious tasks, and letting
                  you focus your expertise where it counts. 
                </span>
                <br></br>
                <br></br>
                <span className="burp-suite-professional-text27">
                  Try it now with 10,000 free AI credits.
                </span>
              </span>
            </Fragment>
          }
          showTopLabel
          rootClassName="bannerroot-class-name11"
          imagePlacement="left"
          mainImageAlign="center"
          headingFontStyle="H2"
          subHeadingFontStyle="intro"
        ></Banner>
        <Quote
          quote={
            <Fragment>
              <span className="burp-suite-professional-text28">
                &quot;At Microsoft, Burp Suite is what you use. It’s not up for
                consideration.&quot;
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-text29">
                Read Microsoft&apos;s success
              </span>
            </Fragment>
          }
          fontType="H4"
          extraInfo={
            <Fragment>
              <span className="burp-suite-professional-text30">
                Taylor O&apos;Dell, Security Engineer, Microsoft
              </span>
            </Fragment>
          }
          topLogoSrc="/Pages/Customer Stories/microsoft1.svg"
          showTopLogo
          rootClassName="quoteroot-class-name42"
          showExtraInfo
        ></Quote>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-text31">
                Test like a pro - with the industry&apos;s most powerful toolkit
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-text32">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-text33">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name152"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesUpdated
          cTA
          buttonSize="large"
          mainImgSrc="/Pages/Burp Suite/Professional Edition/burp-request-pro-1200w-1200w.webp"
          columnLayout="60-40"
          componentUrl="https://portswigger.net/burp/pro/features"
          feature1Text={
            <Fragment>
              <span className="burp-suite-professional-text34">
                <span>
                  Be at the forefront of web security testing with the only
                  toolkit powered by cutting-edge
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/research"
                  className="burp-suite-professional-link1"
                >
                  PortSwigger Research
                </a>
                <span>.</span>
              </span>
            </Fragment>
          }
          feature2Text={
            <Fragment>
              <span className="burp-suite-professional-text37">
                Burp Suite Professional has all the tools required for modern
                pentesting. Utilize advanced features to eliminate noise.
              </span>
            </Fragment>
          }
          feature3Text={
            <Fragment>
              <span className="burp-suite-professional-text38">
                Simplify your documentation and remediation process, and produce
                reports that end users will appreciate.
              </span>
            </Fragment>
          }
          feature4Text={
            <Fragment>
              <span className="burp-suite-professional-text39">
                Be at the forefront of web security testing with the only
                toolkit powered by cutting-edge PortSwigger Research.
              </span>
            </Fragment>
          }
          rootClassName="features-updatedroot-class-name"
          buttonBtnLabel={
            <Fragment>
              <span className="burp-suite-professional-text40">
                View all features
              </span>
            </Fragment>
          }
          buttonIconType="arrow-right"
          imagePlacement="left"
          feature1Heading={
            <Fragment>
              <span className="burp-suite-professional-text41">
                Find vulnerabilities others can&apos;t
              </span>
            </Fragment>
          }
          feature2Heading={
            <Fragment>
              <span className="burp-suite-professional-text42">
                Be more productive
              </span>
            </Fragment>
          }
          feature3Heading={
            <Fragment>
              <span className="burp-suite-professional-text43">
                Share your findings more easily
              </span>
            </Fragment>
          }
          feature4Heading={
            <Fragment>
              <span className="burp-suite-professional-text44">
                Find vulnerabilities others can&apos;t
              </span>
            </Fragment>
          }
          buttonIconPlacement="right"
        ></FeaturesUpdated>
        <Banner
          ctaUrl="https://www.gartner.com/reviews/market/penetration-testing-tools/vendor/portswigger/product/burp-suite-professional"
          heading={
            <Fragment>
              <span className="burp-suite-professional-text45">
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
              <span className="burp-suite-professional-text49">READ MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-text50">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Home/cc_award_logo_general_2024-300w-1200w.webp"
          showCtaBtn
          subHeading={
            <Fragment>
              <span className="burp-suite-professional-text51">
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
          rootClassName="bannerroot-class-name12"
          mainImageAlign="start"
          mainImageHeight="200px"
          headingFontStyle="H2"
          subHeadingFontStyle="body-1"
        ></Banner>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-text55">
                The gold standard toolkit for penetration testers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-text56">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-text57">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name149"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesUpdated
          buttonSize="large"
          mainImgSrc="/Pages/Burp Suite/Professional Edition/burp-suite-pro-workflow-1200w-1200w.webp"
          columnLayout="60-40"
          componentUrl="https://portswigger.net/burp/pro/workflow"
          feature1Text={
            <Fragment>
              <span className="burp-suite-professional-text58">
                Use Burp Suite Professional to gather intelligence,
                comprehensively map your target application, and identify
                initial weaknesses.
              </span>
            </Fragment>
          }
          feature2Text={
            <Fragment>
              <span className="burp-suite-professional-text59">
                <span>
                  Balance powerful automation with granular control in Burp.
                  Decide what you want to test manually, and what can be
                  delegated to the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/vulnerability-scanner"
                  className="burp-suite-professional-link2"
                >
                  scanner
                </a>
                <span>.</span>
              </span>
            </Fragment>
          }
          feature3Text={
            <Fragment>
              <span className="burp-suite-professional-text62">
                Work with the knowledge that your actions are logged, allowing
                you to easily summarise your findings into succinct, but
                valuable reports.
              </span>
            </Fragment>
          }
          feature4Text={
            <Fragment>
              <span className="burp-suite-professional-text63">
                Be at the forefront of web security testing with the only
                toolkit powered by cutting-edge PortSwigger Research.
              </span>
            </Fragment>
          }
          rootClassName="features-updatedroot-class-name1"
          buttonBtnLabel={
            <Fragment>
              <span className="burp-suite-professional-text64">
                Empower your pentesting workflow
              </span>
            </Fragment>
          }
          buttonIconType="arrow-right"
          feature1Heading={
            <Fragment>
              <span className="burp-suite-professional-text65">
                Discovery: Map the complex attack surfaces of modern web apps
              </span>
            </Fragment>
          }
          feature2Heading={
            <Fragment>
              <span className="burp-suite-professional-text66">
                Attack: Leverage best-in-class manual and automated tools to
                identity vulnerabilities
              </span>
            </Fragment>
          }
          feature3Heading={
            <Fragment>
              <span className="burp-suite-professional-text67">
                Reporting: Automatic logging provides centralized data source
              </span>
            </Fragment>
          }
          feature4Heading={
            <Fragment>
              <span className="burp-suite-professional-text68">
                Find vulnerabilities others can&apos;t
              </span>
            </Fragment>
          }
          buttonIconPlacement="right"
        ></FeaturesUpdated>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-text69">
                See Burp in action
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-text70">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-text71">
                See the industry-leading pentester tool in action. See some of
                Burp Suite Professional&apos;s top tools:
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name150"
          showParagraph
        ></HeadingAndParagraph>
        <VideoEmbedsList
          iframeSrc="https://www.youtube.com/embed/IpTVU0DyHHM?si=xDyuYtJt1nbLKUqK"
          titleFont="H4"
          video1Src="https://www.youtube.com/embed/v5rWTgBrckc?si=g0VS7r30Pu6gKaoz?second=10"
          video2Src="https://www.youtube.com/embed/tXD4axdYddY?si=VkVZ_D5OPlyjbfAC"
          nrOfVideos={3}
          video1Title={
            <Fragment>
              <span className="burp-suite-professional-text72">
                Proxy Intercept View
              </span>
            </Fragment>
          }
          video2Title={
            <Fragment>
              <span className="burp-suite-professional-text73">
                Authenticated API Scanning
              </span>
            </Fragment>
          }
          video3Title={
            <Fragment>
              <span className="burp-suite-professional-text74">
                Burp Intruder
              </span>
            </Fragment>
          }
          rootClassName="video-embeds-listroot-class-name"
        ></VideoEmbedsList>
        <a href="https://portswigger.net/buy/pro">
          <Button
            btnLabel={
              <Fragment>
                <span className="burp-suite-professional-text75">
                  BUY NOW - $475
                </span>
              </Fragment>
            }
            iconPlacement="none"
            rootClassName="buttonroot-class-name41"
            className="burp-suite-professional-component23"
          ></Button>
        </a>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-text76">
                Unleash the power of Burp Suite with unrivalled extensibility
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-text77">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-text78">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name151"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesUpdated
          showStats
          buttonSize="large"
          mainImgSrc="/Pages/Burp Suite/Professional Edition/bapp-store-pro-page-1200w-1200w.webp"
          columnLayout="60-40"
          componentUrl="https://portswigger.net/burp/pro/features"
          feature1Text={
            <Fragment>
              <span className="burp-suite-professional-text79">
                <span>
                  Leverage Burp Suite&apos;s thriving
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/bappstore"
                  className="burp-suite-professional-link4"
                >
                  BApp store
                </a>
                <span>
                  , with user-created extensions, adding custom functionality to
                  the most complete tool on the market.
                </span>
              </span>
            </Fragment>
          }
          feature2Text={
            <Fragment>
              <span className="burp-suite-professional-text82">
                Build your own extensions and integrate with existing tooling so
                you have what you need, when you need it.
              </span>
            </Fragment>
          }
          feature3Text={
            <Fragment>
              <span className="burp-suite-professional-text83">
                <span>
                  Burp Suite Professional is made to be customized. Utilize
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/pro/features/bambdas"
                  className="burp-suite-professional-link5"
                >
                  Bambdas
                </a>
                <span>
                  {' '}
                  and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/pro/features/bchecks"
                  className="burp-suite-professional-link6"
                >
                  BChecks
                </a>
                <span> to work the way you want.</span>
              </span>
            </Fragment>
          }
          feature4Text={
            <Fragment>
              <span className="burp-suite-professional-text87">
                Be at the forefront of web security testing with the only
                toolkit powered by cutting-edge PortSwigger Research.
              </span>
            </Fragment>
          }
          rootClassName="features-updatedroot-class-name2"
          buttonBtnLabel={
            <Fragment>
              <span className="burp-suite-professional-text88">
                View all features
              </span>
            </Fragment>
          }
          buttonIconType="arrow-right"
          imagePlacement="left"
          feature1Heading={
            <Fragment>
              <span className="burp-suite-professional-text89">
                Benefit from 10+ years&apos; worth of extensibility
              </span>
            </Fragment>
          }
          feature2Heading={
            <Fragment>
              <span className="burp-suite-professional-text90">
                Create your own functionality
              </span>
            </Fragment>
          }
          feature3Heading={
            <Fragment>
              <span className="burp-suite-professional-text91">
                Customize the way you work
              </span>
            </Fragment>
          }
          feature4Heading={
            <Fragment>
              <span className="burp-suite-professional-text92">
                Find vulnerabilities others can&apos;t
              </span>
            </Fragment>
          }
          buttonIconPlacement="right"
        ></FeaturesUpdated>
        <Quote
          quote={
            <Fragment>
              <span className="burp-suite-professional-text93">
                &quot;I&apos;ve never run into a web app pentester who
                didn&apos;t know Burp.&quot;
              </span>
            </Fragment>
          }
          showCta={false}
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-text94">Read more</span>
            </Fragment>
          }
          fontType="H4"
          extraInfo={
            <Fragment>
              <span className="burp-suite-professional-text95">
                Chris Griffin, RevealRisk
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/rr_horizontal_color_rgb-01-200h-200h.webp"
          showTopLogo
          rootClassName="quoteroot-class-name43"
          showExtraInfo
        ></Quote>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/releases#professional"
          heading={
            <Fragment>
              <span className="burp-suite-professional-text96">
                Try Burp Suite Professional for free
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-text97">
                UPDATE TO LATEST VERSION
              </span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-text98">
                The most complete and widely used pentesting toolkit available.
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          ctaIconType="chevron-right"
          headingType="H2"
          rootClassName="banner-with-cta-and-check-listroot-class-name12"
          ctaIconPlacement="right"
        ></BannerWithCtaAndCheckList>
        <CompanyLogos rootClassName="company-logosroot-class-name4"></CompanyLogos>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-text99">
                Join the official PortSwigger Community
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-text100">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-text101">
                <span>
                  Burp AI introduces a new generation of intelligent features in
                  Burp Suite Professional,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  designed to make you faster, more efficient, and more accurate
                  without disrupting the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>workflows you already know.</span>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name153"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-text107">
                JOIN THE DISCORD
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/discord-social-proof-pro-page-1200w-1200w.webp"
          showCtaBtn
          ctaIconType="discord"
          featureList={[
            {
              heading: 'Chat with Burp developers and researchers',
              paragraph:
                'Connect with the people behind Burp Suite, ask questions, share insights and get advice from experts.',
            },
            {
              heading: 'Exclusive events',
              paragraph:
                'Gain access to members-only events, including live demos, deep dives and Q&A sessions with our developers and security researchers.',
            },
            {
              heading: 'Feature previews and much more',
              paragraph:
                "Be the first to see what's coming next - get sneak peeks of upcoming features, new tools and other exciting updates exclusive to the PortSwigger Discord.",
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name16"
          imagePlacement="right"
          ctaIconPlacement="left"
        ></FeaturesList>
      </main>
      <Footer rootClassName="footerroot-class-name22"></Footer>
    </div>
  )
}

export default BurpSuiteProfessional
