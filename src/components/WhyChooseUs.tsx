import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Why Lumina</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
              A New Standard in <br />Dental Excellence
            </h3>
            <p className="text-slate-600 text-lg mb-8">
              We've reimagined the dental experience from the ground up to provide care that is as luxurious as it is effective.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {[
                "Award-Winning Doctors",
                "State-of-the-art Technology",
                "Pain-Free Techniques",
                "Spa-like Environment",
                "Transparent Pricing",
                "Zero Wait Times"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-gold-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fea5f6c810fd?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Dental Clinic" 
              className="rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
