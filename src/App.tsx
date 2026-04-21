import { motion, useScroll, useTransform } from 'motion/react';
import { Star, ShieldCheck, Clock, CheckCircle2, Phone, ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function App() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <div className="min-h-screen bg-paper overflow-hidden selection:bg-primary/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-white font-display font-bold text-xl tracking-tight">Texas Shield Pest</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Services</a>
            <a href="#reviews" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Reviews</a>
            <a href="#guarantee" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Guarantee</a>
          </div>
          <a href="tel:1-800-555-0199" className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-white px-5 py-2.5 rounded-full border border-primary/30 transition-all">
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm">(800) 555-0199</span>
          </a>
        </div>
      </header>

      {/* Cinematic Hero */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=2560" 
            alt="Pristine Texas home exterior at golden hour" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Very moody gradient overlay to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col justify-center pt-20">
          <div className="max-w-3xl">
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-white text-xs font-semibold uppercase tracking-wider">Top-Rated Texas Pest Control</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6 text-balance drop-shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Same-Day Service.<br />
              <span className="text-primary">100% Guaranteed.</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed mb-10 text-balance"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              We protect your home and family with aggressive, kid-safe, and pet-friendly treatments. If bugs come back, so do we—for free.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-primary hover:bg-primary-dark text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full btn-glow flex items-center justify-center gap-3 w-full sm:w-auto transition-colors">
                Book Free Inspection
                <ArrowRight className="w-6 h-6" />
              </button>
              <div className="flex items-center justify-center sm:justify-start gap-4 px-4 text-white/80 text-sm font-medium">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Licensed</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Insured</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-white border-b border-gray-100 py-8 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12 opacity-80">
             <div className="flex items-center gap-3">
               <div className="flex -space-x-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
               </div>
               <span className="font-bold text-ink/80">4.9/5 Average Rating</span>
             </div>
             
             <div className="flex items-center gap-2 text-ink/70 font-semibold font-display">
                <ShieldCheck className="w-6 h-6 text-primary" /> 
                <span>Family Owned & Operated</span>
             </div>

             <div className="flex items-center gap-2 text-ink/70 font-semibold font-display">
                <Award className="w-6 h-6 text-primary" /> 
                <span>20+ Years Experience</span>
             </div>

             <div className="flex items-center gap-2 text-ink/70 font-semibold font-display">
                <Clock className="w-6 h-6 text-primary" /> 
                <span>24/7 Emergency Service</span>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section id="services" className="py-24 md:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-ink mb-6 tracking-tight">Pest control that actually works. No excuses.</h2>
            <p className="text-lg text-ink/60 font-medium">Texas bugs are relentless, so we have to be too. Our treatments strike hard at the source while remaining completely safe for everything with two legs or four.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Same-Day Eradication", desc: "Call before noon, and we are at your door today. Don't sleep another night with unwanted guests.", icon: Clock },
              { title: "Kid & Pet Safe", desc: "Targeted botanical and low-toxicity formulas that are ruthless on bugs but harmless to your family.", icon: Shield },
              { title: "The Ironclad Guarantee", desc: "If you see a single bug between scheduled treatments, we return and retreat for absolutely free.", icon: Award },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-ink mb-4">{feature.title}</h3>
                <p className="text-ink/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 md:py-32 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
             <div className="max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tight">Don't take our word for it.</h2>
               <p className="text-lg text-white/60">Over 2,000 Texas homeowners trust us to protect their property.</p>
             </div>
             <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-primary fill-primary" />)}
               </div>
               <span className="font-bold text-xl ml-2 tracking-tight">4.9 on Google</span>
             </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Sarah Jenkins", role: "Austin Homeowner", review: "I called at 8 AM because of a severe ant problem in our kitchen. By 11 AM, a tech was here. Super professional, explained everything, and I haven't seen an ant since." },
                { name: "Marcus T.", role: "Property Manager", review: "These guys are the real deal. I've used three other companies before finding them. The difference in service and results is night and day. Worth every penny." },
                { name: "Elena Rodriguez", role: "Dallas Resident", review: "As a mom with two toddlers and a dog, I was terrified of harsh chemicals. The tech walked me through their botanical treatments. Bugs are gone, family is safe." }
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
                >
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-primary fill-primary" />)}
                  </div>
                  <p className="text-white/90 font-medium leading-relaxed mb-8">"{review.review}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-display font-bold">{review.name}</div>
                      <div className="text-white/50 text-sm">{review.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tight drop-shadow-md">Ready to take back your home?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">Get a transparent quote in 5 minutes. No high-pressure sales, just honest protection.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-ink hover:bg-black text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center gap-3">
                Claim Free Inspection
                <ArrowRight className="w-6 h-6" />
              </button>
              <a href="tel:1-800-555-0199" className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full border border-white/30 transition-all flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                Call (800) 555-0199
              </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-paper py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-ink" />
            <span className="text-ink font-display font-bold text-lg tracking-tight">Texas Shield Pest</span>
          </div>
          <div className="text-ink/50 text-sm font-medium">
            © {new Date().getFullYear()} Texas Shield Pest Control. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
