import React from 'react';
import { View } from '../types';
import { ChevronRight, Users, BookOpen, Shield, Heart, Globe } from 'lucide-react';

// --- HOME VIEW ---
export const HomeView: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Warm/Holy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-midnight/80 via-royal/60 to-gold/20 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Realistic Worship/Prayer Image */}
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
          alt="Hands raised in worship with warm light" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="mb-12 flex justify-center">
            {/* Minimalist Header for Hero without Icon */}
            <div className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
               <span className="font-serif font-bold text-4xl md:text-5xl tracking-tight text-white drop-shadow-lg">
                Prayer<span className="text-gold">Zone</span>
               </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-2xl text-white tracking-tight">
            Where Prayer Meets Power. <br/><span className="text-gold text-shadow-glow">Where Believers Gather.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light text-gray-100 leading-relaxed drop-shadow-md">
            A global digital sanctuary for individuals, families, and churches.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button 
              onClick={() => setView(View.HELP_PRAY)}
              className="bg-gold text-royal px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-royal transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            >
              Pray Now
            </button>
            <button 
              onClick={() => setView(View.ONLINE)}
              className="bg-royal/60 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-royal transition-all hover:-translate-y-1 shadow-lg"
            >
              Join Live Prayer
            </button>
          </div>
          <div className="mt-8">
             <button 
              onClick={() => setView(View.PRAYER_ROOMS)}
              className="text-white/80 hover:text-gold transition-colors text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2"
            >
              Explore Sanctuary <ChevronRight size={14}/>
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-royal via-gold to-royal"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-royal mb-6">Why PrayerZone?</h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-xl leading-relaxed mb-16">
            Many believers struggle with prayer not because they don't want to pray, but because life is heavy. 
            PrayerZone was born from a simple burden: <span className="font-bold text-royal italic">"Create a place where prayer becomes a lifestyle, not a struggle."</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Shield size={48} />} 
              title="Consistent Support" 
              desc="Daily guided prayers and a global community that stands with you in every season." 
            />
            <FeatureCard 
              icon={<BookOpen size={48} />} 
              title="Biblical Foundation" 
              desc="Every tool, prayer, and resource is deeply rooted in the Word of God." 
            />
            <FeatureCard 
              icon={<Users size={48} />} 
              title="Community & Revival" 
              desc="Join a digital army of intercessors igniting faith across the nations." 
            />
          </div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-24 bg-pearl relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-royal mb-16 text-center">Explore Our Sanctuary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImageCard 
              title="Daily Prayer" 
              image="https://images.unsplash.com/photo-1507646662266-c63fa268d876?q=80&w=800&auto=format&fit=crop" 
              onClick={() => setView(View.HOW_TO_PRAY)} 
            />
            <ImageCard 
              title="AI Assistant" 
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
              onClick={() => setView(View.AI_TOOLS)} 
            />
            <ImageCard 
              title="Prayer Rooms" 
              image="https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=800&auto=format&fit=crop" 
              onClick={() => setView(View.PRAYER_ROOMS)} 
            />
            <ImageCard 
              title="Community Wall" 
              image="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop" 
              onClick={() => setView(View.PRAYER_SPACES)} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// --- ABOUT VIEW ---
