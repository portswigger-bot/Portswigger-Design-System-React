import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import MinimalHeader from '../components/minimal-header'
import Hero from '../components/hero'
import SimpleCheckList from '../components/simple-check-list'
import HeadingAndParagraph from '../components/heading-and-paragraph'
import FeaturesList from '../components/features-list'
import Testimonial from '../components/testimonial'
import MeetSwiggersSection from '../components/meet-swiggers-section'
import Footer from '../components/footer'
import './portswigger-discord.css'

const PortswiggerDiscord = (props) => {
  return (
    <div className="portswigger-discord-container">
      <Helmet>
        <title>Join the official PortSwigger Discord</title>
        <meta
          name="description"
          content="A space dedicated to interacting with other Burp users and AppSec professionals."
        />
        <meta
          property="og:title"
          content="Join the official PortSwigger Discord"
        />
        <meta
          property="og:description"
          content="A space dedicated to interacting with other Burp users and AppSec professionals."
        />
      </Helmet>
      <LiveTagProduction rootClassName="live-tag-productionroot-class-name56"></LiveTagProduction>
      <MinimalHeader
        imageSrc="/Logos/Dark/dark-portswigger-200h.png"
        rootClassName="minimal-headerroot-class-name3"
      ></MinimalHeader>
      <main className="align-center column width-100">
        <Hero
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          heading={
            <Fragment>
              <span className="portswigger-discord-text10">
                Join the official PortSwigger Discord
              </span>
            </Fragment>
          }
          showCta
          ctaLabel={
            <Fragment>
              <span className="portswigger-discord-text11">
                JOIN THE DISCORD
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="portswigger-discord-text12">
                Burp Suite Professional
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="portswigger-discord-text13">BUY - $475</span>
            </Fragment>
          }
          heroImgSrc="/Pages/Discord/portswigger-discord-qr-code.svg"
          subHeading={
            <Fragment>
              <span className="portswigger-discord-text14">
                A space dedicated to interacting with other Burp users and
                AppSec professionals.
              </span>
            </Fragment>
          }
          ctaIconType="discord"
          columnLayout="50-50"
          headingStyle="H2"
          showTopLabel={false}
          rootClassName="heroroot-class-name6"
          mainImageAlign="center"
          mainImageHeight="200px"
          ctaIconPlacement="left"
          subHeadingFontStyle="intro"
        ></Hero>
        <SimpleCheckList
          listItems={[
            {
              label: 'Exclusive events',
              iconType: 'check',
            },
            {
              label: 'Chat with Burp developers and researchers',
              iconType: 'check',
            },
            {
              label: 'Feature previews',
              iconType: 'check',
            },
            {
              label: 'And much more',
              iconType: 'check',
            },
          ]}
          rootClassName="simple-check-listroot-class-name2"
        ></SimpleCheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="portswigger-discord-text15">
                Meet the Swiggers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="portswigger-discord-text16">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="portswigger-discord-text17">
                Join and chat with the 1000s of members already in the
                PortSwigger Discord.
              </span>
            </Fragment>
          }
          showHeading={false}
          paragraphType="text-intro"
          rootClassName="heading-and-paragraphroot-class-name64"
        ></HeadingAndParagraph>
        <FeaturesList
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          ctaLabel={
            <Fragment>
              <span className="portswigger-discord-text18">
                JOIN THE DISCORD
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Discord/discord-server-guide-1200w-1200w.webp"
          showCtaBtn
          ctaIconType="discord"
          featureList={[
            {
              heading: 'Chat with the developers of Burp Suite',
              paragraph:
                'Open dialogue with Burp Suite developers, make suggestions and develop your understanding of Burp Suite in a relaxed environment. Remember, there are no stupid questions!',
            },
            {
              heading: 'Discuss with other Burp Suite users',
              paragraph:
                'Communicate with other Burp Suite users, share tips, tricks and advice, reminisce and much more in the PortSwigger Discord.',
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name3"
          imagePlacement="right"
          mainImageHeight="100%"
          ctaIconPlacement="left"
        ></FeaturesList>
        <Testimonial
          author={
            <Fragment>
              <span className="portswigger-discord-text19">
                @t0xodile, Burp Suite Professional user
              </span>
            </Fragment>
          }
          testimonial={
            <Fragment>
              <span className="portswigger-discord-text20">
                &quot;I do have to say, if you&apos;re not in the @PortSwigger
                discord you&apos;re missing out.&quot;
              </span>
            </Fragment>
          }
          rootClassName="testimonialroot-class-name"
        ></Testimonial>
        <FeaturesList
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          ctaLabel={
            <Fragment>
              <span className="portswigger-discord-text21">
                JOIN THE DISCORD
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Discord/discord-meeting-1200w-1200w.webp"
          showCtaBtn
          ctaIconType="discord"
          featureList={[
            {
              heading: 'Join exclusive events',
              paragraph:
                'Get involved in exclusive presentations from the PortSwigger Research team, game nights, exclusive feature launch events and much more.',
            },
            {
              heading: 'Preview of Burp features',
              paragraph:
                'The PortSwigger Discord  is a great way to see what Burp developers are working on. Take a sneak-peek at future updates.',
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name2"
          imagePlacement="left"
          mainImageAlign="stretch"
          mainImageHeight="100%"
          ctaIconPlacement="left"
        ></FeaturesList>
        <Testimonial
          author={
            <Fragment>
              <span className="portswigger-discord-text22">
                @t0xodile, Burp Suite Professional user
              </span>
            </Fragment>
          }
          testimonial={
            <Fragment>
              <span className="portswigger-discord-text23">
                &quot;I must confess, your Discord is one of the best games in
                town. I&apos;ve joined it and it&apos;s fascinating&quot;
              </span>
            </Fragment>
          }
          rootClassName="testimonialroot-class-name1"
        ></Testimonial>
        <FeaturesList
          ctaUrl="https://discord.com/invite/portswigger"
          ctaType="primary-purple"
          ctaLabel={
            <Fragment>
              <span className="portswigger-discord-text24">
                JOIN THE DISCORD
              </span>
            </Fragment>
          }
          mainImgSrc="/Pages/Discord/discord-mods-1200w-1200w.webp"
          showCtaBtn
          ctaIconType="discord"
          featureList={[
            {
              heading: 'Have your voice heard',
              paragraph:
                'Provide your feedback on Burp Suite. Take part in surveys, research and help drive new features and UX designs with your unique insight.',
            },
            {
              heading: 'Keep up-to-date with all things Burp',
              paragraph:
                'The latest updates to Burp Suite, PortSwigger news, and research  from the team at PortSwigger.',
            },
          ]}
          columnLayout="50-50"
          rootClassName="features-listroot-class-name4"
          imagePlacement="right"
          mainImageHeight="100%"
          ctaIconPlacement="left"
        ></FeaturesList>
        <MeetSwiggersSection
          heading={
            <Fragment>
              <span className="portswigger-discord-text25">
                Meet the Discord moderators
              </span>
            </Fragment>
          }
          sigger1={
            <Fragment>
              <span className="portswigger-discord-text26">CoreyD97</span>
            </Fragment>
          }
          swigger2={
            <Fragment>
              <span className="portswigger-discord-text27">Floyd</span>
            </Fragment>
          }
          swigger3={
            <Fragment>
              <span className="portswigger-discord-text28">NickC</span>
            </Fragment>
          }
          swigger4={
            <Fragment>
              <span className="portswigger-discord-text29">Tib3rius</span>
            </Fragment>
          }
          nrOfCards={4}
          paragraph={
            <Fragment>
              <span className="portswigger-discord-text30">
                We are a diverse group of people with a wide range of interests
                and backgrounds. What Swiggers have in common is that they all
                love their work and are exceptionally good at what they do.
              </span>
            </Fragment>
          }
          headingType="H2"
          swigger1Src="/Pages/Discord/coreyd97-200h-200h.webp"
          swigger2Src="/Pages/Discord/floyd-200h-200h.webp"
          swigger3Src="/Pages/Discord/nickc-200h-200h.webp"
          swigger4Src="/Pages/Discord/tib3rius1-200h-200h.webp"
          rootClassName="meet-swiggers-sectionroot-class-name"
          showParagraph={false}
        ></MeetSwiggersSection>
      </main>
      <Footer rootClassName="footerroot-class-name9"></Footer>
    </div>
  )
}

export default PortswiggerDiscord
