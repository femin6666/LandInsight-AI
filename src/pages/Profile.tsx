import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, CheckCircle, Shield } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in pb-12 max-w-4xl">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
          <User className="w-3.5 h-3.5 text-slate-500" />
          <span>User Credentials</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          User Profile
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Authenticated portal profile and institutional access rights.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pb-6 border-b border-slate-200">
          <div className="w-20 h-20 rounded-full bg-slate-900 text-emerald-400 font-extrabold text-xl flex items-center justify-center border-2 border-emerald-500 shadow-md">
            {user.avatar}
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-xs text-emerald-700 font-bold mt-0.5 flex items-center justify-center sm:justify-start">
              <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              {user.role}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {user.department}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Institutional Email</span>
            <span className="font-semibold text-slate-800">{user.email}</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Location / Office</span>
            <span className="font-semibold text-slate-800">CGO Complex, New Delhi, India</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Primary Focus Area</span>
            <span className="font-semibold text-slate-800">Cadastral Digitization & DILRMP Analytics</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Portal Status</span>
            <span className="font-semibold text-emerald-700">Authenticated & Active Session</span>
          </div>
        </div>
      </div>
    </div>
  );
};
