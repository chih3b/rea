import { useState } from 'react'
import { Bell, Search, Moon, Sun, User, Menu } from 'lucide-react'
import './Header.css'

function Header({ onMenuClick }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <header className="header">
      <div className="header-left">
        <button className="header-btn mobile-menu-btn" onClick={onMenuClick} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search leads, properties..." 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <button className="header-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <button className="header-btn notification-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        
        <div className="user-menu">
          <div className="user-avatar">
            <User size={20} />
          </div>
          <div className="user-info">
            <span className="user-name">Sales Manager</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
