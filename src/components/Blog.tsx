import { ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    title: "The Ultimate Guide to Porcelain Veneers",
    excerpt: "Everything you need to know about transforming your smile with custom porcelain veneers, from the initial consultation to final placement.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
    date: "Oct 15, 2023",
    category: "Cosmetics"
  },
  {
    title: "Why Dental Implants are the Gold Standard",
    excerpt: "Discover why titanium implants offer the most natural, durable, and long-lasting solution for missing teeth.",
    image: "https://images.unsplash.com/photo-1598256989800-fea5f6c810fd?auto=format&fit=crop&q=80&w=600",
    date: "Sep 28, 2023",
    category: "Restorative"
  },
  {
    title: "Maintaining Your Invisalign Results",
    excerpt: "You've finished your aligner treatment. Here are the crucial steps to ensure your teeth stay perfectly straight for life.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
    date: "Sep 12, 2023",
    category: "Orthodontics"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#F9FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Dental Insights</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Latest from the Blog
            </h3>
          </div>
          <a href="#" className="flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors">
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-700">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>5 min read</span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                {article.title}
              </h4>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <span className="text-brand-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
