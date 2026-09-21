import React, { useState } from 'react';
import { MOCK_RESEARCH_ITEMS } from '../data/mockData';
import type { ResearchItem } from '../data/mockData';
import { EvidenceModal } from '../components/EvidenceModal';
import { Search, BookOpen, Tag, ArrowUpRight, Award } from 'lucide-react';

export const ResearchHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedEvidenceItem, setSelectedEvidenceItem] = useState<ResearchItem | null>(null);

  const filteredItems = MOCK_RESEARCH_ITEMS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesTopic = selectedTopic === 'All' || item.category === selectedTopic;
    return matchesSearch && matchesType && matchesTopic;
  });

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>Knowledge Discovery Engine</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Research & Knowledge Hub
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Explore peer-reviewed publications, state datasets, official policy documents, and case studies on land governance.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-4">
        {/* Main Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search research, policies, datasets and case studies (e.g. DILRMP, cadastral mapping, coastal tenure)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Resource Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium focus:outline-none focus:border-emerald-500"
            >
              <option value="All">All Types</option>
              <option value="Paper">Research Paper</option>
              <option value="Dataset">Dataset</option>
              <option value="Policy Doc">Policy Document</option>
              <option value="Case Study">Case Study</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Topic</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium focus:outline-none focus:border-emerald-500"
            >
              <option value="All">All Topics</option>
              <option value="Land Governance & Digitization">Land Digitization</option>
              <option value="Urban Expansion & Zoning">Urban Expansion</option>
              <option value="Climate & Adaptation Policy">Climate Adaptation</option>
              <option value="Land Records Technology">Records Tech</option>
              <option value="Gender & Equitable Governance">Gender Equality</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">State / UT</label>
            <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium focus:outline-none">
              <option value="All">All States (Pan-India)</option>
              <option value="TN">Tamil Nadu</option>
              <option value="KA">Karnataka</option>
              <option value="MH">Maharashtra</option>
              <option value="UP">Uttar Pradesh</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Year</label>
            <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium focus:outline-none">
              <option value="All">All Years (2020-2026)</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Organization</label>
            <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium focus:outline-none">
              <option value="All">All Organizations</option>
              <option value="DoLR">DoLR / MoRD</option>
              <option value="NITI">NITI Aayog</option>
              <option value="IIT">IIT / Academic</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div>
          Showing <span className="font-bold text-slate-800">{filteredItems.length}</span> research resources
        </div>
        <div className="flex items-center space-x-2">
          <span>Sort by:</span>
          <span className="font-semibold text-slate-800 cursor-pointer hover:underline">Relevance Score ↓</span>
        </div>
      </div>

      {/* Results Grid */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-center flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[11px]">
                  {item.type}
                </span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium">
                  {item.category}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">{item.organization}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">{item.year}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="inline-flex items-center space-x-1 px-2 py-0.5 bg-slate-50 text-slate-600 border border-slate-200 rounded text-[10px]">
                    <Tag className="w-2.5 h-2.5 text-slate-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Status & Action Box */}
            <div className="md:w-56 flex flex-row md:flex-col justify-between items-end border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-5 space-y-2">
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 flex items-center justify-end space-x-1">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.relevance}% Match</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">{item.credibility}</div>
              </div>

              <button
                onClick={() => setSelectedEvidenceItem(item)}
                className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
              >
                <span>View Evidence</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Evidence Modal */}
      <EvidenceModal
        item={selectedEvidenceItem}
        onClose={() => setSelectedEvidenceItem(null)}
      />
    </div>
  );
};
