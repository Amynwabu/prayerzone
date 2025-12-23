import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Download, FileText, Sparkles, Book, Video, Smile, PenTool, Layout, Mic } from 'lucide-react';
import { generateMinistryContent } from '../services/geminiService';

// --- BLOG VIEW (PAGE 9) ---
export const BlogView: React.FC = () => {
  const posts: BlogPost[] = [
    { id: 1, title: '10 Ways to Strengthen Your Prayer Life', category: 'How to Pray', date: 'Oct 15, 2023', summary: 'Practical habits to deepen your daily communion with God.', imageSeed: 'https://images.unsplash.com/photo-1544764200-d834fd210a23?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'The Healing Power of Psalms', category: 'Bible Study', date: 'Oct 12, 2023', summary: 'Discovering comfort and restoration in the ancient songbook.', imageSeed: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Teaching Children the Presence of God', category: 'Kids & Family', date: 'Oct 08, 2023', summary: 'Simple ways to introduce your little ones to the Holy Spirit.', imageSeed: 'https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=800&auto=format&fit=crop' },
    { id: 4, title: 'How to Pray When You Feel Empty', category: 'Encouragement', date: 'Sep 25, 2023', summary: 'Finding words when your soul feels dry and silent.', imageSeed: 'https://images.unsplash.com/photo-1518536665516-e48356d2035f?q=80&w=800&auto=format&fit=crop' },
    { id: 5, title: 'AI Tools Every Pastor Should Use', category: 'AI & Ministry', date: 'Sep 15, 2023', summary: 'Leveraging technology to multiply your ministry impact.', imageSeed: 'https://images.unsplash.com/photo-1526554850534-7653f600013b?q=80&w=800&auto=format&fit=crop' },
    { id: 6, title: 'Testimony: Freedom from Anxiety', category: 'Testimonies', date: 'Sep 10, 2023', summary: 'One woman’s journey to peace through consistent intercession.', imageSeed: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-20">
      <div className="bg-white border-b py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-royal mb-4">Ministry Insights</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Teachings, testimonies, and updates to fuel your faith.</p>
      </div>
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <div className="h-48 overflow-hidden">
               <img src={post.imageSeed} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-gold uppercase tracking-wider bg-royal/5 px-2 py-1 rounded">{post.category}</span>
              <h3 className="text-xl font-bold text-royal mt-3 mb-3 group-hover:text-gold transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.summary}</p>
              <div className="flex justify-between items-center border-t pt-4 text-xs text-gray-400">
                 <span>{post.date}</span>
                 <span className="text-royal font-bold">Read More</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- AI TOOLS VIEW (PAGE 10) ---
export const AIToolsView: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const tools = [
    { id: 'prayer', name: 'AI Prayer Generator', icon: <Sparkles size={24} />, desc: 'Generate powerful, Scripture-filled prayers.' },
    { id: 'sermon', name: 'AI Sermon Builder', icon: <PenTool size={24} />, desc: 'Write message outlines, research notes, points & illustrations.' },
    { id: 'devotional', name: 'AI Devotional Writer', icon: <Book size={24} />, desc: 'Create Bible devotionals in seconds.' },
    { id: 'kids', name: 'Kids Bible Story Engine', icon: <Smile size={24} />, desc: 'Generate bedtime stories anchored in Scripture.' },
    { id: 'outreach', name: 'Outreach Assistant', icon: <Layout size={24} />, desc: 'Plan missions and community events.' },
  ];

  const handleToolRun = async () => {
    if (!activeTool || !input) return;
    setLoading(true);
    let prompt = "";
    let type: 'sermon' | 'study' | 'chat' | 'prayer' = 'chat';

    if (activeTool === 'prayer') {
      prompt = `Write a powerful, scripture-filled prayer about: ${input}.`;
      type = 'prayer';
    } else if (activeTool === 'sermon') {
      prompt = `Write a sermon outline on: ${input}. Include intro, 3 main points with scripture, illustrations, and conclusion.`;
      type = 'sermon';
    } else if (activeTool === 'devotional') {
      prompt = `Write a short daily devotional about: ${input}. Include a scripture, reflection, and prayer.`;
      type = 'study';
    } else if (activeTool === 'kids') {
      prompt = `Tell the bible story of ${input} for a 5-year-old audience. Make it fun, engaging, and anchored in Scripture.`;
      type = 'chat';
    } else if (activeTool === 'outreach') {
      prompt = `Give me a plan for a church outreach event regarding: ${input}. Include logistics and spiritual preparation.`;
      type = 'chat';
    }

    const res = await generateMinistryContent(prompt, type);
    setOutput(res);
    setLoading(false);
  };

  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-royal text-white py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-gold mb-2 flex items-center justify-center gap-3">
          <Sparkles className="text-gold" /> AI Tools for Ministry
        </h1>
        <p className="opacity-80 text-lg">Modern tools to equip the saints.</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tool Selector */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-bold text-gray-700 mb-4 uppercase tracking-wide text-xs">Select a Tool</h3>
            {tools.map(tool => (
              <button
                key={tool.id}
                onClick={() => { setActiveTool(tool.id); setOutput(''); setInput(''); }}
                className={`w-full flex items-center p-4 rounded-xl border-2 transition-all text-left ${
                  activeTool === tool.id ? 'border-royal bg-white shadow-lg scale-105' : 'border-transparent bg-white shadow-sm hover:bg-gray-50'
                }`}
              >
                <div className={`p-3 rounded-full mr-4 ${activeTool === tool.id ? 'bg-royal text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {tool.icon}
                </div>
                <div>
                  <div className={`font-bold ${activeTool === tool.id ? 'text-royal' : 'text-gray-700'}`}>{tool.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{tool.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Tool Workspace */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[600px] flex flex-col overflow-hidden">
            {activeTool ? (
              <div className="flex flex-col h-full">
                <div className="bg-gray-50 p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-royal mb-4 flex items-center gap-2">
                    {tools.find(t => t.id === activeTool)?.icon}
                    {tools.find(t => t.id === activeTool)?.name}
                  </h2>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-royal outline-none"
                      placeholder="Enter topic, scripture, or theme..." 
                      onKeyDown={(e) => e.key === 'Enter' && handleToolRun()}
                    />
                    <button 
                      onClick={handleToolRun}
                      disabled={loading}
                      className="bg-gold text-royal font-bold px-6 rounded-lg hover:bg-yellow-500 transition disabled:opacity-50"
                    >
                      {loading ? 'Working...' : 'Generate'}
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 p-8 overflow-y-auto bg-white">
                  {output ? (
                    <div className="prose prose-purple max-w-none whitespace-pre-line font-serif text-lg text-gray-800 leading-relaxed">
                      {output}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-300">
                      <Sparkles size={64} className="mb-4 opacity-20" />
                      <p className="text-lg">AI output will appear here.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center flex-col text-gray-400 bg-gray-50/50">
                <Sparkles size={48} className="mb-4 opacity-20" />
                <p>Select a ministry tool from the left menu.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- RESOURCES VIEW (PAGE 11) ---
export const ResourcesView: React.FC = () => {
  return (
    <div className="animate-fade-in container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-royal">Resources</h1>
        <p className="text-gray-600 mt-2 text-lg">Equipping the Saints for the work of ministry.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ResourceCard 
          title="7-Day Prayer Challenge" 
          type="PDF Guide" 
          desc="Kickstart your prayer life with this week-long devotional guide." 
        />
        <ResourceCard 
          title="21-Day Fasting Plan" 
          type="E-Book" 
          desc="A comprehensive manual for spiritual fasting and breakthrough." 
        />
        <ResourceCard 
          title="Healing Prayer Guide" 
          type="Audio & PDF" 
          desc="Scriptures and declarations for physical and emotional healing." 
        />
        <ResourceCard 
          title="Family Altar Manual" 
          type="Family Kit" 
          desc="Step-by-step guide to establishing family worship at home." 
        />
        <ResourceCard 
          title="Sermon Templates" 
          type="Ministry Tool" 
          desc="Structured outlines for pastors and teachers." 
        />
        <ResourceCard 
          title="Kids Bible Tools" 
          type="Zip Bundle" 
          desc="Coloring sheets, lesson plans, and games for children's ministry." 
        />
      </div>
    </div>
  );
};

const ResourceCard = ({ title, type, desc }: any) => (
  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-gold transition-colors hover:shadow-xl group">
    <div className="flex justify-between items-start mb-6">
      <div className="bg-royal/5 text-royal p-4 rounded-xl group-hover:bg-royal group-hover:text-white transition-colors">
        {type.includes('Audio') ? <Video size={24} /> : type.includes('PDF') ? <FileText size={24} /> : <Download size={24} />}
      </div>
      <span className="text-xs font-bold text-gold uppercase tracking-wider border border-gold/30 px-3 py-1 rounded-full">{type}</span>
    </div>
    <h3 className="text-xl font-bold text-royal mb-3">{title}</h3>
    <p className="text-gray-600 text-sm mb-8 leading-relaxed">{desc}</p>
    <button className="w-full border-2 border-royal text-royal font-bold py-3 rounded-lg hover:bg-royal hover:text-white transition uppercase text-sm tracking-wide">
      Download Now
    </button>
  </div>
);
