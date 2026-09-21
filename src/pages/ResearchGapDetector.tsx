import React, { useState } from 'react';
import { Sparkles, Search, AlertCircle } from 'lucide-react';

export const ResearchGapDetector: React.FC = () => {
  const [topic, setTopic] = useState('Climate-resilient land governance');

  const coverageData = [
    { category: 'Climate + Agriculture', coverage: 78, status: 'Well Researched', color: 'bg-emerald-600' },
    { category: 'Climate + Urban Planning', coverage: 62, status: 'Moderate Coverage', color: 'bg-blue-600' },
    { category: 'Climate + Land Governance', coverage: 34, status: 'Significant Gap', color: 'bg-amber-600' },
    { category: 'Climate + Policy Evaluation', coverage: 18, status: 'Critical Research Void', color: 'bg-rose-600' },
  ];

  const gapCards = [
    {
      title: 'District-Level Climate-Resilient Land Planning Frameworks',
      priority: 'High Priority',
      description: 'Lack of localized empirical studies evaluating revenue administration guidelines for coastal district zoning under extreme weather events.',
      potentialImpact: 'Enables targeted disaster resilience policies for 42 vulnerable coastal districts.',
      recommendedMethods: 'Spatial GIS overlay + Local Cadastral Revenue Audit'
    },
    {
      title: 'Integration of Climate and Land-Use Indicators into ULPIN Schema',
      priority: 'High Priority',
      description: 'Current 14-digit Bhu-Aadhaar metadata lacks standardized eco-sensitivity and flood-basin hazard tags.',
      potentialImpact: 'Unifies land title verification with national disaster management databases.',
      recommendedMethods: 'Interoperable Data Standard Workshop + Pilot Schema Integration'
    },
    {
      title: 'Longitudinal Policy Impact Measurement of Farmland Protection Acts',
      priority: 'Medium Priority',
      description: 'Scarcity of multi-decadal econometric studies assessing real-world compliance of state non-agricultural conversion restrictions.',
      potentialImpact: 'Provides empirical feedback to state revenue departments on policy leakage.',
      recommendedMethods: 'Multi-Temporal Landsat Image Analytics + Revenue Board Case Studies'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-rose-700 uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>AI-Driven Literature Synthesis</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Research Gap Detector
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Analyze literature coverage density across domain intersections to discover under-researched policy topics and data blindspots.
        </p>
      </div>

      {/* Topic Query Box */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Target Domain / Research Topic Query
        </label>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full pl-11 pr-32 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
            placeholder="e.g. Climate-resilient land governance, Peri-urban zoning..."
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md transition-colors">
            Detect Gaps
          </button>
        </div>
      </div>

      {/* Coverage Visualization */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Indexed Research Coverage Breakdown</h3>
            <p className="text-xs text-slate-500">Coverage percentage across thematic domain intersections</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded">
            Domain: {topic}
          </span>
        </div>

        <div className="space-y-4">
          {coverageData.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-800">{item.category}</span>
                <div className="space-x-2">
                  <span className="text-slate-500 font-medium">{item.coverage}% Indexed</span>
                  <span className={`font-bold ${item.coverage < 40 ? 'text-rose-600' : 'text-emerald-700'}`}>
                    ({item.status})
                  </span>
                </div>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} transition-all duration-500`}
                  style={{ width: `${item.coverage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Potential Research Gaps Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">Potential Research Gaps Identified</h3>
            <p className="text-xs text-slate-500">Unaddressed research directions recommended for grant funding & academic policy labs</p>
          </div>
          <span className="text-[10px] bg-amber-100 text-amber-900 px-2.5 py-1 rounded font-semibold border border-amber-200">
            AI-Assisted Prototype Suggestions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {gapCards.map((gap, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-bold text-[10px]">
                    {gap.priority}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">GAP-{idx + 1}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-2 leading-snug">
                  {gap.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {gap.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px]">
                <div>
                  <span className="font-bold text-slate-700">Expected Policy Impact: </span>
                  <span className="text-slate-600">{gap.potentialImpact}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-700">Suggested Methodology: </span>
                  <span className="text-emerald-700 font-medium">{gap.recommendedMethods}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prototype Advisory */}
      <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center space-x-2">
        <AlertCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
        <span>
          <strong>Notice:</strong> Research gap analysis displays AI-assisted prototype suggestions based on indexed sample resources for SIH 2026 PS 26019 demonstration.
        </span>
      </div>
    </div>
  );
};
