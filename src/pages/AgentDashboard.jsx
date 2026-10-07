import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  User,
  Calendar,
  MessageSquare,
  Target
} from 'lucide-react'
import { leads as mockLeads } from '../data/mockData'
import StatCard from '../components/StatCard/StatCard'
import './Dashboard.css'

function AgentDashboard() {
  // Simulate logged-in agent
  const currentAgent = {
    name: 'Karim Mansour',
    email: 'karim.mansour@realestate.com'
  }

  // Filter leads assigned to current agent
  const myLeads = mockLeads.filter(lead => lead.agent === currentAgent.name)
  const [selectedLead, setSelectedLead] = useState(null)
  const [notes, setNotes] = useState('')

  const todayFollowUps = myLeads.filter(lead => 
    ['contacted', 'qualified', 'meeting'].includes(lead.status)
  ).slice(0, 3)

  const handleQuickAction = (leadId, newStatus) => {
    console.log(`Updating lead ${leadId} to status: ${newStatus}`)
    alert(`Lead mis à jour: ${newStatus}`)
  }

  const getStatusColor = (status) => {
    const colors = {
      new: '#3b82f6',
      contacted: '#06b6d4',
      qualified: '#10b981',
      meeting: '#f59e0b',
      converted: '#10b981',
      lost: '#ef4444'
    }
    return colors[status] || '#94a3b8'
  }

  const getPriorityBadge = (score) => {
    if (score >= 80) return { label: 'Haute', color: 'danger' }
    if (score >= 60) return { label: 'Moyenne', color: 'warning' }
    return { label: 'Basse', color: 'info' }
  }

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Agent Dashboard</h1>
          <p className="page-subtitle">Welcome {currentAgent.name}, here are your leads</p>
        </div>
      </div>

      {/* Agent Stats */}
      <div className="grid grid-cols-4" style={{ marginBottom: '1.5rem' }}>
        <StatCard
          title="My Leads"
          value={myLeads.length}
          change="Assigned"
          icon={Target}
          colorScheme="primary"
        />
        <StatCard
          title="To Contact"
          value={myLeads.filter(l => l.status === 'new').length}
          change="Today"
          icon={Phone}
          colorScheme="warning"
        />
        <StatCard
          title="In Progress"
          value={myLeads.filter(l => ['contacted', 'qualified', 'meeting'].includes(l.status)).length}
          change="Active"
          icon={Clock}
          colorScheme="info"
        />
        <StatCard
          title="Converted"
          value={myLeads.filter(l => l.status === 'converted').length}
          change="This month"
          icon={CheckCircle}
          colorScheme="success"
        />
      </div>

      {/* Today's Follow-ups */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={18} style={{ color: 'var(--text-secondary)' }} />
            <h3 className="card-title">Follow-ups Today</h3>
          </div>
          <span className="badge badge-warning">{todayFollowUps.length} pending</span>
        </div>
        <div className="card-content">
          {todayFollowUps.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)' }}>
              Aucun follow-up prévu aujourd'hui
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {todayFollowUps.map(lead => (
                <div key={lead.id} style={{
                  padding: '16px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '6px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    fontSize: '18px'
                  }}>
                    {lead.name.charAt(0)}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {lead.name}
                    </h4>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <span>{lead.phone}</span>
                      <span>{lead.city}</span>
                    </div>
                  </div>

                  <span className={`badge badge-${getPriorityBadge(lead.score).color}`}>
                    Priority: {lead.score}
                  </span>

                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedLead(lead)}
                  >
                    <Phone size={16} />
                    Call
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* My Leads List */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">All My Leads</h3>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Contact</th>
                  <th>Recherche</th>
                  <th>Priorité</th>
                  <th>Statut</th>
                  <th>Actions Rapides</th>
                </tr>
              </thead>
              <tbody>
                {myLeads.map(lead => (
                  <tr key={lead.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '6px',
                          backgroundColor: 'var(--bg-tertiary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-secondary)',
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <strong style={{ fontSize: '14px' }}>{lead.name}</strong>
                          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                            ID: #{lead.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span>{lead.phone}</span>
                        <span style={{ color: 'var(--text-tertiary)' }}>{lead.email}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.875rem' }}>
                        <span className={`badge badge-${lead.type === 'buy' ? 'primary' : 'info'}`}>
                          {lead.type === 'buy' ? 'Achat' : 'Location'}
                        </span>
                        <div style={{ marginTop: '0.25rem', fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                          {lead.city} • {lead.rooms} ch • {lead.type === 'buy' ? `${lead.budget.toLocaleString()} TND` : `${lead.budget} TND/mois`}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          padding: '6px 10px',
                          borderRadius: '4px',
                          backgroundColor: 'var(--bg-tertiary)',
                          fontWeight: '600',
                          fontSize: '13px',
                          color: 'var(--text-primary)'
                        }}>
                          {lead.score}
                        </div>
                        <span className={`badge badge-${getPriorityBadge(lead.score).color}`}>
                          {getPriorityBadge(lead.score).label}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge badge-${
                        lead.status === 'converted' ? 'success' :
                        lead.status === 'lost' ? 'danger' :
                        lead.status === 'meeting' ? 'warning' :
                        'info'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {lead.status === 'new' && (
                          <button 
                            className="btn btn-outline btn-sm"
                            onClick={() => handleQuickAction(lead.id, 'contacted')}
                            style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem' }}
                          >
                            <Phone size={14} />
                            Appelé
                          </button>
                        )}
                        {lead.status === 'contacted' && (
                          <button 
                            className="btn btn-outline btn-sm"
                            onClick={() => handleQuickAction(lead.id, 'qualified')}
                            style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem' }}
                          >
                            <CheckCircle size={14} />
                            Qualifié
                          </button>
                        )}
                        {['contacted', 'qualified'].includes(lead.status) && (
                          <button 
                            className="btn btn-primary btn-sm"
                            onClick={() => handleQuickAction(lead.id, 'meeting')}
                            style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem' }}
                          >
                            <Calendar size={14} />
                            RDV
                          </button>
                        )}
                        {lead.status === 'meeting' && (
                          <>
                            <button 
                              className="btn btn-success btn-sm"
                              onClick={() => handleQuickAction(lead.id, 'converted')}
                              style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem' }}
                            >
                              <CheckCircle size={14} />
                              Converti
                            </button>
                            <button 
                              className="btn btn-danger btn-sm"
                              onClick={() => handleQuickAction(lead.id, 'lost')}
                              style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem' }}
                            >
                              <XCircle size={14} />
                              Perdu
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call Script Modal */}
      {selectedLead && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '2rem'
        }} onClick={() => setSelectedLead(null)}>
          <div className="card" style={{
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div className="card-header">
              <h3 className="card-title">Script d'Appel - {selectedLead.name}</h3>
              <button onClick={() => setSelectedLead(null)} style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--text-secondary)'
              }}>×</button>
            </div>
            <div className="card-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Client Info */}
                <div style={{ padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>Client Information</h4>
                  <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div><strong>Téléphone:</strong> {selectedLead.phone}</div>
                    <div><strong>Email:</strong> {selectedLead.email}</div>
                    <div><strong>Type:</strong> {selectedLead.type === 'buy' ? 'Achat' : 'Location'}</div>
                    <div><strong>Ville:</strong> {selectedLead.city}</div>
                    <div><strong>Budget:</strong> {selectedLead.type === 'buy' ? `${selectedLead.budget.toLocaleString()} TND` : `${selectedLead.budget} TND/mois`}</div>
                    <div><strong>Chambres:</strong> {selectedLead.rooms}</div>
                  </div>
                </div>

                {/* Call Script */}
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>Call Script</h4>
                  <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--info-light)', 
                    borderRadius: '6px',
                    borderLeft: '3px solid var(--accent-primary)',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: 'var(--text-primary)'
                  }}>
                    <p style={{ marginBottom: '0.75rem' }}>
                      <strong>Bonjour {selectedLead.name},</strong>
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                      Je suis {currentAgent.name} de l'agence immobilière. Nous avons bien reçu votre demande concernant une {selectedLead.type === 'buy' ? 'propriété à acheter' : 'location'} à {selectedLead.city}.
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                      J'ai {selectedLead.matchedProperties?.length || 3} propriétés qui correspondent parfaitement à vos critères. Est-ce que vous avez eu l'occasion de consulter l'email que nous vous avons envoyé avec les recommandations?
                    </p>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                      [Écouter la réponse et proposer une visite...]
                    </p>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                    <MessageSquare size={16} style={{ color: 'var(--text-secondary)' }} />
                    Call Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Note important conversation details here..."
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button className="btn btn-success" onClick={() => {
                    handleQuickAction(selectedLead.id, 'contacted')
                    setSelectedLead(null)
                  }}>
                    <CheckCircle size={18} />
                    Contact Réussi
                  </button>
                  <button className="btn btn-outline" onClick={() => setSelectedLead(null)}>
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AgentDashboard
