import React from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../components/live-tag-production'
import Navigation from '../components/navigation'
import NotFound from '../components/not-found'
import Footer from '../components/footer'
import './error.css'

const Error = (props) => {
  return (
    <div className="error-container">
      <Helmet>
        <title>
          Error - Web Application Security, Testing, & Scanning - PortSwigger
        </title>
        <meta
          name="description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta
          property="og:title"
          content="Error - Web Application Security, Testing, &amp; Scanning - PortSwigger"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction rootClassName="live-tag-productionroot-class-name53"></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name23"></Navigation>
      <main className="flex-1 align-center column width-100">
        <NotFound></NotFound>
      </main>
      <Footer rootClassName="footerroot-class-name29"></Footer>
    </div>
  )
}

export default Error
