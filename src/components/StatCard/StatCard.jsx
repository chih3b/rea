import { TrendingUp, TrendingDown } from 'lucide-react'
import './StatCard.css'

function StatCard({ title, value, change, icon: Icon, trend = 'up', colorScheme = 'primary' }) {
  return (
    <div className={`stat-card stat-card-${colorScheme}`}>
      <div className="stat-header">
        <div className="stat-icon">
          <Icon size={24} />
        </div>
        {change && (
          <div className={`stat-change ${trend === 'up' ? 'trend-up' : 'trend-down'}`}>
            {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span>{change}</span>
          </div>
        )}
      </div>
      <div className="stat-content">
        <h3 className="stat-value">{value}</h3>
        <p className="stat-title">{title}</p>
      </div>
    </div>
  )
}

export default StatCard
