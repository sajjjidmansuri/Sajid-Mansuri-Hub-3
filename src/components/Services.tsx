import { motion } from 'motion/react';
import { 
  Smile, ShieldPlus, Sparkles, Stethoscope, 
  Syringe, Activity, HeartPulse, Bone
} from 'lucide-react';

const SERVICES = [
  {
    icon: Sparkles,
    title: "Cosmic Smile Design",
    desc: "Complete smile transformations using digital preview technology and custom veneers."
  },
  {
    icon: Bone,
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements for missing teeth using titanium anchors."
  },
  {
    icon: Smile,
    title: "Invisalign & Braces",
    desc: "Clear aligners and modern orthodontic solutions for perfectly straight teeth."
  },
  {
    icon: ShieldPlus,
    title: "General Dentistry",
    desc: "Comprehensive exams, cleanings, and preventative care for lasting oral health."
  },
  {
    icon: Syringe,
    title: "Pain-Free Root Canals",
    desc: "Advanced endodontic therapy utilizing micro-instrumentation for comfort."
  },
  {
    icon: Activity,
    title: "Teeth Whitening",
    desc: "Professional in-office laser whitening for a brilliantly bright smile in one visit."
  },
  {
    icon: HeartPulse,
    title: "Gum Treatment",
    desc: "Periodontal therapy to restore healthy gums and prevent bone loss."
  },
  {
    icon: Stethoscope,
    title: "Emergency Care",
    desc: "Same-day priority appointments for severe toothaches and dental trauma."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F9FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Comprehensive Dental Care
          </h3>
          <p className="text-lg text-slate-600">
            From routine checkups to complex full-mouth restorations, we offer a complete 
            suite of premium dental services under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a href="#contact" className="text-brand-600 font-medium text-sm inline-flex items-center gap-1 hover:text-brand-700">
                  Learn More <span className="text-lg leading-none">&rarr;</span>
                </a>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
