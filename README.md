# MindCare Hub

A comprehensive mental health web application designed for African youth aged 16-30, providing a safe, accessible, and stigma-free platform for mental wellness support.

##  Features

- **Self-Assessment Tools**: Quick mental wellness checks to understand your current state
- **Virtual Counseling**: Connect with licensed counselors from the comfort of your home
- **Community Forum**: Safe space to share experiences and support others
- **Resource Library**: Access articles, videos, and guides on mental health topics
- **Privacy & Security**: Your data is encrypted and identity is protected
- **Licensed Professionals**: All counselors are certified and experienced

##  Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3 with custom design system
- **Routing**: React Router v6
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **State Management**: React hooks (useState, useEffect)
- **Date Handling**: date-fns
- **Calendar**: react-day-picker

##  Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mindcare-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Project Structure

```
src/
├── app/
│   ├── routes.tsx          # React Router configuration
├── components/
│   ├── Navigation.tsx       # Main navigation component
│   └── Footer.tsx          # Footer component
├── data/
│   └── mockData.ts         # Mock data and interfaces
├── lib/
│   └── utils.ts            # Utility functions
├── pages/
│   ├── LandingPage.tsx      # Home page
│   ├── LoginPage.tsx        # Login page
│   ├── SignupPage.tsx       # Sign up page
│   ├── Dashboard.tsx        # Main dashboard
│   ├── SelfAssessment.tsx   # Assessment tool
│   ├── BookingPage.tsx      # Session booking
│   ├── CommunityForum.tsx   # Forum page
│   ├── ResourcesPage.tsx    # Resources library
│   └── ProfilePage.tsx     # User profile
├── main.tsx                # App entry point
└── index.css               # Global styles and Tailwind
```

##  Design System

### Color Palette

- **Primary**: Emerald/Teal (#10B981, #14B8A6, #0D9488)
- **Secondary**: Blue (#3B82F6, #60A5FA)
- **Neutral**: Grays (#F9FAFB, #F3F4F6, #E5E7EB)
- **Warm Accents**: Amber, Rose for highlights

### Typography

- **Font Family**: Inter (system-ui fallback)
- **Base Size**: 16px
- **Scale**: Responsive heading sizes with proper hierarchy

##  Authentication

The application uses a simple mock authentication system:

- **Demo Credentials**: 
  - Email: `demo@mindcarehub.org`
  - Password: `demo123`

Authentication state is stored in localStorage for demo purposes.

##  Responsive Design

- **Mobile-first approach**
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
- **Adaptive layouts** for different screen sizes

##  Pages Overview

### Public Pages
- **Landing Page**: Introduction to the platform with features and testimonials
- **Login**: User authentication with privacy assurances
- **Signup**: Account creation with form validation

### Protected Pages (Authentication Required)
- **Dashboard**: Personal wellness overview with quick actions and activity timeline
- **Self-Assessment**: 8-question mental wellness assessment with scoring
- **Booking**: Schedule counseling sessions with licensed professionals
- **Forum**: Community support with anonymous posting options
- **Resources**: Library of mental health articles, videos, and guides
- **Profile**: User settings and activity history

##  Mock Data

The application includes comprehensive mock data:

- User profiles with wellness scores
- 4 licensed counselors with specialties
- 8 assessment questions with scoring logic
- Forum posts with engagement metrics
- Mental health resources (articles, videos, guides)
- Upcoming sessions and activity timeline

##  Development Notes
- Built using React with component-based architecture  
- Uses mock data instead of real backend  
- Focus on UI/UX and user experience  

### Form Validation
- Client-side validation on all forms
- Password confirmation matching
- Email format validation
- Required field validation

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- WCAG AA compliance considerations

##  Deployment
The project can be deployed using Netlify, Vercel, or any static hosting platform.

### Preview Production Build
```bash
npm run preview
```

The build output will be in the `dist` folder, ready for deployment to any static hosting service.


## 📄 License
- Virtual Counseling (Mock Feature using sample data)
- Simulated Professionals (Demo purposes only)

##  Crisis Support

If you or someone you know is in immediate crisis:

- **Rwanda Crisis Hotline**: +250798753665
- **Available 24/7** for emergency support

##  Contact

- **Email**: support@mindcarehub.com
- **Phone**: +250798753665
- **Location**: Kigali, Rwanda

---

**MindCare Hub** - Your mental wellness matters. We're here to support your journey.