export const AboutView: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-royal text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-royal/80 z-10 mix-blend-multiply"></div>
        <img src="https://images.unsplash.com/photo-1510664030678-d45097486e9e?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Worship Background"/>
        
        <div className="relative z-20">
          <h1 className="text-5xl font-serif font-bold text-gold mb-4 drop-shadow-lg">About PrayerZone</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-100 font-light">Building a Global Digital Sanctuary</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-royal mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-gold pl-6">
                To build a global digital sanctuary that empowers individuals, families, and ministries to pray consistently, grow spiritually, and experience God every day.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-royal mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-royal pl-6">
                A world where no one stands alone in prayer — where faith, technology, and community come together to create an atmosphere of revival.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-royal mb-4">Our Mandate</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3"><ChevronRight className="text-gold" size={20}/> Teach people how to pray</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-gold" size={20}/> Strengthen the weak and discouraged</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-gold" size={20}/> Build a culture of intercession</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-gold" size={20}/> Make spiritual growth accessible globally</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-gold" size={20}/> Create prayer resources for churches and ministries</li>
              </ul>
            </div>
          </div>
          <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-2xl group">
            <img src="https://images.unsplash.com/photo-1525268323886-2847de7db55d?q=80&w=1200&auto=format&fit=crop" alt="Diverse group praying" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-royal/90 to-transparent flex items-end p-8">
               <p className="text-white italic text-xl font-serif">"We combine biblical truth, heartfelt devotion, and the best of technology to guide you into deeper encounters with God."</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif font-bold text-center text-royal mb-16">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
             <SmallValueCard title="Word" />
             <SmallValueCard title="Prayer" />
             <SmallValueCard title="Community" />
             <SmallValueCard title="Excellence" />
             <SmallValueCard title="Revival" />
             <SmallValueCard title="Love" />
          </div>
        </div>

        {/* Statement of Faith */}
        <div className="bg-pearl p-12 rounded-2xl border border-gray-200 text-center max-w-4xl mx-auto shadow-inner">
          <Shield size={48} className="text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-royal mb-8">Statement of Faith</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left text-gray-700">
             <div className="flex items-center gap-3"><div className="w-2 h-2 bg-royal rounded-full"></div> The Trinity</div>
             <div className="flex items-center gap-3"><div className="w-2 h-2 bg-royal rounded-full"></div> Healing and deliverance</div>
             <div className="flex items-center gap-3"><div className="w-2 h-2 bg-royal rounded-full"></div> The authority of Scripture</div>
             <div className="flex items-center gap-3"><div className="w-2 h-2 bg-royal rounded-full"></div> The unity of believers</div>
             <div className="flex items-center gap-3"><div className="w-2 h-2 bg-royal rounded-full"></div> Salvation through Christ alone</div>
             <div className="flex items-center gap-3"><div className="w-2 h-2 bg-royal rounded-full"></div> The mission to reach the world</div>
             <div className="flex items-center gap-3"><div className="w-2 h-2 bg-royal rounded-full"></div> The power of the Holy Spirit</div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- CONTACT VIEW ---
export const ContactView: React.FC = () => {
  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-20">
      <div className="bg-midnight text-white py-24 text-center">
        <h1 className="text-5xl font-serif font-bold text-gold">We Stand With You</h1>
        <p className="mt-6 text-xl text-gray-300 font-light">"Where two agree... it shall be done." (Matthew 18:19)</p>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-5xl mx-auto border-t-8 border-gold">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-royal mb-6 font-serif">Submit Your Request</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                  <input type="text" className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-royal outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-royal outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">I am reaching out for</label>
                  <select className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-royal outline-none transition-all">
                    <option>Prayer Request</option>
                    <option>Ministry Partnership</option>
                    <option>Support / Help</option>
                    <option>Share a Testimony</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Message</label>
                  <textarea className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-royal outline-none h-40 transition-all" placeholder="How can we stand in faith with you?"></textarea>
                </div>
                <button className="w-full bg-royal text-white font-bold py-4 rounded-lg hover:bg-midnight transition text-lg shadow-lg">Send Request</button>
              </form>
            </div>
            
            <div className="space-y-8">
               <div className="bg-pearl p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-royal mb-4">Ministry HQ</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are a global team working remotely to serve the body of Christ.
                  </p>
                  <div className="mt-4 text-sm font-bold text-royal">
                    Email: support@prayerzone.com<br/>
                    Partners: partners@prayerzone.com
                  </div>
               </div>

               <div className="rounded-xl overflow-hidden shadow-lg relative h-64">
                 <img src="https://images.unsplash.com/photo-1621509489568-45b736780b6a?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Holding hands praying"/>
                 <div className="absolute inset-0 bg-royal/80 flex items-center justify-center p-6 text-center">
                    <p className="text-white font-serif text-lg italic">
                      "Again I say to you, if two of you agree on earth about anything they ask, it will be done for them by my Father in heaven."
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-gold hover:-translate-y-2 transition-all duration-300 group">
    <div className="text-royal mb-6 group-hover:text-gold transition-colors p-4 bg-royal/5 rounded-full">{icon}</div>
    <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const ImageCard = ({ title, image, onClick }: { title: string, image: string, onClick: () => void }) => (
  <div onClick={onClick} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">{title}</h3>
      <div className="w-12 h-1 bg-gold mt-3 mb-3 transform origin-left group-hover:scale-x-150 transition-transform"></div>
      <div className="flex items-center text-white/90 text-sm font-bold tracking-wide mt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
        <span>ENTER SPACE</span> <ChevronRight size={16} className="ml-2" />
      </div>
    </div>
  </div>
);

const SmallValueCard = ({ title }: { title: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-md border-b-4 border-gold text-center hover:bg-royal hover:text-white transition-colors cursor-default">
    <h3 className="font-bold text-lg">{title}</h3>
  </div>
);