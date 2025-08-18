import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91-9852800116</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>contact@jeettecnika.in</span>
            </div>
          </div>
          <div className="text-xs">
            GSTIN: 10AAQFJ6650B1ZO | ISO 9001:2015 Certified
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-blue-900">
              JEETTECNIKA
            </div>
            <div className="hidden md:block text-sm text-gray-600">
              Engineering Trust. Delivering Excellence.
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-900 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-900 font-medium">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-900 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-900 font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}