import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../components/live-tag-production'
import Navigation from '../../components/navigation'
import ExtraNavigationCulturePages from '../../components/extra-navigation-culture-pages'
import HeadingAndParagraph from '../../components/heading-and-paragraph'
import Quote from '../../components/quote'
import CheckListSection from '../../components/check-list-section'
import SimpleCard from '../../components/simple-card'
import Footer from '../../components/footer'
import './rewards-and-benefits.css'

const RewardsAndBenefits = (props) => {
  return (
    <div className="rewards-and-benefits-container1">
      <Helmet>
        <title>Reward and benefits - PortSwigger</title>
        <meta
          name="description"
          content="When it comes to our reward philosophy, we take a different view of rewarding people than nearly any other business."
        />
        <meta property="og:title" content="Reward and benefits - PortSwigger" />
        <meta
          property="og:description"
          content="When it comes to our reward philosophy, we take a different view of rewarding people than nearly any other business."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation></Navigation>
      <ExtraNavigationCulturePages rootClassName="extra-navigation-culture-pagesroot-class-name1"></ExtraNavigationCulturePages>
      <main className="gap-l align-center column width-100">
        <div className="align-center margin-top-xxs padding-horizontal-m column width-100">
          <div className="gap-s align-center width-max-content column justify-center width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="rewards-and-benefits-text100">
                    <span>
                      Rewards and benefits at
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>PortSwigger</span>
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="rewards-and-benefits-text104">
                    Securing the web
                  </span>
                </Fragment>
              }
              paragraph={
                <Fragment>
                  <span className="rewards-and-benefits-text105">
                    We are a diverse group of people with a wide range of
                    interests and backgrounds. What Swiggers have in common is
                    that they all love their work and are exceptionally good at
                    what they do.
                  </span>
                </Fragment>
              }
              rootClassName="heading-and-paragraphroot-class-name"
              showParagraph={false}
            ></HeadingAndParagraph>
            <span className="text-intro">
              When it comes to our reward philosophy, we take a different view
              of rewarding people than nearly any other business. We firmly
              believe in paying people what they are worth to us, not just what
              we can get away with or what they could earn elsewhere. We think
              this is the right way to treat people. And, in the long run,
              it&apos;s good for the business too.
            </span>
          </div>
        </div>
        <div className="align-center padding-horizontal-m column width-100">
          <div className="width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="rewards-and-benefits-text107">
                    Financial rewards
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="rewards-and-benefits-text108">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="rewards-and-benefits-text109">
                    <span>
                      We pay excellent salaries above the normal market level.
                      We don&apos;t have a fixed salary band for any position.
                      Instead, reward is always determined based on the ability
                      and contribution of the individual. We aim to hire the
                      very best people, and we expect to pay accordingly.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We offer share options to our people (role dependent).
                      This gives Swiggers a long-term stake in the value that we
                      are building together. It turns people into owners, and
                      drives the kind of collective, long-term behavior that
                      makes us successful. Share options are awarded annually,
                      on a discretionary basis, to Swiggers who have
                      demonstrated consistently strong performance through the
                      past year.
                    </span>
                  </span>
                </Fragment>
              }
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name8"
            ></HeadingAndParagraph>
          </div>
        </div>
        <Quote
          quote={
            <Fragment>
              <span className="rewards-and-benefits-text114">
                Humans aren&apos;t resources. PortSwigger is its people; they
                aren&apos;t just a means to the company&apos;s ends.
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="rewards-and-benefits-text115">Read more</span>
            </Fragment>
          }
          fontType="H1"
          extraInfo={
            <Fragment>
              <span className="rewards-and-benefits-text116">
                Application Security Pentester, AppSec team
              </span>
            </Fragment>
          }
          rootClassName="quoteroot-class-name"
          showBackgroundImg={false}
        ></Quote>
        <div className="align-center padding-horizontal-m column width-100">
          <div className="width-max-content column width-100">
            <HeadingAndParagraph
              heading={
                <Fragment>
                  <span className="rewards-and-benefits-text117">
                    Benefits and perks
                  </span>
                </Fragment>
              }
              topLabel={
                <Fragment>
                  <span className="rewards-and-benefits-text118">
                    Securing the web
                  </span>
                </Fragment>
              }
              alignment="left"
              paragraph={
                <Fragment>
                  <span className="rewards-and-benefits-text119">
                    The benefits and perks we offer are driven by our passion to
                    nurture our culture as we grow. Each serves the purpose of
                    helping us to recognize how much we value our people, and
                    provide the best experience of work for all Swiggers.
                  </span>
                </Fragment>
              }
              headingType="H3"
              rootClassName="heading-and-paragraphroot-class-name9"
            ></HeadingAndParagraph>
          </div>
        </div>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text120 text-body-1">
                Private medical insurance, provided through Bupa.
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text121 text-body-1">
                Same day virtual GP appointments and prescriptions for you and
                your family, available seven days a week.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text122 text-body-1">
                24/7 helpline for physical and mental health support,
                counselling, and other wellbeing resources.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text123 text-body-1">
                <span className="rewards-and-benefits-text124">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text126 text-body-1">
                <span className="rewards-and-benefits-text127">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text129 text-body-1">
                <span className="rewards-and-benefits-text130">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text132 text-body-1">
                <span className="rewards-and-benefits-text133">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text135 text-body-1">
                <span className="rewards-and-benefits-text136">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text138">
                Physical and mental well-being support to keep you at your best
              </span>
            </Fragment>
          }
          itemCount={3}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text139">
                Knutsford and London office offering:
              </span>
            </Fragment>
          }
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text140 text-body-1">
                Competitive medical plans provided through our Professional
                Employer Organization (PEO).
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text141 text-body-1">
                Interim Coverage – The company will cover COBRA costs until the
                new benefits package is in place.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text142 text-body-1">
                24/7 helpline for physical and mental health support,
                counselling, and other wellbeing resources.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text143 text-body-1">
                <span className="rewards-and-benefits-text144">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text146 text-body-1">
                <span className="rewards-and-benefits-text147">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text149 text-body-1">
                <span className="rewards-and-benefits-text150">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text152 text-body-1">
                <span className="rewards-and-benefits-text153">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text155 text-body-1">
                <span className="rewards-and-benefits-text156">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text158">
                Physical and mental well-being support to keep you at your best
              </span>
            </Fragment>
          }
          itemCount={2}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text159">
                Atlanta office offering:
              </span>
            </Fragment>
          }
          showSectionHeading={false}
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text160 text-body-1">
                Excellent salaries above market level.
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text161 text-body-1">
                8% employer pension contribution.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text162 text-body-1">
                Life assurance: 4x salary.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text163 text-body-1">
                Income protection: full pay for first 6 months of incapacity
                followed by 75% of salary plus pension contribution.
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text164 text-body-1">
                Relocation support packages.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text165 text-body-1">
                Charitable donations made by Swiggers through our scheme will be
                matched by PortSwigger.
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text166 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text167 text-body-1">
                <span className="rewards-and-benefits-text168">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text170">
                Financial security designed to recognize your true value
              </span>
            </Fragment>
          }
          itemCount={7}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text171">
                Knutsford and London office offering:
              </span>
            </Fragment>
          }
          showSectionHeading
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text172 text-body-1">
                Excellent salaries above market level.
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text173 text-body-1">
                401(k) Plan: 5% company match.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text174 text-body-1">
                Life Insurance: Coverage equal to 2x your salary.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text175 text-body-1">
                Disability Insurance: Short and long term disability coverage at
                60% of your salary.
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text176 text-body-1">
                We have potential short term secondment opportunities between
                offices.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text177 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text178 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text179 text-body-1">
                <span className="rewards-and-benefits-text180">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text182">
                Financial security designed to recognize your true value
              </span>
            </Fragment>
          }
          itemCount={6}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text183">
                Atlanta office offering:
              </span>
            </Fragment>
          }
          showSectionHeading={false}
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text184 text-body-1">
                33 days including public holidays (location specific).
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text185 text-body-1">
                Buy and sell holiday days and spread the cost through the year.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text186 text-body-1">
                Generous parental leave, including maternity leave of 26 weeks
                at full pay plus return to work bonus.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text187 text-body-1">
                Flexible working hours. Choose to start your day anytime between
                8am - 9.30am.
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text188 text-body-1">
                Additional flexibility with your working hours can also be
                supported if discussed and agreed with your team first.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text189 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text190 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text191 text-body-1">
                <span className="rewards-and-benefits-text192">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text194">
                Holiday, leave, and flexibility, tailored to fit your lifestyle
              </span>
            </Fragment>
          }
          itemCount={5}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text195">
                Atlanta office offering:
              </span>
            </Fragment>
          }
          showSubHeading={false}
          showSectionHeading
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text196 text-body-1">
                A wide variety of free hot and cold lunch options, prepared by
                our team of in-house chefs.
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text197 text-body-1">
                On-site gym with trainer-led group classes including yoga,
                karate, and sound bath. Towel service, shower facilities, and
                drying area also available for your convenience.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text198 text-body-1">
                Complimentary all-day food and beverage offering, including
                chef-prepared freshly baked afternoon treats and barista style
                coffee.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text199 text-body-1">
                A helping hand for your transport requirements including daily
                shuttle service to the train station, environmentally friendly
                car lease scheme, cycle to work scheme, and bike storage.
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text200 text-body-1">
                Access to company-funded socials and team meals.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text201 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text202 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text203 text-body-1">
                <span className="rewards-and-benefits-text204">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text206">
                A workplace experience that truly raises the bar on quality
              </span>
            </Fragment>
          }
          itemCount={5}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text207">
                Knutsford office offering:
              </span>
            </Fragment>
          }
          showSubHeading
          showSectionHeading
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text208 text-body-1">
                A selection of breakfast options, snacks, and beverages
                available throughout the day.
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text209 text-body-1">
                Convenient transport options, including excellent public
                transport links, cycle-to-work schemes, and nearby bike storage.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text210 text-body-1">
                Gym facilities with a variety of equipment, fitness classes, and
                personal training sessions available at selected locations.
                Shower facilities are also provided for convenience.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text211 text-body-1">
                Modern breakout spaces designed for collaboration and social
                connection.
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text212 text-body-1">
                Access to company-funded socials and team meals.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text213 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text214 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text215 text-body-1">
                <span className="rewards-and-benefits-text216">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text218">
                A workplace experience that truly raises the bar on quality
              </span>
            </Fragment>
          }
          itemCount={5}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text219">
                London office offering:
              </span>
            </Fragment>
          }
          showSubHeading
          showSectionHeading={false}
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text220 text-body-1">
                Breakfast options and snacks available throughout the day.
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text221 text-body-1">
                Parking and bike storage provided for easy commuting.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text222 text-body-1">
                Comfortable breakout spaces for collaboration and team bonding.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text223 text-body-1">
                Regular community events and networking opportunities to stay
                connected.
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text224 text-body-1">
                Access to company-funded socials and team meals.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text225 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text226 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text227 text-body-1">
                <span className="rewards-and-benefits-text228">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text230">
                A workplace experience that truly raises the bar on quality
              </span>
            </Fragment>
          }
          itemCount={5}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text231">
                Atlanta office offering:
              </span>
            </Fragment>
          }
          showSubHeading
          showSectionHeading={false}
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text232 text-body-1">
                Regular company-funded socials and events.
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text233 text-body-1">
                Weekly Friday afternoon All-Hands social.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text234 text-body-1">
                Quarterly team lunches.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text235 text-body-1">
                Monthly themed celebrations chosen by our people, including
                baking competitions, international culture days, and dedicated
                food appreciation days.
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text236 text-body-1">
                Fully-funded Christmas and Summer parties.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text237 text-body-1">
                Self-organised social groups.
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text238 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text239 text-body-1">
                <span className="rewards-and-benefits-text240">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text242">
                A jam-packed social calendar that fosters a strong sense of
                belonging
              </span>
            </Fragment>
          }
          itemCount={6}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text243">
                Atlanta office offering:
              </span>
            </Fragment>
          }
          showSubHeading={false}
          showSectionHeading
        ></CheckListSection>
        <CheckListSection
          item1={
            <Fragment>
              <span className="rewards-and-benefits-text244 text-body-1">
                Opportunities to add to your skills and knowledge by
                collaborating on a variety of challenging and rewarding
                projects.
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="rewards-and-benefits-text245 text-body-1">
                Frequent feedback and development discussions with your
                performance coach.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="rewards-and-benefits-text246 text-body-1">
                Buy any book policy.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="rewards-and-benefits-text247 text-body-1">
                Structured graduate development programs offering individual
                coaching and mentoring by experienced developers, exposure to a
                variety of software development teams through job rotation, and
                soft skills training.
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="rewards-and-benefits-text248 text-body-1">
                Life and career coaching provided by qualified professionals.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="rewards-and-benefits-text249 text-body-1">
                Self-organised social groups.
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="rewards-and-benefits-text250 text-body-1">
                Share options (role dependent).
              </span>
            </Fragment>
          }
          item8={
            <Fragment>
              <span className="rewards-and-benefits-text251 text-body-1">
                <span className="rewards-and-benefits-text252">
                  Be a force for good in the world.
                </span>
                <span>
                  {' '}
                  Delivering amazing products and services certainly makes the
                  world a better place. But our culture means that we are also
                  instinctively generous, giving away much more than we need to.
                  We directly improve the lives of our people and numerous
                  others. We do this as an end in itself, not as a cynical means
                  to profit.
                </span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="rewards-and-benefits-text254">
                Opportunities to grow in the areas you&apos;re passionate about
              </span>
            </Fragment>
          }
          itemCount={5}
          subHeading={
            <Fragment>
              <span className="rewards-and-benefits-text255">
                Atlanta office offering:
              </span>
            </Fragment>
          }
          showSubHeading={false}
          showSectionHeading
        ></CheckListSection>
        <section className="align-center padding-m column width-100">
          <div className="rewards-and-benefits-container2 gap-m width-max-content grid-colums-3 grid justify-center width-100 align-stretch">
            <SimpleCard
              url="https://portswigger.net/careers/application-process"
              heading={
                <Fragment>
                  <span className="rewards-and-benefits-text256">
                    What to expect from the application process
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="rewards-and-benefits-text257">
                    Read more
                  </span>
                </Fragment>
              }
            ></SimpleCard>
            <SimpleCard
              url="https://portswigger.net/careers/culture/why"
              heading={
                <Fragment>
                  <span className="rewards-and-benefits-text258">
                    Why work at PortSwigger?
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="rewards-and-benefits-text259">
                    Read more
                  </span>
                </Fragment>
              }
            ></SimpleCard>
            <SimpleCard
              url="https://portswigger.net/careers"
              heading={
                <Fragment>
                  <span className="rewards-and-benefits-text260">
                    View all available positions
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="rewards-and-benefits-text261">
                    Read more
                  </span>
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

export default RewardsAndBenefits
