
import { Link } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '../components/ui/button';
import { ArrowRight, LogIn } from 'lucide-react';

const LandingPage = () => {
  return (
    <MobileLayout>
      <div className="flex flex-col justify-end items-start h-full p-8 bg-background">
        <div className="mb-auto pt-24">
          <h1 className="text-5xl font-bold text-primary mb-4">Welcome to PopX</h1>
          <p className="text-muted-foreground text-lg mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full">
          <Link to="/signup" className="w-full">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg py-6 rounded-xl shadow-lg mb-4">
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/login" className="w-full">
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 text-lg py-6 rounded-xl shadow-lg">
              Already Registered? Login
              <LogIn className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
};

export default LandingPage;
