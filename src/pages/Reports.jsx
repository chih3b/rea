import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users,
  Target,
  Calendar,
  Download,
  FileText,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import StatCard from '../components/StatCard/StatCard'
import { kpiData, monthlyLeadsData, agents } from '../data/mockData'
import './Dashboard.css'

function Reports() {
  const roiData = [
    { metric: 'Setup Cost', value: 6000, color: '#ef4444' },
    { metric: 'Annual Savings', value: 23438, color: '#10b981' },
    { metric: 'Year 1 Net', value: 13838, color: '#3b82f6' }
  ]

  const comparisonData = [
    { 
      category: 'Time Efficiency',
      before: 30,
      after: 5,
      improvement: 83
    },
    { 
      category: 'Employee Hours',
      before: 250,
      after: 41.7,
      improvement: 83
    },
    { 
      category: 'Cost (TND/100)',
      before: 23.44,
      after: 3.91,
      improvement: 83
    },
    { 
      category: 'Response Time',
      before: 30,
      after: 5,
      improvement: 83
    }
  ]

  const agentPerformanceData = agents.map(agent => ({
    name: agent.name,
    leads: agent.leadsAssigned,
    converted: agent.leadsConverted,
    rate: agent.conversionRate
  }))

  const timelineData = [
    { month: 'Month 1', cost: 6000, savings: 1953, cumulative: -4047 },
    { month: 'Month 2', cost: 300, savings: 1953, cumulative: -2394 },
    { month: 'Month 3', cost: 300, savings: 1953, cumulative: -741 },
    { month: 'Month 4', cost: 300, savings: 1953, cumulative: 912 },
    { month: 'Month 5', cost: 300, savings: 1953, cumulative: 2565 },
    { month: 'Month 6', cost: 300, savings: 1953, cumulative: 4218 }
  ]

  const performanceMetrics = [
    { metric: 'Lead Quality', score: 85 },
    { metric: 'Response Speed', score: 95 },
    { metric: 'Conversion Rate', score: 75 },
    { metric: 'Customer Satisfaction', score: 88 },
    { metric: 'Data Accuracy', score: 92 }
  ]

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports & Analytics</h1>
          <p className="page-subtitle">Comprehensive analysis of automation performance and ROI metrics</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn btn-outline">
            <Download size={20} />
            Export PDF
          </button>
          <button className="btn btn-primary">
            <FileText size={20} />
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-4" style={{ marginBottom: '1.5rem' }}>
        <StatCard
          title="ROI"
          value={`${kpiData.roi}%`}
          change={`Year 1`}
          trend="up"
          icon={TrendingUp}
          colorScheme="success"
        />
        <StatCard
          title="Annual Savings"
          value={`${(kpiData.costSavingAnnual / 1000).toFixed(1)}K TND`}
          change="+23,438 TND"
          trend="up"
          icon={DollarSign}
          colorScheme="success"
        />
        <StatCard
          title="Payback Period"
          value={`${kpiData.paybackPeriod} mo`}
          change="Fast ROI"
          trend="up"
          icon={Calendar}
          colorScheme="warning"
        />
        <StatCard
          title="Time Saved"
          value={`${kpiData.totalTimeSaved.toFixed(0)}h`}
          change="Per month"
          trend="up"
          icon={Clock}
          colorScheme="info"
        />
      </div>

      {/* ROI Breakdown */}
      <div className="grid grid-cols-2" style={{ marginBottom: '1.5rem' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">ROI Financial Breakdown</h3>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roiData} barSize={40}>
                <defs>
                  <linearGradient id="colorDanger" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.4}/>
                  </linearGradient>
                  <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.4}/>
                  </linearGradient>
                  <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
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
                  label={{ value: 'Amount (TND)', angle: -90, position: 'insideLeft', fill: 'var(--text-secondary)' }}
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
                <Bar dataKey="value" radius={[8, 8, 0, 0]} animationEasing="ease-out" animationDuration={1000}>
                  {roiData.map((entry, index) => {
                    const fill = entry.metric === 'Setup Cost' ? 'url(#colorDanger)' : 
                                 entry.metric === 'Annual Savings' ? 'url(#colorSuccess)' : 
                                 'url(#colorPrimary)';
                    return <Cell key={`cell-${index}`} fill={fill} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div style={{ 
              marginTop: '1rem', 
              padding: '1rem',
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-md)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              textAlign: 'center',
              border: '1px solid var(--border-color)'
            }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Setup Cost</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--danger)' }}>6,000 TND</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Annual Savings</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--success)' }}>23,438 TND</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Net Year 1</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent-primary)' }}>13,838 TND</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Payback Timeline</h3>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timelineData}>
                <defs>
                  <linearGradient id="colorTimeline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.6}/>
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
                <Line 
                  type="monotone" 
                  dataKey="cumulative" 
                  stroke="url(#colorSuccess)" 
                  strokeWidth={4}
                  dot={{ fill: '#10b981', r: 4, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  name="Cumulative Savings"
                  animationEasing="ease-out"
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
            <div style={{ 
              marginTop: '1rem', 
              padding: '1rem',
              backgroundColor: 'var(--success-light)',
              borderRadius: '8px',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', textAlign: 'center' }}>
                <strong style={{ color: 'var(--success)' }}>Break-even achieved in Month 4</strong> 
                <span style={{ color: 'var(--text-secondary)' }}> — Cumulative savings become positive at 4.9 months</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Before vs After Comparison */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header">
          <h3 className="card-title">Before vs After Automation - Performance Comparison</h3>
          <span className="badge badge-success">83% Average Improvement</span>
        </div>
        <div className="card-content">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={comparisonData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis type="number" stroke="var(--text-secondary)" style={{ fontSize: '0.875rem' }} />
              <YAxis 
                type="category" 
                dataKey="category" 
                stroke="var(--text-secondary)" 
                style={{ fontSize: '0.875rem' }}
                width={120}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
              <Legend />
              <Bar dataKey="before" fill="#ef4444" name="Before Automation" radius={[0, 8, 8, 0]} />
              <Bar dataKey="after" fill="#10b981" name="After Automation" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Radar & Agent Performance */}
      <div className="grid grid-cols-2" style={{ marginBottom: '1.5rem' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">System Performance Metrics</h3>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceMetrics}>
                <PolarGrid stroke="var(--border-color)" />
                <PolarAngleAxis 
                  dataKey="metric" 
                  stroke="var(--text-secondary)"
                  style={{ fontSize: '0.875rem' }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]}
                  stroke="var(--text-secondary)"
                />
                <Radar 
                  name="Performance Score" 
                  dataKey="score" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Agent Performance</h3>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={agentPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis 
                  dataKey="name" 
                  stroke="var(--text-secondary)"
                  style={{ fontSize: '0.75rem' }}
                  angle={-15}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  stroke="var(--text-secondary)"
                  style={{ fontSize: '0.875rem' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                />
                <Legend />
                <Bar dataKey="leads" fill="#3b82f6" name="Assigned Leads" radius={[8, 8, 0, 0]} />
                <Bar dataKey="converted" fill="#10b981" name="Converted" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-3" style={{ marginBottom: '1.5rem' }}>
        <div className="card highlight-card highlight-success">
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <TrendingUp size={48} style={{ color: 'var(--success)', margin: '0 auto 1rem' }} />
            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Cost Efficiency
            </h4>
            <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success)', marginBottom: '0.5rem' }}>
              83%
            </p>
            <p style={{ fontSize: '0.813rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Reduction in operational costs through automation eliminates repetitive manual tasks
            </p>
          </div>
        </div>

        <div className="card highlight-card highlight-warning">
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <Clock size={48} style={{ color: 'var(--warning)', margin: '0 auto 1rem' }} />
            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Time Optimization
            </h4>
            <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--warning)', marginBottom: '0.5rem' }}>
              208h
            </p>
            <p style={{ fontSize: '0.813rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Monthly time savings allows sales team to focus on high-value activities
            </p>
          </div>
        </div>

        <div className="card highlight-card highlight-primary">
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <Target size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Conversion Quality
            </h4>
            <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
              {kpiData.conversionRate}%
            </p>
            <p style={{ fontSize: '0.813rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Improved lead quality and faster response times boost conversion rates
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Statistics Table */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Detailed Automation Impact Analysis</h3>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Before Automation</th>
                  <th>After Automation</th>
                  <th>Change</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Time per Lead</strong></td>
                  <td>30 minutes</td>
                  <td>5 minutes</td>
                  <td><span className="badge badge-success">-83%</span></td>
                  <td style={{ fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                    25 min saved per lead
                  </td>
                </tr>
                <tr>
                  <td><strong>Employee Hours/Month</strong></td>
                  <td>250 hours</td>
                  <td>41.7 hours</td>
                  <td><span className="badge badge-success">-83%</span></td>
                  <td style={{ fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                    208.3 hours freed up
                  </td>
                </tr>
                <tr>
                  <td><strong>FTE Required</strong></td>
                  <td>1.6 employees</td>
                  <td>0.3 employees</td>
                  <td><span className="badge badge-success">-81%</span></td>
                  <td style={{ fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                    1.3 FTE reallocated
                  </td>
                </tr>
                <tr>
                  <td><strong>Monthly Labor Cost</strong></td>
                  <td>2,344 TND</td>
                  <td>391 TND</td>
                  <td><span className="badge badge-success">-83%</span></td>
                  <td style={{ fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                    1,953 TND saved monthly
                  </td>
                </tr>
                <tr>
                  <td><strong>Annual Savings</strong></td>
                  <td>—</td>
                  <td>23,438 TND</td>
                  <td><span className="badge badge-success">+23,438 TND</span></td>
                  <td style={{ fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                    Significant cost reduction
                  </td>
                </tr>
                <tr>
                  <td><strong>ROI (Year 1)</strong></td>
                  <td>—</td>
                  <td>144%</td>
                  <td><span className="badge badge-success">+144%</span></td>
                  <td style={{ fontSize: '0.813rem', color: 'var(--text-secondary)' }}>
                    4.9 month payback
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
