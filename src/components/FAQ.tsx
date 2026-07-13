import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    q: "How often should I visit the dentist for a checkup?",
    a: "We recommend visiting every 6 months for a routine checkup and professional cleaning to maintain optimal oral health and catch potential issues early."
  },
  {
    q: "Do you offer pain-free dentistry?",
    a: "Yes! We utilize advanced technology including laser dentistry and modern local anesthesia techniques to ensure a comfortable, pain-free experience."
  },
  {
    q: "How long does teeth whitening last?",
    a: "Professional teeth whitening can last from 1 to 3 years, depending on your dietary habits (like coffee or wine consumption) and oral hygiene routine."
  },
  {
    q: "What is the difference between Invisalign and traditional braces?",
    a: "Invisalign uses clear, removable aligners that are virtually invisible, whereas traditional braces use metal or ceramic brackets fixed to the teeth. Invisalign offers more flexibility and easier cleaning."
  },
  {
    q: "Are dental implants safe?",
    a: "Yes, dental implants are a highly safe and established procedure with a success rate of over 95%. They act as a permanent replacement for the tooth root."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Questions & Answers</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === idx ? 'border-brand-200 bg-brand-50/50' : 'border-slate-200 bg-white'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-medium text-slate-900 pr-8">{faq.q}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === idx ? 'bg-brand-600 text-white rotate-45' : 'bg-slate-100 text-slate-500'}`}>
                  <Plus className="w-5 h-5" />
                </span>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
