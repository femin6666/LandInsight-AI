import React from 'react';
import { MOCK_INNOVATION_ITEMS } from '../data/mockData';
import { Lightbulb, Award, Calendar, Building, Rocket, ArrowUpRight } from 'lucide-react';

export const InnovationHub: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
          <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
          <span>Policy & Tech Incubator</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Land Governance Innovation Hub
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Collaborative ecosystem connecting academic researchers, civic tech innovators, and state revenue departments for pilot land governance solutions.
        </p>
      </div>

      {/* Featured Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-xs font-mono font-bold uppercase">
            SIH 2026 Active Challenge
          </span>
          <h2 className="text-xl font-bold">PS 26019: National Land Governance Innovation Challenge</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            The Department of Land Resources (DoLR) invites university research teams and startups to deploy AI models for automated cadastral boundary audits and spatial policy simulation.
          </p>
          <div className="flex items-center space-x-4 pt-2 text-xs font-medium text-slate-400">
            <span>Prize Pool: ₹5,00,000</span>
            <span>•</span>
            <span>Deadline: 30 September 2026</span>
          </div>
        </div>

        <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg shadow-md transition-all flex items-center space-x-2 flex-shrink-0">
          <Rocket className="w-4 h-4" />
          <span>Submit Proposal</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <Award className="w-6 h-6 text-emerald-600 mb-2" />
          <h4 className="font-bold text-xs text-slate-900">Research Grants</h4>
          <p className="text-[10px] text-slate-500 mt-0.5">Up to ₹25 Lakhs per project</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <Rocket className="w-6 h-6 text-indigo-600 mb-2" />
          <h4 className="font-bold text-xs text-slate-900">State Pilots</h4>
          <p className="text-[10px] text-slate-500 mt-0.5">14 active state trials</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <Building className="w-6 h-6 text-purple-600 mb-2" />
          <h4 className="font-bold text-xs text-slate-900">Innovation Challenges</h4>
          <p className="text-[10px] text-slate-500 mt-0.5">Hackathons & SIH PS 26019</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <Calendar className="w-6 h-6 text-amber-600 mb-2" />
          <h4 className="font-bold text-xs text-slate-900">Collaborative Labs</h4>
          <p className="text-[10px] text-slate-500 mt-0.5">IITs, NITs & NITI Aayog</p>
        </div>
      </div>

      {/* Program Listings */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900">Open Innovation Programs</h3>

        <div className="space-y-4">
          {MOCK_INNOVATION_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px]">
                    {item.category}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 font-medium">{item.org}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600">{item.description}</p>

                <div className="flex items-center space-x-4 text-xs font-semibold text-slate-700 pt-1">
                  <span>Funding: <strong className="text-emerald-700">{item.funding}</strong></span>
                  <span>•</span>
                  <span>Deadline: <strong className="text-slate-900">{item.deadline}</strong></span>
                </div>
              </div>

              <div className="flex items-center space-x-3 flex-shrink-0">
                <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-md">
                  {item.status}
                </span>
                <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center space-x-1.5">
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
