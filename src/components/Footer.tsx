import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, HelpCircle, Shield, FileText, AlertCircle } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-semibold">MindCare Hub</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your safe space for mental wellness and support. We're here to help you on your journey to better mental health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@mindcarehub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+250798753665</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-gray-400 hover:text-primary-400 transition-colors">
                About Us
              </Link>
              <Link to="/counselors" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Our Counselors
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Blog
              </Link>
              <Link to="/faq" className="block text-gray-400 hover:text-primary-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm">
              <Link to="/help" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors">
                <HelpCircle className="h-4 w-4" />
                <span>Help Center</span>
              </Link>
              <Link to="/privacy" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors">
                <Shield className="h-4 w-4" />
                <span>Privacy Policy</span>
              </Link>
              <Link to="/terms" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors">
                <FileText className="h-4 w-4" />
                <span>Terms of Service</span>
              </Link>
              <Link to="/crisis" className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors">
                <AlertCircle className="h-4 w-4" />
                <span>Crisis Resources</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Crisis Hotline */}
        <div className="mt-8 p-4 bg-red-900/20 border border-red-800 rounded-lg">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-6 w-6 text-red-400" />
            <div>
              <p className="font-semibold text-red-400">Crisis Support Available 24/7</p>
              <p className="text-sm text-gray-400">
                If you're in immediate crisis, call our hotline: <span className="font-semibold">+250798753665</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 MindCare Hub. All rights reserved. Your privacy and safety are our priority.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
