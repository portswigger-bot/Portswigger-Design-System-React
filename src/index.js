import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import AppSecThankYou from './views/app-sec-thank-you'
import BurpSuiteEnterpriseEditionInteractiveWalkthrough from './views/burp/dast/burp-suite-enterprise-edition-interactive-walkthrough'
import CaseStudyMicrosoft from './views/customer-stories/case-study-microsoft'
import BurpAI from './views/burp/burp-ai'
import AppSecQA from './views/blog/app-sec-q-a'
import BurpSuiteProfessional from './views/burp/burp-suite-professional'
import AppSecWebinarVideo from './views/app-sec-webinar-video'
import BurpSuiteEnterpriseEditionRequestADemoRedirect from './views/burp/dast/burp-suite-enterprise-edition-request-a-demo-redirect'
import BetterTogether from './views/careers/better-together'
import PortswiggerDiscord from './views/portswigger-discord'
import VendorSaloonThankYou from './views/find-out-more/vendor-saloon-thank-you'
import Burp from './views/burp'
import CaseStudyFloQast from './views/customer-stories/case-study-flo-qast'
import BurpSuiteEnterpriseEditionPricing from './views/burp/dast/burp-suite-enterprise-edition-pricing'
import RewardsAndBenefits from './views/careers/rewards-and-benefits'
import EngineeringGraduates from './views/careers/engineering/engineering-graduates'
import Developers from './views/developers'
import BChecksExtendingBurpScanner from './views/burp/pro/features/b-checks-extending-burp-scanner'
import BlackHatResearch from './views/black-hat-research'
import CustomerStoryCristiVladBurpAI from './views/customer-stories/customer-story-cristi-vlad-burp-ai'
import TestHomePage from './views/test-home-page'
import BurpAICapabilities from './views/burp/ai/burp-ai-capabilities'
import Culture from './views/careers/culture'
import PerformanceUpgrades from './views/performance-upgrades'
import CustomerStories from './views/customer-stories'
import FeedbackDiscontinuingBurpSuiteJar from './views/feedback-discontinuing-burp-suite-jar'
import BurpSuiteEnterpriseFeatures from './views/burp/dast/burp-suite-enterprise-features'
import BurpSuiteEnterprise from './views/burp/burp-suite-enterprise'
import BurpSuiteDASTThankYou from './views/burp/enterprise/burp-suite-dast-thank-you'
import BurpSuiteProfessionalWorkflow from './views/burp/pro/burp-suite-professional-workflow'
import BurpSuiteDASTSalesEnquiryForm from './views/burp/enterprise/burp-suite-dast-sales-enquiry-form'
import BurpSuiteProfessionalFeatures from './views/burp/pro/burp-suite-professional-features'
import StaffHandbook from './views/careers/culture/staff-handbook'
import BurpSuiteEnterpriseEditionRequestADemo from './views/burp/dast/burp-suite-enterprise-edition-request-a-demo'
import Workplace from './views/careers/culture/workplace'
import Error from './views/error'
import CustomerStoryEfficientDiscoveryComprehensiveApplicationMapping from './views/customer-stories/customer-story-efficient-discovery-comprehensive-application-mapping'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={AppSecThankYou}
          exact
          path="/future-of-appsec-webinar-thank-you"
        />
        <Route
          component={BurpSuiteEnterpriseEditionInteractiveWalkthrough}
          exact
          path="/burp/dast/walkthrough"
        />
        <Route
          component={CaseStudyMicrosoft}
          exact
          path="/customer-stories/microsoft-case-study"
        />
        <Route component={BurpAI} exact path="/burp/ai" />
        <Route
          component={AppSecQA}
          exact
          path="/blog/q-a-from-the-future-of-appsec-webinar-test"
        />
        <Route component={BurpSuiteProfessional} exact path="/burp/pro" />
        <Route
          component={AppSecWebinarVideo}
          exact
          path="/future-of-appsec-webinar"
        />
        <Route
          component={BurpSuiteEnterpriseEditionRequestADemoRedirect}
          exact
          path="/burp/dast/trial-thank-you"
        />
        <Route
          component={BetterTogether}
          exact
          path="/careers/better-together"
        />
        <Route component={PortswiggerDiscord} exact path="/discord-community" />
        <Route
          component={VendorSaloonThankYou}
          exact
          path="/find-out-more/thank-you"
        />
        <Route component={Burp} exact path="/burp" />
        <Route
          component={CaseStudyFloQast}
          exact
          path="/customer-stories/floqast-case-study"
        />
        <Route
          component={BurpSuiteEnterpriseEditionPricing}
          exact
          path="/burp/dast/pricing"
        />
        <Route component={RewardsAndBenefits} exact path="/careers/reward" />
        <Route
          component={EngineeringGraduates}
          exact
          path="/careers/engineering/graduates"
        />
        <Route component={Developers} exact path="/developers" />
        <Route
          component={BChecksExtendingBurpScanner}
          exact
          path="/burp/pro/features/bchecks"
        />
        <Route component={BlackHatResearch} exact path="/black-hat-2024" />
        <Route
          component={CustomerStoryCristiVladBurpAI}
          exact
          path="/customer-stories/cristi-vlad-burp-ai"
        />
        <Route component={TestHomePage} exact path="/test-home-page" />
        <Route
          component={BurpAICapabilities}
          exact
          path="/burp/ai/capabilities"
        />
        <Route component={Culture} exact path="/careers/culture" />
        <Route
          component={PerformanceUpgrades}
          exact
          path="/performance-upgrades"
        />
        <Route component={CustomerStories} exact path="/customer-stories" />
        <Route
          component={FeedbackDiscontinuingBurpSuiteJar}
          exact
          path="/feedback-discontinuing-burp-suite-jar"
        />
        <Route
          component={BurpSuiteEnterpriseFeatures}
          exact
          path="/burp/dast/features"
        />
        <Route component={BurpSuiteEnterprise} exact path="/burp/dast" />
        <Route
          component={BurpSuiteDASTThankYou}
          exact
          path="/burp/enterprise/enquiry-thank-you"
        />
        <Route
          component={BurpSuiteProfessionalWorkflow}
          exact
          path="/burp/pro/workflow"
        />
        <Route
          component={BurpSuiteDASTSalesEnquiryForm}
          exact
          path="/burp/enterprise/sales-enquiry"
        />
        <Route
          component={BurpSuiteProfessionalFeatures}
          exact
          path="/burp/pro/features"
        />
        <Route
          component={StaffHandbook}
          exact
          path="/careers/culture/staff-handbook"
        />
        <Route
          component={BurpSuiteEnterpriseEditionRequestADemo}
          exact
          path="/burp/dast/trial"
        />
        <Route component={Workplace} exact path="/careers/culture/workplace" />
        <Route component={Error} exact path="/404" />
        <Route
          component={
            CustomerStoryEfficientDiscoveryComprehensiveApplicationMapping
          }
          exact
          path="/customer-stories/efficient-discovery-pentester-case-study"
        />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
