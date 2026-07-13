import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Eleanor Richards",
    treatment: "Smile Makeover",
    image: "https://i.pravatar.cc/150?img=44",
    text: "Dr. Jenkins completely transformed my smile and my confidence. The process was surprisingly relaxing, and the facility feels more like a luxury spa than a dental clinic. I couldn't be happier with the results.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Thorne",
    treatment: "Dental Implants",
    image: "https://i.pravatar.cc/150?img=11",
    text: "I was extremely anxious about getting implants, but the team's professionalism and pain-free approach put me at ease. The final result looks perfectly natural. Worth every penny for this level of care.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Martinez",
    treatment: "Invisalign",
    image: "https://i.pravatar.cc/150?img=5",
    text: "A truly modern dental practice. They use the latest 3D scanning tech so there were no messy impressions. My Invisalign treatment was smooth, and the staff was incredibly accommodating to my busy schedule.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-xs mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
              Stories of <br /> Transformed Smiles
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Don't just take our word for it. Hear from our patients about their experiences 
              with our premium dental care services.
            </p>
            
            <div className="flex gap-4">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center hover:bg-brand-700 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-slate-800 rounded-2xl p-8 md:p-10 border border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-gold-400 fill-gold-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed italic mb-8">
                    "{TESTIMONIALS[current].text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={TESTIMONIALS[current].image} 
                    alt={TESTIMONIALS[current].name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-500"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{TESTIMONIALS[current].name}</h4>
                    <p className="text-brand-400 text-sm">{TESTIMONIALS[current].treatment}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
