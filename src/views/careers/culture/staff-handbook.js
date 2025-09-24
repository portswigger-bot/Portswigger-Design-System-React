import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import ExtraNavigationCulturePages from '../../../components/extra-navigation-culture-pages'
import HeadingAndParagraph from '../../../components/heading-and-paragraph'
import StickySideNavigation from '../../../components/sticky-side-navigation'
import CheckList from '../../../components/check-list'
import CheckListSection from '../../../components/check-list-section'
import SimpleCard from '../../../components/simple-card'
import Footer from '../../../components/footer'
import './staff-handbook.css'

const StaffHandbook = (props) => {
  return (
    <div className="staff-handbook-container1">
      <Helmet>
        <title>Staff Handbook - life at PortSwigger</title>
        <meta
          name="description"
          content="Everything you need to know about life at PortSwigger - covering working hours, culture, facilities, conduct, holidays, and much more."
        />
        <meta
          property="og:title"
          content="Staff Handbook - life at PortSwigger"
        />
        <meta
          property="og:description"
          content="Everything you need to know about life at PortSwigger - covering working hours, culture, facilities, conduct, holidays, and much more."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation></Navigation>
      <ExtraNavigationCulturePages rootClassName="extra-navigation-culture-pagesroot-class-name4"></ExtraNavigationCulturePages>
      <main className="gap-m align-center column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="staff-handbook-text100">
                The PortSwigger staff handbook
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="staff-handbook-text101">Securing the web</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="staff-handbook-text102">
                The ultimate guide to life at PortSwigger
              </span>
            </Fragment>
          }
          rootClassName="heading-and-paragraphroot-class-name1"
        ></HeadingAndParagraph>
        <section className="align-center padding-m position-relative column width-100">
          <div className="gap-m width-max-content justify-center width-100 row staff-handbook-max-width">
            <StickySideNavigation
              header={
                <Fragment>
                  <span className="staff-handbook-text103">
                    PortSwigger Culture
                  </span>
                </Fragment>
              }
              rootClassName="sticky-side-navigationroot-class-name1"
              navigationList={[
                {
                  href: '#working-hours',
                  label: 'Working hours',
                },
                {
                  href: '#working-location',
                  label: 'Working location',
                },
                {
                  href: '#traveling-to-work',
                  label: 'Travelling to work',
                },
                {
                  href: '#out-of-hours-access-to-office',
                  label: 'Out of hours access to office',
                },
                {
                  href: '#quiet-spaces',
                  label: 'Quiet Spaces',
                },
                {
                  href: '#dress-code',
                  label: 'Dress code',
                },
                {
                  href: '#names-and-faces',
                  label: 'Names and faces',
                },
                {
                  href: '#company-organization',
                  label: 'Company organization',
                },
                {
                  href: '#meetings',
                  label: 'Meetings',
                },
                {
                  href: '#social-events',
                  label: 'Social events',
                },
                {
                  href: '#gym',
                  label: 'Gym',
                },
                {
                  href: '#lockers',
                  label: 'Lockers',
                },
                {
                  href: '#reimbursement-of-expenses',
                  label: 'Reimbursement of expenses',
                },
                {
                  href: '#holidays',
                  label: 'Holidays',
                },
                {
                  href: '#sickness',
                  label: 'Sickness',
                },
                {
                  href: '#performance-and-conduct',
                  label: 'Performance and conduct',
                },
                {
                  href: '#covid-working-arrangements',
                  label: 'Covid working arrangements',
                },
                {
                  href: '#grievances',
                  label: 'Grievances',
                },
                {
                  href: '#appeals',
                  label: 'Appeals',
                },
                {
                  href: '#leave-for-new-parents',
                  label: 'Leave for new parents',
                },
                {
                  href: '#compassionate-leave',
                  label: 'Compassionate leave',
                },
                {
                  href: '#further-questions',
                  label: 'Further questions',
                },
              ]}
            ></StickySideNavigation>
            <div className="gap-m flex-1 column">
              <img
                alt="pastedImage"
                src="/Pages/StaffHandbook/pastedimage-32a-1200w.png"
                className="width-100"
              />
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text104">
                      Working hours
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text105">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text106">
                      <span>
                        Our &quot;normal&quot; hours are based on 9am until 5pm
                        with an hour&apos;s break for lunch. You can flex your
                        day to start any time between 8am and 9:30am without
                        needing to notify anyone.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        We are happy to support additional flexibility if this
                        works for your team and the people you work with. For
                        example, some people prefer to start later to
                        accommodate the school run. We don&apos;t impose hard
                        and fast rules, because arrangements that work for some
                        teams might not work for others. If you would like
                        additional flexibility, please discuss this with your
                        team leader.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        When arranging regular team catch-ups, such as daily
                        standups, please be mindful that people on the team
                        might have different preferences on start and end times.
                        When a new person joins a team, be aware that they
                        won&apos;t automatically have the same routine as the
                        rest of you.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        You are encouraged to take breaks during the working day
                        when you need them. In our Knutsford office, lunch is
                        provided free of charge in our restaurant between 12 and
                        1:30 PM.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="working-hours"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name10"
              ></HeadingAndParagraph>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text117">
                      Working location
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text118">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text119">
                      <span>
                        Our default place of work is in the office. Whether
                        you’re based in Knutsford, London, or Atlanta, we
                        believe that working together in person fosters the best
                        collaboration, creativity, and problem solving. While we
                        support occasional remote working when needed, we
                        encourage teams to make the most of our vibrant office
                        environments.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        We are flexible in supporting people in working
                        elsewhere from time to time as the need arises. Examples
                        of this would include staying at home to let in a
                        plumber, receive a delivery, or look after a sick child
                        at short notice. It is hard to codify rules for every
                        situation and we prefer to trust people to do the right
                        thing for their team and for PortSwigger. If in doubt
                        about any planned working arrangements, please speak to
                        your team leader.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="working-location"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name11"
              ></HeadingAndParagraph>
              <img
                alt="pastedImage"
                src="/Pages/StaffHandbook/pastedimage-hugi-1200w.png"
                className="width-100"
              />
              <CheckList
                item1={
                  <Fragment>
                    <span className="staff-handbook-text124 text-body-1">
                      Knutsford: Shuttle service to the train station, bicycle
                      storage, car parking, and scenic walking routes.
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text125 text-body-1">
                      London: Excellent public transport links, close to Kings
                      Cross, cycling facilities, and easy access to key business
                      areas.
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text126 text-body-1">
                      Atlanta: Well connected to the city’s business district
                      with parking, bicycle storage, and convenient access to
                      MARTA, the Atlanta BeltLine, I-75/85, and in-town Atlanta
                      to suit your commute.
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text127 text-body-1">
                      <span className="staff-handbook-text128">
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
                    <span className="staff-handbook-text130">
                      The grievance hearer will look into any additional points
                      raised.
                    </span>
                  </Fragment>
                }
                item6={
                  <Fragment>
                    <span className="staff-handbook-text131">
                      Once ready, the grievance hearer will produce a written
                      outcome letter of their findings. This is then shared with
                      relevant parties.
                    </span>
                  </Fragment>
                }
                item7={
                  <Fragment>
                    <span className="staff-handbook-text132">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="staff-handbook-text133">
                      Traveling to work
                    </span>
                  </Fragment>
                }
                ctaLabel={
                  <Fragment>
                    <span className="staff-handbook-text134">GET IN TOUCH</span>
                  </Fragment>
                }
                sectionId="traveling-to-work"
                headingType="H4"
                rootClassName="check-listroot-class-name"
                showParagraph
                headingParagraph={
                  <Fragment>
                    <span className="staff-handbook-text135">
                      Swiggers travel to work in various ways. Each of our
                      offices offers different commuting options and amenities
                      to support your commute to work:
                    </span>
                  </Fragment>
                }
              ></CheckList>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text136">
                      Meet the Swiggers
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text137">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text138">
                      If you feel unsafe traveling due to extreme weather or any
                      other reason, please work at home and let your team leader
                      know.
                    </span>
                  </Fragment>
                }
                headingType="H4"
                showHeading={false}
                rootClassName="heading-and-paragraphroot-class-name28"
              ></HeadingAndParagraph>
              <CheckList
                item1={
                  <Fragment>
                    <span className="staff-handbook-text139 text-body-1">
                      Knutsford office: The building is secured overnight by
                      site security and is open on weekdays from 7 AM to 6 PM.
                      It remains closed on weekends. For access outside of these
                      hours, please contact the workplace team.
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text140 text-body-1">
                      London office: The office is accessible 24/7, with
                      serviced support available from 7 AM to 5 PM on weekdays.
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text141 text-body-1">
                      Atlanta office: Our office space is available to your team
                      24/7, 365 days a year. Staffed services are provided
                      Monday to Friday from 8 AM to 5 PM, excluding public
                      holidays.
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text142 text-body-1">
                      <span className="staff-handbook-text143">
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
                    <span className="staff-handbook-text145">
                      The grievance hearer will look into any additional points
                      raised.
                    </span>
                  </Fragment>
                }
                item6={
                  <Fragment>
                    <span className="staff-handbook-text146">
                      Once ready, the grievance hearer will produce a written
                      outcome letter of their findings. This is then shared with
                      relevant parties.
                    </span>
                  </Fragment>
                }
                item7={
                  <Fragment>
                    <span className="staff-handbook-text147">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="staff-handbook-text148">
                      Out of hours access to office
                    </span>
                  </Fragment>
                }
                ctaLabel={
                  <Fragment>
                    <span className="staff-handbook-text149">GET IN TOUCH</span>
                  </Fragment>
                }
                sectionId="out-of-hours-access-to-office"
                headingType="H4"
                rootClassName="check-listroot-class-name1"
                showParagraph={false}
                headingParagraph={
                  <Fragment>
                    <span className="staff-handbook-text150">
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
                    <span className="staff-handbook-text151 text-body-1">
                      A quiet room for meditation or prayer is available in each
                      office, ensuring a space for personal reflection. These
                      rooms are not intended for meetings, conversations, or
                      work.
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text152 text-body-1">
                      If you prefer to take a break during lunch - whether to
                      unwind, read, or watch something - you are welcome to do
                      so in general office areas or outdoor spaces.
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text153 text-body-1">
                      Atlanta office: Our office space is available to your team
                      24/7, 365 days a year. Staffed services are provided
                      Monday to Friday from 8 AM to 5 PM, excluding public
                      holidays.
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text154 text-body-1">
                      <span className="staff-handbook-text155">
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
                    <span className="staff-handbook-text157">
                      The grievance hearer will look into any additional points
                      raised.
                    </span>
                  </Fragment>
                }
                item6={
                  <Fragment>
                    <span className="staff-handbook-text158">
                      Once ready, the grievance hearer will produce a written
                      outcome letter of their findings. This is then shared with
                      relevant parties.
                    </span>
                  </Fragment>
                }
                item7={
                  <Fragment>
                    <span className="staff-handbook-text159">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="staff-handbook-text160">Quiet spaces</span>
                  </Fragment>
                }
                ctaLabel={
                  <Fragment>
                    <span className="staff-handbook-text161">GET IN TOUCH</span>
                  </Fragment>
                }
                itemCount={2}
                sectionId="quiet-spaces"
                headingType="H4"
                rootClassName="check-listroot-class-name2"
                showParagraph
                headingParagraph={
                  <Fragment>
                    <span className="staff-handbook-text162">
                      Each of our offices provides quiet spaces for focused
                      work, relaxation, or reflection. If you need a
                      distraction-free environment, you’ll find dedicated areas
                      designed for peace and concentration.
                    </span>
                  </Fragment>
                }
              ></CheckList>
              <img
                alt="pastedImage"
                src="/Pages/StaffHandbook/pastedimage-vw78e-1200w.png"
                className="width-100"
              />
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text163">Dress code</span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text164">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text165">
                      There is no dress code. You can wear whatever you are
                      comfortable with.
                    </span>
                  </Fragment>
                }
                sectionId="dress-code"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name12"
              ></HeadingAndParagraph>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text166">
                      Names and faces
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text167">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text168">
                      We understand that with the size we are, people find it
                      hard to put names to faces or faces to names. Various
                      technologies we use support profile photos, including
                      Bamboo, Zoom, GSuite, and Jira. We encourage everyone to
                      configure their profiles with a recent photo in which you
                      are clearly recognizable.
                    </span>
                  </Fragment>
                }
                sectionId="names-and-faces"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name13"
              ></HeadingAndParagraph>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text169">
                      Company organization
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text170">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text171">
                      <span>
                        We firmly believe that culture is about beliefs, values,
                        and behaviors, not organizational structure. We
                        instinctively minimize hierarchy.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Swiggers are organized into small teams, generally up to
                        around 10 in size. Within each team, things are fairly
                        flat and self-organized. There is a designated team
                        leader, whose role is to support the rest of the team
                        and to act as the default go-between for other teams.
                        But we view leadership as shared and contextual.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Teams are organized into four tribes: technology,
                        growth, culture, and finance. Each tribe has a
                        designated tribal elder, whose role is to support the
                        teams and team leaders within their tribe and to act as
                        the default go-between for other tribes.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="company-organization"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name14"
              ></HeadingAndParagraph>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text179">Meetings</span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text180">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text181">
                      <span>
                        {' '}
                        We work best when we&apos;re open and collaborative.
                        There is hardly anything that any of us are working on
                        or talking about that can&apos;t be shared. In fact,
                        having people overhear office conversations is a good
                        thing, as it often helps people to see off a
                        misunderstanding or better align on something.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        We do have various meeting rooms throughout the office
                        which can be used when needed. There is no meeting room
                        booking system, and meetings rooms cannot be reserved by
                        anyone.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        All-hands meetings take place every Friday at 3 PM (UK
                        time) in the atrium of our Knutsford office and are
                        live-streamed to our London and Atlanta offices to allow
                        for full engagement across all locations. This is an
                        opportunity for teams to give updates on their work,
                        share news and other updates, meet new joiners, and ask
                        questions.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="meetings"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name15"
              ></HeadingAndParagraph>
              <img
                alt="pastedImage"
                src="/Pages/StaffHandbook/pastedimage-4mtf-1200w.png"
                className="width-100"
              />
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text189">
                      Social events
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text190">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text191">
                      <span>
                        We have social time every Friday afternoon, following
                        the all-hands meeting, with drinks and snacks provided.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        We encourage social time during lunch, for example, in
                        our Knutsford office where the restaurant provides a
                        great space to connect with colleagues. Feel free to sit
                        with anyone and join in on existing conversations.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        We have regular social events that are facilitated and
                        paid for by the company. If you have a suggestion for a
                        social event, please let the culture team know.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Many Swiggers self-organize social clubs based on
                        particular hobbies and interests. If you have an idea
                        for a social club, you can share the idea at an
                        all-hands meeting or with the culture team. We are happy
                        for people to use the office for social clubs during
                        lunchtime or out of hours, provided this doesn&apos;t
                        cause any mess or disruption. Please speak to the
                        workplace team to arrange this. There is a social
                        calendar showing details of social events that are
                        happening.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        We have company parties at Christmas (partners welcome)
                        and in the summer (partners and children welcome)..
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="social-events"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name16"
              ></HeadingAndParagraph>
              <img
                alt="pastedImage"
                src="/Pages/StaffHandbook/pastedimage-m2gl-1200w.png"
                className="width-100"
              />
              <CheckList
                item1={
                  <Fragment>
                    <span className="staff-handbook-text205 text-body-1">
                      Knutsford office: Our on-site gym is available for all
                      Swiggers, offering a versatile space for a wide range of
                      activities. We encourage teams to self-organize workouts,
                      and if additional equipment is needed, the workplace team
                      is happy to assist. Showers and changing facilities are
                      also available.
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text206 text-body-1">
                      London office: Gym facilities are available, featuring a
                      variety of equipment and fitness classes. Showers are also
                      provided for convenience.
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text207 text-body-1">
                      <span>
                        Atlanta office: While the office does not have an
                        on-site gym, it is conveniently located near a variety
                        of outside space providing plenty of options for staying
                        active.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        There’s a gym onsite at PCM — please ask at the front
                        desk for joining info. This is a paid facility.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        There’s also the Atlanta BeltLine: a 22-mile loop of
                        parks, trails, and green space, directly accessible from
                        PCM. Perfect for a lunchtime walk or active commute!
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text216 text-body-1">
                      <span className="staff-handbook-text217">
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
                    <span className="staff-handbook-text219">
                      The grievance hearer will look into any additional points
                      raised.
                    </span>
                  </Fragment>
                }
                item6={
                  <Fragment>
                    <span className="staff-handbook-text220">
                      Once ready, the grievance hearer will produce a written
                      outcome letter of their findings. This is then shared with
                      relevant parties.
                    </span>
                  </Fragment>
                }
                item7={
                  <Fragment>
                    <span className="staff-handbook-text221">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="staff-handbook-text222">Gym</span>
                  </Fragment>
                }
                ctaLabel={
                  <Fragment>
                    <span className="staff-handbook-text223">GET IN TOUCH</span>
                  </Fragment>
                }
                itemCount={3}
                sectionId="gym"
                headingType="H4"
                rootClassName="check-listroot-class-name3"
                showParagraph
                headingParagraph={
                  <Fragment>
                    <span className="staff-handbook-text224">
                      We support fitness and well-being across all our
                      locations, providing access to gyms and exercise spaces
                      either on-site or nearby.
                    </span>
                  </Fragment>
                }
              ></CheckList>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text225">Lockers</span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text226">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text227">
                      Lockers are available for those who need them in our
                      Knutsford office. If you would like to request one, please
                      speak to the workplace team.
                    </span>
                  </Fragment>
                }
                sectionId="lockers"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name17"
              ></HeadingAndParagraph>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text228">
                      Reimbursement of expenses
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text229">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text230">
                      <span>
                        Expenses reasonably incurred as part of your work will
                        be reimbursed. If you are unsure whether a planned
                        expense is reasonable, please speak to your team leader.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        If you have a Soldo payment card, please use this for
                        all expenses and upload receipts via the mobile Soldo
                        app. Otherwise, please make payment yourself and give
                        your receipt to the finance team to be reimbursed.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="reimbursement-of-expenses"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name18"
              ></HeadingAndParagraph>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text235">Holidays</span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text236">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text237">
                      Please use Bamboo to book holiday requests. For some
                      operational roles (for example, customer support or office
                      cleaning), it is desirable to avoid having too many people
                      on a team taking holidays at the same time. When this
                      applies, team leaders will discuss with the team the best
                      approach to arranging holidays.
                    </span>
                  </Fragment>
                }
                sectionId="holidays"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name19"
              ></HeadingAndParagraph>
              <CheckListSection
                item1={
                  <Fragment>
                    <span className="staff-handbook-text238 text-body-1">
                      You get 33 days of annual leave, which includes 8 U.S.
                      public holidays. This is written into your U.S. employment
                      agreement. It’s a flat entitlement (not accrued monthly),
                      and we encourage you to use it.
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text239 text-body-1">
                      <span>
                        We also enable Swiggers to buy and sell up to 5 days
                        annual leave each year
                      </span>
                      <span>.</span>
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text242 text-body-1">
                      Book time off through BambooHR: It remains your go-to
                      system for requesting holiday. TriNet will process it on
                      the backend, but PortSwigger manages the approval and
                      philosophy.
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text243 text-body-1">
                      <span className="staff-handbook-text244">
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
                    <span className="staff-handbook-text246 text-body-1">
                      <span className="staff-handbook-text247">
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
                item6={
                  <Fragment>
                    <span className="staff-handbook-text249 text-body-1">
                      <span className="staff-handbook-text250">
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
                item7={
                  <Fragment>
                    <span className="staff-handbook-text252 text-body-1">
                      <span className="staff-handbook-text253">
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
                item8={
                  <Fragment>
                    <span className="staff-handbook-text255 text-body-1">
                      <span className="staff-handbook-text256">
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
                heading={
                  <Fragment>
                    <span className="staff-handbook-text258"></span>
                  </Fragment>
                }
                itemCount={3}
                subHeading={
                  <Fragment>
                    <span className="staff-handbook-text259">
                      U.S. Swiggers: What to know
                    </span>
                  </Fragment>
                }
                rootClassName="check-list-sectionroot-class-name"
                showSectionHeading={false}
              ></CheckListSection>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text260">Sickness</span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text261">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text262">
                      <span>
                        If you are not well enough to work, take time off until
                        you are better. Wherever possible, please let your team
                        leader know that you are unwell and record your absence
                        in Bamboo as soon as you are able to.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        On some occasions, you might feel you are well enough to
                        work some or all of the day at home, but not well enough
                        to travel to work. We would encourage you to prioritize
                        recovering properly, but in this situation it is fine to
                        work at home. Please let your team leader know what is
                        happening.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="sickness"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name20"
              ></HeadingAndParagraph>
              <CheckListSection
                item1={
                  <Fragment>
                    <span className="staff-handbook-text267 text-body-1">
                      <span>
                        We offer unlimited paid sick leave, with a few
                        light-touch controls to help us stay
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>fair, consistent, and compliant.</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text271 text-body-1">
                      <span>
                        If you’re off for fewer than 5 working days: Let your
                        Team Leader know and record the absence in Bamboo.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        If you&apos;re off for 5 consecutive working days or
                        more: We&apos;ll ask you to provide a doctor’s note or
                        equivalent medical certificate.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text275 text-body-1">
                      If you&apos;re dealing with a longer-term condition, our
                      teams and TriNet together can guide you through next
                      steps, including access to job-protected leave (under the
                      Family and Medical Leave Act – FMLA) and short-term
                      disability insurance.
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text276 text-body-1">
                      We trust Swiggers to use sick leave responsibly. If we
                      spot patterns that suggestburnout or unclear expectations,
                      we’ll check in early and supportively.
                    </span>
                  </Fragment>
                }
                item5={
                  <Fragment>
                    <span className="staff-handbook-text277 text-body-1">
                      <span className="staff-handbook-text278">
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
                item6={
                  <Fragment>
                    <span className="staff-handbook-text280 text-body-1">
                      <span className="staff-handbook-text281">
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
                item7={
                  <Fragment>
                    <span className="staff-handbook-text283 text-body-1">
                      <span className="staff-handbook-text284">
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
                item8={
                  <Fragment>
                    <span className="staff-handbook-text286 text-body-1">
                      <span className="staff-handbook-text287">
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
                heading={
                  <Fragment>
                    <span className="staff-handbook-text289"></span>
                  </Fragment>
                }
                itemCount={4}
                subHeading={
                  <Fragment>
                    <span className="staff-handbook-text290">
                      U.S. Swiggers: What to know
                    </span>
                  </Fragment>
                }
                rootClassName="check-list-sectionroot-class-name1"
                showSectionHeading={false}
              ></CheckListSection>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text291">
                      Performance and conduct
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text292">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text293">
                      <span>
                        We set ourselves high standards for our performance, and
                        we actively support everyone in striving to deliver the
                        best they can. Everyone at PortSwigger is expected to
                        conduct themselves professionally and in line with our
                        values.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        If there is evidence that your work or conduct are
                        routinely below the bar we set for ourselves, we will in
                        the first instance work with you to resolve the issues
                        identified. If this is unsuccessful, we might suggest
                        that you look for another opportunity, and we might
                        ultimately ask you to leave PortSwigger.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="performance-and-conduct"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name21"
              ></HeadingAndParagraph>
              <img
                alt="pastedImage"
                src="/Pages/StaffHandbook/pastedimage-8r3-1200w.png"
                className="width-100"
              />
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text298">
                      Covid working arrangements
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text299">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text300">
                      <span>
                        Our general approach to Covid is that we will follow
                        official guidance from the UK government. This includes
                        rules on lockdowns, testing, and isolation.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        The office ventilation system is Covid-safe. It draws
                        air out of the building, pulls in fresh air from
                        outside, and filters the new air. There&apos;s no
                        recirculation of air within the building.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        We realize that people have different attitudes to risk
                        around Covid, and different preferences on Covid safety
                        (maintaining distance, shaking hands, using hand gel,
                        etc.). You can decide yourself what practices you wish
                        to follow, and please respect the preferences of other
                        Swiggers.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="covid-working-arrangements"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name22"
              ></HeadingAndParagraph>
              <CheckList
                item1={
                  <Fragment>
                    <span className="staff-handbook-text308 text-body-1">
                      A Swigger sends their grievance in writing to their team
                      lead, a tribal elder or a member of the culture team.
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text309 text-body-1">
                      PortSwigger appoints a suitable person to hear &amp;
                      handle the grievance.
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text310 text-body-1">
                      The grievance hearer engages in preliminary investigations
                      (such as reviewing documents &amp; speaking to relevant
                      people to gather their perspective)
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text311 text-body-1">
                      The Swigger is invited to a grievance meeting, where they
                      may choose to be accompanied e.g. by another Swigger. If
                      they would like to bring somebody, they should communicate
                      this in writing at least 24 hours before the meeting. The
                      purpose of this meeting is to talk through the grievance
                      in detail, for the hearer to ask questions and review any
                      documentation or evidence brought by the Swigger. There
                      may also be a note taker present in this meeting.
                    </span>
                  </Fragment>
                }
                item5={
                  <Fragment>
                    <span className="staff-handbook-text312">
                      The grievance hearer will look into any additional points
                      raised.
                    </span>
                  </Fragment>
                }
                item6={
                  <Fragment>
                    <span className="staff-handbook-text313">
                      Once ready, the grievance hearer will produce a written
                      outcome letter of their findings. This is then shared with
                      relevant parties.
                    </span>
                  </Fragment>
                }
                item7={
                  <Fragment>
                    <span className="staff-handbook-text314">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="staff-handbook-text315">Grievances</span>
                  </Fragment>
                }
                ctaLabel={
                  <Fragment>
                    <span className="staff-handbook-text316">GET IN TOUCH</span>
                  </Fragment>
                }
                listType="orderedList"
                itemCount={7}
                sectionId="grievances"
                headingType="H4"
                rootClassName="check-listroot-class-name4"
                showParagraph
                headingParagraph={
                  <Fragment>
                    <span className="staff-handbook-text317">
                      We encourage you to resolve any difficulties through
                      direct conversations with the relevant parties in the
                      first instance. If you are not comfortable doing this or
                      it proves unsuccessful, you can speak to any of the
                      following to discuss the situation: your team leader, any
                      other team leader or tribal elder, or any member of the
                      culture tribe. The process is as follows:
                    </span>
                  </Fragment>
                }
              ></CheckList>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text318">
                      Compassionate leave
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text319">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text320">
                      Whilst timescales of this process may vary slightly case
                      to case, PortSwigger will endeavor to hold relevant
                      meetings and provide outcomes without unreasonable delay.
                    </span>
                  </Fragment>
                }
                headingType="H4"
                showHeading={false}
                rootClassName="heading-and-paragraphroot-class-name27"
              ></HeadingAndParagraph>
              <CheckListSection
                item1={
                  <Fragment>
                    <span className="staff-handbook-text321 text-body-1">
                      <span>
                        TriNet’s handbook includes standards of conduct and
                        employment protection policies: These include
                        anti-harassment, discrimination, retaliation
                        protections, and workplace safety standards.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text324 text-body-1">
                      <span>
                        Grievances and complaints can be raised through TriNet’s
                        hotline or support centre. These routes are designed to
                        comply with U.S. employment law and include processes
                        for formal investigation and resolution of serious
                        concerns.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text327 text-body-1">
                      At PortSwigger, we expect you to uphold high standards of
                      conduct. If concerns arise, we’ll raise them with clarity,
                      respect, and a focus on resolution.
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text328 text-body-1">
                      If you have a concern, raise it early. Most issues are
                      best resolved informally — talk to your Leader or someone
                      you trust. If informal routes don’t feel appropriate, you
                      can raise a formal grievance through TriNet, as they have
                      the U.S. legal knowledge.
                    </span>
                  </Fragment>
                }
                item5={
                  <Fragment>
                    <span className="staff-handbook-text329 text-body-1">
                      <span className="staff-handbook-text330">
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
                item6={
                  <Fragment>
                    <span className="staff-handbook-text332 text-body-1">
                      <span className="staff-handbook-text333">
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
                item7={
                  <Fragment>
                    <span className="staff-handbook-text335 text-body-1">
                      <span className="staff-handbook-text336">
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
                item8={
                  <Fragment>
                    <span className="staff-handbook-text338 text-body-1">
                      <span className="staff-handbook-text339">
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
                heading={
                  <Fragment>
                    <span className="staff-handbook-text341"></span>
                  </Fragment>
                }
                itemCount={4}
                subHeading={
                  <Fragment>
                    <span className="staff-handbook-text342">
                      U.S. Swiggers: What to know
                    </span>
                  </Fragment>
                }
                rootClassName="check-list-sectionroot-class-name2"
                showSectionHeading={false}
              ></CheckListSection>
              <CheckList
                item1={
                  <Fragment>
                    <span className="staff-handbook-text343 text-body-1">
                      A Swigger sends their appeal in writing to their team
                      lead, a tribal elder, or member of the culture team. In
                      this message, they should state that they wish to raise an
                      appeal and state their full grounds of appeal, within a
                      week of an outcome having been communicated.
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text344 text-body-1">
                      PortSwigger appoints a suitable person to hear the appeal
                      in an appeal meeting.
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text345 text-body-1">
                      The appeal hearer engages in preliminary investigations
                      (such as reviewing documents &amp; speaking to relevant
                      people to gather their perspective)
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text346 text-body-1">
                      The Swigger is invited to an appeal meeting and may choose
                      to be accompanied e.g. by another Swigger. If they would
                      like to bring somebody, they should communicate this in
                      writing at least 24 hours before the meeting.
                    </span>
                  </Fragment>
                }
                item5={
                  <Fragment>
                    <span className="staff-handbook-text347">
                      The person hearing the appeal then reviews all of the
                      information provided. If they feel unable to make a
                      decision based on the information provided, they may
                      investigate any missing information accordingly. Once
                      satisfied that they have all the relevant information,
                      they make a decision.
                    </span>
                  </Fragment>
                }
                item6={
                  <Fragment>
                    <span className="staff-handbook-text348">
                      The decision is communicated to relevant parties. This is
                      normally the end of the procedure and there is no further
                      appeal.
                    </span>
                  </Fragment>
                }
                item7={
                  <Fragment>
                    <span className="staff-handbook-text349">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="staff-handbook-text350">Appeals</span>
                  </Fragment>
                }
                ctaLabel={
                  <Fragment>
                    <span className="staff-handbook-text351">GET IN TOUCH</span>
                  </Fragment>
                }
                listType="orderedList"
                itemCount={6}
                sectionId="appeals"
                headingType="H4"
                rootClassName="check-listroot-class-name5"
                showParagraph
                headingParagraph={
                  <Fragment>
                    <span className="staff-handbook-text352">
                      <span>
                        Should a Swigger feel unclear or disagree with the
                        outcome of a meeting or decision, we encourage you to
                        discuss this with your team lead, a tribal elder or
                        member of the culture team in the first instance. This
                        will give an opportunity to surface and address any
                        misunderstandings or misalignment informally.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        In the event that discussing these matters informally
                        fails to resolve the situation and a Swigger wishes to
                        appeal a decision, the process is as follows:
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CheckList>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text358">
                      Compassionate leave
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text359">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text360">
                      Whilst timescales of this process may vary slightly case
                      to case, PortSwigger will endeavor to hold relevant
                      meetings and provide outcomes without unreasonable delay.
                    </span>
                  </Fragment>
                }
                headingType="H4"
                showHeading={false}
                rootClassName="heading-and-paragraphroot-class-name26"
              ></HeadingAndParagraph>
              <CheckList
                item1={
                  <Fragment>
                    <span className="staff-handbook-text361 text-body-1">
                      <span>
                        The first 26 weeks are paid at full pay, and the
                        following 13 weeks are paid at the statutory maternity
                        pay rate. 
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text364 text-body-1">
                      <span>
                        On returning to work from parental leave, a monthly
                        bonus of 50% will be paid each month during the first 6
                        months following your return.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text367 text-body-1">
                      The appeal hearer engages in preliminary investigations
                      (such as reviewing documents &amp; speaking to relevant
                      people to gather their perspective)
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text368 text-body-1">
                      The Swigger is invited to an appeal meeting and may choose
                      to be accompanied e.g. by another Swigger. If they would
                      like to bring somebody, they should communicate this in
                      writing at least 24 hours before the meeting.
                    </span>
                  </Fragment>
                }
                item5={
                  <Fragment>
                    <span className="staff-handbook-text369">
                      The person hearing the appeal then reviews all of the
                      information provided. If they feel unable to make a
                      decision based on the information provided, they may
                      investigate any missing information accordingly. Once
                      satisfied that they have all the relevant information,
                      they make a decision.
                    </span>
                  </Fragment>
                }
                item6={
                  <Fragment>
                    <span className="staff-handbook-text370">
                      The decision is communicated to relevant parties. This is
                      normally the end of the procedure and there is no further
                      appeal.
                    </span>
                  </Fragment>
                }
                item7={
                  <Fragment>
                    <span className="staff-handbook-text371">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="staff-handbook-text372">
                      Leave for new parents
                    </span>
                  </Fragment>
                }
                ctaLabel={
                  <Fragment>
                    <span className="staff-handbook-text373">GET IN TOUCH</span>
                  </Fragment>
                }
                listType="checkList"
                itemCount={2}
                sectionId="leave-for-new-parents"
                headingType="H4"
                rootClassName="check-listroot-class-name6"
                showParagraph
                headingParagraph={
                  <Fragment>
                    <span className="staff-handbook-text374">
                      <span>
                        Employees who give birth are entitled to take up to one
                        year of leave. Provided they have been continuously
                        employed for at least 6 months by the start date of
                        their maternity leave:
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CheckList>
              <CheckList
                item1={
                  <Fragment>
                    <span className="staff-handbook-text377 text-body-1">
                      <span>
                        For employees whose partner gives birth and has over two
                        years of tenure, you will be entitled to twelve weeks of
                        fully paid leave.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item2={
                  <Fragment>
                    <span className="staff-handbook-text380 text-body-1">
                      <span>
                        For those whose partner gives birth and has less than
                        two years, you will be entitled to six weeks of fully
                        paid leave.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                item3={
                  <Fragment>
                    <span className="staff-handbook-text383 text-body-1">
                      The appeal hearer engages in preliminary investigations
                      (such as reviewing documents &amp; speaking to relevant
                      people to gather their perspective)
                    </span>
                  </Fragment>
                }
                item4={
                  <Fragment>
                    <span className="staff-handbook-text384 text-body-1">
                      The Swigger is invited to an appeal meeting and may choose
                      to be accompanied e.g. by another Swigger. If they would
                      like to bring somebody, they should communicate this in
                      writing at least 24 hours before the meeting.
                    </span>
                  </Fragment>
                }
                item5={
                  <Fragment>
                    <span className="staff-handbook-text385">
                      The person hearing the appeal then reviews all of the
                      information provided. If they feel unable to make a
                      decision based on the information provided, they may
                      investigate any missing information accordingly. Once
                      satisfied that they have all the relevant information,
                      they make a decision.
                    </span>
                  </Fragment>
                }
                item6={
                  <Fragment>
                    <span className="staff-handbook-text386">
                      The decision is communicated to relevant parties. This is
                      normally the end of the procedure and there is no further
                      appeal.
                    </span>
                  </Fragment>
                }
                item7={
                  <Fragment>
                    <span className="staff-handbook-text387">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="staff-handbook-text388"> None</span>
                  </Fragment>
                }
                ctaLabel={
                  <Fragment>
                    <span className="staff-handbook-text389">GET IN TOUCH</span>
                  </Fragment>
                }
                listType="checkList"
                itemCount={2}
                sectionId="leave-for-new-parents"
                headingType="NONE"
                rootClassName="check-listroot-class-name7"
                showParagraph
                headingParagraph={
                  <Fragment>
                    <span className="staff-handbook-text390">
                      <span>
                        Employees who have been employed for at least six
                        months, by the time their partner gives birth, are
                        entitled to take up to 12 weeks of paid leave, depending
                        on the length of tenure:
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CheckList>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text393">
                      Compassionate leave
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text394">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text395">
                      <span>
                        This leave can be taken in an initial block of two to
                        four weeks, followed by chunks of two weeks. All
                        employees should give sufficient notice of intended
                        leave, such as giving at least a month’s notice for
                        taking a month off.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Please speak to the Finance team and your team leader
                        about taking the time off.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Leave entitlements for new parents can be shared between
                        the parents.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Other situations related to parental leave might also
                        arise. If you have questions about specific situations,
                        please speak to your team leader or anyone on the
                        culture team.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Please discuss parental leave arrangements with your
                        team leader if the need arises.
                      </span>
                    </span>
                  </Fragment>
                }
                headingType="H4"
                showHeading={false}
                rootClassName="heading-and-paragraphroot-class-name23"
              ></HeadingAndParagraph>
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text409">
                      Compassionate leave
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text410">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text411">
                      <span>
                        You may take a reasonable period of paid compassionate
                        leave in the event of the death or serious illness of a
                        close relative or other similar person. Please notify
                        your team leader if this need arises, and record your
                        absence in Bamboo.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        We have a variety of resources in place to help our
                        people look after themselves. The Culture Tribe are
                        always happy to support in any way possible. A full
                        summary of the available support, including details of
                        our Employee Assistance Programme, can be found on the
                        intranet.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="compassionate-leave"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name25"
              ></HeadingAndParagraph>
              <img
                alt="pastedImage"
                src="/Pages/StaffHandbook/pastedimage-obw4-1200w.png"
                className="width-100"
              />
              <HeadingAndParagraph
                heading={
                  <Fragment>
                    <span className="staff-handbook-text416">
                      Further questions
                    </span>
                  </Fragment>
                }
                topLabel={
                  <Fragment>
                    <span className="staff-handbook-text417">
                      Securing the web
                    </span>
                  </Fragment>
                }
                alignment="left"
                paragraph={
                  <Fragment>
                    <span className="staff-handbook-text418">
                      <span>
                        If you have any questions that are not answered in this
                        handbook, you can ask PortSwigger&apos;s trusty
                        assistant Jeeves (
                      </span>
                      <a href="mailto:jeeves@portswigger.net?subject=">
                        jeeves@portswigger.net
                      </a>
                      <span>
                        ). You can also discuss anything with your team leader
                        at any time.
                      </span>
                    </span>
                  </Fragment>
                }
                sectionId="urther-questions"
                headingType="H4"
                rootClassName="heading-and-paragraphroot-class-name24"
              ></HeadingAndParagraph>
            </div>
          </div>
        </section>
        <section className="align-center padding-m column width-100">
          <div className="gap-m width-max-content grid-colums-3 grid justify-center width-100">
            <SimpleCard
              url="https://portswigger.net/careers/application-process"
              heading={
                <Fragment>
                  <span className="staff-handbook-text421">
                    What to expect from the application process
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="staff-handbook-text422">Read more</span>
                </Fragment>
              }
            ></SimpleCard>
            <SimpleCard
              url="https://portswigger.net/careers/what-we-look-for"
              heading={
                <Fragment>
                  <span className="staff-handbook-text423">
                    What we look for in PortSwigger people
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="staff-handbook-text424">Read more</span>
                </Fragment>
              }
            ></SimpleCard>
            <SimpleCard
              url="https://portswigger.net/careers"
              heading={
                <Fragment>
                  <span className="staff-handbook-text425">
                    View all available positions
                  </span>
                </Fragment>
              }
              linkLabel={
                <Fragment>
                  <span className="staff-handbook-text426">Read more</span>
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

export default StaffHandbook
