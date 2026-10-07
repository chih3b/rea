// Mock data for the real estate CRM platform

export const leads = [
  {
    id: 1,
    name: 'Ahmed Ben Ali',
    email: 'ahmed.benali@email.com',
    phone: '+216 98 123 456',
    type: 'buy',
    city: 'Tunis',
    budget: 250000,
    rooms: 3,
    status: 'new',
    agent: null,
    createdAt: '2026-10-01T10:30:00',
    lastContact: null,
    score: 85,
    matchedProperties: [1, 2, 3]
  },
  {
    id: 2,
    name: 'Sarah Trabelsi',
    email: 'sarah.trabelsi@email.com',
    phone: '+216 22 456 789',
    type: 'rent',
    city: 'Sousse',
    budget: 800,
    rooms: 2,
    status: 'contacted',
    agent: 'Karim Mansour',
    createdAt: '2026-09-28T14:20:00',
    lastContact: '2026-10-02T09:15:00',
    score: 72,
    matchedProperties: [4, 5]
  },
  {
    id: 3,
    name: 'Mohamed Gharbi',
    email: 'mohamed.gharbi@email.com',
    phone: '+216 55 789 123',
    type: 'buy',
    city: 'Sfax',
    budget: 180000,
    rooms: 4,
    status: 'qualified',
    agent: 'Leila Najjar',
    createdAt: '2026-09-25T11:45:00',
    lastContact: '2026-10-01T16:30:00',
    score: 90,
    matchedProperties: [6, 7, 8]
  },
  {
    id: 4,
    name: 'Fatma Bouazizi',
    email: 'fatma.bouazizi@email.com',
    phone: '+216 24 567 890',
    type: 'rent',
    city: 'Tunis',
    budget: 1200,
    rooms: 3,
    status: 'meeting',
    agent: 'Karim Mansour',
    createdAt: '2026-09-20T08:00:00',
    lastContact: '2026-10-03T10:00:00',
    score: 95,
    matchedProperties: [9, 10]
  },
  {
    id: 5,
    name: 'Youssef Hamdi',
    email: 'youssef.hamdi@email.com',
    phone: '+216 98 234 567',
    type: 'buy',
    city: 'Nabeul',
    budget: 320000,
    rooms: 5,
    status: 'converted',
    agent: 'Leila Najjar',
    createdAt: '2026-09-15T13:30:00',
    lastContact: '2026-09-30T14:45:00',
    score: 100,
    matchedProperties: [11]
  },
  {
    id: 6,
    name: 'Amira Slimani',
    email: 'amira.slimani@email.com',
    phone: '+216 26 789 456',
    type: 'rent',
    city: 'Monastir',
    budget: 650,
    rooms: 2,
    status: 'lost',
    agent: 'Karim Mansour',
    createdAt: '2026-09-10T09:20:00',
    lastContact: '2026-09-22T11:00:00',
    score: 45,
    matchedProperties: []
  }
]

export const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown Tunis',
    type: 'apartment',
    city: 'Tunis',
    district: 'Centre Ville',
    price: 245000,
    rentPrice: null,
    rooms: 3,
    bathrooms: 2,
    area: 120,
    status: 'available',
    features: ['Parking', 'Elevator', 'Balcony'],
    score: 92,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400'
  },
  {
    id: 2,
    title: 'Luxury Villa with Sea View',
    type: 'villa',
    city: 'La Marsa',
    district: 'Gammarth',
    price: 580000,
    rentPrice: null,
    rooms: 5,
    bathrooms: 4,
    area: 350,
    status: 'available',
    features: ['Swimming Pool', 'Garden', 'Sea View', 'Garage'],
    score: 88,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400'
  },
  {
    id: 3,
    title: 'Cozy Studio near Metro',
    type: 'studio',
    city: 'Tunis',
    district: 'Lac 2',
    price: 95000,
    rentPrice: 450,
    rooms: 1,
    bathrooms: 1,
    area: 45,
    status: 'available',
    features: ['Furnished', 'Metro Access'],
    score: 78,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400'
  },
  {
    id: 4,
    title: 'Furnished Apartment in Sousse',
    type: 'apartment',
    city: 'Sousse',
    district: 'Khezama',
    price: null,
    rentPrice: 850,
    rooms: 2,
    bathrooms: 1,
    area: 85,
    status: 'available',
    features: ['Furnished', 'Beach Access', 'Balcony'],
    score: 85,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400'
  },
  {
    id: 5,
    title: 'Business Office Space',
    type: 'commercial',
    city: 'Sousse',
    district: 'Centre Ville',
    price: null,
    rentPrice: 1500,
    rooms: 5,
    bathrooms: 2,
    area: 200,
    status: 'available',
    features: ['Parking', 'Elevator', 'Reception Area'],
    score: 70,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'
  }
]

