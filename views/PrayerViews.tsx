import React, { useState } from 'react';
import { View, PrayerRoomData } from '../types';
import { Play, Calendar, MapPin, Share2, ArrowRight, Mic, Users, Heart, Book, Globe, User, Home, Lock } from 'lucide-react';
import { generateMinistryContent } from '../services/geminiService';

// --- DATA ---
const prayerRooms: PrayerRoomData[] = [
  { 
    id: 'healing', 
    title: 'Healing Room', 
    description: 'God still heals — emotionally, physically, spiritually. This room carries an atmosphere of hope, comfort, and restoration.', 
    scripture: 'By His stripes we are healed. (Isaiah 53:5)', 
    imageSeed: 'https://images.unsplash.com/photo-1579762185771-46497f0fb951?q=80&w=1200&auto=format&fit=crop' // Hands/Light
  },
  { 
    id: 'deliverance', 
    title: 'Deliverance Room', 
    description: 'A space for breaking chains, cycles, and spiritual oppression.', 
    scripture: 'The Son sets you free… (John 8:36)', 
    imageSeed: 'https://images.unsplash.com/photo-1620005708892-c2e92c2a05d8?q=80&w=1200&auto=format&fit=crop' // Breaking chains concept/Light
  },
  { 
    id: 'family', 
    title: 'Family & Children', 
    description: 'A room for parents, guardians, and families to cover their homes.', 
    scripture: 'As for me and my house... (Joshua 24:15)', 
    imageSeed: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop' // Father and child
  },
  { 
    id: 'finance', 
    title: 'Financial Breakthrough', 
    description: 'Praying for open doors, wisdom for wealth creation, and divine provision.', 
    scripture: 'The Lord is my Shepherd... (Psalm 23:1)', 
    imageSeed: 'https://images.unsplash.com/photo-1559589689-577aabd1db4f?q=80&w=1200&auto=format&fit=crop' // Wheat/Harvest
  },
  { 
    id: 'destiny', 
    title: 'Destiny & Purpose', 
    description: 'Order my steps, Lord. Reveal Your plan. Align my life with Your divine purpose.', 
    scripture: 'For I know the plans I have for you... (Jeremiah 29:11)', 
    imageSeed: 'https://images.unsplash.com/photo-1502484082260-2646d6b38c29?q=80&w=1200&auto=format&fit=crop' // Path in woods
  },
  { 
    id: 'growth', 
    title: 'Spiritual Growth', 
    description: 'A room for those who want depth, intimacy, and maturity in Christ.', 
    scripture: 'Grow in the grace and knowledge... (2 Peter 3:18)', 
    imageSeed: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200&auto=format&fit=crop' // Bible Open
  },
];

