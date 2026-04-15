/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Utensils, 
  Coffee, 
  Leaf, 
  Heart 
} from "lucide-react";

const MENU_CATEGORIES = [
  {
    title: "Savory Crepes",
    items: [
      { name: "The Californian", description: "Avocado, tomato, spinach, cheddar, and pesto.", price: "$14.50" },
      { name: "Smoked Salmon", description: "Capers, red onion, cream cheese, and dill.", price: "$16.00" },
      { name: "Pesto Chicken", description: "Grilled chicken, mushrooms, jack cheese, and pesto.", price: "$15.50" }
    ]
  },
  {
    title: "Sweet Crepes",
    items: [
      { name: "Nutella Bliss", description: "Nutella, strawberries, and whipped cream.", price: "$11.00" },
      { name: "Lemon Sugar", description: "Fresh lemon juice, butter, and powdered sugar.", price: "$9.50" },
      { name: "Caramel Apple", description: "Warm apples, cinnamon, and house-made caramel.", price: "$12.00" }
    ]
  },
  {
    title: "Omelettes & Waffles",
    items: [
      { name: "Garden Omelette", description: "Three eggs, seasonal veggies, and goat cheese.", price: "$15.00" },
      { name: "Belgian Waffle", description: "Thick waffle with maple syrup and fresh berries.", price: "$13.00" }
    ]
  },
  {
    title: "Burgers & Sandwiches",
    items: [
      { name: "Pea's Burger", description: "Grass-fed beef, caramelized onions, and aioli.", price: "$16.50" },
      { name: "Turkey Club", description: "Roasted turkey, bacon, lettuce, and tomato.", price: "$14.00" }
    ]
  }
];

