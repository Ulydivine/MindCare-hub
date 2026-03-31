import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Shield,
  Heart
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { mockAssessmentQuestions } from '../data/mockData'

interface AssessmentAnswer {
  questionId: number
  answer: string
}

const SelfAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [wellnessScore, setWellnessScore] = useState(0)

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = answers.filter(a => a.questionId !== mockAssessmentQuestions[currentQuestion].id)
    newAnswers.push({
      questionId: mockAssessmentQuestions[currentQuestion].id,
      answer
    })
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < mockAssessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    // Simple scoring algorithm - in real app this would be more sophisticated
    let totalScore = 0
    answers.forEach(answer => {
      // Convert answer to numeric score (0-4 scale)
      const answerIndex = mockAssessmentQuestions
        .find(q => q.id === answer.questionId)?.options
        .indexOf(answer.answer) || 0
      totalScore += (4 - answerIndex) // Reverse so positive answers get higher scores
    })
    
    const finalScore = Math.round((totalScore / (mockAssessmentQuestions.length * 4)) * 10)
    setWellnessScore(finalScore)
    setIsCompleted(true)
  }

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === mockAssessmentQuestions[currentQuestion].id)?.answer
  }

  const getRecommendations = () => {
    if (wellnessScore >= 8) {
      return [
        "Keep up your great mental health habits",
        "Consider journaling to maintain self-awareness",
        "Share your experiences to help others"
      ]
    } else if (wellnessScore >= 6) {
      return [
        "Book a session with a counselor",
        "Try mindfulness exercises daily",
        "Join our community forum for support"
      ]
    } else {
      return [
        "Schedule an appointment with a counselor soon",
        "Practice self-care activities regularly",
        "Reach out to trusted friends or family"
      ]
    }
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation isAuthenticated={true} />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            {/* Success Animation */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Assessment Complete
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for completing your mental wellness assessment
              </p>
            </div>

            {/* Score Display */}
            <div className="gradient-primary rounded-2xl p-8 text-white mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Wellness Score</h2>
              <div className="text-6xl font-bold mb-4">{wellnessScore}/10</div>
              <p className="text-lg opacity-90">
                {wellnessScore >= 8 ? "Excellent! You're maintaining great mental health." :
                 wellnessScore >= 6 ? "Good! You're doing well with room for improvement." :
                 wellnessScore >= 4 ? "Moderate. Consider seeking additional support." :
                 "It's important to reach out for help and support."}
              </p>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommended Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getRecommendations().map((recommendation, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Heart className="h-5 w-5 text-primary-600" />
                    </div>
                    <p className="text-gray-700">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-primary px-8 py-3">
                Book a Session
              </Link>
              <Link to="/dashboard" className="btn-secondary px-8 py-3">
                Back to Dashboard
              </Link>
            </div>

            {/* Privacy Note */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <p className="text-sm text-blue-800">
                  Your assessment results are private and secure. They're only visible to you and your counselor (if you choose to share).
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isAuthenticated={true} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Mental Wellness Assessment</h1>
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {mockAssessmentQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="gradient-primary h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / mockAssessmentQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            {mockAssessmentQuestions[currentQuestion].question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4">
            {mockAssessmentQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  getCurrentAnswer() === option
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    getCurrentAnswer() === option
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-gray-300'
                  }`}>
                    {getCurrentAnswer() === option && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!getCurrentAnswer()}
            className="flex items-center space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{currentQuestion === mockAssessmentQuestions.length - 1 ? 'Complete' : 'Next'}</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Privacy Note */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-blue-800">
              Your responses are confidential and will only be used to provide personalized recommendations and support.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SelfAssessment
