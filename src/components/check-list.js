import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Icon from './icon'
import Button from './button'
import './check-list.css'

const CheckList = (props) => {
  return (
    <div
      id={props.sectionId}
      className={`check-list-check-list gap-s column ${props.rootClassName} `}
    >
      {props.showHeading === true && (
        <div>
          {props.headingType === 'H4' && (
            <h4
              className={`check-list-text10 heading-4 ${
                props?.headingType === 'NONE' ? 'hidden-element' : ''
              } `}
            >
              {props.heading ?? (
                <Fragment>
                  <span className="check-list-text45">Our locations</span>
                </Fragment>
              )}
            </h4>
          )}
          {props.headingType === 'H3' && (
            <h3
              className={`check-list-text11 heading-3 ${
                props?.headingType === 'NONE' ? 'hidden-element' : ''
              } `}
            >
              {props.heading ?? (
                <Fragment>
                  <span className="check-list-text45">Our locations</span>
                </Fragment>
              )}
            </h3>
          )}
          {props.headingType === 'H2' && (
            <h2
              className={`check-list-text12 heading-2 ${
                props?.headingType === 'NONE' ? 'hidden-element' : ''
              } `}
            >
              {props.heading ?? (
                <Fragment>
                  <span className="check-list-text45">Our locations</span>
                </Fragment>
              )}
            </h2>
          )}
        </div>
      )}
      {props.showParagraph === true && (
        <span className="text-body-1">
          {props.headingParagraph ?? (
            <Fragment>
              <span className="check-list-text34">
                Swiggers travel to work in various ways. Each of our offices
                offers different commuting options and amenities to support your
                commute to work:
              </span>
            </Fragment>
          )}
        </span>
      )}
      {props.listType === 'checkList' && (
        <div className="check-list-list gap-s column">
          <div className="gap-s align-start row">
            <Icon
              type="check-circle"
              rootClassName="iconroot-class-name29"
            ></Icon>
            <p className="text-body-1">
              {props.item1 ?? (
                <Fragment>
                  <p className="check-list-text29 text-body-1">
                    <span className="check-list-text30">Have fun.</span>
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
                </Fragment>
              )}
            </p>
          </div>
          {props.itemCount >= 2 && (
            <div className="gap-s align-start row">
              <Icon
                type="check-circle"
                rootClassName="iconroot-class-name30"
              ></Icon>
              <p className="text-body-1">
                {props.item2 ?? (
                  <Fragment>
                    <p className="check-list-text42 text-body-1">
                      <span className="check-list-text43">
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
          )}
          {props.itemCount >= 3 && (
            <div className="gap-s align-start row">
              <Icon
                type="check-circle"
                rootClassName="iconroot-class-name31"
              ></Icon>
              <p className="text-body-1">
                {props.item3 ?? (
                  <Fragment>
                    <p className="check-list-text39 text-body-1">
                      <span className="check-list-text40">Be successful.</span>
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
                  </Fragment>
                )}
              </p>
            </div>
          )}
          {props.itemCount >= 4 && (
            <div className="gap-s align-start row">
              <Icon
                type="check-circle"
                rootClassName="iconroot-class-name32"
              ></Icon>
              <p className="text-body-1">
                {props.item4 ?? (
                  <Fragment>
                    <p className="check-list-text35 text-body-1">
                      <span className="check-list-text36">
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
                  </Fragment>
                )}
              </p>
            </div>
          )}
          {props.itemCount >= 5 && (
            <div className="gap-s align-start row">
              <Icon
                type="check-circle"
                rootClassName="iconroot-class-name61"
              ></Icon>
              <p className="text-body-1">
                {props.item5 ?? (
                  <Fragment>
                    <span className="check-list-text33">
                      The grievance hearer will look into any additional points
                      raised.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          )}
          {props.itemCount >= 6 && (
            <div className="gap-s align-start row">
              <Icon
                type="check-circle"
                rootClassName="iconroot-class-name63"
              ></Icon>
              <p className="text-body-1">
                {props.item6 ?? (
                  <Fragment>
                    <span className="check-list-text28">
                      Once ready, the grievance hearer will produce a written
                      outcome letter of their findings. This is then shared with
                      relevant parties.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          )}
          {props.itemCount >= 7 && (
            <div className="gap-s align-start row">
              <Icon
                type="check-circle"
                rootClassName="iconroot-class-name62"
              ></Icon>
              <p className="text-body-1">
                {props.item7 ?? (
                  <Fragment>
                    <span className="check-list-text38">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          )}
        </div>
      )}
      {props.listType === 'orderedList' && (
        <ul className="check-list-ul1 column list gap-xs">
          <li className="list-item-ordered list-type-outside padding-left-xs">
            <span className="text-body-1 row">
              {props.item1 ?? (
                <Fragment>
                  <p className="check-list-text29 text-body-1">
                    <span className="check-list-text30">Have fun.</span>
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
                </Fragment>
              )}
            </span>
          </li>
          {props.itemCount >= 2 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item2 ?? (
                  <Fragment>
                    <p className="check-list-text42 text-body-1">
                      <span className="check-list-text43">
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
              </span>
            </li>
          )}
          {props.itemCount >= 3 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item3 ?? (
                  <Fragment>
                    <p className="check-list-text39 text-body-1">
                      <span className="check-list-text40">Be successful.</span>
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
                  </Fragment>
                )}
              </span>
            </li>
          )}
          {props.itemCount >= 4 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item4 ?? (
                  <Fragment>
                    <p className="check-list-text35 text-body-1">
                      <span className="check-list-text36">
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
                  </Fragment>
                )}
              </span>
            </li>
          )}
          {props.itemCount >= 5 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item5 ?? (
                  <Fragment>
                    <span className="check-list-text33">
                      The grievance hearer will look into any additional points
                      raised.
                    </span>
                  </Fragment>
                )}
              </span>
            </li>
          )}
          {props.itemCount >= 6 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item6 ?? (
                  <Fragment>
                    <span className="check-list-text28">
                      Once ready, the grievance hearer will produce a written
                      outcome letter of their findings. This is then shared with
                      relevant parties.
                    </span>
                  </Fragment>
                )}
              </span>
            </li>
          )}
          {props.itemCount >= 7 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item7 ?? (
                  <Fragment>
                    <span className="check-list-text38">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                )}
              </span>
            </li>
          )}
        </ul>
      )}
      {props.listType === 'bulletPoint' && (
        <ul className="check-list-ul2 column list gap-xs">
          <li className="list-item-ordered list-type-outside padding-left-xs">
            <span className="text-body-1 row">
              {props.item1 ?? (
                <Fragment>
                  <p className="check-list-text29 text-body-1">
                    <span className="check-list-text30">Have fun.</span>
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
                </Fragment>
              )}
            </span>
          </li>
          {props.itemCount >= 2 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item2 ?? (
                  <Fragment>
                    <p className="check-list-text42 text-body-1">
                      <span className="check-list-text43">
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
              </span>
            </li>
          )}
          {props.itemCount >= 3 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item3 ?? (
                  <Fragment>
                    <p className="check-list-text39 text-body-1">
                      <span className="check-list-text40">Be successful.</span>
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
                  </Fragment>
                )}
              </span>
            </li>
          )}
          {props.itemCount >= 4 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item4 ?? (
                  <Fragment>
                    <p className="check-list-text35 text-body-1">
                      <span className="check-list-text36">
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
                  </Fragment>
                )}
              </span>
            </li>
          )}
          {props.itemCount >= 5 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item5 ?? (
                  <Fragment>
                    <span className="check-list-text33">
                      The grievance hearer will look into any additional points
                      raised.
                    </span>
                  </Fragment>
                )}
              </span>
            </li>
          )}
          {props.itemCount >= 6 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item6 ?? (
                  <Fragment>
                    <span className="check-list-text28">
                      Once ready, the grievance hearer will produce a written
                      outcome letter of their findings. This is then shared with
                      relevant parties.
                    </span>
                  </Fragment>
                )}
              </span>
            </li>
          )}
          {props.itemCount >= 7 && (
            <li className="list-item-ordered list-type-outside padding-left-xs">
              <span className="text-body-1 row">
                {props.item7 ?? (
                  <Fragment>
                    <span className="check-list-text38">
                      The Swigger who raised the grievance will be given the
                      right to appeal the findings of the grievance.
                    </span>
                  </Fragment>
                )}
              </span>
            </li>
          )}
        </ul>
      )}
      {props.showCta === true && (
        <a href={props.ctaUrl}>
          <Button
            btnType={props.ctaType}
            btnLabel={props.ctaLabel}
            iconType={props.ctaIconType}
            iconPlacement={props.ctaIconPlacement}
            rootClassName="buttonroot-class-name47"
            className="check-list-component8"
          ></Button>
        </a>
      )}
    </div>
  )
}

