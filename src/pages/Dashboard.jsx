import { 
  Users, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Target,
  Zap,
  CheckCircle,
  Activity
} from 'lucide-react'
import { 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'
import StatCard from '../components/StatCard/StatCard'
import { kpiData, monthlyLeadsData, statusDistribution, leads } from '../data/mockData'
import './Dashboard.css'

function Dashboard() {
  const recentLeads = leads.slice(0, 5)

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Real-time overview of your CRM performance and automation metrics</p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-4">
        <StatCard
          title="Total Leads"
          value={kpiData.totalLeads}
          change="+12%"
          trend="up"
          icon={Users}
          colorScheme="primary"
        />
        <StatCard
          title="Active Leads"
          value={kpiData.activeLeads}
          change="+8%"
          trend="up"
          icon={Activity}
          colorScheme="info"
        />
        <StatCard
          title="Conversion Rate"
          value={`${kpiData.conversionRate}%`}
          change="+3.2%"
          trend="up"
          icon={Target}
          colorScheme="success"
        />
        <StatCard
          title="Automation Rate"
          value={`${kpiData.automationRate}%`}
          change="+5%"
          trend="up"
          icon={Zap}
          colorScheme="warning"
        />
      </div>

      {/* ROI and Time Savings */}
      <div className="grid grid-cols-3" style={{ marginTop: '1.5rem' }}>
        <StatCard
          title="Time Saved / Lead"
          value={`${kpiData.timeSavedPerLead} min`}
          change="-83%"
          trend="up"
          icon={Clock}
          colorScheme="info"
        />
        <StatCard
          title="Monthly Cost Savings"
          value={`${kpiData.costSavingMonthly} TND`}
          change="+1,953 TND"
          trend="up"
          icon={DollarSign}
          colorScheme="success"
        />
        <StatCard
          title="ROI"
          value={`${kpiData.roi}%`}
          change={`${kpiData.paybackPeriod} mo payback`}
          trend="up"
          icon={TrendingUp}
          colorScheme="success"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2" style={{ marginTop: '1.5rem' }}>
        {/* Monthly Leads Trend */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Leads & Conversions Trend</h3>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyLeadsData}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorConverted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="var(--text-secondary)"
                  style={{ fontSize: '0.875rem' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="var(--text-secondary)"
                  style={{ fontSize: '0.875rem' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-xl)'
                  }}
                />
                <Legend iconType="circle" />
                <Area 
                  type="monotone" 
                  dataKey="leads" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorLeads)"
                  name="Total Leads"
                  animationEasing="ease-out"
                  animationDuration={1000}
                />
                <Area 
                  type="monotone" 
                  dataKey="converted" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorConverted)"
                  name="Converted"
                  animationEasing="ease-out"
                  animationDuration={1000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Lead Status Distribution</h3>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  labelLine={false}
                  dataKey="value"
                  stroke="none"
                  animationEasing="ease-out"
                  animationDuration={1000}
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-xl)'
                  }}
                />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Before vs After Automation Comparison */}
      <div className="grid grid-cols-1" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Automation Impact: Before vs After</h3>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart 
                data={[
                  {
                    metric: 'Time/Lead (min)',
                    Before: kpiData.beforeAutomation.timePerLead,
                    After: kpiData.afterAutomation.timePerLead
                  },
                  {
                    metric: 'Hours/Month',
                    Before: kpiData.beforeAutomation.employeeHours,
                    After: kpiData.afterAutomation.employeeHours
                  },
                  {
                    metric: 'Labor Cost (TND)',
                    Before: kpiData.beforeAutomation.laborCost / 100,
                    After: kpiData.afterAutomation.laborCost / 100
                  }
                ]}
                barSize={32}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis 
                  dataKey="metric" 
                  stroke="var(--text-secondary)"
                  style={{ fontSize: '0.875rem' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="var(--text-secondary)"
                  style={{ fontSize: '0.875rem' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-xl)'
                  }}
                  cursor={{fill: 'var(--bg-tertiary)', opacity: 0.4}}
                />
                <Legend iconType="circle" />
                <Bar dataKey="Before" fill="#94a3b8" radius={[6, 6, 0, 0]} animationEasing="ease-out" animationDuration={1000} />
                <Bar dataKey="After" fill="url(#colorConverted)" radius={[6, 6, 0, 0]} animationEasing="ease-out" animationDuration={1000} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="grid grid-cols-1" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Leads</h3>
            <a href="/leads" className="btn btn-outline btn-sm">View All</a>
          </div>
          <div className="card-content">
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>City</th>
                    <th>Budget</th>
                    <th>Status</th>
                    <th>Score</th>
                    <th>Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td>
                        <div className="lead-name">
                          <strong>{lead.name}</strong>
                          <span className="lead-email">{lead.email}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge badge-${lead.type === 'buy' ? 'primary' : 'info'}`}>
                          {lead.type.toUpperCase()}
                        </span>
                      </td>
                      <td>{lead.city}</td>
                      <td>
                        {lead.type === 'buy' 
                          ? `${lead.budget.toLocaleString()} TND` 
                          : `${lead.budget} TND/mo`
                        }
                      </td>
                      <td>
                        <span className={`badge badge-${
                          lead.status === 'converted' ? 'success' :
                          lead.status === 'lost' ? 'danger' :
                          lead.status === 'meeting' ? 'warning' :
                          lead.status === 'qualified' ? 'success' :
                          'info'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td>
                        <div className="score-badge" style={{
                          background: `linear-gradient(90deg, 
                            ${lead.score >= 80 ? '#10b981' : lead.score >= 60 ? '#f59e0b' : '#ef4444'} ${lead.score}%, 
                            var(--bg-tertiary) ${lead.score}%)`
                        }}>
                          {lead.score}%
                        </div>
                      </td>
                      <td>{lead.agent || <span className="text-muted">Unassigned</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div className="grid grid-cols-3" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <CheckCircle size={24} style={{ color: 'var(--text-secondary)' }} />
            </div>
            <div>
              <h4 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {kpiData.totalTimeSaved.toFixed(1)} hours
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Total Time Saved/Month</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <DollarSign size={24} style={{ color: 'var(--text-secondary)' }} />
            </div>
            <div>
              <h4 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {kpiData.costSavingAnnual.toLocaleString()} TND
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Annual Cost Savings</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Clock size={24} style={{ color: 'var(--text-secondary)' }} />
            </div>
            <div>
              <h4 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {kpiData.avgResponseTime} min
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Avg. Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
