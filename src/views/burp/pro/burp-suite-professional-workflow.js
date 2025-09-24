import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import ExtraNavigationPro from '../../../components/extra-navigation-pro'
import Hero from '../../../components/hero'
import HeadingAndParagraph from '../../../components/heading-and-paragraph'
import FlatCardList from '../../../components/flat-card-list'
import ImageBannerWithSlotRowLayout from '../../../components/image-banner-with-slot-row-layout'
import FeatureIconCard from '../../../components/feature-icon-card'
import Quote from '../../../components/quote'
import BannerWithCtaAndCheckList from '../../../components/banner-with-cta-and-check-list'
import BlogPostCardectionPro from '../../../components/blog-post-cardection-pro'
import Footer from '../../../components/footer'
import './burp-suite-professional-workflow.css'

const BurpSuiteProfessionalWorkflow = (props) => {
  return (
    <div className="burp-suite-professional-workflow-container">
      <Helmet>
        <title>Revolutionize your workflow - PortSwigger</title>
        <meta
          name="description"
          content="Burp Suite Professional is the industry-leading toolkit powering every stage of the pentester’s workflow."
        />
        <meta property="og:title" content="Penetration testing software" />
        <meta
          property="og:description"
          content="Burp Suite Professional is the industry-leading toolkit powering every stage of the pentester’s workflow."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name24"></Navigation>
      <ExtraNavigationPro
        showDropdown
        dropdownLabel={
          <Fragment>
            <span className="burp-suite-professional-workflow-text10">
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
        rootClassName="extra-navigation-proroot-class-name4"
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
              <span className="burp-suite-professional-workflow-text11">
                Revolutionize your workflow
              </span>
            </Fragment>
          }
          showCta={false}
          cta2Type="outline-white"
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text12">
                REQUEST A DEMO
              </span>
            </Fragment>
          }
          showCta2={false}
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text13">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-suite-professional-workflow-text14">
                PRICING
              </span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp Suite/Professional Edition/pro-overview-hero-light-1200w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-suite-professional-workflow-text15">
                Burp Suite Professional is the industry-leading toolkit powering
                every stage of the pentester’s workflow.
              </span>
            </Fragment>
          }
          columnLayout="50-50"
          headingStyle="H1"
          showTopLabel
          rootClassName="heroroot-class-name20"
          showChecklist={false}
          mainImageAlign="start"
          mainImageHeight="100%"
          subHeadingFontStyle="body-1"
        ></Hero>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-professional-workflow-text16">
                <span>
                  The complete toolkit for modern
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>penetration testing</span>
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text20">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-workflow-text21">
                <span>
                  Increasingly complex web applications. Across numerous
                  domains. Integrated via a range of APIs. These are the
                  challenges
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  faced by modern pentesters - all with the added pressure of
                  delivering accurate results at speed. Built on world-class
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/research"
                  className="burp-suite-professional-workflow-link10"
                >
                  research
                </a>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Burp Suite Professional empowers the world&apos;s leading
                  pentesters through every step of their workflow.
                </span>
              </span>
            </Fragment>
          }
          sectionId="section-1"
          topImgSrc="/Icons/app-security.svg"
          showTopImg={false}
          headingType="H2"
          showTopLabel={false}
          rootClassName="heading-and-paragraphroot-class-name163"
          showParagraph={false}
          withHorizontalPadding
        ></HeadingAndParagraph>
        <FlatCardList
          cardList={[
            {
              url: '#section-1',
              icon: 'discover',
              heading: 'Discovery',
              urlLabel: 'Find out more',
              paragraph:
                'Gather intelligence, comprehensive application mapping and identify initial weaknesses.',
            },
            {
              url: '#section-2',
              icon: 'attack',
              heading: 'Attack',
              urlLabel: 'Find out more',
              paragraph:
                'Explore clues to identify vulnerabilities, validate and analyse findings, generate a proof of concept.',
            },
            {
              url: '#section-3',
              icon: 'report',
              heading: 'Reporting',
              urlLabel: 'Find out more',
              paragraph:
                'Evidence vulnerabilities, provide concise reporting and advise on remediation.',
            },
          ]}
          cardType="elevated-white"
          cardLayout="auto"
          headintFont="H3"
          showCardIcon
          rootClassName="flat-card-listroot-class-name3"
          showParagraph
          contentAlignment="start"
        ></FlatCardList>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Professional Edition/workflow-discovery-1200w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name4"
          imagePlacement="left"
          mainImageAlign="stretch"
          sectionSpacing="L"
        >
          <div className="gap-m justify-start column height-100 align-start">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text28">
                    Discovery: Map the complex attack surfaces of modern web
                    apps
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text29">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text30">
                    Gather intelligence. Comprehensively map your target
                    application. Identify initial weaknesses.
                  </span>
                </Fragment>
              }
              headingType="H2"
              rootClassName="heading-and-paragraphroot-class-name164"
            ></HeadingAndParagraph>
            <div className="gap-s column">
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text31">
                      <span>
                        Intercept, log, and manipulate HTTP, HTTPS, and
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://portswigger.net/burp/documentation/desktop/testing-workflow/websockets"
                        className="burp-suite-professional-workflow-link11"
                      >
                        WebSockets
                      </a>
                      <span>
                        {' '}
                        traffic with no configuration in Burp’s built-in
                        browser. 
                      </span>
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
                rootClassName="feature-icon-cardroot-class-name58"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text34">
                      <span>
                        Unrivalled
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://portswigger.net/burp/vulnerability-scanner"
                        className="burp-suite-professional-workflow-link12"
                      >
                        Burp Scanner
                      </a>
                      <span>
                        {' '}
                        automates mapping the attack surface in minutes, rather
                        than hours.
                      </span>
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
                rootClassName="feature-icon-cardroot-class-name62"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text37">
                      Keep a persistent log of your interactions with the
                      target, reducing context-switching with the sitemap and
                      proxy history. 
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
                rootClassName="feature-icon-cardroot-class-name61"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text38">
                      <span>
                        Test everything from WebSockets and SPAs, to
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://portswigger.net/burp/documentation/desktop/settings/suite/rest-api"
                        className="burp-suite-professional-workflow-link13"
                      >
                        REST
                      </a>
                      <span>
                        ,
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://portswigger.net/burp/documentation/desktop/testing-workflow/working-with-graphql"
                        className="burp-suite-professional-workflow-link14"
                      >
                        GraphQL
                      </a>
                      <span>
                        , and SOAP APIs. Burp is the only tool for
                        comprehensively testing the modern web.
                      </span>
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
                rootClassName="feature-icon-cardroot-class-name60"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text42">
                      Eliminate noise with advanced filtering and focus on the
                      most relevant information.
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Professional Edition/automated-scanning.svg"
                rootClassName="feature-icon-cardroot-class-name59"
              ></FeatureIconCard>
            </div>
          </div>
        </ImageBannerWithSlotRowLayout>
        <Quote
          quote={
            <Fragment>
              <span className="burp-suite-professional-workflow-text43">
                &quot;I love Burp Scanner - it&apos;s probably my number one
                feature. I can remove a lot of the pain - it means I can focus
                on manual testing.”
              </span>
            </Fragment>
          }
          ctaUrl="/customers"
          showCta={false}
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text44">
                Read more
              </span>
            </Fragment>
          }
          fontType="H3"
          extraInfo={
            <Fragment>
              <span className="burp-suite-professional-workflow-text45">
                {' '}
                Application Security Pentester, AppSec team
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/cal-poly-logo-1200w-200h.webp"
          showTopLogo={false}
          rootClassName="quoteroot-class-name47"
          showExtraInfo
        ></Quote>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Professional Edition/workflow-attack-1200w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name6"
          imagePlacement="right"
          mainImageAlign="stretch"
          sectionSpacing="L"
        >
          <div className="gap-m justify-start column height-100 align-start">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text46">
                    Attack: Leverage best-in-class manual and automated tools to
                    identity vulnerabilities
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text47">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text48">
                    Identify specific functionality or requests to test.
                    Validate your findings. Generate a proof of concept.
                  </span>
                </Fragment>
              }
              headingType="H2"
              rootClassName="heading-and-paragraphroot-class-name166"
            ></HeadingAndParagraph>
            <div className="gap-s column">
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text49">
                      <a
                        href="https://portswigger.net/burp/documentation/desktop/tools/intruder"
                        className="burp-suite-professional-workflow-link15"
                      >
                        Burp Intruder
                      </a>
                      <span>
                        {' '}
                        enables rapid fuzzing without writing a single line of
                        code.
                      </span>
                    </span>
                  </Fragment>
                }
                iconSrc="/Icons/automated-attacks.svg"
                rootClassName="feature-icon-cardroot-class-name68"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text51">
                      Automate vulnerability scanning at scale. 
                    </span>
                  </Fragment>
                }
                iconSrc="/Icons/automated-attacks.svg"
                rootClassName="feature-icon-cardroot-class-name69"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text52">
                      <span>
                        Take advantage of powerful techniques innovated by
                        PortSwigger’s research team with built-in manual testing
                        features in
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://portswigger.net/burp/documentation/collaborator"
                        className="burp-suite-professional-workflow-link16"
                      >
                        Burp Collaborator
                      </a>
                      <span>. </span>
                    </span>
                  </Fragment>
                }
                iconSrc="/Icons/automated-attacks.svg"
                rootClassName="feature-icon-cardroot-class-name70"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text55">
                      <span>
                        Conquer client-side attack surface without trawling
                        through thousands of lines of JavaScript with
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://portswigger.net/burp/documentation/desktop/tools/dom-invader"
                        className="burp-suite-professional-workflow-link17"
                      >
                        DOM Invader
                      </a>
                      <span>.</span>
                    </span>
                  </Fragment>
                }
                iconSrc="/Icons/automated-attacks.svg"
                rootClassName="feature-icon-cardroot-class-name71"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text58">
                      <span>
                        Unrivalled
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://portswigger.net/bappstore"
                        className="burp-suite-professional-workflow-link18"
                      >
                        extensibility
                      </a>
                      <span>
                        . Leverage 10+ years of expertise from the Burp
                        community.
                      </span>
                    </span>
                  </Fragment>
                }
                iconSrc="/Icons/automated-attacks.svg"
                rootClassName="feature-icon-cardroot-class-name72"
              ></FeatureIconCard>
            </div>
          </div>
        </ImageBannerWithSlotRowLayout>
        <Quote
          quote={
            <Fragment>
              <span className="burp-suite-professional-workflow-text61">
                “You can&apos;t really conduct a web app pentest as a whole
                without Burp Suite Professional. It would take too much time and
                be super tedious. For me, Burp is invaluable.&quot;
              </span>
            </Fragment>
          }
          ctaUrl="/customers"
          showCta={false}
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text62">
                Read more
              </span>
            </Fragment>
          }
          fontType="H3"
          extraInfo={
            <Fragment>
              <span className="burp-suite-professional-workflow-text63">
                {' '}
                Johan Persson, QueenSec
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/cal-poly-logo-1200w-200h.webp"
          showTopLogo={false}
          rootClassName="quoteroot-class-name49"
          showExtraInfo
        ></Quote>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Professional Edition/workflow-report-1200w-1200w.webp"
          columnLayout="60-40"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name5"
          imagePlacement="left"
          mainImageAlign="stretch"
          sectionSpacing="L"
        >
          <div className="gap-m justify-start column height-100 align-start">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text64">
                    Reporting: Automatic logging provides centralised data to
                    extract as you need
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text65">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="burp-suite-professional-workflow-text66">
                    Summarise your findings. Provide succinct, but valuable
                    reports in numerous formats for remediation.
                  </span>
                </Fragment>
              }
              headingType="H2"
              rootClassName="heading-and-paragraphroot-class-name165"
            ></HeadingAndParagraph>
            <div className="gap-s column">
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text67">
                      <span>
                        Provide as much detail as you need with automated
                        evidence collection and documentation across
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://portswigger.net/burp/pro/features"
                        className="burp-suite-professional-workflow-link19"
                      >
                        Burp’s toolkit
                      </a>
                      <span>.</span>
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
                rootClassName="feature-icon-cardroot-class-name63"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text70">
                      Selectively export data and log notes as you go for
                      streamlined writing of reports.
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
                rootClassName="feature-icon-cardroot-class-name64"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text71">
                      Burp Scanner’s ‘Path to issue’ makes it simple to write
                      accurate reproduction steps for colleagues or clients.
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
                rootClassName="feature-icon-cardroot-class-name65"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text72">
                      Automatically generate PoCs to quickly demonstrate the
                      problem for key stakeholders. 
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
                rootClassName="feature-icon-cardroot-class-name66"
              ></FeatureIconCard>
              <FeatureIconCard
                text={
                  <Fragment>
                    <span className="burp-suite-professional-workflow-text73">
                      Fully automated report generation you can trust from the
                      leading web application security toolkit.
                    </span>
                  </Fragment>
                }
                iconSrc="/Pages/Burp Suite/Performance Upgrades/penetration-testing1.svg"
                rootClassName="feature-icon-cardroot-class-name67"
              ></FeatureIconCard>
            </div>
          </div>
        </ImageBannerWithSlotRowLayout>
        <Quote
          quote={
            <Fragment>
              <span className="burp-suite-professional-workflow-text74">
                “It&apos;s extremely useful to be able to generate a
                fully-functioning proof-of-concept in two clicks. If this
                feature didn&apos;t exist, then it would take me a long time to
                write one myself.”
              </span>
            </Fragment>
          }
          ctaUrl="/customers"
          showCta={false}
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text75">
                Read more
              </span>
            </Fragment>
          }
          fontType="H3"
          extraInfo={
            <Fragment>
              <span className="burp-suite-professional-workflow-text76">
                Lucas Renc, Vendavo
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/cal-poly-logo-1200w-200h.webp"
          showTopLogo={false}
          rootClassName="quoteroot-class-name48"
          showExtraInfo
        ></Quote>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/pro/trial"
          heading={
            <Fragment>
              <span className="burp-suite-professional-workflow-text77">
                Try Burp Suite Professional for free
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text78">
                TRY FOR FREE
              </span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-suite-professional-workflow-text79">
                The most complete and widely used pentesting toolkit available.
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          topLogoSrc="/Logos/enterprise.svg"
          ctaIconType="chevron-right"
          headingType="H2"
          showTopLogo={false}
          rootClassName="banner-with-cta-and-check-listroot-class-name13"
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
        <BlogPostCardectionPro
          card1URL="https://portswigger.net/research"
          card2URL="https://portswigger.net/web-security"
          card3URL="https://portswigger.net/discord-community"
          card1Text={
            <Fragment>
              <span className="burp-suite-professional-workflow-description1 text-body-1">
                Stay ahead of the latest hacking techniques with our
                world-leading research.
              </span>
            </Fragment>
          }
          card2text={
            <Fragment>
              <span className="burp-suite-professional-workflow-description2 text-body-1">
                Hone your craft in our Web Security Academy.
              </span>
            </Fragment>
          }
          card1Heading={
            <Fragment>
              <span className="burp-suite-professional-workflow-text80">
                PortSwigger Research
              </span>
            </Fragment>
          }
          card2Heading={
            <Fragment>
              <span className="burp-suite-professional-workflow-text81">
                Web Security Academy
              </span>
            </Fragment>
          }
          card3Heading={
            <Fragment>
              <span className="burp-suite-professional-workflow-text82">
                PortSwigger Discord
              </span>
            </Fragment>
          }
          card1ImageAlt="PortSwigger Research"
          card1ImageSrc="/Pages/Burp Suite/Professional Edition/research-blog-200h-1200w.webp"
          card2ImageSrc="/Pages/Burp Suite/Professional Edition/getting-started-with-the-web-security-academy-200h-1200w.webp"
          rootClassName="blog-post-cardection-proroot-class-name"
          card2ButtonSize="large"
          card3Description={
            <Fragment>
              <span className="burp-suite-professional-workflow-description3 text-body-1">
                A space dedicated to interacting with other Burp users and
                AppSec professionals.
              </span>
            </Fragment>
          }
          card1ButtonBtnType="quarternary"
          card1ButtonBtnLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text83">
                Find out more
              </span>
            </Fragment>
          }
          card1ButtonIconType="arrow-right"
          card2ButtonBtnLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text84">
                Find out more
              </span>
            </Fragment>
          }
          card3ButtonBtnLabel={
            <Fragment>
              <span className="burp-suite-professional-workflow-text85">
                Find out more
              </span>
            </Fragment>
          }
        ></BlogPostCardectionPro>
      </main>
      <Footer rootClassName="footerroot-class-name30"></Footer>
    </div>
  )
}

export default BurpSuiteProfessionalWorkflow