CheckList.defaultProps = {
  item6: undefined,
  item1: undefined,
  rootClassName: '',
  ctaLabel: undefined,
  listType: 'checkList',
  itemCount: 3,
  ctaIconPlacement: 'none',
  item5: undefined,
  headingParagraph: undefined,
  sectionId: '',
  item4: undefined,
  ctaIconType: 'ai-symbol',
  item7: undefined,
  ctaType: 'primary',
  showHeading: true,
  headingType: 'H3',
  ctaUrl: 'https://enquiries.portswigger.net/',
  item3: undefined,
  showParagraph: false,
  showCta: false,
  item2: undefined,
  heading: undefined,
}

CheckList.propTypes = {
  item6: PropTypes.element,
  item1: PropTypes.element,
  rootClassName: PropTypes.string,
  ctaLabel: PropTypes.element,
  listType: PropTypes.string,
  itemCount: PropTypes.number,
  ctaIconPlacement: PropTypes.string,
  item5: PropTypes.element,
  headingParagraph: PropTypes.element,
  sectionId: PropTypes.string,
  item4: PropTypes.element,
  ctaIconType: PropTypes.string,
  item7: PropTypes.element,
  ctaType: PropTypes.string,
  showHeading: PropTypes.boolean,
  headingType: PropTypes.string,
  ctaUrl: PropTypes.string,
  item3: PropTypes.element,
  showParagraph: PropTypes.boolean,
  showCta: PropTypes.boolean,
  item2: PropTypes.element,
  heading: PropTypes.element,
}

export default CheckList
