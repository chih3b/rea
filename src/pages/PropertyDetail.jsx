import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Save, 
  Home, 
  MapPin, 
  DollarSign,
  Maximize,
  BedDouble,
  Bath,
  Upload,
  X,
  Plus,
  Tag
} from 'lucide-react'
import { properties as mockProperties, cities } from '../data/mockData'
import './Dashboard.css'

function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isNewProperty = id === 'new'
  const isEditMode = window.location.pathname.includes('/edit')

  const [formData, setFormData] = useState({
    title: '',
    type: 'apartment',
    city: 'Tunis',
    district: '',
    price: '',
    rentPrice: '',
    rooms: 2,
    bathrooms: 1,
    area: '',
    status: 'available',
    description: '',
    features: [],
    score: 85
  })

  const [newFeature, setNewFeature] = useState('')
  const [uploadedImages, setUploadedImages] = useState([])

  useEffect(() => {
    if (!isNewProperty && id) {
      const property = mockProperties.find(p => p.id === parseInt(id))
      if (property) {
        setFormData({
          title: property.title,
          type: property.type,
          city: property.city,
          district: property.district,
          price: property.price || '',
          rentPrice: property.rentPrice || '',
          rooms: property.rooms,
          bathrooms: property.bathrooms,
          area: property.area,
          status: property.status,
          description: property.description || '',
          features: property.features || [],
          score: property.score
        })
      }
    }
  }, [id, isNewProperty])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }))
      setNewFeature('')
    }
  }

  const handleRemoveFeature = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(f => f !== feature)
    }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageUrls = files.map(file => URL.createObjectURL(file))
    setUploadedImages(prev => [...prev, ...imageUrls])
  }

  const handleRemoveImage = (imageUrl) => {
    setUploadedImages(prev => prev.filter(img => img !== imageUrl))
    URL.revokeObjectURL(imageUrl)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.title || !formData.district || !formData.area) {
      alert('Please fill in all required fields')
      return
    }

    if (!formData.price && !formData.rentPrice) {
      alert('Please provide either a sale price or rent price')
      return
    }

    console.log('Saving property:', formData)
    alert(`Property ${isNewProperty ? 'created' : 'updated'} successfully!`)
    navigate('/properties')
  }

  const propertyTypes = ['apartment', 'villa', 'house', 'studio', 'office', 'land']
  const statusOptions = ['available', 'pending', 'sold', 'rented']

  // View-only mode for non-edit pages
  const isViewMode = !isNewProperty && !isEditMode

  if (isViewMode) {
    const property = mockProperties.find(p => p.id === parseInt(id))
    if (!property) {
      return (
        <div className="page-container fade-in">
          <div className="page-header">
            <h1 className="page-title">Property Not Found</h1>
          </div>
        </div>
      )
    }

    return (
      <div className="page-container fade-in">
        <div className="page-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/properties" className="btn btn-outline" style={{ padding: '0.5rem' }}>
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="page-title">Property Details</h1>
              <p className="page-subtitle">{property.title}</p>
            </div>
          </div>
          <Link to={`/properties/${id}/edit`} className="btn btn-primary">
            Edit Property
          </Link>
        </div>

        <div className="grid grid-cols-3">
          {/* Property Images */}
          <div style={{ gridColumn: 'span 2' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div style={{
                height: '400px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px'
              }}>
                <Home size={120} style={{ color: 'var(--accent-primary)', opacity: 0.3 }} />
              </div>
            </div>

            {/* Property Description */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-header">
                <h3 className="card-title">Description</h3>
              </div>
              <div className="card-content">
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {property.description || 'No description available for this property.'}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Features & Amenities</h3>
              </div>
              <div className="card-content">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {property.features.map((feature, idx) => (
                    <span key={idx} className="badge badge-info" style={{ fontSize: '0.813rem' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Property Info Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Price Card */}
            <div className="card highlight-card highlight-success">
              <div style={{ textAlign: 'center' }}>
                <DollarSign size={32} style={{ color: 'var(--success)', margin: '0 auto 0.5rem' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {property.price ? `${property.price.toLocaleString()} TND` : `${property.rentPrice} TND/mo`}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {property.price ? 'Sale Price' : 'Monthly Rent'}
                </p>
              </div>
            </div>

            {/* Details Card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Property Details</h3>
              </div>
              <div className="card-content">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Type</span>
                    <span className={`badge badge-${property.type === 'apartment' ? 'primary' : 'warning'}`}>
                      {property.type}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Status</span>
                    <span className="badge badge-success">{property.status}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} />
                      Location
                    </span>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      {property.city}, {property.district}
                    </strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <BedDouble size={16} />
                      Rooms
                    </span>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{property.rooms}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Bath size={16} />
                      Bathrooms
                    </span>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{property.bathrooms}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Maximize size={16} />
                      Area
                    </span>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{property.area} m²</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Score */}
            <div className="card highlight-card highlight-warning">
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  AI Match Score
                </h3>
                <p style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--warning)' }}>
                  {property.score}%
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                  Average matching score with leads
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Edit/Create Mode
  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/properties" className="btn btn-outline" style={{ padding: '0.5rem' }}>
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="page-title">{isNewProperty ? 'Add New Property' : 'Edit Property'}</h1>
            <p className="page-subtitle">
              {isNewProperty ? 'Create a new property listing for your inventory' : 'Update property information'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3">
          {/* Main Form */}
          <div style={{ gridColumn: 'span 2' }}>
            {/* Image Upload */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-header">
                <h3 className="card-title">Property Images</h3>
              </div>
              <div className="card-content">
                <div style={{ 
                  border: '2px dashed var(--border-color)',
                  borderRadius: '8px',
                  padding: '2rem',
                  textAlign: 'center',
                  backgroundColor: 'var(--bg-secondary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                  <Upload size={48} style={{ color: 'var(--text-tertiary)', margin: '0 auto 1rem' }} />
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Click to upload or drag and drop
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    PNG, JPG, GIF up to 10MB
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" style={{ cursor: 'pointer', display: 'block', height: '100%' }}>
                  </label>
                </div>

                {uploadedImages.length > 0 && (
                  <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                    {uploadedImages.map((imageUrl, idx) => (
                      <div key={idx} style={{ position: 'relative' }}>
                        <img 
                          src={imageUrl} 
                          alt={`Upload ${idx + 1}`}
                          style={{ 
                            width: '100%', 
                            height: '120px', 
                            objectFit: 'cover', 
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)'
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(imageUrl)}
                          style={{
                            position: 'absolute',
                            top: '0.5rem',
                            right: '0.5rem',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--danger)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Basic Information */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-header">
                <h3 className="card-title">Basic Information</h3>
              </div>
              <div className="card-content">
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      <Home size={16} />
                      Property Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Luxury Apartment in La Marsa"
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
                      <label style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.5rem', 
                        fontSize: '0.875rem', 
                        fontWeight: '500', 
                        color: 'var(--text-secondary)' 
                      }}>
                        <Tag size={16} />
                        Property Type *
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
                        {propertyTypes.map(type => (
                          <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.5rem', 
                        fontSize: '0.875rem', 
                        fontWeight: '500', 
                        color: 'var(--text-secondary)' 
                      }}>
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
                        {statusOptions.map(status => (
                          <option key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block',
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the property, its unique features, and surrounding area..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.875rem',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-header">
                <h3 className="card-title">Location</h3>
              </div>
              <div className="card-content">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
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

                  <div>
                    <label style={{ 
                      display: 'block',
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      District *
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      placeholder="e.g., La Marsa, Ennasr"
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

            {/* Property Details */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-header">
                <h3 className="card-title">Property Specifications</h3>
              </div>
              <div className="card-content">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      <BedDouble size={16} />
                      Rooms *
                    </label>
                    <input
                      type="number"
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleChange}
                      required
                      min="1"
                      max="20"
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
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      <Bath size={16} />
                      Bathrooms *
                    </label>
                    <input
                      type="number"
                      name="bathrooms"
                      value={formData.bathrooms}
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

                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      <Maximize size={16} />
                      Area (m²) *
                    </label>
                    <input
                      type="number"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      min="10"
                      placeholder="e.g., 120"
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

            {/* Pricing */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-header">
                <h3 className="card-title">Pricing</h3>
              </div>
              <div className="card-content">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      <DollarSign size={16} />
                      Sale Price (TND)
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      min="0"
                      placeholder="Leave empty if not for sale"
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
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      marginBottom: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      <DollarSign size={16} />
                      Rent Price (TND/month)
                    </label>
                    <input
                      type="number"
                      name="rentPrice"
                      value={formData.rentPrice}
                      onChange={handleChange}
                      min="0"
                      placeholder="Leave empty if not for rent"
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
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
                  * At least one price (sale or rent) is required
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Features & Amenities</h3>
              </div>
              <div className="card-content">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                      placeholder="e.g., Pool, Parking, Garden"
                      style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.875rem'
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleAddFeature}
                      className="btn btn-outline"
                      style={{ padding: '0.75rem 1rem' }}
                    >
                      <Plus size={18} />
                      Add
                    </button>
                  </div>
                </div>

                {formData.features.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {formData.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="badge badge-info"
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          fontSize: '0.813rem',
                          padding: '0.5rem 0.75rem'
                        }}
                      >
                        {feature}
                        <button
                          type="button"
                          onClick={() => handleRemoveFeature(feature)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'inherit'
                          }}
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Actions</h3>
              </div>
              <div className="card-content">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Save size={18} />
                    {isNewProperty ? 'Create Property' : 'Save Changes'}
                  </button>
                  <Link to="/properties" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                    Cancel
                  </Link>
                </div>
              </div>
            </div>

            <div className="card highlight-card highlight-info">
              <div className="card-content">
                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  AI Matching Integration
                </h4>
                <p style={{ fontSize: '0.813rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Once saved, this property will be automatically included in the n8n workflow for AI-powered 
                  lead matching based on city, budget, and room requirements.
                </p>
              </div>
            </div>

            {!isNewProperty && (
              <div className="card highlight-card highlight-warning">
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Current Match Score
                  </h3>
                  <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--warning)' }}>
                    {formData.score}%
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    Average with current leads
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default PropertyDetail
