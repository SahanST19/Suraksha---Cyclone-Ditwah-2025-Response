import React, { useState } from 'react';
import { Menu, X, Globe, AlertTriangle } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState('en'); // 'en' or 'si'

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleLang = () => setLang(lang === 'en' ? 'si' : 'en');

    const translations = {
        en: {
            title: 'Suraksha',
            subtitle: 'Cyclone Ditwah-2025 Response',
            home: 'Home',
            map: 'Map View',
            help: 'Request Help',
            lang: 'සිංහල',
        },
        si: {
            title: 'සුරක්ෂා',
            subtitle: 'සුළි කුණාටු ඩිට්වා-2025 ප්‍රතිචාරය',
            home: 'මුල් පිටුව',
            map: 'සිතියම',
            help: 'උදව් ඉල්ලන්න',
            lang: 'English',
        },
    };

    const t = translations[lang];

    return (
        <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <AlertTriangle className="h-8 w-8 text-red-500 mr-2" />
                        <div>
                            <h1 className="text-xl font-bold tracking-wider uppercase">{t.title}</h1>
                            <p className="text-xs text-slate-400 hidden sm:block">{t.subtitle}</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="/" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">{t.home}</a>
                            <a href="/map" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">{t.map}</a>
                            <a href="/help" className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">{t.help}</a>
                            <button onClick={toggleLang} className="flex items-center hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                <Globe className="h-4 w-4 mr-1" />
                                {t.lang}
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">{t.home}</a>
                        <a href="/map" className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">{t.map}</a>
                        <a href="/help" className="block bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-base font-medium">{t.help}</a>
                        <button onClick={toggleLang} className="flex w-full items-center hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium text-left">
                            <Globe className="h-4 w-4 mr-2" />
                            {t.lang}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
