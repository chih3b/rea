import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Users, Workflow, Zap, CheckCircle, Star, Building2, TrendingUp, Clock, Shield } from 'lucide-react'
import './Landing.css'

function Landing() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="landing-logo">
          <div className="logo-icon-wrapper">
            <Building2 size={24} />
          </div>
          <span className="logo-text">Real Estate Pro</span>
        </div>
        <div className="landing-nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#testimonials">Testimonials</a>
          <Link to="/login" className="btn btn-outline">Sign In</Link>
          <Link to="/login" className="btn btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">✨ The Future of Real Estate CRM</div>
          <h1 className="hero-title">
            Manage your properties & leads with 
            <span className="text-gradient"> intelligent automation</span>
          </h1>
          <p className="hero-subtitle">
            Streamline your workflow, close deals faster, and get real-time insights with our next-generation Real Estate management platform.
          </p>
          <div className="hero-cta">
            <Link to="/login" className="btn btn-primary btn-lg" style={{padding: '14px 32px', fontSize: '16px'}}>
              Launch Dashboard <ArrowRight size={20} />
            </Link>
            <Link to="/submit-lead" className="btn btn-secondary btn-lg" style={{padding: '14px 32px', fontSize: '16px'}}>
              Book a Demo
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">50%</span>
              <span className="stat-label">Faster Conversions</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">10k+</span>
              <span className="stat-label">Properties Managed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">99.9%</span>
              <span className="stat-label">Uptime Reliability</span>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="glass-card hero-preview">
            <div className="preview-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Dashboard Preview" 
              className="preview-image"
            />
          </div>
        </div>
      </section>

      {/* Trusted By / Logos Bar */}
      <section className="logos-section">
        <p className="logos-label">Trusted by leading real estate agencies across Tunisia</p>
        <div className="logos-grid">
          <span className="logo-placeholder"><Building2 size={20} /> Agency Alpha</span>
          <span className="logo-placeholder"><Building2 size={20} /> BuildCorp</span>
          <span className="logo-placeholder"><Building2 size={20} /> HomeFirst</span>
          <span className="logo-placeholder"><Building2 size={20} /> LuxEstate</span>
          <span className="logo-placeholder"><Building2 size={20} /> UrbanNest</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <div className="section-badge">Features</div>
          <h2 className="section-title">Everything you need to scale</h2>
          <p className="section-subtitle">Powerful tools built specifically for modern real estate agencies.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{background: 'var(--info-light)', color: 'var(--info)'}}>
              <Users size={24} />
            </div>
            <h3 className="feature-title">Smart Lead Management</h3>
            <p className="feature-desc">Automatically score, assign, and track leads through your entire sales funnel with AI-powered insights.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{background: 'var(--success-light)', color: 'var(--success)'}}>
              <Workflow size={24} />
            </div>
            <h3 className="feature-title">Process Automation</h3>
            <p className="feature-desc">Save hours of manual work with intelligent triggers, automated email sequences, and smart notifications.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{background: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-primary)'}}>
              <BarChart3 size={24} />
            </div>
            <h3 className="feature-title">Advanced Analytics</h3>
            <p className="feature-desc">Get real-time visibility into your agency's performance, ROI metrics, and agent productivity dashboards.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{background: 'var(--warning-light)', color: 'var(--warning)'}}>
              <Zap size={24} />
            </div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-desc">Built on modern architecture ensuring your data is always available instantly, anywhere in the world.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-section">
        <div className="section-header">
          <div className="section-badge">How It Works</div>
          <h2 className="section-title">Get started in 3 simple steps</h2>
          <p className="section-subtitle">From setup to ROI in under a week.</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3 className="step-title">Import Your Data</h3>
            <p className="step-desc">Upload your existing leads and properties. We support CSV, Excel, and direct CRM migration.</p>
          </div>
          <div className="step-connector" />
          <div className="step-card">
            <div className="step-number">02</div>
            <h3 className="step-title">Configure Automation</h3>
            <p className="step-desc">Set up automated lead scoring, routing rules, and email sequences with our visual builder.</p>
          </div>
          <div className="step-connector" />
          <div className="step-card">
            <div className="step-number">03</div>
            <h3 className="step-title">Close More Deals</h3>
            <p className="step-desc">Watch your conversion rates soar as automation handles the repetitive work for you.</p>
          </div>
        </div>
      </section>

      {/* Benefits / Trust Section with Image */}
      <section id="benefits" className="trust-section">
        <div className="trust-content">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title" style={{textAlign: 'left'}}>Built for Performance & Security</h2>
          <p style={{color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '16px'}}>
            Our platform is designed from the ground up for real estate professionals who demand reliability, speed, and security.
          </p>
          <ul className="trust-list">
            <li><CheckCircle className="trust-icon" size={20} /> Enterprise-grade data encryption</li>
            <li><CheckCircle className="trust-icon" size={20} /> 24/7 Priority Support & Onboarding</li>
            <li><CheckCircle className="trust-icon" size={20} /> Seamless Data Migration from any CRM</li>
            <li><CheckCircle className="trust-icon" size={20} /> Custom API & Webhook Integrations</li>
            <li><CheckCircle className="trust-icon" size={20} /> GDPR Compliant & Audit Logs</li>
          </ul>
        </div>
        <div className="trust-image">
          <div className="glass-card" style={{transform: 'rotateY(5deg) rotateX(-3deg)'}}>
             <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Real Estate Properties" 
              className="preview-image"
              style={{borderRadius: '0'}}
            />
          </div>
        </div>
      </section>

      {/* Key Metrics Banner */}
      <section className="metrics-banner">
        <div className="metrics-grid">
          <div className="metric-item">
            <TrendingUp size={28} />
            <span className="metric-value">144%</span>
            <span className="metric-label">Average ROI</span>
          </div>
          <div className="metric-item">
            <Clock size={28} />
            <span className="metric-value">83%</span>
            <span className="metric-label">Time Saved</span>
          </div>
          <div className="metric-item">
            <Users size={28} />
            <span className="metric-value">500+</span>
            <span className="metric-label">Active Agents</span>
          </div>
          <div className="metric-item">
            <Shield size={28} />
            <span className="metric-value">99.9%</span>
            <span className="metric-label">Uptime SLA</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <div className="section-badge">Testimonials</div>
          <h2 className="section-title">Loved by agencies everywhere</h2>
          <p className="section-subtitle">See what our customers say about Real Estate Pro.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
            </div>
            <p className="testimonial-text">"We cut our lead response time from 30 minutes to under 5. The automation features alone paid for the platform within the first month."</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">KM</div>
              <div>
                <strong>Karim Mansour</strong>
                <span>Agency Director, Tunis Immo</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
            </div>
            <p className="testimonial-text">"The analytics dashboard gives us insights we never had before. Our conversion rate jumped 35% in just two months of using the platform."</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SB</div>
              <div>
                <strong>Sara Ben Ali</strong>
                <span>Sales Manager, LuxEstate</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
            </div>
            <p className="testimonial-text">"Finally a CRM that understands real estate. The property matching and lead scoring are game changers for our team of 20 agents."</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AH</div>
              <div>
                <strong>Ahmed Hammami</strong>
                <span>CEO, HomeFirst Group</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to transform your agency?</h2>
          <p className="cta-subtitle">Join hundreds of agencies already using Real Estate Pro to close more deals, faster.</p>
          <div className="hero-cta" style={{justifyContent: 'center'}}>
            <Link to="/login" className="btn btn-primary btn-lg" style={{padding: '16px 40px', fontSize: '18px', background: '#fff', color: '#6366f1', fontWeight: 800}}>
              Start Free Trial <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
              <div className="logo-icon-wrapper" style={{padding: '6px'}}>
                <Building2 size={18} />
              </div>
              <span className="logo-text">Real Estate Pro</span>
            </div>
            <p style={{color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '280px', lineHeight: 1.6}}>The operating system for modern real estate agencies. Automate, analyze, and accelerate.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4 style={{marginBottom: '16px', fontWeight: 700}}>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Security</a>
              <a href="#">Changelog</a>
            </div>
            <div>
              <h4 style={{marginBottom: '16px', fontWeight: 700}}>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h4 style={{marginBottom: '16px', fontWeight: 700}}>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">GDPR</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Real Estate Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
