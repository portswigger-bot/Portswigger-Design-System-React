import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import StickySideNavigation from './sticky-side-navigation'
import HeadingAndParagraph from './heading-and-paragraph'
import AccordionList from './accordion-list'
import Button from './button'
import './app-sec-q-and-a-section.css'

const AppSecQAndASection = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-m width-max-content width-100 row">
        <StickySideNavigation
          header={
            <Fragment>
              <span className="app-sec-q-and-a-section-text100">
                In this Q&amp;A
              </span>
            </Fragment>
          }
          rootClassName="sticky-side-navigationroot-class-name2"
          navigationList={[
            {
              href: '#section-1',
              label: 'Introduction',
            },
            {
              href: '#section-2',
              label: 'Burp Suite DAST',
            },
            {
              href: '#section-3',
              label: 'Burp AI',
            },
            {
              href: '#section-4',
              label: 'General Q&As',
            },
            {
              href: '#section-5',
              label: 'Watch the webinar',
            },
          ]}
        ></StickySideNavigation>
        <div className="gap-m flex-1 column">
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="app-sec-q-and-a-section-text101">
                  Meet the Swiggers
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="app-sec-q-and-a-section-text102">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="app-sec-q-and-a-section-text103">
                  <span>
                    With thousands of security professionals tuning in live, the
                    questions came thick and fast. You asked about everything
                    from on-prem deployments of Burp Suite DAST, to AI models,
                    product roadmaps, and whether AppSec is becoming “a dumpster
                    fire”.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    We reviewed hundreds of questions, identified key themes,
                    and selected specific ones to answer that reflect the
                    majority of what people asked.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    We’ll be answering some of the standout questions you raised
                    during the session, including topics that we didn’t get time
                    to cover during the webinar. Whether you’re curious about
                    how Burp AI works behind the scenes, Burp Suite DAST
                    support, or just wondering what’s next for Burp Suite, this
                    Q&amp;A is for you.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="app-sec-q-and-a-section-text113">
                    Thank you again for helping us shape the future of AppSec.
                    Let’s get into the Q&amp;A:
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-1"
            showHeading={false}
            rootClassName="heading-and-paragraphroot-class-name33"
          ></HeadingAndParagraph>
          <div className="gap-s column">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text114">
                    Burp Suite DAST
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text115">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text116">
                    <span>
                      As the application security landscape continues to evolve,
                      your questions help shape where we go next. Whether
                      you&apos;re pushing for more integrations, asking tough
                      questions about privacy and AI, or exploring how Burp
                      Suite fits into your workflow, your feedback is what
                      drives us forward.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We’re committed to building tools that not only meet the
                      challenges of modern AppSec, but empower you to stay ahead
                      of them. From Burp Suite DAST to Burp AI, and everything
                      in between, we&apos;re excited about what’s next and even
                      more excited to be building it alongside such a passionate
                      and knowledgeable community.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Keep the questions coming, and stay tuned, the future of
                      AppSec is only just getting started.
                    </span>
                  </span>
                </Fragment>
              }
              sectionId="section-2"
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name34"
              showParagraph={false}
            ></HeadingAndParagraph>
            <AccordionList
              item1Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item1-content1 text-body-1">
                    <span>
                      {' '}
                      You’re in luck, it already is! Burp Suite Enterprise
                      Edition is now called
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/enterprise"
                      className="app-sec-q-and-a-section-link10"
                    >
                      Burp Suite DAST
                    </a>
                    <span>
                      . We’ve renamed it to provide greater clarity around the
                      product’s purpose. Burp Suite DAST continues to be trusted
                      by leading global organizations for scalable, automated
                      security testing and rest assured, we’ll keep innovating
                      and adding new capabilities to make it even better.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Keep an eye out for a follow-up webinar with a live demo
                      illustrating the value of Burp Suite DAST.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              }
              item1Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text129">
                    When is [Burp Suite DAST] expected to be available for
                    enterprise usage? Interested to get a deep dive demo.
                  </span>
                </Fragment>
              }
              item2Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item2-content1 text-body-1">
                    <span>
                      Yes. Burp Suite DAST can scan APIs defined via OpenAPI,
                      SOAP,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="http://portswigger.net/burp/releases/enterprise-edition-2025-2"
                      className="app-sec-q-and-a-section-link11"
                    >
                      Postman collections
                    </a>
                    <span>
                      , and more. If your API requires stateful workflows, you
                      can use recorded login sequences or authenticated
                      sessions.
                    </span>
                  </span>
                </Fragment>
              }
              item2Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text132">
                    If you need to follow a specific workflow in the API, could
                    Burp Suite DAST handle it?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              item3Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text133">
                    <span>
                      Burp Suite DAST delivers deep, accurate scanning of both
                      web apps and APIs. We currently support REST and SOAP
                      APIs, either in isolation or as part of a broader web app
                      scan. You just need to provide a suitable OpenAPI
                      (Swagger) spec, WSDL, or Postman Collection.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Unlike generic tools that spread themselves thin across
                      many areas, Burp Suite DAST focuses on delivering deep,
                      high-quality results where it matters most. If your team
                      is looking for a DAST solution that can also handle API
                      security with depth and precision, not just tick a box,
                      Burp Suite DAST is built to meet that need.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              }
              item3Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text138">
                    How does this DAST tool compare to traditional DAST
                    solutions and API security tools? What if our team wants a
                    solution that does DAST&apos;s job and also the task of [an]
                    API security tool — will Burp Suite&apos;s DAST solution
                    solve our needs?
                  </span>
                </Fragment>
              }
              item4Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item4-content1 text-body-1">
                    {' '}
                    Today, our support is based in the UK during business hours,
                    but we’re actively expanding to the USA to provide more
                    responsive, around-the-clock coverage.
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
                  <span className="app-sec-q-and-a-section-text139">
                    Do we have 24/7 support for Burp DAST? Or does the support
                    team work in a specific time zone?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              item5Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text140">
                    {' '}
                    You can disable AI features altogether from the setting menu
                    in Burp Suite Professional.
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
                  <span className="app-sec-q-and-a-section-text141">
                    So, is it possible to NOT have AI implemented out of the box
                    on this new update? We cannot use public AI for this.
                  </span>
                </Fragment>
              }
              item6Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item6-content1 text-body-1">
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
                      className="app-sec-q-and-a-section-link12"
                    >
                      ReportLM BApp
                    </a>
                    <span>
                      {' '}
                      - created by one of our own, Tom SL. Find it in the BApp
                      Store to get started.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      If you have feedback on any other extensions or AI
                      features, head over to the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://discord.com/invite/portswigger"
                      className="app-sec-q-and-a-section-link13"
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
                  <span className="app-sec-q-and-a-section-text148">
                    Since reporting is one of the most time-consuming activities
                    and most hated, do you plan to create an AI-assisted report
                    builder?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              rootClassName="accordion-listroot-class-name"
            ></AccordionList>
          </div>
          <div className="gap-s column">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text149">
                    Burp AI
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text150">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text151">
                    <span>
                      As the application security landscape continues to evolve,
                      your questions help shape where we go next. Whether
                      you&apos;re pushing for more integrations, asking tough
                      questions about privacy and AI, or exploring how Burp
                      Suite fits into your workflow, your feedback is what
                      drives us forward.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We’re committed to building tools that not only meet the
                      challenges of modern AppSec, but empower you to stay ahead
                      of them. From Burp Suite DAST to Burp AI, and everything
                      in between, we&apos;re excited about what’s next and even
                      more excited to be building it alongside such a passionate
                      and knowledgeable community.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Keep the questions coming, and stay tuned, the future of
                      AppSec is only just getting started.
                    </span>
                  </span>
                </Fragment>
              }
              sectionId="section-3"
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name38"
              showParagraph={false}
            ></HeadingAndParagraph>
            <AccordionList
              item1Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item1-content2 text-body-1">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/ai"
                      className="app-sec-q-and-a-section-link14"
                    >
                      Burp AI
                    </a>
                    <span>
                      {' '}
                      is the collective term for AI-powered features included in
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/burp/pro"
                      className="app-sec-q-and-a-section-link15"
                    >
                      Burp Suite Professional
                    </a>
                    <span>
                      , along with the trusted platform that securely manages
                      all communication with the AI services. You don&apos;t
                      need to pay for an extra subscription, all of the features
                      are included in Burp Suite Professional. However, using
                      Burp AI features relies on a built-in credits system. All
                      users will receive 10,000 free AI credits and further
                      credits can be purchased from within
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="http://portswigger.net/burp/documentation/desktop/burp-ai/ai-credits"
                      className="app-sec-q-and-a-section-link16"
                    >
                      my account
                    </a>
                    <span>.</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              }
              item1Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text164">
                    Is Burp AI a part of Burp Suite Professional or do you need
                    to pay for it separately?
                  </span>
                </Fragment>
              }
              item2Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item2-content2 text-body-1">
                    {' '}
                    No, data and methodologies will not be used to train the AI
                    models. We understand the concern and take data privacy
                    extremely seriously. We have contractual zero-retention
                    agreements in place with all of our AI providers. This
                    ensures that none of your data is stored or used for model
                    training purposes by the AI service.
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
                  <span className="app-sec-q-and-a-section-text165">
                    Will [user] data and methodology be used to train the AI
                    model or is there privacy?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              item3Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text166">
                    <span>
                      Not at this time. The current AI features in Burp Suite
                      Professional rely on cloud-based large language models
                      accessed via PortSwigger’s secure AI gateway. These models
                      require significant compute power, far beyond what&apos;s
                      feasible to run locally on most user machines. As such,
                      the AI functionality cannot operate in offline or
                      airgapped environments today.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      That said, PortSwigger is actively engaging with users to
                      understand the drivers behind this need, whether it&apos;s
                      compliance, client NDAs, cost control, or broader data
                      protection concerns. While there&apos;s no immediate
                      solution, we’ve acknowledged this feedback and are
                      considering it as part of our future roadmap.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      As always, we’re listening to feedback and we’re
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://usabi.li/do/pgulp5qthb6x/i0xzkq"
                      className="app-sec-q-and-a-section-link17"
                    >
                      running this survey
                    </a>
                    <span>
                      {' '}
                      to try and make an informed decision on future changes.
                    </span>
                  </span>
                </Fragment>
              }
              item3Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text175">
                    Is the AI going to be able to run airgapped and offline?
                  </span>
                </Fragment>
              }
              item4Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item4-content2 text-body-1">
                    <span>
                      {' '}
                      Not within the official product or
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/bappstore"
                      className="app-sec-q-and-a-section-link18"
                    >
                      BApp Store
                    </a>
                    <span>
                      {' '}
                      extensions. Burp Suite Professional’s built-in AI features
                      and BApp Store extensions are required to use
                      PortSwigger’s secure AI gateway. This ensures consistent
                      user experience, centralized configuration, and strict
                      data protection policies (e.g., no model training or
                      storage of user data).
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      However, you can build a private Burp extension outside
                      the BApp Store that connects to your preferred AI backend;
                      however, you won’t benefit from our integrated protections
                      and simplified configuration.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      As always, we’re listening to feedback and we’re
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://usabi.li/do/pgulp5qthb6x/i0xzkq"
                      className="app-sec-q-and-a-section-link19"
                    >
                      running this survey
                    </a>
                    <span>
                      {' '}
                      to try and make an informed decision on future changes.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              }
              item4Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text185">
                    Do you plan to provide the possibility of connecting your
                    own AI model to Burp Suite Pro? Our company&apos;s policies
                    restrict the use of external AI solutions during pentest
                    activities.
                  </span>
                </Fragment>
              }
              item5Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text186">
                    {' '}
                    You can disable AI features altogether from the setting menu
                    in Burp Suite Professional.
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
                  <span className="app-sec-q-and-a-section-text187">
                    So, is it possible to NOT have AI implemented out of the box
                    on this new update? We cannot use public AI for this.
                  </span>
                </Fragment>
              }
              item6Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item6-content2 text-body-1">
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
                      className="app-sec-q-and-a-section-link20"
                    >
                      ReportLM BApp
                    </a>
                    <span>
                      {' '}
                      - created by one of our own, Tom SL. Find it in the BApp
                      Store to get started.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      If you have feedback on any other extensions or AI
                      features, head over to the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://discord.com/invite/portswigger"
                      className="app-sec-q-and-a-section-link21"
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
                  <span className="app-sec-q-and-a-section-text194">
                    Since reporting is one of the most time-consuming activities
                    and most hated, do you plan to create an AI-assisted report
                    builder?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              rootClassName="accordion-listroot-class-name1"
              nrOfAccordions={6}
            ></AccordionList>
          </div>
          <div className="gap-s column">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text195">
                    General Q&amp;As
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text196">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text197">
                    <span>
                      As the application security landscape continues to evolve,
                      your questions help shape where we go next. Whether
                      you&apos;re pushing for more integrations, asking tough
                      questions about privacy and AI, or exploring how Burp
                      Suite fits into your workflow, your feedback is what
                      drives us forward.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We’re committed to building tools that not only meet the
                      challenges of modern AppSec, but empower you to stay ahead
                      of them. From Burp Suite DAST to Burp AI, and everything
                      in between, we&apos;re excited about what’s next and even
                      more excited to be building it alongside such a passionate
                      and knowledgeable community.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Keep the questions coming, and stay tuned, the future of
                      AppSec is only just getting started.
                    </span>
                  </span>
                </Fragment>
              }
              sectionId="section-4"
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name39"
              showParagraph={false}
            ></HeadingAndParagraph>
            <AccordionList
              item1Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item1-content3 text-body-1">
                    <span>
                      {' '}
                      You can get a copy of the recording of
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/future-of-appsec-webinar"
                      className="app-sec-q-and-a-section-link22"
                    >
                      The Future of AppSec webinar here
                    </a>
                    <span>
                      .
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              }
              item1Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text207">
                    Will we get a copy of the recording?
                  </span>
                </Fragment>
              }
              item2Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item2-content3 text-body-1">
                    Burp Suite DAST is built using the same battle-hardened
                    scanner in Burp Suite Professional - scaled for automation.
                    Burp Suite DAST is built for continuous coverage, not
                    hands-on testing and therefore the feature set is different.
                  </span>
                </Fragment>
              }
              item2Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text208">
                    How many of the new features in [Burp Suite DAST] will be
                    available in Pro?
                  </span>
                </Fragment>
              }
              item3Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text209">
                    <span>
                      We see AI as the next evolution in AppSec, helping
                      testers, not replacing them. For more on this vision, read
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/blog/why-its-time-for-appsec-to-embrace-ai-how-portswigger-is-leading-the-charge"
                      className="app-sec-q-and-a-section-link23"
                    >
                      Dafydd Stuttard’s take
                    </a>
                    <span>
                      {' '}
                      on the future of human and AI collaboration in AppSec.
                    </span>
                  </span>
                </Fragment>
              }
              item3Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text212">
                    Will AI take over everything? Is the future of AppSec in
                    danger? Is there future scope in AppSec?
                  </span>
                </Fragment>
              }
              item4Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item4-content3 text-body-1">
                    <span>
                      {' '}
                      This is a question that comes up every so often. While
                      it’s occasionally popular to criticize Java, the
                      real-world performance challenges we’ve addressed aren’t
                      down to the language. Over the past year, we&apos;ve made
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/blog/introducing-burp-suites-game-changing-performance-update"
                      className="app-sec-q-and-a-section-link24"
                    >
                      substantial improvements
                    </a>
                    <span>
                      {' '}
                      to Burp Suite’s performance, not by switching languages,
                      but by refining how the product works. From prioritizing
                      audit insertion points more intelligently to improving our
                      crawling algorithms, we’ve delivered meaningful gains
                      based on real user feedback.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Could we rewrite Burp Suite Professional in Rust or Go?
                      Sure; however, the truth is, a complete rewrite would take
                      an enormous amount of time and effort, time that’s far
                      better spent continuing to optimize and innovate within
                      our current, battle-tested architecture. The gains from a
                      language switch would likely be marginal in comparison.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      And for most users, it’s not the language that matters,
                      it’s what the tool can do. We’re focused on delivering the
                      capabilities and performance you need, not rewriting
                      millions of lines of code.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              }
              item4Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text221">
                    Are you planning in the near future to switch the Burp Suite
                    core from Java to Rust or Go for better performance?
                  </span>
                </Fragment>
              }
              item5Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text222">
                    <span>
                      {' '}
                      Sure,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://portswigger.net/blog/the-future-of-appsec-portswiggers-vision"
                      className="app-sec-q-and-a-section-link25"
                    >
                      read about it here
                    </a>
                    <span>
                      .
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              }
              item5Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text225">
                    Sorry, one of the most boring Software [announcements] ever.
                    I&apos;ll read about it later
                  </span>
                </Fragment>
              }
              item6Content={
                <Fragment>
                  <span className="app-sec-q-and-a-section-item6-content3 text-body-1">
                    {' '}
                    You caught us, old sport! We thought putting on fake British
                    accents would make us sound more intelligent and respected.
                    By jove we feel like it worked.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              item6Trigger={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text226">
                    Why are they all British?
                  </span>
                </Fragment>
              }
              rootClassName="accordion-listroot-class-name2"
              nrOfAccordions={6}
            ></AccordionList>
          </div>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="app-sec-q-and-a-section-text227">
                  Looking ahead
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="app-sec-q-and-a-section-text228">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="app-sec-q-and-a-section-text229">
                  <span>
                    As the application security landscape continues to evolve,
                    your questions help shape where we go next. Whether
                    you&apos;re pushing for more integrations, asking tough
                    questions about privacy and AI, or exploring how Burp Suite
                    fits into your workflow, your feedback is what drives us
                    forward.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    We’re committed to building tools that not only meet the
                    challenges of modern AppSec, but empower you to stay ahead
                    of them. From Burp Suite DAST to Burp AI, and everything in
                    between, we&apos;re excited about what’s next and even more
                    excited to be building it alongside such a passionate and
                    knowledgeable community.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Keep the questions coming, and stay tuned, the future of
                    AppSec is only just getting started.
                  </span>
                </span>
              </Fragment>
            }
            sectionId="section-5"
            headingType="H3"
            rootClassName="heading-and-paragraphroot-class-name36"
          ></HeadingAndParagraph>
          <HeadingAndParagraph
            heading={
              <Fragment>
                <span className="app-sec-q-and-a-section-text237">
                  Watch the full webinar
                </span>
              </Fragment>
            }
            topLabel={
              <Fragment>
                <span className="app-sec-q-and-a-section-text238">
                  Securing the web
                </span>
              </Fragment>
            }
            alignment="left"
            paragraph={
              <Fragment>
                <span className="app-sec-q-and-a-section-text239">
                  Did you miss the live session? Watch it on demand now to dive
                  deeper into our plans and product updates.
                </span>
              </Fragment>
            }
            headingType="H3"
            rootClassName="heading-and-paragraphroot-class-name35"
          ></HeadingAndParagraph>
          <a href="https://portswigger.net/future-of-appsec-webinar">
            <Button
              btnLabel={
                <Fragment>
                  <span className="app-sec-q-and-a-section-text240">
                    WATCH THE WEBINAR
                  </span>
                </Fragment>
              }
              iconPlacement="none"
              rootClassName="buttonroot-class-name27"
              className="app-sec-q-and-a-section-component20"
            ></Button>
          </a>
        </div>
      </div>
    </div>
  )
}

AppSecQAndASection.defaultProps = {
  rootClassName: '',
}

AppSecQAndASection.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppSecQAndASection
