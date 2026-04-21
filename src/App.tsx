import { motion, useScroll, useTransform } from 'motion/react';
import { Star, ShieldCheck, Clock, CheckCircle2, Phone, ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function App() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <div className="min-h-screen bg-paper overflow-hidden selection:bg-primary/30">
      {/* Header */}
      <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-white font-display font-bold text-xl tracking-tight">Texas Shield Pest</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 border-r border-white/10 pr-6 mr-6">
              <a href="#residential" aria-label="Residential Services" className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer">Residential</a>
              <a href="#commercial" aria-label="Commercial Services" className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer">Commercial</a>
            </div>
            <a href="#pricing" aria-label="Service Plans" className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer">Pricing</a>
            <a href="#reviews" aria-label="Customer Reviews" className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer">Reviews</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://portal.texasshieldpest.com" aria-label="Customer Portal" className="hidden sm:flex text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mr-2">Pay Bill</a>
            <a href="tel:1-800-555-0199" aria-label="Call or Text Texas Shield Pest Control" className="flex items-center gap-2 bg-cta hover:bg-cta/90 text-white px-4 py-2 rounded-full shadow-lg transition-all cursor-pointer transform hover:scale-105 active:scale-95">
              <Phone className="w-4 h-4" />
              <span className="font-bold text-sm tracking-tight">Call / Text (800) 555-0199</span>
            </a>
          </div>
        </div>
      </header>

      {/* Cinematic Hero */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20 md:py-32">
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
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <Star className="w-4 h-4 text-cta fill-cta" />
                <span className="text-white text-xs font-semibold uppercase tracking-wider">Top-Rated Texas Pest Control</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6 text-balance drop-shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Protecting Texas Homes<br />
              <span className="text-cta">Since 1998.</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-white/80 max-w-xl font-medium leading-relaxed mb-10 text-balance"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Professional pest eradication with a 100% Money-Back Guarantee. If the bugs come back between treatments, we return for free—no questions asked.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center gap-6 text-white/80 text-sm font-medium"
            >
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cta" /> Licensed & Insured</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cta" /> Pet-Friendly</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cta" /> 24/7 Support</div>
            </motion.div>
          </div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl relative max-w-lg mx-auto w-full"
          >
            <div className="absolute -top-4 -right-4 bg-cta text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform rotate-3">
              SAVE $50 TODAY
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">Get Your Free Quote</h3>
            <p className="text-white/60 text-sm mb-6">Takes less than 60 seconds.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  aria-label="First Name"
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:bg-white/10 transition-all outline-none"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  aria-label="Last Name"
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:bg-white/10 transition-all outline-none"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                aria-label="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:bg-white/10 transition-all outline-none"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                aria-label="Phone Number"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:bg-white/10 transition-all outline-none"
              />
              <select 
                aria-label="Pest Problem"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer"
              >
                <option value="" className="bg-ink text-white">Select Pest Problem</option>
                <option value="ants" className="bg-ink text-white">Ants / Roaches</option>
                <option value="termites" className="bg-ink text-white">Termites</option>
                <option value="rodents" className="bg-ink text-white">Rodents</option>
                <option value="mosquitoes" className="bg-ink text-white">Mosquitoes</option>
                <option value="other" className="bg-ink text-white">Other</option>
              </select>
              
              <button 
                type="submit" 
                aria-label="Get My Quote"
                className="w-full bg-cta hover:bg-cta/90 text-white font-bold py-4 rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all transform active:scale-[0.98] mt-2 cursor-pointer"
              >
                Get My Instant Quote
              </button>
              
              <p className="text-[10px] text-white/40 text-center px-4 leading-tight">
                By clicking, you agree to be contacted via call or text about our services.
              </p>
            </form>
          </motion.div>
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
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 md:gap-12 opacity-90">
             <div className="flex items-center gap-3">
               <div className="flex -space-x-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-cta fill-cta" />)}
               </div>
               <span className="font-bold text-ink/80 text-sm md:text-base">4.9/5 Rating on Google</span>
             </div>
             
             <div className="flex items-center gap-2 text-ink/70 font-semibold text-sm md:text-base">
                <ShieldCheck className="w-6 h-6 text-primary" /> 
                <span>EPA Approved Treatments</span>
             </div>

             <div className="flex items-center gap-2 text-ink/70 font-semibold text-sm md:text-base">
                <Award className="w-6 h-6 text-primary" /> 
                <span>BBB A+ Accredited</span>
             </div>

             <div className="flex items-center gap-2 text-ink/70 font-semibold text-sm md:text-base">
                <Clock className="w-6 h-6 text-primary" /> 
                <span>24/7 Rapid Response</span>
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
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.1)] transition-all cursor-pointer group"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-ink mb-4">{feature.title}</h3>
                <p className="text-ink/60 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Service Plans */}
      <section id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-ink mb-6 tracking-tight">Simple, Transparent Pricing.</h2>
            <p className="text-lg text-ink/60 font-medium">No hidden fees or long-term contracts. Just honest protection for your family.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Basic Shield", 
                price: "39", 
                desc: "Essential protection against common Texas pests.", 
                features: ["Ants & Roaches", "Spider Control", "Quarterly Service", "100% Guarantee"],
                popular: false
              },
              { 
                name: "Pro Shield", 
                price: "59", 
                desc: "Complete protection plus seasonal barrier treatments.", 
                features: ["Everything in Basic", "Scorpion Control", "Wasps & Hornets", "Free Re-Services", "Priority Support"],
                popular: true
              },
              { 
                name: "Total Shield", 
                price: "89", 
                desc: "Full property protection including termites and mosquitoes.", 
                features: ["Everything in Pro", "Termite Monitoring", "Mosquito Protection", "Rodent Prevention", "Annual Inspection"],
                popular: false
              }
            ].map((plan, i) => (
              <div 
                key={i}
                className={`p-8 md:p-10 rounded-[2.5rem] border ${plan.popular ? 'border-primary bg-primary/5 shadow-2xl scale-105' : 'border-gray-100 bg-white shadow-sm'} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold text-ink mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-display font-black text-ink">${plan.price}</span>
                  <span className="text-ink/40 font-semibold">/mo</span>
                </div>
                <p className="text-sm text-ink/60 mb-8 leading-relaxed font-medium">{plan.desc}</p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-ink/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button aria-label={`Choose ${plan.name} plan`} className={`w-full py-4 rounded-2xl font-bold transition-all cursor-pointer ${plan.popular ? 'bg-cta text-white shadow-lg' : 'bg-ink text-white hover:bg-black'}`}>
                  Choose This Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Way Guarantee */}
      <section id="guarantee" className="py-24 md:py-32 bg-paper border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-ink mb-8 tracking-tight">The 4-Way Ironclad Guarantee.</h2>
              <p className="text-lg text-ink/60 font-medium mb-10 leading-relaxed">We don't just spray and pray. We back every single treatment with a set of promises that no other Texas company can match.</p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Money-Back Guarantee", desc: "If you're not 100% happy after 30 days, we'll refund your last service.", icon: ShieldCheck },
                  { title: "Price Match Promise", desc: "Show us a better quote from a licensed competitor, and we'll beat it by 10%.", icon: Award },
                  { title: "Same-Day Results", desc: "We guarantee a technician at your door within 24 hours of your call.", icon: Clock },
                  { title: "Family Safety First", desc: "100% botanical-based options available that are ruthless on bugs, safe for kids.", icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-display font-bold text-ink">{item.title}</h4>
                    <p className="text-sm text-ink/50 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200" alt="Happy family in a safe home" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl -rotate-6 hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />)}
                    </div>
                    <div>
                       <div className="font-black text-ink">Join 2,450+</div>
                       <div className="text-xs text-ink/40 font-bold uppercase tracking-widest">Happy Texans</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
             <h2 className="text-4xl md:text-5xl font-display font-extrabold text-ink mb-6 tracking-tight">Professional Protection in 3 Steps.</h2>
             <p className="text-lg text-ink/60 font-medium">Getting rid of bugs shouldn't be a chore. We've simplified the process to save you time.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
             <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />
             {[
               { step: "01", title: "Get Your Quote", desc: "Fill out the form or give us a quick call to get a transparent price for your home." },
               { step: "02", stepTitle: "Inspection Day", desc: "A licensed pro inspects your home to identify nests and entry points at the source." },
               { step: "03", stepTitle: "Long-Term Shield", desc: "We apply targeted, safe treatments and schedule follow-ups to ensure they stay gone." }
             ].map((item, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-display font-black text-2xl mb-8 shadow-[0_0_30px_rgba(30,64,175,0.3)]">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink mb-4">{item.stepTitle || item.title}</h3>
                  <p className="text-ink/60 font-medium leading-relaxed max-w-xs">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Split */}
      <section className="flex flex-col md:flex-row h-auto min-h-[500px]">
         <div id="residential" className="flex-1 relative group overflow-hidden flex items-center justify-center p-12 bg-ink">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200')] opacity-30 group-hover:scale-110 transition-transform duration-700 bg-cover bg-center" />
            <div className="relative z-10 text-center">
               <h3 className="text-4xl font-display font-extrabold text-white mb-6">Residential Shield</h3>
               <p className="text-white/70 mb-8 max-w-sm mx-auto font-medium">Protecting your family, pets, and the sanctity of your home from invasive Texas pests.</p>
               <button aria-label="Explore residential services" className="px-8 py-4 bg-white text-ink font-bold rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer">Explore Home Service</button>
            </div>
         </div>
         <div id="commercial" className="flex-1 relative group overflow-hidden flex items-center justify-center p-12 bg-primary">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200')] opacity-30 group-hover:scale-110 transition-transform duration-700 bg-cover bg-center" />
            <div className="relative z-10 text-center">
               <h3 className="text-4xl font-display font-extrabold text-white mb-6">Commercial Protection</h3>
               <p className="text-white/70 mb-8 max-w-sm mx-auto font-medium">Professional grade eradication for warehouses, restaurants, and office complexes.</p>
               <button aria-label="Explore commercial services" className="px-8 py-4 bg-ink text-white font-bold rounded-full hover:bg-black transition-all cursor-pointer">Explore Business Service</button>
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

      {/* Mid-Page CTA */}
      <section className="py-20 bg-cta">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
           <div className="text-center md:text-left">
             <h2 className="text-3xl md:text-4xl font-display font-black mb-2">Ready for a Bug-Free Home?</h2>
             <p className="text-white/80 font-bold">Call before noon for Same-Day Service in most areas.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a href="tel:1-800-555-0199" className="bg-ink hover:bg-black text-white px-10 py-5 rounded-full font-black text-center shadow-2xl transition-all transform hover:scale-105 active:scale-95">Call (800) 555-0199</a>
              <button className="bg-white text-cta px-10 py-5 rounded-full font-black text-center shadow-2xl transition-all transform hover:scale-105 active:scale-95">Text Us Now</button>
           </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                 <h2 className="text-3xl font-display font-black text-ink mb-6">Service Areas</h2>
                 <p className="text-ink/60 font-medium leading-relaxed mb-8">We provide professional pest protection across the greater Texas region, with local technicians stationed in every major hub.</p>
                 <div className="inline-flex items-center gap-2 text-primary font-bold">
                    <ShieldCheck className="w-5 h-5" />
                    Licensed in the State of Texas
                 </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                 {["Austin", "Houston", "Dallas", "San Antonio", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Lubbock", "Laredo", "Irving", "Garland", "Frisco", "Amarillo", "Mckinney"].map((city, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-ink/70 hover:text-primary transition-colors cursor-pointer">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                       {city}
                    </div>
                 ))}
              </div>
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
             <button aria-label="Claim your free inspection" className="bg-cta hover:bg-cta/90 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer transform hover:scale-105 active:scale-95">
                Claim Free Inspection
                <ArrowRight className="w-6 h-6" />
              </button>
              <a href="tel:1-800-555-0199" aria-label="Call now for a quote" className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full border border-white/30 transition-all flex items-center justify-center gap-3 cursor-pointer">
                <Phone className="w-6 h-6" />
                Call (800) 555-0199
              </a>
          </div>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="bg-paper pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
              <div className="col-span-2">
                 <div className="flex items-center gap-2 mb-6">
                    <Shield className="w-8 h-8 text-ink" />
                    <span className="text-ink font-display font-bold text-xl tracking-tight">Texas Shield Pest</span>
                 </div>
                 <p className="text-ink/60 text-sm font-medium leading-relaxed max-w-xs mb-8">
                    Texas' most trusted pest eradication experts since 1998. We protect what matters most with safe, aggressive treatments.
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center text-ink cursor-pointer hover:bg-primary hover:text-white transition-all"><Users className="w-5 h-5" /></div>
                    <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center text-ink cursor-pointer hover:bg-primary hover:text-white transition-all"><Shield className="w-5 h-5" /></div>
                 </div>
              </div>
              
              <div>
                 <h4 className="font-display font-bold text-ink mb-6">Services</h4>
                 <ul className="space-y-4 text-sm font-bold text-ink/50">
                    <li className="hover:text-primary cursor-pointer transition-colors">Residential Pest</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Commercial Pest</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Termite Control</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Mosquito Shield</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Bed Bug Heat</li>
                 </ul>
              </div>

              <div>
                 <h4 className="font-display font-bold text-ink mb-6">Company</h4>
                 <ul className="space-y-4 text-sm font-bold text-ink/50">
                    <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Service Areas</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">The Guarantee</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
                 </ul>
              </div>

              <div>
                 <h4 className="font-display font-bold text-ink mb-6">Contact</h4>
                 <ul className="space-y-4 text-sm font-bold text-ink/50">
                    <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (800) 555-0199</li>
                    <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon-Fri: 8am-6pm</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Sat: 9am-2pm</li>
                    <li className="mt-4 pt-4 border-t border-gray-100">123 Pest Drive,<br />Austin, TX 78701</li>
                 </ul>
              </div>
           </div>
           
           <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-ink/40 text-xs font-black uppercase tracking-widest">
              <div>© {new Date().getFullYear()} Texas Shield Pest Control. All rights reserved.</div>
              <div className="flex items-center gap-8">
                 <span className="hover:text-ink cursor-pointer">Privacy Policy</span>
                 <span className="hover:text-ink cursor-pointer">Terms of Service</span>
                 <span className="hover:text-ink cursor-pointer">Sitemap</span>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
