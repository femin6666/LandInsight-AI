import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Layers,
  Map,
  BarChart3,
  Sliders,
  Sparkles,
  Lightbulb,
  Settings,
  User,
  Building2,
  ExternalLink
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Research Hub', path: '/research-hub', icon: BookOpen },
  { name: 'Evidence Explorer', path: '/evidence-explorer', icon: Layers },
  { name: 'GIS Explorer', path: '/gis-explorer', icon: Map, badge: 'DEMO' },
  { name: 'Policy Analytics', path: '/policy-analytics', icon: BarChart3 },
  { name: 'Policy Simulator', path: '/policy-simulator', icon: Sliders, badge: 'AI' },
  { name: 'Research Gap Detector', path: '/gap-detector', icon: Sparkles },
  { name: 'Innovation Hub', path: '/innovation-hub', icon: Lightbulb },
];

const bottomNavItems: NavItem[] = [
  { name: 'Settings', path: '/settings', icon: Settings },
  { name: 'User Profile', path: '/profile', icon: User },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 z-30 border-r border-slate-800 shadow-xl select-none">
      {/* Platform Branding Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/60">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-700/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shadow-inner">
            <Building2 className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold text-slate-100 tracking-tight text-lg">LandInsight</span>
              <span className="text-xs font-semibold px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded">AI</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide">
              DoLR | MoRD, Govt of India
            </p>
          </div>
        </div>
        <div className="mt-2.5 px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700/60 flex items-center justify-between">
          <span className="text-[10px] font-mono font-medium text-slate-400">SIH 2026 • PS 26019</span>
          <span className="text-[9px] font-semibold uppercase px-1.5 py-0.2 bg-indigo-500/20 text-indigo-300 rounded">
            Prototype
          </span>
        </div>
      </div>

      {/* Main Navigation links */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          Platform Navigation
        </div>
        {mainNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/70'
              }`
            }
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{item.name}</span>
            </div>
            {item.badge && (
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Bottom Profile & Settings */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/40 space-y-1">
        <div className="px-3 pb-1 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          Account & Portal
        </div>
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/70'
              }`
            }
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            <span>{item.name}</span>
          </NavLink>
        ))}

        {/* Official Dept Tag */}
        <div className="mt-3 p-2.5 bg-slate-900/90 rounded-md border border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
          <span className="truncate">Dept. of Land Resources</span>
          <ExternalLink className="w-3 h-3 text-slate-500" />
        </div>
      </div>
    </aside>
  );
};
