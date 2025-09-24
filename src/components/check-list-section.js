import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Icon from './icon'
import './check-list-section.css'

const CheckListSection = (props) => {
  return (
    <section
      className={`align-center position-relative padding-horizontal-m column width-100 ${props.rootClassName} `}
    >
      <div className="gap-s width-max-content column width-100">
        {props.showSectionHeading === true && (
          <h4 className="check-list-section-section-heading heading-4">
            {props.heading ?? (
              <Fragment>
                <span className="check-list-section-text18">
                  Physical and mental well-being support to keep you at your
                  best
                </span>
              </Fragment>
            )}
          </h4>
        )}
        <div className="check-list-section-container gap-s padding-m column">
          {props.showSubHeading === true && (
            <h5 className="check-list-section-sub-heading heading-5">
              {props.subHeading ?? (
                <Fragment>
                  <span className="check-list-section-text40">
                    Our locations
                  </span>
                </Fragment>
              )}
            </h5>
          )}
          <div className="gap-s position-relative column">
            <div className="gap-s align-start row">
              <Icon
                type="check-circle"
                rootClassName="iconroot-class-name49"
              ></Icon>
              <p className="text-body-1">
                {props.item1 ?? (
                  <Fragment>
                    <p className="check-list-section-text34 text-body-1">
                      <span className="check-list-section-text35">
                        Have fun.
                      </span>
                      <span>
                         Think of all the things that can prevent work being
                        fun. They generally come down to bad culture:
                        disrespect, hoarding information and assets,
                        command-and-control management, selfishness,
                        organizational politics, lack of integrity,
                        dysfunctional backstabbers, over-promoted
                        under-performers. Our culture is the antidote to all
                        these things.
                      </span>
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="gap-s align-start row">
              <Icon
                type="check-circle"
                rootClassName="iconroot-class-name50"
              ></Icon>
              <p className="text-body-1">
                {props.item2 ?? (
                  <Fragment>
                    <p className="check-list-section-text22 text-body-1">
                      <span className="check-list-section-text23">
                        Have a worthwhile mission.
                      </span>
                      <span>
                        {' '}
                        Our mission is a hugely ambitious goal that we
                        won&apos;t achieve easily or quickly. Our culture
                        enables us to stay aligned to this mission, by focusing
                        on the long term, holding the vision, working together
                        very collaboratively, and defaulting to open
                        communication.
                      </span>
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            {props.itemCount >= 3 && (
              <div className="gap-s align-start row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name51"
                ></Icon>
                <p className="text-body-1">
                  {props.item3 ?? (
                    <Fragment>
                      <p className="check-list-section-text25 text-body-1">
                        <span className="check-list-section-text26">
                          Be successful.
                        </span>
                        <span>
                          {' '}
                          Our culture creates the conditions for our success.
                          We&apos;re uncompromising in only recruiting the best
                          people. We create an environment of trust, openness,
                          and freedom to fail, which fosters innovation. Our
                          servant leadership brings out the best in all our
                          people, recognizes their potential, and enables
                          continuous learning. This is how we achieve the
                          incredible.
                        </span>
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            )}
            {props.itemCount >= 4 && (
              <div className="gap-s align-start row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name52"
                ></Icon>
                <p className="text-body-1">
                  {props.item4 ?? (
                    <Fragment>
                      <p className="check-list-section-text19 text-body-1">
                        <span className="check-list-section-text20">
                          Be a force for good in the world.
                        </span>
                        <span>
                          {' '}
                          Delivering amazing products and services certainly
                          makes the world a better place. But our culture means
                          that we are also instinctively generous, giving away
                          much more than we need to. We directly improve the
                          lives of our people and numerous others. We do this as
                          an end in itself, not as a cynical means to profit.
                        </span>
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            )}
            {props.itemCount >= 5 && (
              <div className="gap-s align-start row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name56"
                ></Icon>
                <p className="text-body-1">
                  {props.item5 ?? (
                    <Fragment>
                      <p className="check-list-section-text28 text-body-1">
                        <span className="check-list-section-text29">
                          Be a force for good in the world.
                        </span>
                        <span>
                          {' '}
                          Delivering amazing products and services certainly
                          makes the world a better place. But our culture means
                          that we are also instinctively generous, giving away
                          much more than we need to. We directly improve the
                          lives of our people and numerous others. We do this as
                          an end in itself, not as a cynical means to profit.
                        </span>
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            )}
            {props.itemCount >= 6 && (
              <div className="gap-s align-start row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name55"
                ></Icon>
                <p className="text-body-1">
                  {props.item6 ?? (
                    <Fragment>
                      <p className="check-list-section-text41 text-body-1">
                        <span className="check-list-section-text42">
                          Be a force for good in the world.
                        </span>
                        <span>
                          {' '}
                          Delivering amazing products and services certainly
                          makes the world a better place. But our culture means
                          that we are also instinctively generous, giving away
                          much more than we need to. We directly improve the
                          lives of our people and numerous others. We do this as
                          an end in itself, not as a cynical means to profit.
                        </span>
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            )}
            {props.itemCount >= 7 && (
              <div className="gap-s align-start row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name54"
                ></Icon>
                <p className="text-body-1">
                  {props.item7 ?? (
                    <Fragment>
                      <p className="check-list-section-text31 text-body-1">
                        <span className="check-list-section-text32">
                          Be a force for good in the world.
                        </span>
                        <span>
                          {' '}
                          Delivering amazing products and services certainly
                          makes the world a better place. But our culture means
                          that we are also instinctively generous, giving away
                          much more than we need to. We directly improve the
                          lives of our people and numerous others. We do this as
                          an end in itself, not as a cynical means to profit.
                        </span>
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            )}
            {props.itemCount >= 8 && (
              <div className="gap-s align-start row">
                <Icon
                  type="check-circle"
                  rootClassName="iconroot-class-name53"
                ></Icon>
                <p className="text-body-1">
                  {props.item8 ?? (
                    <Fragment>
                      <p className="check-list-section-text37 text-body-1">
                        <span className="check-list-section-text38">
                          Be a force for good in the world.
                        </span>
                        <span>
                          {' '}
                          Delivering amazing products and services certainly
                          makes the world a better place. But our culture means
                          that we are also instinctively generous, giving away
                          much more than we need to. We directly improve the
                          lives of our people and numerous others. We do this as
                          an end in itself, not as a cynical means to profit.
                        </span>
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

CheckListSection.defaultProps = {
  rootClassName: '',
  heading: undefined,
  showSectionHeading: true,
  item4: undefined,
  item2: undefined,
  showSubHeading: true,
  item3: undefined,
  item5: undefined,
  item7: undefined,
  item1: undefined,
  item8: undefined,
  subHeading: undefined,
  item6: undefined,
  itemCount: 2,
}

CheckListSection.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
  showSectionHeading: PropTypes.boolean,
  item4: PropTypes.element,
  item2: PropTypes.element,
  showSubHeading: PropTypes.boolean,
  item3: PropTypes.element,
  item5: PropTypes.element,
  item7: PropTypes.element,
  item1: PropTypes.element,
  item8: PropTypes.element,
  subHeading: PropTypes.element,
  item6: PropTypes.element,
  itemCount: PropTypes.number,
}

export default CheckListSection
