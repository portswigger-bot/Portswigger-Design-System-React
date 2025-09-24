import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../components/live-tag-production'
import Navigation from '../../components/navigation'
import ExtraNavigationEnterprise from '../../components/extra-navigation-enterprise'
import Hero from '../../components/hero'
import Quote from '../../components/quote'
import FlatCardList from '../../components/flat-card-list'
import HeadingAndParagraph from '../../components/heading-and-paragraph'
import Features from '../../components/features'
import MediaSection from '../../components/media-section'
import CompanyLogos from '../../components/company-logos'
import BannerWithCtaAndCheckList from '../../components/banner-with-cta-and-check-list'
import Footer from '../../components/footer'
import './burp-suite-enterprise.css'

const BurpSuiteEnterprise = (props) => {
  return (
    <div className="burp-suite-enterprise-container">
      <Helmet>
        <title>Burp Suite DAST | PortSwigger</title>
        <meta
          name="description"
          content="Unburden your security team, empower your developers. Automated DAST scanning without limits. Built on the Burp technology your security teams already trust."
        />
        <meta property="og:title" content="Burp Suite DAST | PortSwigger" />
        <meta
          property="og:description"
          content="Unburden your security team, empower your developers. Automated DAST scanning without limits. Built on the Burp technology your security teams already trust."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name22"></Navigation>
      <ExtraNavigationEnterprise
        link1={
          <Fragment>
            <span className="burp-suite-enterprise-text10">
              Product Overview
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="burp-suite-enterprise-text11">Request a demo</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="burp-suite-enterprise-text12">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="burp-suite-enterprise-text13">
              Prepare to set up
            </span>
          </Fragment>
        }
        rootClassName="extra-navigation-enterpriseroot-class-name2"
        highlightedLink={1}
        dropdown1TriggerLabel={
          <Fragment>
            <span className="burp-suite-enterprise-text14">
              Explore Burp Suite DAST
            </span>
          </Fragment>
        }
        dropdown2TriggerLabel={
          <Fragment>
            <span className="burp-suite-enterprise-text15">Resources</span>
          </Fragment>
        }
      ></ExtraNavigationEnterprise>
      <main className="align-center column width-100">
        <Hero
          ctaUrl="https://portswigger.net/burp/enterprise/trial.html"
          cta2Url="https://portswigger.net/burp/dast/pricing"
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-text16">
                Scale your AppSec, unburden your security team
              </span>
            </Fragment>
          }
          showCta
          cta2Type="outline-white"
          ctaLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text17">
                REQUEST A DEMO
              </span>
            </Fragment>
          }
          showCta2
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text18">
                Burp Suite DAST
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-suite-enterprise-text19">PRICING</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp Suite/Enterprise Edition/burp-enterprise-dashboard-1200w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-suite-enterprise-text20">
                Automated DAST scanning without limits. Built on the Burp
                technology your security teams already trust.
              </span>
            </Fragment>
          }
          columnLayout="50-50"
          headingStyle="H1"
          showTopLabel
          rootClassName="heroroot-class-name19"
          showChecklist
          mainImageAlign="stretch"
          mainImageHeight="100%"
          subHeadingFontStyle="body-1"
        ></Hero>
        <Quote
          quote={
            <Fragment>
              <span className="burp-suite-enterprise-text21">
                &quot;The scanning engine is loaded with modern vulnerability
                detection engines. Sophisticated attacks are identified with
                ease with a detailed explanation. The ability to reproduce the
                issue using the proof of concept from the results provides a
                detailed level of understanding and the corresponding fix.&quot;
              </span>
            </Fragment>
          }
          ctaUrl="/customers"
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text22">Read more</span>
            </Fragment>
          }
          fontType="H3"
          extraInfo={
            <Fragment>
              <span className="burp-suite-enterprise-text23">
                Source: Application Security Engineer, Global 500 Insurance
                Company, TechValidate survey of PortSwigger customers
              </span>
            </Fragment>
          }
          topLogoSrc="/external/sap_2011_logo.svg"
          showTopLogo
          rootClassName="quoteroot-class-name41"
          showExtraInfo
        ></Quote>
        <FlatCardList
          cardList={[
            {
              url: '#section-1',
              icon: 'app-security',
              heading: 'Secure your whole web portfolio',
              urlLabel: 'Find out more',
              paragraph:
                'Scale without resource limitations. Automate trusted dynamic scans right across your portfolio.',
            },
            {
              url: '#section-2',
              icon: 'catch-bugs',
              heading: 'Integrate security with development',
              urlLabel: 'Find out more',
              paragraph:
                'Remove bottlenecks. Integrate dynamic scanning, see fewer false positives, and avoid alert fatigue.',
            },
            {
              url: '#section-3',
              icon: 'secure-code',
              heading: 'Free time for AppSec to do more',
              urlLabel: 'Find out more',
              paragraph:
                'Contribute without constraining development. DevSecOps frees AppSec time to do more.',
            },
          ]}
          cardType="elevated-white"
          cardLayout="auto"
          headintFont="H4"
          showCardIcon
          rootClassName="flat-card-listroot-class-name1"
          showParagraph
          contentAlignment="start"
        ></FlatCardList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-text24">
                Secure your whole web portfolio
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text25">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-text26">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          sectionId="section-1"
          topImgSrc="/Icons/app-security.svg"
          showTopImg
          headingType="H2"
          showTopLabel={false}
          rootClassName="heading-and-paragraphroot-class-name159"
          showParagraph={false}
          withHorizontalPadding
        ></HeadingAndParagraph>
        <Features
          ctaUrl="/burp/enterprise/features"
          mainImgSrc="/Pages/Burp Suite/Enterprise Edition/issues-over-time-03-1200w-1200w.webp"
          showCtaBtn
          feature1Text={
            <Fragment>
              <span className="burp-suite-enterprise-text27">
                Perform recurring dynamic (DAST) scans across thousands of
                sites. Use bulk actions to manage scanning at scale, or set
                sites up individually; all you need is a URL.
              </span>
            </Fragment>
          }
          feature2Text={
            <Fragment>
              <span className="burp-suite-enterprise-text28">
                Intuitive dashboards help to identify trends over time. Get scan
                reports by email, export to other tools, and produce reports for
                individual compliance standards.
              </span>
            </Fragment>
          }
          feature3Text={
            <Fragment>
              <span className="burp-suite-enterprise-text29">
                Easy integration with any CI/CD platform, native support for
                Jira, GitLab, and Trello, and a rich GraphQL API - to easily
                incorporate security within your existing software development
                processes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          feature4Text={
            <Fragment>
              <span className="burp-suite-enterprise-text30">
                <a
                  href="https://portswigger.net/burp/enterprise/pricing"
                  className="burp-suite-enterprise-link1"
                >
                  Subscription options
                </a>
                <span>
                  {' '}
                  that enable companies of any size to scan at scale. Maximum
                  ROI - with no strings attached.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          nrOfFeatures={4}
          rootClassName="featuresroot-class-name3"
          mainImageAlign="start"
          feature1Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text32">
                Set up with ease, report with simplicity
              </span>
            </Fragment>
          }
          feature2Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text33">
                Make your security posture visible
              </span>
            </Fragment>
          }
          feature3Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text34">
                DevSecOps integration
              </span>
            </Fragment>
          }
          feature4Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text35">
                Reduce risk without increasing costs
              </span>
            </Fragment>
          }
        ></Features>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-text36">
                Integrate security with development
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text37">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-text38">
                See the industry-leading pentester tool in action. See some of
                Burp Suite Professional&apos;s top tools:
              </span>
            </Fragment>
          }
          sectionId="section-2"
          topImgSrc="/Icons/catch-bugs.svg"
          showTopImg
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name160"
          showParagraph={false}
        ></HeadingAndParagraph>
        <Features
          ctaUrl="/burp/enterprise/features"
          mainImgSrc="/Pages/Burp Suite/Enterprise Edition/jenkins-jira-integration-2-01-1200w-1200w.webp"
          showCtaBtn
          feature1Text={
            <Fragment>
              <span className="burp-suite-enterprise-text39">
                Perform recurring dynamic (DAST) scans across thousands of
                sites. Use bulk actions to manage scanning at scale, or set
                sites up individually; all you need is a URL.
              </span>
            </Fragment>
          }
          feature2Text={
            <Fragment>
              <span className="burp-suite-enterprise-text40">
                Intuitive dashboards help to identify trends over time. Get scan
                reports by email, export to other tools, and produce reports for
                individual compliance standards.
              </span>
            </Fragment>
          }
          feature3Text={
            <Fragment>
              <span className="burp-suite-enterprise-text41">
                Easy integration with any CI/CD platform, native support for
                Jira, GitLab, and Trello, and a rich GraphQL API - to easily
                incorporate security within your existing software development
                processes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          feature4Text={
            <Fragment>
              <span className="burp-suite-enterprise-text42">
                <a
                  href="https://portswigger.net/burp/enterprise/pricing"
                  className="burp-suite-enterprise-link2"
                >
                  Subscription options
                </a>
                <span>
                  {' '}
                  that enable companies of any size to scan at scale. Maximum
                  ROI - with no strings attached.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          nrOfFeatures={4}
          rootClassName="featuresroot-class-name4"
          imagePlacement="left"
          mainImageAlign="end"
          feature1Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text44">
                Set up with ease, report with simplicity
              </span>
            </Fragment>
          }
          feature2Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text45">
                Make your security posture visible
              </span>
            </Fragment>
          }
          feature3Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text46">
                DevSecOps integration
              </span>
            </Fragment>
          }
          feature4Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text47">
                Reduce risk without increasing costs
              </span>
            </Fragment>
          }
        ></Features>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-text48">
                Free time for AppSec to do more
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text49">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-text50">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          sectionId="section-3"
          topImgSrc="/Icons/secure-code.svg"
          showTopImg
          headingType="H2"
          showTopLabel={false}
          rootClassName="heading-and-paragraphroot-class-name162"
          showParagraph={false}
          withHorizontalPadding
        ></HeadingAndParagraph>
        <Features
          ctaUrl="/burp/enterprise/features"
          mainImgSrc="/Pages/Burp Suite/Enterprise Edition/issues-over-time-03-1200w-1200w.webp"
          showCtaBtn
          feature1Text={
            <Fragment>
              <span className="burp-suite-enterprise-text51">
                Always-on scanning keeps your reports up to date. Prioritize
                vulnerabilities using filters to deal with them effectively.
              </span>
            </Fragment>
          }
          feature2Text={
            <Fragment>
              <span className="burp-suite-enterprise-text52">
                <span>
                  Gold standard scanning,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/research"
                  className="burp-suite-enterprise-link3"
                >
                  powered by PortSwigger Research
                </a>
                <span>
                   and trusted at over 17,000 organizations worldwide. With
                  remediation for every vulnerability you find, it&apos;s
                  designed to scan the modern web.
                </span>
              </span>
            </Fragment>
          }
          feature3Text={
            <Fragment>
              <span className="burp-suite-enterprise-text55">
                Take control with custom scan configurations and Burp extensions
                (BApps) - to help you hunt down even the trickiest bugs while
                minimizing false positives.
              </span>
            </Fragment>
          }
          feature4Text={
            <Fragment>
              <span className="burp-suite-enterprise-text56">
                <a
                  href="https://portswigger.net/burp/enterprise/pricing"
                  className="burp-suite-enterprise-link4"
                >
                  Subscription options
                </a>
                <span>
                  {' '}
                  that enable companies of any size to scan at scale. Maximum
                  ROI - with no strings attached.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          nrOfFeatures={3}
          rootClassName="featuresroot-class-name5"
          mainImageAlign="start"
          feature1Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text58">
                Free time to eliminate vulnerabilities
              </span>
            </Fragment>
          }
          feature2Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text59">
                Work with Burp Scanner
              </span>
            </Fragment>
          }
          feature3Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text60">
                Customize and control
              </span>
            </Fragment>
          }
          feature4Heading={
            <Fragment>
              <span className="burp-suite-enterprise-text61">
                Reduce risk without increasing costs
              </span>
            </Fragment>
          }
        ></Features>
        <MediaSection
          ctaLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text62">BUTTON</span>
            </Fragment>
          }
          imageSrc="/Pages/Burp Suite/Enterprise Edition/brands-around-the-world.svg"
          rootClassName="media-sectionroot-class-name1"
        ></MediaSection>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-text63">
                Powered by Burp Suite technology trusted at over 17,000
                organizations worldwide
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text64">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-text65">
                <span>
                  The same Burp Scanner you know and love - scaled for the
                  enterprise. Driven by PortSwigger&apos;s world-leading
                  cybersecurity research team, it can find everything from
                  classic bugs to the very latest vulnerabilities.
                </span>
                <br></br>
                <br></br>
                <span>
                  Burp Scanner&apos;s dynamic (DAST) approach maximizes
                  coverage, while minimizing false positives, without the need
                  to instrument code. In fact, it&apos;s capable of finding many
                  critical vulnerabilities that even an experienced manual
                  tester could miss.
                </span>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name161"
          showParagraph
        ></HeadingAndParagraph>
        <Quote
          quote={
            <Fragment>
              <span className="burp-suite-enterprise-text70">
                &quot;Burp Suite DAST frees our AppSec team to spend their time
                where it&apos;s most valuable.&quot;
              </span>
            </Fragment>
          }
          ctaUrl="/customers"
          showCta={false}
          ctaLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text71">Read more</span>
            </Fragment>
          }
          fontType="H3"
          extraInfo={
            <Fragment>
              <span className="burp-suite-enterprise-text72">
                Source: Customer case study - California Polytechnic State
                University
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/cal-poly-logo-1200w-200h.webp"
          showTopLogo
          rootClassName="quoteroot-class-name45"
          showExtraInfo
        ></Quote>
        <CompanyLogos
          image1Src="/Pages/Burp Suite/Enterprise Edition/sap-grey.svg"
          image2Src="/Pages/Burp Suite/Enterprise Edition/expedia-group-grey.svg"
          image3Src="/Pages/Burp Suite/Enterprise Edition/bendigo-bank-grey.svg"
          image4Src="/Pages/Burp Suite/Enterprise Edition/thrifty-grey.svg"
          image5Src="/Pages/Burp Suite/Enterprise Edition/p-and-g-grey.svg"
          rootClassName="company-logosroot-class-name7"
        ></CompanyLogos>
        <FlatCardList
          cardList={[
            {
              url: '/burp/enterprise/features',
              heading: 'Features',
              urlLabel: 'Find out more',
            },
            {
              url: '/burp/enterprise/pricing',
              heading: 'Pricing',
              urlLabel: 'Find out more',
            },
            {
              url: 'https://portswigger.net/findareseller',
              heading: 'Resellers',
              urlLabel: 'Find out more',
            },
          ]}
          cardType="elevated-white"
          cardLayout="auto"
          ctaIconType="arrow-right"
          headintFont="H4"
          rootClassName="flat-card-listroot-class-name2"
          contentAlignment="start"
        ></FlatCardList>
        <BannerWithCtaAndCheckList
          ctaUrl="/burp/dast/trial"
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-text73">
                Scale your Application Security with the Best of Breed DAST
                Scanner
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-enterprise-text74">
                REQUEST A DEMO
              </span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-text75">
                Request a demo
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          topLogoSrc="/Logos/enterprise.svg"
          ctaIconType="chevron-right"
          headingType="H2"
          showTopLogo
          rootClassName="banner-with-cta-and-check-listroot-class-name11"
          showCheckList
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
      <Footer rootClassName="footerroot-class-name28"></Footer>
    </div>
  )
}

export default BurpSuiteEnterprise
