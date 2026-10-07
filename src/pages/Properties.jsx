import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Filter, 
  Home, 
  MapPin, 
  DollarSign,
  Maximize,
  BedDouble,
  Bath,
  Star,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react'
import { properties as mockProperties, cities } from '../data/mockData'
import './Dashboard.css'

function Properties() {
  const [properties, setProperties] = useState(mockProperties)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCity, setFilterCity] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // grid or list

  const handleDelete = (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property? This action cannot be undone.')) {
      setProperties(properties.filter(p => p.id !== propertyId))
      alert('Property deleted successfully!')
    }
  }

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.district.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCity = filterCity === 'all' || property.city === filterCity
    const matchesType = filterType === 'all' || property.type === filterType
    const matchesStatus = filterStatus === 'all' || property.status === filterStatus
    return matchesSearch && matchesCity && matchesType && matchesStatus
  })

  const propertyTypes = [...new Set(properties.map(p => p.type))]

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Properties Database</h1>
          <p className="page-subtitle">Browse and manage all available properties with AI-powered matching</p>
        </div>
        <Link to="/properties/new" className="btn btn-primary">
          <Plus size={20} />
          Add New Property
        </Link>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-4" style={{ marginBottom: '1.5rem' }}>
        <div className="card highlight-card">
          <div style={{ textAlign: 'center' }}>
            <Home size={32} style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', margin: '0 auto' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              {filteredProperties.length}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Total Properties</p>
          </div>
        </div>
        <div className="card highlight-card highlight-success">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success)', marginBottom: '0.25rem' }}>
              {filteredProperties.filter(p => p.status === 'available').length}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Available</p>
          </div>
        </div>
        <div className="card highlight-card highlight-primary">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>
              {filteredProperties.filter(p => p.price).length}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>For Sale</p>
          </div>
        </div>
        <div className="card highlight-card highlight-info">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--info)', marginBottom: '0.25rem' }}>
              {filteredProperties.filter(p => p.rentPrice).length}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>For Rent</p>
          </div>
        </div>
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
                placeholder="Search properties by title, district..."
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

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Filter size={18} style={{ color: 'var(--text-secondary)' }} />
              <select
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
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
                <option value="all">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
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
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                ))}
              </select>

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
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>

              <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '0.75rem 1rem', fontSize: '0.813rem' }}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '0.75rem 1rem', fontSize: '0.813rem' }}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-3">
          {filteredProperties.length === 0 ? (
            <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '4rem', color: 'var(--text-tertiary)' }}>
              <Home size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
              <p>No properties found matching your criteria</p>
            </div>
          ) : (
            filteredProperties.map((property) => (
              <div key={property.id} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                {/* Property Image */}
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <Home size={64} style={{ color: 'var(--accent-primary)', opacity: 0.3 }} />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    <span className="badge badge-success">{property.status}</span>
                    <span className="badge badge-warning" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Star size={12} />
                      {property.score}%
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)', 
                    marginBottom: '0.5rem',
                    lineHeight: '1.4'
                  }}>
                    {property.title}
                  </h3>

                  <p style={{ 
                    fontSize: '13px', 
                    color: 'var(--text-secondary)',
                    marginBottom: '16px'
                  }}>
                    {property.city}, {property.district}
                  </p>

                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '0.75rem',
                    padding: '1rem 0',
                    borderTop: '1px solid var(--border-color)',
                    borderBottom: '1px solid var(--border-color)',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <BedDouble size={18} style={{ color: 'var(--text-tertiary)', marginBottom: '0.25rem' }} />
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{property.rooms} Rooms</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Bath size={18} style={{ color: 'var(--text-tertiary)', marginBottom: '0.25rem' }} />
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{property.bathrooms} Bath</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Maximize size={18} style={{ color: 'var(--text-tertiary)', marginBottom: '0.25rem' }} />
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{property.area} m²</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      {property.price && (
                        <p style={{ 
                          fontSize: '20px', 
                          fontWeight: '600', 
                          color: 'var(--text-primary)'
                        }}>
                          {property.price.toLocaleString()} TND
                        </p>
                      )}
                      {property.rentPrice && (
                        <p style={{ 
                          fontSize: '20px', 
                          fontWeight: '600', 
                          color: 'var(--text-primary)'
                        }}>
                          {property.rentPrice} TND/mo
                        </p>
                      )}
                    </div>
                    <span className={`badge badge-${property.type === 'apartment' ? 'primary' : property.type === 'villa' ? 'warning' : 'info'}`}>
                      {property.type}
                    </span>
                  </div>

                  {property.features.length > 0 && (
                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {property.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} style={{
                            fontSize: '0.7rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-secondary)',
                            borderRadius: '4px'
                          }}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div style={{ 
                    marginTop: '1rem', 
                    paddingTop: '1rem', 
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex', 
                    gap: '0.5rem' 
                  }}>
                    <Link 
                      to={`/properties/${property.id}`} 
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, fontSize: '0.813rem', padding: '0.5rem' }}
                    >
                      <Eye size={16} />
                      View
                    </Link>
                    <Link 
                      to={`/properties/${property.id}/edit`} 
                      className="btn btn-outline btn-sm"
                      style={{ fontSize: '0.813rem', padding: '0.5rem' }}
                    >
                      <Edit size={16} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(property.id)}
                      className="btn btn-danger btn-sm"
                      style={{ fontSize: '0.813rem', padding: '0.5rem' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="card">
          <div className="card-content">
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Details</th>
                    <th>Price</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProperties.length === 0 ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-tertiary)' }}>
                        No properties found matching your criteria
                      </td>
                    </tr>
                  ) : (
                    filteredProperties.map((property) => (
                      <tr key={property.id}>
                        <td>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <strong>{property.title}</strong>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                              {property.features.slice(0, 2).join(' • ')}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className={`badge badge-${property.type === 'apartment' ? 'primary' : property.type === 'villa' ? 'warning' : 'info'}`}>
                            {property.type}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={16} style={{ color: 'var(--text-tertiary)' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.875rem' }}>
                              <strong>{property.city}</strong>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{property.district}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <BedDouble size={14} style={{ color: 'var(--text-tertiary)' }} />
                              <span>{property.rooms}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Bath size={14} style={{ color: 'var(--text-tertiary)' }} />
                              <span>{property.bathrooms}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Maximize size={14} style={{ color: 'var(--text-tertiary)' }} />
                              <span>{property.area}m²</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div style={{ fontWeight: '600' }}>
                            {property.price && (
                              <span style={{ color: 'var(--success)' }}>
                                {property.price.toLocaleString()} TND
                              </span>
                            )}
                            {property.rentPrice && (
                              <span style={{ color: 'var(--info)' }}>
                                {property.rentPrice} TND/mo
                              </span>
                            )}
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-warning" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star size={12} />
                            {property.score}%
                          </span>
                        </td>
                        <td>
                          <span className="badge badge-success">{property.status}</span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Link 
                              to={`/properties/${property.id}`} 
                              className="btn btn-primary btn-sm"
                              style={{ fontSize: '0.75rem', padding: '0.375rem 0.75rem' }}
                            >
                              <Eye size={14} />
                            </Link>
                            <Link 
                              to={`/properties/${property.id}/edit`} 
                              className="btn btn-outline btn-sm"
                              style={{ fontSize: '0.75rem', padding: '0.375rem 0.75rem' }}
                            >
                              <Edit size={14} />
                            </Link>
                            <button 
                              onClick={() => handleDelete(property.id)}
                              className="btn btn-danger btn-sm"
                              style={{ fontSize: '0.75rem', padding: '0.375rem 0.75rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Matching Algorithm Info */}
      <div className="grid grid-cols-1" style={{ marginTop: '1.5rem' }}>
        <div className="card highlight-card highlight-primary">
          <div className="card-content">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <TrendingUp size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  AI-Powered Property Matching Algorithm
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                  Our intelligent matching system analyzes lead requirements (city, budget, rooms) and automatically 
                  scores properties based on compatibility. The algorithm considers:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} style={{ color: 'var(--accent-primary)' }} />
                      Location Match
                    </strong>
                    <p style={{ fontSize: '0.813rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                      City and district proximity
                    </p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <DollarSign size={16} style={{ color: 'var(--accent-primary)' }} />
                      Budget Alignment
                    </strong>
                    <p style={{ fontSize: '0.813rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                      Price within ±10% range
                    </p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <BedDouble size={16} style={{ color: 'var(--accent-primary)' }} />
                      Room Configuration
                    </strong>
                    <p style={{ fontSize: '0.813rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                      Rooms within ±1 of requirement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties
