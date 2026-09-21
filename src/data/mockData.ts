export interface ResearchItem {
  id: string;
  title: string;
  category: string;
  year: number;
  source: string;
  relevance: number; // percentage
  type: 'Paper' | 'Dataset' | 'Policy Doc' | 'Case Study';
  organization: string;
  description: string;
  tags: string[];
  credibility: 'High Verification' | 'Peer Reviewed' | 'Official Gazette' | 'Empirical Study';
}

export interface MetricCard {
  title: string;
  count: number;
  change: string;
  isPositive: boolean;
  period: string;
}

export interface LandGovernanceSnapshot {
  title: string;
  metric: string;
  subtext: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
  category: string;
}

export const MOCK_STATS: MetricCard[] = [
  { title: 'Research Resources', count: 2486, change: '+12% this quarter', isPositive: true, period: 'indexed' },
  { title: 'Datasets', count: 186, change: '+8 new state portals', isPositive: true, period: 'validated' },
  { title: 'Policy Documents', count: 324, change: 'Updated Aug 2026', isPositive: true, period: 'archived' },
  { title: 'Case Studies', count: 97, change: '14 districts covered', isPositive: true, period: 'published' }
];

export const MOCK_TRENDS_DATA = [
  { year: '2020', publications: 320, policyBriefs: 45, gisDatasets: 18 },
  { year: '2021', publications: 410, policyBriefs: 62, gisDatasets: 29 },
  { year: '2022', publications: 580, policyBriefs: 88, gisDatasets: 42 },
  { year: '2023', publications: 740, policyBriefs: 110, gisDatasets: 68 },
  { year: '2024', publications: 920, policyBriefs: 145, gisDatasets: 95 },
  { year: '2025', publications: 1150, policyBriefs: 190, gisDatasets: 140 },
  { year: '2026 (YTD)', publications: 1480, policyBriefs: 235, gisDatasets: 186 },
];

export const MOCK_SNAPSHOTS: LandGovernanceSnapshot[] = [
  {
    title: 'Urban Expansion Rate',
    metric: '4.8% p.a.',
    subtext: 'High peri-urban encroachment in Tier-1 corridors',
    trend: 'up',
    color: 'amber',
    category: 'Urban Planning'
  },
  {
    title: 'Agricultural Land Retention',
    metric: '92.4%',
    subtext: 'Prime agricultural land protected via zonal regulations',
    trend: 'stable',
    color: 'emerald',
    category: 'Agrarian Governance'
  },
  {
    title: 'Climate Vulnerability Index',
    metric: '0.64 High',
    subtext: 'Coastal & river-basin agricultural zones at risk',
    trend: 'up',
    color: 'rose',
    category: 'Environmental Policy'
  },
  {
    title: 'Land Dispute Resolution Speed',
    metric: '34% Faster',
    subtext: 'Post Digital India Land Records Modernization (DILRMP)',
    trend: 'down', // disputes down / resolution faster
    color: 'indigo',
    category: 'Judicial & Governance'
  }
];

