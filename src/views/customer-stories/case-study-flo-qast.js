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
import './case-study-flo-qast.css'

const CaseStudyFloQast = (props) => {
  return (
    <div className="case-study-flo-qast-container">
      <Helmet>
        <title>
          Case-Study-FloQast - Web Application Security, Testing, & Scanning -
          PortSwigger
        </title>
        <meta
          name="description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta
          property="og:title"
          content="Case-Study-FloQast - Web Application Security, Testing, &amp; Scanning - PortSwigger"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name9"></Navigation>
      <main className="align-center column width-100">
        <Hero
          heading={
            <Fragment>
              <span className="case-study-flo-qast-text100">
                How FloQast are streamlining testing workflows and providing
                actionable reporting for their developers.
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="case-study-flo-qast-text101">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="case-study-flo-qast-text102">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="case-study-flo-qast-text103">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Customer Stories/burp-pro-case-study-hero-1300w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="case-study-flo-qast-text104">
                Pentesters face an ever-evolving challenge of testing sprawling
                applications for increasingly complex vulnerabilities. For this
                pentester within a 30-member AppSec team at a large cyber
                security company based in Sweden, this is no different.
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/floqast-logo-white-200h-1200w.webp"
          showTopLogo
          columnLayout="60-40"
          rootClassName="heroroot-class-name8"
          mainImageAlign="start"
          showSubHeading={false}
          subHeadingFontStyle="intro"
        ></Hero>
        <SidePanelWithSlot
          rootClassName="side-panel-with-slotroot-class-name1"
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
              label: "Owen's workflow",
            },
            {
              href: '#section-4',
              label: 'Mapping attack surface and API request structures',
            },
            {
              href: '#section-5',
              label: 'Organizing and prioritizing findings',
            },
            {
              href: '#section-6',
              label: 'Probing for vulnerabilities',
            },
            {
              href: '#section-7',
              label: 'Unrivalled features',
            },
            {
              href: '#section-8',
              label: 'Fuzzing at scale',
            },
            {
              href: '#section-9',
              label: 'Out-of-the-box detection',
            },
            {
              href: '#section-10',
              label: 'Customizable extensibility',
            },
            {
              href: '#section-11',
              label: 'Automated report generation',
            },
            {
              href: '#section-12',
              label: 'Comprehensive toolkit',
            },
          ]}
          sidePanelHeader={
            <Fragment>
              <span className="case-study-flo-qast-text105">In this story</span>
            </Fragment>
          }
        >
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text106">
                  Burp Suite is my go to.
                </span>
              </Fragment>
            }
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text107">Read more</span>
              </Fragment>
            }
            fontType="H3"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text108">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name10"
            showExtraInfo
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text109">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text110">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text111">
                  <span>
                    Software providers face the challenge of rapidly getting new
                    features and improvements in the hands of their users, while
                    ensuring that this agility doesn&apos;t result in vulnerable
                    code slipping through the net. As such, it&apos;s crucial
                    that Application Security Engineers like
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://floqast.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="case-study-flo-qast-link10"
                  >
                    FloQast’s
                  </a>
                  <span>
                    {' '}
                    Owen McCarthy are able to find vulnerabilities and help
                    development teams patch them effectively before they hit
                    production.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    FloQast offers accounting software to provide workflow
                    automation and close management. We caught up with Owen
                    about his pains when pentesting, and how Burp helps
                    streamline his workflow.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-1"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name84"
          ></HeadingAndParagraph>
          <CheckList
            item1={
              <Fragment>
                <span className="case-study-flo-qast-text117 text-body-1">
                  Using Burp to map an application’s full attack surface.
                </span>
              </Fragment>
            }
            item2={
              <Fragment>
                <span className="case-study-flo-qast-text118 text-body-1">
                  Supercharging testing workflows with Burp’s community-powered
                  extensibility.
                </span>
              </Fragment>
            }
            item3={
              <Fragment>
                <span className="case-study-flo-qast-text119 text-body-1">
                  Providing valuable, actionable insight for developers with
                  Burp’s custom issue creation.
                </span>
              </Fragment>
            }
            item4={
              <Fragment>
                <span className="case-study-flo-qast-text120 text-body-1">
                  <span className="case-study-flo-qast-text121">
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
                <span className="case-study-flo-qast-text123">
                  The grievance hearer will look into any additional points
                  raised.
                </span>
              </Fragment>
            }
            item6={
              <Fragment>
                <span className="case-study-flo-qast-text124">
                  Once ready, the grievance hearer will produce a written
                  outcome letter of their findings. This is then shared with
                  relevant parties.
                </span>
              </Fragment>
            }
            item7={
              <Fragment>
                <span className="case-study-flo-qast-text125">
                  The Swigger who raised the grievance will be given the right
                  to appeal the findings of the grievance.
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text126">
                  Key highlights
                </span>
              </Fragment>
            }
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text127">
                  GET IN TOUCH
                </span>
              </Fragment>
            }
            listType="bulletPoint"
            sectionId="section-2"
            headingType="H2"
            rootClassName="check-listroot-class-name23"
            headingParagraph={
              <Fragment>
                <span className="case-study-flo-qast-text128">
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
                <span className="case-study-flo-qast-text129">
                  Owen’s workflow in Burp Suite Professional
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text130">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text131">
                  <span>
                    Owen&apos;s main challenge as a pentester is effectively
                    securing a broad portfolio of applications, comprising a
                    diverse and complex range of technologies.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Throughout the Discovery, Attack, and Reporting phases of
                    his pentesting workflow, Owen regularly uses a range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro"
                    className="case-study-flo-qast-link11"
                  >
                    Burp Suite Professional’s
                  </a>
                  <span>
                    {' '}
                    built-in
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro/features"
                    className="case-study-flo-qast-link12"
                  >
                    features
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
                    className="case-study-flo-qast-link13"
                  >
                    community-created extensions
                  </a>
                  <span> to help overcome these challenges.</span>
                </span>
              </Fragment>
            }
            sectionId="section-3"
            headingType="H2"
            rootClassName="heading-and-paragraphroot-class-name85"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text139">
                  Mapping attack surface and API request structures
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text140">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text141">
                  <span>
                    While Owen utilizes external CLI tools and scripts for
                    initial subdomain enumeration, he feeds the results of his
                    external recon into Burp Suite. Burp provides several tools
                    that help him to automate this process. He then uses the
                    content discovery tool and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/intruder"
                    className="case-study-flo-qast-link14"
                  >
                    Intruder
                  </a>
                  <span> to enumerate more attack surface.</span>
                </span>
              </Fragment>
            }
            sectionId="section-4"
            headingType="H3"
            rootClassName="heading-and-paragraphroot-class-name86"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text144">
                  The content discovery tool is pretty helpful at this point.
                  I&apos;ll also run Intruder attacks where the payload position
                  is the subdomain or end of the link.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text145">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text146">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name11"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text147">
                  Mapping attack surface and API request structures
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text148">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text149">
                  <span>
                    Once he&apos;s enumerated additional subdomains, he uses
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/vulnerability-scanner"
                    className="case-study-flo-qast-link15"
                  >
                    Burp Scanner
                  </a>
                  <span>
                    {' '}
                    to automate the process of crawling the website to map out
                    the application’s structure.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name87"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text152">
                  We gather a list of known subdomains and then just pass those
                  to the crawler. We can have that running in the background to
                  crawl more.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text153">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text154">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name12"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text155">
                  Mapping attack surface and API request structures
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text156">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text157">
                  <span>
                    This automation frees him up to do some manual discovery and
                    analysis. He uses
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/proxy"
                    className="case-study-flo-qast-link16"
                  >
                    Proxy
                  </a>
                  <span>
                    {' '}
                    to intercept and analyze the traffic between his browser and
                    the target app, providing insights into the
                    application&apos;s functionality and clues that indicate
                    potential vulnerabilities.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name88"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text160">
                  While the crawl is running in the background, I can also say
                  &apos;this request looks really interesting&apos; and start
                  manually testing.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text161">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text162">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name13"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text163">
                  Mapping attack surface and API request structures
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text164">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text165">
                  This centralized approach streamlines the discovery process by
                  balancing automation with detailed manual analysis.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name89"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text166">
                  Organizing and prioritizing findings for further investigation
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text167">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text168">
                  <span>
                    Owen uses the site map to help him structure his testing.
                    This provides a visual representation of the
                    application&apos;s structure and offers advanced filtering
                    based on various criteria, facilitating quick identification
                    of interesting endpoints. When he identifies areas of the
                    app to prioritize first, he then sends the relevant requests
                    to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/organizer"
                    className="case-study-flo-qast-link17"
                  >
                    Organizer
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
                    href="https://portswigger.net/burp/documentation/desktop/tools/repeater"
                    className="case-study-flo-qast-link18"
                  >
                    Repeater
                  </a>
                  <span> for further analysis.</span>
                  <br></br>
                  <br></br>
                  <span>
                    He takes advantage of the built-in note-taking functionality
                    to record what it is he wants to look into so that he can
                    come back to it later, without needing to context-switch
                    from what he&apos;s doing currently.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-5"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name90"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text175">
                  It&apos;s really helpful to be able to add a little note
                  saying what I thought was weird about the request.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text176">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text177">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name14"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text178">
                  Mapping attack surface and API request structures
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text179">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text180">
                  This structured approach prevents losing track of important
                  observations during the discovery process.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name91"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text181">
                  Speeding up the process of probing for vulnerabilities and
                  catching low-hanging fruit
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text182">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text183">
                  Owen runs targeted scans on specific requests, or even
                  individual parameters, that he suspects may be vulnerable.
                  This maximizes his efficiency as it&apos;s much quicker than
                  manually probing each request for every potential
                  vulnerability.
                </span>
              </Fragment>
            }
            sectionId="section-6"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name92"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text184">
                  I usually run a lot of targeted scans of requests that I think
                  look kind of sketchy. For example, if there&apos;s a search
                  parameter, I&apos;ll select the value and then right-click and
                  choose to scan that specific spot. That way, I can get quick
                  results.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text185">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text186">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name15"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text187">
                  Speeding up the process of probing for vulnerabilities and
                  catching low-hanging fruit
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text188">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text189">
                  He then uses the results of the scans to drive the rest of his
                  manual testing workflow.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name93"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text190">
                  Unrivalled features for performing detailed manual analysis
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text191">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text192">
                  He then experiments with the request in Repeater to try to get
                  a deeper understanding of how the application behaves.
                </span>
              </Fragment>
            }
            sectionId="section-7"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name94"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text193">
                  The Repeater is definitely my number one tool. It lets me take
                  a request and test what happens if I modify it in a particular
                  way. This helps me to almost see under the hood of the
                  application. That&apos;s pretty huge.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text194">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text195">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name16"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text196">
                  Unrivalled features for performing detailed manual analysis
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text197">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text198">
                  The Inspector also simplifies this process by helping Owen
                  work with encoded data in requests and responses without
                  having to switch to another tool.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name95"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text199">
                  Fuzzing at scale, without writing a single line of code
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text200">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text201">
                  <span>
                    Once Owen feels that he might be onto something, he likes
                    using Intruder to perform this kind of probing at scale,
                    resending the request over and over,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/tools/intruder/uses/fuzzing"
                    className="case-study-flo-qast-link19"
                  >
                    fuzzing
                  </a>
                  <span>
                    {' '}
                    controllable inputs to detect interesting behavior and
                    trying lots of variations of potential payloads to see how
                    the application responds.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-8"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name96"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text204">
                  Intruder is really helpful for this because it means I
                  don&apos;t have to spend hours setting up a whole Python
                  script, which may not even find anything. It&apos;s really
                  nice to just be able to go &apos;Here is a list of 100 things
                  to try&apos; and just run through them real quick without
                  having to worry about it too much.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text205">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text206">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name17"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text207">
                  Fuzzing at scale, without writing a single line of code
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text208">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text209">
                  This combination enables Owen to efficiently test different
                  attack vectors and approaches for bypassing security
                  mechanisms and confirm the exploitability of potential
                  weaknesses.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name97"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text210">
                  Out-of-the-box detection of otherwise &apos;invisible&apos;
                  vulnerabilities
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text211">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text212">
                  <span>
                    Owen uses
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/collaborator"
                    className="case-study-flo-qast-link20"
                  >
                    Burp Collaborator
                  </a>
                  <span>
                    , an out-of-the-box solution for hunting for asynchronous or
                    &apos;invisible&apos; vulnerabilities. Developed in
                    conjunction with the world-class
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/research"
                    className="case-study-flo-qast-link21"
                  >
                    PortSwigger Research
                  </a>
                  <span>
                    {' '}
                    team, Collaborator provides a client and server that enable
                    you to easily detect these vulnerabilities by inducing the
                    target to make unintended outbound interactions with an
                    arbitrary external system.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-9"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name98"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text216">
                  Collaborator is a huge one. I use it a lot. It&apos;s super
                  helpful to be able to quickly see if there&apos;s an SSRF
                  vulnerability in the background, where the app will make a
                  request to any URL you provide.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text217">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text218">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name18"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text219">
                  Out-of-the-box detection of otherwise &apos;invisible&apos;
                  vulnerabilities
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text220">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text221">
                  <span>
                    He combines this with
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/research/james-kettle"
                    className="case-study-flo-qast-link22"
                  >
                    James Kettle&apos;s
                  </a>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/bappstore/2495f6fb364d48c3b6c984e226c02968"
                    className="case-study-flo-qast-link23"
                  >
                    Collaborator Everywhere
                  </a>
                  <span>
                    {' '}
                    extension, which automatically injects Collaborator payloads
                    into a variety of headers and other inputs.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name99"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text225">
                  It tosses a payload into practically every input and then I
                  can just see what comes back.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text226">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text227">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name19"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text228">
                  Customizable extensibility, powered by the community
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text229">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text230">
                  Owen uses a number of community-created extensions to add
                  support when working with specific technologies or testing for
                  specialist attack vectors.
                </span>
              </Fragment>
            }
            sectionId="section-10"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name100"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text231">
                  The customizability and extensibility is really helpful if
                  you&apos;re testing a target that has a different tech stack,
                  there are extensions you can grab that are specific to that.
                  Burp doesn&apos;t make it cumbersome like a lot of other
                  software.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text232">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text233">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name20"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text234">
                  Customizable extensibility, powered by the community
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text235">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text236">
                  <span>
                    He also loves being able to quickly create custom scan
                    checks, known as
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro/features/bchecks"
                    className="case-study-flo-qast-link24"
                  >
                    BChecks
                  </a>
                  <span>
                    , to search for specific vulnerabilities, enhancing the
                    effectiveness and accuracy of scans:
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name101"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text239">
                  There&apos;s a ton of BChecks that I use. They&apos;re my
                  go-to if I need to quickly come up with passive or active scan
                  checks. They&apos;re really helpful.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text240">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text241">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name21"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text242">
                  Customizable extensibility, powered by the community
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text243">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text244">
                  Overall, he loves that Burp simplifies this workflow, while
                  still providing enough granular control for when you need it.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name102"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text245">
                  It kind of hides the difficult stuff but still makes it
                  available if you want to get into something really advanced.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text246">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text247">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name22"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text248">
                  Automated report generation to help present findings to
                  development teams
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text249">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text250">
                  Although Owen and his team manually craft reports, they still
                  take advantage of Burp&apos;s automated reporting features to
                  save time and provide a consistent reporting format.
                </span>
              </Fragment>
            }
            sectionId="section-11"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name103"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="case-study-flo-qast-text251">
                  It&apos;s super useful to grab the example requests from the
                  scan report. These contain the payload used and mean I
                  don&apos;t have to go to Repeater and make an example request
                  myself.
                </span>
              </Fragment>
            }
            bordered
            ctaLabel={
              <Fragment>
                <span className="case-study-flo-qast-text252">Read more</span>
              </Fragment>
            }
            fontType="H5"
            extraInfo={
              <Fragment>
                <span className="case-study-flo-qast-text253">
                  Owen McCarthy, Application Security Engineer, FloQast
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name23"
            showExtraInfo={false}
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text254">
                  Automated report generation to help present findings to
                  development teams
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text255">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text256">
                  The ability to manually create an issue in Burp Suite,
                  providing your own detailed description and remediation
                  advice, helps Owen provide valuable context for developers and
                  improves the efficiency of remediation.
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name104"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="case-study-flo-qast-text257">
                  A comprehensive toolkit designed to work with complex
                  applications
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="case-study-flo-qast-text258">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="case-study-flo-qast-text259">
                  <span>
                    For Owen and the team at FloQast, Burp Suite simplifies
                    otherwise complex tasks and provides a comprehensive
                    platform for web application penetration testing. Its
                    customizable nature, extensibility, and powerful features
                    like Repeater, Intruder, and targeted scanning significantly
                    improve their efficiency and mitigate the pains they
                    experience during various stages of pentesting.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    80,000 pentesters worldwide, like Owen, are currently using
                    Burp Suite Professional to optimize their security testing.
                    Join them by
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro/trial"
                    className="case-study-flo-qast-link25"
                  >
                    requesting a fully-featured free trial of the web security
                    tester&apos;s toolkit of choice
                  </a>
                  <span>.</span>
                </span>
              </Fragment>
            }
            sectionId="section-12"
            headingType="H2"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name105"
          ></HeadingAndParagraph>
          <a href="https://portswigger.net/burp/pro/trial">
            <Button
              btnLabel={
                <Fragment>
                  <span className="case-study-flo-qast-text265">
                    TRY FOR FREE
                  </span>
                </Fragment>
              }
              iconPlacement="none"
              rootClassName="buttonroot-class-name33"
              className="case-study-flo-qast-component51"
            ></Button>
          </a>
        </SidePanelWithSlot>
      </main>
      <Footer rootClassName="footerroot-class-name15"></Footer>
    </div>
  )
}

export default CaseStudyFloQast
