import React from 'react';
import { Wind, Navigation, Activity } from 'lucide-react';

const CycloneStats = ({ data }) => {
    if (!data) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex items-center">
                <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                    <Wind className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                    <p className="text-slate-400 text-sm font-medium">Wind Speed</p>
                    <p className="text-2xl font-bold text-white">{data.windSpeed} km/h</p>
                    <p className="text-xs text-slate-500">Gusts up to {data.gustSpeed} km/h</p>
                </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex items-center">
                <div className="p-3 bg-emerald-500/20 rounded-full mr-4">
                    <Navigation className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                    <p className="text-slate-400 text-sm font-medium">Location</p>
                    <p className="text-2xl font-bold text-white">{data.latitude}°N, {data.longitude}°E</p>
                    <p className="text-xs text-slate-500">{data.distance} km from Sri Lanka</p>
                </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex items-center">
                <div className="p-3 bg-red-500/20 rounded-full mr-4">
                    <Activity className="h-8 w-8 text-red-400" />
                </div>
                <div>
                    <p className="text-slate-400 text-sm font-medium">Status</p>
                    <p className="text-2xl font-bold text-white uppercase">{data.category}</p>
                    <p className="text-xs text-slate-500">Moving {data.direction} at {data.movementSpeed} km/h</p>
                </div>
            </div>
        </div>
    );
};

export default CycloneStats;