const Placeholder = ({ className }: { className?: string }) => (
  <div className={`bg-white flex items-center justify-center text-earth/20 font-bold uppercase tracking-widest text-xs ${className}`}>
    PLACE HOLDER
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-rose/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-cream">
              <Leaf size={20} />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-earth">Sweet Pea's</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-earth/70">
            <a href="#about" className="hover:text-sage transition-colors">About</a>
            <a href="#menu" className="hover:text-sage transition-colors">Menu</a>
            <a href="#catering" className="hover:text-sage transition-colors">Catering</a>
            <a href="#location" className="hover:text-sage transition-colors">Location</a>
          </div>

          <a 
            href="https://orders.cake.net/10181953" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-sage text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sage/90 transition-all shadow-sm"
          >
            Order Online
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 floral-pattern -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-rose/10 text-rose text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Downtown Los Gatos
            </span>
            <h1 className="text-6xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-earth">
              It's All <span className="text-sage italic">Good!</span>
            </h1>
            <p className="text-lg text-earth/70 mb-8 max-w-md leading-relaxed">
              Welcome to your neighborhood home for fresh crepes, hearty omelettes, and the warmest patio in town. Serving Los Gatos for over 15 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="bg-earth text-cream px-8 py-4 rounded-full font-medium hover:bg-earth/90 transition-all flex items-center gap-2">
                View Menu <ChevronRight size={18} />
              </a>
              <div className="flex items-center gap-3 text-sm text-earth/60 font-medium">
                <Clock size={16} className="text-sage" />
                Open Daily: 8am - 3pm
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <Placeholder className="w-full h-full" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-2xl shadow-xl border border-sage/10 max-w-[200px]">
              <Heart className="text-rose mb-2" fill="currentColor" />
              <p className="text-sm font-medium italic">"The best savory crepes in the Bay Area!"</p>
              <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50">— Local Regular</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-sage/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-serif font-bold mb-8">A Family Tradition</h2>
              <p className="text-xl text-earth/80 leading-relaxed mb-6">
                Family-owned and operated, Sweet Pea's has been a staple of the Los Gatos community for over 15 years. We believe in the power of a good meal to bring people together.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center text-sage shrink-0">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Fresh & Local</h4>
                    <p className="text-sm text-earth/60">We source our ingredients from local farms to ensure every bite is fresh.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center text-sage shrink-0">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Gluten-Free Options</h4>
                    <p className="text-sm text-earth/60">Most of our crepes can be made gluten-free with our buckwheat batter.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Placeholder className="rounded-3xl shadow-lg aspect-[3/4]" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">Our Menu</h2>
            <p className="text-earth/60 uppercase tracking-widest text-sm font-bold">Crafted with love daily</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {MENU_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-2xl font-serif font-bold mb-8 pb-2 border-b-2 border-rose/20 inline-block">
                  {category.title}
                </h3>
                <div className="space-y-8">
                  {category.items.map((item, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-lg group-hover:text-sage transition-colors">{item.name}</h4>
                        <span className="font-serif font-bold text-sage">{item.price}</span>
                      </div>
                      <p className="text-sm text-earth/60 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-earth text-cream rounded-[2.5rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage/20 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h3 className="text-3xl font-serif mb-4 relative z-10">Looking for more?</h3>
            <p className="text-cream/70 mb-4 max-w-xl mx-auto relative z-10">
              We also serve fresh salads, quiches, and seasonal specials. Visit us to see our full daily board!
            </p>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full floral-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Placeholder className="rounded-2xl shadow-md aspect-square" />
                <Placeholder className="rounded-2xl shadow-md aspect-square mt-8" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-sage font-bold uppercase tracking-widest text-xs mb-4 block">Events & Parties</span>
              <h2 className="text-5xl font-serif font-bold mb-6">Catering by Sweet Pea's</h2>
              <p className="text-lg text-earth/70 mb-8 leading-relaxed">
                Bring the magic of our creperie to your next event. From office lunches to garden parties, we offer party-size crepes, sandwich platters, and our famous house-made quiches.
              </p>
              <ul className="space-y-4 mb-10">
                {["Custom Crepe Stations", "Artisanal Sandwich Platters", "Seasonal Quiches", "Fresh Salad Bowls"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center text-cream">
                      <ChevronRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="border-2 border-earth text-earth px-8 py-4 rounded-full font-bold hover:bg-earth hover:text-cream transition-all">
                Inquire About Catering
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-24 bg-sage/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-cream rounded-[3rem] shadow-xl overflow-hidden grid md:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-4xl font-serif font-bold mb-8">Visit Us</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-sage shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-earth/70">453 N Santa Cruz Ave<br />Los Gatos, CA 95030</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-sage shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Hours</h4>
                    <p className="text-earth/70">Monday - Sunday<br />8:00 AM - 3:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-sage shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-earth/70">(408) 354-3144</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex gap-4">
                <a 
                  href="https://www.instagram.com/sweetpeascrepes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-earth text-cream rounded-full flex items-center justify-center hover:bg-sage transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/SweetPeasCafeCateringLosGatos/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-earth text-cream rounded-full flex items-center justify-center hover:bg-sage transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div className="h-[400px] md:h-auto bg-sage/20 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.6433256038!2d-121.983!3d37.227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e359999999999%3A0x0!2zMzfCsDEzJzM3LjIiTiAxMjHCsDU4JzU4LjgiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                className="w-full h-full grayscale contrast-125 opacity-80"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth text-cream/80 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-cream/10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center text-cream">
                  <Leaf size={16} />
                </div>
                <span className="text-lg font-serif font-bold text-cream">Sweet Pea's</span>
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/sweetpeascrepes/" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-sage transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/SweetPeasCafeCateringLosGatos/" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-sage transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
              <a href="#about" className="hover:text-sage transition-colors">About</a>
              <a href="#menu" className="hover:text-sage transition-colors">Menu</a>
              <a href="#catering" className="hover:text-sage transition-colors">Catering</a>
              <a href="#location" className="hover:text-sage transition-colors">Location</a>
            </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase font-medium">
            <p>© {new Date().getFullYear()} Sweet Pea's Cafe & Catering. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart size={10} className="text-rose" fill="currentColor" /> in Los Gatos
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
