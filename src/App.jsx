import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import LeadDetail from './pages/LeadDetail'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Automation from './pages/Automation'
import Reports from './pages/Reports'
import ProcessComparison from './pages/ProcessComparison'
import PublicLeadForm from './pages/PublicLeadForm'
import AgentDashboard from './pages/AgentDashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (No Layout) */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-lead" element={<PublicLeadForm />} />
        
        {/* Protected Routes (With Layout) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="agent-dashboard" element={<AgentDashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="leads/:id" element={<LeadDetail />} />
          <Route path="leads/new" element={<LeadDetail />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/new" element={<PropertyDetail />} />
          <Route path="properties/:id" element={<PropertyDetail />} />
          <Route path="properties/:id/edit" element={<PropertyDetail />} />
          <Route path="automation" element={<Automation />} />
          <Route path="reports" element={<Reports />} />
          <Route path="process-comparison" element={<ProcessComparison />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
