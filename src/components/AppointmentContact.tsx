import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

export default function AppointmentContact() {
  return (
    <section id="book" className="py-24 bg-[#F9FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-2 bg-slate-900 text-white p-10 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-extrabold text-white mb-2">Get in Touch</h3>
            <p className="text-slate-400 mb-10">We'd love to hear from you. Our friendly team is always here to chat.</p>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Our Location</h4>
                  <p className="text-slate-400 text-sm">123 Park Avenue, Suite 400<br />New York, NY 10017</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Contact Details</h4>
                  <p className="text-slate-400 text-sm">Phone: (555) 123-4567<br />Email: hello@luminastudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Business Hours</h4>
                  <p className="text-slate-400 text-sm">Monday - Friday: 8am - 6pm<br />Saturday: 9am - 2pm<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Side */}
          <div className="lg:col-span-3 p-10 md:p-12">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Book an Appointment</h3>
            <p className="text-slate-500 mb-8">Fill out the form below and we will get back to you to confirm your slot.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="(555) 000-0000" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all appearance-none">
                    <option>General Checkup</option>
                    <option>Cosmetic Consultation</option>
                    <option>Teeth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Emergency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Notes</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="Any specific concerns or symptoms?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
                Request Appointment
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
