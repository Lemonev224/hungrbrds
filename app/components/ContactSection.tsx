import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] text-gray-500 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            FIND US
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-gray-900"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            Come Visit Us
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Contact Details */}
          <div className="space-y-10">
            <div className="flex gap-5">
              <div className="mt-1 flex-shrink-0">
                <MapPin size={20} strokeWidth={1.5} className="text-gray-400" />
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.2em] text-gray-400 mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                >
                  ADDRESS
                </p>
                <p
                  className="text-gray-900 text-lg leading-relaxed"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  2 Burley Road<br />
                  Oakham<br />
                  Rutland, LE15 6DH
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mt-1 flex-shrink-0">
                <Phone size={20} strokeWidth={1.5} className="text-gray-400" />
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.2em] text-gray-400 mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                >
                  PHONE
                </p>
                <a
                  href="tel:01572868419"
                  className="text-gray-900 text-lg hover:text-gray-600 transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  01572 868526
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mt-1 flex-shrink-0">
                <Clock size={20} strokeWidth={1.5} className="text-gray-400" />
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.2em] text-gray-400 mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                >
                  OPENING HOURS
                </p>
                <div
                  className="text-gray-900 space-y-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.95rem' }}
                >
                  <div className="flex justify-between gap-8">
                    <span>Monday – Tuesday</span>
                    <span className="text-gray-600">9:30 – 16:30</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Wednesday – Saturday</span>
                    <span className="text-gray-600">9:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-5 pt-4 border-t border-gray-100">
              <a
                href="https://www.facebook.com/bestcoffeeshopinoakham"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.1em' }}
              >
                <Facebook size={16} strokeWidth={1.5} />
                FACEBOOK
              </a>
              <a
                href="https://www.instagram.com/hungrybirdsoakham/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.1em' }}
              >
                <Instagram size={16} strokeWidth={1.5} />
                INSTAGRAM
              </a>
            </div>
          </div>

          {/* Right — Embedded Google Map */}
          <div className="w-full h-[450px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.123456789!2d-0.7325!3d52.6703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877c1e0e0e0e0e1%3A0x1234567890abcdef!2s2%20Burley%20Rd%2C%20Oakham%20LE15%206DH!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hungry Birds location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}