export const agents = [
  {
    id: 1,
    name: 'Karim Mansour',
    email: 'karim.mansour@realestate.com',
    phone: '+216 98 111 222',
    leadsAssigned: 15,
    leadsConverted: 8,
    conversionRate: 53.3,
    status: 'active'
  },
  {
    id: 2,
    name: 'Leila Najjar',
    email: 'leila.najjar@realestate.com',
    phone: '+216 98 333 444',
    leadsAssigned: 12,
    leadsConverted: 10,
    conversionRate: 83.3,
    status: 'active'
  },
  {
    id: 3,
    name: 'Sami Bouaziz',
    email: 'sami.bouaziz@realestate.com',
    phone: '+216 98 555 666',
    leadsAssigned: 8,
    leadsConverted: 3,
    conversionRate: 37.5,
    status: 'active'
  }
]

export const kpiData = {
  totalLeads: 500,
  activeLeads: 156,
  convertedLeads: 89,
  conversionRate: 17.8,
  timeSavedPerLead: 25, // minutes
  totalTimeSaved: 208.3, // hours per month
  costSavingMonthly: 1953, // TND
  costSavingAnnual: 23438, // TND
  roi: 144, // percentage
  paybackPeriod: 4.9, // months
  automationRate: 83, // percentage
  avgResponseTime: 5, // minutes
  beforeAutomation: {
    timePerLead: 30, // minutes
    employeeHours: 250, // per month
    employees: 1.6,
    laborCost: 2344 // TND per month
  },
  afterAutomation: {
    timePerLead: 5, // minutes
    employeeHours: 41.7, // per month
    employees: 0.3,
    laborCost: 391 // TND per month
  }
}

export const automationWorkflow = [
  {
    id: 'webhook',
    type: 'trigger',
    name: 'Webhook + IF',
    description: 'Receive lead form and check data completeness',
    status: 'active',
    position: { x: 100, y: 50 }
  },
  {
    id: 'sheets',
    type: 'action',
    name: 'Google Sheets',
    description: 'Create/update lead and prevent duplicates',
    status: 'active',
    position: { x: 300, y: 50 }
  },
  {
    id: 'ai',
    type: 'action',
    name: 'AI Agent',
    description: 'Qualify lead and write personalized recommendation',
    status: 'active',
    position: { x: 500, y: 50 }
  },
  {
    id: 'match',
    type: 'action',
    name: 'Property Matching',
    description: 'Search and score properties',
    status: 'active',
    position: { x: 700, y: 50 }
  },
  {
    id: 'send',
    type: 'action',
    name: 'Send Notification',
    description: 'Email/WhatsApp recommendations',
    status: 'active',
    position: { x: 900, y: 50 }
  },
  {
    id: 'wait',
    type: 'wait',
    name: 'Wait + Follow Up',
    description: 'Check customer status and follow up',
    status: 'active',
    position: { x: 1100, y: 50 }
  }
]

export const monthlyLeadsData = [
  { month: 'Apr', leads: 380, converted: 58 },
  { month: 'May', leads: 420, converted: 68 },
  { month: 'Jun', leads: 450, converted: 75 },
  { month: 'Jul', leads: 480, converted: 82 },
  { month: 'Aug', leads: 490, converted: 86 },
  { month: 'Sep', leads: 500, converted: 89 }
]

export const statusDistribution = [
  { name: 'New', value: 45, color: '#3b82f6' },
  { name: 'Contacted', value: 32, color: '#8b5cf6' },
  { name: 'Qualified', value: 28, color: '#06b6d4' },
  { name: 'Meeting', value: 18, color: '#f59e0b' },
  { name: 'Converted', value: 89, color: '#10b981' },
  { name: 'Lost', value: 38, color: '#ef4444' }
]

export const leadStatuses = {
  new: { label: 'New', color: 'primary' },
  contacted: { label: 'Contacted', color: 'info' },
  qualified: { label: 'Qualified', color: 'success' },
  meeting: { label: 'Meeting', color: 'warning' },
  converted: { label: 'Converted', color: 'success' },
  lost: { label: 'Lost', color: 'danger' }
}

export const cities = [
  'Tunis', 'Sousse', 'Sfax', 'Nabeul', 'La Marsa', 
  'Monastir', 'Bizerte', 'Hammamet', 'Mahdia', 'Gabès'
]
