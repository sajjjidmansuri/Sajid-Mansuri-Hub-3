import { useState } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

const GALLERY = [
  {
    id: 1,
    title: "Veneers & Whitening",
    before: "https://images.unsplash.com/photo-1598256989800-fea5f6c810fd?auto=format&fit=crop&q=80&w=600", // placeholder
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600", // placeholder
    category: "Cosmetics"
  },
  {
    id: 2,
    title: "Invisalign Transformation",
    before: "https://images.unsplash.com/photo-1598256989800-fea5f6c810fd?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
    category: "Orthodontics"
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Cosmetics', 'Orthodontics', 'Implants'];

  return (
    <section id="portfolio" className="py-24 bg-[#F9FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Clinical Excellence</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Before & After Gallery
          </h3>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {GALLERY.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
            >
              <div className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 mb-4 cursor-ew-resize">
                {/* Simulated Before/After Slider for demonstration */}
                <img src={item.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white">
                  <img src={item.before} alt="Before" className="absolute top-0 left-0 h-full w-[200%] max-w-none object-cover grayscale brightness-75" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <MoveHorizontal className="w-5 h-5 text-slate-700" />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">Before</div>
                <div className="absolute bottom-4 right-4 bg-brand-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">After</div>
              </div>
              <div className="px-2">
                <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{item.category}</span>
                <h4 className="text-lg font-extrabold text-slate-900 mt-1">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
