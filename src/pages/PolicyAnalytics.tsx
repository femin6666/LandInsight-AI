import React from 'react';
import { BarChart3, TrendingUp, Sparkles, Award, ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const PolicyAnalytics: React.FC = () => {
  const districtData = [
    { district: 'Kanchipuram', agPressure: 'High (78%)', urbanGrowth: '5.4%', climateRisk: '0.68', status: 'Priority Monitor' },
    { district: 'Coimbatore Rural', agPressure: 'Moderate (52%)', urbanGrowth: '3.8%', climateRisk: '0.42', status: 'On Track' },
    { district: 'Thanjavur Delta', agPressure: 'Severe (89%)', urbanGrowth: '1.2%', climateRisk: '0.84', status: 'Protection Zone' },
    { district: 'Vellore Industrial', agPressure: 'Moderate (48%)', urbanGrowth: '4.6%', climateRisk: '0.51', status: 'Monitored' },
    { district: 'Madurai East', agPressure: 'Low (34%)', urbanGrowth: '2.9%', climateRisk: '0.38', status: 'Stable' },
  ];

  const implementationData = [
    { phase: 'ULPIN Bhu-Aadhaar Rollout', target: 100, achieved: 88 },
    { phase: 'Drone Cadastral Mapping', target: 100, achieved: 74 },
    { phase: 'Dispute Settlement Modernization', target: 100, achieved: 62 },
    { phase: 'Wetland Buffer Enforcement', target: 100, achieved: 45 },
    { phase: 'Digital RoR Integration', target: 100, achieved: 93 },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-purple-700 uppercase tracking-wider mb-1">
          <BarChart3 className="w-3.5 h-3.5 text-purple-600" />
          <span>Evidence-Based Governance Metrics</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Policy Analytics & Indicators
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Quantitative tracking of land-use change, urban pressure, agrarian preservation, and district-level implementation velocity.
        </p>
      </div>

      {/* Analytical Summary Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-xl p-6 shadow-md border border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              AI-Assisted Analytical Summary
            </span>
          </div>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
            Demo Synthesized Insights
          </span>
        </div>
        <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-4xl">
          "Indexed land records from Q1-Q3 2026 indicate a <strong>14.2% acceleration</strong> in farmland-to-commercial conversion across southern industrial transport corridors. While <strong>ULPIN Bhu-Aadhaar digitisation</strong> has reduced title ambiguity by 34%, coastal deltaic districts continue to experience compounding climate risk factors that require targeted zoning buffer enforcement."
        </p>
      </div>

      {/* Key Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-bold uppercase mb-1">Land-Use Change Index</div>
          <div className="text-2xl font-extrabold text-slate-900">+3.4%</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Shift toward mixed commercial</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-bold uppercase mb-1">Agricultural Pressure</div>
          <div className="text-2xl font-extrabold text-slate-900">67.8 / 100</div>
          <div className="text-[11px] text-amber-600 font-semibold mt-1 flex items-center">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Moderate farmland diversion</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-bold uppercase mb-1">Climate Resilience Score</div>
          <div className="text-2xl font-extrabold text-slate-900">0.72</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+0.05 post wetland protection</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-bold uppercase mb-1">Policy Rollout Rate</div>
          <div className="text-2xl font-extrabold text-slate-900">72.4%</div>
          <div className="text-[11px] text-indigo-600 font-semibold mt-1 flex items-center">
            <Award className="w-3.5 h-3.5" />
            <span>26 States active</span>
          </div>
        </div>
      </div>

      {/* Chart & Implementation Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Implementation Bar Chart */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-1">Policy Implementation Completion %</h3>
          <p className="text-xs text-slate-500 mb-4">Target vs Achieved progress across core DoLR initiatives</p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={implementationData} margin={{ top: 10, right: 10, left: -20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="phase" tick={{ fontSize: 10, fill: '#64748b' }} interval={0} angle={-15} textAnchor="end" />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="achieved" name="Achieved %" fill="#059669" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* District Comparison Table */}
        <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-1">District Comparison Matrix</h3>
            <p className="text-xs text-slate-500 mb-4">Cross-district evaluation of land stress and vulnerability</p>

            <div className="space-y-2.5">
              {districtData.map((d, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-800">{d.district}</div>
                    <div className="text-[10px] text-slate-500">Ag Pressure: {d.agPressure}</div>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-slate-900 block">{d.urbanGrowth} urban growth</span>
                    <span className="text-[10px] text-emerald-700 font-bold">{d.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold">
            Generate District Report PDF
          </button>
        </div>
      </div>
    </div>
  );
};
