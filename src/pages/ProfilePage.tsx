import React, { useState } from 'react'
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Shield,
  Bell,
  FileText,
  Settings,
  Eye,
  EyeOff,
  Save,
  X
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { mockUser } from '../data/mockData'

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal')
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    age: mockUser.age,
    phone: mockUser.phone || '',
    location: mockUser.location
  })
  const [privacySettings, setPrivacySettings] = useState({
    anonymousMode: false,
    profileVisibility: 'public',
    shareProgress: true
  })
  const [notificationSettings, setNotificationSettings] = useState({
    emailReminders: true,
    emailResources: true,
    emailForumReplies: true,
    pushCheckins: true,
    pushCommunity: false
  })

  const handleSave = () => {
    // In a real app, this would save to a database
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      name: mockUser.name,
      email: mockUser.email,
      age: mockUser.age,
      phone: mockUser.phone || '',
      location: mockUser.location
    })
    setIsEditing(false)
  }

  const tabs = [
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'history', label: 'History', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isAuthenticated={true} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="card text-center mb-6">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <User className="h-12 w-12 text-primary-600" />
                </div>
                <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
                  <Settings className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{mockUser.name}</h2>
              <p className="text-gray-600 mb-4">{mockUser.email}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{mockUser.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Member since {mockUser.memberSince}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Sessions</span>
                  <span className="font-medium">{mockUser.sessionsCompleted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Forum Posts</span>
                  <span className="font-medium">{mockUser.forumPosts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Resources Read</span>
                  <span className="font-medium">{mockUser.resourcesRead}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Assessments</span>
                  <span className="font-medium">{mockUser.assessmentsTaken}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="flex space-x-1 border-b border-gray-200 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 border-b-2 transition-colors ${
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

            {/* Personal Tab */}
            {activeTab === 'personal' && (
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn-primary px-4 py-2"
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="btn-primary px-4 py-2 flex items-center space-x-2"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="btn-secondary px-4 py-2 flex items-center space-x-2"
                      >
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div className="card">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Privacy Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Anonymous Mode</h3>
                        <p className="text-sm text-gray-600">Post in forums anonymously by default</p>
                      </div>
                      <button
                        onClick={() => setPrivacySettings({...privacySettings, anonymousMode: !privacySettings.anonymousMode})}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          privacySettings.anonymousMode ? 'bg-primary-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          privacySettings.anonymousMode ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Profile Visibility</h3>
                        <p className="text-sm text-gray-600">Control who can see your profile</p>
                      </div>
                      <select
                        value={privacySettings.profileVisibility}
                        onChange={(e) => setPrivacySettings({...privacySettings, profileVisibility: e.target.value})}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="friends">Friends Only</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Share Progress</h3>
                        <p className="text-sm text-gray-600">Allow counselors to see your assessment history</p>
                      </div>
                      <button
                        onClick={() => setPrivacySettings({...privacySettings, shareProgress: !privacySettings.shareProgress})}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          privacySettings.shareProgress ? 'bg-primary-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          privacySettings.shareProgress ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="btn-primary">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Email Notifications
                    </h3>
                    <div className="space-y-4 ml-7">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Session Reminders</p>
                          <p className="text-sm text-gray-600">Get reminded about upcoming sessions</p>
                        </div>
                        <button
                          onClick={() => setNotificationSettings({...notificationSettings, emailReminders: !notificationSettings.emailReminders})}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationSettings.emailReminders ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notificationSettings.emailReminders ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">New Resources</p>
                          <p className="text-sm text-gray-600">Weekly digest of new resources</p>
                        </div>
                        <button
                          onClick={() => setNotificationSettings({...notificationSettings, emailResources: !notificationSettings.emailResources})}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationSettings.emailResources ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notificationSettings.emailResources ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Forum Replies</p>
                          <p className="text-sm text-gray-600">When someone replies to your posts</p>
                        </div>
                        <button
                          onClick={() => setNotificationSettings({...notificationSettings, emailForumReplies: !notificationSettings.emailForumReplies})}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationSettings.emailForumReplies ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notificationSettings.emailForumReplies ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      Push Notifications
                    </h3>
                    <div className="space-y-4 ml-7">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Daily Check-ins</p>
                          <p className="text-sm text-gray-600">Daily wellness reminders</p>
                        </div>
                        <button
                          onClick={() => setNotificationSettings({...notificationSettings, pushCheckins: !notificationSettings.pushCheckins})}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationSettings.pushCheckins ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notificationSettings.pushCheckins ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Community Activity</p>
                          <p className="text-sm text-gray-600">Updates from forum posts</p>
                        </div>
                        <button
                          onClick={() => setNotificationSettings({...notificationSettings, pushCommunity: !notificationSettings.pushCommunity})}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationSettings.pushCommunity ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notificationSettings.pushCommunity ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Activity History</h2>
                
                <div className="space-y-4">
                  {/* Sample history items */}
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Session with Dr. Sarah Okonkwo</h3>
                      <p className="text-sm text-gray-600">Completed video session about anxiety management</p>
                      <p className="text-xs text-gray-500 mt-1">March 14, 2024 at 10:00 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Mental Wellness Assessment</h3>
                      <p className="text-sm text-gray-600">Completed assessment with score 7.5/10</p>
                      <p className="text-xs text-gray-500 mt-1">March 13, 2024 at 3:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <User className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Posted in Community Forum</h3>
                      <p className="text-sm text-gray-600">Shared experience with academic stress</p>
                      <p className="text-xs text-gray-500 mt-1">March 12, 2024 at 9:15 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Read: Understanding Anxiety Guide</h3>
                      <p className="text-sm text-gray-600">Completed 8-minute guide on anxiety management</p>
                      <p className="text-xs text-gray-500 mt-1">March 11, 2024 at 2:20 PM</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="btn-secondary">
                    Load More History
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProfilePage
