import React, { useState } from 'react';
import { Sliders, AlertCircle, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const PolicySimulator: React.FC = () => {
  // Scenario Control States
  const [urbanExpansion, setUrbanExpansion] = useState<number>(15);
  const [agConversion, setAgConversion] = useState<number>(8);
  const [infraGrowth, setInfraGrowth] = useState<number>(20);
  const [climateRisk, setClimateRisk] = useState<number>(25);

  // Calculated simulated outputs
  const simulatedUrbanLand = Math.round(30 + urbanExpansion * 0.8);
  const simulatedAgLand = Math.max(10, Math.round(55 - agConversion * 1.2 - urbanExpansion * 0.4));
  const simulatedClimateVuln = Math.round(40 + (urbanExpansion * 0.6) - (climateRisk * 0.7));
  const simulatedInfraDemand = Math.round(25 + infraGrowth * 1.1);

  const chartData = [
    { indicator: 'Urban Land Index', Before: 30, Scenario: simulatedUrbanLand },
    { indicator: 'Agricultural Share %', Before: 55, Scenario: simulatedAgLand },
    { indicator: 'Climate Vulnerability', Before: 40, Scenario: simulatedClimateVuln },
    { indicator: 'Infra Demand Score', Before: 25, Scenario: simulatedInfraDemand },
  ];

  const handleReset = () => {
    setUrbanExpansion(10);
    setAgConversion(5);
    setInfraGrowth(15);
    setClimateRisk(20);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
          <Sliders className="w-3.5 h-3.5 text-amber-600" />
          <span>Interactive Policy Sandbox</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Policy Scenario Simulator
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Explore hypothetical land-governance scenarios using available indicators and model multi-sectoral impacts.
        </p>
      </div>

      {/* Main Grid: Controls + Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Scenario Controls */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5">
              <div>
                <h3 className="text-base font-bold text-slate-900">Scenario Parameters</h3>
                <p className="text-xs text-slate-500">Adjust policy variables to test impact</p>
              </div>
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors text-xs font-semibold flex items-center space-x-1"
                title="Reset Parameters"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Slider 1: Urban Expansion */}
            <div className="space-y-4 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex justify-between items-center mb-1.5 font-bold">
                  <span className="text-slate-800">Urban Expansion Rate</span>
                  <span className="text-emerald-700 font-mono text-xs">{urbanExpansion}%</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                  <span>Current Baseline: 10%</span>
                  <span>Scenario Value: {urbanExpansion}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={urbanExpansion}
                  onChange={(e) => setUrbanExpansion(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              {/* Slider 2: Agricultural Conversion */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex justify-between items-center mb-1.5 font-bold">
                  <span className="text-slate-800">Agricultural Land Conversion</span>
                  <span className="text-amber-700 font-mono text-xs">{agConversion}%</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                  <span>Current Baseline: 5%</span>
                  <span>Scenario Value: {agConversion}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={agConversion}
                  onChange={(e) => setAgConversion(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>

              {/* Slider 3: Infrastructure Growth */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex justify-between items-center mb-1.5 font-bold">
                  <span className="text-slate-800">Infrastructure Growth Target</span>
                  <span className="text-indigo-700 font-mono text-xs">{infraGrowth}%</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                  <span>Current Baseline: 15%</span>
                  <span>Scenario Value: {infraGrowth}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={infraGrowth}
                  onChange={(e) => setInfraGrowth(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>

              {/* Slider 4: Climate Risk Buffer */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex justify-between items-center mb-1.5 font-bold">
                  <span className="text-slate-800">Climate Risk Buffer Enforcement</span>
                  <span className="text-rose-700 font-mono text-xs">{climateRisk}%</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                  <span>Current Baseline: 20%</span>
                  <span>Scenario Value: {climateRisk}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={climateRisk}
                  onChange={(e) => setClimateRisk(Number(e.target.value))}
                  className="w-full accent-rose-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Scenario Insight Notice */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="font-bold block text-amber-950">Scenario Insight Notice</strong>
                <p className="text-[11px] mt-0.5 text-amber-800 leading-relaxed">
                  This is a simulated scenario using demonstration data. It is not an official policy prediction or binding government mandate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Analysis & Chart */}
        <div className="lg:col-span-7 space-y-6">
          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Urban Land Index</span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-xl font-extrabold text-slate-400 line-through">30</span>
                <span className="text-2xl font-extrabold text-emerald-700">{simulatedUrbanLand}</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold">
                +{simulatedUrbanLand - 30} pts expansion impact
              </span>
            </div>

            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Agricultural Share %</span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-xl font-extrabold text-slate-400 line-through">55%</span>
                <span className="text-2xl font-extrabold text-amber-700">{simulatedAgLand}%</span>
              </div>
              <span className="text-[10px] text-amber-600 font-semibold">
                {simulatedAgLand < 55 ? `${simulatedAgLand - 55}% retention drop` : 'Preserved'}
              </span>
            </div>

            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Climate Vulnerability</span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-xl font-extrabold text-slate-400 line-through">40</span>
                <span className={`text-2xl font-extrabold ${simulatedClimateVuln > 40 ? 'text-rose-700' : 'text-emerald-700'}`}>
                  {simulatedClimateVuln}
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500">
                {simulatedClimateVuln > 40 ? 'Increased coastal risk' : 'Buffer mitigated risk'}
              </span>
            </div>

            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Infra Demand Score</span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-xl font-extrabold text-slate-400 line-through">25</span>
                <span className="text-2xl font-extrabold text-indigo-700">{simulatedInfraDemand}</span>
              </div>
              <span className="text-[10px] text-indigo-600 font-semibold">
                +{simulatedInfraDemand - 25} pts capacity required
              </span>
            </div>
          </div>

          {/* Recharts Comparison Graph */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">BEFORE vs SCENARIO Comparison</h3>
                <p className="text-xs text-slate-500">Side-by-side indicator response model</p>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                Live Simulation
              </span>
            </div>

            <div className="h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="indicator" tick={{ fontSize: 11, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="Before" name="Current Baseline" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Scenario" name="Simulated Scenario" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
