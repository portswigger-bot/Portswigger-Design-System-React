import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../components/live-tag-production'
import Navigation from '../../components/navigation'
import ExtraNavigationCulturePages from '../../components/extra-navigation-culture-pages'
import Hero from '../../components/hero'
import HeadingAndParagraph from '../../components/heading-and-paragraph'
import Icon from '../../components/icon'
import CheckList from '../../components/check-list'
import Button from '../../components/button'
import SimpleCard from '../../components/simple-card'
import Footer from '../../components/footer'
import './better-together.css'

const BetterTogether = (props) => {
  return (
    <div className="better-together-container1">
      <Helmet>
        <title>Better together at PortSwigger</title>
        <meta
          name="description"
          content="A key aspect of our culture is that we are better together. Our teams come together in our PortSwigger HQ every day to achieve the incredible."
        />
        <meta property="og:title" content="Better together at PortSwigger" />
        <meta
          property="og:description"
          content="A key aspect of our culture is that we are better together. Our teams come together in our PortSwigger HQ every day to achieve the incredible."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation></Navigation>
      <ExtraNavigationCulturePages rootClassName="extra-navigation-culture-pagesroot-class-name"></ExtraNavigationCulturePages>
      <main className="gap-m align-center column width-100 better-together-main">
        <Hero
          heading={
            <Fragment>
              <span className="better-together-text100">Better together</span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="better-together-text101">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="better-together-text102">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="better-together-text103">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/BetterTogether/better-together-hero-1200w.png"
          subHeading={
            <Fragment>
              <span className="better-together-text104">
                <span>
                  Our culture is our most important superpower,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  and our biggest differentiator as an
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  organisation. We&apos;re proud of our culture, and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>fiercely protective of it.</span>
              </span>
            </Fragment>
          }
          rootClassName="heroroot-class-name"
          mainImageAlign="center"
          mainImageHeight="320px"
        ></Hero>
        <section className="align-center padding-m position-relative column width-100">
          <div className="gap-m width-max-content column justify-center width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="better-together-text112">
                    Why we’re better together
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="better-together-text113">
                    Securing the web
                  </span>
                </Fragment>
              }
              paragraph={
                <Fragment>
                  <span className="better-together-text114">
                    <span>
                      A key aspect of our culture is that we are better
                      together. Our teams come together in our PortSwigger
                      offices
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      every day because we believe that by being together, we
                      can:
                    </span>
                  </span>
                </Fragment>
              }
              headingType="H3"
            ></HeadingAndParagraph>
            <div className="better-together-list gap-s grid-colums-4 grid">
              <div className="gap-s align-center row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name33"
                ></Icon>
                <p className="heading-5">Achieve the incredible.</p>
              </div>
              <div className="gap-s align-center row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name39"
                ></Icon>
                <p className="heading-5">Support each other.</p>
              </div>
              <div className="gap-s align-center row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name38"
                ></Icon>
                <p className="heading-5">Trust and be open.</p>
              </div>
              <div className="gap-s align-center row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name37"
                ></Icon>
                <p className="heading-5">Have fun!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="better-together-section2 gap-m align-center padding-m padding-vertical-l column width-100">
          <div className="gap-m flex-1 align-center width-max-content column width-100">
            <div className="gap-s align-center column justify-center">
              <h3 className="better-together-text122 heading-3 text-center">
                Why our swiggers love coming to work
              </h3>
              <span className="text-body-1 text-center">
                <span>
                  Hear directly from our amazing Swiggers to learn about what
                  they get up to, and why they love coming to
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>work every day.</span>
              </span>
            </div>
            <div className="column width-100 align-stretch">
              <iframe
                src="https://www.youtube.com/embed/TRkPp0LPG44?si=zOidC3l6dO1BJGD6"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="better-together-iframe width-100"
              ></iframe>
            </div>
          </div>
        </section>
        <div className="gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="better-together-text127">
                    Why we work together in the office
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="better-together-text128">
                    Securing the web
                  </span>
                </Fragment>
              }
              paragraph={
                <Fragment>
                  <span className="better-together-text129">
                    We are a diverse group of people with a wide range of
                    interests and backgrounds. What Swiggers have in common is
                    that they all love their work and are exceptionally good at
                    what they do.
                  </span>
                </Fragment>
              }
              headingType="H3"
              showParagraph={false}
            ></HeadingAndParagraph>
            <div className="gap-m justify-center width-100 row better-together-text-banner1">
              <div className="gap-m flex-1 column justify-center">
                <CheckList
                  item1={
                    <Fragment>
                      <span className="better-together-text130 text-body-1">
                        Pairing and collaboration.
                      </span>
                    </Fragment>
                  }
                  item2={
                    <Fragment>
                      <span className="better-together-text131 text-body-1">
                        Spontaneous discussion.
                      </span>
                    </Fragment>
                  }
                  item3={
                    <Fragment>
                      <span className="better-together-text132 text-body-1">
                        Open sharing of ideas.
                      </span>
                    </Fragment>
                  }
                  item4={
                    <Fragment>
                      <span className="better-together-text133 text-body-1">
                        Group dialogue and participation in decision-making.
                      </span>
                    </Fragment>
                  }
                  item5={
                    <Fragment>
                      <span className="better-together-text134">
                        The grievance hearer will look into any additional
                        points raised.
                      </span>
                    </Fragment>
                  }
                  item6={
                    <Fragment>
                      <span className="better-together-text135">
                        Once ready, the grievance hearer will produce a written
                        outcome letter of their findings. This is then shared
                        with relevant parties.
                      </span>
                    </Fragment>
                  }
                  item7={
                    <Fragment>
                      <span className="better-together-text136">
                        The Swigger who raised the grievance will be given the
                        right to appeal the findings of the grievance.
                      </span>
                    </Fragment>
                  }
                  heading={
                    <Fragment>
                      <span className="better-together-text137">
                        Working together wherever possible, enables:
                      </span>
                    </Fragment>
                  }
                  ctaLabel={
                    <Fragment>
                      <span className="better-together-text138">
                        GET IN TOUCH
                      </span>
                    </Fragment>
                  }
                  itemCount={4}
                  headingType="H4"
                  headingParagraph={
                    <Fragment>
                      <span className="better-together-text139">
                        Swiggers travel to work in various ways. Each of our
                        offices offers different commuting options and amenities
                        to support your commute to work:
                      </span>
                    </Fragment>
                  }
                ></CheckList>
                <CheckList
                  item1={
                    <Fragment>
                      <span className="better-together-text140 text-body-1">
                        Achieve rapid progress.
                      </span>
                    </Fragment>
                  }
                  item2={
                    <Fragment>
                      <span className="better-together-text141 text-body-1">
                        Work in an iterative, agile way, with real-time
                        feedback.
                      </span>
                    </Fragment>
                  }
                  item3={
                    <Fragment>
                      <span className="better-together-text142 text-body-1">
                        Fail fast, share learnings from mistakes, and grow
                        together.
                      </span>
                    </Fragment>
                  }
                  item4={
                    <Fragment>
                      <span className="better-together-text143 text-body-1">
                        Foster a strong sense of belonging for the Swiggers in
                        them.
                      </span>
                    </Fragment>
                  }
                  item5={
                    <Fragment>
                      <span className="better-together-text144">
                        The grievance hearer will look into any additional
                        points raised.
                      </span>
                    </Fragment>
                  }
                  item6={
                    <Fragment>
                      <span className="better-together-text145">
                        Once ready, the grievance hearer will produce a written
                        outcome letter of their findings. This is then shared
                        with relevant parties.
                      </span>
                    </Fragment>
                  }
                  item7={
                    <Fragment>
                      <span className="better-together-text146">
                        The Swigger who raised the grievance will be given the
                        right to appeal the findings of the grievance.
                      </span>
                    </Fragment>
                  }
                  heading={
                    <Fragment>
                      <span className="better-together-text147">
                        Resulting in teams that:
                      </span>
                    </Fragment>
                  }
                  ctaLabel={
                    <Fragment>
                      <span className="better-together-text148">
                        GET IN TOUCH
                      </span>
                    </Fragment>
                  }
                  itemCount={4}
                  headingType="H4"
                  headingParagraph={
                    <Fragment>
                      <span className="better-together-text149">
                        Swiggers travel to work in various ways. Each of our
                        offices offers different commuting options and amenities
                        to support your commute to work:
                      </span>
                    </Fragment>
                  }
                ></CheckList>
              </div>
              <div className="better-together-image1 width-100 row">
                <img
                  alt="pastedImage"
                  src="/Pages/BetterTogether/pastedimage-7u3d-600w.png"
                  className="width-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="better-together-text150">
                    How we invest in being better together
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="better-together-text151">
                    Securing the web
                  </span>
                </Fragment>
              }
              paragraph={
                <Fragment>
                  <span className="better-together-text152">
                    In support of our Better Together approach to work, we
                    invest in:
                  </span>
                </Fragment>
              }
              headingType="H3"
              showParagraph
            ></HeadingAndParagraph>
          </div>
        </div>
        <div className="gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <div className="gap-m justify-center width-100 row-reverse better-together-text-banner2">
              <div className="gap-m flex-1 column justify-center">
                <CheckList
                  item1={
                    <Fragment>
                      <span className="better-together-text153 text-body-1">
                        Work-life balance is highly encouraged.
                      </span>
                    </Fragment>
                  }
                  item2={
                    <Fragment>
                      <span className="better-together-text154 text-body-1">
                        Flexible hours accommodate commuting and personal
                        circumstances.
                      </span>
                    </Fragment>
                  }
                  item3={
                    <Fragment>
                      <span className="better-together-text155 text-body-1">
                        Swiggers are given trust and autonomy.
                      </span>
                    </Fragment>
                  }
                  item4={
                    <Fragment>
                      <span className="better-together-text156 text-body-1">
                        A strong sense of community and belonging.
                      </span>
                    </Fragment>
                  }
                  item5={
                    <Fragment>
                      <span className="better-together-text157">
                        The grievance hearer will look into any additional
                        points raised.
                      </span>
                    </Fragment>
                  }
                  item6={
                    <Fragment>
                      <span className="better-together-text158">
                        Once ready, the grievance hearer will produce a written
                        outcome letter of their findings. This is then shared
                        with relevant parties.
                      </span>
                    </Fragment>
                  }
                  item7={
                    <Fragment>
                      <span className="better-together-text159">
                        The Swigger who raised the grievance will be given the
                        right to appeal the findings of the grievance.
                      </span>
                    </Fragment>
                  }
                  heading={
                    <Fragment>
                      <span className="better-together-text160">
                        People and culture
                      </span>
                    </Fragment>
                  }
                  ctaLabel={
                    <Fragment>
                      <span className="better-together-text161">
                        GET IN TOUCH
                      </span>
                    </Fragment>
                  }
                  itemCount={4}
                  headingType="H4"
                  headingParagraph={
                    <Fragment>
                      <span className="better-together-text162">
                        Swiggers travel to work in various ways. Each of our
                        offices offers different commuting options and amenities
                        to support your commute to work:
                      </span>
                    </Fragment>
                  }
                ></CheckList>
              </div>
              <div className="better-together-image2 width-100 row">
                <img
                  alt="pastedImage"
                  src="/Pages/BetterTogether/pastedimage-z52-400w.png"
                  className="width-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="better-together-section6 gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <div className="gap-m justify-center width-100 row better-together-text-banner3">
              <div className="gap-m flex-1 column justify-center">
                <CheckList
                  item1={
                    <Fragment>
                      <span className="better-together-text163 text-body-1">
                        Beautiful, open-plan office space to support
                        collaboration.
                      </span>
                    </Fragment>
                  }
                  item2={
                    <Fragment>
                      <span className="better-together-text164 text-body-1">
                        Breakout space to allow you to come together with fellow
                        Swiggers to socialise and build connections.
                      </span>
                    </Fragment>
                  }
                  item3={
                    <Fragment>
                      <span className="better-together-text165 text-body-1">
                        Free drinks and snacks available in all offices.
                      </span>
                    </Fragment>
                  }
                  item4={
                    <Fragment>
                      <span className="better-together-text166 text-body-1">
                        Company funded socials and opportunities to come
                        together over a meal (either in our offices or outside
                        depending upon location).
                      </span>
                    </Fragment>
                  }
                  item5={
                    <Fragment>
                      <span className="better-together-text167">
                        The grievance hearer will look into any additional
                        points raised.
                      </span>
                    </Fragment>
                  }
                  item6={
                    <Fragment>
                      <span className="better-together-text168">
                        Once ready, the grievance hearer will produce a written
                        outcome letter of their findings. This is then shared
                        with relevant parties.
                      </span>
                    </Fragment>
                  }
                  item7={
                    <Fragment>
                      <span className="better-together-text169">
                        The Swigger who raised the grievance will be given the
                        right to appeal the findings of the grievance.
                      </span>
                    </Fragment>
                  }
                  heading={
                    <Fragment>
                      <span className="better-together-text170">
                        Workplace and amenities
                      </span>
                    </Fragment>
                  }
                  ctaLabel={
                    <Fragment>
                      <span className="better-together-text171">
                        GET IN TOUCH
                      </span>
                    </Fragment>
                  }
                  itemCount={4}
                  headingType="H4"
                  headingParagraph={
                    <Fragment>
                      <span className="better-together-text172">
                        Swiggers travel to work in various ways. Each of our
                        offices offers different commuting options and amenities
                        to support your commute to work:
                      </span>
                    </Fragment>
                  }
                ></CheckList>
              </div>
              <div className="better-together-image3 width-100 row">
                <img
                  alt="pastedImage"
                  src="/Pages/BetterTogether/pastedimage-npe4-600w.png"
                  className="width-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gap-m align-center padding-m column width-100">
          <div className="gap-m width-max-content column width-100">
            <div className="gap-m justify-center width-100 row-reverse better-together-text-banner4">
              <div className="gap-m flex-1 column justify-center">
                <CheckList
                  item1={
                    <Fragment>
                      <span className="better-together-text173 text-body-1">
                        Strong team relationships.
                      </span>
                    </Fragment>
                  }
                  item2={
                    <Fragment>
                      <span className="better-together-text174 text-body-1">
                        Sense of belonging.
                      </span>
                    </Fragment>
                  }
                  item3={
                    <Fragment>
                      <span className="better-together-text175 text-body-1">
                        Understanding, openness, and trust.
                      </span>
                    </Fragment>
                  }
                  item4={
                    <Fragment>
                      <span className="better-together-text176 text-body-1">
                        High bandwidth communication, face to face wherever
                        possible.
                      </span>
                    </Fragment>
                  }
                  item5={
                    <Fragment>
                      <span className="better-together-text177">
                        The grievance hearer will look into any additional
                        points raised.
                      </span>
                    </Fragment>
                  }
                  item6={
                    <Fragment>
                      <span className="better-together-text178">
                        Once ready, the grievance hearer will produce a written
                        outcome letter of their findings. This is then shared
                        with relevant parties.
                      </span>
                    </Fragment>
                  }
                  item7={
                    <Fragment>
                      <span className="better-together-text179">
                        The Swigger who raised the grievance will be given the
                        right to appeal the findings of the grievance.
                      </span>
                    </Fragment>
                  }
                  heading={
                    <Fragment>
                      <span className="better-together-text180">
                        High performing teams
                      </span>
                    </Fragment>
                  }
                  ctaLabel={
                    <Fragment>
                      <span className="better-together-text181">
                        GET IN TOUCH
                      </span>
                    </Fragment>
                  }
                  itemCount={4}
                  headingType="H4"
                  headingParagraph={
                    <Fragment>
                      <span className="better-together-text182">
                        Swiggers travel to work in various ways. Each of our
                        offices offers different commuting options and amenities
                        to support your commute to work:
                      </span>
                    </Fragment>
                  }
                ></CheckList>
              </div>
              <div className="better-together-image4 width-100 row">
                <img
                  alt="pastedImage"
                  src="/Pages/BetterTogether/pastedimage-2v0b-400w.png"
                  className="width-100"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="better-together-section8 gap-m align-center padding-m padding-vertical-l column width-100">
          <div className="gap-m align-center width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="better-together-text183">
                    Meet the Swiggers
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="better-together-text184">
                    Securing the web
                  </span>
                </Fragment>
              }
              paragraph={
                <Fragment>
                  <span className="better-together-text185">
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
                  className="better-together-image5"
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
                  className="better-together-image6"
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
                  className="better-together-image7"
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
                    <span className="better-together-text198">
                      MEET THE SWIGGERS
                    </span>
                  </Fragment>
                }
                iconPlacement="none"
                className="better-together-component27"
              ></Button>
            </a>
          </div>
        </section>
        <div className="align-center position-relative column width-100">
          <div className="better-together-max-width18 width-max-content column padding-horizontal-l padding-vertical-xxl width-100">
            <p className="better-together-text199 heading-1">
              <span>
                Humans aren&apos;t resources.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                PortSwigger is its people; they aren&apos;t
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>just a means to the company&apos;s ends.</span>
            </p>
          </div>
          <div className="better-together-blue-filter position-absolute height-100 width-100"></div>
          <img
            alt="image"
            src="/Pages/Culture/carrers-home-banner-1500w.jpeg"
            className="better-together-image8 position-absolute height-100 width-100"
          />
        </div>
        <section className="gap-m align-center padding-m column width-100">
          <div className="gap-m align-center width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="better-together-text205">
                    Interested in joining us?
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="better-together-text206">
                    Securing the web
                  </span>
                </Fragment>
              }
              paragraph={
                <Fragment>
                  <span className="better-together-text207">
                    Have a look at our current opportunities to find out how you
                    could start working better together.
                  </span>
                </Fragment>
              }
              headingType="H3"
            ></HeadingAndParagraph>
            <div className="gap-m align-center grid-colums-3 grid justify-center width-100">
              <SimpleCard
                url="https://portswigger.net/careers"
                heading={
                  <Fragment>
                    <span className="better-together-text208">
                      Opportunities
                    </span>
                  </Fragment>
                }
                linkLabel={
                  <Fragment>
                    <span className="better-together-text209">Read more</span>
                  </Fragment>
                }
              ></SimpleCard>
              <SimpleCard
                url="https://portswigger.net/careers/reward"
                heading={
                  <Fragment>
                    <span className="better-together-text210">Rewards</span>
                  </Fragment>
                }
                linkLabel={
                  <Fragment>
                    <span className="better-together-text211">Read more</span>
                  </Fragment>
                }
              ></SimpleCard>
              <SimpleCard
                url="https://portswigger.net/careers/application-process"
                heading={
                  <Fragment>
                    <span className="better-together-text212">
                      Application process
                    </span>
                  </Fragment>
                }
                linkLabel={
                  <Fragment>
                    <span className="better-together-text213">Read more</span>
                  </Fragment>
                }
              ></SimpleCard>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default BetterTogether
