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
import './case-study-microsoft.css'

const CaseStudyMicrosoft = (props) => {
  return (
    <div className="case-study-microsoft-container">
      <Helmet>
        <title>
          Case-Study-Microsoft - Web Application Security, Testing, & Scanning -
          PortSwigger
        </title>
        <meta
          name="description"
          content="Find out why this pentester uses Burp every day. Efficient discovery, comprehensive application mapping and advanced extensibility."
        />
        <meta
          property="og:title"
          content="Case-Study-Microsoft - Web Application Security, Testing, &amp; Scanning - PortSwigger"
        />
        <meta
          property="og:description"
          content="Find out why this pentester uses Burp every day. Efficient discovery, comprehensive application mapping and advanced extensibility."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name10"></Navigation>
      <main className="align-center column width-100">
        <Hero
          heading={
            <Fragment>
              <span className="case-study-microsoft-text100">
                Burp Suite Professional is the cornerstone of Microsoft’s
                pentesting toolkit
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="case-study-microsoft-text101">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="case-study-microsoft-text102">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="case-study-microsoft-text103">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Customer Stories/burp-pro-case-study-hero-1300w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="case-study-microsoft-text104">
                Discover why Burp Suite Professional is indispensable for
                Microsoft Azure&apos;s security engineers, helping them navigate
                complex attack surfaces, streamline workflows, and secure
                thousands of applications and APIs.
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/microsoft-white-logo.svg"
          showTopLogo
          columnLayout="60-40"
          rootClassName="heroroot-class-name9"
          mainImageAlign="start"
          subHeadingFontStyle="intro"
        ></Hero>
        <SidePanelWithSlot
          rootClassName="side-panel-with-slotroot-class-name2"
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
              label: 'Gaining visibility',
            },
            {
              href: '#section-4',
              label: 'Actionable insights',
            },
            {
              href: '#section-5',
              label: 'Detecting vulnerabilities',
            },
            {
              href: '#section-6',
              label: 'Power of the community',
            },
            {
              href: '#section-7',
              label: 'Impact and remediation',
            },
            {
              href: '#section-8',
              label: 'Indispensable toolkit',
            },
          ]}
          sidePanelHeader={
            <Fragment>
              <span className="case-study-microsoft-text105">
                In this story
              </span>
            </Fragment>
          }
        >
          <Quote
            quote={
              <Fragment>
                <span className="case-study-microsoft-text106">
                  At Microsoft, Burp Suite is what you use. It’s not up for
                  consideration.
                </span>
              </Fragment>
            }
            ctaLabel={
              <Fragment>
                <span className="case-study-microsoft-text107">Read more</span>
              </Fragment>
            }
            fontType="H3"
            extraInfo={
              <Fragment>
                <span className="case-study-microsoft-text108">
                  Taylor O&apos;Dell, Security Engineer, Microsoft
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name24"
            showExtraInfo
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text109">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text110">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text111">
                  <span>
                    Security teams at Microsoft work with multiple complex
                    environments, and with thousands of applications and APIs to
                    secure, keeping on top of this large portfolio is not easy.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    We caught up with
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://azure.microsoft.com/en-gb/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="case-study-microsoft-link10"
                  >
                    Microsoft Azure&apos;s
                  </a>
                  <span>
                    {' '}
                    Taylor O&apos;Dell as he shares his insights on how
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro"
                    className="case-study-microsoft-link11"
                  >
                    Burp Suite Professional
                  </a>
                  <span>
                    {' '}
                    has become an indispensable tool in identifying and
                    mitigating vulnerabilities in their web applications.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-1"
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name106"
          ></HeadingAndParagraph>
          <CheckList
            item1={
              <Fragment>
                <span className="case-study-microsoft-text118 text-body-1">
                  Using Burp Suite to help identify an application&apos;s
                  endpoints and decide what is, and isn’t, in scope for testing.
                </span>
              </Fragment>
            }
            item2={
              <Fragment>
                <span className="case-study-microsoft-text119 text-body-1">
                  Extending Burp Suite’s capabilities with community-created
                  BApp extensions.
                </span>
              </Fragment>
            }
            item3={
              <Fragment>
                <span className="case-study-microsoft-text120 text-body-1">
                  The prevalence of Burp Suite amongst Microsoft Azure’s
                  Security Engineers.
                </span>
              </Fragment>
            }
            item4={
              <Fragment>
                <span className="case-study-microsoft-text121 text-body-1">
                  <span className="case-study-microsoft-text122">
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
                <span className="case-study-microsoft-text124">
                  The grievance hearer will look into any additional points
                  raised.
                </span>
              </Fragment>
            }
            item6={
              <Fragment>
                <span className="case-study-microsoft-text125">
                  Once ready, the grievance hearer will produce a written
                  outcome letter of their findings. This is then shared with
                  relevant parties.
                </span>
              </Fragment>
            }
            item7={
              <Fragment>
                <span className="case-study-microsoft-text126">
                  The Swigger who raised the grievance will be given the right
                  to appeal the findings of the grievance.
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="case-study-microsoft-text127">
                  Key highlights
                </span>
              </Fragment>
            }
            ctaLabel={
              <Fragment>
                <span className="case-study-microsoft-text128">
                  GET IN TOUCH
                </span>
              </Fragment>
            }
            listType="bulletPoint"
            sectionId="section-2"
            headingType="H2"
            rootClassName="check-listroot-class-name24"
            headingParagraph={
              <Fragment>
                <span className="case-study-microsoft-text129">
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
                <span className="case-study-microsoft-text130">
                  Gaining visibility over complex attack surface
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text131">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text132">
                  Due to the number of complex environments the Microsoft Azure
                  team are working with, Taylor often needs to conduct thorough
                  testing on applications he’s not familiar with. Here, Taylor’s
                  goal is to map out the full attack surface, and understand
                  what the scope is. Unfortunately, this proves a tedious and
                  time consuming task, particularly as one single application
                  might involve multiple different domains and APIs.
                </span>
              </Fragment>
            }
            sectionId="section-3"
            headingType="H3"
            rootClassName="heading-and-paragraphroot-class-name107"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-microsoft-text133">
                  It takes days to figure out what traffic you need to actually
                  care about… we have a million different domains and the
                  application that you&apos;re testing may use 20 different
                  domains easily.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-microsoft-text134">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-microsoft-text135">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name25"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text136">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text137">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text138">
                  <span>
                    Taylor describes how he likes to maximize his efficiency by
                    leveraging Burp Suite&apos;s automation features to
                    supplement his own expertise. This proves invaluable in this
                    initial Discovery phase, where he uses Burp&apos;s automated
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/engagement-tools/content-discovery"
                    className="case-study-microsoft-link12"
                  >
                    content discovery tool
                  </a>
                  <span>
                    {' '}
                    to enumerate additional, unlinked attack surface.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/vulnerability-scanner"
                    className="case-study-microsoft-link13"
                  >
                    Burp Scanner
                  </a>
                  <span>
                    {' '}
                    also forms an integral part of his workflow, as he typically
                    runs a full crawl and audit across his entire scope, to
                    ensure maximum coverage.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name108"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-microsoft-text142">
                  I always kick off with a content discovery session on the
                  targets within scope and then run Burp’s automated web app
                  scan across all of my targets. I do a full crawl and audit,
                  always with the deepest setting.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-microsoft-text143">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-microsoft-text144">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name26"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text145">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text146">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text147">
                  <span>
                    Not only does this help to optimize the otherwise tedious
                    process of mapping out the full attack surface, the initial
                    findings serve as a useful starting point for prioritizing
                    areas to focus on first.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    At this stage, features such as the advanced filtering
                    options and global search help him remove some of the
                    inevitable noise that comes from testing complex
                    applications.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name109"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text152">
                  Turning scan results into actionable insights
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text153">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text154">
                  <span>
                    Taylor starts the Attack phase by reviewing the scan results
                    on
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/dashboard"
                    className="case-study-microsoft-link14"
                  >
                    Burp&apos;s dashboard
                  </a>
                  <span>
                    . Taylor is able to start working through this list, sending
                    the ‘juiciest’ results to Intruder for fuzzing or to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/repeater"
                    className="case-study-microsoft-link15"
                  >
                    Repeater
                  </a>
                  <span>
                    {' '}
                    to manually validate the reported issue. By doing this,
                    Taylor is also able to quickly catch any low-hanging fruit
                    and rule out any false positives, further eliminating noise.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-4"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name118"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-microsoft-text158">
                  I start with the dashboard, look for whatever looks the
                  juiciest, and then work my way through, validating. Usually my
                  workflow is to identify anything suspicious, and send it to
                  Repeater. I&apos;ll switch over to Repeater and start looking
                  one by one, asking myself, ‘what can I actually do with this
                  request?’, ‘am I finding the same thing as the scanner?’, ‘is
                  this a false positive?&apos;.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-microsoft-text159">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-microsoft-text160">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name27"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text161">
                  Detecting invisible, asynchronous vulnerabilities
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text162">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text163">
                  <span>
                    Burp Suite&apos;s Collaborator is also an invaluable tool in
                    Taylor&apos;s arsenal, providing an out-of-the-box solution
                    for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/application-security-testing/oast"
                    className="case-study-microsoft-link16"
                  >
                    out-of-band testing (OAST
                  </a>
                  <span>
                    ) techniques. By inducing the target to interact with
                    external network services, he&apos;s able to easily find
                    clues that otherwise invisible vulnerabilities may be
                    present, especially blind
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/web-security/ssrf"
                    className="case-study-microsoft-link17"
                  >
                    SSRF
                  </a>
                  <span>.</span>
                </span>
              </Fragment>
            }
            sectionId="section-5"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name110"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-microsoft-text167">
                  I do use Burp Collaborator quite a bit for testing those
                  external service interactions or SSRF issues. We use the
                  public Collaborator server most of the time.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-microsoft-text168">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-microsoft-text169">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name28"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text170">
                  Harnessing the power of the community
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text171">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text172">
                  <span>
                    Taylor also describes how the team at Microsoft benefit from
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/bappstore"
                    className="case-study-microsoft-link18"
                  >
                    Burp Suite’s extensibility
                  </a>
                  <span>
                    . The thriving community of extension developers means
                    they&apos;re able to further enhance Burp&apos;s already
                    powerful features. For example, Taylor often uses
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/bappstore/3123d5b5f25c4128894d97ea1acc4976"
                    className="case-study-microsoft-link19"
                  >
                    ActiveScan++
                  </a>
                  <span>
                    {' '}
                    to extend Burp’s active and passive scanning capabilities,
                    along with Autorize to do some of the heavy lifting when
                    testing for broken access controls.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    The library of community-created extensions also allows him
                    to add specific functionality to Burp that simplifies
                    testing specific technologies. For example, he uses the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/bappstore/26aaa5ded2f74beea19e2ed8345a93dd"
                    className="case-study-microsoft-link20"
                  >
                    JSON Web Tokens
                  </a>
                  <span>
                    {' '}
                    extension when testing applications that use JWTs as part of
                    an authentication flow or session management mechanism. This
                    enables him to more easily spot when the server issues JWTs
                    and provides additional Repeater views for manipulating
                    tokens without having to manually decode and re-encode them.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-6"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name111"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text180">
                  Demonstrating impact and enabling remediation
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text181">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text182">
                  <span>
                    After conducting testing on Microsoft’s Azure applications,
                    it’s crucial for Taylor to effectively communicate his
                    findings to both internal stakeholders and development
                    teams. Taylor often has to explain the impact of
                    vulnerabilities, and make this information more digestible
                    for even the least technical team member.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Burp Suite provides details for any issues identified during
                    scanning, along with evidence for the issue in the form of
                    the request/response sequence that forms the attack vector.
                    Taylor uses these, along with the free content on
                    PortSwigger&apos;s
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/web-security"
                    className="case-study-microsoft-link21"
                  >
                    Web Security Academy
                  </a>
                  <span>
                    , to help him document his findings and create clear and
                    detailed tickets for the developers charged with remediating
                    the issue.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-7"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name119"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text188">
                  An indispensable toolkit for real-world testing
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text189">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text190">
                  Taylor’s reliance on Burp Suite highlights its versatility and
                  effectiveness in real-world, enterprise-grade security
                  operations.
                </span>
              </Fragment>
            }
            sectionId="section-8"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name120"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-microsoft-text191">
                  I would be surprised if all penetration testers are not
                  exclusively using Burp Suite… [at Microsoft] it’s not even up
                  for consideration. Burp Suite is what you use.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-microsoft-text192">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-microsoft-text193">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name29"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text194">
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
                <span className="case-study-microsoft-text195">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text196">
                  Burp Suite’s flexibility as an intercepting proxy, unrivaled
                  vulnerability scanner, and toolkit of out-of-the-box solutions
                  for performing testing of all kinds of technologies, allows
                  Microsoft’s pentesters to navigate complex infrastructure,
                  validate vulnerabilities, and streamline their workflows.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name112"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-microsoft-text197">
                  Ready to implement Burp Suite into your own pentesting work
                  flow?
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-microsoft-text198">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-microsoft-text199">
                  <span>
                    Request a free trial of Burp Suite Professional, or find out
                    more about how Burp Suite Professional can help you find,
                    and inspect, the vulnerabilities that matter the most
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro"
                    className="case-study-microsoft-link22"
                  >
                    here
                  </a>
                  <span>.</span>
                </span>
              </Fragment>
            }
            headingType="H2"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name113"
            showParagraph
          ></HeadingAndParagraph>
          <a href="https://portswigger.net/burp/pro/trial">
            <Button
              btnLabel={
                <Fragment>
                  <span className="case-study-microsoft-text202">
                    TRY FOR FREE
                  </span>
                </Fragment>
              }
              iconPlacement="none"
              rootClassName="buttonroot-class-name34"
              className="case-study-microsoft-component32"
            ></Button>
          </a>
        </SidePanelWithSlot>
      </main>
      <Footer rootClassName="footerroot-class-name16"></Footer>
    </div>
  )
}

export default CaseStudyMicrosoft
