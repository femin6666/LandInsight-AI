import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, Bell, Shield, ChevronDown, CheckCircle2, Info, Sparkles, LogOut, UserCheck } from 'lucide-react';

export const TopNav: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-20 px-6 flex items-center justify-between shadow-xs">
      {/* Left Search Bar */}
      <div className="flex items-center space-x-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Global Search: search research papers, DILRMP datasets, policy briefs, GIS layers..."
            className="w-full pl-9 pr-4 py-2 bg-slate-100/80 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right Controls & User Context */}
      <div className="flex items-center space-x-4">
        {/* Environment Badge */}
        <div className="hidden lg:flex items-center space-x-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-md text-[11px] font-medium">
          <Info className="w-3.5 h-3.5 text-amber-600" />
          <span>UI Prototype • Sample Data</span>
        </div>

        {/* Current Role Selector Badge */}
        <div
          onClick={() => navigate('/login')}
          className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 cursor-pointer border border-slate-200 rounded-lg text-xs font-medium text-slate-700 transition-colors"
          title="Click to Switch Role"
        >
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-slate-500 font-normal">Role:</span>
          <span className="font-semibold text-slate-800 truncate max-w-[140px]">{user.role}</span>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 relative focus:outline-none"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-4 text-slate-800 z-50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="font-bold text-xs text-slate-900">Notifications & Alerts</h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-medium">2 New</span>
              </div>
              <div className="mt-3 space-y-2.5 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-start space-x-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Research Gap Update</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">3 new datasets indexed under Peri-Urban Land Conversion 2026.</p>
                  </div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">GIS Layer Sync Complete</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">National Coastal Erosion Buffer Zone map updated.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-6 w-[1px] bg-slate-200"></div>

        {/* User Profile Pill & Dropdown */}
        <div className="relative">
          <div
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 cursor-pointer p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 text-emerald-400 font-bold flex items-center justify-center text-xs border border-emerald-500/40 shadow-xs">
              {user.avatar}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold text-slate-800 leading-tight">{user.name}</div>
              <div className="text-[10px] text-slate-500 font-medium truncate max-w-[120px]">{user.department}</div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-3 text-slate-800 z-50">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 mb-2">
                <div className="font-bold text-xs text-slate-900">{user.name}</div>
                <div className="text-[11px] text-emerald-700 font-semibold">{user.role}</div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">{user.email}</div>
              </div>

              <div className="space-y-1 text-xs">
                <button
                  onClick={() => { setShowUserMenu(false); navigate('/profile'); }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-md font-medium text-slate-700 flex items-center space-x-2"
                >
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span>View Full Profile</span>
                </button>

                <button
                  onClick={() => { setShowUserMenu(false); navigate('/login'); }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-md font-medium text-slate-700 flex items-center space-x-2"
                >
                  <Shield className="w-4 h-4 text-indigo-600" />
                  <span>Switch Role / Portal</span>
                </button>

                <div className="pt-1 border-t border-slate-100">
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-3 py-2 hover:bg-rose-50 text-rose-700 rounded-md font-semibold flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4 text-rose-600" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
