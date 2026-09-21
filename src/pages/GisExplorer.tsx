import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Map as MapIcon, Layers, Compass, AlertTriangle, Eye } from 'lucide-react';

// Default center on India (e.g. Tamil Nadu / Bengaluru / Pan-India spatial context)
const INDIA_CENTER: [number, number] = [13.0827, 80.2707]; // Chennai / Kanchipuram corridor

export const GisExplorer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'landuse' | 'urban' | 'climate' | 'infra'>('landuse');
  const [selectedRegion, setSelectedRegion] = useState({
    name: 'Kanchipuram Peri-Urban District',
    state: 'Tamil Nadu',
    landUse: '42% Agriculture, 31% Urban Built-up, 18% Wetlands, 9% Forest',
    urbanGrowth: '+5.4% annual sprawl (2020-2026)',
    climateVulnerability: '0.68 (High Flood & Coastal Salinity Risk)',
    population: '1.35 Million',
    infrastructure: 'Chennai-Bengaluru Industrial Corridor Phase II'
  });

  const regions = [
    {
      name: 'Kanchipuram Peri-Urban District',
      state: 'Tamil Nadu',
      lat: 12.8342,
      lng: 79.7036,
      landUse: '42% Agriculture, 31% Urban Built-up, 18% Wetlands',
      urbanGrowth: '+5.4% annual sprawl',
      climateVulnerability: '0.68 (High)',
      population: '1.35 Million',
      infrastructure: 'Industrial Corridor Hub'
    },
    {
      name: 'Bengaluru Rural & Devanahalli Belt',
      state: 'Karnataka',
      lat: 13.2458,
      lng: 77.7123,
      landUse: '55% Agriculture, 28% Commercial Tech Park, 17% Barren',
      urbanGrowth: '+7.2% rapid conversion',
      climateVulnerability: '0.45 (Moderate)',
      population: '980,000',
      infrastructure: 'Airport SEZ Expansion'
    },
    {
      name: 'Sundarbans Coastal Delta Tract',
      state: 'West Bengal',
      lat: 21.9497,
      lng: 88.9007,
      landUse: '64% Mangrove Wetland, 26% Saline Ag Land, 10% Settlement',
      urbanGrowth: '+1.1% slow settlement',
      climateVulnerability: '0.89 (Severe Risks)',
      population: '2.1 Million',
      infrastructure: 'Embankment Flood Shelters'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
            <MapIcon className="w-3.5 h-3.5 text-blue-600" />
            <span>Spatial Land Intelligence</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Land Governance GIS Explorer
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Interactive multi-layered spatial map visualizing land use, urban expansion corridors, and climate risk zones.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-lg text-xs font-semibold">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>DEMO GIS OVERLAY ACTIVE</span>
        </div>
      </div>

      {/* Main Map + Side Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map Container Column */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden flex flex-col">
          {/* Layer Selector Bar */}
          <div className="p-3 bg-slate-900 text-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center space-x-2 font-bold">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Map Layers:</span>
            </div>
            <div className="flex items-center space-x-1.5 flex-wrap">
              <button
                onClick={() => setActiveLayer('landuse')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  activeLayer === 'landuse' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Land Use / Cover
              </button>
              <button
                onClick={() => setActiveLayer('urban')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  activeLayer === 'urban' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Urban Sprawl
              </button>
              <button
                onClick={() => setActiveLayer('climate')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  activeLayer === 'climate' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Climate Risk
              </button>
              <button
                onClick={() => setActiveLayer('infra')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  activeLayer === 'infra' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Infrastructure Corridors
              </button>
            </div>
          </div>

          {/* Leaflet Map Frame */}
          <div className="h-[500px] w-full relative z-10 bg-slate-100">
            <MapContainer
              center={INDIA_CENTER}
              zoom={7}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {regions.map((reg, idx) => (
                <React.Fragment key={idx}>
                  <Marker
                    position={[reg.lat, reg.lng]}
                    eventHandlers={{
                      click: () => {
                        setSelectedRegion({
                          name: reg.name,
                          state: reg.state,
                          landUse: reg.landUse,
                          urbanGrowth: reg.urbanGrowth,
                          climateVulnerability: reg.climateVulnerability,
                          population: reg.population,
                          infrastructure: reg.infrastructure
                        });
                      }
                    }}
                  >
                    <Popup>
                      <div className="p-1 font-sans">
                        <h4 className="font-bold text-xs text-slate-900">{reg.name}</h4>
                        <p className="text-[10px] text-slate-500">{reg.state}</p>
                        <p className="text-[11px] text-emerald-700 font-medium mt-1">{reg.urbanGrowth}</p>
                      </div>
                    </Popup>
                  </Marker>
                  <Circle
                    center={[reg.lat, reg.lng]}
                    radius={25000}
                    pathOptions={{
                      color: activeLayer === 'urban' ? '#d97706' : activeLayer === 'climate' ? '#e11d48' : '#059669',
                      fillColor: activeLayer === 'urban' ? '#f59e0b' : activeLayer === 'climate' ? '#f43f5e' : '#10b981',
                      fillOpacity: 0.3
                    }}
                  />
                </React.Fragment>
              ))}
            </MapContainer>

            {/* Map Legend Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur border border-slate-200 p-3 rounded-lg shadow-md z-[1000] text-[11px] max-w-xs">
              <div className="font-bold text-slate-800 mb-1 flex items-center space-x-1">
                <Compass className="w-3.5 h-3.5 text-slate-600" />
                <span>Active Layer: <span className="capitalize">{activeLayer}</span></span>
              </div>
              <div className="space-y-1 text-slate-600 text-[10px]">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span>
                  <span>Prime Agricultural & Protected Land</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded bg-amber-500 inline-block"></span>
                  <span>High Sprawl Urban Expansion Belt</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded bg-rose-500 inline-block"></span>
                  <span>Coastal & Wetland Vulnerability Zone</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Panel */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Spatial Inspector</span>
                <h3 className="text-base font-bold text-slate-900">{selectedRegion.name}</h3>
                <span className="text-xs text-slate-500">{selectedRegion.state}</span>
              </div>
              <Eye className="w-5 h-5 text-emerald-600" />
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Land Use Distribution</label>
                <p className="font-semibold text-slate-800 leading-snug">{selectedRegion.landUse}</p>
              </div>

              <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/80">
                <label className="text-[10px] font-bold text-amber-700 uppercase block mb-1">Urban Expansion Rate</label>
                <p className="font-extrabold text-amber-900">{selectedRegion.urbanGrowth}</p>
              </div>

              <div className="p-3 bg-rose-50/60 rounded-lg border border-rose-200/80">
                <label className="text-[10px] font-bold text-rose-700 uppercase block mb-1">Climate Vulnerability Index</label>
                <p className="font-extrabold text-rose-900">{selectedRegion.climateVulnerability}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Infrastructure Focus</label>
                <p className="font-semibold text-slate-800">{selectedRegion.infrastructure}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 text-center">
            <p className="text-[10px] text-slate-400 mb-2">
              All vector layers rendered using simulated spatial datasets for SIH 2026 presentation.
            </p>
            <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold">
              Export Spatial Vector GeoJSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
