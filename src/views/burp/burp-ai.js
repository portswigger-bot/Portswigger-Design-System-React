import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../../components/navigation'
import ExtraNavigationPro from '../../components/extra-navigation-pro'
import Hero from '../../components/hero'
import MediaSection from '../../components/media-section'
import HeadingAndParagraph from '../../components/heading-and-paragraph'
import FeaturesList from '../../components/features-list'
import BannerWithCtaAndCheckList from '../../components/banner-with-cta-and-check-list'
import Quote from '../../components/quote'
import NewsCardsSectionBurpAI from '../../components/news-cards-section-burp-ai'
import AccordionList from '../../components/accordion-list'
import Button from '../../components/button'
import Footer from '../../components/footer'
import './burp-ai.css'

const BurpAI = (props) => {
  return (
    <div className="burp-ai-container">
      <Helmet>
        <title>Burp AI - PortSwigger</title>
        <meta
          name="description"
          content="Hack smarter, not harder. Seamlessly integrate trusted AI capabilities into Burp Suite - on your terms with Burp AI."
        />
        <meta property="og:title" content="Burp AI - PortSwigger" />
        <meta
          property="og:description"
          content="Hack smarter, not harder. Seamlessly integrate trusted AI capabilities into Burp Suite - on your terms with Burp AI."
        />
      </Helmet>
      <Navigation rootClassName="navigationroot-class-name14"></Navigation>
      <ExtraNavigationPro
        dropdownLabel={
          <Fragment>
            <span className="burp-ai-text10">Get certified</span>
          </Fragment>
        }
        rootClassName="extra-navigation-proroot-class-name1"
        highlightedLink="First"
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
          ctaUrl="https://www.google.com/url?q=https://portswigger.net/burp/releases%23professional&amp;sa=D&amp;source=docs&amp;ust=1758615560049740&amp;usg=AOvVaw0emx7nHRqEPMCbCzVSglKd"
          heading={
            <Fragment>
              <span className="burp-ai-text11">
                Meet your agentic AI pentesting partner
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text12">
                <span>GET STARTED</span>
                <br></br>
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-text15">Burp AI</span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="burp-ai-text16">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Burp AI/cbdcb606-fd6d-42c0-9085-ba692c8d99d7-600h-1200w.webp"
          subHeading={
            <Fragment>
              <span className="burp-ai-text17">
                <span>
                  Cut through repetitive tasks, validate findings faster, and
                  get expert AI insight - all so you can spend more time chasing
                  the bugs that matter.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span className="burp-ai-text21">
                  Your skills, your control; just faster, sharper, smarter.
                </span>
              </span>
            </Fragment>
          }
          showTopLabel
          rootClassName="heroroot-class-name14"
          mainImageAlign="center"
          mainImageHeight="100%"
          subHeadingFontStyle="intro"
        ></Hero>
        <MediaSection
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text22">BUTTON</span>
            </Fragment>
          }
          imageSrc="/Pages/Burp AI/4_bypassfiltersandinputsanitization-1200w.png"
          rootClassName="media-sectionroot-class-name8"
        ></MediaSection>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-text23">
                Pentesting without the grind
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-text24">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-text25">
                <span>
                  Introducing your on-demand AI pentesting partner - now built
                  into Repeater in Burp Suite Professional - designed to help
                  you spend more time finding vulnerabilities, and less time
                  wrestling noise.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name138"
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://portswigger.net/burp/documentation/desktop/burp-ai/ai-credits"
          ctaType="quarternary"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text28">
                New to Burp AI? Get 10,000 free credits.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/explore-issue-1200w-1200w.webp"
          showCtaBtn={false}
          ctaIconType="arrow-right"
          featureList={[
            {
              heading: 'Stay sharp, stay fast',
              paragraph:
                'Offload the grunt work (scanning noise, repetitive validation, report drafting) so you can focus on high-value testing.',
            },
            {
              heading: 'Like having a peer on tap',
              paragraph:
                'Burp AI feels like a senior tester in your corner, suggesting angles, validating exploits, and helping you think through complex problems.',
            },
            {
              heading: 'Adapted to your workflow',
              paragraph:
                'Whether you’re chasing a bug bounty or deep into a client engagement, Burp AI flexes to your workflow without derailing it.',
            },
            {
              heading: 'Confidence without compromise',
              paragraph:
                'AI augments your expertise but never replaces it: you stay in control, driving the test, while AI speeds up the path to insight.',
            },
          ]}
          columnLayout="40-60"
          rootClassName="features-listroot-class-name6"
          ctaIconPlacement="right"
        ></FeaturesList>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/documentation/desktop/burp-ai/ai-credits"
          heading={
            <Fragment>
              <span className="burp-ai-text29">
                New to Burp AI? Get started with 10,000 free credits.
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text30">FIND OUT MORE</span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-ai-text31">
                <span>
                  Experiment with AI-powered features at no additional cost.
                  Every Burp
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Suite Professional user starts with 10,000 free AI credits to
                  help you get started.
                </span>
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          headingType="H2"
          rootClassName="banner-with-cta-and-check-listroot-class-name7"
          ctaIconPlacement="none"
        ></BannerWithCtaAndCheckList>
        <MediaSection
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text35">BUTTON</span>
            </Fragment>
          }
          imageSrc="/Pages/Burp AI/tom-stacey-discord-quote-200h.png"
          rootClassName="media-sectionroot-class-name6"
        ></MediaSection>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-text36">Burp AI - Now in Repeater</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-text37">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-text38"></span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name185"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://www.google.com/url?q=https://portswigger.net/burp/releases%23professional&amp;sa=D&amp;source=docs&amp;ust=1758615560048325&amp;usg=AOvVaw2toKvVnp1B83OwAHCn8QNp"
          ctaType="primary"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text39">
                <span>TRY BURP AI TODAY</span>
                <br></br>
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/1_whatisburpai-1200w.gif"
          showCtaBtn
          ctaIconType="airplay"
          featureList={[
            {
              heading: '',
              paragraph:
                'From “help me with this”, all the way to “conduct a full analysis”, prompting Burp AI in Repeater helps you push through roadblocks, validate findings, and automate the heavy lifting - all while you stay in control.',
            },
            {
              heading: '',
              paragraph:
                'Imagine having an AI-powered security expert at your side at all times: one who reduces time-to-insight and time-to-impact, so you can focus on the creative, high-value parts of testing.',
            },
            {
              heading: '',
              paragraph:
                'Burp AI doesn’t replace your expertise - it augments it. By taking on the grunt work, it accelerates your progress and empowers you to do more, faster, and with greater confidence.',
            },
          ]}
          columnLayout="40-60"
          rootClassName="features-listroot-class-name15"
          imagePlacement="left"
          ctaIconPlacement="none"
        ></FeaturesList>
        <Quote
          quote={
            <Fragment>
              <span className="burp-ai-text42">
                <span>&quot;</span>
                <span>
                  No other tool is capable of providing this sort of granular,
                  organized context to the AI. I&apos;m really pleased that
                  you&apos;re implementing Burp AI as a helpful assistant
                  designed to support me with the things I&apos;m already doing.
                  It actually feels like a collaboration, giving me the
                  headspace to think laterally.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          ctaUrl="https://portswigger.net/customer-stories/cristi-vlad-burp-ai"
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text45">Read more</span>
            </Fragment>
          }
          fontType="H4"
          extraInfo={
            <Fragment>
              <span className="burp-ai-text46">
                Cristi Vlad, Pentester and bug bounty hunter
              </span>
            </Fragment>
          }
          rootClassName="quoteroot-class-name40"
          showExtraInfo
          ctaIconPlacement="right"
          showBackgroundImg={false}
        ></Quote>
        <HeadingAndParagraph
          ctaUrl="https://portswigger.net/blog/why-its-time-for-appsec-to-embrace-ai-how-portswigger-is-leading-the-charge"
          heading={
            <Fragment>
              <span className="burp-ai-text47">
                AI capabilities, designed to make you faster, more efficient,
                and more accurate
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-text48">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-text49">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name186"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text50">FIND OUT MORE</span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/false-positives-ai-1200w-1200w.webp"
          showCtaBtn
          ctaIconType="activity"
          featureList={[
            {
              heading: 'The power of Burp AI, at your fingertips',
              paragraph:
                'Burp AI provides AI-powered insights, automation, and efficiency improvements for security professionals and bug bounty hunters using Burp Suite Professional.',
            },
            {
              heading: 'Smarter scanning, fewer false positives',
              paragraph:
                'AI-enhanced vulnerability scanning, starting with Broken Access Control.',
            },
            {
              heading: 'AI-powered extensions',
              paragraph:
                'Easily integrate AI into your Burp Suite extensions with the Montoya API.',
            },
          ]}
          columnLayout="40-60"
          rootClassName="features-listroot-class-name17"
        ></FeaturesList>
        <Quote
          quote={
            <Fragment>
              <span className="burp-ai-text51">
                <span>&quot;</span>
                <span>
                  AI assistance will become an ordinary, everyday part of the
                  pentester’s toolkit. It won’t replace human expertise, but it
                  will amplify it, helping you work smarter, faster, and with
                  greater precision.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          ctaUrl="https://portswigger.net/blog/why-its-time-for-appsec-to-embrace-ai-how-portswigger-is-leading-the-charge"
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text54">Read more</span>
            </Fragment>
          }
          fontType="H4"
          extraInfo={
            <Fragment>
              <span className="burp-ai-text55">
                Dafydd Stuttard, Burp Suite creator and PortSwigger CEO
              </span>
            </Fragment>
          }
          rootClassName="quoteroot-class-name52"
          showExtraInfo
          ctaIconPlacement="right"
          showBackgroundImg={false}
        ></Quote>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-text56">
                How Burp AI will elevate your testing
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-text57">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-text58">
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
          rootClassName="heading-and-paragraphroot-class-name139"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://www.google.com/url?q=https://portswigger.net/burp/releases%23professional&amp;sa=D&amp;source=docs&amp;ust=1758615560048550&amp;usg=AOvVaw298xkqKBZIv2RTUPDkhqys"
          ctaType="outline-orange"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text64">
                <span>Get started with Burp AI</span>
                <br></br>
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Burp AI/false-positives-ai-1200w-1200w.webp"
          showCtaBtn
          ctaIconType="ai-symbol"
          featureList={[
            {
              heading: 'Built for security professionals',
              paragraph:
                'Burp AI is built into Repeater in Burp Suite Professional, the tool you already know and trust. Say goodbye to unnecessary context switching - with Burp AI, you remain in control, all while staying inside Burp.',
            },
            {
              heading: 'Trusted & secure',
              paragraph:
                'Burp AI operates within PortSwigger’s trust boundary, ensuring the security of your data. Your data is not retained by our third-party AI service provider.',
            },
            {
              heading: 'Keep the work interesting',
              paragraph:
                'Pentesting is about curiosity and the thrill of the hunt. Burp AI handles the repetitive parts so you can spend more time on the puzzles that excite you.',
            },
          ]}
          columnLayout="40-60"
          rootClassName="features-listroot-class-name7"
          imagePlacement="left"
          ctaIconPlacement="right"
        ></FeaturesList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-text67">Burp AI news</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-text68">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-text69">
                <span>
                  Want to learn more about Burp AI - check out our latest blogs
                  and documentation
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  to see how PortSwigger are driving the next innovation in
                  penetration testing.
                </span>
              </span>
            </Fragment>
          }
          sectionId="burp-ai-news"
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name140"
        ></HeadingAndParagraph>
        <NewsCardsSectionBurpAI rootClassName="news-cards-section-burp-a-iroot-class-name"></NewsCardsSectionBurpAI>
        <BannerWithCtaAndCheckList
          ctaUrl="https://portswigger.net/burp/documentation/desktop/extensions/ai-security-privacy-data-handling"
          heading={
            <Fragment>
              <span className="burp-ai-text73">Keeping your data private</span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text74">READ MORE</span>
            </Fragment>
          }
          alignment="center"
          paragraph={
            <Fragment>
              <span className="burp-ai-text75">
                Burp AI delivers real-time, AI-powered testing secure, private,
                and built for pentesters who demand trust.
              </span>
            </Fragment>
          }
          ctaBtnType="primary"
          headingType="H2"
          showBigImage
          rootClassName="banner-with-cta-and-check-listroot-class-name6"
          ctaIconPlacement="none"
        ></BannerWithCtaAndCheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-text76">Burp AI FAQs</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-text77">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-text78">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name141"
          showParagraph={false}
        ></HeadingAndParagraph>
        <AccordionList
          item1Content={
            <Fragment>
              <span className="burp-ai-item1-content text-body-1">
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
              <span className="burp-ai-text79">
                Is Burp AI replacing pentesters?
              </span>
            </Fragment>
          }
          item2Content={
            <Fragment>
              <span className="burp-ai-item2-content text-body-1">
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
              <span className="burp-ai-text80">
                Will AI leak my sensitive data?
              </span>
            </Fragment>
          }
          item3Content={
            <Fragment>
              <span className="burp-ai-text81">
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
              <span className="burp-ai-text82">Can I disable AI?</span>
            </Fragment>
          }
          item4Content={
            <Fragment>
              <span className="burp-ai-item4-content text-body-1">
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
              <span className="burp-ai-text83">Can I use Burp AI offline?</span>
            </Fragment>
          }
          item5Content={
            <Fragment>
              <span className="burp-ai-text84">
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
              <span className="burp-ai-text85">
                So, is it possible to NOT have AI implemented out of the box on
                this new update? We cannot use public AI for this.
              </span>
            </Fragment>
          }
          item6Content={
            <Fragment>
              <span className="burp-ai-item6-content text-body-1">
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
                  className="burp-ai-link1"
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
                  className="burp-ai-link2"
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
              <span className="burp-ai-text92">
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
          rootClassName="accordion-listroot-class-name8"
        ></AccordionList>
        <a href="https://portswigger.net/burp/documentation/desktop/extensions/ai-security-privacy-data-handling">
          <Button
            btnLabel={
              <Fragment>
                <span className="burp-ai-text93"> MORE FAQs</span>
              </Fragment>
            }
            redirectUrl="https://portswigger.net/burp/documentation/desktop/extensions/ai-security-privacy-data-handling"
            iconPlacement="none"
            rootClassName="buttonroot-class-name37"
            className="burp-ai-component31"
          ></Button>
        </a>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-ai-text94">
                Join the #Burp-AI channel on Discord
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-ai-text95">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-ai-text96">
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
          rootClassName="heading-and-paragraphroot-class-name142"
          showParagraph={false}
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          ctaLabel={
            <Fragment>
              <span className="burp-ai-text102">JOIN THE DISCORD</span>
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
          rootClassName="features-listroot-class-name13"
          imagePlacement="right"
          ctaIconPlacement="left"
        ></FeaturesList>
      </main>
      <Footer rootClassName="footerroot-class-name20"></Footer>
    </div>
  )
}

export default BurpAI
