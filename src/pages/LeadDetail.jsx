import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Save, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  DollarSign,
  Home,
  Users,
  Calendar,
  Star,
  CheckCircle,
  XCircle
} from 'lucide-react'
import { leads as mockLeads, properties as mockProperties, agents as mockAgents, cities } from '../data/mockData'
import './Dashboard.css'

function LeadDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isNewLead = id === undefined || id === 'new'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'buy',
    city: 'Tunis',
    budget: '',
    rooms: 2,
    status: 'new',
    agent: '',
    score: 0
  })

  useEffect(() => {
    if (!isNewLead) {
      const lead = mockLeads.find(l => l.id === parseInt(id))
      if (lead) {
        setFormData({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          type: lead.type,
          city: lead.city,
          budget: lead.budget,
          rooms: lead.rooms,
          status: lead.status,
          agent: lead.agent || '',
          score: lead.score
        })
      }
    }
  }, [id, isNewLead])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally save to backend
    console.log('Saving lead:', formData)
    alert('Lead saved successfully!')
    navigate('/leads')
  }

  const matchedProperties = mockProperties.filter(p => {
    if (formData.type === 'buy' && p.price) {
      return p.city === formData.city && 
             p.rooms >= formData.rooms - 1 && 
             p.rooms <= formData.rooms + 1 &&
             p.price <= formData.budget * 1.1
    } else if (formData.type === 'rent' && p.rentPrice) {
      return p.city === formData.city && 
             p.rooms >= formData.rooms - 1 && 
             p.rooms <= formData.rooms + 1 &&
             p.rentPrice <= formData.budget * 1.1
    }
    return false
  }).slice(0, 3)

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/leads" className="btn btn-outline" style={{ padding: '0.5rem' }}>
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="page-title">{isNewLead ? 'New Lead' : 'Lead Details'}</h1>
            <p className="page-subtitle">
              {isNewLead ? 'Create a new customer lead' : 'View and edit lead information'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        {/* Lead Form */}
        <div style={{ gridColumn: 'span 2' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Lead Information</h3>
              {!isNewLead && (
                <span className={`badge badge-${
                  formData.status === 'converted' ? 'success' :
                  formData.status === 'lost' ? 'danger' :
                  formData.status === 'meeting' ? 'warning' : 'info'
                }`}>
                  {formData.status.toUpperCase()}
                </span>
              )}
            </div>
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {/* Personal Information */}
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                      Personal Information
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                          <User size={16} />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '8px',
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            fontSize: '0.875rem'
                          }}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            <Mail size={16} />
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.875rem'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            <Phone size={16} />
                            Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.875rem'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Property Requirements */}
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                      Property Requirements
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            <Home size={16} />
                            Type *
                          </label>
                          <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.875rem',
                              cursor: 'pointer'
                            }}
                          >
                            <option value="buy">Buy</option>
                            <option value="rent">Rent</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            <MapPin size={16} />
                            City *
                          </label>
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.875rem',
                              cursor: 'pointer'
                            }}
                          >
                            {cities.map(city => (
                              <option key={city} value={city}>{city}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            <DollarSign size={16} />
                            Budget {formData.type === 'buy' ? '(TND)' : '(TND/month)'} *
                          </label>
                          <input
                            type="number"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            min="0"
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.875rem'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            <Users size={16} />
                            Rooms *
                          </label>
                          <input
                            type="number"
                            name="rooms"
                            value={formData.rooms}
                            onChange={handleChange}
                            required
                            min="1"
                            max="10"
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.875rem'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lead Management (for existing leads) */}
                  {!isNewLead && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        Lead Management
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            <CheckCircle size={16} />
                            Status
                          </label>
                          <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.875rem',
                              cursor: 'pointer'
                            }}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="meeting">Meeting</option>
                            <option value="converted">Converted</option>
                            <option value="lost">Lost</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            <User size={16} />
                            Assigned Agent
                          </label>
                          <select
                            name="agent"
                            value={formData.agent}
                            onChange={handleChange}
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.875rem',
                              cursor: 'pointer'
                            }}
                          >
                            <option value="">Unassigned</option>
                            {mockAgents.map(agent => (
                              <option key={agent.id} value={agent.name}>{agent.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <button type="submit" className="btn btn-primary">
                      <Save size={20} />
                      Save Lead
                    </button>
                    <Link to="/leads" className="btn btn-secondary">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Lead Score & Matched Properties */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Score Card */}
          {!isNewLead && (
            <div className="card highlight-card highlight-success">
              <div style={{ textAlign: 'center' }}>
                <Star size={32} style={{ color: 'var(--warning)', marginBottom: '0.5rem' }} />
                <h3 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {formData.score}%
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Lead Score</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                  {formData.score >= 80 ? 'High priority lead' : formData.score >= 60 ? 'Medium priority' : 'Low priority'}
                </p>
              </div>
            </div>
          )}

          {/* Matched Properties */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Matched Properties</h3>
              <span className="badge badge-primary">{matchedProperties.length}</span>
            </div>
            <div className="card-content">
              {matchedProperties.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                  No matching properties found
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {matchedProperties.map(property => (
                    <div key={property.id} style={{
                      padding: '1rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-secondary)',
                      transition: 'all var(--transition-fast)',
                      cursor: 'pointer'
                    }}>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        {property.title}
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={12} style={{ color: 'var(--text-tertiary)' }} />
                          <span>{property.city}, {property.district}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Home size={12} style={{ color: 'var(--text-tertiary)' }} />
                          <span>{property.rooms} rooms • {property.area} m²</span>
                        </div>
                        <span style={{ fontWeight: '600', color: 'var(--success)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          {formData.type === 'buy' ? `${property.price?.toLocaleString()} TND` : `${property.rentPrice} TND/mo`}
                        </span>
                      </div>
                      <div style={{ marginTop: '0.5rem' }}>
                        <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>
                          Match: {property.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadDetail
