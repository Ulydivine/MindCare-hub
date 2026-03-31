import React, { useState } from 'react'
import { 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  Bookmark,
  Clock,
  Eye
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { mockResources, resourceCategories } from '../data/mockData'

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeTab, setActiveTab] = useState('all')
  const [bookmarkedResources, setBookmarkedResources] = useState<string[]>([])

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
    const matchesTab = activeTab === 'all' || resource.type === activeTab
    return matchesSearch && matchesCategory && matchesTab
  })

  const toggleBookmark = (resourceId: string) => {
    setBookmarkedResources(prev => 
      prev.includes(resourceId)
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    )
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />
      case 'guide': return <FileText className="h-4 w-4" />
      default: return <BookOpen className="h-4 w-4" />
    }
  }

  const getResourceTypeName = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isAuthenticated={true} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resources Library</h1>
          <p className="text-gray-600">
            Evidence-based articles, videos, and guides to support your mental wellness journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search resources by title or topic..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {resourceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 border-b border-gray-200">
            {[
              { id: 'all', label: 'All' },
              { id: 'article', label: 'Articles' },
              { id: 'video', label: 'Videos' },
              { id: 'guide', label: 'Guides' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="card group hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    {getResourceIcon(resource.type)}
                    <span>{getResourceTypeName(resource.type)}</span>
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => toggleBookmark(resource.id)}
                    className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                      bookmarkedResources.includes(resource.id)
                        ? 'bg-primary-600 text-white'
                        : 'bg-white/90 text-gray-600 hover:text-primary-600'
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${bookmarkedResources.includes(resource.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                {resource.featured && (
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">
                    {resource.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {resource.readTime}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {resource.title}
                </h3>
                
                <p className="text-sm text-gray-600 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {resource.type === 'video' ? 'Watch' : 'Read'}
                  </button>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>234 views</span>
                    <span>•</span>
                    <span>4.8 ★</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="card text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">
              {searchTerm ? 'Try adjusting your search terms' : 'No resources available in this category'}
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredResources.length > 0 && filteredResources.length >= 6 && (
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Resources
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default ResourcesPage
