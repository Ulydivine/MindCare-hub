// Mock data for MindCare Hub application

export interface User {
  id: string
  name: string
  email: string
  age: number
  location: string
  phone?: string
  wellnessScore: number
  memberSince: string
  sessionsCompleted: number
  forumPosts: number
  resourcesRead: number
  assessmentsTaken: number
}

export interface Counselor {
  id: string
  name: string
  photo: string
  specialty: string[]
  experience: number
  rating: number
  bio: string
  languages: string[]
  available: boolean
}

export interface Session {
  id: string
  counselorId: string
  userId: string
  date: string
  time: string
  type: 'video' | 'phone' | 'text'
  status: 'upcoming' | 'completed' | 'cancelled'
  notes?: string
}

export interface AssessmentQuestion {
  id: number
  question: string
  options: string[]
}

export interface ForumPost {
  id: string
  title: string
  content: string
  author: string
  category: string
  likes: number
  replies: number
  timestamp: string
  isAnonymous: boolean
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'article' | 'video' | 'guide'
  category: string
  imageUrl: string
  readTime: string
  url: string
  featured: boolean
}

export interface ActivityItem {
  id: string
  type: 'session' | 'assessment' | 'forum_post' | 'resource_read'
  title: string
  description: string
  timestamp: string
  icon: string
}

// Mock user data
export const mockUser: User = {
  id: '1',
  name: 'Lydivine Umutesi',
  email: 'support@mindcarehub.com',
  age: 24,
  location: 'Kigali, Rwanda',
  phone: '+250798753665',
  wellnessScore: 0, // Start with 0 until user takes assessment
  memberSince: '2024-01-15',
  sessionsCompleted: 12,
  forumPosts: 8,
  resourcesRead: 23,
  assessmentsTaken: 5,
}

// Mock counselors
export const mockCounselors: Counselor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Okonkwo',
    photo: 'https://images.unsplash.com/photo-1559839734-49b21256e4b8?w=150&h=150&fit=crop&crop=face',
    specialty: ['Anxiety', 'Depression', 'Stress Management'],
    experience: 8,
    rating: 4.9,
    bio: 'Specialized in cognitive behavioral therapy and mindfulness techniques for young adults.',
    languages: ['English', 'Igbo', 'Yoruba'],
    available: true,
  },
  {
    id: '2',
    name: 'Dr. Michael Adeyemi',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    specialty: ['Academic Stress', 'Career Counseling', 'Self-Esteem'],
    experience: 6,
    rating: 4.8,
    bio: 'Focus on helping students and young professionals navigate academic and career challenges.',
    languages: ['English', 'Yoruba'],
    available: true,
  },
  {
    id: '3',
    name: 'Dr. Grace Mbaku',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    specialty: ['Trauma', 'Family Issues', 'Relationships'],
    experience: 10,
    rating: 4.9,
    bio: 'Expert in trauma-informed care and family therapy with a compassionate approach.',
    languages: ['English', 'French', 'Pidgin'],
    available: false,
  },
  {
    id: '4',
    name: 'Dr. James Okafor',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    specialty: ['Addiction', 'Anger Management', 'Life Coaching'],
    experience: 7,
    rating: 4.7,
    bio: 'Helping individuals develop healthy coping mechanisms and achieve personal growth.',
    languages: ['English', 'Igbo'],
    available: true,
  },
]

