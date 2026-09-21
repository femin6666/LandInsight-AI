import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Building2, Shield, Lock, Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('ananya.sharma@dolr.gov.in');
  const [password, setPassword] = useState('••••••••••••');
  const [role, setRole] = useState('Senior Policy Researcher');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = email.split('@')[0].replace('.', ' ').replace(/\b\w/g, c => c.toUpperCase());
    login(role, name || 'Dr. Ananya Sharma', email);
    navigate('/');
  };

  const handleQuickDemo = (demoRole: string, demoName: string, demoEmail: string) => {
    login(demoRole, demoName, demoEmail);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 md:p-8 font-sans selection:bg-emerald-500 selection:text-white">
      <div className="w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Platform Branding & Highlights */}
        <div className="lg:col-span-5 p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
          <div>
            {/* Dept Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold shadow-inner">
                <Building2 className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-white">LandInsight AI</h2>
                <p className="text-[11px] text-slate-400 font-medium">DoLR | Ministry of Rural Development</p>
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-md text-xs font-semibold mb-6">
              <span>SIH 2026 • PS 26019 Prototype</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white mb-3">
              National Digital Platform for Evidence-Based Land Governance
            </h1>

            <p className="text-xs text-slate-300 leading-relaxed mb-8">
              Unifying spatial GIS vector registries, DILRMP cadastral mapping, peer-reviewed policy research, and AI-assisted land scenario simulation.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Indexed 2,400+ peer-reviewed land governance resources & datasets</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Live multi-temporal satellite spatial layer inspection (Sentinel-2 & Bhuvan)</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Simulated land-use change scenario simulator & policy risk forecasting</span>
              </div>
            </div>
          </div>

          {/* Dept Footer Note */}
          <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
            Official prototype developed for Smart India Hackathon 2026. Department of Land Resources, Govt of India.
          </div>
        </div>

        {/* Right Column: Authentication Form */}
        <div className="lg:col-span-7 p-8 bg-slate-900 text-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Government Portal Login</h3>
                <p className="text-xs text-slate-400">Enter your credentials or select a quick demonstration role</p>
              </div>
              <Shield className="w-6 h-6 text-emerald-500" />
            </div>

            {/* Quick Demo Login Bar for SIH Evaluators */}
            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 mb-6 space-y-2">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-emerald-400 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  SIH Evaluator One-Click Login
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Bypass Login</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => handleQuickDemo('Senior Policy Researcher', 'Dr. Ananya Sharma', 'ananya.sharma@dolr.gov.in')}
                  className="p-2 bg-slate-900 hover:bg-emerald-950 border border-emerald-500/30 hover:border-emerald-500/60 rounded text-left transition-all"
                >
                  <div className="font-bold text-white text-[11px]">Senior Researcher</div>
                  <div className="text-[10px] text-slate-400 truncate">DoLR Policy Cell</div>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickDemo('District Revenue Collector', 'Rajesh Kumar IAS', 'r.kumar@nic.in')}
                  className="p-2 bg-slate-900 hover:bg-indigo-950 border border-indigo-500/30 hover:border-indigo-500/60 rounded text-left transition-all"
                >
                  <div className="font-bold text-white text-[11px]">District Collector</div>
                  <div className="text-[10px] text-slate-400 truncate">Revenue Admin</div>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickDemo('NITI Aayog Policy Analyst', 'Priya Venkatesh', 'priya.v@niti.gov.in')}
                  className="p-2 bg-slate-900 hover:bg-purple-950 border border-purple-500/30 hover:border-purple-500/60 rounded text-left transition-all"
                >
                  <div className="font-bold text-white text-[11px]">NITI Analyst</div>
                  <div className="text-[10px] text-slate-400 truncate">Urban Governance</div>
                </button>
              </div>
            </div>

            {/* Standard Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Role / Designation</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-medium focus:outline-none focus:border-emerald-500"
                >
                  <option value="Senior Policy Researcher">Senior Policy Researcher (DoLR Cell)</option>
                  <option value="District Revenue Collector">District Revenue Collector / Magistrate</option>
                  <option value="NITI Aayog Policy Analyst">NITI Aayog Policy Analyst</option>
                  <option value="Academic Fellow (IIT/LBSNAA)">Academic Fellow (IIT / LBSNAA)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Institutional Email / Gov ID</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    placeholder="name@gov.in or name@nic.in"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Sign In to LandInsight Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* MeriPahchaan SSO Option */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <button
              onClick={() => handleQuickDemo('Senior Policy Researcher', 'Dr. Ananya Sharma', 'ananya.sharma@dolr.gov.in')}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Shield className="w-3.5 h-3.5 text-indigo-400" />
              <span>Sign in with MeriPahchaan (National SSO)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
