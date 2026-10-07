import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Filter, 
  Plus, 
  Mail, 
  Phone, 
  MapPin,
  DollarSign,
  User,
  Eye
} from 'lucide-react'
import { leads as mockLeads, leadStatuses } from '../data/mockData'
import './Dashboard.css'

function Leads() {
  const [leads] = useState(mockLeads)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterType, setFilterType] = useState('all')

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone.includes(searchTerm)
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus
    const matchesType = filterType === 'all' || lead.type === filterType
    return matchesSearch && matchesStatus && matchesType
  })

  const getScoreColor = (score) => {
    if (score >= 80) return '#10b981'
    if (score >= 60) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Leads Management</h1>
          <p className="page-subtitle">Manage and track all customer leads in one place</p>
        </div>
        <Link to="/leads/new" className="btn btn-primary">
          <Plus size={20} />
          New Lead
        </Link>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-content">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px', position: 'relative' }}>
              <Search size={18} style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'var(--text-tertiary)'
              }} />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Filter size={18} style={{ color: 'var(--text-secondary)' }} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{
                  padding: '0.75rem 1rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Status</option>
                {Object.entries(leadStatuses).map(([key, value]) => (
                  <option key={key} value={key}>{value.label}</option>
                ))}
              </select>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{
                  padding: '0.75rem 1rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Types</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-4" style={{ marginBottom: '1.5rem' }}>
        <div className="card highlight-card">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {filteredLeads.length}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Total Leads</p>
          </div>
        </div>
        <div className="card highlight-card highlight-primary">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
              {filteredLeads.filter(l => l.status === 'new').length}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>New</p>
          </div>
        </div>
        <div className="card highlight-card highlight-warning">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--warning)', marginBottom: '0.5rem' }}>
              {filteredLeads.filter(l => ['contacted', 'qualified', 'meeting'].includes(l.status)).length}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>In Progress</p>
          </div>
        </div>
        <div className="card highlight-card highlight-success">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success)', marginBottom: '0.5rem' }}>
              {filteredLeads.filter(l => l.status === 'converted').length}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Converted</p>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="card">
        <div className="card-content">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Lead</th>
                  <th>Contact</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Budget</th>
                  <th>Rooms</th>
                  <th>Status</th>
                  <th>Score</th>
                  <th>Agent</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan="10" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-tertiary)' }}>
                      No leads found matching your criteria
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td>
                        <div className="lead-name">
                          <strong>{lead.name}</strong>
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.813rem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                            <Mail size={14} />
                            {lead.email}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                            <Phone size={14} />
                            {lead.phone}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge badge-${lead.type === 'buy' ? 'primary' : 'info'}`}>
                          {lead.type.toUpperCase()}
                        </span>
                      </td>
                      <td>
                        {lead.city}
                      </td>
                      <td>
                        <span style={{ fontWeight: '600' }}>
                          {lead.type === 'buy' 
                            ? `${lead.budget.toLocaleString()} TND` 
                            : `${lead.budget} TND/mo`
                          }
                        </span>
                      </td>
                      <td>
                        <span style={{ 
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '6px',
                          backgroundColor: 'var(--bg-tertiary)',
                          fontWeight: '600'
                        }}>
                          {lead.rooms}
                        </span>
                      </td>
                      <td>
                        <span className={`badge badge-${leadStatuses[lead.status]?.color || 'primary'}`}>
                          {leadStatuses[lead.status]?.label || lead.status}
                        </span>
                      </td>
                      <td>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.375rem 0.75rem',
                          borderRadius: '6px',
                          backgroundColor: 'var(--bg-tertiary)',
                          fontWeight: '600'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: getScoreColor(lead.score)
                          }} />
                          {lead.score}%
                        </div>
                      </td>
                      <td>
                        {lead.agent ? (
                          <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                            {lead.agent}
                          </span>
                        ) : (
                          <span className="text-muted" style={{ fontSize: '0.813rem' }}>Unassigned</span>
                        )}
                      </td>
                      <td>
                        <Link 
                          to={`/leads/${lead.id}`} 
                          className="btn btn-outline btn-sm"
                          style={{ padding: '0.5rem' }}
                        >
                          <Eye size={16} />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leads
