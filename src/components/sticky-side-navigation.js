import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import './sticky-side-navigation.css'

const StickySideNavigation = (props) => {
  return (
    <div
      className={`sticky-side-navigation-sticky-side-navigation gap-s padding-horizontal-m padding-vertical-s column ${props.rootClassName} `}
    >
      <div className="sticky-side-navigation-header-container padding-top-xs padding-bottom-s">
        <span className="heading-5">
          {props.header ?? (
            <Fragment>
              <span className="sticky-side-navigation-text">
                PortSwigger Culture
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="sticky-side-navigation-links gap-s">
        <Repeater
          items={
            props['navigationList'] || [
              {
                href: 'https://portswigger.net/careers/culture/why',
                label: 'Why?',
              },
              {
                href: 'https://portswigger.net/careers/culture/what',
                label: 'What?',
              },
              {
                href: 'https://portswigger.net/careers/culture/how',
                label: 'How?',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/people',
                label: 'People',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/agile',
                label: 'Agile',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/leadership',
                label: 'Leadership',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/learning',
                label: 'Learning',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/caring',
                label: 'Caring',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/structure',
                label: 'Structure',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/performance',
                label: 'Performance',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/okrs',
                label: 'OKRs',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/sheep',
                label: 'Sheep',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/decisions',
                label: 'Decisions',
              },
              {
                href: 'https://portswigger.net/careers/culture/how/planning',
                label: 'Planning',
              },
            ]
          }
          renderItem={(NavigationItem) => (
            <Fragment>
              <a
                href={NavigationItem?.href}
                className="sticky-side-navigation-link text-body-1"
              >
                {NavigationItem?.label}
              </a>
            </Fragment>
          )}
        />
      </div>
    </div>
  )
}

StickySideNavigation.defaultProps = {
  header: undefined,
  navigationList: [
    {
      href: 'https://portswigger.net/careers/culture/why',
      label: 'Why?',
    },
    {
      href: 'https://portswigger.net/careers/culture/what',
      label: 'What?',
    },
    {
      href: 'https://portswigger.net/careers/culture/how',
      label: 'How?',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/people',
      label: 'People',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/agile',
      label: 'Agile',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/leadership',
      label: 'Leadership',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/learning',
      label: 'Learning',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/caring',
      label: 'Caring',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/structure',
      label: 'Structure',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/performance',
      label: 'Performance',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/okrs',
      label: 'OKRs',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/sheep',
      label: 'Sheep',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/decisions',
      label: 'Decisions',
    },
    {
      href: 'https://portswigger.net/careers/culture/how/planning',
      label: 'Planning',
    },
  ],
  rootClassName: '',
}

StickySideNavigation.propTypes = {
  header: PropTypes.element,
  navigationList: PropTypes.array,
  rootClassName: PropTypes.string,
}

export default StickySideNavigation
