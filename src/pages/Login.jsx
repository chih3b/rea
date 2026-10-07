import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Building2, User, Lock, LogIn, Shield, ArrowLeft } from 'lucide-react'

function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: 'manager'
  })

  const demoAccounts = {
    manager: {
      username: 'manager',
      password: 'demo123',
      name: 'Sales Manager',
      redirect: '/dashboard'
    },
    agent: {
      username: 'agent',
      password: 'demo123',
      name: 'Karim Mansour',
      redirect: '/agent-dashboard'
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const account = demoAccounts[credentials.role]
    if (credentials.username === account.username && credentials.password === account.password) {
      localStorage.setItem('user', JSON.stringify({
        name: account.name,
        role: credentials.role
      }))
      navigate(account.redirect)
    } else {
      alert('Identifiants incorrects!\n\nUtilisez:\nUsername: ' + account.username + '\nPassword: ' + account.password)
    }
  }

  const handleDemoLogin = (role) => {
    const account = demoAccounts[role]
    setCredentials({
      username: account.username,
      password: account.password,
      role: role
    })
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        name: account.name,
        role: role
      }))
      navigate(account.redirect)
    }, 300)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-secondary)',
      backgroundImage: 'radial-gradient(at 0% 0%, rgba(99,102,241,0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(168,85,247,0.15) 0px, transparent 50%)',
      backgroundAttachment: 'fixed',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Back to Landing */}
      <div style={{ padding: '24px 40px' }}>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '14px',
          transition: 'color 0.2s',
        }}>
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem 4rem',
      }}>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          maxWidth: '1100px',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          {/* Login Form Card */}
          <div style={{
            background: 'var(--gradient-surface)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-light)',
            width: '440px',
            maxWidth: '100%',
          }}>
            {/* Logo */}
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 4px 12px rgba(99,102,241,0.35)',
              }}>
                <Building2 size={32} color="white" />
              </div>
              <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                Welcome Back
              </h1>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                Sign in to your Real Estate Pro account
              </p>
            </div>

            {/* Role Selector */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Select Role
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setCredentials({...credentials, role: 'manager'})}
                  style={{
                    padding: '14px',
                    border: credentials.role === 'manager' ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: credentials.role === 'manager' ? 'rgba(99,102,241,0.08)' : 'var(--bg-tertiary)',
                    color: credentials.role === 'manager' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontWeight: '700',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Shield size={16} />
                  Manager
                </button>
                <button
                  type="button"
                  onClick={() => setCredentials({...credentials, role: 'agent'})}
                  style={{
                    padding: '14px',
                    border: credentials.role === 'agent' ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: credentials.role === 'agent' ? 'rgba(99,102,241,0.08)' : 'var(--bg-tertiary)',
                    color: credentials.role === 'agent' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontWeight: '700',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <User size={16} />
                  Agent
                </button>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>
                  <User size={14} />
                  Username
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  placeholder="Enter your username"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '14px',
                    backgroundColor: 'var(--bg-tertiary)',
                    color: 'var(--text-primary)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    outline: 'none',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>
                  <Lock size={14} />
                  Password
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '14px',
                    backgroundColor: 'var(--bg-tertiary)',
                    color: 'var(--text-primary)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    outline: 'none',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '15px',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                <LogIn size={18} />
                Sign In
              </button>
            </form>

            {/* Demo Credentials */}
            <div style={{
              marginTop: '28px',
              padding: '16px',
              background: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              border: '1px solid var(--border-color)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', fontWeight: '700', color: 'var(--text-primary)' }}>
                <Shield size={14} />
                Demo Credentials
              </div>
              <div>
                <strong>Manager:</strong> manager / demo123<br/>
                <strong>Agent:</strong> agent / demo123
              </div>
            </div>
          </div>

          {/* Quick Access Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '440px',
            maxWidth: '100%',
          }}>
            {/* Manager Access */}
            <div 
              style={{
                background: 'var(--gradient-surface)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              }}
              onClick={() => handleDemoLogin('manager')}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
                }}>
                  <Shield size={22} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Sales Manager
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
                    Full access to dashboard, leads, reports, analytics, and ROI tracking
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}>
                    {['KPI Overview', 'Lead Management', 'ROI Reports', 'Automation'].map(f => (
                      <span key={f} style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '12px',
                        fontWeight: 600,
                        background: 'rgba(99,102,241,0.1)',
                        color: 'var(--accent-primary)',
                      }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Access */}
            <div 
              style={{
                background: 'var(--gradient-surface)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              }}
              onClick={() => handleDemoLogin('agent')}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--gradient-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(16,185,129,0.3)',
                }}>
                  <User size={22} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Sales Agent
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
                    Simplified interface for managing assigned leads and daily tasks
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}>
                    {['My Leads', 'Follow-ups', 'Call Scripts', 'Quick Actions'].map(f => (
                      <span key={f} style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '12px',
                        fontWeight: 600,
                        background: 'var(--success-light)',
                        color: 'var(--success)',
                      }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Public Form Link */}
            <div style={{
              background: 'var(--gradient-surface)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              textAlign: 'center',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <p style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: '700' }}>
                Client Lead Submission Form
              </p>
              <button
                onClick={() => navigate('/submit-lead')}
                className="btn btn-outline"
                style={{ fontSize: '14px', width: '100%', justifyContent: 'center' }}
              >
                View Public Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
