import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Clock, 
  Users, 
  BookOpen, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Self-Assessment',
      description: 'Quick mental wellness checks to understand your current state',
    },
    {
      icon: Clock,
      title: 'Virtual Counseling',
      description: 'Connect with licensed counselors from the comfort of your home',
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Safe space to share experiences and support others',
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Access articles, videos, and guides on mental health topics',
    },
    {
      icon: Shield,
      title: 'Privacy & Safety',
      description: 'Your data is secure and your identity is protected',
    },
    {
      icon: CheckCircle,
      title: 'Licensed Professionals',
      description: 'All counselors are certified and experienced professionals',
    },
  ]

  const stats = [
    { number: '10,000+', label: 'Youth Supported' },
    { number: '500+', label: 'Licensed Counselors' },
    { number: '24/7', label: 'Support Available' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isAuthenticated={false} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Mental Wellness
                <span className="block text-primary-600">Matters</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A safe, accessible, stigma-free platform designed specifically for African youth. 
                Get the support you need, when you need it, from professionals who understand your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="btn-primary text-lg px-8 py-4">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/assessment" className="btn-secondary text-lg px-8 py-4">
                  Take Assessment
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6 flex items-center">
                <Shield className="h-4 w-4 mr-2 text-primary-600" />
                100% confidential and secure
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=500&fit=crop&crop=face"
                alt="Happy African youth"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold">4.9/5 Rating</p>
                    <p className="text-sm text-gray-500">From 2,000+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Mental Wellness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and resources designed to support your mental health journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card group hover:border-primary-300 transition-all duration-300">
                  <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Making a Real Impact
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of youth who have taken control of their mental wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-lg opacity-90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories of Hope and Healing
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from young people like you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "MindCare Hub helped me find the courage to seek help. The counselors are understanding and truly care about your wellbeing."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold">Anonymous, 22</p>
                  <p className="text-sm text-gray-500">University Student</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The community forum made me realize I'm not alone. Sharing my story and reading others' experiences has been healing."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-semibold">K</span>
                </div>
                <div>
                  <p className="font-semibold">Anonymous, 19</p>
                  <p className="text-sm text-gray-500">College Student</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The assessment tools helped me understand what I was going through. Getting help was the best decision I ever made."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold">Anonymous, 25</p>
                  <p className="text-sm text-gray-500">Young Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-teal-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Journey to Better Mental Health Starts Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards a healthier, happier you. No judgment, just support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/resources" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-colors">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
