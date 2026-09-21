import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, Monitor } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12 max-w-4xl">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
          <SettingsIcon className="w-3.5 h-3.5 text-slate-500" />
          <span>System & Preferences</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Platform Settings
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Manage interface preferences, notification triggers, and data index synchronization rules.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs divide-y divide-slate-200">
        {/* Section 1: Role & Access */}
        <div className="p-6 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Role & Department Authorization</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Default User Role</label>
              <input
                type="text"
                disabled
                value="Senior Policy Researcher (DoLR Cell)"
                className="w-full p-2 bg-slate-100 border border-slate-200 rounded text-slate-600 font-medium"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Access Level</label>
              <input
                type="text"
                disabled
                value="National Level Policy Inspector (Level 4)"
                className="w-full p-2 bg-slate-100 border border-slate-200 rounded text-slate-600 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Notifications */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
            <Bell className="w-4 h-4 text-indigo-600" />
            <span>Alert & Notification Triggers</span>
          </div>
          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-slate-800 font-medium">New Research Gap Alerts</span>
              <input type="checkbox" defaultChecked className="accent-emerald-600 w-4 h-4" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-slate-800 font-medium">GIS Boundary Override Warnings</span>
              <input type="checkbox" defaultChecked className="accent-emerald-600 w-4 h-4" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-slate-800 font-medium">Weekly Policy Analytics Digest</span>
              <input type="checkbox" defaultChecked className="accent-emerald-600 w-4 h-4" />
            </label>
          </div>
        </div>

        {/* Section 3: Interface & Display */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
            <Monitor className="w-4 h-4 text-emerald-600" />
            <span>Interface Preferences</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Default Map Renderer</label>
              <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded text-slate-800">
                <option>OpenStreetMap Open Topology (Default)</option>
                <option>Satellite Vector Overlay</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Chart Color Theme</label>
              <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded text-slate-800">
                <option>Emerald & Slate (Government Standard)</option>
                <option>High Contrast Accessibility</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
