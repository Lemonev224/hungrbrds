import { Coffee, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hungry Birds Cafe interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-between min-h-screen pt-24 md:pt-28 pb-8">

        {/* Top: text + buttons */}
        <div className="flex items-center flex-1">
          <div className="max-w-3xl">
            {/* Subtitle */}
            <p
              className="text-white/90 tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 text-xs sm:text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              OAKHAM'S PREMIER COFFEE EXPERIENCE
            </p>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-8 leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Where Every
              <br />
              <span style={{ fontStyle: 'italic' }}>Moment</span> Matters
            </h1>

            <p
              className="text-base sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Experience the art of exceptional coffee in an atmosphere of refined comfort and timeless elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="/menu">
              <button
                className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm tracking-[0.15em]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                EXPLORE MENU
              </button>
              </a>
<a href="#contact">
              <button
                className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm tracking-[0.15em]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                VISIT US
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: info cards — gradient only fades below these */}
        <div className="relative mt-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 sm:p-6">
              <MapPin className="text-white mb-2 sm:mb-3" size={18} strokeWidth={1.5} />
              <p
                className="text-[10px] sm:text-xs tracking-[0.2em] text-white/60 mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                LOCATION
              </p>
              <p
                className="text-white text-xs sm:text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Central Oakham
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 sm:p-6">
              <Clock className="text-white mb-2 sm:mb-3" size={18} strokeWidth={1.5} />
              <p
                className="text-[10px] sm:text-xs tracking-[0.2em] text-white/60 mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                HOURS
              </p>
              <p
                className="text-white text-xs sm:text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                7:00 AM — 6:00 PM
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 sm:p-6">
              <Coffee className="text-white mb-2 sm:mb-3" size={18} strokeWidth={1.5} />
              <p
                className="text-[10px] sm:text-xs tracking-[0.2em] text-white/60 mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                SPECIALTY
              </p>
              <p
                className="text-white text-xs sm:text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Artisan Coffee
              </p>
            </div>
          </div>


        </div>
      </div>

      {/* Scroll Indicator — hidden on mobile to save space */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <p
          className="text-white/60 text-xs tracking-[0.2em]"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
        >
          SCROLL
        </p>
        <div className="w-[1px] h-16 bg-white/30"></div>
      </div>
    </section>
  );
}