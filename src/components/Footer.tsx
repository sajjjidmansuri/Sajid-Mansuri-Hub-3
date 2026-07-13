import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                LUMINA<span className="text-brand-400">STUDIO</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A premium dental practice dedicated to providing exceptional cosmetic and restorative care in a luxurious environment.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Cosmetic Dentistry', 'Dental Implants', 'Invisalign', 'Teeth Whitening', 'Emergency Care'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-brand-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for dental tips and exclusive offers.</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-500"
              />
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Lumina Dental Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
