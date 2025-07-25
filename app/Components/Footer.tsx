export default function Footer() {
  return (
    <footer className="bg-earth-800 text-earth-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-green-400 mb-4">
              The Sahel Bridge
            </h3>
            <p className="text-earth-300 leading-relaxed">
              Connecting conscious consumers with premium, sustainably-sourced
              agricultural products from Africa. Building bridges between
              communities and creating positive impact through ethical trade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-earth-300">
              <li></li>
              <li>+233 (0) 20 123 4567</li>
              <li>Accra, Ghana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-700 mt-12 pt-8 text-center text-earth-400">
          <p>&copy; 2025 The Sahel Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
