import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import ExtraNavigationCulturePages from '../../../components/extra-navigation-culture-pages'
import CheckList from '../../../components/check-list'
import Icon from '../../../components/icon'
import SimpleCard from '../../../components/simple-card'
import Footer from '../../../components/footer'
import './workplace.css'

const Workplace = (props) => {
  return (
    <div className="workplace-container1">
      <Helmet>
        <title>Office and Workplace - PortSwigger</title>
        <meta
          name="description"
          content="We have three fantastic office locations, each offering a unique working environment."
        />
        <meta
          property="og:title"
          content="Office and Workplace - PortSwigger"
        />
        <meta
          property="og:description"
          content="We have three fantastic office locations, each offering a unique working environment."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation></Navigation>
      <ExtraNavigationCulturePages rootClassName="extra-navigation-culture-pagesroot-class-name5"></ExtraNavigationCulturePages>
      <main className="align-center column width-100 workplace-main">
        <div className="workplace-hero align-center padding-m margin-top-xxs column width-100">
          <div className="gap-s align-center width-max-content justify-center width-100 row workplace-max-width1">
            <div className="gap-s flex-1 column">
              <h1 className="heading-1 text-center">PortSwigger Workplace</h1>
              <span className="text-intro text-center">
                <span>
                  We have three fantastic office locations, each offering a
                  unique working
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>environment.</span>
              </span>
            </div>
          </div>
        </div>
        <section className="align-center padding-m position-relative column width-100">
          <div className="gap-m width-max-content column justify-center width-100">
            <CheckList
              item1={
                <Fragment>
                  <span className="workplace-text15 text-body-1">
                    <span className="workplace-text16">Knutsford (UK):</span>
                    <span>
                       A historic market town that has preserved its
                      individuality and character. Unlike many high streets
                      dominated by chain stores, Knutsford is home to unique
                      bars, restaurants, and boutique shops. The North West of
                      England boasts a thriving technology scene with over
                      10,000 digital and tech businesses. Our office is just
                      minutes from the M6, making it easily accessible from
                      Manchester, Altrincham, Stockport, Wilmslow, Warrington,
                      Chester, Crewe, Macclesfield, and Northwich.
                    </span>
                  </span>
                </Fragment>
              }
              item2={
                <Fragment>
                  <span className="workplace-text18 text-body-1">
                    <span className="workplace-text19">London (UK):</span>
                    <span>
                      {' '}
                      Our centrally located office places us in the heart of one
                      of the world’s leading financial and technology hubs. With
                      excellent transport links and access to a dynamic
                      professional network, London offers an exciting
                      environment for collaboration and innovation.
                    </span>
                  </span>
                </Fragment>
              }
              item3={
                <Fragment>
                  <span className="workplace-text21 text-body-1">
                    <span className="workplace-text22">Atlanta (USA):</span>
                    <span>
                      {' '}
                      Situated in a major tech and business hub, our Atlanta
                      office is at the forefront of innovation. With a strong
                      local talent pool, a thriving business ecosystem, and a
                      vibrant city life, Atlanta provides an excellent base for
                      growth and collaboration.
                    </span>
                  </span>
                </Fragment>
              }
              item4={
                <Fragment>
                  <span className="workplace-text24 text-body-1">
                    <span className="workplace-text25">
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
                  </span>
                </Fragment>
              }
              item5={
                <Fragment>
                  <span className="workplace-text27">
                    The grievance hearer will look into any additional points
                    raised.
                  </span>
                </Fragment>
              }
              item6={
                <Fragment>
                  <span className="workplace-text28">
                    Once ready, the grievance hearer will produce a written
                    outcome letter of their findings. This is then shared with
                    relevant parties.
                  </span>
                </Fragment>
              }
              item7={
                <Fragment>
                  <span className="workplace-text29">
                    The Swigger who raised the grievance will be given the right
                    to appeal the findings of the grievance.
                  </span>
                </Fragment>
              }
              heading={
                <Fragment>
                  <span className="workplace-text30">Our locations</span>
                </Fragment>
              }
              ctaLabel={
                <Fragment>
                  <span className="workplace-text31">GET IN TOUCH</span>
                </Fragment>
              }
              headingParagraph={
                <Fragment>
                  <span className="workplace-text32">
                    Swiggers travel to work in various ways. Each of our offices
                    offers different commuting options and amenities to support
                    your commute to work:
                  </span>
                </Fragment>
              }
            ></CheckList>
            <span className="text-body-1">
              <span>See our current </span>
              <a
                href="https://portswigger.net/careers/index.html"
                className="workplace-link"
              >
                vacancies page
              </a>
              <span>
                 for more information on which opportunities we have open in
                each location.
              </span>
            </span>
            <div className="gap-s column">
              <h3 className="workplace-text36 heading-3">Our offices</h3>
              <span className="text-body-1">
                Our offices are designed to provide a great working experience,
                no matter where you’re based:
              </span>
            </div>
            <div className="workplace-text-banner1 gap-m padding-m justify-center width-100 row">
              <div className="flex-1 align-center column justify-center">
                <div className="gap-s column">
                  <h3 className="workplace-text38 heading-3">
                    Knutsford founding office:
                  </h3>
                  <span className="text-body-1">
                    A 70,000 sqft custom-built workspace set in scenic parkland,
                    with in-house chefs, a gym, and spaces designed for
                    high-performance collaboration.
                  </span>
                  <span>
                    <span className="workplace-text41">Address:</span>
                    <span>
                      {' '}
                      6 Booths Park, Chelford Road, Knutsford, WA16 8ZS.
                    </span>
                  </span>
                </div>
              </div>
              <div className="workplace-image1 width-100 row">
                <img
                  alt="pastedImage"
                  src="/Pages/Workplace/pastedimage-kwp-700w.png"
                  className="width-100"
                />
              </div>
            </div>
            <div className="gap-m padding-m justify-center width-100 row-reverse workplace-text-banner2">
              <div className="flex-1 align-center column justify-center">
                <div className="gap-s column">
                  <h3 className="workplace-text43 heading-3">London office:</h3>
                  <span className="text-body-1">
                    <span>
                      Our centrally located office places us in the heart of one
                      of the world’s leading financial and technology hubs.
                      Designed with well-being in mind, it offers a dedicated
                      wellness suite, including spaces for quiet reflection and
                      family-friendly amenities.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Swiggers can also enjoy access to green spaces, a rooftop
                      terrace for relaxation, and fitness facilities to support
                      a balanced workday. With excellent transport links and a
                      dynamic professional network, our London office provides a
                      vibrant and inspiring environment.
                    </span>
                  </span>
                  <span>
                    <span className="workplace-text50">Address:</span>
                    <span> 5 Beaconsfield St, London N1C 4EW</span>
                  </span>
                </div>
              </div>
              <div className="workplace-image2 width-100 row">
                <img
                  alt="pastedImage"
                  src="/Pages/Workplace/pastedimage-s5r4.svg"
                  className="width-100"
                />
              </div>
            </div>
            <div className="workplace-text-banner3 gap-m padding-m justify-center width-100 row">
              <div className="flex-1 align-center column justify-center">
                <div className="gap-s column">
                  <h3 className="workplace-text52 heading-3">
                    Atlanta (USA) office:
                  </h3>
                  <span className="text-body-1">
                    <span>
                      With a strong local talent pool and a vibrant city
                      atmosphere, our Atlanta office is designed to foster
                      collaboration and well-being.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Swiggers benefit from professional-grade workspace
                      amenities, regular community events, and networking
                      opportunities. Complimentary snacks and refreshments are
                      also available.
                    </span>
                  </span>
                  <span>
                    <span className="workplace-text59">Address: </span>
                    <span>675 Ponce De Leon Ave NE Atlanta, GA 30308</span>
                  </span>
                </div>
              </div>
              <div className="workplace-image3 width-100 row">
                <img
                  alt="pastedImage"
                  src="/Pages/Workplace/pastedimage-imvo-700w.png"
                  className="width-100"
                />
              </div>
            </div>
            <div className="gap-m padding-m justify-center width-100 row row-reverse workplace-text-banner4">
              <div className="flex-1 align-center column justify-center">
                <div className="gap-s column">
                  <h3 className="workplace-text61 heading-3">
                    Mens sana in corpore sano
                  </h3>
                  <span className="text-body-1">
                    <span>
                      It’s great to be smart, solving interesting problems, and
                      creating cool things. But all this ultimately depends on
                      being in good mental and physical health.  
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Across all our locations, we actively promote a healthy
                      lifestyle through our culture, ways of working, and office
                      environments. Our workspaces are designed to support
                      well-being, with sitting/standing desks available - some
                      Swiggers even choose to walk at their desks using
                      treadmills. We provide nutritious food and snack options
                      and encourage fitness and exercise in various ways.  
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We take mental health seriously. We don&apos;t work
                      sweatshop hours. We avoid stress. We actively look out for
                      the mental wellbeing of our people and provide appropriate
                      intervention and support when necessary.
                    </span>
                  </span>
                </div>
              </div>
              <div className="workplace-image4 width-100 row">
                <img
                  alt="pastedImage"
                  src="/Pages/Workplace/pastedimage-nn7i-700w.png"
                  className="width-100"
                />
              </div>
            </div>
            <div className="gap-s column">
              <h3 className="workplace-text70 heading-3">Flexible working</h3>
              <span className="text-body-1">
                <span>
                  Core working hours are 9am to 5pm. There is flexibility to
                  shift your day earlier or later, starting any time between 8am
                  and 9.30am.
                </span>
                <br></br>
                <br></br>
                <span>
                  We are not a sweatshop, and we believe that working longer
                  hours is neither sustainable nor productive. We work hard and
                  intensely during the working day, and then we go home to enjoy
                  the rest of life.
                </span>
                <br></br>
                <br></br>
                <span>
                  We work better together, and our highly interactive,
                  fast-paced collaboration is both fun and a key contributor to
                  our success. While technology has made remote working
                  feasible, it cannot fully replace the high-bandwidth
                  conversations and primal bonding that are possible when teams
                  are physically together. All our people work using laptops and
                  can connect to our systems from anywhere. This provides
                  flexibility for incidental remote working when needed; for
                  example, to receive a delivery, let a plumber in, or provide
                  emergency childcare. But we expect our people to work in our
                  offices for the bulk of the working day and week.
                </span>
              </span>
              <a
                href="https://portswigger.net/careers/better-together"
                className="workplace-button-link button-quarternary row gap-xs"
              >
                <span className="workplace-text79 heading-5">
                  Discover why we work better together
                </span>
                <Icon type="arrow-right"></Icon>
              </a>
              <img
                alt="pastedImage"
                src="/Pages/Workplace/pastedimage-pxmn-1200w.png"
                className="width-100"
              />
            </div>
          </div>
        </section>
        <section className="align-center padding-m column width-100">
          <div className="gap-m align-center width-max-content grid-colums-3 grid justify-center width-100">
            <SimpleCard
              url="https://portswigger.net/about"
              heading={
                <Fragment>
                  <span className="workplace-text80">About PortSwigger</span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="workplace-text81">Read more</span>
                </Fragment>
              }
            ></SimpleCard>
            <SimpleCard
              url="https://portswigger.net/careers/culture"
              heading={
                <Fragment>
                  <span className="workplace-text82">PortSwigger Culture</span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="workplace-text83">Read more</span>
                </Fragment>
              }
            ></SimpleCard>
            <SimpleCard
              url="https://portswigger.net/careers/culture/how"
              heading={
                <Fragment>
                  <span className="workplace-text84">How we operate</span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="workplace-text85">Read more</span>
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

export default Workplace
