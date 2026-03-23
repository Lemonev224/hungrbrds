import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Menu — Hungry Birds Coffee Shop Oakham',
  description: 'Full menu of Hungry Birds coffee shop, Oakham.',
};

const menuSections = [
  {
    title: 'Breakfast',
    note: null,
    items: [
      { name: 'Eggs Benedict', price: '£8.30', description: null },
      { name: 'Toasted Sourdough with Avocado, Tomato & Poached Egg', price: '£8.30', description: null },
      { name: 'Poached Egg on Toast', price: '£7.50', description: null },
      { name: 'Mushroom Benedict', price: '£8.30', description: null },
      { name: 'Scrambled Egg on Toast', price: '£7.50', description: null },
      { name: 'Two Slices of Toast with Butter & Preserves', price: '£3.50', description: null },
      { name: 'Bacon Sandwich', price: '£5.30', description: null },
      { name: 'Muesli with Honey, Yoghurt & Apple', price: '£5.50', description: null },
      { name: "Nelson's Sausage Sandwich", price: '£6.00', description: null },
      { name: "Nelson's Bacon & Sausage Sandwich", price: '£7.00', description: null },
      {
        name: 'Hungry Birds Full English',
        price: '£9.80',
        description: 'Two bacon rashers, sausage, tomato, poached egg, beans, mushrooms and hash brown — served with white or brown toast.',
        highlight: true,
      },
    ],
    extras: ['Extra Bacon / Sausage — £1.50', 'Extra Egg etc — £1.20'],
  },
  {
    title: 'Jacket Potato',
    note: 'Baked potato served with salad. Choice of fillings: Cheese, Coleslaw, Beans or Tuna Mayo.',
    items: [
      { name: 'Just Butter', price: '£6.50', description: null },
      { name: '1 Filling', price: '£7.00', description: null },
      { name: '2 Fillings', price: '£7.80', description: null },
    ],
  },
  {
    title: 'Soup of the Day',
    note: "Please enquire at the till for today's soup. Served with toasted sourdough and butter.",
    items: [],
  },
  {
    title: 'Specials',
    note: 'A blackboard towards the front of the café lists our daily specials.',
    items: [],
  },
  {
    title: 'Baby Birds',
    note: 'Kids sandwich meal with chopped apple, cucumber and crisps.',
    items: [
      { name: 'Ham, Cheese, Jam or Marmite', price: '£5.50', description: null },
    ],
  },
  {
    title: 'Hot Drinks',
    note: null,
    items: [
      { name: 'Flat White', price: '£2.85', description: null },
      { name: 'Americano', price: '£2.50–£2.70', description: null },
      { name: 'Latte', price: '£2.85', description: null },
      { name: 'Cappuccino', price: '£2.75–£2.95', description: null },
      { name: 'Mocha', price: '£2.85–£3.00', description: null },
      { name: 'Hot Chocolate', price: '£2.70', description: '+ Cream £0.50 · + Marshmallows £0.50' },
      { name: 'White Hot Chocolate', price: '£2.70', description: '+ Cream £0.50 · + Marshmallows £0.50' },
      { name: 'Cafetiere', price: '£2.60', description: null },
      { name: 'Cortado', price: '£2.65', description: null },
      { name: 'Matcha Latte', price: '£3.50', description: null },
      { name: 'Pumpkin Latte', price: '£3.50', description: null },
      { name: 'Chai Latte', price: '£3.50', description: null },
      { name: 'Macchiato', price: '£2.40', description: null },
      { name: 'Espresso', price: '£2.30–£2.50', description: null },
      { name: 'Extra Shot of Coffee', price: '£1.00', description: null },
      { name: 'Syrups', price: '£1.00', description: null },
    ],
  },
  {
    title: 'Milkshakes & Smoothies',
    note: 'Full list of smoothies and milkshakes can be found on the blackboard to the right of the till.',
    items: [
      { name: 'Smoothies', price: '£3.50', description: null },
      { name: 'Milkshakes', price: '£3.50–£4.50', description: null },
      { name: 'Freakshakes', price: '£5.50', description: null },
    ],
  },
  {
    title: 'Cold Drinks',
    note: null,
    items: [
      { name: 'Bottled Sparkling Water', price: '£2.40', description: null },
      { name: 'Bottled Still Water', price: '£2.20', description: null },
      { name: 'Coke', price: '£1.90', description: null },
      { name: 'Diet Coke', price: '£1.90', description: null },
      { name: 'J2O', price: '£2.40', description: null },
      { name: 'Belvoir Elderflower', price: '£2.40', description: null },
      { name: 'Belvoir Raspberry Lemonade', price: '£2.40', description: null },
      { name: 'Belvoir Ginger Beer', price: '£2.40', description: null },
      { name: 'Belvoir Organic Lemonade', price: '£2.40', description: null },
      { name: 'Orange Juice', price: '£1.60', description: null },
      { name: 'Apple Juice', price: '£1.60', description: null },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">

      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-28 pb-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-xs uppercase tracking-[0.2em] transition-colors mb-8"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
        >
          <ArrowLeft className="w-3 h-3" />
          Back to home
        </Link>
        <p
          className="text-xs tracking-[0.3em] text-gray-400 mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
        >
          HUNGRY BIRDS · OAKHAM
        </p>
        <h1
          className="text-5xl md:text-6xl text-gray-900 mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Our Menu
        </h1>
        <p
          className="text-sm text-gray-400 max-w-md mx-auto"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
        >
          Freshly prepared every day using quality local ingredients.
        </p>
      </div>

      {/* Menu Sections */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 space-y-16">
        {menuSections.map((section, si) => (
          <div key={si}>
            {/* Section title */}
            <div className="flex items-center gap-6 mb-6">
              <h2
                className="text-3xl sm:text-4xl text-gray-900 whitespace-nowrap"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                {section.title}
              </h2>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Note */}
            {section.note && (
              <p
                className="text-sm text-gray-500 mb-6 italic"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                {section.note}
              </p>
            )}

            {/* Items */}
            {section.items.length > 0 && (
              <div className="space-y-1">
                {section.items.map((item, ii) => (
                  <div
                    key={ii}
                    className={`flex justify-between items-start gap-6 py-3 border-b border-gray-100 ${'bg-stone-50 px-4 -mx-4' 
                    }`}
                  >
                    <div className="flex-1">
                      <p
                        className="text-gray-900"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '0.95rem',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {item.name}
                      </p>
                      {item.description && (
                        <p
                          className="text-xs text-gray-400 mt-1 leading-relaxed"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                    <p
                      className="text-gray-900 whitespace-nowrap tabular-nums"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.9rem' }}
                    >
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Extras */}
            {section.extras && (
              <div className="mt-4 space-y-1">
                {section.extras.map((extra, ei) => (
                  <p
                    key={ei}
                    className="text-xs text-gray-400 italic"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                  >
                    {extra}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Footer note */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p
            className="text-xs text-gray-400 tracking-[0.15em]"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            MENU SUBJECT TO CHANGE · PLEASE SPEAK TO A MEMBER OF STAFF FOR ALLERGEN INFORMATION
          </p>
        </div>
      </div>
    </div>
  );
}