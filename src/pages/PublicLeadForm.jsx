import { useState } from 'react'
import { 
  Home, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  DollarSign,
  Users,
  Send,
  CheckCircle,
  ArrowLeft,
  Building2
} from 'lucide-react'
import { cities } from '../data/mockData'
import './Dashboard.css'

function PublicLeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'buy',
    city: 'Tunis',
    budget: '',
    rooms: 2,
    consent: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In production, this would POST to n8n webhook
    console.log('Submitting to n8n webhook:', formData)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
    }, 500)
  }

  if (submitted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--bg-secondary)',
        backgroundImage: 'radial-gradient(at 100% 0%, rgba(99,102,241,0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(168,85,247,0.15) 0px, transparent 50%)',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '560px',
          width: '100%',
          background: 'var(--gradient-surface)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 'var(--radius-lg)',
          padding: '48px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-light)'
        }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '8px',
            backgroundColor: 'var(--success-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px'
          }}>
            <CheckCircle size={40} style={{ color: 'var(--success)' }} />
          </div>
          
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
            Request Submitted Successfully
          </h2>
          
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
            Thank you <strong>{formData.name}</strong> for your request. Our team is analyzing your requirements and will contact you shortly with personalized recommendations.
          </p>
          
          <div style={{ 
            padding: '20px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '6px',
            marginBottom: '24px',
            textAlign: 'left',
            border: '1px solid var(--border-light)'
          }}>
            <h3 style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Next Steps
            </h3>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--text-primary)' }}>
                <span style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '4px', 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  flexShrink: 0
                }}>1</span>
                <span>Automated analysis of your criteria (in progress...)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--text-primary)' }}>
                <span style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '4px', 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  flexShrink: 0
                }}>2</span>
                <span>Selection of matching properties</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--text-primary)' }}>
                <span style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '4px', 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  flexShrink: 0
                }}>3</span>
                <span>Email recommendations within 5 minutes</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--text-primary)' }}>
                <span style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '4px', 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  flexShrink: 0
                }}>4</span>
                <span>Call from your dedicated agent within 24 hours</span>
              </li>
            </ul>
          </div>
          
          <div style={{ 
            padding: '12px',
            backgroundColor: 'var(--info-light)',
            borderRadius: '4px',
            fontSize: '13px',
            color: 'var(--text-primary)',
            marginBottom: '24px'
          }}>
            <Mail size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Confirmation email sent to <strong>{formData.email}</strong>
          </div>
          
          <button 
            onClick={() => setSubmitted(false)}
            className="btn btn-outline"
            style={{ display: 'inline-flex' }}
          >
            <ArrowLeft size={18} />
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-secondary)',
      backgroundImage: 'radial-gradient(at 100% 0%, rgba(99,102,241,0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(168,85,247,0.15) 0px, transparent 50%)',
      backgroundAttachment: 'fixed',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '700px',
        width: '100%',
        background: 'var(--gradient-surface)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid var(--border-light)'
      }}>
        {/* Header */}
        <div style={{
          background: 'var(--gradient-primary)',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative background circle */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(20px)'
          }}></div>
          
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <Building2 size={32} color="white" />
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px', letterSpacing: '-0.03em', position: 'relative', zIndex: 1 }}>
            Find Your Ideal Property
          </h1>
          <p style={{ fontSize: '15px', opacity: 0.9, position: 'relative', zIndex: 1, maxWidth: '400px', margin: '0 auto' }}>
            Fill out this form and receive personalized recommendations matching your criteria within minutes
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Personal Info Section */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>
                Personal Information
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    marginBottom: '8px', 
                    fontSize: '13px', 
                    fontWeight: '500',
                    color: 'var(--text-secondary)'
                  }}>
                    <User size={14} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Ahmed Ben Ali"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '8px', 
                      fontSize: '13px', 
                      fontWeight: '500',
                      color: 'var(--text-secondary)'
                    }}>
                      <Mail size={14} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ahmed@email.com"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '8px', 
                      fontSize: '13px', 
                      fontWeight: '500',
                      color: 'var(--text-secondary)'
                    }}>
                      <Phone size={14} />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+216 98 123 456"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Property Requirements */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>
                Property Requirements
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '8px', 
                      fontSize: '13px', 
                      fontWeight: '500',
                      color: 'var(--text-secondary)'
                    }}>
                      <Home size={14} />
                      I'm looking to *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="buy">Buy</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '8px', 
                      fontSize: '13px', 
                      fontWeight: '500',
                      color: 'var(--text-secondary)'
                    }}>
                      <MapPin size={14} />
                      City *
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '8px', 
                      fontSize: '13px', 
                      fontWeight: '500',
                      color: 'var(--text-secondary)'
                    }}>
                      <DollarSign size={14} />
                      Budget {formData.type === 'buy' ? '(TND)' : '(TND/month)'} *
                    </label>
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      min="0"
                      placeholder={formData.type === 'buy' ? '250000' : '800'}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '8px', 
                      fontSize: '13px', 
                      fontWeight: '500',
                      color: 'var(--text-secondary)'
                    }}>
                      <Users size={14} />
                      Number of Rooms *
                    </label>
                    <select
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'room' : 'rooms'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div style={{
              padding: '16px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '4px',
              border: '1px solid var(--border-light)'
            }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  style={{ marginTop: '2px', width: '16px', height: '16px', cursor: 'pointer', flexShrink: 0 }}
                />
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  I agree that my data may be used to contact me regarding my property search. 
                  My data will be handled confidentially in accordance with GDPR. *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                justifyContent: 'center'
              }}
            >
              <Send size={18} />
              Find My Ideal Property
            </button>

            <p style={{ 
              fontSize: '12px', 
              color: 'var(--text-tertiary)', 
              textAlign: 'center',
              margin: 0
            }}>
              Your data is secure and will never be shared with third parties
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PublicLeadForm