// --- CREATIVE SPACES VIEW (PAGE 3) ---
export const CreativeSpacesView: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-royal text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Prayer Background"/>
        <div className="relative z-20">
           <h1 className="text-4xl font-serif font-bold text-gold mb-4">Creative Prayer Spaces</h1>
           <p className="max-w-2xl mx-auto text-gray-200 text-lg">Diverse environments for connecting with God.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 space-y-20">
        
        {/* 1. One-on-One */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1507646662266-c63fa268d876?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500" alt="Secret Place Cozy"/>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4 text-gold font-bold uppercase tracking-wider">
              <User size={20} /> Space 01
            </div>
            <h2 className="text-3xl font-serif font-bold text-royal mb-6">One-on-One Prayer Space</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Step into a quiet, sacred digital room created for personal encounters with God.
              <br/><br/>
              <span className="italic font-serif text-royal">"When you pray, go into your secret place..." — Matthew 6:6</span>
            </p>
            <ul className="space-y-2 mb-8 text-gray-600">
               <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-gold rounded-full"></div> Gentle background worship</li>
               <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-gold rounded-full"></div> Guided meditations</li>
               <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-gold rounded-full"></div> Scripture-based prayer prompts</li>
            </ul>
            <button className="bg-royal text-white px-8 py-3 rounded-full font-bold hover:bg-gold hover:text-royal transition">Enter Secret Place</button>
          </div>
        </div>

        {/* 2. Group Prayer */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500" alt="Group Prayer"/>
          </div>
          <div className="md:w-1/2 text-left md:text-right">
            <div className="flex items-center justify-end gap-3 mb-4 text-gold font-bold uppercase tracking-wider">
               Space 02 <Users size={20} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-royal mb-6">Group Prayer Rooms</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you're a family, church team, or prayer circle, our group rooms allow you to pray together from anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-3 justify-end mb-8">
               <span className="bg-pearl px-3 py-1 rounded text-sm font-bold text-royal border border-gray-200">Family Devotion</span>
               <span className="bg-pearl px-3 py-1 rounded text-sm font-bold text-royal border border-gray-200">Couples Prayer</span>
               <span className="bg-pearl px-3 py-1 rounded text-sm font-bold text-royal border border-gray-200">Ministry Teams</span>
            </div>
            <button className="bg-white border-2 border-royal text-royal px-8 py-3 rounded-full font-bold hover:bg-royal hover:text-white transition">Create Group Room</button>
          </div>
        </div>

        {/* 3. Community Hub */}
        <div className="bg-midnight rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <Globe size={48} className="mx-auto text-gold mb-6" />
            <h2 className="text-3xl font-serif font-bold text-gold mb-4">Community Prayer Hub</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
              A global community united in prayer. Share requests, pray for others, celebrate testimonies, and join city prayer circles. This is where faith multiplies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
               <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition cursor-pointer"><h4 className="font-bold text-gold">Share</h4><span className="text-xs text-gray-400">Requests</span></div>
               <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition cursor-pointer"><h4 className="font-bold text-gold">Pray</h4><span className="text-xs text-gray-400">For Others</span></div>
               <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition cursor-pointer"><h4 className="font-bold text-gold">Celebrate</h4><span className="text-xs text-gray-400">Testimonies</span></div>
               <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition cursor-pointer"><h4 className="font-bold text-gold">Join</h4><span className="text-xs text-gray-400">City Circles</span></div>
            </div>
            <button className="bg-gold text-royal px-8 py-3 rounded-full font-bold hover:bg-white transition">Join the Hub</button>
          </div>
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="World Map"/>
        </div>

      </div>
    </div>
  );
};

