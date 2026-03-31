import React, { useState } from 'react'
import { 
  Users, 
  Search, 
  Plus, 
  Heart, 
  MessageCircle, 
  Filter,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { mockForumPosts, forumCategories } from '../data/mockData'

const CommunityForum: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeTab, setActiveTab] = useState('recent')
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'Anxiety',
    isAnonymous: true
  })

  const filteredPosts = mockForumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (activeTab) {
      case 'popular':
        return b.likes - a.likes
      case 'trending':
        return b.replies - a.replies
      default: // recent
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    }
  })

  const handleNewPost = () => {
    // In a real app, this would save to a database
    console.log('New post:', newPost)
    setShowNewPostForm(false)
    setNewPost({
      title: '',
      content: '',
      category: 'Anxiety',
      isAnonymous: true
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isAuthenticated={true} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Forum</h1>
              <p className="text-gray-600">
                A safe space to share experiences and support each other
              </p>
            </div>
            <button
              onClick={() => setShowNewPostForm(!showNewPostForm)}
              className="btn-primary mt-4 sm:mt-0"
            >
              <Plus className="h-5 w-5" />
              <span>New Post</span>
            </button>
          </div>

          {/* Safe Space Guidelines */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Safe Space Guidelines</p>
                <ul className="list-disc list-inside space-y-1 text-blue-700">
                  <li>Be respectful and supportive</li>
                  <li>Share experiences, not medical advice</li>
                  <li>Protect your privacy - use anonymous posting</li>
                  <li>Report inappropriate content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* New Post Form */}
        {showNewPostForm && (
          <div className="card mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Post</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {forumCategories.filter(cat => cat !== 'All').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Give your post a title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Share your thoughts or experiences..."
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={newPost.isAnonymous}
                  onChange={(e) => setNewPost({...newPost, isAnonymous: e.target.checked})}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  Post anonymously
                </label>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleNewPost}
                  disabled={!newPost.title.trim() || !newPost.content.trim()}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post Anonymously
                </button>
                <button
                  onClick={() => setShowNewPostForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Category Filter */}
            <div className="card mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {forumCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Forum Stats */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Forum Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Posts</span>
                  <span className="font-medium">{mockForumPosts.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Members</span>
                  <span className="font-medium">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Today's Posts</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Tabs */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className="flex space-x-1 border-b border-gray-200">
                {[
                  { id: 'recent', label: 'Recent', icon: Clock },
                  { id: 'popular', label: 'Popular', icon: Heart },
                  { id: 'trending', label: 'Trending', icon: TrendingUp }
                ].map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2 border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
              {sortedPosts.map((post) => (
                <div key={post.id} className="card hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {post.isAnonymous ? 'Anonymous' : post.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(post.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.replies}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {sortedPosts.length === 0 && (
              <div className="card text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm ? 'Try adjusting your search terms' : 'Be the first to share in this category'}
                </p>
                {!searchTerm && (
                  <button
                    onClick={() => setShowNewPostForm(true)}
                    className="btn-primary"
                  >
                    Create First Post
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CommunityForum
