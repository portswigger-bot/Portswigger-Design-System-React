import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import ExtraNavigationPro from '../../../components/extra-navigation-pro'
import Hero from '../../../components/hero'
import Testimonial from '../../../components/testimonial'
import HeadingAndParagraph from '../../../components/heading-and-paragraph'
import ImageBannerWithSlotRowLayout from '../../../components/image-banner-with-slot-row-layout'
import FeatureIconCard from '../../../components/feature-icon-card'
import MediaSection from '../../../components/media-section'
import Button from '../../../components/button'
import BannerWithCtaAndCheckList from '../../../components/banner-with-cta-and-check-list'
import Footer from '../../../components/footer'
import './burp-suite-professional-features.css'

const BurpSuiteProfessionalFeatures = (props) => {
  return (
    <div className="burp-suite-professional-features-container1">
      <Helmet>
        <title>Features - Burp Suite Professional</title>
        <meta
          name="description"
          content="Productivity tools · Deep-dive message analysis · Utilize both built-in and custom configurations · Project files · Burp Logger · Speed up data transformation."
        />
        <meta
          property="og:title"
          content="Features - Burp Suite Professional"
        />
        <meta
          property="og:description"
          content="Productivity tools · Deep-dive message analysis · Utilize both built-in and custom configurations · Project files · Burp Logger · Speed up data transformation."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name26"></Navigation>
      <ExtraNavigationPro
        showDropdown
        dropdownLabel={
          <Fragment>
            <span className="burp-suite-professional-features-text100">
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
        rootClassName="extra-navigation-proroot-class-name6"
        highlightedLink="Third"
        navigationLinks={[
          {
            url: 'https://portswigger.net/burp/pro/',
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
            url: 'https://portswigger.net/burp/vulnerability-scanner',
            label: 'Burp Scanner',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/burp/pro/trial',
            label: 'Request a Trial',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/buy/pro',
            label: 'Buy',
            target: '_blank',
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
              <span className="burp-suite-professional-features-text101">
                Features
              </span>
            </Fragment>
          }
          showCta
          cta2Type="outline-white"
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text102">
                TRY FOR FREE
              </span>
            </Fragment>
          }
          showCta2={false}
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text103">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-suite-professional-features-text104">
                PRICING
              </span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp Suite/Professional Edition/pro-overview-hero-light-1200w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-suite-professional-features-text105">
                A comprehensive suite of tools to efficiently discover and
                exploit vulnerabilities in web apps and APIs.
              </span>
            </Fragment>
          }
          columnLayout="50-50"
          headingStyle="H1"
          showTopLabel
          rootClassName="heroroot-class-name22"
          showChecklist={false}
          mainImageAlign="start"
          mainImageHeight="100%"
          subHeadingFontStyle="body-1"
        ></Hero>
        <Testimonial
          author={
            <Fragment>
              <span className="burp-suite-professional-features-text106">
                Daniel Oakley, Cyber Security Professional.
              </span>
            </Fragment>
          }
          logoSrc="/Icons/burp-suite-professional-logo-1200w-200h.webp"
          bordered
          testimonial={
            <Fragment>
              <span className="burp-suite-professional-features-text107">
                &quot;I just renewed my annual subscription. Burp Suite is one
                of the best and affordable Cyber Security products! My thanks go
                out to the team for providing such an indispensable tool. AppSec
                would be lost without you.&quot;
              </span>
            </Fragment>
          }
          logoPlacement="right"
          rootClassName="testimonialroot-class-name3"
        ></Testimonial>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text108">
                Manual penetration testing features
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text109">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text110">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name171"
          showParagraph={false}
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Professional Edition/manual-pentration-testing-tools-1400w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name10"
          imagePlacement="left"
          mainImageAlign="stretch"
          sectionSpacing="M"
        >
          <div className="burp-suite-professional-features-container2 grid-columns-2 grid">
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text111">
                    Log, intercept, and manipulate HTTPS and WebSocket traffic
                    right out of the box with Burp&apos;s built-in browser and
                    proxy.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
              rootClassName="feature-icon-cardroot-class-name103"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text112">
                    <span>
                      Easily detect otherwise invisible vulnerabilities with
                      out-of-the-box tools for
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/application-security-testing/oast"
                      className="burp-suite-professional-features-link10"
                    >
                      out-of-band testing (OAST)
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
              rootClassName="feature-icon-cardroot-class-name104"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text115">
                    Automatically map the attack surface with the
                    industry&apos;s leading crawler.
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
              rootClassName="feature-icon-cardroot-class-name105"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text116">
                    Simplify testing for DOM-based vulnerabilities with DOM
                    Invader.
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
              rootClassName="feature-icon-cardroot-class-name106"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text117">
                    Expose hidden attack surface with auto-enumeration of static
                    and dynamic URLs and parameters.
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
              rootClassName="feature-icon-cardroot-class-name107"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text118">
                    <span>
                      Assess token strength to test the quality of randomness in
                      data items.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
              rootClassName="feature-icon-cardroot-class-name108"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text121">
                    Manage recon data in a target site map.
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
              rootClassName="feature-icon-cardroot-class-name109"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text122">
                    Work with binary HTTP/2 requests in a familiar, HTTP/1-like
                    format, and seamlessly alternate between protocols with
                    Burp&apos;s unrivalled HTTP/2 support.
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
              rootClassName="feature-icon-cardroot-class-name110"
            ></FeatureIconCard>
          </div>
        </ImageBannerWithSlotRowLayout>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text123">
                Burp&apos;s Proxy Intercept view
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text124">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text125">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name175"
          showParagraph={false}
        ></HeadingAndParagraph>
        <MediaSection
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text126">
                TRY FOR FREE
              </span>
            </Fragment>
          }
          iframeSrc="https://www.youtube.com/embed/v5rWTgBrckc?si=g0VS7r30Pu6gKaoz?second=10"
          mediaType="YoutubeVideo"
          ctaIconType="chevron-right"
          rootClassName="media-sectionroot-class-name2"
          ctaIconPlacement="right"
        ></MediaSection>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text127">
                Advanced / custom automated attacks
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text128">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text129">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name176"
          showParagraph={false}
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Professional Edition/burp-request-pro-1400w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name11"
          imagePlacement="right"
          mainImageAlign="stretch"
          sectionSpacing="M"
        >
          <div className="burp-suite-professional-features-container3 grid-columns-2 grid">
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text130">
                    Conduct faster brute-forcing and fuzzing with custom
                    sequences of HTTP requests and payload sets.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/automated-attacks.svg"
              rootClassName="feature-icon-cardroot-class-name111"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text131">
                    Passively scan as you browse, or perform active scans on
                    individual URLs and specific inputs.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/automated-attacks.svg"
              rootClassName="feature-icon-cardroot-class-name112"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text132">
                    Capture, filter, and query automated attack results.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/automated-attacks.svg"
              rootClassName="feature-icon-cardroot-class-name113"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text133">
                    Automatically modify HTTP messages with match and replace
                    rules for both responses and requests.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/automated-attacks.svg"
              rootClassName="feature-icon-cardroot-class-name114"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text134">
                    Easily generate CSRF proof-of-concept attacks.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/automated-attacks.svg"
              rootClassName="feature-icon-cardroot-class-name115"
            ></FeatureIconCard>
          </div>
        </ImageBannerWithSlotRowLayout>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text135">
                Automated scanning for vulnerabilities
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text136">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text137">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name177"
          showParagraph={false}
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Professional Edition/vulnerabilities-screenshot-pro-1400w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name12"
          imagePlacement="left"
          mainImageAlign="stretch"
          sectionSpacing="M"
        >
          <div className="burp-suite-professional-features-container4 grid-columns-2 grid">
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text138">
                    <span>
                      Scan your applications using a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/vulnerability-scanner/javascript-vulnerability-scanner"
                      className="burp-suite-professional-features-link11"
                    >
                      built-in browser
                    </a>
                    <span>
                      , which navigates complex JavaScript-heavy apps and SPAs,
                      just like a user.
                    </span>
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
              rootClassName="feature-icon-cardroot-class-name116"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text141">
                    Scan privileged areas of target applications with
                    authenticated scanning.
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
              rootClassName="feature-icon-cardroot-class-name117"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text142">
                    <span>
                      Scan OpenAPI, GraphQL, and SOAP
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/vulnerability-scanner/api-security-testing"
                      className="burp-suite-professional-features-link12"
                    >
                      APIs
                    </a>
                    <span>
                      {' '}
                      based on a definition file, either discovered during a
                      crawl or uploaded manually.
                    </span>
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
              rootClassName="feature-icon-cardroot-class-name118"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text145">
                    Conquer client-side attack surfaces with the built-in
                    JavaScript analysis engine.
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
              rootClassName="feature-icon-cardroot-class-name119"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text146">
                    <span>
                      Fuel vulnerability coverage with logic from
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/research"
                      className="burp-suite-professional-features-link13"
                    >
                      PortSwigger Research
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
              rootClassName="feature-icon-cardroot-class-name120"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text149">
                    Configure scan behavior to customize what you audit, and
                    how.
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
              rootClassName="feature-icon-cardroot-class-name122"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text150">
                    <span>Quickly create custom scan checks (</span>
                    <a
                      href="https://portswigger.net/burp/pro/features/bchecks"
                      className="burp-suite-professional-features-link14"
                    >
                      BChecks
                    </a>
                    <span>) using a simple, purpose-built language.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
              rootClassName="feature-icon-cardroot-class-name121"
            ></FeatureIconCard>
          </div>
        </ImageBannerWithSlotRowLayout>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text153">
                Utilize authentication in API scanning
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text154">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text155">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name178"
          showParagraph={false}
        ></HeadingAndParagraph>
        <MediaSection
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text156">
                TRY FOR FREE
              </span>
            </Fragment>
          }
          iframeSrc="https://www.youtube.com/embed/tXD4axdYddY?si=VkVZ_D5OPlyjbfAC"
          mediaType="YoutubeVideo"
          ctaIconType="chevron-right"
          rootClassName="media-sectionroot-class-name3"
          ctaIconPlacement="right"
        ></MediaSection>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text157">
                Improve your productivity with a number of tools
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text158">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text159">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name180"
          showParagraph={false}
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Professional Edition/productivity-tools-features-1400w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name13"
          imagePlacement="right"
          mainImageAlign="stretch"
          sectionSpacing="M"
        >
          <div className="burp-suite-professional-features-container5 grid-columns-2 grid">
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text160">
                    Deep-dive message analysis with the feature-rich HTTP
                    editor.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/productivity-tools.svg"
              rootClassName="feature-icon-cardroot-class-name123"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text161">
                    Automatically pretty-print formats using JSON, JavaScript,
                    CSS, HTML, and XML.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/productivity-tools.svg"
              rootClassName="feature-icon-cardroot-class-name124"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text162">
                    Utilize both built-in and custom configurations.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/productivity-tools.svg"
              rootClassName="feature-icon-cardroot-class-name125"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text163">
                    Easily remediate scan results.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/productivity-tools.svg"
              rootClassName="feature-icon-cardroot-class-name126"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text164">
                    Automatically keep a persistent log of all your testing
                    activities using project files.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/productivity-tools.svg"
              rootClassName="feature-icon-cardroot-class-name127"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text165">
                    Cut through the noise with advanced search, filtering, and
                    sorting features.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/productivity-tools.svg"
              rootClassName="feature-icon-cardroot-class-name128"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text166">
                    Store and annotate interesting messages with Burp Organizer.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/productivity-tools.svg"
              rootClassName="feature-icon-cardroot-class-name129"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text167">
                    Simple reporting with automated report generation.   
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/productivity-tools.svg"
              rootClassName="feature-icon-cardroot-class-name130"
            ></FeatureIconCard>
          </div>
        </ImageBannerWithSlotRowLayout>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text168">
                Unleash the power of Burp Suite with unrivalled extensibility
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text169">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text170">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name181"
          showParagraph={false}
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          showStats
          mainImgSrc="/Pages/Burp Suite/Professional Edition/bapp-store-pro-page-1400w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name14"
          imagePlacement="left"
          mainImageAlign="stretch"
          sectionSpacing="M"
        >
          <div className="burp-suite-professional-features-container6 grid-columns-2 grid">
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text171">
                    <span>
                      Explore the unrivalled
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore"
                      className="burp-suite-professional-features-link15"
                    >
                      BApp store
                    </a>
                    <span> for community-created extensions.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name131"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text174">
                    <span>
                      Unleash thousands of requests per second with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore/9abaa233088242e8be252cd4ff534988"
                      className="burp-suite-professional-features-link16"
                    >
                      Turbo Intruder
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name132"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text177">
                    <span>
                      Create custom extensions with the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/documentation/desktop/extensions/creating"
                      className="burp-suite-professional-features-link17"
                    >
                      Montoya API
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name133"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text180">
                    <span>
                      Perform repeat requests when testing for broken access
                      controls with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a href="https://portswigger.net/bappstore/f9bbac8c4acf4aefa4d7dc92a991af2f">
                      Autorize
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name134"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text183">
                    <span>
                      Customize Burp Suite using small snippets of Java with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/pro/features/bambdas"
                      className="burp-suite-professional-features-link19"
                    >
                      Bambdas
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name135"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text186">
                    <span>
                      Adapt Burp&apos;s Scanner attacks with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore/b2244cbb6953442cb3c82fa0a0d908fa"
                      className="burp-suite-professional-features-link20"
                    >
                      Upload Scanner
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name136"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text189">
                    <span>
                      Convert between various encodings with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore/65033cbd2c344fbabe57ac060b5dd100"
                      className="burp-suite-professional-features-link21"
                    >
                      Hackvertor
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name137"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text192">
                    <span>
                      Find research-grade bugs with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore/9cff8c55432a45808432e26dbb2b41d8"
                      className="burp-suite-professional-features-link22"
                    >
                      Backslash Powered Scanner
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name138"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text195">
                    <span>
                      Hunt for niche java-specific vulnerabilities with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore/7ec6d429fed04cdcb6243d8ba7358880"
                      className="burp-suite-professional-features-link23"
                    >
                      J2EE Scan
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name141"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text198">
                    <span>
                      Tweak offsets automatically with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore/aaaa60ef945341e8a450217a54a11646"
                      className="burp-suite-professional-features-link24"
                    >
                      HTTP Request Smuggler.
                    </a>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name139"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-professional-features-text200">
                    <span>
                      Quickly find unkeyed inputs with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore/17d2949a985c4b7ca092728dba871943"
                      className="burp-suite-professional-features-link25"
                    >
                      Param Miner
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/extensions.svg"
              rootClassName="feature-icon-cardroot-class-name140"
            ></FeatureIconCard>
          </div>
        </ImageBannerWithSlotRowLayout>
        <a href="https://portswigger.net/bappstore">
          <Button
            btnType="primary"
            btnLabel={
              <Fragment>
                <span className="burp-suite-professional-features-text203">
                  EXPLORE THE BAPP STORE
                </span>
              </Fragment>
            }
            iconType="chevron-right"
            rootClassName="buttonroot-class-name49"
            className="burp-suite-professional-features-component68"
          ></Button>
        </a>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text204">
                Automate customized attacks with Burp Intruder
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text205">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text206">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name179"
          showParagraph={false}
        ></HeadingAndParagraph>
        <MediaSection
          showCta={false}
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text207">
                TRY FOR FREE
              </span>
            </Fragment>
          }
          iframeSrc="https://www.youtube.com/embed/IpTVU0DyHHM?si=xDyuYtJt1nbLKUqK"
          mediaType="YoutubeVideo"
          ctaIconType="chevron-right"
          rootClassName="media-sectionroot-class-name4"
          ctaIconPlacement="right"
        ></MediaSection>
        <Testimonial
          author={
            <Fragment>
              <span className="burp-suite-professional-features-text208">
                Carles Llobet Pons, Cyber Security Professional.
              </span>
            </Fragment>
          }
          logoSrc="/Icons/burp-suite-professional-logo-1200w-200h.webp"
          bordered
          testimonial={
            <Fragment>
              <span className="burp-suite-professional-features-text209">
                “Checking out the new Bambdas for proxy filtering that Burp
                Suite just launched. Quickly parsing through all my history to
                identify improperly set Content-Types. It will definitely come
                in handy to be able to create these powerful filters from now
                on!”
              </span>
            </Fragment>
          }
          logoPlacement="right"
          rootClassName="testimonialroot-class-name4"
        ></Testimonial>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/pro/trial"
          heading={
            <Fragment>
              <span className="burp-suite-professional-features-text210">
                Try Burp Suite Professional for free
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-features-text211">
                TRY FOR FREE
              </span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-features-text212">
                The most complete and widely used pentesting toolkit available.
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          topLogoSrc="/Logos/enterprise.svg"
          ctaIconType="chevron-right"
          headingType="H2"
          showTopLogo={false}
          rootClassName="banner-with-cta-and-check-listroot-class-name15"
          showCheckList={false}
          checkListItems={[
            {
              label: 'Indefinitely scalable ',
              iconType: 'check-circle',
            },
            {
              label: 'Unlimited users',
              iconType: 'check-circle',
            },
            {
              label: 'Free technical support',
              iconType: 'check-circle',
            },
          ]}
          ctaIconPlacement="right"
        ></BannerWithCtaAndCheckList>
      </main>
      <Footer rootClassName="footerroot-class-name33"></Footer>
    </div>
  )
}

export default BurpSuiteProfessionalFeatures
