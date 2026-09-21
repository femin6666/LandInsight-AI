import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ResearchItem } from '../data/mockData';
import {
  X,
  FileText,
  Database,
  MapPin,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
  Map,
  BarChart3,
  Download
} from 'lucide-react';

interface EvidenceModalProps {
  item: ResearchItem | null;
  onClose: () => void;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({ item, onClose }) => {
  const navigate = useNavigate();

  if (!item) return null;

  const handleOpenGis = () => {
    onClose();
    navigate('/gis-explorer');
  };

  const handleOpenAnalytics = () => {
    onClose();
    navigate('/policy-analytics');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 bg-slate-900 text-white flex items-start justify-between border-b border-slate-800">
          <div className="space-y-1 pr-6">
            <div className="flex items-center space-x-2 text-xs">
              <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded font-semibold text-[11px]">
                {item.type} Evidence Chain
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300 font-medium">{item.organization}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400 font-medium">{item.year}</span>
            </div>
            <h2 className="text-lg font-bold text-white leading-snug">{item.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable Evidence Chain */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* Top Meta Summary */}
          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Indexed Relevance & Integrity</span>
              <div className="flex items-center space-x-2 mt-0.5">
                <span className="text-lg font-extrabold text-emerald-900">{item.relevance}% Match Score</span>
                <span className="text-emerald-700">•</span>
                <span className="text-xs font-bold text-emerald-800 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                  {item.credibility}
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-md font-semibold">
              ID: {item.id}
            </span>
          </div>

          {/* Abstract / Summary */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Empirical Summary</h3>
            <p className="text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              {item.description}
            </p>
          </div>

          {/* 5-Step Visual Evidence Chain Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Continuous Evidence Validation Lineage
            </h3>

            <div className="space-y-3">
              {/* Step 1 */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase">
                    <span>1. Peer-Reviewed Paper / Primary Study</span>
                    <span className="text-emerald-700">Verified Citation</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mt-0.5">{item.title}</h4>
                  <p className="text-slate-600 text-[11px] mt-1">Published in <em>{item.source}</em> ({item.year})</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center flex-shrink-0">
                  <Database className="w-4 h-4 text-blue-700" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase">
                    <span>2. Linked Spatial Dataset Schema</span>
                    <span className="font-mono text-blue-700">ULPIN-14-8027-3910</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mt-0.5">DILRMP Bhu-Aadhaar Vector Registry</h4>
                  <p className="text-slate-600 text-[11px] mt-1">
                    Geo-referenced parcel vectors covering 4.2M rural titles across state revenue databases.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 font-bold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-purple-700" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase">
                    <span>3. GIS Satellite Layer Proof</span>
                    <span className="text-purple-700">Sentinel-2 & ISRO Bhuvan</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mt-0.5">Multi-Temporal Change Overlay</h4>
                  <p className="text-slate-600 text-[11px] mt-1">
                    0.5m ortho-rectified resolution verifying zero boundary encroachment along priority corridors.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase">
                    <span>4. Policy Formulation Gazette</span>
                    <span className="text-amber-800">DoLR Draft Directive</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mt-0.5">National Land Reform Policy Framework 2026</h4>
                  <p className="text-slate-600 text-[11px] mt-1">
                    Inter-ministerial provisions enforcing mandatory digital RoR verification prior to land conversion.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-300 flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center text-[10px] text-emerald-800 font-bold uppercase">
                    <span>5. Actionable Directive Result</span>
                    <span className="text-emerald-900">Live Policy Signal</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mt-0.5">Automated Revenue Department Freeze Directive</h4>
                  <p className="text-slate-700 text-[11px] mt-1">
                    Real-time flag preventing illegal non-agricultural classification changes in priority agricultural zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleOpenGis}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              <Map className="w-3.5 h-3.5 text-blue-400" />
              <span>Explore in GIS Map</span>
            </button>
            <button
              onClick={handleOpenAnalytics}
              className="px-3 py-1.5 bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 font-semibold rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              <BarChart3 className="w-3.5 h-3.5 text-purple-600" />
              <span>Analyze Indicators</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => alert(`Downloading Evidence Package for ${item.id}...`)}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Evidence Dossier</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
