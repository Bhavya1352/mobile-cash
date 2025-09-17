import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MobileLayout from '@/components/MobileLayout';
import welcomeIllustration from '@/assets/welcome-illustration.png';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <MobileLayout>
      <div className="gradient-primary h-full flex flex-col items-center justify-between text-center p-8">
        {/* Skip Button */}
        <div className="w-full flex justify-end">
          <Button 
            variant="banking-ghost" 
            onClick={handleSkip}
            className="text-white hover:bg-white/20"
          >
            Skip
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          {/* Illustration */}
          <div className="w-72 h-48 mb-8 fade-in-up">
            <img 
              src={welcomeIllustration} 
              alt="Welcome to PopX Banking" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title and Description */}
          <div className="space-y-4 fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to PopX
            </h1>
            <p className="text-white/90 text-lg leading-relaxed max-w-sm">
              Your modern banking experience starts here. Send, receive, and manage your money with ease.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-4 fade-in-up">
          <Button 
            variant="banking-outline" 
            size="lg" 
            onClick={handleGetStarted}
            className="w-full bg-white text-primary hover:bg-white/90 border-white shadow-lg"
          >
            Get Started
          </Button>
          
          <Button 
            variant="banking-light" 
            size="lg" 
            onClick={() => navigate('/login')}
            className="w-full text-white border-white/30 bg-white/10 hover:bg-white/20"
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Onboarding;