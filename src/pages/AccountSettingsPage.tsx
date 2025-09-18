
import MobileLayout from '../components/MobileLayout';
import { Pencil } from 'lucide-react';

const AccountSettingsPage = () => {
  return (
    <MobileLayout>
      <div className="p-8 bg-background h-full">
        <h1 className="text-3xl font-bold text-primary mb-8">Account Settings</h1>
        <div className="flex items-center mb-8">
          <img src="/src/assets/user-avatar.png" alt="User Avatar" className="w-24 h-24 rounded-full mr-6 shadow-lg" />
          <div>
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-foreground">Mary Doe</h2>
              <button className="ml-3 text-muted-foreground hover:text-primary transition-colors">
                <Pencil className="h-5 w-5" />
              </button>
            </div>
            <p className="text-muted-foreground">Mary@Gmail.com</p>
          </div>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default AccountSettingsPage;
