import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './accordion-list.css'

const AccordionList = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-s width-max-content column width-100">
        <div className="column">
          <div data-thq="accordion" className="accordion-list-accordion1">
            <details
              data-thq="accordion-trigger"
              className="accordion-list-trigger1"
            >
              <summary
                data-thq="accordion-summary"
                className="accordion-list-summary1"
              >
                <span className="heading-5">
                  {props.item1Trigger ?? (
                    <Fragment>
                      <span className="accordion-list-text34">
                        When is [Burp Suite DAST] expected to be available for
                        enterprise usage? Interested to get a deep dive demo.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div
                  data-thq="accordion-icon"
                  className="accordion-list-icon-container1"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="accordion-list-container2">
                <p className="accordion-list-item1-content1 text-body-1">
                  {props.item1Content ?? (
                    <Fragment>
                      <span className="accordion-list-item1-content2 text-body-1">
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
                          className="accordion-list-link4"
                        >
                          Burp Suite DAST
                        </a>
                        <span>
                          . We’ve renamed it to provide greater clarity around
                          the product’s purpose. Burp Suite DAST continues to be
                          trusted by leading global organizations for scalable,
                          automated security testing and rest assured, we’ll
                          keep innovating and adding new capabilities to make it
                          even better.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Keep an eye out for a follow-up webinar with a live
                          demo illustrating the value of Burp Suite DAST.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="accordion-list-accordion2">
            <details
              data-thq="accordion-trigger"
              className="accordion-list-trigger2"
            >
              <summary
                data-thq="accordion-summary"
                className="accordion-list-summary2"
              >
                <span className="heading-5">
                  {props.item2Trigger ?? (
                    <Fragment>
                      <span className="accordion-list-text26">
                        If you need to follow a specific workflow in the API,
                        could Burp Suite DAST handle it?
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
                <div
                  data-thq="accordion-icon"
                  className="accordion-list-icon-container2"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="accordion-list-container3">
                <p className="accordion-list-item2-content1 text-body-1">
                  {props.item2Content ?? (
                    <Fragment>
                      <span className="accordion-list-item2-content2 text-body-1">
                        <span>
                          Yes. Burp Suite DAST can scan APIs defined via
                          OpenAPI, SOAP,
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <a
                          href="http://portswigger.net/burp/releases/enterprise-edition-2025-2"
                          className="accordion-list-link1"
                        >
                          Postman collections
                        </a>
                        <span>
                          , and more. If your API requires stateful workflows,
                          you can use recorded login sequences or authenticated
                          sessions.
                        </span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="accordion-list-accordion3">
            <details
              data-thq="accordion-trigger"
              className="accordion-list-trigger3"
            >
              <summary
                data-thq="accordion-summary"
                className="accordion-list-summary3"
              >
                <span className="heading-5">
                  {props.item3Trigger ?? (
                    <Fragment>
                      <span className="accordion-list-text11">
                        How does this DAST tool compare to traditional DAST
                        solutions and API security tools? What if our team wants
                        a solution that does DAST&apos;s job and also the task
                        of [an] API security tool — will Burp Suite&apos;s DAST
                        solution solve our needs?
                      </span>
                    </Fragment>
                  )}
                </span>
                <div
                  data-thq="accordion-icon"
                  className="accordion-list-icon-container3"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="accordion-list-container4">
                <p className="accordion-list-item3-content text-body-1">
                  {props.item3Content ?? (
                    <Fragment>
                      <span className="accordion-list-text21">
                        <span>
                          Burp Suite DAST delivers deep, accurate scanning of
                          both web apps and APIs. We currently support REST and
                          SOAP APIs, either in isolation or as part of a broader
                          web app scan. You just need to provide a suitable
                          OpenAPI (Swagger) spec, WSDL, or Postman Collection.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Unlike generic tools that spread themselves thin
                          across many areas, Burp Suite DAST focuses on
                          delivering deep, high-quality results where it matters
                          most. If your team is looking for a DAST solution that
                          can also handle API security with depth and precision,
                          not just tick a box, Burp Suite DAST is built to meet
                          that need.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="accordion-list-accordion4">
            <details
              data-thq="accordion-trigger"
              className="accordion-list-trigger4"
            >
              <summary
                data-thq="accordion-summary"
                className="accordion-list-summary4"
              >
                <span className="heading-5">
                  {props.item4Trigger ?? (
                    <Fragment>
                      <span className="accordion-list-text27">
                        Do we have 24/7 support for Burp DAST? Or does the
                        support team work in a specific time zone?
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
                <div
                  data-thq="accordion-icon"
                  className="accordion-list-icon-container4"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="accordion-list-container5">
                <p className="accordion-list-item4-content1 text-body-1">
                  {props.item4Content ?? (
                    <Fragment>
                      <span className="accordion-list-item4-content2 text-body-1">
                        {' '}
                        Today, our support is based in the UK during business
                        hours, but we’re actively expanding to the USA to
                        provide more responsive, around-the-clock coverage.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
          {props.nrOfAccordions >= 5 && (
            <div data-thq="accordion" className="accordion-list-accordion5">
              <details
                data-thq="accordion-trigger"
                className="accordion-list-trigger5"
              >
                <summary
                  data-thq="accordion-summary"
                  className="accordion-list-summary5"
                >
                  <span className="heading-5">
                    {props.item5Trigger ?? (
                      <Fragment>
                        <span className="accordion-list-text33">
                          So, is it possible to NOT have AI implemented out of
                          the box on this new update? We cannot use public AI
                          for this.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="accordion-list-icon-container5"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="accordion-list-container6">
                  <p className="accordion-list-item5-content text-body-1">
                    {props.item5Content ?? (
                      <Fragment>
                        <span className="accordion-list-text14">
                          {' '}
                          You can disable AI features altogether from the
                          setting menu in Burp Suite Professional.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
          {props.nrOfAccordions >= 6 && (
            <div data-thq="accordion" className="accordion-list-accordion6">
              <details
                data-thq="accordion-trigger"
                className="accordion-list-trigger6"
              >
                <summary
                  data-thq="accordion-summary"
                  className="accordion-list-summary6"
                >
                  <span className="heading-5">
                    {props.item6Trigger ?? (
                      <Fragment>
                        <span className="accordion-list-text10">
                          Since reporting is one of the most time-consuming
                          activities and most hated, do you plan to create an
                          AI-assisted report builder?
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="accordion-list-icon-container6"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="accordion-list-container7">
                  <p className="accordion-list-item6-content1 text-body-1">
                    {props.item6Content ?? (
                      <Fragment>
                        <span className="accordion-list-item6-content2 text-body-1">
                          <span>
                            {' '}
                            You can already generate AI-assisted reports using
                            the
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <a
                            href="http://portswigger.net/bappstore/c29264074acc4aacb5b424e6a033ba5d"
                            className="accordion-list-link2"
                          >
                            ReportLM BApp
                          </a>
                          <span>
                            {' '}
                            - created by one of our own, Tom SL. Find it in the
                            BApp Store to get started.
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
                            className="accordion-list-link3"
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
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

AccordionList.defaultProps = {
  item4Content: undefined,
  item6Trigger: undefined,
  item3Trigger: undefined,
  item2Content: undefined,
  item5Content: undefined,
  item6Content: undefined,
  item3Content: undefined,
  item2Trigger: undefined,
  nrOfAccordions: 4,
  rootClassName: '',
  item4Trigger: undefined,
  item1Content: undefined,
  item5Trigger: undefined,
  item1Trigger: undefined,
}

AccordionList.propTypes = {
  item4Content: PropTypes.element,
  item6Trigger: PropTypes.element,
  item3Trigger: PropTypes.element,
  item2Content: PropTypes.element,
  item5Content: PropTypes.element,
  item6Content: PropTypes.element,
  item3Content: PropTypes.element,
  item2Trigger: PropTypes.element,
  nrOfAccordions: PropTypes.number,
  rootClassName: PropTypes.string,
  item4Trigger: PropTypes.element,
  item1Content: PropTypes.element,
  item5Trigger: PropTypes.element,
  item1Trigger: PropTypes.element,
}

export default AccordionList