// Mock assessment questions
export const mockAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day"
    ],
  },
  {
    id: 2,
    question: "Over the past two weeks, how often have you lost interest or pleasure in activities you usually enjoy?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day"
    ],
  },
  {
    id: 3,
    question: "How often do you feel worried or anxious about things that might happen?",
    options: [
      "Never",
      "Rarely",
      "Sometimes",
      "Often",
      "Always"
    ],
  },
  {
    id: 4,
    question: "How would you rate your sleep quality over the past month?",
    options: [
      "Excellent - I sleep well every night",
      "Good - Mostly good sleep with occasional issues",
      "Fair - Some difficulties sleeping",
      "Poor - Frequent sleep problems"
    ],
  },
  {
    id: 5,
    question: "How would you describe your current stress level?",
    options: [
      "Very low - I feel relaxed and in control",
      "Low - Minor stress that's manageable",
      "Moderate - Some stress but still coping",
      "High - Significant stress affecting daily life",
      "Very high - Overwhelmed and struggling"
    ],
  },
  {
    id: 6,
    question: "How often do you feel overwhelmed by your responsibilities or emotions?",
    options: [
      "Never",
      "Rarely",
      "Sometimes",
      "Often",
      "Always"
    ],
  },
  {
    id: 7,
    question: "How comfortable do you feel sharing your feelings with others?",
    options: [
      "Very comfortable - I openly share my feelings",
      "Comfortable - I share when I feel safe",
      "Somewhat comfortable - I'm selective about who I share with",
      "Not very comfortable - I rarely share my feelings",
      "Not comfortable at all - I keep feelings to myself"
    ],
  },
  {
    id: 8,
    question: "How often do you engage in activities that bring you joy and happiness?",
    options: [
      "Daily - I make time for enjoyable activities every day",
      "Several times a week",
      "Once a week",
      "Rarely - I don't have much time for enjoyable activities",
      "Never - I can't remember the last time I did something just for fun"
    ],
  },
]

// Mock forum posts
export const mockForumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Feeling overwhelmed with university studies',
    content: 'I\'m in my final year and the pressure is getting to me. Has anyone else felt this way? How do you cope?',
    author: 'Anonymous',
    category: 'Academic Stress',
    likes: 24,
    replies: 15,
    timestamp: '2024-03-15T10:30:00Z',
    isAnonymous: true,
  },
  {
    id: '2',
    title: 'Small wins that made my day better',
    content: 'Today I managed to get out of bed and go for a walk. Sometimes the smallest victories matter most. Share your small wins!',
    author: 'Hopeful_Student',
    category: 'Wellness',
    likes: 45,
    replies: 32,
    timestamp: '2024-03-15T08:15:00Z',
    isAnonymous: false,
  },
  {
    id: '3',
    title: 'Dealing with anxiety before exams',
    content: 'Exams are coming up and my anxiety is through the roof. Any tips for managing test anxiety?',
    author: 'Anon_Learner',
    category: 'Anxiety',
    likes: 18,
    replies: 28,
    timestamp: '2024-03-14T16:45:00Z',
    isAnonymous: true,
  },
  {
    id: '4',
    title: 'Finding motivation when everything feels pointless',
    content: 'Lately I\'ve been struggling to find motivation for anything. How do you keep going when you feel like giving up?',
    author: 'Lost_but_searching',
    category: 'Depression',
    likes: 67,
    replies: 41,
    timestamp: '2024-03-14T12:20:00Z',
    isAnonymous: true,
  },
  {
    id: '5',
    title: 'My journey with meditation',
    content: 'Started meditating 30 days ago and it\'s been transformative. Here\'s what worked for me...',
    author: 'Mindful_Journey',
    category: 'Mindfulness',
    likes: 89,
    replies: 23,
    timestamp: '2024-03-13T14:30:00Z',
    isAnonymous: false,
  },
  {
    id: '6',
    title: 'Family doesn\'t understand mental health',
    content: 'My family thinks I\'m just being dramatic when I talk about my mental health. How do you deal with unsupportive family?',
    author: 'Misunderstood',
    category: 'Family',
    likes: 156,
    replies: 67,
    timestamp: '2024-03-13T09:15:00Z',
    isAnonymous: true,
  },
]

