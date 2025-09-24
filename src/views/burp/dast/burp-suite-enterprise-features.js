import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import ExtraNavigationEnterprise from '../../../components/extra-navigation-enterprise'
import Hero from '../../../components/hero'
import HeadingAndParagraph from '../../../components/heading-and-paragraph'
import ImageBannerWithSlotRowLayout from '../../../components/image-banner-with-slot-row-layout'
import FeatureIconCard from '../../../components/feature-icon-card'
import Quote from '../../../components/quote'
import FlatCardList from '../../../components/flat-card-list'
import BannerWithCtaAndCheckList from '../../../components/banner-with-cta-and-check-list'
import Footer from '../../../components/footer'
import './burp-suite-enterprise-features.css'

const BurpSuiteEnterpriseFeatures = (props) => {
  return (
    <div className="burp-suite-enterprise-features-container1">
      <Helmet>
        <title>Features - Burp Suite Enterprise Edition</title>
        <meta
          name="description"
          content="Burp Suite Enterprise Edition comes with an extensive set of features, including reporting, a rich API, and CI/CD integration. Find out more."
        />
        <meta
          property="og:title"
          content="Features - Burp Suite Enterprise Edition"
        />
        <meta
          property="og:description"
          content="Burp Suite Enterprise Edition comes with an extensive set of features, including reporting, a rich API, and CI/CD integration. Find out more."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name19"></Navigation>
      <ExtraNavigationEnterprise
        link1={
          <Fragment>
            <span className="burp-suite-enterprise-features-text10">
              Product Overview
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="burp-suite-enterprise-features-text11">
              Request a demo
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="burp-suite-enterprise-features-text12">
              Pricing
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="burp-suite-enterprise-features-text13">
              Prepare to set up
            </span>
          </Fragment>
        }
        rootClassName="extra-navigation-enterpriseroot-class-name"
        highlightedLink
        dropdown1TriggerLabel={
          <Fragment>
            <span className="burp-suite-enterprise-features-text14">
              Explore Burp Suite DAST
            </span>
          </Fragment>
        }
        dropdown2TriggerLabel={
          <Fragment>
            <span className="burp-suite-enterprise-features-text15">
              Resources
            </span>
          </Fragment>
        }
      ></ExtraNavigationEnterprise>
      <main className="align-center column width-100">
        <Hero
          ctaUrl="https://portswigger.net/burp/enterprise/trial"
          cta2Url="https://portswigger.net/burp/enterprise/pricing"
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-features-text16">
                Features
              </span>
            </Fragment>
          }
          showCta
          cta2Type="outline-orange"
          ctaLabel={
            <Fragment>
              <span className="burp-suite-enterprise-features-text17">
                REQUEST A DEMO
              </span>
            </Fragment>
          }
          showCta2
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-features-text18">
                Burp Suite DAST
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-suite-enterprise-features-text19">
                PRICING AND PLANS
              </span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp Suite/Enterprise Edition/burp-enterprise-dashboard-1200w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-suite-enterprise-features-text20">
                Scan it all. With the enterprise-enabled dynamic web
                vulnerability scanner.
              </span>
            </Fragment>
          }
          columnLayout="50-50"
          headingStyle="H1"
          showTopLabel
          rootClassName="heroroot-class-name18"
          mainImageAlign="start"
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-features-text21">
                Scanning Features
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-features-text22">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-features-text23">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name156"
          showParagraph={false}
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Enterprise Edition/scans-400w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name"
          imagePlacement="left"
          mainImageAlign="start"
        >
          <div className="burp-suite-enterprise-features-container2 grid-columns-2 grid">
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text24">
                    <span>
                      Catch the latest vulnerabilities with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/vulnerability-scanner"
                      className="burp-suite-enterprise-features-link1"
                    >
                      Burp Scanner
                    </a>
                    <span>
                       - the dynamic (DAST) web vulnerability scanner trusted by
                      over 16,000 organizations.
                    </span>
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text27">
                    <span>
                      Discover more potential attack surface. Burp Scanner
                      parses JSON or YAML API definitions -
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/vulnerability-scanner/api-security-testing"
                      className="burp-suite-enterprise-features-link2"
                    >
                      scanning any API endpoints
                    </a>
                    <span> it finds.</span>
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name10"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text30">
                    Set your scans to run on a daily, weekly, or even monthly
                    basis.
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name9"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text31">
                    <a
                      href="https://portswigger.net/burp/vulnerability-scanner/authenticated-scanning"
                      className="burp-suite-enterprise-features-link3"
                    >
                      Scan privileged areas of target applications
                    </a>
                    <span>
                      , even if they use complex login mechanisms like single
                      sign-on (SSO).
                    </span>
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name8"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text33">
                    <span>
                      Scale your scanning requirements as needed, with our
                      transparent
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/enterprise/pricing"
                      className="burp-suite-enterprise-features-link4"
                    >
                      subscription options
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name7"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text36">
                    <a
                      href="https://portswigger.net/burp/vulnerability-scanner/authenticated-scanning"
                      className="burp-suite-enterprise-features-link5"
                    >
                      Burp Scanner uses its embedded browser
                    </a>
                    <span>
                       to render its target - enabling it to navigate even
                      complex single-page applications (SPAs).
                    </span>
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name6"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text38">
                    Point and click scanning - just a URL required, or trigger
                    via CI/CD.
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name5"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text39">
                    <span>
                      Automated
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/application-security-testing/oast"
                      className="burp-suite-enterprise-features-link6"
                    >
                      OAST
                    </a>
                    <span>
                       was pioneered by PortSwigger, and can identify many
                      vulnerabilities with tremendous accuracy.
                    </span>
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name4"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text42">
                    Manage security more easily, with bulk actions for
                    operations like canceling scans, or launching quick scans.
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name3"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text43">
                    Specify crawl maximum link depth, reported vulnerabilities,
                    fast versus exhaustive results, and more.
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name2"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text44">
                    Use preset scan modes ranging from Lightweight to Deep, or
                    create your own custom scan configurations.
                  </span>
                </Fragment>
              }
              rootClassName="feature-icon-cardroot-class-name1"
            ></FeatureIconCard>
          </div>
        </ImageBannerWithSlotRowLayout>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-features-text45">
                Integration Features
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-features-text46">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-features-text47">
                See the industry-leading pentester tool in action. See some of
                Burp Suite Professional&apos;s top tools:
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name157"
          showParagraph={false}
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Enterprise Edition/integrate-1300w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name1"
          mainImageAlign="center"
        >
          <div className="burp-suite-enterprise-features-container3 grid-columns-2 grid">
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text48">
                    Integrate with any CI/CD platform. See vulnerabilities right
                    in your development environment.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name11"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text49">
                    Track issues with Jira, GitLab, and Trello. Auto ticket
                    generation, severity / confidence level triggers, and
                    unlimited boards.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name12"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text50">
                    Integrate scanning and security reporting into your own
                    management and orchestration systems.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name13"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text51">
                    Initiate, schedule, cancel, update, and work through your
                    scans, to get the exact data you need, with a GraphQL API.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name14"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text52">
                    <span>
                      Tailor Burp Scanner to your exact requirements, by writing
                      your own extensions, or by downloading them from the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore"
                      className="burp-suite-enterprise-features-link7"
                    >
                      BApp Store
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name15"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text55">
                    Enable users to log in easily - with a variety of SSO
                    options (SAML or LDAP, as well as SCIM). Integrate with any
                    identity provider - including ADFS, Okta, or Active
                    Directory.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name16"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text56">
                    Choose from an on-premise deployment with an interactive
                    installer, a Kubernetes deployment, or a cloud-based
                    instance.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name17"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text57">
                    Multi-user, role-based functionality for site hierarchy,
                    scan detail and reporting. Give everyone control.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name18"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text58">
                    Manually integrate configurations from Burp Suite Pro,
                    directly into your fully automated Enterprise environment.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/integrate.svg"
              rootClassName="feature-icon-cardroot-class-name19"
            ></FeatureIconCard>
          </div>
        </ImageBannerWithSlotRowLayout>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-features-text59">
                Reporting Features
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-features-text60">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-features-text61">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name158"
          showParagraph={false}
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Enterprise Edition/report-1400w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name2"
          imagePlacement="left"
          mainImageAlign="center"
        >
          <div className="burp-suite-enterprise-features-container4 grid-columns-2 grid">
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text62">
                    <span>
                      Every issue Burp Scanner finds comes with actionable
                      remediation advice from
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/research"
                      className="burp-suite-enterprise-features-link8"
                    >
                      PortSwigger Research
                    </a>
                    <span>
                       and the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/web-security"
                      className="burp-suite-enterprise-features-link9"
                    >
                      Web Security Academy
                    </a>
                    <span>.</span>
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name22"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text66">
                    Graphical dashboards allow you to view bugs by severity or
                    type. See security posture for all or just part of your
                    organization.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name23"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text67">
                    Get reports emailed to the right members of your team, to
                    tailor your communications effectively.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name24"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text68">
                    Export tailored HTML reports. Include any level of detail,
                    severity, and confidence you require.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name25"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text69">
                    View deltas and other changes to visually represent your
                    security posture&apos;s evolution. Know your attack surface.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name26"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text70">
                    Metrics include changes by issue type and severity. See when
                    and where bugs were introduced.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name27"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text71">
                    Organize issues by their class at the touch of a button.
                    Focus on the vulnerabilities you want to fix.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name28"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text72">
                    Almost all features can be controlled through an intuitive,
                    attractive UI. This opens security up to everyone.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name29"
            ></FeatureIconCard>
            <FeatureIconCard
              text={
                <Fragment>
                  <span className="burp-suite-enterprise-features-text73">
                    Check for vulnerabilities relevant to the PCI DSS standard
                    and 2021 OWASP Top 10, across your whole web portfolio.
                  </span>
                </Fragment>
              }
              iconSrc="/Icons/report1.svg"
              rootClassName="feature-icon-cardroot-class-name30"
            ></FeatureIconCard>
          </div>
        </ImageBannerWithSlotRowLayout>
        <Quote
          quote={
            <Fragment>
              <span className="burp-suite-enterprise-features-text74">
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
              <span className="burp-suite-enterprise-features-text75">
                Read more
              </span>
            </Fragment>
          }
          fontType="H3"
          extraInfo={
            <Fragment>
              <span className="burp-suite-enterprise-features-text76">
                Source: Application Security Engineer, Global 500 Insurance
                Company, TechValidate survey of PortSwigger customers
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/rr_horizontal_color_rgb-01-200h-200h.webp"
          showTopLogo={false}
          rootClassName="quoteroot-class-name44"
          showExtraInfo
        ></Quote>
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
          rootClassName="flat-card-listroot-class-name"
          contentAlignment="start"
        ></FlatCardList>
        <BannerWithCtaAndCheckList
          ctaUrl="/burp/dast/trial"
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-features-text77">
                Scale your Application Security with the Best of Breed DAST
                Scanner
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-enterprise-features-text78">
                REQUEST A DEMO
              </span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-features-text79">
                Request a demo
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          topLogoSrc="/Logos/enterprise.svg"
          ctaIconType="chevron-right"
          headingType="H2"
          showTopLogo
          rootClassName="banner-with-cta-and-check-listroot-class-name9"
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
      <Footer rootClassName="footerroot-class-name25"></Footer>
    </div>
  )
}

export default BurpSuiteEnterpriseFeatures
