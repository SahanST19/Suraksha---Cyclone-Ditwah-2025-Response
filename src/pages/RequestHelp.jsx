import React from 'react';
import HelpForm from '../components/HelpForm';

const RequestHelp = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold mb-2 text-red-500">Emergency Assistance</h2>
                    <p className="text-slate-400">Please fill out this form only if you are in immediate danger or need urgent help.</p>
                </div>

                <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg border border-slate-700">
                    <HelpForm />
                </div>

                <div className="mt-8 text-center text-slate-500 text-sm">
                    <p>Emergency Hotline: <span className="text-white font-bold">117</span> (Disaster Management Centre)</p>
                </div>
            </div>
        </div>
    );
};

export default RequestHelp;