export const MOCK_RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: 'res-101',
    title: 'Impact Analysis of Digital Cadastral Mapping on Rural Land Dispute Abatement in Western Ghats Corridor',
    category: 'Land Governance & Digitization',
    year: 2025,
    source: 'Journal of Indian Rural Governance & Land Reform',
    relevance: 98,
    type: 'Paper',
    organization: 'Department of Land Resources & IIT Madras',
    description: 'Empirical study across 42 talukas evaluating title certainty following drone-based High-Resolution Vector Cadastral Surveying.',
    tags: ['DILRMP', 'Cadastral Mapping', 'Land Disputes', 'Drone Survey'],
    credibility: 'Peer Reviewed'
  },
  {
    id: 'res-102',
    title: 'Evaluating Peri-Urban Agricultural Conversion Dynamics in the Bengaluru-Chennai Industrial Corridor',
    category: 'Urban Expansion & Zoning',
    year: 2026,
    source: 'National Institute of Urban Affairs Policy Monograph',
    relevance: 94,
    type: 'Case Study',
    organization: 'NIUA & NITI Aayog Urban Cell',
    description: 'Multi-spectral satellite imagery synthesis demonstrating agricultural land diversion trends along national highway corridors.',
    tags: ['Urban Sprawl', 'Land Use Conversion', 'Remote Sensing', 'Zoning'],
    credibility: 'Official Gazette'
  },
  {
    id: 'res-103',
    title: 'Climate Vulnerability and Coastal Land Tenure Security in Sundarbans Deltaic Region',
    category: 'Climate & Adaptation Policy',
    year: 2025,
    source: 'Center for Policy Research (CPR) Land Rights Initiative',
    relevance: 91,
    type: 'Paper',
    organization: 'CPR & Ministry of Environment, Forest & Climate Change',
    description: 'Field survey of 1,200 smallholder farmer households facing salinity ingress and title loss in cyclone-prone delta tracts.',
    tags: ['Climate Adaptation', 'Coastal Tenure', 'Salinity Ingress', 'Displacement'],
    credibility: 'Empirical Study'
  },
  {
    id: 'res-104',
    title: 'National Spatial Data Infrastructure Framework for Unified Parcel Identification (ULPIN / Bhu-Aadhaar)',
    category: 'Land Records Technology',
    year: 2024,
    source: 'DoLR Technical Assessment Report 2024-25',
    relevance: 96,
    type: 'Dataset',
    organization: 'Department of Land Resources (DoLR)',
    description: 'Comprehensive evaluation of 14-digit geo-referenced land parcel identification numbers across 26 States and UTs.',
    tags: ['ULPIN', 'Bhu-Aadhaar', 'Spatial Registry', 'Interoperability'],
    credibility: 'High Verification'
  },
  {
    id: 'res-105',
    title: 'Women’s Institutional Ownership of Agricultural Land: Multi-State Legal Assessment & Field Realities',
    category: 'Gender & Equitable Governance',
    year: 2025,
    source: 'LBSNAA Center for Rural Studies Working Paper Series',
    relevance: 89,
    type: 'Policy Doc',
    organization: 'LBSNAA Mussoorie & UN Women India',
    description: 'Comparative governance framework analysis analyzing Hindu Succession Amendment Act implementation across 12 agricultural states.',
    tags: ['Gender Equality', 'Land Rights', 'Tenure Security', 'Inheritance Policy'],
    credibility: 'Peer Reviewed'
  }
];

export const MOCK_EVIDENCE_CHAIN = [
  {
    step: '1. Primary Research',
    title: 'High-Resolution Cadastral Survey Study (DoLR 2025)',
    detail: 'Field survey of 18,000 rural land parcels demonstrating 42% reduction in boundary overlap errors.',
    icon: 'FileText'
  },
  {
    step: '2. Open Dataset',
    title: 'State Parcel Vector Boundary Registry (NIC-DoLR)',
    detail: 'Spatial dataset containing geo-referenced vectors for 4.2 million parcels under ULPIN specification.',
    icon: 'Database'
  },
  {
    step: '3. GIS Evidence Layer',
    title: 'Multi-Temporal Land Use/Cover Change Overlay (2018-2026)',
    detail: 'Landsat-9 and Sentinel-2 satellite compilation tracking urban encroached wetlands.',
    icon: 'MapPin'
  },
  {
    step: '4. Policy Synthesis',
    title: 'National Land Use & Protection Guidelines 2026 Draft',
    detail: 'Inter-ministerial recommendations for mandatory buffer zones around prime double-cropped land.',
    icon: 'ShieldCheck'
  },
  {
    step: '5. Actionable Insight',
    title: 'Targeted Protection Directive for 14 Priority Districts',
    detail: 'Automated flag alerting state revenue authorities to freeze illegal farmland non-agricultural conversions.',
    icon: 'Lightbulb'
  }
];

export const MOCK_INNOVATION_ITEMS = [
  {
    id: 'inn-1',
    title: 'National Land Tech Innovation Grant 2026',
    category: 'Research Grant',
    funding: '₹25,00,000 per project',
    deadline: '15 Oct 2026',
    org: 'Department of Land Resources (DoLR)',
    description: 'Funding AI-assisted automated land record audit tools and satellite-based encroachment detection systems.',
    status: 'Applications Open'
  },
  {
    id: 'inn-2',
    title: 'SIH 2026 - National Land Governance Hackathon (PS 26019)',
    category: 'Hackathon Challenge',
    funding: '₹5,00,000 Prize Pool',
    deadline: '30 Sep 2026',
    org: 'MoRD & AICTE',
    description: 'Building innovative AI/ML tools for policy simulation, evidence synthesis, and spatial gap identification in land governance.',
    status: 'Active Challenge'
  },
  {
    id: 'inn-3',
    title: 'State Pilot: Automated Drone Cadastral Vector Verification',
    category: 'Pilot Project',
    funding: 'State Sponsored Pilot',
    deadline: 'Rolling Basis',
    org: 'Revenue Department, Govt of Telangana & DoLR',
    description: 'Trial deployment of automated edge-AI processing for real-time parcel boundary generation from ortho-rectified drone images.',
    status: 'Under Review'
  }
];
