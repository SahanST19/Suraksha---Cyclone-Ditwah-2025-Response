import React from 'react';
import CycloneStats from '../components/CycloneStats';
import MapComponent from '../components/Map';

const Home = () => {
    // Mock data for Cyclone Ditwah-2025
    const cycloneData = {
        windSpeed: 120,
        gustSpeed: 150,
        latitude: 9.5,
        longitude: 82.0,
        distance: 350,
        category: 'Severe Cyclonic Storm',
        direction: 'North-West',
        movementSpeed: 15,
    };

    const cyclonePosition = [cycloneData.latitude, cycloneData.longitude];

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Live Dashboard</h2>
                    <p className="text-slate-400">Real-time updates on Cyclone Ditwah-2025</p>
                </div>

                <CycloneStats data={cycloneData} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700">
                        <h3 className="text-xl font-semibold mb-4">Satellite Feed / Map</h3>
                        <MapComponent position={cyclonePosition} name="Cyclone Ditwah" />
                    </div>

                    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
                        <h3 className="text-xl font-semibold mb-4">Emergency Alerts</h3>
                        <div className="space-y-4">
                            <div className="bg-red-500/10 border-l-4 border-red-500 p-4">
                                <p className="font-bold text-red-400">Red Alert - Coastal Areas</p>
                                <p className="text-sm text-slate-300">Evacuation ordered for zones A, B, and C. Seek higher ground immediately.</p>
                            </div>
                            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4">
                                <p className="font-bold text-yellow-400">Heavy Rain Warning</p>
                                <p className="text-sm text-slate-300">Expect rainfall &gt;100mm in the next 24 hours.</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a href="/help" className="block w-full bg-red-600 hover:bg-red-700 text-center py-3 rounded-lg font-bold transition-colors">
                                REQUEST IMMEDIATE ASSISTANCE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