// --- PRAYER ROOMS VIEW (PAGE 4) ---
export const PrayerRoomsView: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<PrayerRoomData | null>(null);

  // Helper to get specific declaration based on room id
  const getRoomContent = (id: string) => {
    switch(id) {
      case 'healing': return {
        prayer: "Lord, let Your healing flow through my body like a river. Restore every broken part. Touch my mind, my bones, my heart, and my spirit.",
        declaration: "I am strengthened. I am restored. I am healed in Jesus’ name."
      };
      case 'deliverance': return {
        prayer: "Lord, break every yoke and silence every voice that is not Yours in my life.",
        declaration: "I walk in freedom, light, and divine authority."
      };
      case 'family': return {
        prayer: "Lord, surround my children with Your protection. Shape their hearts, their minds, their friendships, and their future.",
        declaration: "My house will serve the Lord. Peace reigns within these walls."
      };
      case 'finance': return {
        prayer: "Father, open doors that no man can shut. Grant wisdom for wealth creation. Let divine provision overflow.",
        declaration: "I am a lender and not a borrower. God supplies all my needs."
      };
      case 'destiny': return {
        prayer: "Order my steps, Lord. Reveal Your plan. Align my life with Your divine purpose.",
        declaration: "I am walking in the fullness of God's plan for my life."
      };
      default: return {
        prayer: "Lord, draw me closer to You. Open my eyes to see You and my ears to hear You.",
        declaration: "I am growing in grace and knowledge every day."
      };
    }
  };

  if (selectedRoom) {
    const content = getRoomContent(selectedRoom.id);
    return (
      <div className="animate-fade-in pb-20">
        <div className="relative h-64 md:h-96">
          <img src={selectedRoom.imageSeed} className="w-full h-full object-cover" alt={selectedRoom.title}/>
          <div className="absolute inset-0 bg-royal/70 flex flex-col justify-center items-center text-white p-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold mb-4 drop-shadow-md">{selectedRoom.title}</h1>
            <p className="text-xl italic font-light opacity-90 max-w-2xl font-serif">"{selectedRoom.scripture}"</p>
            <button onClick={() => setSelectedRoom(null)} className="mt-8 text-sm font-bold tracking-widest uppercase hover:text-gold flex items-center gap-2">
               <ArrowRight className="rotate-180" size={16}/> Back to Lobby
            </button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-royal">
              <div className="flex items-center gap-2 mb-6">
                <Mic className="text-gold" />
                <h2 className="text-2xl font-bold text-royal">Guided Prayer</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic border-l-4 border-gray-200 pl-4 font-serif">
                "{content.prayer}"
              </p>
              
              <div className="p-6 bg-royal/5 rounded-xl border border-royal/10">
                <h3 className="font-bold text-sm text-royal uppercase tracking-widest mb-3">Declaration</h3>
                <p className="font-serif text-2xl text-royal font-bold">
                  "{content.declaration}"
                </p>
              </div>
            </div>
            
            {/* AI Prayer Assistant for this Room */}
            <AIContextualPrayer topic={selectedRoom.title} />
          </div>

          <div className="space-y-6">
            <div className="bg-midnight text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-gold font-bold mb-6 font-serif text-xl">Atmosphere</h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded transition">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Play size={16} fill="currentColor"/></div>
                    <div>
                      <div className="font-bold">Soft Worship</div>
                      <div className="text-xs text-gray-400">Instrumental • 15 mins</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded transition">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Book size={16}/></div>
                    <div>
                      <div className="font-bold">Teaching</div>
                      <div className="text-xs text-gray-400">Short Devotional</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-royal mb-4">Themed Prayer Rooms</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Enter a specific spiritual atmosphere designed to help you focus your intercession.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prayerRooms.map(room => (
          <div key={room.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="h-56 overflow-hidden relative">
               <img src={room.imageSeed} alt={room.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-royal/80 to-transparent opacity-60"></div>
               <div className="absolute bottom-4 left-4 text-white font-bold flex items-center gap-2">
                  <Lock size={14} className="text-gold"/> Open Room
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-royal mb-3">{room.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">{room.description}</p>
              <button 
                onClick={() => setSelectedRoom(room)}
                className="w-full bg-pearl text-royal font-bold py-3 rounded-xl group-hover:bg-royal group-hover:text-white transition-colors flex justify-center items-center gap-2"
              >
                Pray With Me <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- HOW TO PRAY VIEW (PAGE 5) ---
export const HowToPrayView: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white min-h-screen pb-20">
      <div className="bg-royal/5 py-16 text-center mb-12">
         <h1 className="text-5xl font-serif font-bold text-royal mb-4">School of Prayer</h1>
         <p className="text-gray-600">"Lord, teach us to pray..." (Luke 11:1)</p>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
           <h2 className="text-3xl font-bold text-royal mb-6">What Is Prayer?</h2>
           <p className="text-xl text-gray-700 leading-relaxed">
             Prayer is conversation with God — the place where your heart meets His presence. 
             It is not just asking for things; it is the breath of the soul.
           </p>
        </div>

        {/* Types of Prayer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           <TypeCard title="Thanksgiving" desc="Entering His gates with gratitude." />
           <TypeCard title="Worship" desc="Adoring God for who He is." />
           <TypeCard title="Petition" desc="Asking God for your personal needs." />
           <TypeCard title="Intercession" desc="Standing in the gap for others." />
           <TypeCard title="Warfare" desc="Taking authority over the enemy." />
           <TypeCard title="Listening" desc="Quieting your soul to hear His voice." />
        </div>

        {/* Sections */}
        <div className="space-y-16">
          <Section 
            title="When You Don't Know What to Say" 
            content="Simply whisper: 'Lord, help me.' He hears even the unspoken cries. Even when you don't have the words, the Holy Spirit intercedes for you with groanings too deep for words. Just showing up is an act of faith."
            imgSeed="https://images.unsplash.com/photo-1594580661697-3f96e81075d3?q=80&w=800&auto=format&fit=crop" // Lonely/Quiet prayer
            reverse={false}
          />
          <Section 
            title="Devotional Teaching: Learning God's Voice" 
            content="The more you pray, the more you recognize His whispers… in Scripture, in peace, in conviction, in gentle nudges. Prayer turns your ear to Heaven's frequency."
            imgSeed="https://images.unsplash.com/photo-1455582916367-25f75bfc6710?q=80&w=800&auto=format&fit=crop" // Journal/Bible
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
};

// --- HELP PRAY VIEW (PAGE 6) ---
export const HelpPrayView: React.FC = () => {
  return (
    <div className="animate-fade-in container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Help Me Pray */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-royal">
          <div className="p-8">
            <h2 className="text-3xl font-serif font-bold text-royal mb-2">Help Me Pray</h2>
            <p className="text-gray-500 mb-8">A personal guided journey for moments when your heart feels heavy.</p>
            
            <div className="space-y-3 mb-8">
              <button className="w-full text-left p-4 bg-gray-50 hover:bg-royal/5 rounded-lg border border-gray-100 transition flex justify-between items-center group">
                 <span className="font-bold text-gray-700 group-hover:text-royal">"Help me pray for my children."</span>
                 <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition text-gold"/>
              </button>
              <button className="w-full text-left p-4 bg-gray-50 hover:bg-royal/5 rounded-lg border border-gray-100 transition flex justify-between items-center group">
                 <span className="font-bold text-gray-700 group-hover:text-royal">"Help me pray for direction."</span>
                 <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition text-gold"/>
              </button>
              <button className="w-full text-left p-4 bg-gray-50 hover:bg-royal/5 rounded-lg border border-gray-100 transition flex justify-between items-center group">
                 <span className="font-bold text-gray-700 group-hover:text-royal">"Help me pray through grief."</span>
                 <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition text-gold"/>
              </button>
            </div>

            <div className="bg-pearl p-6 rounded-xl">
               <h3 className="font-bold text-royal mb-4 flex items-center gap-2"><Mic size={18}/> Describe your situation</h3>
               <AIContextualPrayer topic="Personal Situation" showLabel={false} />
            </div>
          </div>
        </div>

        {/* Help Us Pray */}
        <div className="flex flex-col h-full">
           <div className="bg-midnight text-white p-10 rounded-2xl shadow-xl flex-1 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold text-gold mb-2">Help Us Pray</h2>
                <p className="text-gray-300 mb-8">Designed for families, ministries, and groups.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3"><div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gold"><Users size={16}/></div> Group prayer outlines</li>
                  <li className="flex items-center gap-3"><div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gold"><Home size={16}/></div> Weekly family devotionals</li>
                  <li className="flex items-center gap-3"><div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gold"><Globe size={16}/></div> Church intercession modules</li>
                </ul>
                <button className="bg-gold text-royal px-8 py-3 rounded-full font-bold w-full hover:bg-white transition">Access Group Guides</button>
              </div>
              <img src="https://images.unsplash.com/photo-1543357480-c60d40007a3f?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Group holding hands"/>
           </div>
        </div>

      </div>
    </div>
  );
};

// --- STREET PRAYER VIEW (PAGE 7) ---
export const StreetPrayerView: React.FC = () => {
  return (
    <div className="animate-fade-in">
       <div className="bg-gray-900 text-white py-24 text-center relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1920&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="City Street at night"/>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4">
             <h1 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-6">Take Prayer to the Streets</h1>
             <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">
               You are the light. You carry revival. Claiming our cities for the Kingdom, one step at a time.
             </p>
             <div className="inline-block border border-gold px-6 py-2 rounded-full text-gold text-sm tracking-widest uppercase">
               "Go into all the world..." — Mark 16:15
             </div>
          </div>
       </div>
       <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <StreetCard 
                icon={<MapPin size={40} />} 
                title="Prayer Walk Maps" 
                desc="Download city maps with strategic prayer points marked for spiritual impact." 
             />
             <StreetCard 
                icon={<Share2 size={40} />} 
                title="Outreach Kits" 
                desc="Get printable cards, conversation starters, and tracts to share the Gospel." 
             />
             <StreetCard 
                icon={<Heart size={40} />} 
                title="Evangelism Guide" 
                desc="Learn how to pray for strangers respectfully and effectively." 
             />
             <StreetCard 
                icon={<Users size={40} />} 
                title="Join a Team" 
                desc="Find a local group going out this Saturday in your area." 
             />
          </div>
       </div>
    </div>
  );
};

// --- ONLINE PRAYER VIEW (PAGE 8) ---
export const OnlinePrayerView: React.FC = () => {
  return (
    <div className="animate-fade-in bg-black min-h-screen text-white pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
           <div>
             <h1 className="text-3xl font-bold text-gold flex items-center gap-3"><span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span></span> LIVE PRAYER ROOM</h1>
             <p className="text-gray-400 text-sm mt-1">Join live hosts, worship leaders, and pastors as we pray daily.</p>
           </div>
           <div className="flex gap-4">
             <button className="bg-royal hover:bg-purple-700 px-6 py-2 rounded-full font-bold text-sm">Set Reminder</button>
             <button className="border border-gray-600 hover:border-white px-6 py-2 rounded-full font-bold text-sm">Schedule</button>
           </div>
        </div>

        {/* Video Player Mockup */}
        <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center relative border border-gray-800 shadow-2xl overflow-hidden group mb-12">
           <img src="https://images.unsplash.com/photo-1510664030678-d45097486e9e?q=80&w=1280&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Worship Concert"/>
           <button className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-royal hover:scale-110 transition-all duration-300">
             <Play size={40} fill="currentColor" className="ml-2"/>
           </button>
           <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur px-4 py-2 rounded-lg border-l-4 border-red-500">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Now Streaming</div>
              <div className="font-bold text-lg">Daily Intercession: Morning Watch</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-6">24/7 Prayer Audio</h3>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center gap-6">
                 <div className="w-16 h-16 bg-royal rounded-full flex items-center justify-center animate-pulse">
                    <Mic size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg">Continuous Worship & Prayer</h4>
                    <p className="text-gray-500 text-sm">Soft worship + scripture + guided prayers.</p>
                 </div>
                 <button className="ml-auto bg-white text-black px-4 py-2 rounded-full text-xs font-bold">Listen</button>
              </div>
           </div>

           <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-6">On-Demand Library</h3>
              <div className="space-y-3">
                 {['Prayers for Anxiety', 'Healing Scriptures', 'Morning Confidence', 'Sleep & Peace'].map((topic, i) => (
                   <div key={i} className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 cursor-pointer flex justify-between items-center group">
                      <span className="font-bold text-gray-300 group-hover:text-white">{topic}</span>
                      <Play size={16} className="text-gray-600 group-hover:text-gold" fill="currentColor"/>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};


// --- HELPER COMPONENTS ---

// Sub-component for AI Text Generation within pages
const AIContextualPrayer: React.FC<{ topic: string, showLabel?: boolean }> = ({ topic, showLabel = true }) => {
  const [request, setRequest] = useState('');
  const [generatedPrayer, setGeneratedPrayer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!request) return;
    setLoading(true);
    const prompt = `Write a specific, anointed prayer about "${topic}" specifically regarding: ${request}. Include a scripture.`;
    const result = await generateMinistryContent(prompt, 'prayer');
    setGeneratedPrayer(result);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-100">
      {showLabel && <h4 className="font-bold text-royal mb-4 flex items-center gap-2 text-sm uppercase tracking-wide"><Mic size={16}/> AI Prayer Partner</h4>}
      <textarea 
        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-gold outline-none mb-4 text-sm bg-gray-50 resize-none"
        rows={3}
        placeholder={`What specific aspect of ${topic} do you need prayer for today?`}
        value={request}
        onChange={(e) => setRequest(e.target.value)}
      ></textarea>
      <button 
        onClick={handleGenerate} 
        disabled={loading}
        className="bg-royal text-white px-6 py-2 rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-midnight transition shadow-md w-full md:w-auto"
      >
        {loading ? 'Interceding...' : 'Generate Prayer'}
      </button>

      {generatedPrayer && (
        <div className="mt-6 p-6 bg-lightgold/20 border-l-4 border-gold rounded animate-fade-in">
          <p className="whitespace-pre-line text-gray-800 font-serif leading-relaxed italic text-lg">{generatedPrayer}</p>
        </div>
      )}
    </div>
  );
};

const Section = ({ title, content, imgSeed, reverse }: any) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
    <div className="flex-1">
      <img src={imgSeed} className="rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500" alt={title}/>
    </div>
    <div className="flex-1 text-left">
      <h2 className="text-3xl font-serif font-bold text-royal mb-6">{title}</h2>
      <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
    </div>
  </div>
);

const TypeCard = ({ title, desc }: { title: string, desc: string }) => (
   <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-royal hover:-translate-y-2 transition-transform">
      <h3 className="text-xl font-serif font-bold text-royal mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
   </div>
);

const StreetCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
   <div className="bg-white p-8 rounded-2xl shadow-xl text-center group hover:bg-royal hover:text-white transition-colors duration-300">
      <div className="text-gold mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 group-hover:text-gray-200">{desc}</p>
   </div>
);
