import { NavLink, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  Home, 
  Workflow, 
  BarChart3, 
  ChevronLeft,
  Building2,
  LogOut,
  X
} from 'lucide-react'
import './Sidebar.css'

function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const navigate = useNavigate()
  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/leads', icon: Users, label: 'Leads' },
    { path: '/properties', icon: Home, label: 'Properties' },
    { path: '/automation', icon: Workflow, label: 'Automation' },
    { path: '/reports', icon: BarChart3, label: 'Reports' },
  ]
  
  const secondaryNavItems = [
    { path: '/process-comparison', icon: Workflow, label: collapsed ? 'AS-IS vs TO-BE' : 'Process Analysis' },
  ]

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <>
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div style={{
              background: 'var(--gradient-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
            }}>
              <Building2 size={collapsed ? 24 : 22} color="white" />
            </div>
            {!collapsed && <span className="logo-text">Real Estate Pro</span>}
          </div>
          
          {/* Mobile close button */}
          <button 
            className="mobile-close-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>

          {/* Desktop collapse button */}
          <button 
            className="collapse-btn" 
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
          >
            <ChevronLeft className={collapsed ? 'rotate-180' : ''} size={20} />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
          
          {!collapsed && (
            <div style={{ 
              margin: '1rem 0 0.5rem 0', 
              padding: '0 1rem',
              fontSize: '0.75rem',
              fontWeight: '600',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Analysis
            </div>
          )}
          
          {secondaryNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </button>
          {!collapsed && (
            <div className="footer-text" style={{marginTop: '1rem'}}>
              <p className="version">v1.0.0</p>
              <p className="copyright">© 2026 Real Estate Pro</p>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
