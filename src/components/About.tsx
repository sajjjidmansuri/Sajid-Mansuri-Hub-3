import { motion } from 'motion/react';
import { CheckCircle2, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                alt="Clinic Interior" 
                className="rounded-3xl w-full h-64 object-cover mt-12 shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" 
                alt="Dental Operation" 
                className="rounded-3xl w-full h-80 object-cover shadow-xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-50 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">About The Doctor</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Meet Dr. Sarah Jenkins, <br />
              <span className="text-slate-500 text-3xl md:text-4xl">DDS, FAACD</span>
            </h3>
            
            <div className="prose prose-slate prose-lg text-slate-600 mb-8">
              <p>
                With over 15 years of dedicated practice in cosmetic and restorative dentistry, 
                Dr. Jenkins is committed to providing a pain-free, luxurious dental experience. 
                Her philosophy centers around the belief that a healthy smile is the foundation of overall wellness and confidence.
              </p>
              <p>
                A graduate of NYU College of Dentistry, she has completed advanced training in implantology and smile design, 
                earning her fellowship with the American Academy of Cosmetic Dentistry.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {[
                "Fellow of the American Academy of Cosmetic Dentistry",
                "Advanced Training in Implantology & Oral Surgery",
                "Pioneer in Pain-Free Laser Dentistry",
                "Voted 'Top Dentist' by NY Magazine 5 years running"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-slate-900">Sarah Jenkins</span>
                <span className="text-sm text-brand-600 font-medium">Lead Dentist & Founder</span>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                  <Award className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
