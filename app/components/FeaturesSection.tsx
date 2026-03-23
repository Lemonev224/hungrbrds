import { Coffee, Croissant, Sparkles, Users } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p 
            className="text-gray-500 tracking-[0.3em] mb-4 text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            DISCOVER EXCELLENCE
          </p>
          <h2 
            className="text-5xl md:text-6xl text-gray-900 mb-6"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            The Hungry Birds
            <br />
            <span style={{ fontStyle: 'italic' }}>Experience</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            A sanctuary of refined taste where exceptional coffee meets unparalleled hospitality in the heart of Oakham.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-all duration-300">
                <Coffee className="text-gray-700" size={28} strokeWidth={1.5} />
              </div>
            </div>
            <h3 
              className="text-sm tracking-[0.2em] mb-3 text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            >
              PREMIUM BEANS
            </h3>
            <p 
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Ethically sourced from the world's finest coffee regions, roasted to perfection.
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-all duration-300">
                <Croissant className="text-gray-700" size={28} strokeWidth={1.5} />
              </div>
            </div>
            <h3 
              className="text-sm tracking-[0.2em] mb-3 text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            >
              ARTISAN PASTRIES
            </h3>
            <p 
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Handcrafted daily using traditional methods and locally sourced ingredients.
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-all duration-300">
                <Sparkles className="text-gray-700" size={28} strokeWidth={1.5} />
              </div>
            </div>
            <h3 
              className="text-sm tracking-[0.2em] mb-3 text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            >
              REFINED AMBIANCE
            </h3>
            <p 
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              A carefully curated space designed for comfort, conversation, and contemplation.
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-all duration-300">
                <Users className="text-gray-700" size={28} strokeWidth={1.5} />
              </div>
            </div>
            <h3 
              className="text-sm tracking-[0.2em] mb-3 text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            >
              EXPERT SERVICE
            </h3>
            <p 
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Our passionate team dedicated to creating memorable experiences for every guest.
            </p>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative h-[600px] overflow-hidden group">
            <img
              src="/latte-art.jpg"
              alt="Artisan latte art"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <p 
                className="text-white/80 text-xs tracking-[0.2em] mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                ARTISAN COFFEE
              </p>
              <h3 
                className="text-4xl text-white mb-3"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Crafted with
                <br />
                <span style={{ fontStyle: 'italic' }}>Precision</span>
              </h3>
              <p 
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                Our baristas pour their heart into every cup, creating edible art.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] overflow-hidden group">
            <img
              src="/cupcakes.jpg"
              alt="Handcrafted cupcakes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <p 
                className="text-white/80 text-xs tracking-[0.2em] mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                DAILY SELECTION
              </p>
              <h3 
                className="text-4xl text-white mb-3"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Sweet
                <br />
                <span style={{ fontStyle: 'italic' }}>Delights</span>
              </h3>
              <p 
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                Each pastry is a testament to our commitment to quality and tradition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}