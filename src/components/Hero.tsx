import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-[#F9FBFC] via-brand-50/50 to-[#F9FBFC]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gold-200/20 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-100">
              <span className="w-1.5 h-1.5 bg-brand-600 rounded-full"></span>
              <span>Premium Dental Care in New York</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Creating Healthy, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-sky-600">
                Beautiful Smiles.
              </span>
              <br />
              with Advanced Care.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Experience world-class dentistry in a luxurious, relaxing environment. 
              Dr. Sarah Jenkins and her team combine artistry with advanced technology to deliver exceptional results.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#book"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-900/20 group"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+1234567890"
                className="px-8 py-4 bg-white text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-all border border-slate-200 shadow-sm"
              >
                Call Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold text-brand-600">15+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Years Experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold text-brand-600">10k+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Happy Patients</span>
              </div>
              <div className="flex flex-col gap-1 sm:col-span-1 col-span-2">
                <div className="flex -space-x-2 mb-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-100 flex items-center justify-center text-xs font-medium text-brand-700">
                    5.0
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Google Reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-[12px] border-white bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                alt="Dr. Sarah Jenkins - Lead Dentist" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 glass-panel rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Certified Expert</p>
                  <p className="text-xs text-slate-600">American Dental Association</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
