import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../components/live-tag-production'
import Navigation from '../../components/navigation'
import ExtraNavigationCulturePages from '../../components/extra-navigation-culture-pages'
import Hero from '../../components/hero'
import StickySideNavigation from '../../components/sticky-side-navigation'
import Icon from '../../components/icon'
import SimpleCard from '../../components/simple-card'
import Footer from '../../components/footer'
import './culture.css'

const Culture = (props) => {
  return (
    <div className="culture-container1">
      <Helmet>
        <title>Our Culture - PortSwigger</title>
        <meta
          name="description"
          content="The PortSwigger culture creates the conditions for our success. We create an environment of trust, openness, and freedom to fail, which fosters innovation."
        />
        <meta property="og:title" content="Our Culture - PortSwigger" />
        <meta
          property="og:description"
          content="The PortSwigger culture creates the conditions for our success. We create an environment of trust, openness, and freedom to fail, which fosters innovation."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation></Navigation>
      <ExtraNavigationCulturePages rootClassName="extra-navigation-culture-pagesroot-class-name2"></ExtraNavigationCulturePages>
      <main className="gap-m align-center column width-100 culture-main">
        <Hero
          heading={
            <Fragment>
              <span className="culture-text10">PortSwigger Culture</span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="culture-text11">FIND OUT MORE</span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="culture-text12">Burp Suite Professional</span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="culture-text13">BUY - $475</span>
            </Fragment>
          }
          subHeading={
            <Fragment>
              <span className="culture-text14">
                <span>Culture eats everything for</span>
                <br></br>
                <span>breakfast.</span>
              </span>
            </Fragment>
          }
          columnLayout="40-60"
        ></Hero>
        <section className="align-center padding-m column width-100">
          <div className="gap-m align-center width-max-content column justify-center width-100">
            <p className="text-intro text-center">
              <span>
                Our culture is our most important superpower, and our biggest
                differentiator as an organization.
              </span>
              <br></br>
              <span>
                We&apos;re proud of our culture, and fiercely protective of it.
              </span>
            </p>
            <img
              alt="pastedImage"
              src="/Pages/Culture/carrers-logic-scheme-1200w.png"
              className="width-100"
            />
          </div>
        </section>
        <section className="align-center padding-m position-relative column width-100">
          <div className="gap-m width-max-content justify-center width-100 row culture-max-width2">
            <StickySideNavigation
              header={
                <Fragment>
                  <span className="culture-text22">PortSwigger Culture</span>
                </Fragment>
              }
              rootClassName="sticky-side-navigationroot-class-name"
            ></StickySideNavigation>
            <div className="gap-m flex-1 column">
              <div className="position-relative">
                <div className="width-max-content column padding-horizontal-l padding-vertical-xxl width-100">
                  <p className="culture-text23 heading-1">
                    Our culture is a hard dependency for achieving our primary
                    motivations.
                  </p>
                </div>
                <div className="culture-blue-filter position-absolute height-100 width-100"></div>
                <img
                  alt="image"
                  src="/Pages/Culture/carrers-home-banner-1200w.jpeg"
                  className="culture-image position-absolute height-100 width-100"
                />
              </div>
              <div className="gap-s column">
                <div className="gap-s align-start row">
                  <Icon
                    type="check-circle"
                    rootClassName="iconroot-class-name24"
                  ></Icon>
                  <p className="text-body-1">
                    <span className="culture-text25">Have fun.</span>
                    <span>
                       Think of all the things that can prevent work being fun.
                      They generally come down to bad culture: disrespect,
                      hoarding information and assets, command-and-control
                      management, selfishness, organizational politics, lack of
                      integrity, dysfunctional backstabbers, over-promoted
                      under-performers. Our culture is the antidote to all these
                      things.
                    </span>
                  </p>
                </div>
                <div className="gap-s align-start row">
                  <Icon
                    type="check-circle"
                    rootClassName="iconroot-class-name27"
                  ></Icon>
                  <p className="text-body-1">
                    <span className="culture-text28">
                      Have a worthwhile mission.
                    </span>
                    <span>
                      {' '}
                      Our mission is a hugely ambitious goal that we won&apos;t
                      achieve easily or quickly. Our culture enables us to stay
                      aligned to this mission, by focusing on the long term,
                      holding the vision, working together very collaboratively,
                      and defaulting to open communication.
                    </span>
                  </p>
                </div>
                <div className="gap-s align-start row">
                  <Icon
                    type="check-circle"
                    rootClassName="iconroot-class-name26"
                  ></Icon>
                  <p className="text-body-1">
                    <span className="culture-text31">Be successful.</span>
                    <span>
                      {' '}
                      Our culture creates the conditions for our success.
                      We&apos;re uncompromising in only recruiting the best
                      people. We create an environment of trust, openness, and
                      freedom to fail, which fosters innovation. Our servant
                      leadership brings out the best in all our people,
                      recognizes their potential, and enables continuous
                      learning. This is how we achieve the incredible.
                    </span>
                  </p>
                </div>
                <div className="gap-s align-start row">
                  <Icon
                    type="check-circle"
                    rootClassName="iconroot-class-name25"
                  ></Icon>
                  <p className="text-body-1">
                    <span className="culture-text34">
                      Be a force for good in the world.
                    </span>
                    <span>
                      {' '}
                      Delivering amazing products and services certainly makes
                      the world a better place. But our culture means that we
                      are also instinctively generous, giving away much more
                      than we need to. We directly improve the lives of our
                      people and numerous others. We do this as an end in
                      itself, not as a cynical means to profit.
                    </span>
                  </p>
                </div>
              </div>
              <iframe
                src="https://www.youtube.com/embed/GkoRRRcm2hY?si=na1LFqDB6mIUSqCZ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="culture-iframe width-100"
              ></iframe>
              <div className="gap-s column">
                <h3 className="culture-text36 heading-3">Find out more</h3>
                <span className="text-body-1">
                  <span>
                    To find out more about the culture at PortSwigger, how we
                    work together as a business, and the way we operate on a day
                    to day basis,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://portswigger.net/careers/culture/staff-handbook"
                    className="culture-link1"
                  >
                    read our staff handbook
                  </a>
                </span>
                <span className="text-body-1">
                  <span>
                    For an exciting overview of what our Swiggers get up to
                    every day, check out our 
                  </span>
                  <a
                    href="https://portswigger.net/careers/culture/life-as-a-swigger"
                    className="culture-link2"
                  >
                    Life as a Swigger page
                  </a>
                </span>
              </div>
              <div className="gap-s column">
                <h3 className="culture-text41 heading-3">Our workplace</h3>
                <img
                  alt="pastedImage"
                  src="/Pages/Culture/pastedimage-smz-1200w.png"
                  className="width-100"
                />
                <span className="text-body-1">
                  PortSwigger operates across three locations: our founding
                  office in Knutsford (Cheshire, UK), our centrally located
                  London office, and our newly established Atlanta office in the
                  United States.
                </span>
                <span className="text-body-1">
                  Each office is designed to foster collaboration, innovation,
                  and a vibrant working environment.
                </span>
                <a
                  href="https://portswigger.net/careers/culture/workplace"
                  className="culture-button-link button-quarternary row gap-xs"
                >
                  <span className="culture-text44 heading-5">
                    Find out more
                  </span>
                  <Icon type="arrow-right"></Icon>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="align-center padding-m column width-100">
          <div className="gap-m width-max-content grid-colums-3 grid justify-center width-100">
            <SimpleCard
              url="https://portswigger.net/careers/application-process"
              heading={
                <Fragment>
                  <span className="culture-text45">
                    What to expect from the application process
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="culture-text46">Read more</span>
                </Fragment>
              }
            ></SimpleCard>
            <SimpleCard
              url="https://portswigger.net/careers/what-we-look-for"
              heading={
                <Fragment>
                  <span className="culture-text47">
                    What we look for in PortSwigger people
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="culture-text48">Read more</span>
                </Fragment>
              }
            ></SimpleCard>
            <SimpleCard
              url="https://apply.workable.com/portswigger/?lng=en"
              heading={
                <Fragment>
                  <span className="culture-text49">
                    View all available positions
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="culture-text50">Read more</span>
                </Fragment>
              }
            ></SimpleCard>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Culture