// Mock resources
export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Anxiety: A Complete Guide',
    description: 'Learn about the different types of anxiety, symptoms, and effective coping strategies.',
    type: 'guide',
    category: 'Anxiety',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
    readTime: '8 min read',
    url: '#',
    featured: true,
  },
  {
    id: '2',
    title: '5-Minute Breathing Exercises for Immediate Stress Relief',
    description: 'Quick and effective breathing techniques you can use anywhere to calm your mind.',
    type: 'video',
    category: 'Stress',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    readTime: '5 min watch',
    url: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Building Healthy Sleep Habits for Better Mental Health',
    description: 'Discover how quality sleep impacts your mental wellness and tips for better rest.',
    type: 'article',
    category: 'Self-Care',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f07b55?w=400&h=250&fit=crop',
    readTime: '6 min read',
    url: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'Depression in Young Adults: Signs and Support',
    description: 'Recognizing the signs of depression and knowing when and how to seek help.',
    type: 'guide',
    category: 'Depression',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
    readTime: '10 min read',
    url: '#',
    featured: true,
  },
  {
    id: '5',
    title: 'Mindfulness Meditation for Beginners',
    description: 'A step-by-step guide to starting your mindfulness practice.',
    type: 'video',
    category: 'Mindfulness',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    readTime: '12 min watch',
    url: '#',
    featured: false,
  },
  {
    id: '6',
    title: 'Managing Academic Pressure Without Burning Out',
    description: 'Strategies for students to balance academic demands with mental wellness.',
    type: 'article',
    category: 'Academic Stress',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    readTime: '7 min read',
    url: '#',
    featured: false,
  },
  {
    id: '7',
    title: 'Building Self-Esteem: A Practical Approach',
    description: 'Actionable steps to improve your self-confidence and self-worth.',
    type: 'guide',
    category: 'Self-Esteem',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    readTime: '9 min read',
    url: '#',
    featured: false,
  },
  {
    id: '8',
    title: 'Healthy Communication in Relationships',
    description: 'Learn how to express your needs and listen effectively in your relationships.',
    type: 'article',
    category: 'Relationships',
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=250&fit=crop',
    readTime: '8 min read',
    url: '#',
    featured: false,
  },
]

// Mock upcoming sessions
export const mockUpcomingSessions: Session[] = [
  {
    id: '1',
    counselorId: '1',
    userId: '1',
    date: '2024-03-20',
    time: '10:00 AM',
    type: 'video',
    status: 'upcoming',
  },
  {
    id: '2',
    counselorId: '2',
    userId: '1',
    date: '2024-03-22',
    time: '2:00 PM',
    type: 'phone',
    status: 'upcoming',
  },
]

// Mock activity timeline
export const mockActivityItems: ActivityItem[] = [
  {
    id: '1',
    type: 'session',
    title: 'Session with Dr. Sarah Okonkwo',
    description: 'Completed video session about anxiety management',
    timestamp: '2024-03-14T10:00:00Z',
    icon: 'Calendar',
  },
  {
    id: '2',
    type: 'assessment',
    title: 'Mental Wellness Assessment',
    description: 'Completed assessment with score 7.5/10',
    timestamp: '2024-03-13T15:30:00Z',
    icon: 'ClipboardList',
  },
  {
    id: '3',
    type: 'forum_post',
    title: 'Posted in Community Forum',
    description: 'Shared experience with academic stress',
    timestamp: '2024-03-12T09:15:00Z',
    icon: 'Users',
  },
  {
    id: '4',
    type: 'resource_read',
    title: 'Read: Understanding Anxiety Guide',
    description: 'Completed 8-minute guide on anxiety management',
    timestamp: '2024-03-11T14:20:00Z',
    icon: 'BookOpen',
  },
  {
    id: '5',
    type: 'session',
    title: 'Session with Dr. Michael Adeyemi',
    description: 'Completed phone session about career planning',
    timestamp: '2024-03-10T11:00:00Z',
    icon: 'Calendar',
  },
]

// Forum categories
export const forumCategories = [
  'All',
  'Anxiety',
  'Depression',
  'Social',
  'Family',
  'Wellness',
  'Support',
  'Academic Stress',
  'Mindfulness',
  'Relationships',
]

// Resource categories
export const resourceCategories = [
  'All',
  'Anxiety',
  'Depression',
  'Stress',
  'Mindfulness',
  'Self-Care',
  'Wellness',
  'Relationships',
  'Academic Stress',
  'Self-Esteem',
]
