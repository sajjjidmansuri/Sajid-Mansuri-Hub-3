import { Check } from 'lucide-react';

const PLANS = [
  {
    name: "General Checkup",
    price: "150",
    desc: "Comprehensive exam & professional cleaning.",
    features: ["Full Mouth X-Ray", "Professional Cleaning", "Gum Health Check", "Oral Cancer Screening", "Personalized Care Plan"],
    popular: false
  },
  {
    name: "Smile Makeover",
    price: "1,500",
    desc: "Complete cosmetic transformation package.",
    features: ["Digital Smile Design", "Custom Veneers preview", "Laser Whitening", "Gum Contouring", "Aftercare Kit"],
    popular: true
  },
  {
    name: "Implant Setup",
    price: "2,800",
    desc: "Premium single tooth replacement.",
    features: ["3D CBCT Scan", "Titanium Implant", "Custom Zirconia Crown", "Sedation Options", "Lifetime Warranty"],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F9FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Transparent Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Invest in Your Smile
          </h3>
          <p className="text-slate-600">
            Premium care with clear, upfront pricing. We offer flexible payment plans 
            and work with major insurance providers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl p-8 border ${plan.popular ? 'border-brand-500 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'} transition-all`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-xl font-extrabold text-slate-900 mb-2">{plan.name}</h4>
              <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-slate-400 text-lg font-medium">Starting at</span><br />
                <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-500 shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#book" 
                className={`block w-full py-4 rounded-xl text-center font-medium transition-colors ${plan.popular ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
              >
                Book Consultation
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
