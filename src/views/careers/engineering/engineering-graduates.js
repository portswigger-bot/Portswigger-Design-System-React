import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import ExtraNavigationCulturePages from '../../../components/extra-navigation-culture-pages'
import Hero from '../../../components/hero'
import HeadingAndParagraph from '../../../components/heading-and-paragraph'
import Icon from '../../../components/icon'
import SimpleCard from '../../../components/simple-card'
import CheckList from '../../../components/check-list'
import AccordionList from '../../../components/accordion-list'
import Button from '../../../components/button'
import Footer from '../../../components/footer'
import './engineering-graduates.css'

const EngineeringGraduates = (props) => {
  return (
    <div className="engineering-graduates-container1">
      <Helmet>
        <title>Graduate career opportunities - PortSwigger</title>
        <meta
          name="description"
          content="Graduate software engineering opportunities An opportunity to kick-start your software development career at an innovative and agile software company in the north west of England"
        />
        <meta
          property="og:title"
          content="Graduate career opportunities - PortSwigger"
        />
        <meta
          property="og:description"
          content="Graduate software engineering opportunities An opportunity to kick-start your software development career at an innovative and agile software company in the north west of England"
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation></Navigation>
      <ExtraNavigationCulturePages rootClassName="extra-navigation-culture-pagesroot-class-name3"></ExtraNavigationCulturePages>
      <main className="gap-m align-center column width-100 engineering-graduates-main">
        <Hero
          ctaUrl="https://apply.workable.com/portswigger/j/9D1301B9D4/apply/"
          heading={
            <Fragment>
              <span className="engineering-graduates-text100">
                Graduate software engineering opportunities
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="engineering-graduates-text101">
                APPLY FOR THIS ROLE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="engineering-graduates-text102">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="engineering-graduates-text103">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/BetterTogether/better-together-hero-1200w.png"
          subHeading={
            <Fragment>
              <span className="engineering-graduates-text104">
                Applications are now open
              </span>
            </Fragment>
          }
          ctaIconType="external-link"
          rootClassName="heroroot-class-name4"
          mainImageAlign="center"
          mainImageHeight="320px"
          ctaIconPlacement="none"
        ></Hero>
        <section className="engineering-graduates-section10 gap-m align-center padding-m padding-vertical-l column width-100">
          <div className="engineering-graduates-max-width10 gap-m flex-1 align-center width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="engineering-graduates-text105">
                    🗓️ Applications open: 1st September
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="engineering-graduates-text106">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="center"
              paragraph={
                <Fragment>
                  <span className="engineering-graduates-text107">
                    An opportunity to kick-start your software development
                    career at an innovative and agile software company in the
                    North West of England.
                  </span>
                </Fragment>
              }
              headingType="H3"
              showHeading={false}
              paragraphType="body-1"
              rootClassName="heading-and-paragraphroot-class-name40"
            ></HeadingAndParagraph>
          </div>
        </section>
        <div className="engineering-graduates-section11 gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <div id className="engineering-graduates-check-list gap-s column">
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="engineering-graduates-text108">
                      Role details: Graduate Software Developer
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="engineering-graduates-text109">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="engineering-graduates-text110">
                      We are a diverse group of people with a wide range of
                      interests and backgrounds. What Swiggers have in common is
                      that they all love their work and are exceptionally good
                      at what they do.
                    </span>
                  </Fragment>
                }
                headingType="H3"
                rootClassName="heading-and-paragraphroot-class-name42"
                showParagraph={false}
              ></HeadingAndParagraph>
              <div className="engineering-graduates-container2">
                <div className="engineering-graduates-list1 gap-s column">
                  <div className="gap-s align-start row">
                    <p className="text-body-1">
                      <span className="engineering-graduates-text112">
                        Timeframe:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>Permanent position.</span>
                    </p>
                  </div>
                  <div className="gap-s align-start row">
                    <p className="text-body-1">
                      <span className="engineering-graduates-text115">
                        Location:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>Knutsford, Cheshire, United Kingdom.</span>
                    </p>
                  </div>
                  <div className="gap-s align-start row">
                    <p className="text-body-1">
                      <span className="engineering-graduates-text118">
                        Salary
                      </span>
                      <span>: £60,000.</span>
                    </p>
                  </div>
                  <div className="gap-s align-start row">
                    <p className="text-body-1">
                      <span className="engineering-graduates-text121">
                        Benefits:
                      </span>
                      <span>
                        {' '}
                        Competitive salary, 8% employer pension contribution and
                        many more. More information on our benefits can be seen
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a href="http://test">here</a>
                      <span>.</span>
                    </p>
                  </div>
                  <a
                    href="https://portswigger.net/careers/better-together"
                    className="engineering-graduates-button-link1 button-quarternary row gap-xs"
                  >
                    <span className="engineering-graduates-text124 heading-5">
                      Discover why we work better together
                    </span>
                    <Icon type="arrow-right"></Icon>
                  </a>
                </div>
                <div className="engineering-graduates-list2 gap-s column">
                  <div className="gap-s align-start row">
                    <p className="text-body-1">
                      <span className="engineering-graduates-text126">
                        Life assurance:
                      </span>
                      <span> 4x salary.</span>
                    </p>
                  </div>
                  <div className="gap-s align-start row">
                    <p className="text-body-1">
                      <span className="engineering-graduates-text129">
                        Income protection:
                      </span>
                      <span>
                        {' '}
                        Full pay for first 6 months of incapacity followed by
                        75% of salary plus pension contribution.
                      </span>
                    </p>
                  </div>
                  <div className="gap-s align-start row">
                    <p className="engineering-graduates-text131 text-body-1">
                      Private medical insurance (Bupa).
                    </p>
                  </div>
                  <div className="gap-s align-start row">
                    <p className="text-body-1">
                      <span className="engineering-graduates-text133">
                        Holidays:
                      </span>
                      <span> 25 days plus public holidays.</span>
                    </p>
                  </div>
                  <div className="gap-s align-start row">
                    <p className="text-body-1">
                      <span className="engineering-graduates-text136">
                        Working hours:
                      </span>
                      <span>
                        {' '}
                        Core hours are 9am to 5pm, with flexibility to start any
                        time between 8am and 9.30am.
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="engineering-graduates-button-link2 button-quarternary row gap-xs"
                  >
                    <a
                      href="https://apply.workable.com/portswigger/"
                      className="engineering-graduates-link2 heading-5"
                    >
                      View open positions
                    </a>
                    <Icon type="arrow-right"></Icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="engineering-graduates-text138">
                    Who are we?
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="engineering-graduates-text139">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="engineering-graduates-text140">
                    <span>
                      We&apos;re the creators of Burp Suite, the world&apos;s
                      leading software for web security testing, and we’re
                      pioneering its future with an
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="engineering-graduates-text142">
                      AI-first engineering approach.
                    </span>
                    <span>
                      {' '}
                      We are a dynamic team striving for excellence, embracing
                      the cutting edge of technology to solve real-world
                      security problems. Our culture is built on continuous
                      self-improvement and personal development. We foster a
                      collaborative and inclusive environment where your growth
                      is our priority.
                    </span>
                  </span>
                </Fragment>
              }
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name46"
            ></HeadingAndParagraph>
          </div>
        </div>
        <div className="engineering-graduates-section13 gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <div className="gap-m align-center grid-colums-3 grid justify-center width-100">
              <SimpleCard
                url="https://portswigger.net/about"
                heading={
                  <Fragment>
                    <span className="engineering-graduates-text144">
                      About PortSwigger
                    </span>
                  </Fragment>
                }
                linkLabel={
                  <Fragment>
                    <span className="engineering-graduates-text145">
                      Read more
                    </span>
                  </Fragment>
                }
              ></SimpleCard>
              <SimpleCard
                url="https://portswigger.net/careers/culture"
                heading={
                  <Fragment>
                    <span className="engineering-graduates-text146">
                      PortSwigger culture
                    </span>
                  </Fragment>
                }
                linkLabel={
                  <Fragment>
                    <span className="engineering-graduates-text147">
                      Read more
                    </span>
                  </Fragment>
                }
              ></SimpleCard>
              <SimpleCard
                url="https://portswigger.net/careers/culture/workplace"
                heading={
                  <Fragment>
                    <span className="engineering-graduates-text148">
                      PortSwigger workplace
                    </span>
                  </Fragment>
                }
                linkLabel={
                  <Fragment>
                    <span className="engineering-graduates-text149">
                      Read more
                    </span>
                  </Fragment>
                }
              ></SimpleCard>
            </div>
          </div>
        </div>
        <div className="gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <CheckList
              item1={
                <Fragment>
                  <span className="engineering-graduates-text150 text-body-1">
                    <span className="engineering-graduates-text151">
                      Solve meaningful problems:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Tackle complex, real-world challenges using computer
                      science fundamentals and an AI-augmented approach.
                    </span>
                  </span>
                </Fragment>
              }
              item2={
                <Fragment>
                  <span className="engineering-graduates-text153 text-body-1">
                    <span className="engineering-graduates-text154">
                      Build with in-demand technologies:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Work with tools and frameworks like Java, .NET, and React,
                      and gain experience with platforms like AWS and
                      Kubernetes.
                    </span>
                  </span>
                </Fragment>
              }
              item3={
                <Fragment>
                  <span className="engineering-graduates-text156 text-body-1">
                    <span className="engineering-graduates-text157">
                      Master AI-driven development:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Learn how to leverage AI-powered coding tools, prompt
                      engineering, and agentic workflows to create clean,
                      maintainable, and efficient code.
                    </span>
                  </span>
                </Fragment>
              }
              item4={
                <Fragment>
                  <span className="engineering-graduates-text159 text-body-1">
                    <span className="engineering-graduates-text160">
                      Accelerate with Agile:
                    </span>
                    <span>
                      {' '}
                      Practise agile development techniques, to build and ship
                      high-quality software at pace.
                    </span>
                  </span>
                </Fragment>
              }
              item5={
                <Fragment>
                  <span className="engineering-graduates-text162">
                    The grievance hearer will look into any additional points
                    raised.
                  </span>
                </Fragment>
              }
              item6={
                <Fragment>
                  <span className="engineering-graduates-text163">
                    Once ready, the grievance hearer will produce a written
                    outcome letter of their findings. This is then shared with
                    relevant parties.
                  </span>
                </Fragment>
              }
              item7={
                <Fragment>
                  <span className="engineering-graduates-text164">
                    The Swigger who raised the grievance will be given the right
                    to appeal the findings of the grievance.
                  </span>
                </Fragment>
              }
              heading={
                <Fragment>
                  <span className="engineering-graduates-text165">
                    What will you be doing?
                  </span>
                </Fragment>
              }
              ctaLabel={
                <Fragment>
                  <span className="engineering-graduates-text166">
                    GET IN TOUCH
                  </span>
                </Fragment>
              }
              itemCount={4}
              rootClassName="check-listroot-class-name19"
              showParagraph
              headingParagraph={
                <Fragment>
                  <span className="engineering-graduates-text167">
                    From day one, you will be an active contributor, programming
                    alongside experienced software developers on real production
                    code and helping us build the next generation of AI-driven
                    security tools. Forget rigid, predetermined paths; you will
                    be expected to direct your own learning, take ownership, and
                    make a tangible impact quickly. You&apos;ll:
                  </span>
                </Fragment>
              }
            ></CheckList>
          </div>
        </div>
        <div className="engineering-graduates-section15 gap-m align-center padding-m column width-100">
          <div className="engineering-graduates-max-width15 gap-m width-max-content column width-100">
            <SimpleCard
              url="https://portswigger.net/careers/engineering"
              heading={
                <Fragment>
                  <span className="engineering-graduates-text168">
                    Software engineering at PortSwigger
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="engineering-graduates-text169">
                    Read more
                  </span>
                </Fragment>
              }
              rootClassName="simple-cardroot-class-name2"
            ></SimpleCard>
            <SimpleCard
              url="https://portswigger.net/careers/engineering/how-we-approach-development"
              heading={
                <Fragment>
                  <span className="engineering-graduates-text170">
                    How we approach software engineering
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="engineering-graduates-text171">
                    Read more
                  </span>
                </Fragment>
              }
              rootClassName="simple-cardroot-class-name3"
            ></SimpleCard>
          </div>
        </div>
        <div className="align-center position-relative column width-100">
          <div className="engineering-graduates-blue-filter position-absolute height-100 width-100"></div>
          <div className="engineering-graduates-max-width16 width-max-content column padding-horizontal-l padding-vertical-xxl width-100">
            <p className="engineering-graduates-text172 heading-1">
              We firmly believe in continuous learning and we encourage all our
              people to devote time to personal development alongside getting
              their work done.
            </p>
          </div>
          <img
            alt="image"
            src="/Pages/Culture/carrers-home-banner-200h.jpeg"
            className="engineering-graduates-image1 position-absolute height-100 width-100"
          />
        </div>
        <div className="gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <CheckList
              item1={
                <Fragment>
                  <span className="engineering-graduates-text173 text-body-1">
                    <span className="engineering-graduates-text174">
                      Dedicated Technical Mentorship:
                    </span>
                    <span>
                      {' '}
                      You’ll be paired with a senior engineer who will help you
                      set and achieve ambitious goals.
                    </span>
                  </span>
                </Fragment>
              }
              item2={
                <Fragment>
                  <span className="engineering-graduates-text176 text-body-1">
                    <span className="engineering-graduates-text177">
                      Hands-on Learning:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      You&apos;ll learn through working with experienced
                      engineers on real projects - gaining practical skills and
                      insights from day one.
                    </span>
                  </span>
                </Fragment>
              }
              item3={
                <Fragment>
                  <span className="engineering-graduates-text179 text-body-1">
                    <span className="engineering-graduates-text180">
                      Variety:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      You will have an opportunity to work on different products
                      across varying technological stacks.
                    </span>
                  </span>
                </Fragment>
              }
              item4={
                <Fragment>
                  <span className="engineering-graduates-text182 text-body-1">
                    <span className="engineering-graduates-text183">
                      A Supportive Start:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      A buddy will help you navigate your early days and make
                      sure you feel at home.
                    </span>
                  </span>
                </Fragment>
              }
              item5={
                <Fragment>
                  <span className="engineering-graduates-text185">
                    <span className="engineering-graduates-text186">
                      Resources for Growth:
                    </span>
                    <span>
                      {' '}
                      We’ll support you with whatever you need - books,
                      certifications, or access to cutting-edge tools.
                    </span>
                  </span>
                </Fragment>
              }
              item6={
                <Fragment>
                  <span className="engineering-graduates-text188">
                    <span className="engineering-graduates-text189">
                      A Welcoming Community:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      From grad socials and lunches to company-wide events and
                      special interest groups, you’ll have plenty of
                      opportunities to connect and thrive.
                    </span>
                  </span>
                </Fragment>
              }
              item7={
                <Fragment>
                  <span className="engineering-graduates-text191">
                    The Swigger who raised the grievance will be given the right
                    to appeal the findings of the grievance.
                  </span>
                </Fragment>
              }
              heading={
                <Fragment>
                  <span className="engineering-graduates-text192">
                    How will we support you?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              ctaLabel={
                <Fragment>
                  <span className="engineering-graduates-text193">
                    GET IN TOUCH
                  </span>
                </Fragment>
              }
              itemCount={6}
              rootClassName="check-listroot-class-name15"
              showParagraph
              headingParagraph={
                <Fragment>
                  <span className="engineering-graduates-text194">
                    We’re deeply invested in your learning, and we’ll give you
                    the structure and support to go far, fast. Our grads make
                    rapid progress because they’re embedded in real teams and
                    mentored by experienced engineers.
                  </span>
                </Fragment>
              }
            ></CheckList>
          </div>
        </div>
        <div className="engineering-graduates-section17 gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="engineering-graduates-text195">
                    <span>What are we looking for?</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="engineering-graduates-text198">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="engineering-graduates-text199">
                    We’re searching for curious and driven individuals with a
                    passion for tackling challenging problems - who are willing
                    and equipped to use AI as a key part of how they learn,
                    build, and solve.
                  </span>
                </Fragment>
              }
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name44"
            ></HeadingAndParagraph>
            <CheckList
              item1={
                <Fragment>
                  <span className="engineering-graduates-text200 text-body-1">
                    <span className="engineering-graduates-text201">
                      Strong Foundations:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      You’re on track for (or have recently achieved) a
                      first-class degree (UK) or a GPA of 3.7-4.0 (US) in
                      Computer Science, Software Engineering, or a related STEM
                      subject from a reputable University. You have previously
                      achieved a minimum A*AA at A-level with an A* in Maths or
                      Further maths, or equivalent. You understand core
                      programming principles, data structures, and algorithms.
                    </span>
                  </span>
                </Fragment>
              }
              item2={
                <Fragment>
                  <span className="engineering-graduates-text203 text-body-1">
                    <span className="engineering-graduates-text204">
                      Practical AI Experience:
                    </span>
                    <span>
                      {' '}
                      You have practical experience beyond your coursework that
                      shows your passion for technology. You have used
                      AI-powered development tools (e.g., agentic coding tools
                      like Claude Code, OpenAI Codex, Cursor, Windsurf, etc.) to
                      enhance your personal projects, improve code quality, or
                      learn more efficiently.
                    </span>
                  </span>
                </Fragment>
              }
              item3={
                <Fragment>
                  <span className="engineering-graduates-text206 text-body-1">
                    <span className="engineering-graduates-text207">
                      Advanced Problem-Solving:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      You exhibit strong analytical and critical thinking
                      skills, with an ability to break down complex problems and
                      a genuine excitement for applying computer science
                      fundamentals to new challenges.
                    </span>
                  </span>
                </Fragment>
              }
              item4={
                <Fragment>
                  <span className="engineering-graduates-text209 text-body-1">
                    <span className="engineering-graduates-text210">
                      Quality-Focused Coding:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      You can recognize and articulate the qualities of
                      well-structured, high-quality code and can write clean,
                      logical, and well-tested code in at least one language.
                    </span>
                  </span>
                </Fragment>
              }
              item5={
                <Fragment>
                  <span className="engineering-graduates-text212">
                    <span className="engineering-graduates-text213">
                      Resources for Growth:
                    </span>
                    <span>
                      {' '}
                      We’ll support you with whatever you need - books,
                      certifications, or access to cutting-edge tools.
                    </span>
                  </span>
                </Fragment>
              }
              item6={
                <Fragment>
                  <span className="engineering-graduates-text215">
                    <span className="engineering-graduates-text216">
                      A Welcoming Community:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      From grad socials and lunches to company-wide events and
                      special interest groups, you’ll have plenty of
                      opportunities to connect and thrive.
                    </span>
                  </span>
                </Fragment>
              }
              item7={
                <Fragment>
                  <span className="engineering-graduates-text218">
                    The Swigger who raised the grievance will be given the right
                    to appeal the findings of the grievance.
                  </span>
                </Fragment>
              }
              heading={
                <Fragment>
                  <span className="engineering-graduates-text219">
                    Technical &amp; Cognitive Prowess
                  </span>
                </Fragment>
              }
              ctaLabel={
                <Fragment>
                  <span className="engineering-graduates-text220">
                    GET IN TOUCH
                  </span>
                </Fragment>
              }
              itemCount={4}
              headingType="H4"
              rootClassName="check-listroot-class-name14"
              showParagraph={false}
              headingParagraph={
                <Fragment>
                  <span className="engineering-graduates-text221">
                    Strong Foundations: You’re on track for (or have recently
                    achieved) a first-class degree (UK) or a GPA of 3.7-4.0 (US)
                    in Computer Science, Software Engineering, or a related STEM
                    subject from a reputable University. You have previously
                    achieved a minimum A*AA at A-level with an A* in Maths or
                    Further maths, or equivalent. You understand core
                    programming principles, data structures, and algorithms.
                  </span>
                </Fragment>
              }
            ></CheckList>
            <CheckList
              item1={
                <Fragment>
                  <span className="engineering-graduates-text222 text-body-1">
                    <span className="engineering-graduates-text223">
                      Curiosity &amp; Drive:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      You’re driven by a desire to understand the “why” behind
                      technical decisions, and you actively pursue knowledge -
                      especially in fast-moving areas where clear resources may
                      not yet exist. You learn independently and see AI not as a
                      niche skill but as a core part of how modern engineers
                      learn, build, and solve.
                    </span>
                  </span>
                </Fragment>
              }
              item2={
                <Fragment>
                  <span className="engineering-graduates-text225 text-body-1">
                    <span className="engineering-graduates-text226">
                      Growth Mindset:
                    </span>
                    <span>
                      {' '}
                      You see challenges as learning opportunities and show
                      persistence when tackling difficult problems. You are not
                      afraid to admit when you don&apos;t know something and are
                      proactive in asking for help.
                    </span>
                  </span>
                </Fragment>
              }
              item3={
                <Fragment>
                  <span className="engineering-graduates-text228 text-body-1">
                    <span className="engineering-graduates-text229">
                      Ownership &amp; Impact:
                    </span>
                    <span>
                      {' '}
                      Your core motivation is to deliver work that truly matters
                      and solves real-world problems. You thrive on taking
                      responsibility for your work from start to finish.
                    </span>
                  </span>
                </Fragment>
              }
              item4={
                <Fragment>
                  <span className="engineering-graduates-text231 text-body-1">
                    <span className="engineering-graduates-text232">
                      Collaboration:
                    </span>
                    <span>
                      {' '}
                      You enjoy learning from others, sharing ideas contributing
                      to team goals, and being part of a high-performing team.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              }
              item5={
                <Fragment>
                  <span className="engineering-graduates-text234">
                    <span className="engineering-graduates-text235">
                      Resources for Growth:
                    </span>
                    <span>
                      {' '}
                      We’ll support you with whatever you need - books,
                      certifications, or access to cutting-edge tools.
                    </span>
                  </span>
                </Fragment>
              }
              item6={
                <Fragment>
                  <span className="engineering-graduates-text237">
                    <span className="engineering-graduates-text238">
                      A Welcoming Community:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      From grad socials and lunches to company-wide events and
                      special interest groups, you’ll have plenty of
                      opportunities to connect and thrive.
                    </span>
                  </span>
                </Fragment>
              }
              item7={
                <Fragment>
                  <span className="engineering-graduates-text240">
                    The Swigger who raised the grievance will be given the right
                    to appeal the findings of the grievance.
                  </span>
                </Fragment>
              }
              heading={
                <Fragment>
                  <span className="engineering-graduates-text241">
                    Cultural Alignment
                  </span>
                </Fragment>
              }
              ctaLabel={
                <Fragment>
                  <span className="engineering-graduates-text242">
                    GET IN TOUCH
                  </span>
                </Fragment>
              }
              itemCount={4}
              headingType="H4"
              rootClassName="check-listroot-class-name17"
              showParagraph={false}
              headingParagraph={
                <Fragment>
                  <span className="engineering-graduates-text243">
                    Strong Foundations: You’re on track for (or have recently
                    achieved) a first-class degree (UK) or a GPA of 3.7-4.0 (US)
                    in Computer Science, Software Engineering, or a related STEM
                    subject from a reputable University. You have previously
                    achieved a minimum A*AA at A-level with an A* in Maths or
                    Further maths, or equivalent. You understand core
                    programming principles, data structures, and algorithms.
                  </span>
                </Fragment>
              }
            ></CheckList>
          </div>
        </div>
        <div className="gap-m align-center padding-m column width-100">
          <div className="engineering-graduates-max-width19 gap-m width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="engineering-graduates-text244">
                    <span>FAQs</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="engineering-graduates-text247">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="engineering-graduates-text248">
                    We’re searching for curious and driven individuals with a
                    passion for tackling challenging problems - who are willing
                    and equipped to use AI as a key part of how they learn,
                    build, and solve.
                  </span>
                </Fragment>
              }
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name45"
              showParagraph={false}
            ></HeadingAndParagraph>
            <AccordionList
              item1Content={
                <Fragment>
                  <span className="engineering-graduates-item1-content1 text-body-1">
                    Applications for our early careers programmes are expected
                    to open in September. We recruit on a rolling basis and
                    therefore recommend applying as early as possible.
                  </span>
                </Fragment>
              }
              item1Trigger={
                <Fragment>
                  <span className="engineering-graduates-text249">
                    When do applications open and is there an application
                    deadline?
                  </span>
                </Fragment>
              }
              item2Content={
                <Fragment>
                  <span className="engineering-graduates-item2-content1 text-body-1">
                    Yes. We value continuous development and your ongoing
                    interest in our programmes. If you have been unsuccessful
                    with a previous application, we would welcome you to reapply
                    after a period of 12 months from your initial submission.
                    This allows time for you to gain additional skills and
                    experience that may strengthen a future application.
                  </span>
                </Fragment>
              }
              item2Trigger={
                <Fragment>
                  <span className="engineering-graduates-text250">
                    <span>Can I re-apply if I am unsuccessful?</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              item3Content={
                <Fragment>
                  <span className="engineering-graduates-text253">
                    Yes, we do. We are a Home Office licensed sponsor and
                    proudly welcome applications from candidates who require
                    sponsorship. We support the Graduate visa route, and our
                    recruitment team will work with successful candidates to
                    determine the most appropriate pathway.
                  </span>
                </Fragment>
              }
              item3Trigger={
                <Fragment>
                  <span className="engineering-graduates-text254">
                    Do you provide visa sponsorship?
                  </span>
                </Fragment>
              }
              item4Content={
                <Fragment>
                  <span className="engineering-graduates-item4-content1 text-body-1">
                    We are looking for candidates with a strong record of
                    academic excellence. Successful applicants typically have
                    high grades, particularly in Mathematics or Further Maths,
                    demonstrating the analytical skills needed to succeed on our
                    programmes. In addition, you should be on track for, or have
                    recently achieved, a 1st class degree from a leading
                    university.
                  </span>
                </Fragment>
              }
              item4Trigger={
                <Fragment>
                  <span className="engineering-graduates-text255">
                    What are the minimum academic requirements?
                  </span>
                </Fragment>
              }
              item5Content={
                <Fragment>
                  <span className="engineering-graduates-text256">
                    Once you&apos;ve submitted your application, our team will
                    review it carefully. We do our best to process all
                    applications as quickly as possible. You should expect to
                    hear back from us via email regarding the next steps, so
                    please keep an eye on your inbox.
                  </span>
                </Fragment>
              }
              item5Trigger={
                <Fragment>
                  <span className="engineering-graduates-text257">
                    What happens after I submit my application?
                  </span>
                </Fragment>
              }
              item6Content={
                <Fragment>
                  <span className="engineering-graduates-item6-content1 text-body-1">
                    For the time being, all our Developer Graduate Programmes
                    take place in our founding Knutsford office. While we have
                    teams across the globe in locations like Atlanta and London,
                    and collaborate with them daily, early careers opportunities
                    are currently based exclusively in Knutsford.
                  </span>
                </Fragment>
              }
              item6Trigger={
                <Fragment>
                  <span className="engineering-graduates-text258">
                    Where does the graduate programme take place?
                  </span>
                </Fragment>
              }
              rootClassName="accordion-listroot-class-name3"
              nrOfAccordions={5}
            ></AccordionList>
            <AccordionList
              item1Content={
                <Fragment>
                  <span className="engineering-graduates-item1-content2 text-body-1">
                    <span>
                      For the time being, all our Developer Graduate Programmes
                      take place in our founding Knutsford office. While we have
                      teams across the globe in locations like Atlanta and
                      London, and collaborate with them daily, early careers
                      opportunities are currently based exclusively in
                      Knutsford.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              item1Trigger={
                <Fragment>
                  <span className="engineering-graduates-text261">
                    Where does the graduate programme take place?
                  </span>
                </Fragment>
              }
              item2Content={
                <Fragment>
                  <span className="engineering-graduates-item2-content2 text-body-1">
                    Yes, absolutely. We welcome applications from students
                    completing their final year of studies and from recent
                    graduates, whether you have completed an undergraduate,
                    Master&apos;s, or PhD programme.
                  </span>
                </Fragment>
              }
              item2Trigger={
                <Fragment>
                  <span className="engineering-graduates-text262">
                    <span>
                      Can I become a Graduate if I already graduated from my
                      studies?
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              item3Content={
                <Fragment>
                  <span className="engineering-graduates-text265">
                    <span>
                      Our graduate programme has a duration of two years. While
                      most of our graduates join us in September, we can be
                      flexible on the start date to suit your needs.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              item3Trigger={
                <Fragment>
                  <span className="engineering-graduates-text268">
                    When does the programme start and what is the duration?
                  </span>
                </Fragment>
              }
              item4Content={
                <Fragment>
                  <span className="engineering-graduates-item4-content2 text-body-1">
                    <span>
                      We understand that accepting an offer may mean relocating,
                      and we have support in place to make that move as smooth
                      as possible.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      For new graduates moving to the area, we offer a stay in
                      our company guesthouse, the Swighouse. This allows you to
                      settle into the company and the Knutsford area for your
                      first few months, rent-free, giving you plenty of time to
                      find a permanent place to live.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      If staying at the Swighouse isn&apos;t a suitable option
                      for you, we can look to offer a relocation package to
                      assist with your move. This financial support is provided
                      in line with HMRC guidance.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      The best option for you can be discussed with our culture
                      and finance team during the offer stage.
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              }
              item4Trigger={
                <Fragment>
                  <span className="engineering-graduates-text281">
                    What if I need to relocate?
                  </span>
                </Fragment>
              }
              item5Content={
                <Fragment>
                  <span className="engineering-graduates-text282">
                    Once you&apos;ve submitted your application, our team will
                    review it carefully. We do our best to process all
                    applications as quickly as possible. You should expect to
                    hear back from us via email regarding the next steps, so
                    please keep an eye on your inbox.
                  </span>
                </Fragment>
              }
              item5Trigger={
                <Fragment>
                  <span className="engineering-graduates-text283">
                    What happens after I submit my application?
                  </span>
                </Fragment>
              }
              item6Content={
                <Fragment>
                  <span className="engineering-graduates-item6-content2 text-body-1">
                    For the time being, all our Developer Graduate Programmes
                    take place in our founding Knutsford office. While we have
                    teams across the globe in locations like Atlanta and London,
                    and collaborate with them daily, early careers opportunities
                    are currently based exclusively in Knutsford.
                  </span>
                </Fragment>
              }
              item6Trigger={
                <Fragment>
                  <span className="engineering-graduates-text284">
                    Where does the graduate programme take place?
                  </span>
                </Fragment>
              }
              rootClassName="accordion-listroot-class-name4"
              nrOfAccordions={4}
            ></AccordionList>
          </div>
        </div>
        <div className="gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="engineering-graduates-text285">
                    Our Application Process: What to Expect
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="engineering-graduates-text286">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="engineering-graduates-text287">
                    <span>
                      We&apos;ve designed our application process to give you
                      the best opportunity to showcase your skills and to learn
                      more about us. Here’s a step-by-step guide to what you can
                      expect after you submit your application.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="engineering-graduates-text291">
                      1. CV Review
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      The first step is a review of your CV and application
                      form. Our team will carefully assess your academic
                      background, skills, and experiences to see how they align
                      with the requirements of the programme.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="engineering-graduates-text295">
                      2. Online Technical Assessment
                    </span>
                    <span>
                      {' '}
                      If your initial application is successful, you&apos;ll be
                      invited to complete an online technical assessment. This
                      stage is designed to evaluate your technical skills and
                      problem-solving abilities relevant to the role you&apos;ve
                      applied for.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="engineering-graduates-text299">
                      3. Video Interview
                    </span>
                    <span>
                      {' '}
                      Next, you’ll be invited to a video interview with a member
                      from our TA team. This is our chance to learn more about
                      you, your motivations for applying, and what you know
                      about our company. It’s also a great opportunity for you
                      to ask questions and see if we are the right cultural fit
                      for you.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="engineering-graduates-text303">
                      4. Onsite Assessment Day
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Successful candidates from the video interview stage will
                      be invited to an assessment day at our Knutsford office.
                      The day will involve a series of activities such as group
                      exercises, individual activities, and further interviews,
                      giving us a holistic view of your capabilities.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="engineering-graduates-text305">
                      Our first assessment day is scheduled for 7th October
                      2025, with further assessment days to follow.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="engineering-graduates-text308">
                      5. Offer
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      The final stage is the offer. If you&apos;ve successfully
                      demonstrated your potential throughout the process, we
                      will contact you to formally offer you a place on our
                      graduate developer programme. Congratulations!
                    </span>
                  </span>
                </Fragment>
              }
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name41"
            ></HeadingAndParagraph>
          </div>
        </div>
        <section className="engineering-graduates-section20 gap-m align-center padding-m padding-vertical-l column width-100">
          <div className="gap-m align-center width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="engineering-graduates-text310">
                    Meet the Swiggers
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="engineering-graduates-text311">
                    Securing the web
                  </span>
                </Fragment>
              }
              paragraph={
                <Fragment>
                  <span className="engineering-graduates-text312">
                    We are a diverse group of people with a wide range of
                    interests and backgrounds. What Swiggers have in common is
                    that they all love their work and are exceptionally good at
                    what they do.
                  </span>
                </Fragment>
              }
            ></HeadingAndParagraph>
            <div className="gap-m align-center width-max-content grid-colums-3 grid justify-center width-100">
              <div className="gap-s align-center column">
                <img
                  alt="image"
                  src="/Pages/BetterTogether/pastedimage-3z-200w.png"
                  className="engineering-graduates-image2"
                />
                <span className="heading-5 text-center">
                  <span>
                    Jess H, Culture
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Champion</span>
                </span>
              </div>
              <div className="gap-s align-center column">
                <img
                  alt="image"
                  src="/Pages/BetterTogether/pastedimage-nv59-200w.png"
                  className="engineering-graduates-image3"
                />
                <span className="heading-5 text-center">
                  <span>
                    Mohamed H, Software
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Developer</span>
                </span>
              </div>
              <div className="gap-s align-center column">
                <img
                  alt="image"
                  src="/Pages/BetterTogether/pastedimage-8zqo-200w.png"
                  className="engineering-graduates-image4"
                />
                <span className="heading-5 text-center">
                  <span>
                    Mike S, Software
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Developer</span>
                </span>
              </div>
            </div>
            <a href="https://portswigger.net/about/team">
              <Button
                size="large"
                btnLabel={
                  <Fragment>
                    <span className="engineering-graduates-text325">
                      MEET THE SWIGGERS
                    </span>
                  </Fragment>
                }
                iconPlacement="none"
                rootClassName="buttonroot-class-name29"
                className="engineering-graduates-component34"
              ></Button>
            </a>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default EngineeringGraduates
