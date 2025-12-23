import React, { useState } from 'react';
import { View } from '../types';
import { Menu, X, Heart, MessageCircle, ChevronRight, ChevronDown, Globe, Mic } from 'lucide-react';
import { generateMinistryContent } from '../services/geminiService';

// Simplified Logo showing only the "PrayerZone" wordmark
const Logo: React.FC<{ className?: string; textColor?: string }> = ({ className = "h-auto", textColor = "white" }) => (
  <div className={`flex items-center ${className}`}>
    <span className="font-serif font-bold text-3xl tracking-tight" style={{ color: textColor }}>
      Prayer<span className="text-gold">Zone</span>
    </span>
  </div>
);

interface NavItem {
  label: string;
  view?: View;
  subMenu?: { label: string; view: View }[];
}

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: 'Home', view: View.HOME },
    { label: 'About', view: View.ABOUT },
    { 
      label: 'Rooms', 
      subMenu: [
        { label: 'Themed Rooms', view: View.PRAYER_ROOMS },
        { label: 'Creative Spaces', view: View.PRAYER_SPACES },
      ] 
    },
    { label: 'Live', view: View.ONLINE },
    { label: 'AI Tools', view: View.AI_TOOLS },
    { label: 'Resources', view: View.RESOURCES },
    { label: 'Contact', view: View.CONTACT },
  ];

  const isViewInItem = (item: NavItem) => {
    if (item.view === currentView) return true;
    if (item.subMenu) {
      return item.subMenu.some(sub => sub.view === currentView);
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-royal text-white shadow-lg border-b-2 border-gold">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer transition-transform hover:scale-[1.02]" 
          onClick={() => setView(View.HOME)}
        >
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-6 items-center">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => item.subMenu && setActiveSubMenu(item.label)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              <button
                onClick={() => item.view && setView(item.view)}
                className={`text-sm font-semibold uppercase tracking-wide hover:text-gold transition-colors flex items-center gap-1 py-2 ${
                  isViewInItem(item) ? 'text-gold border-b border-gold' : 'text-gray-200'
                }`}
              >
                {item.label}
                {item.subMenu && <ChevronDown size={14} className={`transition-transform duration-200 ${activeSubMenu === item.label ? 'rotate-180' : ''}`} />}
              </button>

              {item.subMenu && activeSubMenu === item.label && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-b-lg shadow-2xl py-2 border-t-2 border-gold animate-fade-in overflow-hidden">
                  {item.subMenu.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => {
                        setView(sub.view);
                        setActiveSubMenu(null);
                      }}
                      className={`w-full text-left px-6 py-3 text-sm font-bold transition-colors border-b border-gray-50 last:border-0 ${
                        currentView === sub.view ? 'bg-royal/5 text-royal' : 'text-royal/80 hover:bg-royal hover:text-white'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={() => setView(View.HELP_PRAY)}
            className="bg-gold text-royal px-5 py-2 rounded-full font-bold hover:bg-white transition-colors shadow-md transform hover:-translate-y-0.5"
          >
            I Need Prayer
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="xl:hidden bg-royal border-t border-gold/20 absolute w-full shadow-2xl z-50 max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/10 last:border-0">
                {item.subMenu ? (
                  <>
                    <div className="flex justify-between items-center py-3 text-white font-semibold">
                      <span>{item.label}</span>
                      <ChevronDown size={18} className="text-gold" />
                    </div>
                    <div className="bg-white/5 rounded-lg mb-2 pl-4">
                      {item.subMenu.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => {
                            setView(sub.view);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full text-left py-3 text-sm font-medium transition-colors ${
                            currentView === sub.view ? 'text-gold' : 'text-gray-300 hover:text-gold'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      if (item.view) setView(item.view);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left font-semibold py-4 transition-colors ${
                      currentView === item.view ? 'text-gold' : 'text-white hover:text-gold'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
             <button
                onClick={() => {
                  setView(View.HELP_PRAY);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gold text-royal font-bold py-4 rounded-lg mt-4 shadow-lg text-center"
              >
                I Need Prayer
              </button>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <footer className="bg-midnight text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-6">
          <Logo />
          <p className="text-gray-400 text-sm leading-relaxed">
            A global digital sanctuary for individuals, families, and churches. Connecting believers through prayer, word, and technology.
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-midnight cursor-pointer transition">
              <Globe size={16} />
            </div>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-midnight cursor-pointer transition">
              <Heart size={16} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-white border-b border-gold/30 pb-2 inline-block">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><button onClick={() => setView(View.ABOUT)} className="hover:text-gold transition">About Us</button></li>
            <li><button onClick={() => setView(View.PRAYER_SPACES)} className="hover:text-gold transition">Creative Spaces</button></li>
            <li><button onClick={() => setView(View.PRAYER_ROOMS)} className="hover:text-gold transition">Prayer Rooms</button></li>
            <li><button onClick={() => setView(View.HOW_TO_PRAY)} className="hover:text-gold transition">How to Pray</button></li>
            <li><button onClick={() => setView(View.BLOG)} className="hover:text-gold transition">Ministry Blog</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-white border-b border-gold/30 pb-2 inline-block">Community</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><button onClick={() => setView(View.STREETS)} className="hover:text-gold transition">Street Evangelism</button></li>
            <li><button onClick={() => setView(View.ONLINE)} className="hover:text-gold transition">Live Prayer 24/7</button></li>
            <li><button onClick={() => setView(View.RESOURCES)} className="hover:text-gold transition">Church Resources</button></li>
            <li><button onClick={() => setView(View.CONTACT)} className="hover:text-gold transition">Partner With Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-white border-b border-gold/30 pb-2 inline-block">Daily Verse</h4>
          <blockquote className="italic text-gray-300 border-l-2 border-gold pl-4 text-sm font-serif">
            "The effective, fervent prayer of a righteous man avails much."
            <span className="block not-italic text-gold mt-2 font-bold font-sans">- James 5:16</span>
          </blockquote>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center border-t border-white/10 pt-8 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} PrayerZone Ministry. All rights reserved.
      </div>
    </footer>
  );
};

export const AIChatOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Peace be with you. I am your PrayerZone assistant. How can I pray for you or help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await generateMinistryContent(userMsg, 'chat');
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 md:w-96 h-[500px] mb-4 flex flex-col border border-royal overflow-hidden animate-fade-in">
          <div className="bg-royal text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold">Pastoral Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' ? 'bg-royal text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-500 text-xs italic">
                  Praying over your request...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-t flex items-center space-x-2">
            <input 
              type="text" 
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-royal"
              placeholder="Type your prayer request..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-gold text-royal p-2 rounded-full hover:bg-royal hover:text-gold transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-royal text-gold p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center space-x-2 border-2 border-gold"
      >
        <MessageCircle size={28} />
        {!isOpen && <span className="font-bold pr-2 hidden md:block">Talk to Us</span>}
      </button>
    </div>
  );
};