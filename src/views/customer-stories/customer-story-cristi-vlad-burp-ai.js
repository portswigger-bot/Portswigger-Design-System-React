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
import './customer-story-cristi-vlad-burp-ai.css'

const CustomerStoryCristiVladBurpAI = (props) => {
  return (
    <div className="customer-story-cristi-vlad-burp-ai-container">
      <Helmet>
        <title>Cristi Vlad's Perspective on Burp AI</title>
        <meta
          name="description"
          content="From curiosity to critical impact. Cristi Vlad, a penetration tester and bug bounty hunter gives his perspective on Burp AI."
        />
        <meta
          property="og:title"
          content="Cristi Vlad's Perspective on Burp AI"
        />
        <meta
          property="og:description"
          content="Find out why this pentester uses Burp every day. Efficient discovery, comprehensive application mapping and advanced extensibility."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name11"></Navigation>
      <main className="align-center column width-100">
        <Hero
          heading={
            <Fragment>
              <span className="customer-story-cristi-vlad-burp-ai-text100">
                <span>
                  From curiosity to critical impact:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="customer-story-cristi-vlad-burp-ai-text102">
                  A pentester&apos;s perspective on Burp AI
                </span>
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="customer-story-cristi-vlad-burp-ai-text103">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="customer-story-cristi-vlad-burp-ai-text104">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="customer-story-cristi-vlad-burp-ai-text105">
                BUY - $475
              </span>
            </Fragment>
          }
          heroImgSrc="/Pages/Customer Stories/cristi-vlad-1300w-1200w.webp"
          subHeading={
            <Fragment>
              <span className="customer-story-cristi-vlad-burp-ai-text106">
                We caught up with Cristi Vlad to discuss his early experiences
                with Burp AI and get his take on how AI could be transformative
                for penetration testing in years to come.
              </span>
            </Fragment>
          }
          topLogoSrc="/Logos/Dark/dark-burp-suite-professional-1200w.png"
          showTopLogo
          columnLayout="60-40"
          rootClassName="heroroot-class-name10"
          mainImageAlign="start"
          subHeadingFontStyle="intro"
        ></Hero>
        <SidePanelWithSlot
          rootClassName="side-panel-with-slotroot-class-name3"
          sidePanelList={[
            {
              href: '#section-1',
              label: 'Introduction',
            },
            {
              href: '#section-2',
              label: 'Hands-on at heart',
            },
            {
              href: '#section-3',
              label: 'Discovering Burp AI',
            },
            {
              href: '#section-4',
              label: 'Collaboration, not automation',
            },
            {
              href: '#section-5',
              label: 'More bandwidth, better focus, bigger wins',
            },
            {
              href: '#section-6',
              label: 'Addressing the skeptics',
            },
            {
              href: '#section-7',
              label: 'No more near misses',
            },
            {
              href: '#section-8',
              label: "Burp AI's unique advantages",
            },
            {
              href: '#section-9',
              label: 'Privacy and trust',
            },
            {
              href: '#section-10',
              label: 'Experience Burp AI for yourself',
            },
          ]}
          sidePanelHeader={
            <Fragment>
              <span className="customer-story-cristi-vlad-burp-ai-text107">
                In this story
              </span>
            </Fragment>
          }
        >
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text108">
                  No other tool is capable of providing this sort of granular,
                  organized context to the AI.
                </span>
              </Fragment>
            }
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text109">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text110">
                  Cristi Vlad, Pentester and bug bounty hunter
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name30"
            showExtraInfo
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text111">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text112">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text113">
                  <span>
                    Modern web apps are sprawling and increasingly complex,
                    comprising numerous different technologies, frameworks, and
                    microservices. Even for the most seasoned pentesters,
                    it&apos;s a constant balancing act between digging deeper
                    and ensuring you&apos;ve covered the full scope.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Cristi Vlad, a penetration tester and bug bounty hunter
                    based in Romania, has spent the last seven years honing his
                    craft. Originally trained as a civil engineer, he made a
                    career pivot after discovering the thrill of hacking through
                    platforms like VulnHub, HackTheBox, and of course, the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/web-security"
                    className="customer-story-cristi-vlad-burp-ai-link10"
                  >
                    Web Security Academy
                  </a>
                  <span>
                    . Today, he runs his own consultancy, delivering high-impact
                    pentests for clients around the globe.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Like any experienced pentester, Cristi has long relied on
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/pro"
                    className="customer-story-cristi-vlad-burp-ai-link11"
                  >
                    Burp Suite Professiona
                  </a>
                  <span>
                    l as his go-to tool for web app and API security testing.
                    Recently, he started using Burp AI to enhance his workflow,
                    and the results have been transformative. Rather than
                    automating his work or replacing his expertise,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/ai"
                    className="customer-story-cristi-vlad-burp-ai-link12"
                  >
                    Burp AI
                  </a>
                  <span>
                    {' '}
                    has become a true collaborative assistant, helping Cristi
                    think more broadly, work more efficiently, and even helping
                    him discover critical security vulnerabilities.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-1"
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name114"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text124">
                  Hands-on at heart
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text125">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text126">
                  <span>
                    Cristi often tackles short, high-intensity pentests. In his
                    typical workflow, he relies heavily on his hard-earned
                    skills and a level of intuition that only comes from
                    experience.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="customer-story-cristi-vlad-burp-ai-text130">
                    &quot;I obviously conduct my pentests according to the OWASP
                    framework or whatever my client&apos;s requirements
                    are,&quot; he explains, &quot;I&apos;m at the point now
                    where I have an intuitive feeling about where I need to
                    focus my time. That only comes from &apos;doing reps&apos;,
                    so to speak.&quot;
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-2"
            headingType="H3"
            rootClassName="heading-and-paragraphroot-class-name115"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text131">
                  I have an intuitive feeling about where I need to focus my
                  time. That only comes from &apos;doing reps&apos;.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text132">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text133">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name31"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text134">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text135">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text136">
                  <span className="customer-story-cristi-vlad-burp-ai-text137">
                    &quot;I usually start out trying to get a feel for the app
                    while proxying everything through Burp. At the same time,
                    I&apos;m trying to think of any unintended uses for the
                    functionality I discover, or how I might make the app behave
                    in unintended ways. I suppose that&apos;s fundamentally what
                    pentesting is about.&quot;
                  </span>
                  <br className="customer-story-cristi-vlad-burp-ai-text138"></br>
                  <br className="customer-story-cristi-vlad-burp-ai-text139"></br>
                  <span className="customer-story-cristi-vlad-burp-ai-text140">
                    &quot;In Burp itself, I spend most of my time between the
                    Proxy history and Repeater, tampering with different inputs
                    to see how the app responds. If I see something and think it
                    might be exploitable, I like to just test it out on the
                    spot.&quot;
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    But this presents a familiar challenge. With so many
                    potential leads to follow in a narrow time frame,
                    comprehensively testing complex modern apps is increasingly
                    unfeasible through manual methods alone.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name116"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text144">
                  Pentesting can be a bit of a mess at times, and I often end up
                  exploring multiple leads at once.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text145">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text146">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name32"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text147">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text148">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text149">
                  &quot;Pentesting can be a bit of a mess at times,&quot; he
                  admits, &quot;I often end up exploring multiple leads at
                  once.&quot;
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name117"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text150">
                  Discovering Burp AI
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text151">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text152">
                  <span>
                    Cristi first heard about Burp AI after seeing a post by
                    PortSwigger researcher,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/research/james-kettle"
                    className="customer-story-cristi-vlad-burp-ai-link13"
                  >
                    James Kettle
                  </a>
                  <span>
                    . His interest was piqued, but like many in the field,
                    he&apos;s wary of gimmicky AI features offering hollow
                    promises that they can automate what he enjoys doing.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-3"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name129"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text155">
                  I don&apos;t like the idea of something that tries to
                  magically do everything for me. I think a lot of pentesters
                  feel the same.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text156">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text157">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name33"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text158">
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
                <span className="customer-story-cristi-vlad-burp-ai-text159">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text160">
                  <span className="customer-story-cristi-vlad-burp-ai-text161">
                    &quot;I don&apos;t like the idea of something that tries to
                    magically do everything for me, and I think a lot of
                    pentesters and security researchers feel the same,&quot; he
                    explains, &quot;I get a lot of satisfaction from applying my
                    skills creatively and coming up with something interesting.
                    There&apos;s a fine line between collaborating with AI and
                    it just serving you everything on a silver platter.
                    It&apos;s a kind of philosophical question really.&quot;
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Skeptical but curious, he decided to trial the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/ai/capabilities"
                    className="customer-story-cristi-vlad-burp-ai-link14"
                  >
                    Explore issue
                  </a>
                  <span>
                    {' '}
                    feature on a real engagement. It wasn’t long before it paid
                    off.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    During a routine scan, Burp flagged a potential
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/web-security/host-header"
                    className="customer-story-cristi-vlad-burp-ai-link15"
                  >
                    Host-header injection
                  </a>
                  <span>
                    {' '}
                    vulnerability, so Cristi let Burp AI explore the issue
                    further. While the AI was running its analysis, he manually
                    sent the request to Repeater and began his own
                    investigation, modifying headers and observing responses.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    At the same time, his scan identified a potential
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/web-security/authentication/password-based#brute-forcing-usernames"
                    className="customer-story-cristi-vlad-burp-ai-link16"
                  >
                    username enumeration
                  </a>
                  <span>
                    {' '}
                    issue in a password reset flow. Cristi&apos;s experience and
                    intuition allowed him to quickly connect the dots: he
                    combined insights from the AI investigation with his manual
                    findings.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name121"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text174">
                  AI helped me think outside my normal methodology [...] It
                  brought things to my attention I might have missed.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text175">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text176">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name34"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text177">
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
                <span className="customer-story-cristi-vlad-burp-ai-text178">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text179">
                  <span className="customer-story-cristi-vlad-burp-ai-text180">
                    &quot;I thought I&apos;d try and combine the two bugs,&quot;
                  </span>
                  <span>
                    {' '}
                    he explains. When he tried the Host-header injection with
                    the password reset functionality, the result was a critical
                    account takeover via
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/web-security/host-header/exploiting/password-reset-poisoning"
                    className="customer-story-cristi-vlad-burp-ai-link17"
                  >
                    password reset poisoning
                  </a>
                  <span>
                    .
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="customer-story-cristi-vlad-burp-ai-text183">
                    &quot;When I saw the password reset link pointing at my
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/collaborator"
                    className="customer-story-cristi-vlad-burp-ai-link18"
                  >
                    Burp Collaborator
                  </a>
                  <span className="customer-story-cristi-vlad-burp-ai-text184">
                    {' '}
                    URL, I knew it was a done deal.&quot;​
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    This wasn’t just a minor bug. It was a vulnerability that,
                    in a bug bounty program, could have earned Cristi a
                    substantial payout. While he&apos;s quick to note that AI
                    didn’t find the issue on its own, he credits it with helping
                    him reach the conclusion faster and more confidently.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="customer-story-cristi-vlad-burp-ai-text190">
                    &quot;AI helped me think outside my normal
                    methodology,&quot; he says, &quot;It brought things to my
                    attention I might have missed.&quot;
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name122"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text191">
                  Collaboration, not automation
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text192">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text193">
                  Cristi doesn’t see Burp AI as a tool that takes over his work.
                  Instead, he sees it as a collaboration tool that creates
                  mental space for creative problem-solving.
                </span>
              </Fragment>
            }
            sectionId="section-4"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name123"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text194">
                  It actually feels like a collaboration [...] It gave me the
                  headspace to think laterally.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text195">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text196">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name35"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text197">
                  Distilling the results into an actionable POC
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text198">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text199">
                  <span className="customer-story-cristi-vlad-burp-ai-text200">
                    “It actually feels like a collaboration with the AI,”
                  </span>
                  <span>
                    {' '}
                    he says,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="customer-story-cristi-vlad-burp-ai-text202">
                    “I can be in Repeater testing all sorts of things, while
                    Burp AI is following up on other leads in the background. It
                    gave me the headspace to think laterally and connect the
                    dots between two separate issues. That&apos;s exactly how I
                    want it.&quot;
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    This philosophy aligns perfectly with
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/blog/why-its-time-for-appsec-to-embrace-ai-how-portswigger-is-leading-the-charge?ps_source=twitter&amp;ps_medium=social&amp;ps_campaign=Burp_AI_AppSec"
                    className="customer-story-cristi-vlad-burp-ai-link19"
                  >
                    PortSwigger’s vision for AI
                  </a>
                  <span>
                    . As Dafydd Stuttard, Burp Suite’s creator, puts it:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="customer-story-cristi-vlad-burp-ai-text207">
                    &quot;This isn’t a revolution that eliminates pentesters;
                    it’s an evolution that empowers them.&quot;
                  </span>
                  <span>
                    {' '}
                    Burp AI doesn’t automate you out of the loop; it gives you
                    more bandwidth to do what you’re best at.
                  </span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name124"
            showParagraph
          ></HeadingAndParagraph>
          <CheckList
            item1={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text209 text-body-1">
                  <span className="customer-story-cristi-vlad-burp-ai-text210">
                    Maintain full control
                  </span>
                  <span>
                    {' '}
                    over his pentest, while offloading background tasks to AI.
                  </span>
                </span>
              </Fragment>
            }
            item2={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text212 text-body-1">
                  <span className="customer-story-cristi-vlad-burp-ai-text213">
                    Stay focused
                  </span>
                  <span>
                    {' '}
                    on the highest-value activities that required his human
                    expertise, letting Burp AI pick up the slack and follow
                    other leads on his behalf.
                  </span>
                </span>
              </Fragment>
            }
            item3={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text215 text-body-1">
                  <span className="customer-story-cristi-vlad-burp-ai-text216">
                    Expand his situational awareness
                  </span>
                  <span>
                    , leading to a critical vulnerability that might otherwise
                    have been missed.
                  </span>
                </span>
              </Fragment>
            }
            item4={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text218 text-body-1">
                  <span className="customer-story-cristi-vlad-burp-ai-text219">
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
                <span className="customer-story-cristi-vlad-burp-ai-text221">
                  The grievance hearer will look into any additional points
                  raised.
                </span>
              </Fragment>
            }
            item6={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text222">
                  Once ready, the grievance hearer will produce a written
                  outcome letter of their findings. This is then shared with
                  relevant parties.
                </span>
              </Fragment>
            }
            item7={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text223">
                  The Swigger who raised the grievance will be given the right
                  to appeal the findings of the grievance.
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text224">
                  More bandwidth, better focus
                </span>
              </Fragment>
            }
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text225">
                  GET IN TOUCH
                </span>
              </Fragment>
            }
            listType="bulletPoint"
            sectionId="section-5"
            rootClassName="check-listroot-class-name25"
            showParagraph
            headingParagraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text226">
                  Thanks to Burp AI, Cristi could:
                </span>
              </Fragment>
            }
          ></CheckList>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text227">
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
                <span className="customer-story-cristi-vlad-burp-ai-text228">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text229">
                  <span>
                    The collaborative approach also reinforced Cristi&apos;s
                    enjoyment of testing. 
                  </span>
                  <span className="customer-story-cristi-vlad-burp-ai-text231">
                    &quot;I like that these are AI enhancements to support my
                    workflow, not automate it away,&quot;
                  </span>
                  <span> he noted.</span>
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name125"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text233">
                  I like that these are AI enhancements to support my workflow,
                  not automate it away.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text234">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text235">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name36"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text236">
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
                <span className="customer-story-cristi-vlad-burp-ai-text237">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text238">
                  <span>
                    He emphasized that the careful design of Burp AI, respecting
                    user control, privacy, and supplementing, rather than
                    disrupting, his manual workflow, was crucial to earning his
                    trust.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Cristi&apos;s experience highlights PortSwigger&apos;s
                    vision for Burp AI: augmenting professional testers, not
                    replacing them. Like power tools for carpenters, Burp AI is
                    designed to let skilled security researchers do more, think
                    faster, and achieve greater results, while keeping the human
                    expert firmly in the driver&apos;s seat.
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
            rootClassName="heading-and-paragraphroot-class-name126"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text243">
                  Addressing the skeptics
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text244">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text245">
                  <span>
                    Cristi is candid about the skepticism he sees in the
                    industry. Some pentesters worry about AI replacing them, or
                    at least diluting their value. But he doesn&apos;t see this
                    as a real concern.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="customer-story-cristi-vlad-burp-ai-text249">
                    &quot;I don&apos;t think the technology is capable of fully
                    automating pentesting yet, but it has huge potential.&quot;
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-6"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name127"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text250">
                  I&apos;m really pleased that you&apos;re implementing Burp AI
                  as a helpful assistant designed to support me with the things
                  I&apos;m already doing.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text251">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text252">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name37"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text253">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text254">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text255">
                  <span className="customer-story-cristi-vlad-burp-ai-text256">
                    &quot;I&apos;m really pleased with how you&apos;re
                    approaching it in Burp Suite, by implementing Burp AI as a
                    helpful assistant designed to support me with the things
                    I&apos;m already doing.&quot;
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Some simply dismiss AI features as gimmicks outright,
                    insisting their own knowledge and experience are already
                    vastly superior to anything AI is capable of. But Cristi
                    encourages them to try Burp AI with an open mind.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="customer-story-cristi-vlad-burp-ai-text262">
                    &quot;When you have a fixed methodology or a workflow, the
                    human tendency is to stick to it because it&apos;s
                    comfortable. But I think that&apos;s to your own
                    detriment,&quot; he explains, &quot;I think as these
                    features mature, they&apos;ll help people break that cycle
                    and think a bit more outside of their comfort zone.&quot;
                  </span>
                </span>
              </Fragment>
            }
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name130"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text263">
                  No more near misses
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text264">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text265">
                  Cristi describes how, like many pentesters, he often wonders
                  about vulnerabilities he may have missed out on or overlooked
                  in the past. He&apos;s excited to see how Burp AI can help him
                  avoid these cases going forward.
                </span>
              </Fragment>
            }
            sectionId="section-7"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name131"
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text266">
                  It&apos;s invaluable because nobody knows everything.
                  It&apos;s delusional to think you do, no matter how much
                  experience you have.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text267">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text268">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name38"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text269">
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
                <span className="customer-story-cristi-vlad-burp-ai-text270">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text271">
                  &quot;I like the fact that AI could bring to my attention
                  additional attack vectors or issues that I might&apos;ve
                  missed otherwise due to not being as familiar with that
                  particular vulnerability class or technology. That&apos;s
                  invaluable because nobody knows everything. It&apos;s
                  delusional to think you do, no matter how much experience you
                  have.&quot;
                </span>
              </Fragment>
            }
            headingType="H2"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name128"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text272">
                  Burp AI&apos;s unique advantages
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text273">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text274">
                  <span>
                    He also points out that integrating AI directly into Burp
                    Suite has some unique advantages.
                  </span>
                  <span className="customer-story-cristi-vlad-burp-ai-text276">
                    &quot;Even if you have an advanced model, you also need to
                    provide it with the relevant context.&quot;
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-8"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name132"
            showParagraph
          ></HeadingAndParagraph>
          <Quote
            quote={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text277">
                  No other tool is capable of providing this sort of granular,
                  organized context to the AI.
                </span>
              </Fragment>
            }
            bordered={false}
            ctaLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text278">
                  Read more
                </span>
              </Fragment>
            }
            fontType="H4"
            extraInfo={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text279">
                  Application Security Pentester, AppSec team
                </span>
              </Fragment>
            }
            showQuotes
            rootClassName="quoteroot-class-name39"
          ></Quote>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text280">
                  Burp AI&apos;s unique advantages
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text281">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text282">
                  &quot;Given that Burp Suite is a sort of &apos;X-ray&apos; for
                  studying an application, no other tool is capable of providing
                  this sort of granular, organized context to the AI.&quot;
                </span>
              </Fragment>
            }
            headingType="H3"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name133"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text283">
                  Privacy and trust
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text284">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text285">
                  <span>
                    While naturally careful with his clients&apos; sensitive
                    data, he doesn&apos;t have an issue with Burp AI relying on
                    third-party models.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="customer-story-cristi-vlad-burp-ai-text289">
                    &quot;PortSwigger has
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/burp/documentation/desktop/burp-ai/ai-security-privacy-data-handling"
                    className="customer-story-cristi-vlad-burp-ai-link20"
                  >
                    zero-retention agreements
                  </a>
                  <span className="customer-story-cristi-vlad-burp-ai-text290">
                    {' '}
                    with all of the model providers, so I&apos;m not concerned
                    about that side of things. And besides, you&apos;re
                    constantly interacting with sensitive data and functionality
                    during a pentest, regardless of whether you&apos;re using AI
                    features or not. Being mindful about what you&apos;re doing
                    and what the implications might be is just part of being a
                    pentester; it&apos;s not a new issue that&apos;s been
                    introduced by AI specifically.&quot;
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-9"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name134"
            showParagraph
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text291">
                  Experience Burp AI for yourself
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text292">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="customer-story-cristi-vlad-burp-ai-text293">
                  <span>
                    Cristi’s story isn’t unique. It’s just the beginning of
                    what’s possible when AI and human expertise work together.
                    If you’re ready to spend less time on tedious validation and
                    more time on creative hacking, give Burp AI a try.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Every Burp Suite Professional user gets 10,000 free AI
                    credits to experiment with. No gimmicks. No nonsense. Just
                    practical, privacy-respecting assistance that fits
                    seamlessly into your existing workflow.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Upgrade to the latest version of Burp Suite Professional and
                    start exploring with Burp AI today.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-10"
            headingType="H3"
            showHeading
            rootClassName="heading-and-paragraphroot-class-name135"
            showParagraph
          ></HeadingAndParagraph>
          <a
            href="https://portswigger.net/burp/releases#professional"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              btnLabel={
                <Fragment>
                  <span className="customer-story-cristi-vlad-burp-ai-text301">
                    UPDATE NOW
                  </span>
                </Fragment>
              }
              iconPlacement="none"
              rootClassName="buttonroot-class-name35"
              className="customer-story-cristi-vlad-burp-ai-component44"
            ></Button>
          </a>
        </SidePanelWithSlot>
      </main>
      <Footer rootClassName="footerroot-class-name17"></Footer>
    </div>
  )
}

export default CustomerStoryCristiVladBurpAI
