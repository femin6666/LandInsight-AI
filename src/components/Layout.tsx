import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="pl-64 flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
        
        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white py-4 px-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div>
            <span className="font-semibold text-slate-700">LandInsight AI Platform</span> • Department of Land Resources (DoLR), Ministry of Rural Development
          </div>
          <div className="flex items-center space-x-4 text-[11px] text-slate-400">
            <span>SIH 2026 Problem Statement PS 26019</span>
            <span>•</span>
            <span>Frontend Prototype v1.0</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
