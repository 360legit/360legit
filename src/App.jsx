import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ResourcesPage from './pages/ResourcesPage'
import ServicesPage from './pages/ServicesPage'
import StartupSupportPage from './pages/StartupSupportPage'
import TaxationServicesPage from './pages/services/TaxationServicesPage'
import GSTServicesPage from './pages/services/GSTServicesPage'
import BusinessRegistrationPage from './pages/services/BusinessRegistrationPage'
import LegalCompliancePage from './pages/services/LegalCompliancePage'
import AccountingAutomationPage from './pages/services/AccountingAutomationPage'
import LabourLawPage from './pages/services/LabourLawPage'
import NGOPage from './pages/services/NGOPage'
import IntellectualPropertyPage from './pages/services/IntellectualPropertyPage'
import BusinessSupportPage from './pages/services/BusinessSupportPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/startup-support" element={<StartupSupportPage />} />
        <Route path="/services/taxation-services" element={<TaxationServicesPage />} />
        <Route path="/services/gst-services" element={<GSTServicesPage />} />
        <Route path="/services/business-registration" element={<BusinessRegistrationPage />} />
        <Route path="/services/legal-regulatory-compliance" element={<LegalCompliancePage />} />
        <Route path="/services/accounting-automation" element={<AccountingAutomationPage />} />
        <Route path="/services/labour-law-compliance" element={<LabourLawPage />} />
        <Route path="/services/ngo-non-profit-services" element={<NGOPage />} />
        <Route path="/services/intellectual-property" element={<IntellectualPropertyPage />} />
        <Route path="/services/business-support-services" element={<BusinessSupportPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
