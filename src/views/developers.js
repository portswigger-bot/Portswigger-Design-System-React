import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import Navigation from '../components/navigation'
import BannerWithCtaAndCheckList from '../components/banner-with-cta-and-check-list'
import HeadingAndParagraph from '../components/heading-and-paragraph'
import Banner from '../components/banner'
import CompanyLogos from '../components/company-logos'
import Footer from '../components/footer'
import './developers.css'

const Developers = (props) => {
  return (
    <div className="developers-container">
      <Helmet>
        <title>Secure Software Development - PortSwigger</title>
        <meta
          name="description"
          content="Secure development is the missing piece in the DevOps puzzle. Burp Suite Enterprise Edition places automated security testing right in your CI/CD pipeline."
        />
        <meta
          property="og:title"
          content="Secure Software Development - PortSwigger"
        />
        <meta
          property="og:description"
          content="Secure development is the missing piece in the DevOps puzzle. Burp Suite Enterprise Edition places automated security testing right in your CI/CD pipeline."
        />
      </Helmet>
      <LiveTagProduction rootClassName="live-tag-productionroot-class-name52"></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name5"></Navigation>
      <main className="align-center column width-100">
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/enterprise/trial"
          heading={
            <Fragment>
              <span className="developers-text10">
                Reduce the cost of security testing by moving it into your
                development pipeline
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="developers-text11">TRY FOR FREE</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="developers-text12">
                Seamless security for application development.
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          headingType="H2"
          rootClassName="banner-with-cta-and-check-listroot-class-name2"
          ctaIconPlacement="none"
        ></BannerWithCtaAndCheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="developers-text13">Meet the Swiggers</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="developers-text14">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="developers-text15">
                Secure development is the missing piece in the DevOps puzzle.
                While the Agile model has transformed how we deploy code,
                security has lagged behind. Burp Suite Enterprise Edition
                changes that - by placing scalable, automated security testing
                right in your CI/CD pipeline.
              </span>
            </Fragment>
          }
          showHeading={false}
          paragraphType="text-intro"
          rootClassName="heading-and-paragraphroot-class-name63"
        ></HeadingAndParagraph>
        <Banner
          heading={
            <Fragment>
              <span className="developers-text16">Welcome to DevSecOps</span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="developers-text17">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="developers-text18">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Black Hat Research/devsecops.svg"
          subHeading={
            <Fragment>
              <span className="developers-text19">
                <span>
                  The best development teams have a tendency to deploy code
                  frequently. This presents security teams with a problem -
                  because they then have to hunt down and fix the inevitable
                  bugs before things can go live. Wouldn&apos;t it be great if
                  you could perform security testing earlier in the development
                  lifecycle
                </span>
                <br></br>
                <br></br>
                <span>
                  {' '}
                  Enter,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.com/burp/enterprise"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="developers-link1"
                >
                  Burp Suite Enterprise Edition
                </a>
                <span>
                  . Through
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.com/solutions/devsecops"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="developers-link2"
                >
                  DevSecOps
                </a>
                <span>
                  {' '}
                  automation, our software ensures that all committed code is
                  tested for security flaws. If a weakness is found, Burp will
                  break the build. This negates the need for last-minute
                  security tests - saving you time and money - while helping to
                  keep you on the right side of industry regulations.
                </span>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          rootClassName="bannerroot-class-name3"
          headingFontStyle="H3"
          subHeadingFontStyle="body-1"
        ></Banner>
        <Banner
          heading={
            <Fragment>
              <span className="developers-text26">
                Fast feedback means you&apos;ll develop more than just secure
                software
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="developers-text27">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="developers-text28">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Black Hat Research/fast-feedback.svg"
          subHeading={
            <Fragment>
              <span className="developers-text29">
                <span>
                  Of course, most software developers aren&apos;t security
                  experts. Showing someone the vulnerabilities in their code is
                  great, but also kind of pointless if they don&apos;t know how
                  to fix them. That&apos;s why every security vulnerability
                  found by Burp Suite Enterprise Edition comes complete with
                  straightforward, up-to-date remediation advice.
                </span>
                <br></br>
                <br></br>
                <span>
                  This feedback comes straight from PortSwigger&apos;s
                  world-leading research team. And because our process teaches
                  developers to defend against attacks, it becomes an
                  educational experience. Your team will soon become pretty
                  adept at writing secure code.
                </span>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          rootClassName="bannerroot-class-name4"
          imagePlacement="left"
          headingFontStyle="H3"
          subHeadingFontStyle="body-1"
        ></Banner>
        <Banner
          heading={
            <Fragment>
              <span className="developers-text34">
                Full integration with your existing environment
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="developers-text35">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="developers-text36">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Black Hat Research/devsecops.svg"
          subHeading={
            <Fragment>
              <span className="developers-text37">
                <span>
                  Integration is a core part of the secure development
                  philosophy. Here security shifts &quot;left&quot; - happening
                  as early as possible in the development lifecycle. Developers
                  know how to fix bugs here; it&apos;s what they do best, and
                  Burp Suite Enterprise Edition blends seamlessly with their
                  workflow - so security issues get fixed like any other bug.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our process will slot right into any
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.com/developers/ci-cd-security"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="developers-link3"
                >
                  CI/CD pipeline
                </a>
                <span>
                  . Plugins are available for Jenkins and TeamCity, while a
                  universal driver allows any CI/CD platform to integrate with
                  our
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/documentation/enterprise/user-guide/api-documentation/rest"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="developers-link4"
                >
                  REST API
                </a>
                <span>
                  . Meanwhile, Jira integration makes remediation management a
                  piece of cake. Thanks to this, Burp Suite Enterprise Edition
                  will never become a bottleneck to your workflow.
                </span>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          rootClassName="bannerroot-class-name5"
          headingFontStyle="H3"
          subHeadingFontStyle="body-1"
        ></Banner>
        <Banner
          heading={
            <Fragment>
              <span className="developers-text44">
                Customizable capabilities
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="developers-text45">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="developers-text46">Burp AI</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Black Hat Research/fast-feedback.svg"
          subHeading={
            <Fragment>
              <span className="developers-text47">
                <span>
                  With secure development, flexibility is key. So, we built Burp
                  Suite Enterprise Edition with customization in mind. Not
                  interested in low severity bugs? Want to minimize false
                  positives and only look at issues with a high confidence
                  rating? Simply set your preferences and Burp Suite will do the
                  rest.
                </span>
                <br></br>
                <br></br>
                <span>
                  Burp Suite Enterprise Edition can detect a range of critical
                  vulnerabilities, including
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.com/burp/documentation/desktop/testing-workflow/input-validation/xss"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="developers-link5"
                >
                  cross-site scripting (XSS)
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
                  href="https://portswigger.com/web-security/sql-injection"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="developers-link6"
                >
                  SQL injection (SQLi)
                </a>
                <span>
                  . But it doesn&apos;t stop there. Our innovative OAST scanning
                  techniques, for instance, will find many vulnerabilities that
                  would otherwise go unnoticed.
                </span>
              </span>
            </Fragment>
          }
          columnLayout="60-40"
          rootClassName="bannerroot-class-name6"
          imagePlacement="left"
          headingFontStyle="H3"
          subHeadingFontStyle="body-1"
        ></Banner>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="developers-text54">
                You&apos;re in good company
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="developers-text55">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="developers-text56">
                <span>
                  Groups exist online who mean to harm your organization and
                  users. PortSwigger exists to stop them. Over the years
                  we&apos;ve repeatedly been first to market with new functions.
                  These are often based on entirely new vulnerabilities
                  discovered by our research team.
                </span>
                <br></br>
                <br></br>
                <span>
                  In the past, that expertise has only been available to
                  professional penetration testers. Burp Suite Enterprise
                  Edition changes that.
                </span>
                <br></br>
                <br></br>
                <span>
                  Join some of the organizations already trusting us to protect
                  their online reputation:
                </span>
              </span>
            </Fragment>
          }
          headingType="H3"
          showHeading
          paragraphType="text-intro"
          rootClassName="heading-and-paragraphroot-class-name65"
        ></HeadingAndParagraph>
        <CompanyLogos rootClassName="company-logosroot-class-name2"></CompanyLogos>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/enterprise/trial"
          heading={
            <Fragment>
              <span className="developers-text64">
                See what secure development could do for your team
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="developers-text65">TRY FOR FREE</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="developers-text66">
                Get a free trial of the latest version of Burp Suite Enterprise
                Edition.
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          headingType="H2"
          rootClassName="banner-with-cta-and-check-listroot-class-name3"
          ctaIconPlacement="none"
        ></BannerWithCtaAndCheckList>
      </main>
      <Footer rootClassName="footerroot-class-name10"></Footer>
    </div>
  )
}

export default Developers
