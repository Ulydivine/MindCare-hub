import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Calendar, 
  Users, 
  BookOpen, 
  TrendingUp,
  Clock,
  MessageCircle,
  Video,
  Phone
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  mockUser, 
  mockUpcomingSessions, 
  mockActivityItems,
  mockResources 
} from '../data/mockData'

const Dashboard: React.FC = () => {
  // Get the logged-in user's email from localStorage
  const userEmail = localStorage.getItem('userEmail') || 'User'
  // Create a display name from the email (take the part before @)
  const displayName = userEmail.split('@')[0].charAt(0).toUpperCase() + userEmail.split('@')[0].slice(1)
  
  // Create a dynamic user object based on logged-in user
  const currentUser = {
    ...mockUser,
    name: displayName,
    email: userEmail
  }
  const quickActions = [
    {
      icon: Heart,
      title: 'Start Assessment',
      description: 'Check your mental wellness',
      link: '/assessment',
      color: 'bg-red-100 text-red-600 hover:bg-red-200'
    },
    {
      icon: Calendar,
      title: 'Book Session',
      description: 'Schedule with a counselor',
      link: '/booking',
      color: 'bg-blue-100 text-blue-600 hover:bg-blue-200'
    },
    {
      icon: Users,
      title: 'Join Forum',
      description: 'Connect with community',
      link: '/forum',
      color: 'bg-green-100 text-green-600 hover:bg-green-200'
    }
  ]

  const getCounselorName = (counselorId: string) => {
    const counselors = {
      '1': 'Dr. Sarah Okonkwo',
      '2': 'Dr. Michael Adeyemi',
      '3': 'Dr. Grace Mbaku',
      '4': 'Dr. James Okafor'
    }
    return counselors[counselorId as keyof typeof counselors] || 'Unknown Counselor'
  }

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />
      case 'phone': return <Phone className="h-4 w-4" />
      default: return <MessageCircle className="h-4 w-4" />
    }
  }

  const getActivityIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Calendar: <Calendar className="h-5 w-5" />,
      ClipboardList: <Heart className="h-5 w-5" />,
      Users: <Users className="h-5 w-5" />,
      BookOpen: <BookOpen className="h-5 w-5" />
    }
    return icons[iconName] || <Heart className="h-5 w-5" />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isAuthenticated={true} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {currentUser.name}!
          </h1>
          <p className="text-gray-600">
            Here's your mental wellness overview for today
          </p>
        </div>

        {/* Wellness Score Card */}
        <div className="gradient-primary rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {currentUser.wellnessScore > 0 ? 'Your Wellness Score' : 'Take Your First Assessment'}
              </h2>
              {currentUser.wellnessScore > 0 ? (
                <>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-bold">{currentUser.wellnessScore}</span>
                    <span className="text-2xl opacity-75">/10</span>
                  </div>
                  <p className="mt-4 opacity-90">
                    You're doing great! Keep up the positive momentum.
                  </p>
                  <Link 
                    to="/assessment" 
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mt-6"
                  >
                    <TrendingUp className="h-5 w-5" />
                    <span>Retake Assessment</span>
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-bold">--</span>
                    <span className="text-2xl opacity-75">/10</span>
                  </div>
                  <p className="mt-4 opacity-90">
                    Start your wellness journey with a quick mental health assessment.
                  </p>
                  <Link 
                    to="/assessment" 
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mt-6"
                  >
                    <TrendingUp className="h-5 w-5" />
                    <span>Take Assessment</span>
                  </Link>
                </>
              )}
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-16 w-16" />
                </div>
                <div className="text-center">
                  <p className="text-sm opacity-75">
                    {currentUser.wellnessScore > 0 ? 'Last Assessment' : 'Not Started'}
                  </p>
                  <p className="font-semibold">
                    {currentUser.wellnessScore > 0 ? '2 days ago' : 'Take your first assessment'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link
                key={index}
                to={action.link}
                className="card group hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${action.color} transition-colors`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600">
                  {action.description}
                </p>
              </Link>
            )
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Sessions</h2>
            <div className="space-y-4">
              {mockUpcomingSessions.map((session) => (
                <div key={session.id} className="card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        {getSessionIcon(session.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {getCounselorName(session.counselorId)}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{session.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{session.time}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="btn-primary px-4 py-2 text-sm">
                      Join
                    </button>
                  </div>
                </div>
              ))}
              {mockUpcomingSessions.length === 0 && (
                <div className="card text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No upcoming sessions</p>
                  <Link to="/booking" className="btn-primary">
                    Book a Session
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {mockActivityItems.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    {getActivityIcon(activity.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Resources */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recommended Resources</h2>
            <Link to="/resources" className="text-primary-600 hover:text-primary-700 font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockResources.slice(0, 3).map((resource) => (
              <div key={resource.id} className="card group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <span className="text-xs text-gray-500">{resource.readTime}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">
              {mockUser.sessionsCompleted}
            </div>
            <p className="text-sm text-gray-600">Sessions Completed</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-secondary-600 mb-1">
              {mockUser.forumPosts}
            </div>
            <p className="text-sm text-gray-600">Forum Posts</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {mockUser.resourcesRead}
            </div>
            <p className="text-sm text-gray-600">Resources Read</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-amber-600 mb-1">
              {mockUser.assessmentsTaken}
            </div>
            <p className="text-sm text-gray-600">Assessments Taken</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Dashboard
