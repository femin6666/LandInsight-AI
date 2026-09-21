import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MOCK_STATS,
  MOCK_TRENDS_DATA,
  MOCK_SNAPSHOTS,
  MOCK_RESEARCH_ITEMS
} from '../data/mockData';
import type { ResearchItem } from '../data/mockData';
import { EvidenceModal } from '../components/EvidenceModal';
import {
  BookOpen,
  Map,
  BarChart3,
  Sliders,
  Sparkles,
  ArrowUpRight,
  FileText,
  ChevronRight,
  Search
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedEvidenceItem, setSelectedEvidenceItem] = useState<ResearchItem | null>(null);

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>National Digital Governance Platform</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            National Land Governance Intelligence
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Research, evidence and policy insights for informed land governance.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate('/research-hub')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Research</span>
          </button>
          <button
            onClick={() => navigate('/policy-simulator')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulate Policy</span>
          </button>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {MOCK_STATS.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {stat.title}
              </span>
              <FileText className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {stat.count.toLocaleString()}
            </div>
            <div className="mt-2 flex items-center text-xs space-x-1.5">
              <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
                {stat.change}
              </span>
              <span className="text-slate-400">({stat.period})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Second Section: Chart + Snapshots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Research & Policy Trends Chart */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">Research & Policy Trends</h2>
              <p className="text-xs text-slate-500">Indexed publications, policy briefs & spatial datasets over time</p>
            </div>
            <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
              2020 – 2026
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_TRENDS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPub" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPolicy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Area type="monotone" dataKey="publications" name="Research Papers" stroke="#059669" fillOpacity={1} fill="url(#colorPub)" strokeWidth={2} />
                <Area type="monotone" dataKey="policyBriefs" name="Policy Briefs" stroke="#2563EB" fillOpacity={1} fill="url(#colorPolicy)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RIGHT: Land Governance Snapshot */}
        <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-slate-900">Land Governance Snapshot</h2>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                National Indicators
              </span>
            </div>

            <div className="space-y-3">
              {MOCK_SNAPSHOTS.map((snap, idx) => (
                <div key={idx} className="p-3 bg-slate-50/80 rounded-lg border border-slate-200/80 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-slate-800">{snap.title}</span>
                      <span className="text-[10px] text-slate-400">({snap.category})</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{snap.subtext}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-slate-900 block">{snap.metric}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Trend: {snap.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/policy-analytics')}
            className="mt-4 w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg flex items-center justify-center space-x-1.5 transition-colors"
          >
            <span>View Detailed Analytics</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Third Section: Recent Research */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-bold text-slate-900">Recent Research</h2>
            <p className="text-xs text-slate-500">Newly indexed peer-reviewed studies and land policy documents</p>
          </div>
          <button
            onClick={() => navigate('/research-hub')}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
          >
            <span>View All Research ({MOCK_STATS[0].count})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MOCK_RESEARCH_ITEMS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/50 rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px]">
                    {item.category}
                  </span>
                  <span className="text-slate-400 font-medium">{item.year}</span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 line-clamp-2 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] text-slate-400">Relevance:</span>
                    <span className="font-bold text-emerald-700">{item.relevance}%</span>
                  </div>
                  <button
                    onClick={() => setSelectedEvidenceItem(item)}
                    className="px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded text-[11px] font-semibold flex items-center space-x-1 transition-colors"
                  >
                    <span>View Evidence</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Section: Quick Actions */}
      <div className="bg-slate-900 rounded-xl p-6 text-white shadow-md">
        <div className="mb-4">
          <h2 className="text-base font-bold text-white">Quick Actions</h2>
          <p className="text-xs text-slate-400">Fast access to key land governance modules</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <button
            onClick={() => navigate('/research-hub')}
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-left transition-colors group"
          >
            <BookOpen className="w-5 h-5 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Search Research</div>
            <div className="text-[10px] text-slate-400">Browse 2,400+ papers</div>
          </button>

          <button
            onClick={() => navigate('/gis-explorer')}
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-left transition-colors group"
          >
            <Map className="w-5 h-5 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Explore GIS</div>
            <div className="text-[10px] text-slate-400">Spatial land maps</div>
          </button>

          <button
            onClick={() => navigate('/policy-analytics')}
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-left transition-colors group"
          >
            <BarChart3 className="w-5 h-5 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Analyze Policy</div>
            <div className="text-[10px] text-slate-400">Track indicator metrics</div>
          </button>

          <button
            onClick={() => navigate('/policy-simulator')}
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-left transition-colors group"
          >
            <Sliders className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Run Scenario</div>
            <div className="text-[10px] text-slate-400">Simulate land choices</div>
          </button>

          <button
            onClick={() => navigate('/gap-detector')}
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-left transition-colors group"
          >
            <Sparkles className="w-5 h-5 text-rose-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Find Research Gaps</div>
            <div className="text-[10px] text-slate-400">AI gap discovery</div>
          </button>
        </div>
      </div>

      {/* Interactive Evidence Modal */}
      <EvidenceModal
        item={selectedEvidenceItem}
        onClose={() => setSelectedEvidenceItem(null)}
      />
    </div>
  );
};
