import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../components/live-tag-production'
import Navigation from '../../components/navigation'
import Hero from '../../components/hero'
import SidePanelWithSlot from '../../components/side-panel-with-slot'
import Quote from '../../components/quote'
import HeadingAndParagraph from '../../components/heading-and-paragraph'
import CheckList from '../../components/check-list'
import Button from '../../components/button'
import Footer from '../../components/footer'
import './customer-story-efficient-discovery-comprehensive-application-mapping.css'

const CustomerStoryEfficientDiscoveryComprehensiveApplicationMapping = (
  props
) => {
  return (
    <div className="customer-story-efficient-discovery-comprehensive-application-mapping-container">
      <Helmet>
        <title>
          Customer-Story-Efficient-discovery-comprehensive-application-mapping -
          Web Application Security, Testing, & Scanning - PortSwigger
        </title>
        <meta
          name="description"
          content="Find out why this pentester uses Burp every day. Efficient discovery, comprehensive application mapping and advanced extensibility."
        />
        <meta
          property="og:title"
          content="Customer-Story-Efficient-discovery-comprehensive-application-mapping - Web Application Security, Testing, &amp; Scanning - PortSwigger"
        />
        <meta
          property="og:description"
          content="Find out why this pentester uses Burp every day. Efficient discovery, comprehensive application mapping and advanced extensibility."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name7"></Navigation>
      <main className="align-center column width-100">
        <Hero
          heading={
            <Fragment>
              <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text100">
                Efficient discovery, comprehensive application mapping, and
                advanced extensibility.
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text101">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text102">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text103">
                BUY - $475
              </span>
            </Fragment>
          }
          heroImgSrc="/Pages/Customer Stories/burp-pro-case-study-hero-1300w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text104">
                Pentesters face an ever-evolving challenge of testing sprawling
                applications for increasingly complex vulnerabilities. For this
                pentester within a 30-member AppSec team at a large cyber
                security company based in Sweden, this is no different.
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/White/white-burp-suite-professional-1200w.png"
          showTopLogo
          columnLayout="60-40"
          rootClassName="heroroot-class-name7"
          mainImageAlign="start"
          subHeadingFontStyle="intro"
        ></Hero>
        <SidePanelWithSlot
          rootClassName="side-panel-with-slotroot-class-name"
          sidePanelList={[
            {
              href: '#section-1',
              label: 'Introduction',
            },
            {
              href: '#section-2',
              label: 'Key highlights',
            },
            {
              href: '#section-3',
              label: 'Building the sitemap',
            },
            {
              href: '#section-4',
              label: 'Identifying vulnerabilities',
            },
            {
              href: '#section-5',
              label: 'Actionable POC',
            },
            {
              href: '#section-6',
              label: 'Focus on what matters most',
            },
          ]}
          sidePanelHeader={
            <Fragment>
              <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text105">
                In this story
              </span>
            </Fragment>
          }
        >
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text106">
                  I use Burp every day. More people should use it if
                  they&apos;re not already.
                </span>
              </Fragment>
            }
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text107">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H3"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text108">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name1"
            showExtraInfo
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text109">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text110">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text111">
                  <span>
                    A 30-member AppSec team at a Swedish-based cybersecurity
                    company provides Pentesting-as-a-Service, helping to uncover
                    vulnerabilities in clients’ web applications.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    We interviewed a pentester from this organization, who is
                    part of an ethical hacking red team. We spoke to them about
                    their challenges, workflow, and how Burp helps them achieve
                    their goals.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-1"
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name68"
          ></HeadingAndParagraph>
          <CheckList
            item1={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text116 text-body-1">
                  Using the complete toolkit in Burp to streamline all phases of
                  the pentesting workflow.
                </span>
              </Fragment>
            }
            item2={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text117 text-body-1">
                  Burp Scanner allows for multi-tasking - capturing low-hanging
                  fruit, while they explore other vulnerabilities manually.
                </span>
              </Fragment>
            }
            item3={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text118 text-body-1">
                  Adding extensions to Burp helps them gain even more value from
                  the tools.
                </span>
              </Fragment>
            }
            item4={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text119 text-body-1">
                  <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text120">
                    Be a force for good in the world.
                  </span>
                  <span>
                    {' '}
                    Delivering amazing products and services certainly makes the
                    world a better place. But our culture means that we are also
                    instinctively generous, giving away much more than we need
                    to. We directly improve the lives of our people and numerous
                    others. We do this as an end in itself, not as a cynical
                    means to profit.
                  </span>
                </span>
              </Fragment>
            }
            item5={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text122">
                  The grievance hearer will look into any additional points
                  raised.
                </span>
              </Fragment>
            }
            item6={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text123">
                  Once ready, the grievance hearer will produce a written
                  outcome letter of their findings. This is then shared with
                  relevant parties.
                </span>
              </Fragment>
            }
            item7={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text124">
                  The Swigger who raised the grievance will be given the right
                  to appeal the findings of the grievance.
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text125">
                  Key highlights
                </span>
              </Fragment>
            }
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text126">
                  GET IN TOUCH
                </span>
              </Fragment>
            }
            listType="bulletPoint"
            sectionId="section-2"
            headingType="H2"
            rootClassName="check-listroot-class-name22"
            headingParagraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text127">
                  Swiggers travel to work in various ways. Each of our offices
                  offers different commuting options and amenities to support
                  your commute to work:
                </span>
              </Fragment>
            }
          ></CheckList>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text128">
                  Building the sitemap and beginning recon
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text129">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text130">
                  <span>
                    During this initial phase, their aim is to map and
                    understand the full extent of the application’s attack
                    surface using
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/proxy"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link10"
                  >
                    Burp Proxy
                  </a>
                  <span>.</span>
                </span>
              </Fragment>
            }
            sectionId="section-3"
            headingType="H3"
            rootClassName="heading-and-paragraphroot-class-name69"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text133">
                  I find Burp incredibly helpful during discovery. Populating
                  the site map gives me a tree view of the app, which is
                  massively useful for identifying areas to focus on. What I
                  often do is walk the application in the built-in browser then,
                  for example, I might see an API just popped up, so I can look
                  into that.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text134">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text135">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name2"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text136">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text137">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text138">
                  <span>
                    Once a sitemap has been built out, they can begin probing
                    areas of interest for more focused content-discovery using
                    Proxy “to identify traffic that looks really interesting as
                    an initial target&quot;. They then send the associated
                    requests to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/repeater"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link11"
                  >
                    Repeater
                  </a>
                  <span>
                     for closer inspection “to help get an understanding of
                    what&apos;s happening.&quot;
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    While their focused on exploring high-value vulnerabilities
                    with Proxy and Repeater, they leverage automation through
                    the Scanner.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name70"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text144">
                  I&apos;ll start a scan almost immediately and just have that
                  running in the background to produce some very quick results
                  and spot things that are otherwise really easy to miss.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text145">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text146">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name3"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text147">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text148">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text149">
                  This toolset allows them to multi-task seamlessly.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name74"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text150">
                  <span>
                    What I really love is that, while I&apos;m walking around
                    the application, I can say &apos;oh, that&apos;s a cool
                    endpoint!&apos; then send it to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/bappstore/17d2949a985c4b7ca092728dba871943"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link12"
                  >
                    Param Miner
                  </a>
                  <span>
                    {' '}
                    or run more targeted scans straight away. I know that&apos;s
                    just happening in the background while I do more recon. I
                    love all that.
                  </span>
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text153">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text154">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name4"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text155">
                  Identifying vulnerabilities through automation and manual
                  testing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text156">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text157">
                  <span>
                    Once they have built a comprehensive understanding of the
                    application, they can begin the Attack phase. The primary
                    objective here is to identify vulnerabilities that pose a
                    significant risk to the target application.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    This is where the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/vulnerability-scanner"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link13"
                  >
                    Scanner
                  </a>
                  <span> delivers real value for this pentester.</span>
                </span>
              </Fragment>
            }
            sectionId="section-4"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name75"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text163">
                  I hate manual fuzzing and having to come up with test cases
                  based on what I have in my notes.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text164">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text165">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name5"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text166">
                  Identifying vulnerabilities through automation and manual
                  testing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text167">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text168">
                  While they can’t remove all manual elements from testing, the
                  Burp Scanner can reduce a lot of the pain, testing more
                  payloads than they would be able to manually.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name76"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text169">
                  I love the Burp Scanner. It&apos;s probably my number one
                  feature. It means I can focus on the manual testing and the
                  stuff that I know the scanner can&apos;t do.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text170">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text171">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name6"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text172">
                  Identifying vulnerabilities through automation and manual
                  testing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text173">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text174">
                  <span>
                    As well as reducing manual work, they use the Scanner for
                    identifying specifics like injection vulnerabilities, or
                    finding a JSON object inside of a parameter, while using
                    extensions like
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/bappstore/65033cbd2c344fbabe57ac060b5dd100"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link14"
                  >
                    Hackverter
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
                    href="https://portswigger.net/bappstore/9cff8c55432a45808432e26dbb2b41d8"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link15"
                  >
                    Backslash Power Scanner
                  </a>
                  <span> to add even more power.</span>
                  <br></br>
                  <br></br>
                  <span>
                    Any potential issues found in the Scanner (and elsewhere)
                    are then sent to Repeater, where they can test different
                    avenues and begin building his POC.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name77"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text181">
                  Distilling the results into an actionable POC
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text182">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text183">
                  <span>
                    In the final phase of his workflow, they need to report on
                    their findings and create a POC for their clients to take
                    away and action themselves.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    While they don&apos;t use
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/getting-started/generate-reports"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link16"
                  >
                    Burp’s built-in report generation
                  </a>
                  <span>, they do utilise Repeater to compile reports.</span>
                </span>
              </Fragment>
            }
            sectionId="section-5"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name78"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text189">
                  Usually I send the request to Repeater, edit it into the
                  simplest form I possibly can, and then I take its URL into our
                  reporting tool and build a proof of concept.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text190">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text191">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name7"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text192">
                  Identifying vulnerabilities through automation and manual
                  testing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text193">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text194">
                  Removing irrelevant HTTP headers helps reduce the request to
                  its simplest form, allowing them to provide clear reproduction
                  steps.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name79"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text195">
                  The new ‘hide uninteresting headers’ option is great for that,
                  especially now that we&apos;re able to customize the list to
                  include our own headers.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text196">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text197">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name8"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text198">
                  Identifying vulnerabilities through automation and manual
                  testing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text199">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text200">
                  Alongside the simplified requests from Repeater, they use
                  evidence provided by the Burp Scanner to highlight the
                  parameter request.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name80"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text201">
                  Rather than me having to enter all that data manually and
                  describe which parameter is affected and how, Burp is very
                  good at saying &apos;it&apos;s this parameter, and here is the
                  evidence.’
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text202">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text203">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name9"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text204">
                  Identifying vulnerabilities through automation and manual
                  testing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text205">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text206">
                  <span>
                    Using the range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro/features"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link17"
                  >
                    tools
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
                    href="https://portswigger.net/bappstore"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link18"
                  >
                    extensions
                  </a>
                  <span>
                    {' '}
                    within Burp Suite Professional allows them to streamline all
                    phases of their workflow, ensuring comprehensive testing in
                    every client engagement.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name81"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text210">
                  Focus on the vulnerabilities that matter most
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text211">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text212">
                  <span>
                    Without Burp Suite, this pentester would face time-consuming
                    manual workflows, risk missing critical vulnerabilities, and
                    deliver less actionable reports for their clients.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Burp Suite Professional is indispensable in their workflow.
                    From the Scanner, to Proxy, Repeater, and more - Burp
                    enables them to focus on finding the vulnerabilities that
                    matter most.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Join over 80,000 security professionals using Burp Suite
                    Professional.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro/trial"
                    className="customer-story-efficient-discovery-comprehensive-application-mapping-link19"
                  >
                    Request a fully-featured free trial
                  </a>
                  <span>
                    {' '}
                    of the web security tester&apos;s toolkit of choice.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-6"
            headingType="H2"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name82"
            showParagraph
          ></HeadingAndParagraph>
          <a href="https://portswigger.net/burp/pro/trial">
            <Button
              btnLabel={
                <Fragment>
                  <span className="customer-story-efficient-discovery-comprehensive-application-mapping-text221">
                    TRY FOR FREE
                  </span>
                </Fragment>
              }
              iconPlacement="none"
              rootClassName="buttonroot-class-name32"
              className="customer-story-efficient-discovery-comprehensive-application-mapping-component36"
            ></Button>
          </a>
        </SidePanelWithSlot>
      </main>
      <Footer rootClassName="footerroot-class-name13"></Footer>
    </div>
  )
}

export default CustomerStoryEfficientDiscoveryComprehensiveApplicationMapping
