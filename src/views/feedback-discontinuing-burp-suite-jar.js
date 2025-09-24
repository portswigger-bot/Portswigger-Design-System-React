import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import HeadingAndParagraph from '../components/heading-and-paragraph'
import CheckList from '../components/check-list'
import Button from '../components/button'
import Footer from '../components/footer'
import './feedback-discontinuing-burp-suite-jar.css'

const FeedbackDiscontinuingBurpSuiteJar = (props) => {
  return (
    <div className="feedback-discontinuing-burp-suite-jar-container1">
      <Helmet>
        <title>Feedback: Discontinuing Burp Suite Jar</title>
        <meta
          name="description"
          content="We're considering removing the option to download each version of Burp Suite as a standalone JAR file and want your feedback."
        />
        <meta
          property="og:title"
          content="Feedback: Discontinuing Burp Suite Jar"
        />
        <meta
          property="og:description"
          content="We're considering removing the option to download each version of Burp Suite as a standalone JAR file and want your feedback."
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <LiveTagProduction rootClassName="live-tag-productionroot-class-name54"></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name4"></Navigation>
      <main className="feedback-discontinuing-burp-suite-jar-main gap-m align-center column width-100">
        <Hero
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text100">
                Discontinuing the Burp Suite JAR to improve security and
                performance
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text101">
                FIND OUT MORE
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text102">
                Feedback wanted:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          cta2Label={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text103">
                BUY - $475
              </span>
            </Fragment>
          }
          heroImgSrc="/Logos/mega-nav-portswigger-logo-mobile.svg"
          subHeading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text104">
                Culture eats everything for breakfast.
              </span>
            </Fragment>
          }
          columnLayout="50-50"
          headingStyle="H2"
          showTopLabel
          rootClassName="heroroot-class-name5"
          mainImageAlign="stretch"
          showSubHeading={false}
          mainImageHeight="100%"
        ></Hero>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text105">
                Meet the Swiggers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text106">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text107">
                <span>
                  We&apos;re considering removing the option to download each
                  version of Burp Suite as a standalone JAR file. We&apos;re
                  aware that some users may be impacted by this change. To
                  ensure that you have a chance to share any concerns,
                  we&apos;re reaching out to those who we think may be affected.
                </span>
                <br></br>
                <br></br>
                <span>
                  We&apos;ll explore the reasons why we&apos;re looking into
                  this and explain why you might not need to use the JAR after
                  all. We&apos;ll also share workarounds for common JAR use
                  cases, including how to deploy a private Collaborator server.
                </span>
                <br></br>
                <br></br>
                <span>
                  Finally, we&apos;d like to give you the opportunity to share
                  your thoughts on whether this will work for you so that we can
                  take steps to mitigate the impact this might have.
                </span>
              </span>
            </Fragment>
          }
          showHeading={false}
          rootClassName="heading-and-paragraphroot-class-name43"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text115">
                Why are we considering this change?
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text116">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text117">
                {' '}
                The following are some of the key reasons why we&apos;re
                considering removing the JAR option from the website.
              </span>
            </Fragment>
          }
          sectionId="removing-jar-option"
          headingType="H2"
          showHeading
          rootClassName="heading-and-paragraphroot-class-name47"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text118">
                Exposure through missed security updates
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text119">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text120">
                <span>
                  As every security professional knows, timely updates are
                  crucial for application security. Without them, users run the
                  risk of attackers using known vulnerabilities to exploit them.
                </span>
                <br></br>
                <br></br>
                <span>
                  In particular, Burp&apos;s embedded Chromium browser
                  represents a significant attack surface and frequently needs
                  critical security updates. That&apos;s why we aim to include
                  the most recent stable version of Chromium with each release
                  of Burp, and even fast-track releases just to update Chromium
                  when necessary.
                </span>
                <br></br>
                <br></br>
                <span>
                  While analyzing the versions of Burp Suite in active use, we
                  noticed that the majority of versions with unpatched
                  vulnerabilities were running Burp from a JAR. We suspect that
                  this is largely due to the JAR version lacking the auto-update
                  functionality, meaning you have to manually download a new JAR
                  every time we release.
                </span>
                <br></br>
                <br></br>
                <span>
                  If you use one of the standard, package-based installations we
                  provide for Linux, macOS, and Windows respectively, you
                  benefit from auto-updates, ensuring that you never miss a
                  security patch.
                </span>
              </span>
            </Fragment>
          }
          sectionId="removing-jar-option"
          headingType="H3"
          showHeading
          rootClassName="heading-and-paragraphroot-class-name48"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text131">
                Use of insecure, outdated runtime environments
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text132">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text133">
                <span>
                  Our platform-specific installations include their own Java
                  Runtime Environment (JRE).
                </span>
                <br></br>
                <br></br>
                <span>
                  If you run Burp from a JAR file, you need to maintain your own
                  environment, which in practice means that many JAR users are
                  relying on older JREs. Not only is this a common source of
                  bugs and performance issues -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/blog/introducing-burp-suites-game-changing-performance-update"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="feedback-discontinuing-burp-suite-jar-link1"
                >
                  a topic that we know is close to your heart
                </a>
                <span>
                  {' '}
                  - it introduces another security weakness as you may be
                  exposed to known vulnerabilities in outdated JRE versions.
                </span>
                <br></br>
                <br></br>
                <span>
                  Just like Burp Suite itself, if you use one of the
                  platform-specific installers and auto-updates, we keep the JRE
                  up to date on your behalf, ensuring the most stable and secure
                  experience.
                </span>
              </span>
            </Fragment>
          }
          sectionId="removing-jar-option"
          headingType="H3"
          showHeading
          rootClassName="heading-and-paragraphroot-class-name49"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text142">
                Bloated file size
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text143">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text144">
                <span>
                  In addition to potential security and performance issues, the
                  JAR file also takes up excessive disk space. Although the app
                  itself runs on the platform-agnostic JVM, the built-in
                  Chromium browser is platform-specific, meaning the all-in-one
                  JAR download contains three entire browsers, one for each OS.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our platform-specific installers are much leaner by
                  comparison, and only contain what&apos;s necessary for your
                  environment.
                </span>
              </span>
            </Fragment>
          }
          sectionId="removing-jar-option"
          headingType="H3"
          showHeading
          rootClassName="heading-and-paragraphroot-class-name50"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text149">
                Customizing JVM settings without the JAR
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text150">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text151">
                <span>
                  Users often run Burp from a JAR so that they have more
                  granular control of the JVM. If this applies to you, the good
                  news is that you can still do this with our installer-based
                  versions of Burp.
                </span>
                <br></br>
                <br></br>
                <span>
                  Some options that were previously only available as
                  command-line arguments, such as being able to specify how much
                  memory is allocated to the JVM, you can now control from the
                  regular settings menu (
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text156">
                  Settings &gt; Suite &gt; Startup behavior &gt; Maximum Java
                  memory usage
                </span>
                <span>).</span>
                <br></br>
                <br></br>
                <span>
                  Alternatively, you can pass all of the same arguments to the
                  JVM by creating an options file in the installation directory.
                  To do this:
                </span>
              </span>
            </Fragment>
          }
          sectionId="removing-jar-option"
          headingType="H2"
          showHeading
          rootClassName="heading-and-paragraphroot-class-name51"
        ></HeadingAndParagraph>
        <CheckList
          item1={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text161 text-body-1">
                <span>
                  Either
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/releases#professional"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="feedback-discontinuing-burp-suite-jar-link2"
                >
                  download the relevant Burp Suite installer
                </a>
                <span>
                   and run it, or go to your existing Burp Suite installation
                  directory. By default, you can find this in the following
                  location:
                </span>
                <br></br>
                <span>     - </span>
                <span className="feedback-discontinuing-burp-suite-jar-text166">
                  Linux:
                </span>
                <span>
                   
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text168">
                  /home/&lt;user&gt;/BurpSuite
                </span>
                <br></br>
                <span>
                       -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text171">
                  macOS: 
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text172">
                  /Users/&lt;user&gt;/Applications/Burp Suite Professional
                </span>
                <br></br>
                <span>
                       -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text175">
                  Windows: 
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text176">
                  C:\Program Files\BurpSuitePro
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text178 text-body-1">
                In the installation directory, locate the JAR file.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text179 text-body-1">
                <span>
                  In the same directory as the JAR, create a file called 
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text181">
                  user.vmoptions
                </span>
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text182 text-body-1">
                <span>In the</span>
                <span className="feedback-discontinuing-burp-suite-jar-text184">
                   
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text185">
                  user.vmoptions 
                </span>
                <span>
                  file, list all of the arguments that you normally pass via the
                  command line, separating each with a newline.
                </span>
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text187">
                The grievance hearer will look into any additional points
                raised.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text188">
                Once ready, the grievance hearer will produce a written outcome
                letter of their findings. This is then shared with relevant
                parties.
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text189">
                The Swigger who raised the grievance will be given the right to
                appeal the findings of the grievance.
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text190">
                Our locations
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text191">
                GET IN TOUCH
              </span>
            </Fragment>
          }
          itemCount={4}
          showHeading={false}
          rootClassName="check-listroot-class-name16"
          headingParagraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text192">
                Swiggers travel to work in various ways. Each of our offices
                offers different commuting options and amenities to support your
                commute to work:
              </span>
            </Fragment>
          }
        ></CheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text193">
                Meet the Swiggers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text194">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text195">
                From now on, when you launch the installed version of Burp, it
                runs on the JVM using your specified configuration.
              </span>
            </Fragment>
          }
          showHeading={false}
          rootClassName="heading-and-paragraphroot-class-name52"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text196">
                Meet the Swiggers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text197">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text198">
                <span className="feedback-discontinuing-burp-suite-jar-text199">
                  Example
                </span>
                <br></br>
                <span>If you normally run:</span>
                <br></br>
                <span className="feedback-discontinuing-burp-suite-jar-text203">
                  java -Xmx4g -Xms128m -Dsun.java2d.uiScale.enable=false -jar
                  /path/to/burp.jar
                </span>
                <br></br>
                <span>
                  You can instead just create a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text206">
                  user.vmoptions
                </span>
                <span> file with the following contents:</span>
                <br></br>
                <span>
                       
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text210">
                  - Xmx4g
                </span>
                <br className="feedback-discontinuing-burp-suite-jar-text211"></br>
                <span className="feedback-discontinuing-burp-suite-jar-text212">
                     - Xms128m
                </span>
                <br className="feedback-discontinuing-burp-suite-jar-text213"></br>
                <span className="feedback-discontinuing-burp-suite-jar-text214">
                     - Dsun.java2d.uiScale.enable=false
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          showHeading={false}
          rootClassName="heading-and-paragraphroot-class-name53"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text216">
                Meet the Swiggers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text217">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text218">
                <span className="feedback-discontinuing-burp-suite-jar-text219">
                  Note:
                </span>
                <span>
                  {' '}
                  Do not modify the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text221">
                  vmoptions.txt
                </span>
                <span>
                  {' '}
                  or
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text223">
                  settings.vmoptions
                </span>
                <span>
                  {' '}
                  files. These are often overwritten during updates, meaning any
                  changes you make will be lost. We never modify the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text225">
                  user.vmoptions
                </span>
                <span> file.</span>
              </span>
            </Fragment>
          }
          showHeading={false}
          rootClassName="heading-and-paragraphroot-class-name54"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text227">
                What if I still need the JAR?
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text228">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text229">
                <span>
                  While the workarounds above remove the need for most people to
                  use the JAR, we&apos;re aware that there are some specialist
                  use cases that may be impacted.
                </span>
                <br></br>
                <br></br>
                <span>
                  If you do still need to use the JAR, for example, to support
                  custom workflows and automation, to help with developing
                  extensions, or to deploy a private Collaborator server, there
                  is a simple workaround - the installation package also
                  contains a JAR that you can use instead.
                </span>
              </span>
            </Fragment>
          }
          headingType="H2"
          rootClassName="heading-and-paragraphroot-class-name55"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text234">
                Using the JAR from a Burp Suite Professional or Community
                Edition installation
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text235">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text236">
                This method provides much of the same flexibility, while
                leveraging the security and convenience of the installer-based
                version. This way, you can keep the JAR version up to date by
                simply launching Burp Suite and letting the auto-update kick in.
              </span>
            </Fragment>
          }
          headingType="H3"
          rootClassName="heading-and-paragraphroot-class-name56"
        ></HeadingAndParagraph>
        <CheckList
          item1={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text237 text-body-1">
                <span>
                  Either
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/releases#professional"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="feedback-discontinuing-burp-suite-jar-link3"
                >
                  download the relevant Burp Suite installer
                </a>
                <span>
                   and run it, or go to your existing Burp Suite installation
                  directory. By default, you can find this in the following
                  location:
                </span>
                <br></br>
                <span>     - </span>
                <span className="feedback-discontinuing-burp-suite-jar-text242">
                  Linux:
                </span>
                <span>
                   
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text244">
                  /home/&lt;user&gt;/BurpSuite
                </span>
                <br></br>
                <span>
                       -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text247">
                  macOS: 
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text248">
                  /Users/&lt;user&gt;/Applications/Burp Suite Professional
                </span>
                <br></br>
                <span>
                       -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text251">
                  Windows: 
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text252">
                  C:\Program Files\BurpSuitePro
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text254 text-body-1">
                In the installation directory, locate the JAR file.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text255 text-body-1">
                Refactor your existing scripts to point to the new JAR location,
                or manually invoke the JAR from the command line as you normally
                would.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text256 text-body-1">
                <span>In the</span>
                <span className="feedback-discontinuing-burp-suite-jar-text258">
                   
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text259">
                  user.vmoptions 
                </span>
                <span>
                  file, list all of the arguments that you normally pass via the
                  command line, separating each with a newline.
                </span>
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text261">
                The grievance hearer will look into any additional points
                raised.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text262">
                Once ready, the grievance hearer will produce a written outcome
                letter of their findings. This is then shared with relevant
                parties.
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text263">
                The Swigger who raised the grievance will be given the right to
                appeal the findings of the grievance.
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text264">
                Our locations
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text265">
                GET IN TOUCH
              </span>
            </Fragment>
          }
          itemCount={3}
          showHeading={false}
          rootClassName="check-listroot-class-name18"
          headingParagraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text266">
                Swiggers travel to work in various ways. Each of our offices
                offers different commuting options and amenities to support your
                commute to work:
              </span>
            </Fragment>
          }
        ></CheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text267">
                Meet the Swiggers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text268">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text269">
                <span className="feedback-discontinuing-burp-suite-jar-text270">
                  Note:
                </span>
                <span>
                   Avoid running the JAR from the installation directory while
                  simultaneously running the installed version of Burp Suite as
                  this can cause unexpected behavior. If you want to run both
                  versions concurrently, we recommend copying the JAR to a
                  different location outside of the installation package.
                  However, note that this means you won&apos;t benefit from
                  auto-updates to your copy of the JAR file.
                </span>
              </span>
            </Fragment>
          }
          showHeading={false}
          rootClassName="heading-and-paragraphroot-class-name57"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text272">
                Using the JAR from a Burp Suite Enterprise Edition installation
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text273">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text274">
                If you are a Burp Suite Enterprise Edition user, you can follow
                the same process as Burp Suite Professional users. However, if
                you don&apos;t want to or are unable to install Burp Suite
                Professional, you can also use the JAR file from your Burp Suite
                Enterprise Edition installation.
              </span>
            </Fragment>
          }
          headingType="H3"
          rootClassName="heading-and-paragraphroot-class-name58"
        ></HeadingAndParagraph>
        <CheckList
          item1={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text275 text-body-1">
                <span>
                  From the machine on which your Enterprise server is running,
                  locate the JAR file in the installation directory. By default,
                  you can find this in the following location:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>     - </span>
                <span className="feedback-discontinuing-burp-suite-jar-text279">
                  Linux:
                </span>
                <span>
                   
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text281">
                  /opt/burpsuite_enterprise/burp/burpsuite_pro_&lt;build-number&gt;.jar
                </span>
                <br></br>
                <span>
                       -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text284">
                  Windows: 
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text285">
                  C:\ProgramFiles\burpsuite_enterprise\burp\burpsuite_pro_&lt;build-number&gt;.jar
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          item2={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text287 text-body-1">
                Copy the JAR to a different machine or a location outside the
                installation directory.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text288 text-body-1">
                Invoke the JAR from the command line as you normally would.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text289 text-body-1">
                <span>In the</span>
                <span className="feedback-discontinuing-burp-suite-jar-text291">
                   
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text292">
                  user.vmoptions 
                </span>
                <span>
                  file, list all of the arguments that you normally pass via the
                  command line, separating each with a newline.
                </span>
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text294">
                The grievance hearer will look into any additional points
                raised.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text295">
                Once ready, the grievance hearer will produce a written outcome
                letter of their findings. This is then shared with relevant
                parties.
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text296">
                The Swigger who raised the grievance will be given the right to
                appeal the findings of the grievance.
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text297">
                Our locations
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text298">
                GET IN TOUCH
              </span>
            </Fragment>
          }
          itemCount={3}
          showHeading={false}
          rootClassName="check-listroot-class-name20"
          headingParagraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text299">
                Swiggers travel to work in various ways. Each of our offices
                offers different commuting options and amenities to support your
                commute to work:
              </span>
            </Fragment>
          }
        ></CheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text300">
                Meet the Swiggers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text301">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text302">
                <span className="feedback-discontinuing-burp-suite-jar-text303">
                  Note:
                </span>
                <span>
                   Do not invoke the JAR directly from the installation
                  directory. This can cause unexpected issues if your Burp Suite
                  Enterprise Edition instance is running simultaneously.
                </span>
              </span>
            </Fragment>
          }
          showHeading={false}
          rootClassName="heading-and-paragraphroot-class-name59"
        ></HeadingAndParagraph>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text305">
                Deploying a private Collaborator server
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text306">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text307">
                <span>
                  Deploying a private Collaborator server requires you to run
                  Burp from a JAR file using the --collaborator-server
                  command-line flag. If we remove the option to download the JAR
                  from the website, you can still deploy a private Collaborator
                  server using the JAR provided in either the Burp Suite
                  Professional or Burp Suite Enterprise Edition installation
                  package.
                </span>
                <br></br>
                <br></br>
                <span className="feedback-discontinuing-burp-suite-jar-text311">
                  Note
                </span>
                <span>
                  : This applies to Collaborator servers that you intend to use
                  with either Burp Suite Professional or Burp Suite Enterprise
                  Edition.
                </span>
              </span>
            </Fragment>
          }
          headingType="H3"
          rootClassName="heading-and-paragraphroot-class-name60"
        ></HeadingAndParagraph>
        <CheckList
          item1={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text313 text-body-1">
                <span>
                  Locate the JAR from a Burp Suite Professional or Enterprise
                  Edition installation, as described above. If you want to
                  deploy the Collaborator server on a different OS to your
                  existing Burp Suite installation,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/releases#professional"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="feedback-discontinuing-burp-suite-jar-link4"
                >
                  download and run the relevant Burp Suite Professional
                  installer
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
          item2={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text316 text-body-1">
                Copy the JAR to the machine on which you want to run the
                Collaborator server.
              </span>
            </Fragment>
          }
          item3={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text317 text-body-1">
                (Optional) If you ran the installer purely to extract the JAR,
                run the uninstaller to remove the leftover files from your
                system.
              </span>
            </Fragment>
          }
          item4={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text318 text-body-1">
                <span>
                  Invoke the JAR using the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="feedback-discontinuing-burp-suite-jar-text320">
                  --collaborator-server
                </span>
                <span>
                  {' '}
                  flag as you normally would. For detailed instructions on the
                  rest of the process, see
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://portswigger.net/burp/documentation/collaborator/server/private"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="feedback-discontinuing-burp-suite-jar-link5"
                >
                  Deploying a private Collaborator server.
                </a>
              </span>
            </Fragment>
          }
          item5={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text322">
                The grievance hearer will look into any additional points
                raised.
              </span>
            </Fragment>
          }
          item6={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text323">
                Once ready, the grievance hearer will produce a written outcome
                letter of their findings. This is then shared with relevant
                parties.
              </span>
            </Fragment>
          }
          item7={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text324">
                The Swigger who raised the grievance will be given the right to
                appeal the findings of the grievance.
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text325">
                Our locations
              </span>
            </Fragment>
          }
          ctaLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text326">
                GET IN TOUCH
              </span>
            </Fragment>
          }
          itemCount={4}
          showHeading={false}
          rootClassName="check-listroot-class-name21"
          headingParagraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text327">
                Swiggers travel to work in various ways. Each of our offices
                offers different commuting options and amenities to support your
                commute to work:
              </span>
            </Fragment>
          }
        ></CheckList>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text328">
                Share your thoughts
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text329">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text330">
                We recognize that there is no one-size-fits-all solution, which
                is why we&apos;re inviting your feedback. If none of the
                suggested alternatives address your specific use case, please
                share your thoughts and concerns using the following link:
              </span>
            </Fragment>
          }
          headingType="H3"
          rootClassName="heading-and-paragraphroot-class-name61"
        ></HeadingAndParagraph>
        <div className="width-max-content width-100 row feedback-discontinuing-burp-suite-jar-container2">
          <a
            href="https://usabi.li/do/f96c8a5374e5/8e66"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              btnLabel={
                <Fragment>
                  <span className="feedback-discontinuing-burp-suite-jar-text331">
                    SHARE YOUR THOUGHTS
                  </span>
                </Fragment>
              }
              iconPlacement="none"
              rootClassName="buttonroot-class-name30"
              className="feedback-discontinuing-burp-suite-jar-component33"
            ></Button>
          </a>
        </div>
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text332">
                Meet the Swiggers
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text333">
                Securing the web
              </span>
            </Fragment>
          }
          alignment="left"
          paragraph={
            <Fragment>
              <span className="feedback-discontinuing-burp-suite-jar-text334">
                Your feedback is invaluable and will help us make an informed
                decision.
              </span>
            </Fragment>
          }
          showHeading={false}
          rootClassName="heading-and-paragraphroot-class-name62"
        ></HeadingAndParagraph>
      </main>
      <Footer rootClassName="footerroot-class-name8"></Footer>
    </div>
  )
}

export default FeedbackDiscontinuingBurpSuiteJar
