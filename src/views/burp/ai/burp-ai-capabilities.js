import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import ExtraNavigationPro from '../../../components/extra-navigation-pro'
import Hero from '../../../components/hero'
import HeadingAndParagraph from '../../../components/heading-and-paragraph'
import FeaturesList from '../../../components/features-list'
import BannerWithCtaAndCheckList from '../../../components/banner-with-cta-and-check-list'
import AccordionList from '../../../components/accordion-list'
import Button from '../../../components/button'
import Footer from '../../../components/footer'
import './burp-ai-capabilities.css'

const BurpAICapabilities = (props) => {
  return (
    <div className="burp-ai-capabilities-container">
      <Helmet>
        <title>Burp AI Capabilities - PortSwigger</title>
        <meta
          name="description"
          content="Burp AI introduces a number of AI-powered capabilities designed to accelerate your workflow. Focus on the tasks that require your expertise."
        />
        <meta property="og:title" content="Burp AI - PortSwigger" />
        <meta
          property="og:description"
          content="Burp AI introduces a number of AI-powered capabilities designed to accelerate your workflow. Focus on the tasks that require your expertise."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name15"></Navigation>
      <ExtraNavigationPro
        dropdownLabel={
          <Fragment>
            <span className="burp-ai-capabilities-text10">Get certified</span>
          </Fragment>
        }
        rootClassName="extra-navigation-proroot-class-name2"
        highlightedLink="Second"
        navigationLinks={[
          {
            url: 'https://portswigger.net/burp/ai',
            label: 'Burp AI',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/burp/ai/capabilities',
            label: 'AI Capabilities',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/burp/ai#burp-ai-news',
            label: 'Burp AI News',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/burp/documentation/desktop/extensions/ai-security-privacy-data-handling',
            label: 'Privacy & Security',
            target: '_self',
          },
          {
            url: 'https://portswigger.net/burp/pro',
            label: 'Burp Suite Professional',
            target: '_self',
          },
        ]}
      ></ExtraNavigationPro>
      <main className="align-center column width-100">
        <Hero
          ctaUrl="https://portswigger.net/burp/releases#professional"
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text11">
                Burp AI capabilities
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text12">
                UPDATE TO LATEST VERSION
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text13">Burp AI</span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-ai-capabilities-text14">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp AI/cbdcb606-fd6d-42c0-9085-ba692c8d99d7-600h-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-ai-capabilities-text15">
                Burp AI introduces a number of AI-powered capabilities designed
                to accelerate your workflow, reduce human error, and help you
                focus on the tasks that require your human expertise and
                intuition.
              </span>
            </Fragment>
          }
          showTopLabel={false}
          rootClassName="heroroot-class-name12"
          mainImageAlign="center"
          subHeadingFontStyle="intro"
        ></Hero>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text16">
                Explainer: Instant AI-powered insights
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text17">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-capabilities-text18">
                No more context-switching - get AI-powered, security-focused
                insights, directly in Burp Repeater.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name143"
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://portswigger.net/burp/ai/capabilities"
          ctaType="quarternary"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text19">
                Burp AI capabilities
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/explainer-1200w-1200w.webp"
          showCtaBtn={false}
          ctaIconType="arrow-right"
          featureList={[
            {
              heading: 'Bridge knowledge gaps',
              paragraph:
                'Quickly research unfamiliar HTTP headers, cookies, and other data and their potential security implications.',
            },
            {
              heading: 'Quickly decipher code',
              paragraph:
                'Ask Burp AI to explain client-side JavaScript to you, so you can quickly understand what the code is doing, and whether it warrants deeper manual investigation, without having to decipher it line-by-line.',
            },
            {
              heading: 'Reduce context-switching',
              paragraph:
                'Eliminate the need to switch between Burp and external information sources to look things up.',
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name9"
          ctaIconPlacement="right"
        ></FeaturesList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text20">
                Explore issue: Automated vulnerability analysis
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text21">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-capabilities-text22">
                <span>
                  Performing follow-up analysis on issues identified by scan to
                  validate them and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  demonstrate impact can be tedious and time-consuming. Let Burp
                  AI investigate scanner-
                </span>
                <br></br>
                <span>identified issues just like a pentester would.</span>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name147"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text28">
                JOIN THE DISCORD
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/explore-issue-1200w-1200w.webp"
          showCtaBtn={false}
          ctaIconType="discord"
          featureList={[
            {
              heading: 'Cover more ground',
              paragraph:
                "By outsourcing some of the issue analysis to AI, you can choose to focus your time and effort where you feel it's most valuable.",
            },
            {
              heading: 'Demonstrate and escalate impact',
              paragraph:
                'Burp AI attempts to leverage the vulnerability to exfiltrate sensitive data, reach additional attack surface, and identify escalation paths, automatically generating PoCs on your behalf.',
            },
            {
              heading: 'Stay in control',
              paragraph:
                "Burp AI provides step-by-step insights into what it's attempting at each stage, along with an executive summary of the findings so far. You can intervene at any point, whether it's to take over manually or simply because you feel the issue has been explored sufficiently.",
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name11"
          imagePlacement="left"
          mainImageAlign="stretch"
          ctaIconPlacement="left"
        ></FeaturesList>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/releases#professional"
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text29">
                Free Burp AI credits - start experimenting today!
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text30">
                UPDATE TO LATEST VERSION
              </span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-ai-capabilities-text31">
                <span>
                  Experiment with AI-powered features at no additional cost.
                  Simply update Burp
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Suite Professional to the latest stable version to receive
                  10,000 free AI credits.
                </span>
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          headingType="H2"
          rootClassName="banner-with-cta-and-check-listroot-class-name8"
          ctaIconPlacement="none"
        ></BannerWithCtaAndCheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text35">
                AI-powered false positive reduction
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text36">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-capabilities-text37">
                <span>
                  Sifting through false positives can be a huge drain on already
                  stretched AppSec teams. By
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  leveraging Burp AI to perform advanced analysis, Burp Scanner
                  is able to intelligently filter
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  out false positives before they&apos;re reported. Note that
                  this feature is currently only available
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>for the Broken Access Control scan check.</span>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name144"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://portswigger.net/burp/releases#professional"
          ctaType="quarternary"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text45">
                Update to latest version
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/false-positives-ai-1200w-1200w.webp"
          showCtaBtn={false}
          ctaIconType="arrow-right"
          featureList={[
            {
              heading: 'Automate testing for broken access controls',
              paragraph:
                'Testing for access control vulnerabilities is repetitive and tedious, but has traditionally proved challenging to automate reliably. Using AI-powered false positive reduction, Burp Scanner can now detect broken access controls with significantly more accuracy.',
            },
            {
              heading: 'Less noise, more signal',
              paragraph:
                'Spend less time chasing dead ends and focus on investigating real vulnerabilities.',
            },
            {
              heading: 'Validation before reporting',
              paragraph:
                "Burp AI helps validate access control issues before they're reported, ensuring you don't get distracted by an overwhelming to-do list of irrelevant findings.",
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name10"
          imagePlacement="right"
          ctaIconPlacement="right"
        ></FeaturesList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text46">
                AI-generated login sequences
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text47">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-capabilities-text48">
                <span>
                  Manually recording login sequences to handle complex
                  authentication flows is powerful,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  but can be time-consuming and error prone. Burp AI can now
                  generate recorded login
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  sequences for you. All you need to provide is a valid username
                  and password, and it
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>handles the rest.</span>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name148"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text56">
                JOIN THE DISCORD
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/recorded-login-1200w-1200w.webp"
          showCtaBtn={false}
          ctaIconType="discord"
          featureList={[
            {
              heading: 'Simplified scan setup',
              paragraph:
                'Instantly generate recorded login sequences instead of manually navigating login flows in the browser. ',
            },
            {
              heading: 'Reliable authenticated scanning',
              paragraph:
                'Avoid common pitfalls of manual recording, such as missed interactions or unrecognized input methods, ensuring successful authentication during scans. Ensure Burp Suite can reliably access and scan authenticated areas, reducing blind spots in your security assessments.',
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name12"
          imagePlacement="left"
          mainImageAlign="stretch"
          ctaIconPlacement="left"
        ></FeaturesList>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/documentation/desktop/extensions/using-ai-extensions"
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text57">
                AI-powered extensions
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text58">READ MORE</span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-ai-capabilities-text59">
                <span>
                  With new updates to the Montoya API, you can integrate
                  AI-powered functionality to build
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>smarter, more powerful extensions.</span>
                <br></br>
                <br></br>
                <span>
                  Take advantage of your free bundle of AI credits and start
                  experimenting today.
                </span>
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          headingType="H2"
          rootClassName="banner-with-cta-and-check-listroot-class-name10"
          ctaIconPlacement="none"
        ></BannerWithCtaAndCheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text66">Burp AI FAQs</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text67">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-capabilities-text68">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name146"
          showParagraph={false}
        ></HeadingAndParagraph>
        <AccordionList
          item1Content={
            <Fragment>
              <span className="burp-ai-capabilities-item1-content text-body-1">
                No. Burp AI enhances efficiency but does not replace human
                expertise.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          item1Trigger={
            <Fragment>
              <span className="burp-ai-capabilities-text69">
                Is Burp AI replacing pentesters?
              </span>
            </Fragment>
          }
          item2Content={
            <Fragment>
              <span className="burp-ai-capabilities-item2-content text-body-1">
                No. Your data stays within PortSwigger’s secure AI platform and
                is never stored by the AI service provider or used for model
                training purposes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          item2Trigger={
            <Fragment>
              <span className="burp-ai-capabilities-text70">
                Will AI leak my sensitive data?
              </span>
            </Fragment>
          }
          item3Content={
            <Fragment>
              <span className="burp-ai-capabilities-text71">
                Yes. AI features can be fully disabled from Burp Suite’s
                settings.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          item3Trigger={
            <Fragment>
              <span className="burp-ai-capabilities-text72">
                Can I disable AI?
              </span>
            </Fragment>
          }
          item4Content={
            <Fragment>
              <span className="burp-ai-capabilities-item4-content text-body-1">
                Not currently, but we may explore local model options based on
                demand.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          item4Trigger={
            <Fragment>
              <span className="burp-ai-capabilities-text73">
                Can I use Burp AI offline?
              </span>
            </Fragment>
          }
          item5Content={
            <Fragment>
              <span className="burp-ai-capabilities-text74">
                {' '}
                You can disable AI features altogether from the setting menu in
                Burp Suite Professional.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          item5Trigger={
            <Fragment>
              <span className="burp-ai-capabilities-text75">
                So, is it possible to NOT have AI implemented out of the box on
                this new update? We cannot use public AI for this.
              </span>
            </Fragment>
          }
          item6Content={
            <Fragment>
              <span className="burp-ai-capabilities-item6-content text-body-1">
                <span>
                  {' '}
                  You can already generate AI-assisted reports using the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="http://portswigger.net/bappstore/c29264074acc4aacb5b424e6a033ba5d"
                  className="burp-ai-capabilities-link1"
                >
                  ReportLM BApp
                </a>
                <span>
                  {' '}
                  - created by one of our own, Tom SL. Find it in the BApp Store
                  to get started.
                </span>
                <br></br>
                <br></br>
                <span>
                  If you have feedback on any other extensions or AI features,
                  head over to the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://discord.com/invite/portswigger"
                  className="burp-ai-capabilities-link2"
                >
                  PortSwigger community Discord
                </a>
                <span>
                  {' '}
                  and join the conversation.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          item6Trigger={
            <Fragment>
              <span className="burp-ai-capabilities-text82">
                Since reporting is one of the most time-consuming activities and
                most hated, do you plan to create an AI-assisted report builder?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          rootClassName="accordion-listroot-class-name9"
        ></AccordionList>
        <a href="https://portswigger.net/burp/documentation/desktop/extensions/ai-security-privacy-data-handling">
          <Button
            btnLabel={
              <Fragment>
                <span className="burp-ai-capabilities-text83">
                  READ MORE FAQs
                </span>
              </Fragment>
            }
            iconPlacement="none"
            rootClassName="buttonroot-class-name38"
            className="burp-ai-capabilities-component26"
          ></Button>
        </a>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-capabilities-text84">
                Join the official PortSwigger Community
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text85">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-capabilities-text86">
                <span>
                  Performing follow-up analysis on issues identified by scan to
                  validate them and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  demonstrate impact can be tedious and time-consuming. Let Burp
                  AI investigate scanner-
                </span>
                <br></br>
                <span>identified issues just like a pentester would.</span>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name145"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-capabilities-text92">
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
          rootClassName="features-listroot-class-name8"
          imagePlacement="right"
          ctaIconPlacement="left"
        ></FeaturesList>
      </main>
      <Footer rootClassName="footerroot-class-name21"></Footer>
    </div>
  )
}

export default BurpAICapabilities
