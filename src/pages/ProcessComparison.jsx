import { 
  AlertCircle, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Users,
  FileText,
  Search,
  Send,
  Phone,
  Calendar,
  TrendingUp,
  Zap
} from 'lucide-react'
import '../pages/Dashboard.css'

function ProcessComparison() {
  const asIsProcess = [
    { step: 1, name: 'Submit Lead', actor: 'Prospect', time: '2 min', manual: true },
    { step: 2, name: 'Collect Customer Information', actor: 'Sales Employee', time: '5 min', manual: true },
    { step: 3, name: 'Register Lead', actor: 'Sales Employee', time: '3 min', manual: true },
    { step: 4, name: 'Search Properties', actor: 'Sales Employee', time: '8 min', manual: true },
    { step: 5, name: 'Select Matching Properties', actor: 'Sales Employee', time: '4 min', manual: true },
    { step: 6, name: 'Send Property Recommendations', actor: 'Sales Employee', time: '3 min', manual: true },
    { step: 7, name: 'Review and Assign Lead', actor: 'Sales Manager', time: '2 min', manual: true },
    { step: 8, name: 'Contact Customer', actor: 'Sales Agent', time: '5 min', manual: true },
    { step: 9, name: 'Check Customer Response', actor: 'Sales Agent', time: '2 min', manual: true },
    { step: 10, name: 'Follow Up', actor: 'Sales Agent', time: '3 min', manual: true },
    { step: 11, name: 'Meeting / Negotiation', actor: 'Sales Agent', time: '60 min', manual: true },
    { step: 12, name: 'Convert or Lose Lead', actor: 'Sales Agent', time: '1 min', manual: true },
    { step: 13, name: 'Update / Report', actor: 'Sales Employee', time: '2 min', manual: true }
  ]

  const toBeProcess = [
    { step: 1, name: 'Submit Lead (Web Form)', automated: true, time: '1 min', tool: 'Webhook' },
    { step: 2, name: 'Validate & Check Completeness', automated: true, time: '10 sec', tool: 'IF Node' },
    { step: 3, name: 'Create/Update Lead in CRM', automated: true, time: '15 sec', tool: 'Google Sheets' },
    { step: 4, name: 'AI Lead Qualification', automated: true, time: '30 sec', tool: 'AI Agent' },
    { step: 5, name: 'Property Matching & Scoring', automated: true, time: '45 sec', tool: 'Code + Sheets' },
    { step: 6, name: 'Send Recommendations', automated: true, time: '20 sec', tool: 'Email/WhatsApp' },
    { step: 7, name: 'Auto-Assign to Agent', automated: true, time: '5 sec', tool: 'Logic Node' },
    { step: 8, name: 'Contact Customer', automated: false, time: '5 min', tool: 'Sales Agent' },
    { step: 9, name: 'Negotiation', automated: false, time: '60 min', tool: 'Sales Agent' },
    { step: 10, name: 'Auto Follow-up (if no response)', automated: true, time: '1 min', tool: 'Wait + IF' }
  ]

  const optimizationPrinciples = [
    {
      principle: 'Eliminate',
      description: 'Removed duplicate data entry and redundant approval steps',
      icon: XCircle,
      color: 'var(--danger)',
      examples: ['Duplicate lead entry', 'Manager approval for every lead', 'Multiple status updates']
    },
    {
      principle: 'Simplify',
      description: 'Standardized inputs with mandatory validated forms',
      icon: CheckCircle,
      color: 'var(--success)',
      examples: ['Mandatory form fields', 'Predefined dropdowns', 'Email validation']
    },
    {
      principle: 'Automate',
      description: 'Automated repetitive, rule-based tasks',
      icon: Zap,
      color: 'var(--warning)',
      examples: ['Lead registration', 'Property matching', 'Follow-up emails']
    },
    {
      principle: 'Keep Human',
      description: 'Preserved human judgment for complex decisions',
      icon: Users,
      color: 'var(--accent-primary)',
      examples: ['Customer negotiation', 'Complex queries', 'Complaints handling']
    }
  ]

  const challenges = [
    {
      challenge: 'Poor or incomplete customer data',
      strategy: 'Use mandatory and standardized form fields with validation',
      status: 'solved'
    },
    {
      challenge: 'Incorrect property matching',
      strategy: 'AI + rules-based matching with human validation for complex cases',
      status: 'solved'
    },
    {
      challenge: 'Outdated property availability',
      strategy: 'Regular database sync and real-time availability checks',
      status: 'solved'
    },
    {
      challenge: 'Over-automation risk',
      strategy: 'Keep human involvement for negotiation and complex requests',
      status: 'solved'
    },
    {
      challenge: 'Automation failures',
      strategy: 'Error handling, notifications, retry mechanisms, manual fallback',
      status: 'solved'
    },
    {
      challenge: 'Data privacy and security',
      strategy: 'Access control, data encryption, GDPR compliance',
      status: 'solved'
    }
  ]

  const totalAsIsTime = 100 // ~30 min for lead processing
  const totalToBeTime = 5 // ~5 min for lead processing

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">AS-IS vs TO-BE Process Analysis</h1>
          <p className="page-subtitle">Detailed comparison of manual workflow vs optimized automation</p>
        </div>
      </div>

      {/* Time Comparison Hero */}
      <div className="grid grid-cols-3" style={{ marginBottom: '1.5rem', alignItems: 'stretch' }}>
        <div className="card" style={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '4px', fontWeight: '700', letterSpacing: '0.05em' }}>AS-IS (Before)</h3>
          <p style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '-0.03em' }}>
            30 min
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '500' }}>13 manual steps</p>
        </div>
        
        <div className="card" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '20px',
          background: 'var(--success-light)',
          borderColor: 'transparent',
          boxShadow: 'none'
        }}>
          <ArrowRight size={28} strokeWidth={3} style={{ color: 'var(--success)', marginBottom: '8px' }} />
          <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--success)', letterSpacing: '-0.02em' }}>83% Faster</p>
        </div>

        <div className="card" style={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '4px', fontWeight: '700', letterSpacing: '0.05em' }}>TO-BE (After)</h3>
          <p style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '-0.03em' }}>
            5 min
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '500' }}>7 automated + 3 human</p>
        </div>
      </div>

      {/* AS-IS Process */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header">
          <h3 className="card-title">AS-IS Process (Manual - Before Automation)</h3>
          <span className="badge badge-danger">13 Steps • 30 min/lead</span>
        </div>
        <div className="card-content">
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
              position: 'absolute',
              left: '1.25rem',
              top: '1rem',
              bottom: '1rem',
              width: '2px',
              background: 'linear-gradient(180deg, var(--danger), var(--danger) 50%, transparent 50%)',
              backgroundSize: '2px 20px'
            }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {asIsProcess.map((step, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-1.75rem',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--danger)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '700'
                  }}>
                    {step.step}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.938rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {step.name}
                    </h4>
                    <p style={{ fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                      Actor: <strong>{step.actor}</strong>
                    </p>
                  </div>
                  
                  <div style={{ 
                    padding: '0.375rem 0.75rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderRadius: '6px',
                    fontSize: '0.813rem',
                    fontWeight: '600',
                    color: 'var(--danger)'
                  }}>
                    {step.time}
                  </div>
                  
                  <span className="badge badge-danger">Manual</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TO-BE Process */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header">
          <h3 className="card-title">TO-BE Process (Optimized with n8n Automation)</h3>
          <span className="badge badge-success">10 Steps • 5 min/lead • 70% Automated</span>
        </div>
        <div className="card-content">
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
              position: 'absolute',
              left: '1.25rem',
              top: '1rem',
              bottom: '1rem',
              width: '2px',
              background: 'linear-gradient(180deg, var(--success), var(--success) 50%, transparent 50%)',
              backgroundSize: '2px 20px'
            }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {toBeProcess.map((step, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: step.automated ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: `1px solid ${step.automated ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-color)'}`,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-1.75rem',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: step.automated ? 'var(--success)' : 'var(--accent-primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '700'
                  }}>
                    {step.automated ? <Zap size={14} /> : step.step}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.938rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {step.name}
                    </h4>
                    <p style={{ fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                      Tool: <strong>{step.tool}</strong>
                    </p>
                  </div>
                  
                  <div style={{ 
                    padding: '0.375rem 0.75rem',
                    backgroundColor: step.automated ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '6px',
                    fontSize: '0.813rem',
                    fontWeight: '600',
                    color: step.automated ? 'var(--success)' : 'var(--accent-primary)'
                  }}>
                    {step.time}
                  </div>
                  
                  <span className={`badge ${step.automated ? 'badge-success' : 'badge-primary'}`}>
                    {step.automated ? 'Automated' : 'Human'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Principles Applied */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header">
          <h3 className="card-title">Optimization Principles Applied</h3>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-4">
            {optimizationPrinciples.map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                textAlign: 'center',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-secondary)'
              }}>
                <item.icon size={40} style={{ color: item.color, margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {item.principle}
                </h4>
                <p style={{ fontSize: '0.813rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {item.examples.map((example, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      padding: '0.25rem',
                      backgroundColor: 'var(--bg-primary)',
                      borderRadius: '4px'
                    }}>
                      • {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automation Challenges & Solutions */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Automation Challenges & Strategic Solutions</h3>
          <span className="badge badge-success">6/6 Challenges Addressed</span>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '5%' }}>Status</th>
                  <th style={{ width: '30%' }}>Challenge</th>
                  <th style={{ width: '55%' }}>Strategy Implemented</th>
                  <th style={{ width: '10%' }}>Result</th>
                </tr>
              </thead>
              <tbody>
                {challenges.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <CheckCircle size={20} style={{ color: 'var(--success)' }} />
                    </td>
                    <td>
                      <strong style={{ color: 'var(--text-primary)' }}>{item.challenge}</strong>
                    </td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      {item.strategy}
                    </td>
                    <td>
                      <span className="badge badge-success">Solved</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessComparison
