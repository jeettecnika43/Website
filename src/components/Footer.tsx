import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">JEETTECNIKA</h3>
            <p className="text-gray-300 text-sm mb-4">
              Engineering Trust. Delivering Excellence.
            </p>
            <p className="text-gray-400 text-sm">
              Professional engineering solutions for Indian Railways and allied industries 
              since 2020. ISO 9001:2015 certified quality management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Turnkey Contract Services</li>
              <li className="text-gray-300">Annual Maintenance Contracts</li>
              <li className="text-gray-300">Industrial Solutions</li>
              <li className="text-gray-300">Supply Chain Management</li>
              <li className="text-gray-300">Technical Consultation</li>
              <li className="text-gray-300">Facility Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mohan Kothiya, Akbarpur Panchayat</p>
                  <p>Dariyapur Block, Saran, Bihar – 841207</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+91-9852800116</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">contact@jeettecnika.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">www.jeettecnika.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 M/S JEETTECNIKA. All rights reserved. | GSTIN: 10AAQFJ6650B1ZO
          </div>
          <div className="text-sm text-gray-400">
            ISO 9001:2015 Certified | Registered under Indian Partnership Act, 1932
          </div>
        </div>
      </div>
    </footer>
  );
}