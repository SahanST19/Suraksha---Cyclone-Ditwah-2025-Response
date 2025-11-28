import React, { useState } from 'react';
import { Send, MapPin, Phone, User } from 'lucide-react';

const HelpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        needs: 'rescue', // rescue, medical, food, shelter
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Help request submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-green-500/20 border border-green-500 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Request Received!</h3>
                <p className="text-slate-300">Rescue teams have been notified. Stay safe and keep your phone on.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                        type="text"
                        name="name"
                        required
                        className="block w-full pl-10 bg-slate-700 border-slate-600 rounded-lg focus:ring-red-500 focus:border-red-500 text-white placeholder-slate-400"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        required
                        className="block w-full pl-10 bg-slate-700 border-slate-600 rounded-lg focus:ring-red-500 focus:border-red-500 text-white placeholder-slate-400"
                        placeholder="07X XXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Current Location</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                        type="text"
                        name="location"
                        required
                        className="block w-full pl-10 bg-slate-700 border-slate-600 rounded-lg focus:ring-red-500 focus:border-red-500 text-white placeholder-slate-400"
                        placeholder="City, Village, or GPS coordinates"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Type of Assistance Needed</label>
                <select
                    name="needs"
                    className="block w-full bg-slate-700 border-slate-600 rounded-lg focus:ring-red-500 focus:border-red-500 text-white"
                    value={formData.needs}
                    onChange={handleChange}
                >
                    <option value="rescue">Emergency Rescue (Life Threatening)</option>
                    <option value="medical">Medical Assistance</option>
                    <option value="food">Food & Water</option>
                    <option value="shelter">Shelter</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Additional Details</label>
                <textarea
                    name="message"
                    rows="3"
                    className="block w-full bg-slate-700 border-slate-600 rounded-lg focus:ring-red-500 focus:border-red-500 text-white placeholder-slate-400"
                    placeholder="Number of people, specific injuries, landmarks..."
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
                <Send className="h-5 w-5 mr-2" />
                SEND HELP REQUEST
            </button>
        </form>
    );
};

export default HelpForm;
