import { 
  Webhook, 
  Database, 
  Brain, 
  Search, 
  Send, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Activity,
  Zap,
  ArrowRight,
  Play,
  BarChart3
} from 'lucide-react'
import { automationWorkflow, kpiData } from '../data/mockData'
import './Dashboard.css'

function Automation() {
  const workflowNodes = [
    {
      id: 1,
      icon: Webhook,
      title: 'Webhook + IF',
      description: 'Receive lead form and check data completeness',
      status: 'active',
      color: '#3b82f6',
      metrics: { processed: 500, success: 485, failed: 15 }
    },
    {
      id: 2,
      icon: Database,
      title: 'Google Sheets (CRM)',
      description: 'Create/update lead and prevent duplicates',
      status: 'active',
      color: '#10b981',
      metrics: { processed: 485, success: 485, failed: 0 }
    },
    {
      id: 3,
      icon: Brain,
      title: 'AI Agent',
      description: 'Qualify lead and write personalized recommendation',
      status: 'active',
      color: '#8b5cf6',
      metrics: { processed: 485, success: 485, failed: 0 }
    },
    {
      id: 4,
      icon: Search,
      title: 'Property Matching',
      description: 'Search and score properties based on criteria',
      status: 'active',
      color: '#f59e0b',
      metrics: { processed: 485, success: 485, failed: 0 }
    },
    {
      id: 5,
      icon: Send,
      title: 'Send Notification',
      description: 'Email/WhatsApp recommendations to customer',
      status: 'active',
      color: '#06b6d4',
      metrics: { processed: 485, success: 478, failed: 7 }
    },
    {
      id: 6,
      icon: Clock,
      title: 'Wait + Follow Up',
      description: 'Check customer status and follow up (max 3 times)',
      status: 'active',
      color: '#ef4444',
      metrics: { processed: 478, followUps: 156, converted: 89 }
    }
  ]

  const benefits = [
    {
      title: 'Time Savings',
      value: '208.3 hours/month',
      description: 'Automated tasks save employee time for strategic work',
      icon: Clock,
      color: 'info'
    },
    {
      title: 'Cost Reduction',
      value: '1,953 TND/month',
      description: 'Reduced labor costs through automation efficiency',
      icon: BarChart3,
      color: 'success'
    },
    {
      title: 'Faster Response',
      value: '5 minutes',
      description: 'Average response time from 30 min to 5 min',
      icon: Zap,
      color: 'warning'
    },
    {
      title: 'Higher Quality',
      value: '83% automation',
      description: 'Consistent data quality and standardized processes',
      icon: CheckCircle,
      color: 'primary'
    }
  ]

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Automation Workflow</h1>
          <p className="page-subtitle">Visualize and monitor your n8n automation pipeline</p>
        </div>
        <button className="btn btn-primary">
          <Play size={20} />
          Test Workflow
        </button>
      </div>

      {/* Automation Stats */}
      <div className="grid grid-cols-4" style={{ marginBottom: '1.5rem' }}>
        <div className="card highlight-card highlight-primary">
          <div style={{ textAlign: 'center' }}>
            <Activity size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto 0.5rem' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              {kpiData.automationRate}%
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Automation Rate</p>
          </div>
        </div>
        <div className="card highlight-card highlight-success">
          <div style={{ textAlign: 'center' }}>
            <CheckCircle size={32} style={{ color: 'var(--success)', margin: '0 auto 0.5rem' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success)', marginBottom: '0.25rem' }}>
              97%
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Success Rate</p>
          </div>
        </div>
        <div className="card highlight-card highlight-warning">
          <div style={{ textAlign: 'center' }}>
            <Clock size={32} style={{ color: 'var(--warning)', margin: '0 auto 0.5rem' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--warning)', marginBottom: '0.25rem' }}>
              {kpiData.avgResponseTime}m
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Avg Response Time</p>
          </div>
        </div>
        <div className="card highlight-card highlight-info">
          <div style={{ textAlign: 'center' }}>
            <Zap size={32} style={{ color: 'var(--info)', margin: '0 auto 0.5rem' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--info)', marginBottom: '0.25rem' }}>
              {kpiData.totalLeads}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Leads Processed</p>
          </div>
        </div>
      </div>

      {/* Workflow Visualization */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header">
          <h3 className="card-title">n8n Workflow Pipeline</h3>
          <span className="badge badge-success" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
            All Systems Active
          </span>
        </div>
        <div className="card-content">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '1rem 0'
          }}>
            {workflowNodes.map((node, index) => (
              <div key={node.id}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  border: '2px solid var(--border-color)',
                  transition: 'all var(--transition-base)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = node.color
                  e.currentTarget.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
                >
                  {/* Node Icon */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    backgroundColor: `${node.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <node.icon size={32} style={{ color: node.color }} />
                  </div>

                  {/* Node Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                        {node.title}
                      </h4>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '600',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        backgroundColor: `${node.color}20`,
                        color: node.color
                      }}>
                        Step {index + 1}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      {node.description}
                    </p>
                    
                    {/* Metrics */}
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.813rem' }}>
                      <div>
                        <span style={{ color: 'var(--text-tertiary)' }}>Processed: </span>
                        <strong style={{ color: 'var(--text-primary)' }}>{node.metrics.processed}</strong>
                      </div>
                      {node.metrics.success !== undefined && (
                        <div>
                          <span style={{ color: 'var(--text-tertiary)' }}>Success: </span>
                          <strong style={{ color: 'var(--success)' }}>{node.metrics.success}</strong>
                        </div>
                      )}
                      {node.metrics.failed !== undefined && node.metrics.failed > 0 && (
                        <div>
                          <span style={{ color: 'var(--text-tertiary)' }}>Failed: </span>
                          <strong style={{ color: 'var(--danger)' }}>{node.metrics.failed}</strong>
                        </div>
                      )}
                      {node.metrics.followUps !== undefined && (
                        <div>
                          <span style={{ color: 'var(--text-tertiary)' }}>Follow-ups: </span>
                          <strong style={{ color: 'var(--warning)' }}>{node.metrics.followUps}</strong>
                        </div>
                      )}
                      {node.metrics.converted !== undefined && (
                        <div>
                          <span style={{ color: 'var(--text-tertiary)' }}>Converted: </span>
                          <strong style={{ color: 'var(--success)' }}>{node.metrics.converted}</strong>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div style={{ flexShrink: 0 }}>
                    {node.status === 'active' ? (
                      <CheckCircle size={24} style={{ color: 'var(--success)' }} />
                    ) : (
                      <AlertCircle size={24} style={{ color: 'var(--danger)' }} />
                    )}
                  </div>
                </div>

                {/* Arrow between nodes */}
                {index < workflowNodes.length - 1 && (
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    margin: '0.5rem 0'
                  }}>
                    <ArrowRight size={24} style={{ color: 'var(--text-tertiary)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automation Benefits */}
      <div className="grid grid-cols-2" style={{ marginBottom: '1.5rem' }}>
        {benefits.map((benefit, index) => (
          <div key={index} className={`card highlight-card highlight-${benefit.color}`}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${
                  benefit.color === 'success' ? 'rgba(16, 185, 129, 0.2)' :
                  benefit.color === 'warning' ? 'rgba(245, 158, 11, 0.2)' :
                  benefit.color === 'info' ? 'rgba(6, 182, 212, 0.2)' :
                  'rgba(59, 130, 246, 0.2)'
                }, ${
                  benefit.color === 'success' ? 'rgba(5, 150, 105, 0.1)' :
                  benefit.color === 'warning' ? 'rgba(217, 119, 6, 0.1)' :
                  benefit.color === 'info' ? 'rgba(8, 145, 178, 0.1)' :
                  'rgba(139, 92, 246, 0.1)'
                })`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <benefit.icon size={28} style={{ 
                  color: benefit.color === 'success' ? 'var(--success)' :
                         benefit.color === 'warning' ? 'var(--warning)' :
                         benefit.color === 'info' ? 'var(--info)' :
                         'var(--accent-primary)'
                }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {benefit.title}
                </h4>
                <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {benefit.value}
                </p>
                <p style={{ fontSize: '0.813rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Error Handling & Monitoring */}
      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Error Handling</h3>
            <span className="badge badge-success">Active</span>
          </div>
          <div className="card-content">
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Automatic Retry:</strong> Failed operations retry up to 3 times with exponential backoff
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Error Notifications:</strong> Administrator receives instant alerts for critical failures
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Manual Fallback:</strong> Incomplete data triggers manual review request
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Data Validation:</strong> Mandatory fields checked before processing
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Compliance & Security</h3>
            <span className="badge badge-success">Secured</span>
          </div>
          <div className="card-content">
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Data Privacy:</strong> GDPR-compliant data handling with consent tracking
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Access Control:</strong> Role-based permissions for sensitive operations
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Audit Trail:</strong> Complete logging of all automated actions
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Encryption:</strong> Secure data transmission using TLS/SSL
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Automation
